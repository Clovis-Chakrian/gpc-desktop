import {
  Container
} from './styles';

interface ISolicitationCardProps {
  type: string,
  father?: string,
  mother?: string,
  student: string,
  schoolClass: string,
  phone: string,
  date: string,
  status: string
};

function SolicitationCard({
  date,
  father,
  mother,
  phone,
  schoolClass,
  student,
  type,
  status
}: ISolicitationCardProps) {
  return(
    <Container>
      <h3>{type}</h3>
      <p>{father}</p>
      <p>{mother}</p>
      <p>{student}</p>
      <p>{schoolClass}</p>
      <p>{phone}</p>
      <p>{date}</p>

      <button>
        <p>Marcar como finalizado</p>
      </button>
    </Container>
  );
};

export default SolicitationCard;