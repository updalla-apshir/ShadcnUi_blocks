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
    },
    {
        slug: 'hero-section',
        title: 'three',
        category: 'hero-section',
        preview: '/preview/hero-section/three',
        code: loadCode('app/preview/hero-section/three/page.tsx'),
    },
    {
        slug: 'hero-section',
        title: 'four',
        category: 'hero-section',
        preview: '/preview/hero-section/four',
        code: loadCode('app/preview/hero-section/four/page.tsx'),
    },
    {
        slug: 'logo-cloud',
        title: 'one',
        category: 'logo-cloud',
        preview: '/preview/logo-cloud/one',
        code: loadCode('app/preview/logo-cloud/one/page.tsx'),
    },
    {
        slug: 'features',
        title: 'one',
        category: 'features',
        preview: '/preview/features/one',
        code: loadCode('app/preview/features/one/page.tsx'),
    },
    {
        slug: 'features',
        title: 'two',
        category: 'features',
        preview: '/preview/features/two',
        code: loadCode('app/preview/features/two/page.tsx'),
    },
    {
        slug: 'features',
        title: 'three',
        category: 'features',
        preview: '/preview/features/three',
        code: loadCode('app/preview/features/three/page.tsx'),
    },
    {
        slug: 'features',
        title: 'four',
        category: 'features',
        preview: '/preview/features/four',
        code: loadCode('app/preview/features/four/page.tsx'),
    },
    {
        slug: 'features',
        title: 'five',
        category: 'features',
        preview: '/preview/features/five',
        code: loadCode('app/preview/features/five/page.tsx'),
    },
    {
        slug: 'features',
        title: 'six',
        category: 'features',
        preview: '/preview/features/six',
        code: loadCode('app/preview/features/six/page.tsx'),
    },
    {
        slug: 'features',
        title: 'seven',
        category: 'features',
        preview: '/preview/features/seven',
        code: loadCode('app/preview/features/seven/page.tsx'),
    },
    {
        slug: 'features',
        title: 'eight',
        category: 'features',
        preview: '/preview/features/eight',
        code: loadCode('app/preview/features/eight/page.tsx'),
    },

    {
        slug: 'content',
        title: 'one',
        category: 'content',
        preview: '/preview/content/one',
        code: loadCode('app/preview/content/one/page.tsx'),
    },
    {
        slug: 'content',
        title: 'two',
        category: 'content',
        preview: '/preview/content/two',
        code: loadCode('app/preview/content/two/page.tsx'),
    },
    {
        slug: 'content',
        title: 'three',
        category: 'content',
        preview: '/preview/content/three',
        code: loadCode('app/preview/content/three/page.tsx'),
    },
    {
        slug: 'content',
        title: 'four',
        category: 'content',
        preview: '/preview/content/four',
        code: loadCode('app/preview/content/four/page.tsx'),
    },
    {
        slug: 'content',
        title: 'five',
        category: 'content',
        preview: '/preview/content/five',
        code: loadCode('app/preview/content/five/page.tsx'),
    },
    {
        slug: 'content',
        title: 'six',
        category: 'content',
        preview: '/preview/content/six',
        code: loadCode('app/preview/content/six/page.tsx'),
    }
]

export const categories = [...new Set(blocks.map((b) => b.category))]