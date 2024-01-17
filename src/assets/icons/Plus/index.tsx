import { IconProps } from '@/assets/types';

export const PlusIcon = ({ width = '22', height = '22' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.0005 0.261475V8.99947H21.7384V12.883H13.0005V21.621H9.1169V12.883H0.378906V8.99947H9.1169V0.261475H13.0005Z"
        fill="#555A6D"
      />
    </svg>
  );
};
