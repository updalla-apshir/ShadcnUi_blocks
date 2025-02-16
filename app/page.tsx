import BlockPreview from "@/components/BlockPreview";
import PricingOne from "@/components/pricing/One";
import { Button } from "@/components/ui/button";
import { ChevronRight, GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="absolute inset-0 -z-10 max-h-96 bg-[radial-gradient(ellipse_80%_70%_at_20%_-20%,var(--bg-color),transparent)] duration-300 [--bg-color:var(--color-indigo-400)] dark:[--bg-color:var(--color-zinc-800)]"></div>
      
      <div className="absolute inset-x-0 top-0 mx-auto hidden max-w-7xl lg:block">
          <div className="absolute left-0 top-0 h-56 w-px bg-gradient-to-b from-gray-950/[0.07] dark:from-white/[0.07]"></div>
          <div className="absolute right-0 top-0 h-56 w-px bg-gradient-to-b from-gray-950/[0.07] dark:from-white/[0.07]"></div>
          <div className="absolute -left-20 top-16 h-12 w-20 p-2">
              <div className="-z-10 h-full w-full bg-[radial-gradient(var(--bg-color)_1px,transparent_1px)] [--bg-color:theme(colors.gray.950/0.1)] [background-size:6px_6px] dark:[--bg-color:theme(colors.white/0.05)]"></div>
          </div>
          <div className="absolute -right-20 top-16 h-12 w-20 p-2">
              <div className="-z-10 h-full w-full bg-[radial-gradient(var(--bg-color)_1px,transparent_1px)] [--bg-color:theme(colors.gray.950/0.1)] [background-size:6px_6px] dark:[--bg-color:theme(colors.white/0.05)]"></div>
          </div>
      </div>
      <div className="absolute top-16 inset-x-0 z-20 mx-auto h-12 border-y border-gray-950/[0.07] dark:border-white/5"></div>
      
      <div className="">
        <div className="max-w-7xl mx-auto px-6">

          <div className="md:pb-14 lg:pb-16 pt-4 max-w-xl">
            <Link href="" className="flex w-fit items-center gap-2">
              <svg className="size-7" viewBox="0 0 71 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M61.25 1.625L70.75 1.5625C70.75 4.77083 70.25 7.79167 69.25 10.625C68.2917 13.4583 66.8958 15.9583 65.0625 18.125C63.2708 20.25 61.125 21.9375 58.625 23.1875C56.1667 24.3958 53.4583 25 50.5 25C46.875 25 43.6667 24.2708 40.875 22.8125C38.125 21.3542 35.125 19.2083 31.875 16.375C29.75 14.4167 27.7917 12.8958 26 11.8125C24.2083 10.7292 22.2708 10.1875 20.1875 10.1875C18.0625 10.1875 16.25 10.7083 14.75 11.75C13.25 12.75 12.0833 14.1875 11.25 16.0625C10.4583 17.9375 10.0625 20.1875 10.0625 22.8125L0 22.9375C0 19.6875 0.479167 16.6667 1.4375 13.875C2.4375 11.0833 3.83333 8.64583 5.625 6.5625C7.41667 4.47917 9.54167 2.875 12 1.75C14.5 0.583333 17.2292 0 20.1875 0C23.8542 0 27.1042 0.770833 29.9375 2.3125C32.8125 3.85417 35.7708 5.97917 38.8125 8.6875C41.1042 10.7708 43.1042 12.3333 44.8125 13.375C46.5625 14.375 48.4583 14.875 50.5 14.875C52.6667 14.875 54.5417 14.3125 56.125 13.1875C57.75 12.0625 59 10.5 59.875 8.5C60.7917 6.5 61.25 4.20833 61.25 1.625Z" fill="currentColor"/>
              </svg>
              <span className="font-bold sr-only">ns UI</span>
            </Link>

            <h1 className="mt-32 text-4xl font-bold md:text-nowrap">Shadcn Pricing Blocks</h1>
            <p className="mt-4 text-base md:text-lg">Speed up your workflow with responsive, pre-built UI blocks designed for marketing websites.</p>
          </div>
        </div>
      </div>
      
      <div className="divide-y">
        <BlockPreview src="https://html.tailus.io/blocks-preview/pricing/one" code="<div/>" title="title 1"/>
        <BlockPreview src="https://html.tailus.io/blocks-preview/team/one" code="<div/>" title="title 2"/>
      </div>
    </div>
  );
}
