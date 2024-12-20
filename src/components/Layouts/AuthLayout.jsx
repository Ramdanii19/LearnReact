import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { useTranslation, Trans } from "react-i18next";


const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { t } = useTranslation();

  return (
    <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
      <div className="w-full max-w-xs">
        <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light" : "Dark"}
        </button>

        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        {/* <p className="font-medium text-slate-500 mb-8">Welcome, Please enter your details</p> */}
        <p className="font-medium text-slate-500 mb-8">{t('welcome')}</p>
        {children}
        {/* <p className="text-sm mt-5 text-center">{type === 'login' ? "{t('no_account')} " : "{t('no_account')} "} */}
        <p className="text-sm mt-5 text-center">{type === 'login' ? t('login_account') : t('signup_account')}
          {/* {type === 'login' ? <Link to="/register" className="font-bold text-blue-600">Sign Up</Link> : <Link to="/login" className="font-bold text-blue-600">Login</Link>} */}
          {type === 'login' && (
            <Link to="/register" className="font-bold text-blue-600"> {t('login_con')}</Link>
          )}
          {type === 'register' && (
            <Link to="/login" className="font-bold text-blue-600"> {t('signup_con')}</Link>
          )}
        </p>
      </div>
    </div >
  );
}

export default AuthLayout;