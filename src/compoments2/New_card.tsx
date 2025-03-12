// const products = [
//   { id: 1, category: 'Rodi', name: 'Zerra', price: 390.0, bgColor: 'bg-gray-500', imgSrc: pic1 },
//   { id: 2, category: 'Bricks', name: 'Red Brick', price: 9.0, bgColor: 'bg-purple-300', imgSrc: pic2 },
//   { id: 3, category: 'Cement', name: 'Cement', price: 390.5, bgColor: 'bg-gray-300', imgSrc: pic3 },
//   { id: 4, category: 'steel', name: 'TMT Stell', price: 390.5, bgColor: 'bg-gray-900', imgSrc: pic4 },
//   { id: 5, category: 'Sand', name: 'Jamuna Sand', price: 390.5, bgColor: 'bg-purple-200', imgSrc: pic5 },
//   { id: 6, category: 'Dust', name: 'Stone Dust', price: 390.5, bgColor: 'bg-gray-500', imgSrc: pic6 },
// ];

// bg-gray-500, bg-gray-300, bg-gray-900,bg-purple-300




import Card2 from './Card2';
import { useEffect, useState } from 'react';

const getRandomTailwindColor = () => {
  const colors = ['bg-slate-200']
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

// const getRandomColor = () => {
//   const base = 200; // Minimum value for RGB to ensure it's light
//   const range = 56; // Range to keep colors in the faded zone
//   const getColorComponent = () => Math.floor(base + Math.random() * range).toString(16).padStart(2, '0');
  
//   const red = getColorComponent();
//   const green = getColorComponent();
//   const blue = getColorComponent();
  
//   return `#${red}${green}${blue}`;
// };



const ProductCards = ({prods}:{prods:any}) => {
  const [data,setdata]= useState<any>()

  useEffect(()=>{
    console.log(prods)

    const products = prods.map((item:any)=>({
      id:item.id,
      name:item.title,
      bgColor: getRandomTailwindColor(),
      imgsrc:item.imagepath
    
    }));
    setdata(products);
    


  },[])

  if(!data ){
    return <h1>loading</h1>
  }
  return (
    <div className="p-1 flex flex-wrap items-center justify-center">

     
      {data.map((product:any) => (
        <div key={product.id}>
       <Card2 product={product} key={product.id}/>

      
        </div>
      ))}
    </div>
  );
};

export default ProductCards;

