import { useEffect } from "react"
import iconLixo from "../../assets/iconLixo.png"

function ListInput({list, setList, filter,setFilter, setValue , toast}){
    
    function removeItem(item){
        const newList = list.filter((elem) => elem.id !== item.id)
        setList(newList)
    }


    function fillter(filtro){
        filtro ? setFilter(list.filter((elem) => elem.type === filtro)) : setFilter(list)
    }

    useEffect(() => {fillter()},[list])

    return (
        <>
            <div>
                <h2>Resumo financeiro</h2>
                <ul>
                    <li>
                        <button onClick={() => fillter()}>Todos</button>
                        <button onClick={() => fillter("Entrada")}>Entradas</button>
                        <button onClick={() => fillter("Despesa")}>Despesas</button>
                    </li>
                </ul>
            </div>
            <ul>
                {
                    filter.length > 0 
                        ? 
                            filter.map((elem) => {
                                return (<li key={elem.id}>
                                    <p>{elem.description}</p>
                                    <p>{elem.type}</p>
                                    <p>{elem.value}</p>
                                    <button onClick={() => {
                                        removeItem(elem) 
                                        toast.success("Transação removida com sucesso")}}><img src={iconLixo} alt="lixo"/></button>
                                </li>)})

                        :

                            (<li>
                                <p>Você ainda não possui nenhum lançamento</p>
                            </li>)
                }
                
            </ul>
        </>
    )
}

export default ListInput