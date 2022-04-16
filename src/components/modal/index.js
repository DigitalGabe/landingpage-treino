import "./index.css"

function Modal(props){
    const showHideClassName = props.exibir ? "modal display-block" : "modal display-none";
    return(
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>{props.texto}</p>
        <button type="button" onClick={props.fechar}>
          Close
        </button>
      </section>
    </div>
    )
}

export default Modal;