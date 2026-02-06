# 🔥 Crypto Regret Engine

> **The definitive crypto opportunity cost calculator.** Calculate how much that coffee, phone, or impulse purchase would be worth if you'd bought crypto instead. Features savage AI roasts and viral social sharing.

![Version](https://img.shields.io/badge/version-1.0.0-green)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

### 🎯 Core Functionality
- **Real-time Crypto Calculations**: Powered by CoinGecko API (free tier)
- **4 Major Cryptos**: Bitcoin, Ethereum, Solana, Dogecoin
- **Historical Price Data**: From 2010 to present
- **Instant Results**: Fast API routes with edge optimization

### 🎨 Premium Design
- **Degenerate Dark Mode**: Cinematic black theme with neon accents
- **Animated Results**: Smooth Framer Motion animations with glow effects
- **Screenshot-First UI**: Every state is designed to be shareable
- **Responsive**: Perfect on mobile, tablet, and desktop

### 🔥 Viral Mechanics
- **Savage AI Roasts**: Context-aware roasts via OpenRouter (with fallbacks)
- **One-Click X Sharing**: Pre-formatted tweets for maximum virality
- **Dynamic OG Images**: Auto-generated social preview cards
- **Social Proof Ready**: Built for screenshots and reposts

### 💰 Monetization Ready
- **Affiliate Links**: Pre-integrated Binance, Kraken, Coinbase CTAs
- **Ad-Ready Layout**: Reserved spaces for crypto ad networks
- **Conversion-Optimized**: Strategic CTA placement after emotional impact

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/crypto-regret-engine.git
cd crypto-regret-engine

# Install dependencies
npm install

# Copy environment file (optional)
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Done! 🎉

3. **Add Environment Variables** (Optional)
   - In Vercel dashboard → Settings → Environment Variables
   - Add `OPENROUTER_API_KEY` for AI roasts
   - Add affiliate IDs if you have them

### Other Platforms

**Netlify**
```bash
npm run build
# Deploy the .next folder
```

**Railway**
```bash
# Add Procfile: web: npm start
git push railway main
```

---

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'degen-black': '#0a0a0a',    // Main background
  'degen-dark': '#121212',      // Card background
  'blood-red': '#ff0844',       // Losses
  'neon-green': '#00ff41',      // Gains
  'gold': '#ffd700',            // Accent
}
```

### Roast Messages

Edit `app/api/roast/route.ts`:

```typescript
const ROAST_EXAMPLES = [
  "Your custom roast here...",
  // Add more roasts
];
```

### Affiliate Links

Edit `app/page.tsx`:

```typescript
const AFFILIATE_LINKS = [
  { 
    name: 'Your Exchange', 
    url: 'https://yourlink.com?ref=YOUR_ID',
    cta: 'Your Custom CTA'
  },
];
```

---

## 🔧 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Data API | CoinGecko (Free) |
| AI Roasts | OpenRouter (Free Tier) |
| Deployment | Vercel (Free) |

---

## 📊 API Usage

### CoinGecko Free Tier
- 50 calls/minute
- No API key required
- Historical data from 2010+

### OpenRouter (Optional)
- Free tier: 10 requests/min
- Model: `meta-llama/llama-3.2-3b-instruct:free`
- Falls back to pre-written roasts if unavailable

---

## 🎯 SEO & Performance

### Built-in SEO
- ✅ Dynamic meta tags
- ✅ Open Graph images
- ✅ Twitter Card support
- ✅ Semantic HTML
- ✅ Fast page loads (< 2s)

### Lighthouse Scores (Target)
- 🟢 Performance: 95+
- 🟢 Accessibility: 100
- 🟢 Best Practices: 100
- 🟢 SEO: 100

---

## 🚧 Roadmap

### Phase 1 (Current)
- [x] Core calculator
- [x] AI roasts
- [x] Social sharing
- [x] Affiliate CTAs

### Phase 2 (Future)
- [ ] Hall of Shame leaderboard
- [ ] Wallet scanner (Etherscan API)
- [ ] Multi-currency support
- [ ] PWA support
- [ ] User profiles (optional)

### Phase 3 (Advanced)
- [ ] Portfolio tracker
- [ ] Historical charts
- [ ] Email reminders
- [ ] Mobile app

---

## 💡 Marketing Ideas

### Launch Strategy
1. **Product Hunt**: Launch as "Crypto Regret Calculator"
2. **Reddit**: Post in r/cryptocurrency, r/wallstreetbets (with caution)
3. **Twitter/X**: Share savage screenshots with @mentions
4. **TikTok**: Create short videos showing extreme regrets
5. **Discord**: Share in crypto communities

### Viral Content Examples
- "This $5 Starbucks cost me $50,000"
- "My 2015 iPhone is now worth a Tesla"
- "Calculate your generational wealth... that you spent on pizza"

### SEO Keywords
- crypto regret calculator
- bitcoin opportunity cost
- what if I bought bitcoin
- crypto fomo calculator
- missed bitcoin gains

---

## 🛠️ Troubleshooting

### Common Issues

**API Rate Limits**
- CoinGecko free tier: 50 calls/min
- Solution: Add caching or upgrade to Pro

**Date Not Available**
- Some cryptos launched after 2010
- Solution: Add date validation per crypto

**Build Errors**
```bash
# Clear cache and rebuild
rm -rf .next
npm install
npm run build
```

---

## 📄 License

MIT License - feel free to use this for your own projects!

---

## 🙏 Credits

- **Design Inspiration**: Crypto degen culture
- **APIs**: CoinGecko, OpenRouter
- **Framework**: Next.js team
- **Community**: Everyone who's ever regretted not buying crypto

---

## 📞 Support

- **Issues**: Open a GitHub issue
- **Questions**: Start a discussion
- **Features**: Submit a PR

---

## ⚠️ Disclaimer

This is a satirical calculator for entertainment purposes. Not financial advice. Past performance does not guarantee future results. Crypto is volatile. Only invest what you can afford to lose.

---

**Built with regret, powered by FOMO** 💀

---

## 🎬 Quick Demo

1. Enter "iPhone 11" - $999
2. Select date: September 2019
3. Choose Bitcoin
4. Click Calculate
5. Cry at the result
6. Share on Twitter
7. Get roasted
8. Repeat with every purchase you've ever made

**Welcome to the Regret Engine.** 🔥
