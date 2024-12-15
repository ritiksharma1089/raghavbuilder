import pic1 from "./../assets/search.png"
import pic2 from "./../assets/verified.png"
import pic3 from "./../assets/best.png"

const Properties = () => {
  return (
    <div className="bg-white">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
                <div className="w-12 h-12 flex-shrink-0">
                    <img src={pic1} loading="lazy" alt="icon" className="object-contain w-full h-full" />
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">Unbeatable Prices</h3>
                    <p className="text-sm text-gray-600 mt-2">At Rodidust, we guarantee unbeatable prices on the highest quality building material.</p>
                </div>
            </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
                <div className="w-12 h-12 flex-shrink-0">
                    <img src={pic2} loading="lazy" alt="icon" className="object-contain w-full h-full" />
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">Professional &amp; On-Time Delivery</h3>
                    <p className="text-sm text-gray-600 mt-2">At RodiDust we assure that we make on-time deliveries to all the orders we take from our customers.</p>
                </div>
            </div>
        </div>

      
        <div className="bg-white p-6 shadow-lg rounded-lg">
            <div className="flex items-center">
                <div className="w-12 h-12 flex-shrink-0">
                    <img src={pic3} loading="lazy" alt="icon" className="object-contain w-full h-full" />
                </div>
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">100% Genuine Materials</h3>
                    <p className="text-sm text-gray-600 mt-2">The building materials available at RodiDust are of top quality and customers receive the products after quality checks.</p>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Properties
