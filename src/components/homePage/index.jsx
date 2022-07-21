import  fundo1  from "../../assets/image.svg"
import Kenzie from "../../assets/Nu-Kenzie.png"
import 'animate.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./style.css"


function HomePage({setIsLogin}){
    return(
        <div className="conteiner">
            <div className="conteiner-Title animate__zoomIn">
                <img src={Kenzie} alt="logo" />
                <h1 className="title">Centralize o controle das suas finanças</h1>
                <span className="subTitle">de forma rápida e segura</span>
                <button className="button-init" onClick={() => {
                    toast.success("Logado com sucesso")
                    setIsLogin(true)}
                    }>Iniciar</button>
            </div>
            <div className="conteiner-Img">
                <img src={fundo1} alt="fundo" className="background animate__backInRight"/>
            </div>
        </div>
    )
}

export default HomePage