// import { useEffect, useState } from "react";
// import api from "../services/api";
// import { DivForm } from "./style";

// export default function FormIn(){
//     const [valor, setValor] = useState(1);
//     const [parcelas, setParcelas] = useState(1);
//     const [mdr, setMdr] = useState(1);
//     const [dataReq, setDataReq] = useState({})

//     function valores(e, data){
//         e.preventDefault()
//         setValor(data) 
//     }
    
//     function valores1(e, data){
//         e.preventDefault()
//         setParcelas(data) 
//     }
    
    
//     function valores2(e, data){
//         e.preventDefault()
//         setMdr(data)
//         setDataReq({"amount": parseInt(valor),
//         "installments": parseInt(parcelas),
//         "mdr": parseInt(mdr)})
//     }
    
//     useEffect(()=>{    
//         console.log(JSON.stringify(dataReq))
//          api.post(".app",JSON.stringify(dataReq))
//         .then((response)=> console.log(response))
//         .catch((err)=>console.log("ocorreu um erro" + err))
    
//     },[dataReq])
    
//     return<>
//         <DivForm>
//             <h2>Simule sua Antecipação</h2>
//             <label>Informe o valor da venda *
//                 <input type='number' name='valor'
//                  min='0.01'
//                 onKeyUpCapture={(e)=>valores(e, e.target.value)}/>
//             </label>            
//             <label>Em quantas parcelas *
//                 <input type='number' name='parcelas'
//                  onKeyUpCapture={(e)=>valores1(e, e.target.value)}/>
//                 <span>Máximo 12 parcelas</span>

//             </label>            
//             <label>Informe o percentual de MDR *
//                 <input type='number' name='mdr'
//                 onKeyUpCapture={(e)=>valores2(e, e.target.value)}/>
//             </label>
//         </DivForm>
//     </>
// }