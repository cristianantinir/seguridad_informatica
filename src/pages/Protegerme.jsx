import { useNavigate } from "react-router-dom";
import style from "./Protegerme.module.css"
import Footer from '../components/Footer';

function Protegerme (){
    const navigate = useNavigate();

    return(
       <>
        <div className={style.contenedorProtegerme}>
            <div className={style.conPro}>
                <h1>¿Cómo Protegerme?✅</h1>
                <button onClick={() => navigate('/')}>Volver</button>
            </div>
            <div className={style.contenidoRiesgo}>
                <p>La mejor defensa contra el malware es la prevención. Mantén siempre tu sistema operativo, navegadores y aplicaciones actualizados. Muchas amenazas se aprovechan de errores ya corregidos, por eso es clave instalar las actualizaciones de seguridad.
                    Usa un antivirus confiable y evita hacer clic en enlaces sospechosos o abrir archivos de remitentes desconocidos. Desconfía de correos, mensajes o ventanas emergentes que te pidan datos personales o contraseñas.
                    Además, haz copias de seguridad regularmente y utiliza contraseñas seguras y únicas para cada cuenta. Con hábitos simples, puedes reducir drásticamente el riesgo de infección.
                </p>
            </div>
            <Footer /> 
        </div>
        </>
    );
}
export default Protegerme;