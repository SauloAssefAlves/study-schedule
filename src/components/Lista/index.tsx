
import Item from "./item/indes";
import style from "./lista.module.scss";
import { ITarefa } from "../../types/tarefa";
//interface


export default function Lista({tarefas}:{tarefas: ITarefa[]}) {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </ul>
    </aside>
  );
}
