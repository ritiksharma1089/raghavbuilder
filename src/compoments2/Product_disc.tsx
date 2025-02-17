// import { Product1 } from "../assets/products"

const Product_disc = ({product1}:{product1:any}) => {
  return (
    <div className="bg-white w-4/5 mx-auto  mt-2 rounded-md shadow-md px-4 text-left break-before-column">
      
      <div className="w-fit mx-auto py-4 text-4xl font-semibold "> Product Discription</div>

      <div className="py-5"> {product1.desc}</div>
      
    </div>

    
  )
}

export default Product_disc
