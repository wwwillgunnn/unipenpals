'use client';

import Link from "next/link";

interface ButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  title?: string;
  variant: 'btn-primary' | 'btn-outline' | 'btn-square' | 'btn-square-outline';
  href?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export default function Button({ type, title, variant, href, children, onClick, disabled,  }: ButtonProps) {
  const baseStyles = 'flex flexCenter items-center justify-center gap-3 w-full px-6 py-3 border-[#D48A67] text-white transition-colors duration-300';
  const variantStyles = {
    'btn-primary':        'btn bg-[#D48A67] rounded-full hover:bg-[#BF7553] hover:border-[#BF7553]',
    'btn-outline':        'btn bg-[#6CA4B2] rounded-full border-2 hover:bg-[#D48A67] hover:border-[#D48A67]',
    'btn-square':         'btn bg-[#D48A67] hover:bg-[#BF7553] hover:border-[#BF7553]',
    'btn-square-outline': 'btn bg-[#6CA4B2] border-2 hover:bg-[#D48A67] hover:border-[#D48A67]'
  };

  return href ? (
    <Link href={href}>
      <button className={`${baseStyles} ${variantStyles[variant]}`}>{title}</button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      // ? Dynamic classes with clsx?
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {children}
    </button>
  );
}