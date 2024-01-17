import { PlusIcon } from '@/assets/icons/Plus';
import { useScreenDetector } from '@/hooks/useScreenDetector';
import * as Primitive from '@radix-ui/react-accordion';
import { twMerge } from 'tailwind-merge';

export const Trigger = ({ children, className, ...rest }: Primitive.AccordionTriggerProps) => {
  const { isMobile } = useScreenDetector();

  return (
    <Primitive.Trigger
      className={twMerge(
        'w-full flex justify-between items-center hover:opacity-70 duration-200 p-[10px] md:p-6',
        className,
      )}
      {...rest}
    >
      {children}
      <PlusIcon width={isMobile ? '9.38' : '22'} height={isMobile ? '9.38' : '22'} />
    </Primitive.Trigger>
  );
};
