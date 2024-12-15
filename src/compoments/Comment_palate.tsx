
import {comments} from "../assets/comments"
import Comment_card from './Comment_card';

import { Carousel } from "@material-tailwind/react";

const Comment_palate = () => {



    return (


      
        // @ts-ignore
        <Carousel className="rounded-xl  overflow-hidden pb-2"   placeholder={"crousel"} style={{height:"56%"}}  >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto w-4/5 md:w-[95vw] h-fit py-2 '>
          {comments.slice(0,8).map((item, id)=>{
                    return (
                      <Comment_card key={id} name1={item.name} comment={item.comment} role={item.role}/>
                    )
                  })}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto w-[95vw] h-fit py-2 '>
          {comments.slice(8,16).map((item, id)=>{
                    return (
                      <Comment_card key={id} name1={item.name} comment={item.comment} role={item.role}/>
                    )
                  })}
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto w-[95vw] h-fit py-2 '>
          {comments.slice(16,22).map((item, id)=>{
                    return (
                      <Comment_card key={id} name1={item.name} comment={item.comment} role={item.role}/>
                    )
                  })}
          </div>
         
        </Carousel>
      );
    // return (

//       <div>
//            <div className='title mx-auto w-fit text-center text-4xl py-4  '>
//           <h1>Verified Customers REVIEWS</h1>
//         </div>

//         <div id="controls-carousel" className="relative w-full h-[60vh]" data-carousel="static">
//           {/* Carousel wrapper */}
//           <div className="relative w-full h-full overflow-hidden rounded-lg">
//             {/* Carousel Items */}
//             <div className="absolute inset-0 duration-700 ease-in-out" data-carousel-item>
                
//                 {/* image */}
//                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto w-[95vw] h-fit py-2 '>

//                   {comments.slice(0,8).map((item, id)=>{
//                     return (
//                       <Comment_card key={id} name1={item.name} comment={item.comment} role={item.role}/>
//                     )
//                   })}
//                 </div>
//             </div>
//             <div className="absolute inset-0 hidden duration-700 ease-in-out" data-carousel-item>
//             {/* image */}

//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto w-[95vw] h-fit py-4 '>

// {comments.slice(8,16).map((item, id)=>{
//   return (
//     <Comment_card key={id} name1={item.name} comment={item.comment} role={item.role}/>
//   )
// })}
// </div>
//             </div>
           
//             <div className="absolute inset-0 hidden duration-700 ease-in-out" data-carousel-item>
//             {/* image */}

//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mx-auto w-[95vw] h-fit py-2 '>

// {comments.slice(16,22).map((item, id)=>{
//   return (
//     <Comment_card key={id} name1={item.name} comment={item.comment} role={item.role}/>
//   )
// })}
// </div>
//             </div>
           
         
//           </div>
    
//           {/* Slider controls */}
//           <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
//               </svg>
//               <span className="sr-only">Previous</span>
//             </span>
//           </button>
//           <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
//             <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
//               <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
//                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
//               </svg>
//               <span className="sr-only">Next</span>
//             </span>
//           </button>
//         </div>
// </div>
      // );
}

export default Comment_palate
