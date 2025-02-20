import CategoryNavigation from '@/components/blocks-nav'
import { SiteFooter } from '@/components/site-footer'
import { categories } from '@/data/blocks'

export default function CategoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <CategoryNavigation categories={categories} />
            <main>{children}</main>

            <SiteFooter />
        </>
    )
}
