import Kenzie from "../../assets/Nu-Kenzie.png"
import { useState } from "react";
import ListInput from "../list";
import Form from "../form";
import ValorTotal from "../totalValue";


function MainPage({setIsLogin , toast}){
    
    const [list, setList] = useState([])
    const [filter, setFilter] = useState(list)

    return(
        <>
            <header>
                <img src={Kenzie} alt="logo" />
                <button onClick={() => {setIsLogin(false)
                toast.success("Deslogado com sucesso")}}>Inicio</button>
            </header>
            <main>
                <Form list={list} setList={setList} setFilter={setFilter} toast={toast} />

                <div>
                   <ListInput list={list} setList={setList} filter={filter} setFilter={setFilter} toast={toast}/>
                </div>
                <div>
                   <ValorTotal list={list}/>
                </div>
            </main>
        </>
    )
}

export default MainPage