import type { FC, SVGProps } from 'react';

export const Search: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`w-4 h-4 ${props.className ?? ''}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 10 17.5a7.5 7.5 0 0 0 6.65-3.85z"
      />
    </svg>
  );
};
