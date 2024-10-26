import CardProduct from "../components/Fragments/CardProduct"

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header img="/images/sepatu.png"></CardProduct.Header>
        <CardProduct.Body title="Sepatu Baru">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, delectus enim. Architecto eveniet distinctio totam illo minima adipisci, autem vel sed odio expedita sequi a rem. Dicta deleniti vitae minima.
        </CardProduct.Body>
        <CardProduct.Footer price="Rp.1.000.000"></CardProduct.Footer>
      </CardProduct>
    </div>
  )
}

export default ProductsPage