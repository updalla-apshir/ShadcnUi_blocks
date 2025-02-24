import BlockPreview from '@/components/BlockPreview'
import { Logo } from '@/components/logo'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <section>
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="max-w-xl">
                        <Logo />
                        <h1 className="mt-6 text-3xl font-bold sm:text-4xl md:text-nowrap">Shadcn/UI Marketing Blocks</h1>
                        <p className="mb-6 mt-3 text-base">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>

                        <Button>
                            <Link href="/hero-section">Explore blocks</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <BlockPreview preview="/examples/hero-section/one" code={`<div />`} category="pricing" title="title 1" />
            <SiteFooter />
        </>
    )
}
