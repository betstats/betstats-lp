import * as Primitive from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

export const Content = ({ children, className, ...rest }: Primitive.AccordionContentProps) => {
  return (
    <Primitive.Content className={twMerge('w-full p-4 md:p-6', className)} {...rest}>
      {children}
    </Primitive.Content>
  );
};
