

type title_type ={
    title?:string,
    subheading ?: string,
    disc? :string
}

const Title_pallate = ({title, subheading, disc}:title_type) => {
  return (

    <div className="w-2/4 mx-auto text-center pt-4">
      <div className="title mx-auto w-fit text-center text-4xl pt-4 underline ">{title} </div>
      <div className="title mx-auto w-fit text-center text-2xl py-2 ">{subheading}</div>
      <div className="title mx-auto w-fit text-center text-xl py-1">{disc}</div>

      
    </div>
  )
}

export default Title_pallate
