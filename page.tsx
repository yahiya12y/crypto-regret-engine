'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface LeaderboardEntry {
  id: string;
  itemName: string;
  regretValue: number;
  crypto: string;
  purchaseYear: number;
  purchasePrice: number;
  roast: string;
  timestamp: number;
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch('/api/leaderboard?limit=10');
      if (response.ok) {
        const data = await response.json();
        setEntries(data.entries);
      } else {
        setError('Failed to load leaderboard');
      }
    } catch (err) {
      setError('Failed to load leaderboard');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-degen-black via-degen-dark to-degen-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-green/5 via-transparent to-transparent" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blood-red via-gold to-neon-green bg-clip-text text-transparent">
              HALL OF SHAME
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-mono mb-6">
            The worst financial decisions of the week
          </p>
          <Link 
            href="/"
            className="inline-block bg-neon-green hover:bg-neon-green/80 text-black font-bold py-3 px-6 rounded-lg transition-all"
          >
            ← Calculate Your Regret
          </Link>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-gray-400 py-20">
            <div className="text-2xl mb-4">Loading the pain...</div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-blood-red py-20">
            <div className="text-xl">{error}</div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && entries.length === 0 && (
          <div className="text-center text-gray-400 py-20">
            <div className="text-2xl mb-4">No entries yet</div>
            <p className="text-lg mb-6">Be the first to share your regret!</p>
            <Link 
              href="/"
              className="inline-block bg-neon-green hover:bg-neon-green/80 text-black font-bold py-3 px-6 rounded-lg transition-all"
            >
              Calculate Now
            </Link>
          </div>
        )}

        {/* Leaderboard Entries */}
        {!loading && !error && entries.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {entries.map((entry, index) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-degen-gray border-2 rounded-xl p-4 sm:p-6 transition-all hover:border-neon-green ${
                  index < 3 ? 'border-gold' : 'border-gray-800'
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Rank */}
                  <div className={`text-3xl sm:text-4xl font-bold ${
                    index < 3 ? 'text-gold' : 'text-gray-600'
                  }`}>
                    {getMedalEmoji(index + 1)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-white truncate">
                          {entry.itemName}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ${entry.purchasePrice.toLocaleString()} in {entry.purchaseYear} → {entry.crypto}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-neon-green">
                          {formatCurrency(entry.regretValue)}
                        </div>
                        <div className="text-xs text-gray-500">regret value</div>
                      </div>
                    </div>
                    
                    {entry.roast && (
                      <p className="text-sm sm:text-base text-gray-400 italic mt-2">
                        "{entry.roast}"
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 text-gray-600 text-sm"
        >
          <p>Leaderboard resets weekly • All entries are anonymous</p>
        </motion.div>
      </div>
    </main>
  );
}
