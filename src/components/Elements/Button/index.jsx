const Button = (bebas) => {
  const { children = "Kosong", variant = "bg-blue-600" } = bebas;
  return (
    <button className={`h-10 w-full px-6 font-semibold rounded-md ${variant} text-white`} type="submit">{children}</button>
  );
};

export default Button;