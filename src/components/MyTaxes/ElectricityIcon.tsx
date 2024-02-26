import {memo, SVGProps} from 'react';

const ElectricityIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        width={800}
        height={800}
        data-name="Layer 1"
        viewBox="0 0 24 24"
        {...props}
    >
        <defs>
            <style>
                {
                    ".cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px}"
                }
            </style>
        </defs>
        <path
            d="M1.5 6.27H11V11a2.86 2.86 0 0 1-2.86 2.86H4.36A2.86 2.86 0 0 1 1.5 11V6.27ZM3.41.55v5.72M9.14.55v5.72M4.36 13.91h3.82v1.91a1.91 1.91 0 0 1-1.91 1.91 1.91 1.91 0 0 1-1.91-1.91v-1.91Z"
            className="cls-1"
        />
        <path
            d="M6.27 17.73v.47a4.3 4.3 0 0 0 4.3 4.3 4.29 4.29 0 0 0 4.29-4.3v-8.11a3.82 3.82 0 0 1 3.82-3.82 3.82 3.82 0 0 1 3.82 3.82v13.36"
            className="cls-1"
        />
    </svg>
);
const Memo = memo(ElectricityIcon);
export {Memo as ElectricityIcon};

