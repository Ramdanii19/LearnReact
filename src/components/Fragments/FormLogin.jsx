import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {

  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/product"
  }

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm title="Email" type="email" placeholder="ramdani@gmail.com" name="email" ref={emailRef} />
      <InputForm title="Password" name="password" type="password" placeholder="********" />
      <Button variant="bg-blue-600" type="submit">Login</Button>
    </form>
  );
}

export default FormLogin;