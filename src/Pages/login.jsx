import { Link } from "react-router-dom";
import FormLogin from "../components/Fragments/FormLogin";
import AuthLayout from "../components/Layouts/AuthLayout";
import { useTranslation } from "react-i18next";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <AuthLayout title={t('login')} type="login">
      <FormLogin />
    </AuthLayout>
  );
}

export default LoginPage;