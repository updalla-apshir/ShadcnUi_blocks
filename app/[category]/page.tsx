import BlockPreview from '@/components/BlockPreview'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { blocks } from '@/data/blocks'

interface PageProps {
    params: {
        category: string
    }
}

export async function generateStaticParams() {
    const categories = [...new Set(blocks.map((b) => b.category))]
    return categories.map((category) => ({
        category: category,
    }))
}

export async function generateMetadata({ params }: PageProps) {
    const { category } = await params
    return {
        title: `Shadcn ${category} Blocks`,
    }
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params
    const categoryBlocks = blocks.filter((b) => b.category === category)

    return (
        <>
            <div aria-hidden role="presentation" className="absolute inset-0 -z-10 max-h-96 bg-[radial-gradient(ellipse_80%_70%_at_20%_-20%,var(--bg-color),transparent)] duration-300 [--bg-color:var(--color-indigo-400)] dark:[--bg-color:var(--color-zinc-800)]"></div>

            <div aria-hidden className="absolute inset-x-0 top-0 mx-auto hidden max-w-7xl lg:block">
                <div className="absolute left-0 top-0 h-56 w-px bg-gradient-to-b from-gray-950/[0.07] dark:from-white/[0.07]"></div>
                <div className="absolute right-0 top-0 h-56 w-px bg-gradient-to-b from-gray-950/[0.07] dark:from-white/[0.07]"></div>
                <div className="absolute -left-20 top-16 h-12 w-20 p-2">
                    <div className="-z-10 h-full w-full bg-[radial-gradient(var(--bg-color)_1px,transparent_1px)] [--bg-color:theme(colors.gray.950/0.1)] [background-size:6px_6px] dark:[--bg-color:theme(colors.white/0.05)]"></div>
                </div>

                <div className="absolute -right-20 top-16 h-12 w-20 p-2">
                    <div className="-z-10 h-full w-full bg-[radial-gradient(var(--bg-color)_1px,transparent_1px)] [--bg-color:theme(colors.gray.950/0.1)] [background-size:6px_6px] dark:[--bg-color:theme(colors.white/0.05)]"></div>
                </div>
            </div>

            <div aria-hidden className="absolute inset-x-0 top-16 z-20 mx-auto h-12 border-y border-gray-950/[0.07] dark:border-white/5" />

            <SiteHeader />

            <main>
                <section>
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="max-w-xl pb-12 md:pb-16">
                            <h1 className="mt-24 text-3xl font-bold sm:mt-28 sm:text-4xl md:text-nowrap">
                                Shadcn <span className="capitalize">{category}</span> blocks
                            </h1>
                            <p className="mt-4 text-base md:text-lg">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>
                        </div>
                    </div>
                </section>

                {categoryBlocks.map((block, index) => (
                    <BlockPreview {...block} key={index} />
                ))}
            </main>

            <SiteFooter />
        </>
    )
}
