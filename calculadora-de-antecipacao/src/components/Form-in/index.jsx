import axios from "axios";
import { useForm } from "react-hook-form";
import { DivForm } from "./style";


export default function FormIn({setData}){
    const { register, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        if(data["amount"] === '' || data["installments"] === '' || data["mdr"] === ''){
            setData(data)
            alert("Por favor preencha todos os campos")
        }
        console.log(data)
        axios.post('https://frontend-challenge-7bu3nxh76a-uc.a.run.app',data)
        .then((response)=>setData(response.data))
        .catch((err)=>console.log("deu um erro" + err))
    }
    return<>
        <DivForm onSubmit={handleSubmit(onSubmit)}>
            <h2>Simule sua Antecipação</h2>
            <label>Informe o valor da venda *
                <input type='number' name='valor'
                 {...register('amount')}/>
            </label>            
            <label>Em quantas parcelas *
                <input type='number' name='parcelas'
                {...register('installments')}/>
                <span>Máximo 12 parcelas</span>

            </label>            
            <label>Informe o percentual de MDR *
                <input type='number' name='mdr'
                {...register('mdr')}/>
            </label>
            <button type="submit">Calcular</button>
        </DivForm>
    </>
}