import React, { useState } from 'react';
import formJson from './form.json';
import './App.css';

function App() {
  const [form, setForm] = useState(formJson.campos)
  const [selecao, setSelecao] = useState(1)
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const [numero, setNumero] = useState()

  console.log(email)

  return (
    <div className="App">
      {
        form.map((i) => {
          return (
            <form>

              {
                i.type === 'select' ?

                  <select value={selecao} onChange={(e) => {
                    let value = e.target.value
                    setSelecao(value)
                  }}>
                    {
                      i.options.map((o) => {
                        return (
                          <option key={o.value} value={o.value}>{o.text}</option>
                        )
                      })
                    }
                  </select>

                  :
                  <input type={i.type} placeholder={i.label} name={i.name} key={i.id} onChange={(e) => {
                    if(i.type === 'email'){
                      let valorEmail = e.target.value
                      setEmail(valorEmail)
                    }

                    if(i.type === 'password'){
                      let valorSenha = e.target.value 
                      setSenha(valorSenha)
                    }

                    if(i.type === 'number'){
                      let valorNumero = e.target.value 
                      setNumero(valorNumero)
                    }
                  }} />
              }
            </form>
          )
        })
      }
      <button
        onClick={(e) => {
          e.preventDefault()
          console.log(`
          Email: ${email} 
          Senha: ${senha} 
          Numero: ${numero} 
          Selecao: ${selecao}
          `)
        }}
      > 
        Enviar
      </button>
    </div>
  );
}


export default App;
