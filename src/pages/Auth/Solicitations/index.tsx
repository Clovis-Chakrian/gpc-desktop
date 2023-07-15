import { useEffect, useState } from "react";
import { SolicitationCard } from "../../../components";
import {
  Select,
  Container,
  SolicitationsContainer
} from './styles';
import api from "../../../services/api";

interface SolicitationResponse {
  id: string,
  type: string,
  student: string,
  mother?: string,
  father?: string,
  startYear?: string,
  completitionYear?: string,
  phone: string,
  schoolClass: string,
  solicitatedAt: string,
  status: string
}

function Solicitations() {
  const [selectedType, setSelectedType] = useState('Declaração de matrícula');
  const token = localStorage.getItem('token');
  const [solicitations, setSolicitations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getSolicitations() {
    await api.http.get('/solicitations', {
      params: {
        type: selectedType
      }
    }).then((res) => {
      setSolicitations(res.data);
      alert(solicitations)
    }).catch((err) => {
      alert('Houve um erro ao buscar as solicitações.');
      console.log(err);
    })
  };

  async function changeSolicitationStatus(id: string) {
    // const finishedAt = new Date()
    const data = {
      status: 'finalizado',
      finishedAt: new Date()
    }

    await api.http.patch(`/solicitation/${id}`, {
      ...data
    }, {
      headers: {
        'x-access-token': token
      }
    }).then(resp => {
      switch (resp.status) {
        case 200:
          alert('Status alterado com sucesso.');
          getSolicitations();
          setIsLoading(false);
          break;
        case 500:
          alert('Houve um erro na requisição.');
          setIsLoading(false);
          break;
        case 400:
          alert('Houve um erro na requisição.');
          setIsLoading(false);
          break
        default:
          alert('Houve um erro na requisição.');
          setIsLoading(false);
          break;
      }
    }).catch(err => {
      console.error(err);
      alert('Houve um erro na requisição.');
      setIsLoading(false);
    });
  };

  async function handleDeleteSolicitation(id: string, status: string) {
    setIsLoading(true);
    if (status !== 'finalizado') {
      alert('Para deletar uma notícia, o status dela deve estar marcado como finalizado.')
      setIsLoading(false);
    }

    await api.http.delete(`/solicitation/${id}`, {
      headers: {
        'x-access-token': token
      }
    }).then(resp => {
      switch (resp.status) {
        case 200:
          alert('Solicitação deletada com sucesso!');
          getSolicitations();
          setIsLoading(false);
          break
        case 500:
          alert('Houve um erro ao tentar deletar a solicitação escolhida. Tente novamente mais tarde.');
          setIsLoading(false);
          break
        case 400:
          alert('Solicitação escolhida para deletar não foi achada. Tente recarregar a aplicação.');
          setIsLoading(false);
          break

        default:
          alert('Houve um erro ao tentar deletar a solicitação escolhida. Tente novamente mais tarde.');
          setIsLoading(false);
          break
      }
    }).catch(err => {
      console.error(err);
      alert('Atenção houve um erro interno da aplicação. Tente novamente mais tarde.');
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getSolicitations();
  }, [selectedType]);

  return (
    <Container>
      <header>
        <Select name="" id="" value={selectedType} onChange={(selectedValue) => {
          setSelectedType(selectedValue.target.value);
        }}>
          <option value="Declaração de matrícula">Declaração de matrícula</option>
          <option value="Ficha 19">Ficha 19</option>
          <option value="Declaração de frequência">Declaração de frequência</option>
        </Select>
      </header>
      <SolicitationsContainer>
        {
          solicitations.map((solicitation: SolicitationResponse) => {
            return (
              <SolicitationCard
                key={solicitation.id}
                date={new Date(solicitation.solicitatedAt).toLocaleDateString()}
                father={solicitation.father}
                mother={solicitation.mother}
                phone={solicitation.phone}
                schoolClass={solicitation.schoolClass}
                status={solicitation.status}
                student={solicitation.student}
                type={solicitation.type}
              />
            );
          })
        }

        <button onClick={() => localStorage.clear()}>Limpar</button>
      </SolicitationsContainer>

    </Container>
  );
};

export default Solicitations;