'use client'

import { Logo as OrigLogo } from '../logo';
import { ThemedFlippingCard } from './ThemedFlippingCard';
import type { CardTheme } from './themes';

export const ThemedPage = ({ theme }: { theme: CardTheme }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-between items-center"
      style={{ background: theme.pageBg }}>
      <div className="opacity-60 mt-1">
        <OrigLogo fill={theme.starFill} />
      </div>
      <ThemedFlippingCard theme={theme} />
      <footer className="font-mono text-sm mb-1" style={{ color: theme.textPrimary }}>
        Design &amp; Developed by Prasanjit.
      </footer>
    </div>
  );
}
