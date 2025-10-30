import clsx from 'clsx'
import React from 'react'

type CardElementProps = {
    className?: string;
    children?: React.ReactNode
}

type CardContainerProps = {
    className?: string;
    children?: React.ReactNode;
    variant?: 'default' | 'back';
}

export const Card = ({className, children}: CardElementProps) => {
  return (
    <div className={clsx(
      'w-108 h-73 rounded-2xl bg-card p-1 outline-2 outline-[#FFC491]',
      'max-sm:w-[320px] max-sm:h-[200px] max-sm:p-0.5', // Mobile: smaller, less padding
      className
    )}>
        {children}
    </div>
  )
}

export const CardLogo = ({className, children}: CardElementProps) => {
    return <div className={clsx(
      'flex justify-center items-center px-2 pt-4',
      'max-sm:pt-1 max-sm:px-1 max-sm:scale-50 max-sm:-mb-4', // Mobile: much smaller logo
      className
    )}>
        {children}
    </div>
}

export const CardBody = ({className, children}: CardElementProps) => {
    return <div className={clsx(
      'w-full px-4 py-2',
      'max-sm:px-2 max-sm:py-1', // Mobile: less padding
      className
    )}>
        {children}
    </div>
}

export const CardDescription = ({className, children}: CardElementProps) => {
    return <div className={clsx('', className)}>
        {children}
    </div>
}

export const CardContact = ({className, children}: CardElementProps) => {
    return <div className={clsx('', className)}> 
        {children}
    </div>
}

export const CardContainer = ({className, children, variant}: CardContainerProps) => {
    return <div className={clsx(
      'relative flex flex-col w-full h-full rounded-[14px] overflow-hidden',
      variant === 'default' && 'bg-linear-to-b from-card from-63% to-[#FF9C45]',
      variant === 'back' && 'bg-cardback',
      'max-sm:rounded-xl', // Smaller radius on mobile
      className
    )}>
        {children}
    </div>
}