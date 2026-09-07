type ButtonProps = {
  children: React.ReactNode;
  bgColor: string;
};

function Button({ children, bgColor }: ButtonProps) {
  return (
    <button className={`${bgColor} font-bold py-3 px-10 rounded-4xl shadow-2xl hover:bg-gray-500 hover:text-white`}>
      {children}
    </button>
  );
}

export default Button;