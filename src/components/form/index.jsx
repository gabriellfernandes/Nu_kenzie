import { useState } from "react"
function Form({setList, setFilter, list, toast}){
    const [inputdescription, setInputDescription] = useState("")
    const [inputValue, setInputValue] = useState(0)
    const [inputType, setInputType] = useState("")   
    const [id, setId] = useState(1)

    const toastStyle = {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "myToast",
      };
    
    
    return (
        <div className="conteiner-form">
            <form onSubmit={(event) => {
                event.preventDefault()
                console.log(inputValue)
                if(inputdescription.length !== 0 && inputValue !== "" && inputValue !== "0" && inputType !== "") {
                    toast.success(inputType + " criada com sucesso")
                    
                    if(inputType == "Entrada") setList((oldList) => [...oldList, {description: inputdescription, value: inputValue, type: inputType, id: id}])
                    else setList((oldList) => [...oldList, {description: inputdescription, value: -inputValue, type: inputType, id: id}])
                    
                    setFilter(list)
                    setId(id + 1)
                }else{
                    if(inputValue === "0") toast.error("Digite um Valor acima de 0",toastStyle)
                    else toast.error("Há espaço em branco",toastStyle)
                }
            }}>
                <input type="text" 
                placeholder="Digite aqui sua descrição" name="description"
                onChange={(event) => setInputDescription(event.target.value)}/>
                <label htmlFor="description">Descrição</label>
                <span>Ex: Compra de roupas</span>

                <input type="number" placeholder="1" name="value" onChange={(event) => setInputValue(event.target.value)}/>
                <label htmlFor="value">Valor</label>

                <select onChange={(event) => setInputType(event.target.value)}>
                    <option value="">Selecione um tipo</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>

                <button type='submit'>Inserir Valor</button>
            </form>
        </div>
    )
}

export default Form