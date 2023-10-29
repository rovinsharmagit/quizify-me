import { User } from 'next-auth'
import React from 'react'
import { DropdownMenu, DropdownMenuTrigger } from './ui/dropdown-menu'

type Props = {
    user : Pick<User, "name" | "image" | "email">
}

const UserAccNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            
        </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default UserAccNav