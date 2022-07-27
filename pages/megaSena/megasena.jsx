import { useStates } from "react"
import { mega } from "../../functions/mega"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function megasena() {

    const [numeros, setNumeros] = useStates(mega())

    function renderizarNumeros() {
        return numeros.map(
            numero => <NumeroDisplay 
            key={numero} 
            numero={numero} />
        )
    }

    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>        
            <h1>Mega Sena</h1>
            <div style={{display: "flex"}}>
                {renderizarNumeros()}
            </div>
            
        </div>
        
    )
}