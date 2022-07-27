import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"


export default function contador(props) {

    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)  
    const dec = () => setNumero(numero - 1)      
    
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <h1>Contador</h1>
            <NumeroDisplay numero={numero}/>
            <div>
                <button onClick={dec}> - </button>
                <button onClick={inc}> + </button>
            </div>
        </div>
    )
}