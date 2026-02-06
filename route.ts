import { NextRequest, NextResponse } from 'next/server';

const ROAST_INTENSITY = {
  fun: [
    "That coffee could've been crypto. Oops.",
    "You chose the thing. The thing is gone. Crypto isn't.",
    "Hindsight is a brutal teacher.",
    "Well, at least you enjoyed it... right?",
    "Future you is definitely judging past you.",
    "The math doesn't lie, but you can still laugh.",
    "Could've been worse. Could've been better too.",
    "Time machines would solve this problem.",
    "Your financial advisor would like a word.",
    "At least now you know. Knowledge is... expensive.",
    "Every purchase is an investment. Some just depreciate faster.",
    "You weren't wrong. Just early. To the regret.",
    "Consider this a learning experience with receipts.",
    "Bitcoin doesn't judge. This calculator does.",
    "The universe sent signals. You bought things instead.",
  ],
  medium: [
    "That coffee in 2015 just cost you a house.",
    "Hope that phone was worth generational pain.",
    "Your latte budget is now someone's retirement fund.",
    "Congrats on buying a depreciating asset like a genius.",
    "That impulse buy just became a lifetime of regret.",
    "You could've been set. You chose a gadget instead.",
    "Your purchase history reads like a tragedy in three acts.",
    "This number represents every poor decision you've made.",
    "Could've had a yacht. Got a T-shirt instead.",
    "That pizza is now worth a Lambo. Sleep well.",
    "Financial advisors study your mistakes as cautionary tales.",
    "You essentially lit money on fire but with extra steps.",
    "This is why your friends stopped asking for advice.",
    "The universe tried to help. You bought a latte.",
    "Some people invest. You collected worthless memories.",
    "Your grandkids will ask why you bought that.",
    "That purchase aged like milk. Crypto aged like wine.",
    "You had a choice. You chose poorly.",
    "The regret is real. The money is gone.",
    "Should've listened to that weird cousin at Thanksgiving.",
  ],
  savage: [
    "That purchase decision haunts me and I didn't even make it.",
    "Your portfolio could've retired early. Instead you got a thing.",
    "Somewhere a financial advisor is crying and doesn't know why.",
    "You chose immediate gratification over generational wealth. Bold.",
    "This isn't regret. This is a case study in poor judgment.",
    "Your future self tried to warn you. You didn't listen.",
    "That money could've made money. You made garbage.",
    "Congratulations on funding someone else's retirement.",
    "You bought the peak of depreciation. Impressive.",
    "This calculation exists because of decisions like yours.",
    "Your checking account died so someone else's portfolio could live.",
    "Some invest. Some collect regrets. You chose violence.",
    "You weren't just wrong. You were historically wrong.",
    "The opportunity cost of your existence is staggering.",
    "You could've had everything. You have receipts instead.",
    "This is generational poverty speedrun any percent.",
    "Your descendants will study this as a warning.",
    "You played yourself and lost spectacularly.",
    "The market tried to save you. You bought a gadget.",
    "This isn't financial advice. It's a post-mortem.",
  ],
};

export async function POST(request: NextRequest) {
  try {
    const { item, regretValue, crypto, purchasePrice, intensity = 'medium' } = await request.json();

    // For free tier reliability, use fallback roasts
    // OpenRouter integration can be added with API key
    const useOpenRouter = false; // Set to true when API key is available
    
    if (useOpenRouter && process.env.OPENROUTER_API_KEY) {
      try {
        const intensityPrompts = {
          fun: 'Be lighthearted and playful. Keep it friendly.',
          medium: 'Be sarcastic and sharp, but not cruel.',
          savage: 'Be brutally honest and savage. No mercy.',
        };

        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'HTTP-Referer': 'https://crypto-regret-engine.vercel.app',
          },
          body: JSON.stringify({
            model: 'meta-llama/llama-3.2-3b-instruct:free',
            messages: [
              {
                role: 'system',
                content: `You are a crypto veteran. Generate ONE roast about someone's financial regret. Maximum 20 words. One sentence. No emojis. No financial advice. ${intensityPrompts[intensity as keyof typeof intensityPrompts] || intensityPrompts.medium}`
              },
              {
                role: 'user',
                content: `They spent $${purchasePrice} on ${item} instead of buying ${crypto}. It would be worth $${regretValue.toLocaleString()} now. Roast them.`
              }
            ],
            max_tokens: 50,
            temperature: 0.9,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const roast = data.choices[0]?.message?.content?.trim();
          if (roast && roast.length < 200) {
            return NextResponse.json({ roast });
          }
        }
      } catch (error) {
        console.error('OpenRouter error:', error);
      }
    }

    // Fallback to pre-written roasts based on intensity
    const roastPool = ROAST_INTENSITY[intensity as keyof typeof ROAST_INTENSITY] || ROAST_INTENSITY.medium;
    const randomRoast = roastPool[Math.floor(Math.random() * roastPool.length)];
    
    // Add some contextual variations for extra spice
    const contextualRoasts = [
      `Your $${purchasePrice} ${item} is now worth $${Math.floor(regretValue).toLocaleString()}. Think about that.`,
      `That ${item} just cost you $${Math.floor(regretValue).toLocaleString()} in ${crypto}.`,
      `${item}? Really? That's $${Math.floor(regretValue).toLocaleString()} you'll never see again.`,
    ];

    const shouldUseContextual = Math.random() > 0.7 && intensity !== 'fun';
    const finalRoast = shouldUseContextual ? 
      contextualRoasts[Math.floor(Math.random() * contextualRoasts.length)] : 
      randomRoast;

    return NextResponse.json({ roast: finalRoast });

  } catch (error) {
    console.error('Roast generation error:', error);
    return NextResponse.json(
      { roast: "Your financial decisions speak for themselves." },
      { status: 500 }
    );
  }
}
