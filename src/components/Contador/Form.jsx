import React, {useState} from 'react'
import Button from './Button'
import './App.css';


function Form() {

  const [textarea, setTextarea] = useState('');
  const [message, setMessage]   = useState('Contando');
  const [textBtn, setTextBtn] = useState('Copiar Texto');


  let total = 160;


  const handleTextarea = (e) => {

    const value = e.target.value,
          length = value.length;

    let body = document.body,
        warning = '#fa4a62',
        info = '#04aa6d',
        success = '#588af9';

    setTextarea(value);

    if (length > total) {

      setMessage('Excedeu o limite');
      body.style.backgroundColor = warning;
  

    } else if (length === total) {

      setMessage('Parabéns');
      body.style.backgroundColor = info;
  

    } else {

      setMessage('Contando');
      body.style.backgroundColor = success;

    }
  }

  const copyToClipBoard = () => {
    return (
      setTextBtn('Texto Copiado!'),
      navigator.clipboard.writeText(textarea)
    )
  }


  return (
    <div id="container">
            <textarea
              name="textarea"
              value={textarea}
              onChange={handleTextarea}
            />
            <button onClick={copyToClipBoard}>{textBtn}</button>

      <h3 id="message">{message} {textarea.length} / {total} caracteres</h3>
    </div>
  )
}

export default Form;
