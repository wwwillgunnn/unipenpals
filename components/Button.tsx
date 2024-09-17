type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: 'btn btn-primary' | 'btn btn-outline btn-primary';
}

const Button = ({ type, title, variant }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full ${variant}`} type={type}>
      <label className="bold-16">{title}</label>
    </button>
  );
};

export default Button
