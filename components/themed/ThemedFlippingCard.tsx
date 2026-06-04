'use client'

import Link from 'next/link';
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import clsx from 'clsx';
import type { CardTheme } from './themes';
import { DashOutline as OrigDash, LogoFront as OrigFront, LogoBack as OrigBack } from '../logo';

export const ThemedFlippingCard = ({ theme }: { theme: CardTheme }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { stiffness: 300, damping: 30 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

    const handleFlip = () => setIsFlipped((p) => !p);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (window.matchMedia('(max-width: 640px)').matches) return;
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => { x.set(0); y.set(0); };

    const cardCls = clsx('w-108 h-73 rounded-2xl p-1 outline-2', 'max-sm:w-80 max-sm:h-56');
    const containerBase = 'relative flex flex-col w-full h-full rounded-[14px] overflow-hidden max-sm:rounded-[10px]';

    return (
        <div
            className="perspective-[1000px] cursor-pointer w-108 h-73 max-sm:w-80 max-sm:h-56"
            onClick={handleFlip}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div className="relative w-full h-full" style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
                <motion.div
                    className="relative w-full h-full transform-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden pointer-events-auto" style={{ zIndex: 20 }}>
                        <div className={cardCls} style={{ background: theme.card, outlineColor: theme.cardOutline }}>
                            <div className={containerBase} style={{ background: `linear-gradient(to bottom, ${theme.card} 63%, ${theme.cardGradEnd})` }}>
                                <OrigDash className="absolute inset-0 w-full h-full text-white opacity-20 -translate-y-px pointer-events-none" />
                                <OrigDash className="absolute inset-0 w-full h-full pointer-events-none" style={{ color: theme.dashColor }} />
                                <div className="flex justify-center items-center px-2 pt-4 max-sm:pt-2">
                                    <OrigFront fill={theme.starFill} />
                                </div>
                                <div className="w-full px-4 py-2 max-sm:px-2 max-sm:py-2 max-sm:mt-1">
                                    <div className="flex justify-between items-end font-mono tracking-wide text-sm mt-4 max-sm:text-xs max-sm:mt-2">
                                        <div className="tracking-tight">
                                            <p style={{ color: theme.textPrimary }}>Prasanjit Dey</p>
                                            <p style={{ color: theme.textSecondary }}>I am a <span style={{ color: theme.textPrimary }}>Design Engineer</span></p>
                                            <p style={{ color: theme.textSecondary }}>
                                                Working on{' '}
                                                <Link href="https://x.com/Prasanjit_ui" target="_blank" rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="underline" style={{ color: theme.textPrimary }}>
                                                    myself.
                                                </Link>
                                            </p>
                                        </div>
                                        <div>
                                            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=prasanjitdey8523@gmail.com"
                                                target="_blank" rel="noopener noreferrer"
                                                className="underline text-sm max-sm:text-xs"
                                                style={{ color: theme.textPrimary }}
                                                onClick={(e) => e.stopPropagation()}>
                                                Contact.
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full backface-hidden transform-[rotateY(180deg)]">
                        <div className={cardCls} style={{ background: theme.card, outlineColor: theme.cardOutline }}>
                            <div className={clsx(containerBase, 'items-center justify-center shadow-[inset_0px_-2px_4px_0px_rgba(0,0,0,0.15)]')}
                                style={{ background: theme.cardBack }}>
                                <OrigDash className="absolute inset-0 w-full h-full text-white opacity-20 -translate-y-px" />
                                <OrigDash className="absolute inset-0 w-full h-full" style={{ color: theme.dashColor, opacity: 0.6 }} />
                                <div className="flex justify-center items-center px-2 pt-4 max-sm:pt-2">
                                    <OrigBack fill={theme.starFill} />
                                </div>
                                <Link href="https://cal.com/iamjiit" target="_blank" rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="font-mono underline text-xs text-center mt-auto mb-2 relative z-50"
                                    style={{ color: theme.textPrimary }}>
                                    Open to work
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}
