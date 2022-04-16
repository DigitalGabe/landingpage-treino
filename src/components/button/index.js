function BotaoComponente(props){
    return(

            <button onClick={props.acao}>
                {props.texto}
            </button>
    )
}

export default BotaoComponente;