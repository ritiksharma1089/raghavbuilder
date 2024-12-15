import pic1 from "./../assets/whatspp_img.jpg"



const Whatspp = () => {
  return (
    <div className='fixed top-[50vh] right-0'>

                <a href="https://api.whatsapp.com/send?phone=+918684834208&amp;text= Hello Raghav Builder" target="_blank" title="Whatsapp Now" className="whatsapp-sidecon">
                <img src={pic1} className="h-8 lg:h-12 rounded-full"/></a>
      
    </div>
  )
}

export default Whatspp
