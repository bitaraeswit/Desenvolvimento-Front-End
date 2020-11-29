import React, {useState} from 'react';

import './styles.css';

function Home() {

  const [cont, setCont] = useState(0);

  function onChange(event) {
    const {value} = event.target;
    setCont(value.length);
  }

  return (
      <div id="home">
        <title>React hooks - witally</title>
        <h3>Escreva algo</h3>
        <input name="input" type="text" onChange={onChange}/>
        <span>A quantidade de caracteres digitados é {cont}</span>
      </div>
  )
}

export default Home;