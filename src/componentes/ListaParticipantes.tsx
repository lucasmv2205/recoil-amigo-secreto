import { useListaDeParticipantes } from "../state/hook/useListaDeParticipantes";

const ListaParticipantes = () => {
  const participantes: string[] | any = useListaDeParticipantes();

  return (
    <ul>
      {participantes.map((participante: string) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  );
};

export default ListaParticipantes;
