const Button = ({ children }) => {
  return (
    <button
      className="font-bold font-Public_sans text-white text-sm 
      leading-7 bg-gradient-to-br from-[#33D35E] to-[#2AB6D9] 
      py-2 px-8 rounded-[22px] hover:opacity-80"
    >
      {children}
    </button>
  );
};

export default Button;
