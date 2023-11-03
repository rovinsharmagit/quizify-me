'use client';

import { User } from 'next-auth'
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react';
import UserAvatar from './UserAvatar';

type Props = {
    user : Pick<User, "name" | "image" | "email">
}

const UserAccNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
          {/* user avatar */}
          <UserAvatar className= "w-10 h-10" user={user} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white" align="end">
          <div className="flex items-center justify-start gap-2 p-2">
            <div className="flex flex-col space-y-1 leading-none">
              {user.name && <p className="font-medium">{user.name}</p>}
              {user.email && (
                <p className="w-[auto] truncate text-sm text-zinc-700">
                  {user.email}
                </p>
              )}
            </div>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href='/'>Meow</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={(e) => {
            e.preventDefault()
            signOut().catch(console.error)
          }} className="text-red-800 cursor-pointer"
          >
            Sign Out
            <LogOut className="w-4 h-4 ml-2 " />
          </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccNav