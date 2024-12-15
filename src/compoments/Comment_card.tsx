
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

type PropComm = {
   key: number;
   name1: string;
   comment: string;
   role: string;
};
const Comment_card = ({  name1, comment, role }: PropComm) => {
  return (
   
    <div className="flex  gap-2.5 pt-1 mx-auto lg:mx-0 " >
      <div
        className="flex flex-col w-[320px] h-[150px] leading-1.5 p-4 border border-gray-300 bg-slate-50 rounded-e-xl rounded-es-xl  overflow-hidden"
      >
        <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 ">
            {name1.slice(0, 15)}
          </span>
          <span className="text-sm font-normal text-gray-500 ">
            <FontAwesomeIcon icon={faStar}  style={{color:"gold"}}/>
            <FontAwesomeIcon icon={faStar}  style={{color:"gold"}}/>
            <FontAwesomeIcon icon={faStar}  style={{color:"gold"}}/>
            <FontAwesomeIcon icon={faStar}  style={{color:"gold"}}/>
            <FontAwesomeIcon icon={faStar}  style={{color:"gold"}}/>
            
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900  overflow-hidden text-ellipsis">
          {comment.slice(0, 100)}...
        </p>
          <span className="text-sm font-normal text-gray-500  truncate">
            {role.slice(0, 15)}...
          </span>
      </div>
    </div>
  );
};

export default Comment_card;
