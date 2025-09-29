import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className={style.homeContainer}>
        <div className={style.contenedor}>
          <h1>Seguridad Informática</h1>

          <p className={style.introduccion}>
            La seguridad informática es el conjunto de herramientas, normativas y métodos diseñados para proteger la información y los sistemas de computación de accesos no autorizados, daños o interrupciones. Su principal objetivo es preservar la confidencialidad, integridad y disponibilidad de los datos.
          </p>

          <div className={style.botones}>
            <div className={style.columnaIzquierda}>
              <div className={style.grupo}>
                <button onClick={() => navigate('./TiposMalware')}>Tipos de malware</button>
                <p className={style.izq}>Conoce virus</p>
              </div>
              <div className={style.grupo}>
                <button onClick={() => navigate('./Riesgos')}>Riesgos</button>
                <p className={style.izq}>Consejos simples para estar seguro</p>
              </div>
            </div>

            <div className={style.columnaDerecha}>
              <div className={style.grupo}>
                <button onClick={() => navigate('./Protegerme')}>Protegerme</button>
                <p className={style.der}>Cuidado</p>
              </div>

              <div className={style.grupo}>
                <button onClick={() => navigate('/quiz')}>Retarme</button>
                <p className={style.der}>Ponerme a prueba</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.caja}>
          <h2>Sobre mí</h2>

          <p className={style.pp
            
          }>
            Me gusta la programación. Disfruto mucho de crear cosas con código y resolver problemas. También me encanta aprender cada vez más; siempre estoy buscando algo nuevo que me ayude a mejorar.
            La tecnología en general me apasiona, especialmente todo lo relacionado con redes, ciberseguridad y seguridad informática. Son áreas que me interesan mucho y en las que quiero seguir creciendo.
            Actualmente estoy cursando 6to año en la EPET N°20, en Neuquén Capital, Argentina, y estoy por recibir el título de Técnico en Programación.
          </p>

          <h3>Motivo del proyecto</h3>

          <p className={style.pp}>
            El motivo de este proyecto es poner en práctica mis conocimientos, animarme a equivocarme y aprender en el proceso. También quiero desafiarme a buscar soluciones por mi cuenta, sin depender siempre de una guía.
            Además, busco brindar información que considero realmente importante, sobre todo para quienes no están tan metidos en estos temas, pero que igual deberían tener en cuenta, porque todos somos vulnerables en el mundo digital.
          </p>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
