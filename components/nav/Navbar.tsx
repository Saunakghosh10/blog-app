import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { LuGithub } from "react-icons/lu";


export default function Navbar() {
    return <nav className='flex items-center justify-between' >

        <div className='group'>
            <Link href='/' className='text-2xl font-bold'>
                Dailyblog
            </Link>
            <div className='h-1 w-0 group-hover:w-full transition-all bg-violet-600'></div>
        </div>

        <Button variant="outline" className='flex items-center gap-2'>
            <LuGithub />
            Login</Button>

    </nav>
}

