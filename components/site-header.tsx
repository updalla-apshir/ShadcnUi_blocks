import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export const SiteHeader = () => {
    return (
        <header>
            <div className="mx-auto flex max-w-7xl justify-between px-6 py-4">
                <Link href="/" className="hidden w-fit items-center gap-2">
                    <Logo />
                    <span className="sr-only font-bold">ns UI</span>
                </Link>
                <span>Shadcn UI Blocks</span>
                <div className="-mr-2 flex items-center">
                    <Button asChild variant="link" className="gap-1">
                        <Link href="https://github.com/Meschacirung/cnblocks/" target="_blank" className="text-sm">
                            GitHub
                            <ArrowUpRight className="!size-3.5 opacity-50" />
                        </Link>
                    </Button>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
