import "./formchekout.css";
import Swal from 'sweetalert2';

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  const validateEmail = (event) => {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    if (email !== confirmEmail) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los correos electrónicos no coinciden. Por favor, verifícalos.",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      event.preventDefault();
    }
  };

  return (
    <div className="container">
      <div className="form_area">
        <p className="title">CHECKOUT</p>
        <form onSubmit={(event) => { validateEmail(event); handleSubmitForm(event); }}>
          <div className="form_group">
            <label className="sub_title" htmlFor="fullname">Name</label>
            <input
              placeholder="Ingrese su Nombre"
              className="form_style"
              type="text"
              id="fullname"
              name="fullname"
              value={dataForm.fullname}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">Email</label>
            <input
              placeholder="Ingrese su Email"
              className="form_style"
              type="email"
              id="email"
              name="email"
              value={dataForm.email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="confirmEmail">Confirmar Email</label>
            <input
              placeholder="Confirme su Email"
              className="form_style"
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              value={dataForm.confirmEmail}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="phone">Phone</label>
            <input
              placeholder="Ingrese su teléfono"
              className="form_style"
              type="tel"
              id="phone"
              name="phone"
              value={dataForm.phone}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button className="btn" type="submit">Enviar mi orden</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormCheckout;
