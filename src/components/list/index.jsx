import { useEffect } from "react"
import iconLixo from "../../assets/iconLixo.png"
import iconVazio from "../../assets/NoCard.png"
import "./style.css"

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
            <div className="conteiner-resume">
                <h2>Resumo financeiro</h2>
                <div className="conteiner-filter">
                    <button onClick={() => fillter()}>Todos</button>
                    <button onClick={() => fillter("Entrada")}>Entradas</button>
                    <button onClick={() => fillter("Despesa")}>Despesas</button>
                </div>
            </div>
            <ul className="conteiner-itens">
                {
                    filter.length > 0 
                        ? 
                            filter.map((elem) => {
                                return (<li key={elem.id} className="item">
                                    <div className="conteiner-description">
                                        <p className="description">{elem.description}</p>
                                        <p>{elem.type}</p>
                                    </div>
                                    <p>{`R$ ${elem.value},00`}</p>
                                    <button onClick={() => {
                                        removeItem(elem) 
                                        toast.success("Transação removida com sucesso")}}><img src={iconLixo} alt="lixo"/></button>
                                </li>)})

                        :

                            (<li>
                                <p className="noItem">Você ainda não possui nenhum lançamento</p>
                                <img src={iconVazio} alt="" className="img-noitem"/>
                            </li>)
                }
                
            </ul>
        </>
    )
}

export default ListInput