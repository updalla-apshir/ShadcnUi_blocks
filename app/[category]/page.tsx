import BlockPreview from '@/components/BlockPreview'
import { blocks, categories } from '@/data/blocks'

interface PageProps {
    params: {
        category: string
    }
}

export async function generateStaticParams() {
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
            <section>
                <div className="mx-auto max-w-7xl px-6">
                    <div className="max-w-xl pb-12 md:pb-16">
                        <h1 className="mt-24 text-3xl font-bold sm:mt-16 sm:text-4xl md:text-nowrap">
                            Shadcn <span className="capitalize">{category}</span> blocks
                        </h1>
                        <p className="mt-4 text-base md:text-lg">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>
                    </div>
                </div>
            </section>

            {categoryBlocks.map((block, index) => (
                <BlockPreview {...block} key={index} />
            ))}
        </>
    )
}
