type inp_type ={
    lab_type? :string,
   
    lab_for:string,
    inp_placeholder?:string,
    required:boolean,
    valueprop?:string
    onchanglehadle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Inp_label = (props:inp_type) => {
  return (
    <div className="flex gap-2 mt-2 ">

    <label htmlFor={props.lab_for} className="mx-2"> {props.lab_for.toUpperCase()}</label>

    <textarea className="rounded-md border-2 border-gray-700 h-[40px] w-4/5 md:w-1/2"   name={props.lab_for} id={props.lab_for} placeholder={props.inp_placeholder} onChange={props.onchanglehadle}  required={props.required} defaultValue={props.valueprop} />

    </div>
  )
}

export default Inp_label