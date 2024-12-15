
import pic1 from "./../assets/bangur-new.jpg";
// import { Product1 } from "../assets/products";
const Selling_card2 = ({Product1}:any) => {
  return (

   

    <div className='  md:max-w-full w-4/5  bg-white border border-gray-200 rounded-lg shadow flex  flex-col items-center md:items-start md:flex-row justify-around mx-auto h-fit '>
      


        <div  className="text-center">
            <img src={pic1} alt="pic3" className="h-[150px] lg:h-[220px] max-w-60 py-2 " />
            <div className=" md:text-2xl text-black font-semibold"> {Product1.name}</div>

        </div>
        <div className="pt-5">

        

            {Object.entries(Product1.details).map((Key,index)=>{
                        return (
                            // @ts-ignore
                            <p key={index}>{Key[0]} = {Key[1]} </p>
                        )
            })}
        </div>
        <div className=" py-4  " >


        <div className="text-xl md:text-2xl text-black font-semibold "> {Product1.name}</div>  
            <p className="md:text-xl font-semibold "> Price : {Product1.price}/ per {Product1.quantity}</p>
            <p className=" line-through text-red-500 font-medium pb-1"> old price : {Product1.old_price} / per {Product1.quantity}</p>

           

        </div>


    </div>

  
  )
}

export default Selling_card2
