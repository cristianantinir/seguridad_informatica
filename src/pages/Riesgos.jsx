import {useNavigate } from "react-router-dom";
import style from './Riesgos.module.css';
import Footer from '../components/Footer';

function Riesgos() {
  const navigate = useNavigate();

  return (
    <>
    <div className={style.contenedorRiesgo}>
        <div className={style.riesgos}>
            <h1>Riesgos de malware⚠️</h1>
            <button onClick={() => navigate('/')}>Volver</button>  
        </div>
        <div className={style.contenido}>
            <p>El malware, en sus distintas formas, representa un riesgo constante para usuarios y organizaciones. Su capacidad para infiltrarse sin ser detectado lo convierte en una amenaza difícil de prevenir si no se toman las medidas adecuadas.
                Los efectos pueden ir desde una simple molestia hasta consecuencias graves como el robo de datos sensibles, el secuestro de archivos, la pérdida de dinero o el control remoto del dispositivo afectado.
                Además, muchos tipos de malware se propagan fácilmente en redes, lo que amplifica el daño a otros sistemas conectados. Estar informado y protegido es clave para reducir este riesgo.
            </p>
        </div>
        <Footer /> 
    </div>
    </>
  );
}
export default Riesgos;