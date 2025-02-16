'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const BlocksNav = ({ categories }: { categories: string[] }) => {
    const pathname = usePathname()

    return (
        <div className="data-[state=sticky]:border-border relative z-50 border-b border-transparent data-[state=sticky]:bg-white/50 data-[state=sticky]:backdrop-blur-xl dark:data-[state=sticky]:bg-zinc-950/50">
            <div className="mx-auto max-w-7xl">
                <nav className="flex items-center lg:-mx-3">
                    <ul className="relative flex h-11 snap-x snap-proximity scroll-px-2 items-center gap-1.5 overflow-x-auto overflow-y-hidden px-6">
                        {categories.map((category) => (
                            <li key={category} className={cn('flex h-full snap-start items-center border-b-2 border-b-transparent', pathname === `/${category}` && 'border-primary')}>
                                <Link href={`/${category}`} className={cn(pathname === `/${category}` && 'text-primary!', 'hover:bg-muted dark:text-muted-foreground hover:text-primary rounded-(--radius) flex h-7 items-center px-2 text-sm capitalize text-zinc-700')}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default BlocksNav
