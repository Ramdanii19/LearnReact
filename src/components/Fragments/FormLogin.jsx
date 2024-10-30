import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/product"
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/product"
      } else {
        setLoginFailed(res.response.data);
      }
    });
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);


  return (
    <form onSubmit={handleLogin}>
      <InputForm title="Username" type="text" placeholder="ramdani" name="username" ref={usernameRef} />
      <InputForm title="Password" name="password" type="password" placeholder="********" />
      <Button variant="bg-blue-600" type="submit">Login</Button>
      {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
}

export default FormLogin;