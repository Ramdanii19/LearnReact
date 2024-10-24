import Label from "./label";
import Input from "./Input"
const InputForm = (props) => {
  const { title, name, placeholder, type } = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{title}</Label>
      <Input name={name} type={type} placeholder={placeholder} />
    </div>
  );
}

export default InputForm;