import { ButtonHTMLAttributes, HTMLAttributeAnchorTarget, ReactNode } from 'react';
import { useButton } from './hooks/useButton';
import { twMerge } from 'tailwind-merge';
import When from '../When';
import Link from 'next/link';

export type ButtonScheme = 'gradient' | 'outlined';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  scheme?: ButtonScheme;
  withoutAction?: boolean;
  children: ReactNode;
  isLink?: boolean;
  link?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
};

export const Button = ({
  scheme = 'gradient',
  children,
  disabled,
  className,
  withoutAction,
  onClick,
  isLink,
  link,
  target,
  ...rest
}: Props) => {
  const { getSchemeClassname } = useButton();

  return (
    <When
      conditional={isLink}
      trueRender={
        <Link
          target={target}
          href={link || ''}
          className={twMerge(
            'flex gap-[10px] items-center rounded-md font-semibold px-5 lg:px-6 py-3 lg:py-4 hover:opacity-70 duration-200',
            getSchemeClassname(scheme),
            disabled ? 'opacity-60 cursor-default' : '',
            className,
            withoutAction ? 'pointer-events-none hover:opacity-100' : '',
          )}
        >
          {children}
        </Link>
      }
      falseRender={
        <button
          {...rest}
          onClick={withoutAction || disabled ? undefined : onClick}
          className={twMerge(
            'flex gap-[10px] items-center rounded-md font-semibold px-5 lg:px-6 py-3 lg:py-4 hover:opacity-70 duration-200',
            getSchemeClassname(scheme),
            disabled ? 'opacity-60 cursor-default' : '',
            className,
            withoutAction ? 'pointer-events-none hover:opacity-100' : '',
          )}
        >
          {children}
        </button>
      }
    />
  );
};
