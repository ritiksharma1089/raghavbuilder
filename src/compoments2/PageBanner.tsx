import { useEffect, useState } from "react"
import { CatPic } from "../assets/Catwisepic";
import pic1 from "./../assets/crousel4.webp";


const PageBanner = ({category}:{category:string | undefined}) => {
    const [pic,setpic] = useState<string>(pic1);
    
    useEffect(()=>{
      const finalitem =  CatPic.filter(item => item.category ==category);
      if(finalitem.length > 0){

          setpic(finalitem[0].pic)
      }
    },[category])
  return (
    <div>
      <div className='overflow-hidden w-full h-[10rem] lg:h-[14rem] bg-red-600'>

<img src={pic } alt="" className='w-full h-full object-fill shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300' />
</div>
    </div>
  )
}

export default PageBanner
