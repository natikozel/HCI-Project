import {memo, SVGProps} from 'react';

const RehoshIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={800}
        height={800}
        viewBox="0 0 256 240"
        {...props}
    >
        <path d="M126.75 95.04h-8.38l-24.45 38.01-2.95-28.46 4.02-9.64H76.96l4.02 9.64-3.13 28.64L53.4 95.04h-9.82C20.65 95.04 2 113.78 2 136.62V238h29.09v-92.99H31c0-2.5 1.61-4.19 4.2-4.19 2.58 0 4.19 1.6 4.19 4.19V238h91.47v-92.99c0-2.5 1.61-4.19 4.19-4.19 2.5 0 4.2 1.6 4.2 4.19V238h29.09V136.62c0-22.93-18.74-41.58-41.59-41.58zM84.63 20.26c-18.38 0-33.28 14.9-33.28 33.28 0 18.39 14.9 33.29 33.28 33.29 18.39 0 33.29-14.9 33.29-33.29 0-18.38-14.9-33.28-33.29-33.28zM235 9V2h-39v7h-20v100h32V88h14v21h32V9h-19zm-33 64h-13V60h13v13zm0-19h-13V41h13v13zm0-19h-13V22h13v13zm20 38h-14V60h14v13zm0-19h-14V41h14v13zm0-19h-14V22h14v13zm19 38h-13V60h13v13zm0-19h-13V41h13v13zm0-19h-13V22h13v13z" />
    </svg>
);
const Memo = memo(RehoshIcon);
export {Memo as RehoshIcon};

