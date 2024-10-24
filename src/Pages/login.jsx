import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="text-sm mt-5 text-center">Don't Worry an account? <Link to="/register" className="font-bold text-blue-600">Sign Up</Link></p>
    </AuthLayout>
  );
}

export default LoginPage;