import React from 'react';

function Header(){
    return (
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
    );
}

export default Header;