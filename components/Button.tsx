import Link from "next/link";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  variant: 'btn-primary' | 'btn-outline' | 'btn-square' | 'btn-square-outline';
  href: string;
};

export default function Button({ type, title, variant, href }: ButtonProps) {
  const baseStyles = 'flex flexCenter items-center justify-center gap-3 px-6 py-3 transition-colors duration-300';
  const variantStyles = {
    'btn-primary': 'rounded-full bg-[#F4AFAF] text-white hover:bg-[#e5a3a3]',
    'btn-outline': 'rounded-full border-2 border-[#F4AFAF] text-white hover:bg-[#F4AFAF] hover:text-white',
    'btn-square': 'bg-[#F4AFAF] text-white hover:bg-[#e5a3a3] py-2',
    'btn-square-outline': 'border-2 border-[#F4AFAF] text-white hover:bg-[#F4AFAF] hover:text-white py-2' 
  };
  return (
    <Link href={href}>
      <button className={`${baseStyles} ${variantStyles[variant]}`} type={type}>
        {title}
      </button>
    </Link>
  )
}