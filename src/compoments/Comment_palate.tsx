
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
}

export default Comment_palate
