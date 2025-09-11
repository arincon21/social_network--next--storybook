interface IconProps {
  name: string;
  className?: string;
}

const Icon = ({ name, className }: IconProps) => {
  return (
    <svg className={ className } fill="currentColor">
      <use href={`/assets/svg-icons/sprites/icons.svg#${ name }`} />
    </svg>
  );
};

export default Icon;
