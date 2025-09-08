interface CardProps {
  title?: string;
  children: React.ReactNode;
}

const Card = ({ title, children } : CardProps) => {
  return (
    <div className="bg-[#ffffff] rounded-[5px] border border-[#e6ecf5] mb-[15px]">
      {
        title && (
          <h2 className="font-bold leading-snug text-[#515365] px-[25px] pt-[23px] pb-[18px] border-t border-b border-[#e6ecf5] table w-full relative rounded-t-[5px]">{title}</h2>
        )
      }
      <div className="pt-[24px] px-[23px] pb-[23px]">{children}</div>
    </div>
  );
};

export default Card;
