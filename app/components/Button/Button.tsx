import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { Link } from "@remix-run/react";
import { cn } from "../../lib/utils";


const buttonVariants = cva(
  'rounded-md w-fit inline-flex items-center justify-center',
  {
    variants: {
      variant: {
        primary: 'bg-indigo-700 text-white hover:bg-indigo-800 disabled:bg-neutral-100 drop-shadow-md',
        secondary: 'bg-neutral-100 text-black hover:ring-2 ring-violet-400 ring-inset disabled:bg-neutral-400 drop-shadow-md',
        tertiary: 'bg-neutral-100 text-indigo-700 hover:ring-2 ring-inset drop-shadow-md',
        linkColor: 'bg-neutral-100 text-indigo-700 shadow-none',
        linkGray: ''
      },
      size: {
        sm: 'py-2 px-3 min-w-18 h-9',
        md: 'py-2.5 px-3.5 min-w-20 h-10',
        lg: 'py-2.5 px-4 min-w-24 h-11',
        xl: 'py-3 px-5',
        xxl: 'py-4 px-6'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href?: string
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, href, variant, size, ...props }, ref) => {
    if (href) {
      return (
        <Link
          to={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      )
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }