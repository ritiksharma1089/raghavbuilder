import { Carousel } from "@material-tailwind/react";
import pic1 from '../assets/crousel1.webp';
import pic2 from '../assets/crousel2.webp'
import pic3 from '../assets/crousel3.webp';
import pic4 from '../assets/crousel4.webp';
export function CarouselDefault2() {
  return (
    // @ts-ignore
    <Carousel className="rounded-xl"   placeholder={"crousel"} style={{height:"56%"}} >
      <img
        src={pic1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={pic2}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={pic3}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={pic4}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      
    </Carousel>
  );
}
export default CarouselDefault2;