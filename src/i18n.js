import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector"

i18next
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          login: 'Login',
          signup: 'SignUp',
          welcome: 'Welcome, Please enter your details',
          login_account: "Don't Worry an account?",
          login_con: "Sign Up",
          signup_account: "Have an account?",
          signup_con: "Login",
          cart: "Add To Cart",
        }
      },
      id: {
        translation: {
          login: 'Masuk',
          signup: 'Daftar',
          welcome: 'Selamat datang, Silakan masukkan detail Anda',
          login_account: 'Tidak Punya Akun? ',
          login_con: "Daftar",
          signup_account: "Mempunyai Akun?",
          signup_con: "Masuk",
          cart: 'Tambah Ke Keranjang'
        }
      }
    }
  })