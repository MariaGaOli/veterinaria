import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import BackHomeButton from "../components/BackHomeButton";

const STORAGE_KEY = "animais";

const getAnimais = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
const saveAnimais = (lista) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));

export default function ListaAnimais() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    setAnimais(getAnimais());
  }, []);

  const remover = (id) => {
    const novaLista = animais.filter((a) => a.id !== id);
    setAnimais(novaLista);
    saveAnimais(novaLista);
  };

  return (
    <div className="container mt-4">
      <h2>Animais Cadastrados</h2>

      <Link to="/cadastrar" className="btn btn-primary mb-3">
        Cadastrar Novo
      </Link>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Espécie</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {animais.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center">
                Nenhum animal cadastrado
              </td>
            </tr>
          ) : (
            animais.map((a) => (
              <tr key={a.id}>
                <td>{a.nome}</td>
                <td>{a.especie}</td>
                <td>{a.idade}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => remover(a.id)}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

        <div className="container mt-4">
        <BackHomeButton />
        </div>
    </div>
  );
}