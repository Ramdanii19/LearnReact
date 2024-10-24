const Button = (bebas) => {
  const { children = "Kosong", variant = "bg-white" } = bebas;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} to-white`} type="submit">${children}</button>
  );
};

export default Button;