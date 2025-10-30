'use client'

import { Card, CardBody, CardContainer, CardDescription, CardLogo, CardContact } from './card'
import Link from 'next/link';
import { DashOutline, LogoBack, LogoFront } from './logo';
import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const FlippingCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { stiffness: 300, damping: 30 };

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);
    
    const handleFlip = () => {
        setIsFlipped((prev) => !prev);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Disable on mobile
        if (window.matchMedia('(max-width: 640px)').matches) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        
        // Calculate position from -0.5 to 0.5
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };
    
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div 
            className='perspective-[1000px] cursor-pointer selection:bg-white selection:text-amber-950 w-108 h-73 max-sm:w-80 max-sm:h-56'
            onClick={handleFlip}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Outer motion.div: handles X and Y tilt */}
            <motion.div
                className='relative w-full h-full'
                style={{
                    rotateX, // Tilt up/down
                    rotateY, // Tilt left/right
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* Inner motion.div: handles flip */}
                <motion.div
                    className='relative w-full h-full transform-3d'
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                    animate={{
                        rotateY: isFlipped ? 180 : 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: 'easeInOut',
                    }}
                >
                    {/* Card Front */}
                    <div 
                        className='absolute w-full h-full backface-hidden pointer-events-auto'
                         style={{ zIndex: 20 }}
                    >
                        <Card>
                            <CardContainer variant='default'>
                                <DashOutline className="text-white opacity-20 -translate-y-px pointer-events-none" />
                                <DashOutline className="text-amber-50 opacity-80 pointer-events-none" />
                                <CardLogo>
                                    <LogoFront />
                                </CardLogo>
                                <CardBody>
                                    <div className='flex justify-between items-end font-mono tracking-wide text-sm mt-4 max-sm:text-xs max-sm:mt-2'>
                                        <CardDescription className='tracking-tight'>
                                            <p className='text-text-primary'>Prasanjit Dey</p>
                                            <p className='text-gray-600'>I am a <span className='text-text-primary'>Design Engineer</span></p>
                                            <p className='text-gray-600'>
                                                Working on{' '}
                                                <Link
                                                    href="https://x.com/Prasanjit_ui"  
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    className='underline text-text-primary'
                                                >
                                                    myself.
                                                </Link>
                                            </p> 
                                        </CardDescription>
                                        <CardContact>
                                            <Link 
                                                href="https://mail.google.com/mail/?view=cm&fs=1&to=prasanjitdey8523@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='underline text-text-primary text-sm max-sm:text-xs'
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Contact.
                                            </Link>
                                        </CardContact>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </Card>
                    </div> 

                    {/* Card Back */}
                    <div 
                        className='absolute w-full h-full backface-hidden transform-[rotateY(180deg)]'

                    > 
                        <Card>
                            <CardContainer variant='back' className='items-center justify-center shadow-[inset_0px_-2px_4px_0px_rgba(0,0,0,0.15)]'>
                                <DashOutline className="text-white opacity-20 -translate-y-px " />
                                <DashOutline className="text-amber-50 opacity-60 " />
                                <CardLogo>
                                    <LogoBack/> 
                                </CardLogo>
                                <Link
                                    href="https://cal.com/iamjiit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()} 
                                    className="font-mono text-text-primary underline text-xs text-center mt-auto mb-2 relative z-50" 
                                >
                                    Open to work
                                </Link>
                            </CardContainer>
                        </Card>
                    </div> 
                </motion.div>
            </motion.div>
        </div> 
    )
}
