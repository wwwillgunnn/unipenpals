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
    'btn-primary': 'rounded-full bg-[#D48A67] border-2 border-[#D48A67] text-white hover:bg-[#BF7553] hover:border-[#BF7553]',
    'btn-outline': 'rounded-full border-2 border-[#D48A67] text-white hover:bg-[#D48A67] hover:text-white',
    'btn-square': 'bg-[#D48A67] border-2 border-[#D48A67] text-white hover:bg-[#BF7553] hover:border-[#BF7553] py-2',
    'btn-square-outline': 'border-2 border-[#D48A67] text-white hover:bg-[#D48A67] hover:text-white py-2'
  };
  return (
    <Link href={href}>
      <button className={`${baseStyles} ${variantStyles[variant]}`} type={type}>
        {title}
      </button>
    </Link>
  )
}