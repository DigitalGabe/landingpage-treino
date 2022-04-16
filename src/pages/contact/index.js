import BotaoComponente from "../../components/button";

function ContactPage(){
    function enviarform(){
        alert("Formulário Enviado")
    }
    return(
        <>
            <h1>Contact</h1>
            <BotaoComponente acao={enviarform} texto="enviar"/>
        </>
    )
}

export default ContactPage;