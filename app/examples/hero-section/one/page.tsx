'use client'
import { Logo } from '@/components/logo'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Cpu, Lock, Sparkles, Zap } from 'lucide-react'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ReactNode } from 'react'

const menuItems = [
    { name: 'Features', href: '#' },
    { name: 'Solution', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
]

const links = [
    {
        group: 'Product',
        items: [
            {
                title: 'Features',
                href: '#',
            },
            {
                title: 'Solution',
                href: '#',
            },
            {
                title: 'Customers',
                href: '#',
            },
            {
                title: 'Pricing',
                href: '#',
            },
            {
                title: 'Help',
                href: '#',
            },
            {
                title: 'About',
                href: '#',
            },
        ],
    },
    {
        group: 'Solution',
        items: [
            {
                title: 'Startup',
                href: '#',
            },
            {
                title: 'Freelancers',
                href: '#',
            },
            {
                title: 'Organizations',
                href: '#',
            },
            {
                title: 'Students',
                href: '#',
            },
            {
                title: 'Collaboration',
                href: '#',
            },
            {
                title: 'Design',
                href: '#',
            },
            {
                title: 'Management',
                href: '#',
            },
        ],
    },
    {
        group: 'Company',
        items: [
            {
                title: 'About',
                href: '#',
            },
            {
                title: 'Careers',
                href: '#',
            },
            {
                title: 'Blog',
                href: '#',
            },
            {
                title: 'Press',
                href: '#',
            },
            {
                title: 'Contact',
                href: '#',
            },
            {
                title: 'Help',
                href: '#',
            },
        ],
    },
    {
        group: 'Legal',
        items: [
            {
                title: 'Licence',
                href: '#',
            },
            {
                title: 'Privacy',
                href: '#',
            },
            {
                title: 'Cookies',
                href: '#',
            },
            {
                title: 'Security',
                href: '#',
            },
        ],
    },
]

export default function HeroSection() {
    const [menuState, setMenuState] = useState(false)
    return (
        <>
            <header>
                <nav data-state={menuState && 'active'} className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur md:relative dark:bg-zinc-950/50 lg:dark:bg-transparent">
                    <div className="m-auto max-w-5xl px-6">
                        <div className="flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                            <div className="flex w-full justify-between lg:w-auto">
                                <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                    <Logo />
                                </Link>

                                <button onClick={() => setMenuState(!menuState)} aria-label={menuState == true ? 'Close Menu' : 'Open Menu'} className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                    <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                    <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                                </button>
                            </div>

                            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                                <div className="lg:pr-4">
                                    <ul className="space-y-6 text-base lg:flex lg:gap-8 lg:space-y-0 lg:text-sm">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <Link href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                    <span>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:border-l lg:pl-6">
                                    <Button asChild variant="outline" size="sm">
                                        <Link href="#">
                                            <span>Login</span>
                                        </Link>
                                    </Button>
                                    <Button asChild size="sm">
                                        <Link href="#">
                                            <span>Login</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <div aria-hidden className="z-2 absolute inset-0 isolate hidden opacity-50 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>

                <section className="overflow-hidden bg-white dark:bg-transparent">
                    <div className="relative mx-auto max-w-5xl px-6 py-28 lg:pb-24 lg:pt-32">
                        <div className="relative z-10 mx-auto max-w-2xl text-center">
                            <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Marketing Tools for non Marketers</h1>
                            <p className="mx-auto my-8 max-w-2xl text-xl">Efficiently manage your sales team with our innovative tools. Enhance productivity, and achieve your sales targets!</p>

                            <Button asChild size="lg" className="px-5">
                                <Link href="#">
                                    <span className="btn-label">Start Building</span>
                                </Link>
                            </Button>
                            <span className="text-muted-foreground mt-2 block text-center text-sm">For free</span>
                        </div>
                    </div>

                    <div className="mx-auto -mt-16 max-w-7xl">
                        <div className="perspective-distant -mr-16 pl-16 lg:-mr-56 lg:pl-56">
                            <div className="[transform:rotateX(20deg);]">
                                <div className="lg:h-176 relative skew-x-[.36rad]">
                                    <div aria-hidden className="bg-linear-to-b from-background to-background z-1 absolute -inset-16 via-transparent sm:-inset-32" />
                                    <div aria-hidden className="bg-linear-to-r from-background to-background z-1 absolute -inset-16 bg-white/50 via-transparent sm:-inset-32 dark:bg-transparent" />

                                    <div aria-hidden className="absolute -inset-16 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] [--color-border:var(--color-zinc-400)] sm:-inset-32 dark:[--color-border:color-mix(in_oklab,var(--color-white)_20%,transparent)]" />
                                    <div aria-hidden className="from-background z-11 absolute inset-0 bg-gradient-to-l" />
                                    <div aria-hidden className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]" />
                                    <div aria-hidden className="z-2 absolute inset-0 size-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,var(--color-background)_100%)]" />

                                    <Image className="rounded-(--radius) z-1 relative border dark:hidden" src="/card.png" alt="tailus ui hero section" width={2880} height={2074} />
                                    <Image className="rounded-(--radius) z-1 relative hidden border dark:block" src="/dark-card.webp" alt="tailus ui hero section" width={2880} height={2074} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-background relative z-10 py-16">
                    <div className="m-auto max-w-5xl px-6">
                        <h2 className="text-center text-lg font-medium">Your favorite companies are our partners.</h2>
                        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/column.svg" alt="Column Logo" height="16" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/github.svg" alt="GitHub Logo" height="16" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="20" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/laravel.svg" alt="Laravel Logo" height="16" width="auto" />
                            <img className="h-7 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lilly.svg" alt="Lilly Logo" height="28" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg" alt="Lemon Squeezy Logo" height="20" width="auto" />
                            <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/openai.svg" alt="OpenAI Logo" height="24" width="auto" />
                            <img className="h-4 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/tailwindcss.svg" alt="Tailwind CSS Logo" height="16" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/vercel.svg" alt="Vercel Logo" height="20" width="auto" />
                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/zapier.svg" alt="Zapier Logo" height="20" width="auto" />
                        </div>
                    </div>
                </section>

                <section className="px-4 py-16 md:py-32">
                    <div className="mb-8 text-center md:mb-12">
                        <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Built to cover your needs</h2>
                        <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur, praesentium iusto repellendus.</p>
                    </div>
                    <div className="mx-auto grid max-w-5xl border md:grid-cols-2">
                        <div>
                            <div className="p-6 sm:p-12">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <MapIcon className="size-4" />
                                    Real time location tracking
                                </span>

                                <p className="mt-8 text-2xl font-semibold">Advanced tracking system, Instantly locate all your assets.</p>
                            </div>

                            <div aria-hidden className="relative">
                                <div className="absolute inset-0 z-10 m-auto size-fit">
                                    <div className="rounded-(--radius) bg-background z-1 dark:bg-muted relative flex size-fit w-fit items-center gap-2 border px-3 py-1 text-xs font-medium shadow-md shadow-zinc-950/5">
                                        <span className="text-lg">🇨🇩</span> Last connection from DR Congo
                                    </div>
                                    <div className="rounded-(--radius) bg-background absolute inset-2 -bottom-2 mx-auto border px-3 py-4 text-xs font-medium shadow-md shadow-zinc-950/5 dark:bg-zinc-900"></div>
                                </div>

                                <div className="relative overflow-hidden">
                                    <div className="bg-radial z-1 to-background absolute inset-0 from-transparent to-75%"></div>
                                    <Map />
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden border-t bg-zinc-50 p-6 sm:p-12 md:border-0 md:border-l dark:bg-transparent">
                            <div className="relative z-10">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <MessageCircle className="size-4" />
                                    Email and web support
                                </span>

                                <p className="my-8 text-2xl font-semibold">Reach out via email or web for any assistance you need.</p>
                            </div>
                            <div aria-hidden className="flex flex-col gap-8">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="flex size-5 rounded-full border">
                                            <Logo className="m-auto size-3" />
                                        </span>
                                        <span className="text-muted-foreground text-xs">Sat 22 Feb</span>
                                    </div>
                                    <div className="rounded-(--radius) bg-background mt-1.5 w-3/5 border p-3 text-xs">Hey, I'm having trouble with my account.</div>
                                </div>

                                <div>
                                    <div className="rounded-(--radius) mb-1 ml-auto w-3/5 bg-blue-600 p-3 text-xs text-white">Molestiae numquam debitis et ullam distinctio provident nobis repudiandae deleniti necessitatibus.</div>
                                    <span className="text-muted-foreground block text-right text-xs">Now</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-full border-y p-12">
                            <p className="text-center text-4xl font-semibold lg:text-7xl">99.99% Uptime</p>
                        </div>
                        <div className="relative col-span-full">
                            <div className="absolute z-10 max-w-lg px-6 pr-12 pt-6 md:px-12 md:pt-12">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <Activity className="size-4" />
                                    Activity feed
                                </span>

                                <p className="my-8 text-2xl font-semibold">
                                    Monitor your application's activity in real-time. <span className="text-muted-foreground"> Instantly identify and resolve issues.</span>
                                </p>
                            </div>
                            <MonitoringChart />
                        </div>
                    </div>
                </section>

                <section className="pb-16 md:pb-32">
                    <div className="mx-auto max-w-5xl space-y-12 px-6 lg:px-0">
                        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                            <h2 className="text-4xl font-semibold">The Lyra ecosystem brings together our models</h2>
                            <p className="max-w-sm sm:ml-auto">Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.</p>
                        </div>
                        <div className="relative rounded-3xl p-3 md:-mx-8 lg:col-span-3">
                            <div className="aspect-88/36 relative">
                                <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                                <Image src="/mail-upper.png" className="absolute inset-0 z-10" alt="payments illustration dark" width={2797} height={1137} />
                                <Image src="/mail-back.png" className="hidden dark:block" alt="payments illustration dark" width={2797} height={1137} />
                                <Image src="/mail-back-light.png" className="dark:hidden" alt="payments illustration light" width={2797} height={1137} />
                            </div>
                        </div>
                        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Faaast</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Powerful</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Lock className="size-4" />
                                    <h3 className="text-sm font-medium">Security</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="size-4" />

                                    <h3 className="text-sm font-medium">AI Powered</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It supports an helping developers businesses innovate.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-50 py-12 md:py-20 dark:bg-zinc-900/50">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                            <h2 className="text-4xl font-medium lg:text-5xl">Tailus UI in numbers</h2>
                            <p>Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                        </div>

                        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                            <div className="space-y-4">
                                <div className="text-5xl font-bold">+1200</div>
                                <p>Stars on GitHub</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-5xl font-bold">22 Million</div>
                                <p>Active Users</p>
                            </div>
                            <div className="space-y-4">
                                <div className="text-5xl font-bold">+500</div>
                                <p>Powered Apps</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">The Lyra ecosystem brings together our models.</h2>
                        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="relative mb-6 sm:mb-0">
                                <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                    <Image src="/payments.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                                    <Image src="/payments-light.png" className="rounded-[15px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                                </div>
                            </div>

                            <div className="relative space-y-4">
                                <p className="text-muted-foreground">
                                    Gemini is evolving to be more than just the models. <span className="text-accent-foreground font-bold">It supports an entire ecosystem</span> — from products innovate.
                                </p>
                                <p className="text-muted-foreground">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                                <div className="pt-6">
                                    <blockquote className="border-l-4 pl-4">
                                        <p>Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                                        <div className="mt-6 space-y-3">
                                            <cite className="block font-medium">John Doe, CEO</cite>
                                            <img className="h-5 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-zinc-50 py-16 md:py-32 dark:bg-blue-600">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="mx-auto max-w-2xl">
                            <blockquote>
                                <p className="text-lg font-semibold sm:text-xl md:text-3xl">Using TailsUI has been like unlocking a secret design superpower. It's the perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                                <div className="mt-12 flex items-center gap-6">
                                    <img className="h-7 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nvidia.svg" alt="Nvidia Logo" height="20" width="auto" />
                                    <div className="space-y-1 border-l pl-6">
                                        <cite className="font-medium">John Doe</cite>
                                        <span className="text-muted-foreground block text-sm">CEO, Nvidia</span>
                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
                        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">APIs and platforms helping developers</h2>
                        <div className="relative">
                            <div className="relative z-10 space-y-4 md:w-1/2">
                                <p className="text-body">
                                    Lyra is evolving to be more than just the models. <span className="text-title font-medium">It supports an entire ecosystem</span> — from products innovate.
                                </p>
                                <p>It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                                <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <Zap className="size-4" />
                                            <h3 className="text-sm font-medium">Faaast</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Cpu className="size-4" />
                                            <h3 className="text-sm font-medium">Powerful</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                                <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                                <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                                    <Image src="/charts.png" className="hidden rounded-[12px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                                    <Image src="/charts-light.png" className="rounded-[12px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:px-0">
                        <div className="relative z-10 max-w-2xl space-y-6">
                            <h2 className="text-4xl font-medium lg:text-5xl">Loved by thousand developers</h2>
                            <p className="text-balance">Gemini is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                                <CardHeader>
                                    <img className="h-6 w-fit dark:invert" src="https://html.tailus.io/blocks/customers/nike.svg" alt="Nike Logo" height="24" width="auto" />
                                </CardHeader>
                                <CardContent>
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">Tailus has transformed the way I develop web applications. Their extensive collection of UI components, blocks, and templates has significantly accelerated my workflow. The flexibility to customize every aspect allows me to create unique user experiences. Tailus is a game-changer for modern web development</p>

                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage src="https://tailus.io/images/reviews/shekinah.webp" alt="Shekinah Tshiokufila" height="400" width="400" loading="lazy" />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div>
                                                <cite className="text-sm font-medium">Shekinah Tshiokufila</cite>
                                                <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                            <Card className="md:col-span-2">
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p className="text-xl font-medium">Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.</p>

                                        <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage src="https://tailus.io/images/reviews/jonathan.webp" alt="Jonathan Yombo" height="400" width="400" loading="lazy" />
                                                <AvatarFallback>JY</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className="text-sm font-medium">Jonathan Yombo</cite>
                                                <span className="text-muted-foreground block text-sm">Software Ingineer</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p>Great work on tailfolio template. This is one of the best personal website that I have seen so far!</p>

                                        <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                            <Avatar className="size-12">
                                                <AvatarImage src="https://tailus.io/images/reviews/yucel.webp" alt="Yucel Faruksahan" height="400" width="400" loading="lazy" />
                                                <AvatarFallback>YF</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <cite className="text-sm font-medium">Yucel Faruksahan</cite>
                                                <span className="text-muted-foreground block text-sm">Creator, Tailkits</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                            <Card className="card variant-mixed">
                                <CardContent className="h-full pt-6">
                                    <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                        <p>Great work on tailfolio template. This is one of the best personal website that I have seen so far!</p>

                                        <div className="grid grid-cols-[auto_1fr] gap-3">
                                            <Avatar className="size-12">
                                                <AvatarImage src="https://tailus.io/images/reviews/rodrigo.webp" alt="Rodrigo Aguilar" height="400" width="400" loading="lazy" />
                                                <AvatarFallback>YF</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="text-sm font-medium">Rodrigo Aguilar</p>
                                                <span className="text-muted-foreground block text-sm">Creator, TailwindAwesome</span>
                                            </div>
                                        </div>
                                    </blockquote>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-5xl px-6">
                        <div className="text-center">
                            <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Start Building</h2>
                            <p className="mt-4">Libero sapiente aliquam quibusdam aspernatur.</p>

                            <div className="mt-8 flex flex-wrap justify-center gap-4">
                                <Button asChild size="lg">
                                    <Link href="/">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>

                                <Button asChild size="lg" variant="outline">
                                    <Link href="/">
                                        <span>Book Demo</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="mt-16 border-t bg-white py-16 dark:bg-transparent">
                    <div className="mx-auto max-w-5xl px-6 lg:px-0">
                        <div className="grid gap-12 md:grid-cols-5">
                            <div className="md:col-span-2">
                                <Link href="/" aria-label="go home" className="block size-fit">
                                    <Logo />
                                </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 md:col-span-3">
                                {links.map((link, index) => (
                                    <div key={index} className="space-y-4 text-sm">
                                        <span className="block font-medium">{link.group}</span>
                                        {link.items.map((item, index) => (
                                            <Link key={index} href={item.href} className="text-muted-foreground hover:text-primary block duration-150">
                                                <span>{item.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
                            <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Tailus UI, All rights reserved</span>
                            <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
                                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="X/Twitter" className="text-muted-foreground hover:text-primary block">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary block">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"></path>
                                    </svg>
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-primary block">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"></path>
                                    </svg>
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Threads" className="text-muted-foreground hover:text-primary block">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.25 8.505c-1.577-5.867-7-5.5-7-5.5s-7.5-.5-7.5 8.995s7.5 8.996 7.5 8.996s4.458.296 6.5-3.918c.667-1.858.5-5.573-6-5.573c0 0-3 0-3 2.5c0 .976 1 2 2.5 2s3.171-1.027 3.5-3c1-6-4.5-6.5-6-4" color="currentColor"></path>
                                    </svg>
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-primary block">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path
                                            fill="currentColor"
                                            d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path>
                                    </svg>
                                </Link>
                                <Link href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-muted-foreground hover:text-primary block">
                                    <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}

const map = new DottedMap({ height: 55, grid: 'diagonal' })

const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'var(--color-background)',
    color: 'currentColor',
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg viewBox={viewBox} style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle key={index} cx={point.x} cy={point.y} r={svgOptions.radius} fill={svgOptions.color} />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Desktop',
        color: '#2563eb',
    },
    mobile: {
        label: 'Mobile',
        color: '#60a5fa',
    },
} satisfies ChartConfig

const chartData = [
    { month: 'May', desktop: 56, mobile: 224 },
    { month: 'June', desktop: 56, mobile: 224 },
    { month: 'January', desktop: 126, mobile: 252 },
    { month: 'February', desktop: 205, mobile: 410 },
    { month: 'March', desktop: 200, mobile: 126 },
    { month: 'April', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer className="h-120 aspect-auto md:h-96" config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
                    </linearGradient>
                    <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                        <stop offset="55%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} />
                <ChartTooltip active cursor={false} content={<ChartTooltipContent className="dark:bg-muted" />} />
                <Area strokeWidth={2} dataKey="mobile" type="stepBefore" fill="url(#fillMobile)" fillOpacity={0.1} stroke="var(--color-mobile)" stackId="a" />
                <Area strokeWidth={2} dataKey="desktop" type="stepBefore" fill="url(#fillDesktop)" fillOpacity={0.1} stroke="var(--color-desktop)" stackId="a" />
            </AreaChart>
        </ChartContainer>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
