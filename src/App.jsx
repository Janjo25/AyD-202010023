import React, { useState } from "react";
import "./styles/styles.css";

function App() {
    const [info, setInfo] = useState("");

    const displayInfo = () => {
        const course = "Análisis y Diseño de Sistemas I";
        const fullName = "Luis César Lizama Quiñónez";
        const studentId = "202010023";

        const content = `
      Nombre: ${fullName} <br>
      ID: ${studentId} <br>
      Curso: ${course}
    `;
        setInfo(content);
    };

    return (
        <div>
            <header>
                <h1>Bienvenido</h1>
            </header>

            <main className="container">
                <button onClick={displayInfo}>Ver Información</button>
                <p id="information" dangerouslySetInnerHTML={{ __html: info }}></p>
            </main>
        </div>
    );
}

export default App;
