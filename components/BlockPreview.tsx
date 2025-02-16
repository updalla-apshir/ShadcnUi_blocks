'use client'

import type React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Check, Code2, Copy, Eye } from 'lucide-react'
import { Panel, PanelGroup, PanelResizeHandle, type ImperativePanelGroupHandle } from 'react-resizable-panels'
import { Separator } from '@/components/ui/separator'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useCopyToClipboard } from '@/hooks/useClipboard'
import { useMedia } from 'use-media'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import CodeBlock from './code-block'

export interface BlockPreviewProps {
    code: string
    preview: string
    title: string
}

const radioItem = 'rounded-full duration-200 flex border border-transparent items-center justify-center h-7 px-2.5 gap-2 transition-[color] data-[state=checked]:bg-muted'

const DEFAULTSIZE = 100
const SMSIZE = 30
const MDSIZE = 62
const LGSIZE = 82

export const BlockPreview: React.FC<BlockPreviewProps> = ({ code, preview, title }) => {
    const [width, setWidth] = useState(DEFAULTSIZE)
    const [mode, setMode] = useState<'preview' | 'code'>('preview')
    const [iframeHeight, setIframeHeight] = useState(0)
    const { copied, copy } = useCopyToClipboard(code)
    const ref = useRef<ImperativePanelGroupHandle>(null)
    const isLarge = useMedia('(min-width: 1024px)')

    const iframeRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        const iframe = iframeRef.current
        const handleLoad = () => {
            const contentHeight = iframe!.contentWindow!.document.body.scrollHeight

            iframe!.style.height = `${contentHeight}px`
            setIframeHeight(contentHeight)
        }

        iframe!.addEventListener('load', handleLoad)
        return () => {
            iframe!.removeEventListener('load', handleLoad)
        }
    }, [])

    return (
        <section className="group mb-32 border-b [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
            <div className="relative border-y">
                <div aria-hidden className="absolute inset-x-4 -top-14 bottom-0 mx-auto max-w-7xl lg:inset-x-0">
                    <div className="to-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
                    <div className="to-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b from-transparent to-75%"></div>
                </div>

                <div className="relative z-10 mx-auto flex max-w-7xl justify-between py-1.5 pl-8 pr-6 md:py-2 lg:pl-6 lg:pr-2">
                    <div className="-ml-3 flex items-center gap-3">
                        {code && (
                            <>
                                <Separator orientation="vertical" className="hidden !h-4 lg:block" />

                                <RadioGroup.Root className="rounded-(--radius) flex gap-0.5 p-0.5">
                                    <RadioGroup.Item onClick={() => setMode('preview')} aria-label="Block preview" value="100" checked={mode == 'preview'} className={radioItem}>
                                        <Eye className="size-3.5 opacity-50" />
                                        <span className="text-[13px]">Preview</span>
                                    </RadioGroup.Item>

                                    <RadioGroup.Item onClick={() => setMode('code')} aria-label="Code" value="0" checked={mode == 'code'} className={radioItem}>
                                        <Code2 className="size-3.5 opacity-50" />
                                        <span className="text-[13px]">Code</span>
                                    </RadioGroup.Item>
                                </RadioGroup.Root>

                                <Separator orientation="vertical" className="hidden !h-4 lg:block" />
                            </>
                        )}
                        <span className="text-muted-foreground hidden text-sm lg:block">{width < MDSIZE ? 'Mobile' : width < LGSIZE ? 'Tablet' : 'Desktop'}</span>{' '}
                    </div>

                    <div className="flex items-center gap-2">
                        {code && (
                            <>
                                <Separator className="!h-4" orientation="vertical" />

                                <Button onClick={copy} size="sm" variant="ghost" aria-label="copy code" className="size-8">
                                    {copied ? <Check className="size-4" /> : <Copy className="!size-3.5" />}
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative">
                <div aria-hidden className="absolute inset-x-0 -bottom-14 mx-auto h-14 max-w-7xl">
                    <div className="from-(--color-border) absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b"></div>
                    <div className="from-(--color-border) absolute bottom-0 right-0 top-0 w-px bg-gradient-to-b"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 lg:border-r lg:px-0">
                    <div className={cn('bg-white dark:bg-transparent', mode == 'code' && 'hidden')}>
                        <PanelGroup direction="horizontal" tagName="div" ref={ref}>
                            <Panel
                                onResize={(size) => {
                                    setWidth(Number(size))
                                }}
                                defaultSize={DEFAULTSIZE}
                                minSize={SMSIZE}
                                className="h-fit border-x">
                                <iframe ref={iframeRef} loading="lazy" title={title} className="block h-full min-h-[45rem] w-full" src={preview} id={`block-${title}`} />
                            </Panel>

                            {isLarge && (
                                <>
                                    <PanelResizeHandle className="relative w-2 before:absolute before:inset-0 before:m-auto before:h-12 before:w-1 before:rounded-full before:bg-zinc-300 before:transition-[height,background] hover:before:h-16 hover:before:bg-zinc-400 focus:before:bg-zinc-400 dark:before:bg-zinc-600 dark:hover:before:bg-zinc-500 dark:focus:before:bg-zinc-400" />
                                    <Panel defaultSize={100 - DEFAULTSIZE} className="-mr-[0.5px] ml-px"></Panel>
                                </>
                            )}
                        </PanelGroup>
                    </div>

                    <div className="bg-white dark:bg-transparent">{mode == 'code' && <CodeBlock code={code} lang="tsx" maxHeight={iframeHeight} />}</div>
                </div>
            </div>
        </section>
    )
}

export default BlockPreview
