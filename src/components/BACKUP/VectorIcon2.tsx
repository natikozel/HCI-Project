import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M21.5306 7.28062L9.53063 19.2806C9.38995 19.4215 9.19906 19.5006 9 19.5006C8.80094 19.5006 8.61005 19.4215 8.46937 19.2806L3.21937 14.0306C2.92632 13.7376 2.92632 13.2624 3.21937 12.9694C3.51243 12.6763 3.98757 12.6763 4.28062 12.9694L9 17.6897L20.4694 6.21938C20.7624 5.92632 21.2376 5.92632 21.5306 6.21938C21.8237 6.51243 21.8237 6.98757 21.5306 7.28062V7.28062Z'
      fill='#0D0D1C'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };