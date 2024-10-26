import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p>
        {children}
        <p className="text-sm mt-5 text-center">{type === 'login' ? "Don't Worry an account? " : "Have an account?  "}
          {/* {type === 'login' ? <Link to="/register" className="font-bold text-blue-600">Sign Up</Link> : <Link to="/login" className="font-bold text-blue-600">Login</Link>} */}
          {type === 'login' && (
            <Link to="/register" className="font-bold text-blue-600">Sign Up</Link>
          )}
          {type === 'register' && (
            <Link to="/login" className="font-bold text-blue-600">Login</Link>
          )}
        </p>
      </div>
    </div >
  );
}

export default AuthLayout;