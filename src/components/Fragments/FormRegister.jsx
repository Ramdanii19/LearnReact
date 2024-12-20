import { useTranslation } from "react-i18next";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormRegister = () => {
  const { t } = useTranslation();
  return (
    <form action="">
      <InputForm title="Fullname" type="text" placeholder="ramdani" name="fullname" />
      <InputForm title="Email" type="email" placeholder="ramdani@gmail.com" name="email" />
      <InputForm title="Password" name="passsword" type="password" placeholder="********" />
      <InputForm title="Confirm Password" name="passsword" type="password" placeholder="********" />
      <Button variant="bg-blue-600">{t('signup')}</Button>
    </form>
  );
}

export default FormRegister;