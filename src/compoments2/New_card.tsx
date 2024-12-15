

import pic1 from '../assets/aggregate.jpg';
import pic2 from '../assets/bricks.jpg'
import pic3 from '../assets/cement.jpg';
import pic4 from '../assets/steel.jpg';
import pic5 from '../assets/jamuna-sand.jpg';
import pic6 from '../assets/stone-dust.jpg';

import Card2 from './Card2';

const ProductCards = () => {
  const products = [
    { id: 1, category: 'Rodi', name: 'Zerra', price: 390.0, bgColor: 'bg-gray-500', imgSrc: pic1 },
    { id: 2, category: 'Bricks', name: 'Red Brick', price: 9.0, bgColor: 'bg-purple-300', imgSrc: pic2 },
    { id: 3, category: 'Cement', name: 'Cement', price: 390.5, bgColor: 'bg-gray-300', imgSrc: pic3 },
    { id: 4, category: 'steel', name: 'TMT Stell', price: 390.5, bgColor: 'bg-gray-900', imgSrc: pic4 },
    { id: 5, category: 'Sand', name: 'Jamuna Sand', price: 390.5, bgColor: 'bg-purple-200', imgSrc: pic5 },
    { id: 6, category: 'Dust', name: 'Stone Dust', price: 390.5, bgColor: 'bg-gray-500', imgSrc: pic6 },
  ];

  return (
    <div className="p-1 flex flex-wrap items-center justify-center">
      {products.map((product) => (
       
       <Card2 product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductCards;

