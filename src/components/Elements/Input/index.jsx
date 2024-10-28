import Label from "./label";
import Input from "./Input"
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
  const { title, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder} ref={ref} />
    </div>
  );
});

export default InputForm;