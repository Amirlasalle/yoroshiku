interface CustomButtonProps {
 onClick: () => void;
 className?: string;
}


const CustomButton: React.FC<CustomButtonProps> = ({
    onClick,
    className
}) => {
  return (
    <div 
    onClick={onClick}
    className={`cursor-pointer items-center py-2 px-2 rounded-full bg-airbnb hover:bg-airbnbDark ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />

      </svg>
    </div>
  );
};

export default CustomButton;
