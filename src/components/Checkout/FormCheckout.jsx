import "./formcheckout.css";

const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <div className="container">
      <div className="form_area">
        <p className="title">CHECKOUT</p>
        <form onSubmit={handleSubmitForm}>
          <div className="form_group">
            <label className="sub_title" htmlFor="fullname">Name</label>
            <input
              placeholder="Ingrese su Nombre"
              className="form_style"
              type="text"
              id="fullname"
              name="fullname"
              value={dataForm.fullname || ""}
              onChange={handleChangeInput}
              aria-label="Nombre completo"
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
              value={dataForm.email || ""}
              onChange={handleChangeInput}
              aria-label="Correo electrónico"
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
              value={dataForm.confirmEmail || ""}
              onChange={handleChangeInput}
              aria-label="Confirmar correo electrónico"
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
              value={dataForm.phone || ""}
              onChange={handleChangeInput}
              aria-label="Teléfono"
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
