import React, { useContext, useEffect, useState } from 'react'
import Button from '../Elements/Button'
import { useLogin } from '../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { DarkMode } from '../../context/DarkMode';
import { useTotalPrice } from '../../context/TotalPriceContext';
import i18next from "i18next";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total } = useTotalPrice();

  const language = {
    en: { nativeName: 'English' },
    id: { nativeName: 'Indonesia' },
  }

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"
  }


  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        Item : {totalCart} | price : $ {total}
      </div>
      <Button className=" bg-black px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
      <div className=" absolute left-2 top-5 bg-slate-600 p-2 text-white rounded flex gap-8">
        {Object.keys(language).map((lng) => (
          <button
            type="submit"
            key={lng}
            onClick={() => i18next.changeLanguage(lng)}
            disabled={i18next.resolvedLanguage === lng}
          >
            {language[lng].nativeName}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Navbar