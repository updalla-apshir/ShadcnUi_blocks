import BlockPreview from '@/components/BlockPreview'
import { Logo } from '@/components/logo'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <section>
                <div className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
                    <div className="max-w-xl">
                        <Logo />
                        <h1 className="mt-6 text-balance text-3xl font-bold sm:text-4xl">Shadcn/UI Marketing Blocks</h1>
                        <p className="mb-6 mt-3 text-base">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>

                        <Button>
                            <Link href="/hero-section">Explore blocks</Link>
                        </Button>
                    </div>
                </div>
            </section>
            <BlockPreview previewOnly preview="/examples/home/one" category="pricing" title="Home page" />
            <BlockPreview previewOnly preview="/examples/pricing/one" category="pricing" title="Pricing page" />
            <BlockPreview previewOnly preview="/examples/about/one" category="pricing" title="About page" />
            <BlockPreview previewOnly preview="/preview/login/two" category="pricing" title="login page" />
            <BlockPreview previewOnly preview="/preview/sign-up/two" category="pricing" title="sign up page" />
            <SiteFooter />
        </>
    )
}
