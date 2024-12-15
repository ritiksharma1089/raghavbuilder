
import { Link } from 'react-router-dom';

const Card2 = ({product}:any) => {
  return (
    <div>
      

      <div key={product.id} className={`flex-shrink-0 m-6 relative overflow-hidden ${product.bgColor} rounded-lg max-w-xs shadow-lg group`}>
          <svg
            className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
            viewBox="0 0 375 283"
            fill="none"
            style={{ opacity: 0.1 }}
          >
            <rect
              x="159.52"
              y="175"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width="152"
              height="152"
              rx="8"
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <Link to={`/order/${product.category}`}>
          <div className="relative pt-5 px-5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <div
              className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
              style={{
                background: 'radial-gradient(black, transparent 60%)',
                transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)',
                opacity: 0.2,
              }}
            ></div>
            <img className="relative w-55" src={product.imgSrc} alt={product.name} />
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{product.category}</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">{product.name}</span>
              <span className={`block bg-white rounded-full text-${product.bgColor.split('-')[1]}-500 text-xs font-bold px-3 py-2 leading-none flex items-center`}>
                Rs{product.price.toFixed(2)}
              </span>
            </div>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default Card2
