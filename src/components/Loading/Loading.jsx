import { PulseLoader } from "react-spinners";
import "./loading.css"

const Loading = () => {
  return (
    <div className="loading">
      <PulseLoader className="spinner" color="#333" />
      <h2> Cargando.....</h2>
    </div>
  )
}

export default Loading
