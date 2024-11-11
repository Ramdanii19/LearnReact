import { useTranslation } from "react-i18next";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layouts/AuthLayout";

const RegisterPage = () => {
  const { t } = useTranslation();
  return (
    <AuthLayout title={t('signup')} type="register">
      <FormRegister />
    </AuthLayout>
  );
}

export default RegisterPage;