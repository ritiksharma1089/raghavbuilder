
import Card_item from './CardItem'


const Card_palate = () => {
  return (
<div  className='py-4'>
    
    <div className='title mx-auto w-fit text-center text-4xl py-4  '>
            <h1>Our Products</h1>

    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto w-[95vw] h-fit py-2 ">
   
   
    <Card_item/>
    <Card_item/>
    <Card_item/>
    <Card_item/>
    <Card_item/>
  </div>
  
</div>
  )
}

export default Card_palate
