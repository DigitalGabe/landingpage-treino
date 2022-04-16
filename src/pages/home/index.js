import './index.css'
import BotaoComponente from '../../components/button';
import React, { useState } from 'react';
import Modal from '../../components/modal';

function HomePage(){
    const [exibir, setExibir] = useState(false);
    function exibirmodal(){
        setExibir(true)
    }

    function fecharmodal(){
        setExibir(false)
    }

    return(
        <main>
            <section className="tools">
                <div className="tools-container">
                    <div className="tools-title">
                    <h2>Las mejores herramientas para la gestión de su Talento Humano en un sólo lugar</h2>
                    </div>
                    <div className="tools-items">
                    <div className="tools-item">
                        <figure>
                        <img src="assets/competencia.png" alt="" />
                        </figure>
                        <h3>Competencias 360º</h3>
                    </div>
                    <div className="tools-item">
                        <figure>
                        <img src="assets/metas.png" alt="" />
                        </figure>
                        <h3>Metas</h3>
                    </div>
                    <div className="tools-item">
                        <figure>
                        <img src="assets/clima.png" alt="" />
                        </figure>
                        <h3>Clima Laboral</h3>
                    </div>
                    <div className="tools-item">
                        <figure>
                        <img src="assets/pid.png" alt="" />
                        </figure>
                        <h3>Plan Individual de Desarrollo</h3>
                    </div>
                    </div>
                </div>
                <Modal exibir={exibir} texto="BatataFrita" fechar={fecharmodal}>

                </Modal>
                <BotaoComponente acao={exibirmodal} texto="batata"/>
                </section>
        </main>
    )
}


export default HomePage;