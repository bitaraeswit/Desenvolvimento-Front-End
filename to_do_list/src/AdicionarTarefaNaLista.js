import React, {useState} from 'react';

const AdicionarRegistro = ({ onSubmit }) => {

  const [registro, setRegistro] = useState('');

  function adicionarRegistro({target}) {
    setRegistro(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(registro);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <h3>Digite o registro</h3>
        <input 
          className="field"
          placeholder=""
          onChange={adicionarRegistro}
        />
      </form>
    </div>
  )
};

export default AdicionarRegistro;