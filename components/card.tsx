import clsx from 'clsx'
import React from 'react'

type CardElementProps = {
    className?: string;
    children?:React.ReactNode
}

export const Card = ({className, children}: CardElementProps) => {
  return (
    <div className={clsx('w-md h-76 rounded-2xl bg-card p-2',className)}>
        {children}
    </div>
  )
}



export const CardLogo = ({className, children}: CardElementProps) => {
    return <div className={clsx('flex justify-center items-center px-2 pt-4',className)}>
        {children}
    </div>
}


export const CardBody = ({className, children}: CardElementProps) => {
    return <div className={clsx('w-full h-full p-4 text-xs font-[IBM PLEX MONO] tracking-wide leading-5 mt-1',className)}>
        {children}
    </div>
}

export const CardDescription = ({className, children}:CardElementProps) => {
    return <div className={clsx('',className)}>
        {children}
    </div>
}

export const CardContact = ({className, children}: CardElementProps) => {
    return <div className={clsx('',className)}> 
        {children}
    </div>
}

export const CardContainer = ({className, children}: CardElementProps) => {
    return <div className={clsx('w-full h-full outline-2 outline-dashed outline-card-outline rounded-xl overflow-hidden bg-linear-to-b from-card from-62% to-card-grad-end',className)}>
        {children}
    </div>
}