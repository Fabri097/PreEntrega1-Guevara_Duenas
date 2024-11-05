
const FormCheckout = ({ dataForm, handleChangeInput, handleSubmitForm }) => {
  return (
    <form onSubmit={handleSubmitForm}>
      <label htmlFor="fullname">Nombre Completo: </label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        value={dataForm.fullname}
        onChange={handleChangeInput}
      />

      <label htmlFor="phone">Teléfono: </label>
      <input
        type="number"
        id="phone"
        name="phone"
        value={dataForm.phone}
        onChange={handleChangeInput}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        name="email"
        value={dataForm.email}
        onChange={handleChangeInput}
      />

      <button type="submit">Enviar mi orden</button>
    </form>
  );
};


export default FormCheckout
