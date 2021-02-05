import React from 'react';
import "./style.css"

function Home(){
    return (<div>
                <header className = "header">
                    
                    <div className = "titulo">
                        <span>Projeto-X</span>
                    </div>
                    <div className = "subtitulo">
                        <div className = "leftSide">
                            <span>Lado Esquerdo, sem Função ainda</span>
                        </div>
                        <div className = "rightSide">
                            <span>Lado Direito também sem função</span>
                        </div>   
                    </div>
                    
                </header>
                <main className = "corpo">
                    corpo
                </main>
            </div>);
}

export default Home;