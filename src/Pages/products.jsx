import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct"

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus enim. Architecto eveniet distinctio totam illo minima adipisci, autem vel sed odio expedita sequi a rem. Dicta deleniti vitae minima.",
    price: "Rp.1.000.000",
    img: "/images/sepatu.png"
  },
  {
    id: 2,
    name: "Sepatu Baru2",
    description: " distinctio totam illo minima adipisci, autem vel sed odio expedita sequi a rem. Dicta deleniti vitae minima.",
    price: "Rp.2.000.000",
    img: "/images/sepatu.png"
  }
]

const email = localStorage.getItem("email");

const ProductsPage = () => {

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login"
  }

  return (
    <div className="">
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header img={product.img}></CardProduct.Header>
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price}></CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </div >
  )
}

export default ProductsPage