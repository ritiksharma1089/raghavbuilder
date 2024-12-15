// import { useState } from "react";

// export default function ProductForm({product_prop}:{product_prop?: Product |null}){

//     const [error,actons] = useActionState(AddProduct,{});       

//     const [price, setprice]= useState<number | undefined>(product_prop?.price);
//     return <form  action={actons}
//      className="space-y-4 px-[80px] mx-auto bg-slate-50 w-full">

// <div className="space-y-2">


//         <Label htmlFor="name">Name</Label>
//         <Input type="text" id="name" name="name"  required defaultValue={product_prop?.name} />  


// </div>

// <div className="space-y-2">


//         <Label htmlFor="price">Price</Label>
//         <Input type="number" id="price" name="price" required defaultValue={product_prop?.name}  value={price !== undefined ? price : ""}  // If price is undefined, set an empty string

   
//     onChange={e => setprice(e.target.value ? Number(e.target.value) : undefined)}  />


// </div>

// <div className="text-muted-foreground">
//         {formatcurrency((price||0)/100)}
        
//     </div>


// <div className="space-y-2">
//     <Label htmlFor="desc">descripton</Label>
//     <Textarea name="desc" typeof="text" id="desc" required defaultValue={product_prop?.description} />
// </div>
// <div className="space-y-2">
//     <Label htmlFor="desc">file</Label>
//     <Input name="file" type="file" id="file" required={product_prop==null} />
// </div>

// <div className="space-y-2">


//         <Label htmlFor="category">category</Label>
//         <Input type="text" id="category" name="category" required defaultValue={product_prop?.category} /> 


// </div>

// <div>
//     <Label htmlFor="details">Details</Label>
//     <Input
//         type="text" // Change input type to "text" instead of "json"
//         name="details"
//         id="details"
//         required
//         defaultValue={product_prop?.details ? JSON.stringify(product_prop.details) : ''} // Convert JSON to string
//     />
// </div>

// <button type="submit"> save</button>



//     </form>
// }