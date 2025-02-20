import fs from 'fs'
import path from 'path'

export interface Block {
    slug: string
    title: string
    category: string
    preview: string
    code: string
}

function loadCode(filePath: string): string {
    const fullPath = path.join(process.cwd(), filePath)
    return fs.readFileSync(fullPath, 'utf-8')
}

export const blocks: Block[] = [
    {
        slug: 'pricing',
        title: 'one',
        category: 'pricing',
        preview: '/preview/pricing/one',
        code: loadCode('app/preview/pricing/one/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'one',
        category: 'hero-section',
        preview: '/preview/hero-section/one',
        code: loadCode('app/preview/hero-section/one/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'two',
        category: 'hero-section',
        preview: '/preview/hero-section/two',
        code: loadCode('app/preview/hero-section/two/page.tsx'),
    }
]

export const categories = [...new Set(blocks.map((b) => b.category))]