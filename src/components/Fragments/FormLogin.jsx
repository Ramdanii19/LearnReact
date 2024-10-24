import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm title="Email" type="email" placeholder="ramdani@gmail.com" name="email" />
      <InputForm title="Password" name="passsword" type="password" placeholder="********" />
      <Button variant="bg-blue-600">Login</Button>
    </form>
  );
}

export default FormLogin;