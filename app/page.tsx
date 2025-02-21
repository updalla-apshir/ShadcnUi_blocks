import BlockPreview from '@/components/BlockPreview'

const code = `"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
     
    return (
        <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="ghost"
            className="size-8"
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    )
}`

export default function Home() {
    return (
        <>
            <BlockPreview preview="https://html.tailus.io/blocks-preview/pricing/one" code={code} title="title 1" />
            <BlockPreview preview="https://html.tailus.io/blocks-preview/team/one" code="<div/>" title="title 2" />
        </>
    )
}
