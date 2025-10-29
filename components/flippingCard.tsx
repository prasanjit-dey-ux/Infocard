'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardBody, CardContainer, CardDescription, CardLogo, CardContact } from './card'
import Link from 'next/link';
import { LogoFront } from './logo';

export const FlippingCard = () => {
  return (
    <div>
        <Card>
            <CardContainer>
                <CardLogo>
                    <LogoFront />
                </CardLogo>
                <CardBody>
                    <div className='flex justify-between items-end'>
                        <CardDescription className='font-medium'>
                            <p className='text-red-900 text-sm font-medium mt-2'>Prasanjit Dey</p>
                            <p className='text-white mt-1'>Engineer, Developer & Designer
                                <br /> Working on <span className='underline text-red-900'>myself.</span>
                            </p>
                        </CardDescription>
                        <CardContact>
                            <Link href="https://x.com/Prasanjit_ui" className='underline text-red-900 font-medium text-sm'>Contact.</Link>
                        </CardContact>
                    </div>
                </CardBody>
            </CardContainer>
        </Card>
    </div>
  )
}
