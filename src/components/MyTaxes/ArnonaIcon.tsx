import {memo, SVGProps} from 'react';

const ArnonaIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 512 512"
        {...props}
    >
        <path d="M256 1.468 0 254.586h39.984v255.946h432.033V254.586H512L256 1.468zm73.577 478.826H182.423V303.417c0-40.57 33.007-73.577 73.577-73.577s73.577 33.007 73.577 73.577v176.877zm112.202 0h-81.965V303.417c0-57.243-46.571-103.814-103.814-103.814s-103.814 46.571-103.814 103.814v176.876H70.221V227.678L256 43.99l185.779 183.689v252.615z" />
        <path d="M279.18 349.783h30.237v43.004H279.18z" />
    </svg>
);
const Memo = memo(ArnonaIcon);
export {Memo as ArnonaIcon};

