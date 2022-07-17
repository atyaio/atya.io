import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
}

type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
  active?: boolean;
  noHoverEffect?: boolean;
} & UnstyledLinkProps;

const ButtonLink = React.forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      children,
      className,
      active,
      noHoverEffect,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center rounded-lg px-3 py-1 font-semibold',
          'shadow-sm',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900',
          'transition-colors duration-100',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-500 text-white',
              'border border-primary-600',
              !noHoverEffect && 'hover:bg-primary-600 hover:text-white',
              'active:bg-primary-500',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
              'focus:ring-primary-900',
            ],
            variant === 'outline' && [
              'text-primary-500',
              'border border-primary-500',
              !noHoverEffect &&
                'hover:bg-primary-900 hover:bg-opacity-30 active:bg-opacity-100 disabled:bg-primary-500',
              'focus:ring-primary-900',
            ],
            variant === 'ghost' && [
              active ? 'text-primary-500' : 'text-white',
              'shadow-none',
              !noHoverEffect &&
                'hover:text-white active:bg-primary-800 disabled:bg-primary-100',
              'focus:ring-primary-500',
            ],
            variant === 'light' && [
              'bg-white text-dark ',
              'border border-gray-300',
              !noHoverEffect && 'hover:bg-gray-100 hover:text-dark',
              'active:bg-white/80 disabled:bg-gray-200',
              'focus:ring-gray-400',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default ButtonLink;
