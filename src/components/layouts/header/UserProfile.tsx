import { UserIcon, UserCircleIcon, ArrowRightOnRectangleIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import { setClassNames } from '@/utils/helpers'
export default function UserProfile() {



    const [open, setOpen] = useState<boolean>(false);

    const ref = useOutsideClick(() => {
        setOpen(false);
    });

    return (
        <>
            <div className="relative" ref={ref}>
                <button type="button" className='flex items-center group text-gray-500' onClick={() => setOpen(!open)} >
                    <UserIcon className='h-6 w-6 group-hover:text-gray-800' />
                    <ChevronDownIcon className='h-4 w-4 group-hover:text-gray-800' />
                </button>

                <div className={setClassNames("text-sm z-50 transition-[opacity,margin] absolute left-0 top-8 duration min-w-[15rem] bg-white shadow-lg border rounded-lg p-2 mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700",
                    open ? "block opacity-100" : "hidden opacity-0")}>
                    <div className="py-2 first:pt-0 last:pb-0">
                        <button className=" w-full justify-between flex items-center gap-2 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                            <div className='flex gap-x-2 items-center'>
                                <span>
                                    <UserCircleIcon className='h-7 w-7 text-gray-600' />
                                </span>
                                <span>
                                    Mohammad Ghasemi
                                </span>
                            </div>
                            <span className='float-left'>
                                <ChevronLeftIcon className='h-4 w-4' />
                            </span>
                        </button>
                    </div>


                    <div className="py-2 first:pt-0 last:pb-0">
                        <button
                            onClick={() => console.log('logOut')}
                            className="w-full flex items-center gap-x-2 py-2 px-3 rounded-md text-gray-600 hover:bg-gray-100  dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                            <span>
                                <ArrowRightOnRectangleIcon className='h-7 w-7 text-gray-600' />
                            </span>
                            <span>
                                خروج از حساب کاربری
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
