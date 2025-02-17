type inp_type ={
    lab_type? :string,
   
    lab_for:string,
    inp_placeholder?:string,
    required:boolean,
    valueprop?:any
    onchanglehadle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumInp_label = (props:inp_type) => {
  return (
    <div className="flex gap-2 mt-2 ">

    <label htmlFor={props.lab_for}> {props.lab_for}</label>

    <input type={props.lab_type} className="rounded-md border-2 border-gray-700 h-[30px] "   name={props.lab_for} id={props.lab_for} placeholder={props.inp_placeholder} onChange={props.onchanglehadle}  required={props.required}  />

    </div>
  )
}

export default NumInp_label