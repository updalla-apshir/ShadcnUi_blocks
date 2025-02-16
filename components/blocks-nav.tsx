'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const BlocksNav = ({ categories }: { categories: string[] }) => {
    const pathname = usePathname()
    const navRef = useRef<HTMLUListElement>(null)
    const stickyContent = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (stickyContent.current) {
                if (window.scrollY > 50) {
                    stickyContent.current.setAttribute('data-state', 'sticky')
                } else {
                    stickyContent.current.removeAttribute('data-state')
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div ref={stickyContent} className="data-[state=sticky]:border-border sticky top-0 z-50 border-b border-transparent data-[state=sticky]:bg-white/50 data-[state=sticky]:backdrop-blur-xl dark:data-[state=sticky]:bg-zinc-950/50">
            <div className="mx-auto max-w-7xl">
                <nav className="flex items-center lg:-mx-3">
                    <ul ref={navRef} className="h-9.75 relative flex snap-x snap-proximity scroll-px-2 items-center gap-0.5 overflow-x-auto overflow-y-hidden px-6">
                        {categories.map((category) => (
                            <li key={category} className="snap-start">
                                <Link href={`/${category}`} className={cn(pathname === `/${category}` && 'text-primary! bg-muted', 'hover:bg-muted dark:text-muted-foreground hover:text-primary flex h-7 items-center rounded-full px-3 text-sm capitalize text-zinc-700')}>
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
