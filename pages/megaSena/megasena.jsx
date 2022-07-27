import { useStates } from "react"
import { mega } from "../../functions/mega"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function megasena() {

    const [numeros, setNumeros] = useStates(mega())

    function renderNumeros() {
        return numeros.map
            (n => <NumeroDisplay key={numero} numero={numero}) />
    }

    return(
        <div>
            <h1>Mega Sena</h1>
        </div>
    )
}