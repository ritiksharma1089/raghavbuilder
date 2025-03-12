import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";



const Loginpage = () => {

  const Navigate = useNavigate()

    const [signinform, setsigninform]= useState({
        username:"",
        password:""
    });

    const handlechange = (e: any)=>{
        console.log(e.target.value)
        setsigninform((prev)=>({...prev, [e.target.name]:e.target.value}));

    };

    const handleformsubmit=async(event: React.FormEvent<HTMLFormElement>)=>{
            event.preventDefault();

            console.log(signinform);



            try{
                const result = await axios.post(`${BACKEND_URL}/user/signin`, signinform);
                

                console.log(result,"thisv is result of signin");
                if (result.data.sucess) {
                  localStorage.setItem('token', result.data.token);
                  alert("you are logined");
                 Navigate("/")
                } else {
                  console.log('Problem in signin');
                  alert("try again");
                }

            }catch(err){
                console.log("problem in signin ", err)
                alert("try later")
            }
    }
  return (
    <div className="w-full">

<div className="w-full max-w-md mx-auto">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleformsubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name="username" onChange={handlechange}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" name="password" placeholder="******************" onChange={handlechange}/>
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
     
    </div>
  </form>
  <p className="text-center text-gray-500 text-xs">
    &copy;2025 Acme Corp. All rights reserved.
  </p>
</div>
    </div>
  )
}

export default Loginpage
