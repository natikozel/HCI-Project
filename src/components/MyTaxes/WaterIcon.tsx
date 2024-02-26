import {memo, SVGProps} from 'react';

const WaterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 13.385a4.676 4.676 0 0 1-1.318 3.263c-.479.492-1.055.861-1.682 1.088m6-4.044C19 7.115 12 2 12 2S5 7.115 5 13.692c0 1.938.737 3.797 2.05 5.168C8.363 20.23 10.144 21 12 21c1.857 0 3.637-.77 4.95-2.14 1.313-1.371 2.05-3.23 2.05-5.168Z"
        />
    </svg>
);
const Memo = memo(WaterIcon);
export {Memo as WaterIcon};

