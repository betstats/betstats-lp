import * as Primitive from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

export const Item = ({ children, className, ...rest }: Primitive.AccordionItemProps) => {
  return (
    <Primitive.Item
      className={twMerge(
        'w-full bg-common-black-900 rounded-xl border border-common-black-700',
        className,
      )}
      {...rest}
    >
      {children}
    </Primitive.Item>
  );
};
