
import React from 'react'
import EmptyCart from './components/EmptyCart'

export default function index() {
    return (
        <div className='mt-6 max-w-6xl lg:mx-auto mx-6'>

            <div className='border-b mb-6 pb-2'>
                <span className='font-medium border-b-4 border-rose-600 text-rose-600 pb-1'>
                    سبد خرید
                </span>
            </div>

            <div className='border'>
                <EmptyCart />
            </div>
        </div>
    )
}
