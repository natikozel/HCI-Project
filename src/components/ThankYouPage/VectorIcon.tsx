import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.2806 18.2194C19.5737 18.5124 19.5737 18.9876 19.2806 19.2806C18.9876 19.5737 18.5124 19.5737 18.2194 19.2806L12 13.0603L5.78062 19.2806C5.48757 19.5737 5.01243 19.5737 4.71938 19.2806C4.42632 18.9876 4.42632 18.5124 4.71938 18.2194L10.9397 12L4.71938 5.78062C4.42632 5.48757 4.42632 5.01243 4.71938 4.71938C5.01243 4.42632 5.48757 4.42632 5.78062 4.71938L12 10.9397L18.2194 4.71938C18.5124 4.42632 18.9876 4.42632 19.2806 4.71938C19.5737 5.01243 19.5737 5.48757 19.2806 5.78062L13.0603 12L19.2806 18.2194Z'
      fill='white'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
