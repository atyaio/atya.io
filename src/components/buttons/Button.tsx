import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center rounded-lg px-4 py-2 font-semibold',
          'shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900',
          'transition-colors duration-100',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-500 text-white',
              'border border-primary-600',
              'hover:bg-primary-600 hover:text-white',
              'active:bg-primary-500',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
              'focus:ring-primary-900',
            ],
            variant === 'outline' && [
              'text-primary-500',
              'border border-primary-500',
              'hover:bg-primary-900 hover:bg-opacity-30 active:bg-opacity-100 disabled:bg-primary-500',
              'focus:ring-primary-900',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'hover:text-white active:bg-primary-800 disabled:bg-primary-100',
              'focus:ring-primary-500',
            ],
            variant === 'light' && [
              'bg-white text-dark ',
              'border border-gray-300',
              'hover:bg-gray-100 hover:text-dark',
              'active:bg-white/80 disabled:bg-gray-200',
              'focus:ring-gray-400',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
