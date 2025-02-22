import { useState } from 'react';
import { sendGAEvent } from '@next/third-parties/google'

export const useCopyToClipboard = (text: string, title:string, category:string, mode:"code"|"preview") => {
    const [copied, setCopied] = useState(false);

    const copy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        setCopied(true);
        sendGAEvent('event', 'block_copy', {
            block_title: title,
            block_category: category,
            block_mode: mode,
        })
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
};