import { getAuthSession } from '@/lib/nextauth';
import Link from 'next/link';
import React from 'react'
import SigninButton from './SigninButton';
import UserAccNav from './UserAccNav';

type Props = {};

const Navbar = async (props: Props) => {
    const session = await getAuthSession();
   return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-zinc-300 py-2">
        <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
            {/* Logo */}
            <Link href= '/' className="flex items-center gap-2">
            <p className="rounded-lg border-2 border-b-4 border-r-4 border-black 
               px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:border-white">
                Quizify
            </p>
            </Link>
            <div className="flex items-center">
                {session?.user ? (
                    <UserAccNav user={session.user} />
                ) : (
                    <SigninButton text="Sign In" />
                )}  
            </div>
        </div>
    </div>
   )
}

export default Navbar;