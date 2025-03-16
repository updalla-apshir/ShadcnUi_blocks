import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Calendar, MapIcon } from 'lucide-react'
import Image from 'next/image'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto grid grid-cols-2 gap-4">
                    <Card className="group relative rounded-none shadow-zinc-950/5">
                        <CardDecorator />
                        <CardHeader className="pb-3">
                            <div className="p-6">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <MapIcon className="size-4" />
                                    Real time location tracking
                                </span>

                                <p className="mt-8 text-2xl font-semibold">Advanced tracking system, Instantly locate all your assets.</p>
                            </div>
                        </CardHeader>

                        <div className="relative mb-6 border-t border-dashed sm:mb-0">
                            <div className="absolute inset-0 [background:radial-gradient(125%_125%_at_50%_0%,transparent_40%,var(--color-blue-600),var(--color-white)_100%)]"></div>
                            <div className="aspect-76/59 p-1 px-6">
                                <Image
                                    src="/payments.png"
                                    className="hidden rounded-[15px] dark:block"
                                    alt="payments illustration dark"
                                    width={1207}
                                    height={929}
                                />
                                <Image
                                    src="/payments-light.png"
                                    className="rounded-[15px] shadow dark:hidden"
                                    alt="payments illustration light"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>
                    </Card>

                    <Card className="group relative rounded-none shadow-zinc-950/5">
                        <CardDecorator />
                        <CardHeader className="pb-3">
                            <div className="p-6">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <Calendar className="size-4" />
                                    Real time location tracking
                                </span>

                                <p className="mt-8 text-2xl font-semibold">Advanced tracking system, Instantly locate all your assets.</p>
                            </div>
                        </CardHeader>

                        <CardContent>
                            <div className="relative mb-6 sm:mb-0">
                                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,var(--color-background)_100%)]"></div>
                                <div className="aspect-76/59 border">
                                    <Image
                                        src="/origin-cal-dark.png"
                                        className="hidden dark:block"
                                        alt="payments illustration dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <Image
                                        src="/origin-cal.png"
                                        className="shadow dark:hidden"
                                        alt="payments illustration light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group relative col-span-2 rounded-none p-6 shadow-zinc-950/5">
                        <p className="mx-auto my-6 max-w-md text-balance text-center text-2xl font-semibold">Advanced tracking system, Instantly locate all your assets.</p>

                        <CardDecorator />
                        <div className="flex justify-center gap-6">
                            <div>
                                <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
                                    <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                                        <div className="border-primary size-10 rounded-full border bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]"></div>
                                        <div className="border-primary size-10 rounded-full border bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]"></div>
                                    </div>
                                </div>
                                <span className="text-muted-foreground mt-1.5 block text-center text-sm">Inclusion</span>
                            </div>
                            <div>
                                <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
                                    <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                                        <div className="border-primary size-10 rounded-full border"></div>
                                        <div className="border-primary bg-background size-10 rounded-full border bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]"></div>
                                    </div>
                                </div>
                                <span className="text-muted-foreground mt-1.5 block text-center text-sm">Inclusion</span>
                            </div>

                            <div>
                                <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
                                    <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                                        <div className="bg-background z-1 size-10 rounded-full border border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]"></div>
                                        <div className="border-primary size-10 rounded-full border"></div>
                                    </div>
                                </div>
                                <span className="text-muted-foreground mt-1.5 block text-center text-sm">Join</span>
                            </div>
                            <div>
                                <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
                                    <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
                                        <div className="border-primary bg-background size-10 rounded-full border bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]"></div>
                                        <div className="border-primary size-10 rounded-full border"></div>
                                    </div>
                                </div>
                                <span className="text-muted-foreground mt-1.5 block text-center text-sm">Exclusion</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = () => (
    <>
        <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
        <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
        <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
        <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
    </>
)
