import CardProduct from "../components/Fragments/CardProduct"

const products = [
  {
    name: "Sepatu Baru",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus enim. Architecto eveniet distinctio totam illo minima adipisci, autem vel sed odio expedita sequi a rem. Dicta deleniti vitae minima.",
    price: "Rp.1.000.000",
    img: "/images/sepatu.png"
  },
  {
    name: "Sepatu Baru2",
    description: " distinctio totam illo minima adipisci, autem vel sed odio expedita sequi a rem. Dicta deleniti vitae minima.",
    price: "Rp.2.000.000",
    img: "/images/sepatu.png"
  }
]

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header img={product.img}></CardProduct.Header>
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price}></CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  )
}

export default ProductsPage