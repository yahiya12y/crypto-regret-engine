import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const regretValue = searchParams.get('regret') || '0';
    const roast = searchParams.get('roast') || 'Calculate your crypto regret';
    const crypto = searchParams.get('crypto') || 'BTC';

    return new ImageResponse(
      (
        <div
          style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            fontFamily: 'monospace',
          }}
        >
          <div
            style={{
              fontSize: 60,
              color: '#666',
              marginBottom: 20,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Crypto Regret Engine
          </div>
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              color: parseInt(regretValue) >= 0 ? '#00ff41' : '#ff0844',
              textShadow: '0 0 40px rgba(0, 255, 65, 0.5)',
              marginBottom: 40,
            }}
          >
            {parseInt(regretValue) >= 0 ? '+' : ''}
            ${parseInt(regretValue).toLocaleString()}
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#999',
              textAlign: 'center',
              maxWidth: '900px',
              fontStyle: 'italic',
            }}
          >
            "{roast}"
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#666',
              marginTop: 40,
            }}
          >
            in {crypto}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate image: ${e.message}`, {
      status: 500,
    });
  }
}
