import { mixed, object, string } from "yup";

let userScheme = object({
  fullname: string().required("El nombre es obligatorio"),
  phone: mixed().required("El teléfono es obligatorio"),
  email: string().email("Debe ser un correo electrónico válido").required("El correo electrónico es obligatorio")
});

const validateForm = async (dataForm) => {
  try {
    await userScheme.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
