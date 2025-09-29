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

}