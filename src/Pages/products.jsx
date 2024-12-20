import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct"
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // useEffect(() => {
  //   if (products.length > 0 && cart.length > 0) {
  //     const sum = cart.reduce((acc, item) => {
  //       const product = products.find((product) => product.id === item.id);
  //       return acc + product.price * item.qty;
  //     }, 0);
  //     setTotalPrice(sum);
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart, products])

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   window.location.href = "/login"
  // }

  // const handleAddToCart = (id) => {
  //   if (cart.find((item) => item.id === id)) {
  //     setCart(
  //       cart.map((item) =>
  //         item.id === id ? { ...item, qty: item.qty + 1 } : item
  //       )
  //     );
  //   } else {
  //     setCart([...cart, { id: id, qty: 1 }]);
  //   }
  // };

  //useRef
  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);
  // const handleAddToCartRef = (id) => {
  //   cartRef.current = [...cartRef.current, { id: id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  // const totalPriceRef = useRef(null);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPriceRef.current.style.display = "table-row";
  //   } else {
  //     totalPriceRef.current.style.display = "none";
  //   }
  // }, [cart]);

  return (
    <div className="">
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900 "}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 && products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header img={product.image} id={product.id}></CardProduct.Header>
              <CardProduct.Body name={product.title}>
                {product.description}
              </CardProduct.Body>
              {/* <CardProduct.Footer price={product.price} id={product.id} handleAddToCart={handleAddToCart}></CardProduct.Footer> */}
              <CardProduct.Footer price={product.price} id={product.id}></CardProduct.Footer>
            </CardProduct>
          ))}</div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          {/* <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 && cart.map((item) => {
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.title.substring(0, 10)}...</td>
                    <td>$ {product.price.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                    <td>{item.qty}</td>
                    <td>$ {(item.qty * product.price).toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</td>
                  </tr>
                )
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}><b>Total Price</b></td>
                <td><b>$ {totalPrice.toLocaleString('id-ID', { styles: 'currency', currency: 'USD' })}</b></td>
              </tr>
            </tbody>
          </table> */}
          <TableCart products={products} />
        </div>
      </div>
    </div >
  )
}

export default ProductsPage