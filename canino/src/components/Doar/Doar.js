import { useState } from 'react';
import './Doar.css';
import axios from 'axios';
const urlAPI = "https://localhost:7042/api/animal";

const initialState = {
  novaDoacao:  { nome: '', raca: '', cor: '', idade: 0, descricao: '', genero: '', vacinacao: '', idPorte: 0, idCidade: 0 },
  lista: []
}

export default function Doar(props) {

  const [novaDoacao, setNovaDoacao] = useState(initialState.novaDoacao)

  function atulizarNovaDoacao(event) {
    const { name, value } = event.target

    console.log(name, value)

    setNovaDoacao({
      ...novaDoacao,
      [name]: value
    })

    console.log(novaDoacao)
  }

  function enviarFormulario(event) {
    event.preventDefault();

    novaDoacao.idCidade = Number(novaDoacao.idCidade)
    novaDoacao.idPorte = Number(novaDoacao.idPorte)
    novaDoacao.idade = Number(novaDoacao.idade)

    console.log(novaDoacao)

    axios.post('https://localhost:7042/api/animal', novaDoacao)
  }

  return (
    <div className="content">
      <main className="mainDoar">
        <h1>Doar um bichinho?</h1>
        <h2>Preencha o formulário!</h2>

        <form className="inclui-container" onSubmit={enviarFormulario}>
          <label>
            Nome:
          </label>
          <input type="text" name="nome" value={novaDoacao.nome} onChange={atulizarNovaDoacao} />
          <label>
            Raça:
          </label>
          <input type="text" name="raca" value={novaDoacao.raca} onChange={atulizarNovaDoacao} />
          <label>
            Cor:
          </label>
          <input type="text" name="cor" value={novaDoacao.cor} onChange={atulizarNovaDoacao} />
          <label>
            Idade:
          </label>
          <input type="number" name="idade" value={novaDoacao.idade} onChange={atulizarNovaDoacao} />
          <label>
            Descrição:
          </label>
          <input type="text" name="descricao" placeholder="Coloque a descrição do seu bichinho" value={novaDoacao.descricao} onChange={atulizarNovaDoacao} />
          <label>
            Gênero:
          </label>
          <input type="text" name="genero" value={novaDoacao.genero} onChange={atulizarNovaDoacao} />
          <label>
            Informações cruciais:
          </label>
          <input type="text" name="vacinacao"  placeholder="Ex:vacinação" value={novaDoacao.vacinacao} onChange={atulizarNovaDoacao} />
          <label>
            Porte:
          </label>
          <select name="idPorte" onChange={atulizarNovaDoacao} value={novaDoacao.idPorte}>
            <option value="1">Grande</option>
            <option value="2">Médio</option>
            <option value="3">Pequeno</option>
          </select>
          <label>
            Cidade:
          </label>
          <select name="idCidade" onChange={atulizarNovaDoacao} value={novaDoacao.idCidade}>
            <option value="1">Sumare</option>
            <option value="2">Campinas</option>
          </select>
          <button className="btnSalvar"
            onClick={e => enviarFormulario(e)} >
            Salvar
          </button>
        </form>
      </main>
    </div>

  )
}