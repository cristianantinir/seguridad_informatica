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