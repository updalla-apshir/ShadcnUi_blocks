import BlockPreview from '@/components/BlockPreview'

export default function Home() {
    return (
        <>
            <BlockPreview preview="https://html.tailus.io/blocks-preview/pricing/one" code={`<div />`} category="pricing" title="title 1" />
            <BlockPreview preview="https://html.tailus.io/blocks-preview/team/one" code="<div/>" category="pricing" title="title 2" />
        </>
    )
}
