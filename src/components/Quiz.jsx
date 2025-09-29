import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Quiz.module.css'; 
import Footer from './Footer';

const questions = [
    {
        question:  '¿Qué hace un keylogger?',
        options: [ 'Limpia archivos duplicados', 'Registra lo que escribes en el teclado ', 'Cifra tus archivos', 'Elimina virus automáticamente'],
        correct: 1,
    },
    {
        question:  '¿Qué buena práctica ayuda a protegerte del malware?',
        options: [ 'Usar antivirus y hacer copias de seguridad', 'Compartir contraseñas ', 'Ignorar actualizaciones del sistema', 'Descargar archivos de cualquier sitio'],
        correct: 0,
    },
    {
        question:  '¿Cuál de estos malware puede secuestrar tus archivos y pedir un rescate?',
        options: [ 'Adware', 'Ramsomware', 'Spyware', 'Rootkit'],
        correct: 1,
    },
];

function Quiz(){
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] =useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const navigate = useNavigate();

    const handleNext = () => {
        
        if (selected === null)
            return alert('seleccione una opción');

        if (selected === questions[current].correct){
            setScore(score + 1);
        }

        if (current + 1 < questions.length){
            setCurrent(current + 1);
            setSelected(null);
        }else{
            setFinished(true);
        }
    };

    const resetQuiz = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    };

    const getFeedbackMessage = () => {
    if (score === 3) return '¡Perfecto!😁';
    if (score === 2) return '¡Medio!😬';
    if (score === 1) return '¡La próxima!🫡';
    return '¡Ups!😮‍💨';
    };

    if (finished){
        return(
            <>
            <div className={style.contenedorFin}>
                <div className={style.resultado}>
                    <h3>Resultado</h3>
                    <p>{score} / {questions.length} {getFeedbackMessage()}</p>
                </div>  
                
                <div className={style.botonesFin}>
                    <button className={style.finUno} onClick={() => navigate('/')}>Inicio</button>
                    <button className={style.finDos} onClick={resetQuiz}>Otra vez</button>
                </div>
            </div>  
            <Footer /> 
            </>
        );
    }

    return (
        <>
        <div className={style.quizContainer}>
            <h1 className={style.acheUno}>¿Realmente aprendí?</h1>
            <div className={style.options}>
                <h2 className={style.acheDos}>{questions[current].question}</h2>
                {questions[current].options.map((option, index) => (
                <label key={index} className={style.optionLabel}>
                    <input 
                        type='radio'
                        name='answer'
                        value={index}
                        checked={selected === index}
                        onChange={() => setSelected(index)}
                    />
                    {option}
                </label>   
                ))}
            </div>
            <div className={style.ambosBotones}>
                <button className={style.botonUno} onClick={() => navigate('/')}>Inicio</button>
                <button className={style.botonDos} onClick={handleNext}>
                    {current === questions.length -1 ? 'Finalizar' : 'Siguiente'}
                </button>
            </div>
        </div>
    </>
    );
}

export default Quiz;
