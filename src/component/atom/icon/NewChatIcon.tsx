'use client';

import { SVGProps } from 'react';

export default function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1.5em'
      height='1.5em'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M3 20V5q0-.825.588-1.412T5 3h12q.825 0 1.413.588T19 5v5.075q-.25-.05-.5-.062T18 10t-.5.013t-.5.062V5H5v10h7.075q-.05.25-.062.5T12 16t.013.5t.062.5H6zM7 9h8V7H7zm0 4h5v-2H7zm10 7v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 15V5z'
      ></path>
    </svg>
  );
}
