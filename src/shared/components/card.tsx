interface CardProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  titleSlot?: React.ReactNode;
  className?: string;
}

const Card = ({ title, children, titleSlot, className }: CardProps) => {
  return (
    <div className="bg-[#ffffff] rounded-[5px] border border-[#e6ecf5] mb-[15px] overflow-hidden" >
      {
        (title || titleSlot) && (
          <div className="flex justify-between font-bold text-[#515365] px-[25px] pt-[23px] pb-[18px] border-t border-b border-[#e6ecf5] w-full relative">
            {
              title && (
                <h2 className="flex items-center justify-start">{title}</h2>
              )
            }
            {
              titleSlot && (
                <div className="flex items-center justify-end">
                  {titleSlot}
                </div>
              )
            }
          </div>
        )
      }
      <div className={className}>{children}</div>
    </div>
  );
};

export default Card;
