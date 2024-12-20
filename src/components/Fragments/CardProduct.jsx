import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useTranslation } from "react-i18next";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full max-w-xs my-2 bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
      {children}
    </div>
  );
}

const Header = (props) => {
  const { img, id } = props;
  return (
    <Link to={`/product/${id}`} >
      <img src={img} alt="product" className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </Link >
  );
};

const Body = (props) => {
  const { name, children } = props;
  return (
    <div className="px-5 pb-5 h-full">
      <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-white">{name.substring(0, 20)}...</h5>
        <p className="text-sm text-white">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price, id } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">$ {price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</span>
      <Button className="bg-blue-600 w-fit" onClick={() => dispatch(addToCart({ id, qty: 1 }))}>{t('cart')}</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;


export default CardProduct;