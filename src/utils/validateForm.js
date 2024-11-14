import { mixed,object,string } from "yup";

let userScheme = object({
    fullname:string().required(),
    phone:mixed().required(),
    email:string().email()
})

const validateForm = async(dataForm) => {
 try {
   await userScheme.validate(dataForm) 
   return {status:"sucess"}
 } catch (error) {
    return{status:"error",message : error.message}
 }
}

export default validateForm