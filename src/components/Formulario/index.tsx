import Button from "../Button";
import style from "./formulario.module.scss";
import { ITarefa } from "../../types/tarefa";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";



export default function Formulario({
  setTarefas,
}: {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    const tarefasSubmit = { tarefa: tarefa, tempo: tempo };
    evento.preventDefault();
    setTarefas((tarefas) => [
      ...tarefas,
      { ...tarefasSubmit, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => {
            setTarefa(e.target.value);
          }}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(e) => {
            setTempo(e.target.value);
          }}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
