import { DivOut } from "./style";

export default function FormOut(data){
    const valor2 = data.data["15"];
    const valor3 = data.data["30"];
    const valor4 = data.data["90"];
    const valor = data.data["1"];
    return<>
        <DivOut>
            <div className="tituloESublinha">
                <h3>VOCÊ RECEBERÁ:</h3>
                <span></span>
            </div>
            <div className="valoresReceber">
                {data.data["1"]=== undefined?(
                    <>
                        <p>{`Amanhã: `}<b>{`R$ 0,00`}</b></p>
                        <p>{`Em 15 dias: `}<b>{`R$ 0,00`}</b></p>
                        <p>{`Em 30 dias: `}<b>{`R$ 0,00`}</b></p>
                        <p>{`Em 90 dias: `}<b>{`R$ 0,00`}</b></p>
                    </>
                ):(
                    <>
                        <p>{`Amanhã: `}<b>{valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></p>
                        <p>{`Em 15 dias: `}<b>{valor2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></p>
                        <p>{`Em 30 dias: `}<b>{valor3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></p>
                        <p>{`Em 90 dias: `}<b>{valor4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></p>
                    </>
                )

                }
            </div>
        </DivOut>
    </>
}