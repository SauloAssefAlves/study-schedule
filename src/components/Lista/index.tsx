import Item from "./item/indes";
import style from "./lista.module.scss";
import { ITarefa } from "../../types/tarefa";
//interface
interface Props {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item {...item} selecionaTarefa={selecionaTarefa} key={item.id} />
        ))}
      </ul>
    </aside>
  );
}
