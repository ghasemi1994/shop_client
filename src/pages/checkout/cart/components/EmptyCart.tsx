import Image from 'next/image'

export default function EmptyCart() {
    return (
        <div className='flex flex-col justify-center items-center py-6'>
            <Image
                src="/assets/images/empty-cart.svg"
                alt='no-image'
                className=''
                width={200}
                height={200}
            />
            <div className='text-lg mb-6 mt-6'>
                سبد خرید شما خالی است!
            </div>
        </div>
    )
}
