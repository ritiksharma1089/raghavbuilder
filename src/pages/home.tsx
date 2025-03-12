
import Features from '../compoments/features'
import Comment_palate from '../compoments/Comment_palate'


import CarouselDefault2 from '../compoments/Crousel_2'
import Title_pallate from '../compoments/title_pallate'
import Properties from '../compoments/properties'
import Whatspp from '../compoments/Whatspp'

import Homepageproducts from '../compoments2/Homepageproducts'

const Home = () => {
  return (
    <div>
      {/* <Crousel/> */}
      <CarouselDefault2/>
      <Properties/>

      {/* <Card_palate/> */}
      <Title_pallate title='Our Products'/>
      {/* <ProductCards /> */}
      <Homepageproducts/>
      <Features/>
      <Title_pallate title='Verified Customer Reviews'/>
      <Comment_palate/>
      <Whatspp/>
     
      {/* <Extra/> */}
   

      
    </div>
  )
}

export default Home
