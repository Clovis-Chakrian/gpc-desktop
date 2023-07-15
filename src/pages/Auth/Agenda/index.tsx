import {
  AgendaContainer,
  AgendaDetails,
  AgendaList,
  AgendaCard,
  Select,
  AgendaCardInfo,
  AgendaCardButton,
  AgendaCardButtons,
  AgendaTitle,
  AgendaDescription,
  SaveButton,
  SelectDate
} from './styles';

import {
  IoTrashOutline,
  IoPencil
} from 'react-icons/io5';

import api from '../../../services/api';
import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { IEvents } from '../../../@types/api';

function Agenda() {
  const [events, setEvents] = useState<IEvents[]>();
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedEventId, setSelectedEventId] = useState('');
  const [title, setTitle] = useState('');
  const [month, setMonth] = useState(new Date());
  const [description, setDescription] = useState('');

  async function getEvents(month: number, year: string) {
    await api.http.get('/events?', {
      params: {
        month,
        year
      }
    }).then((resp) => {
      setEvents(resp.data);
    }).catch((err: AxiosError) => {
      console.log(err);
      alert('Houve um erro ao buscar os eventos. Tente novamente mais tarde.')
    });
  };

  function selectEventToEdit(id: string, month: string, title: string, description: string) {
    setSelectedEventId(id);
    setMonth(new Date(month));
    setTitle(title);
    setDescription(description);
  };

  function handleNewEventButton() {
    setSelectedEventId('');
    setMonth(new Date());
    setTitle('');
    setDescription('');
  };

  async function handleCreateEvent() {
    alert('Criar evento.')
  }

  async function handleEditEvent() {
    alert('Editar evento.')
  }

  useEffect(() => {
    getEvents(selectedMonth, String(new Date().getFullYear()))
  }, [selectedMonth]);

  return (
    <AgendaContainer>
      <AgendaList>
        <h2 onClick={handleNewEventButton}>
          Novo evento +
        </h2>
        <Select name="" id="" value={selectedMonth} onChange={(selectedValue => {
          setSelectedMonth(Number(selectedValue.target.value));
        })}>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </Select>
        {
          events?.length === 0 ?
            <p>Ainda não há eventos para esse mês</p>
            :
            events?.map(event => {
              return (
                <AgendaCard key={event.id}>
                  <AgendaCardInfo>
                    <h3>{event.title} - {`${new Date(event.date).getDate()}/${new Date(event.date).getMonth() + 1}`}</h3>
                    <p>{event.description}</p>
                  </AgendaCardInfo>

                  <AgendaCardButtons>
                    <AgendaCardButton onClick={() => {
                      selectEventToEdit(event.id, event.date, event.title, event.description)
                    }}>
                      <IoPencil color='#048F36' size={28} />
                    </AgendaCardButton>

                    <AgendaCardButton>
                      <IoTrashOutline color='#DF000C' size={28} />
                    </AgendaCardButton>
                  </AgendaCardButtons>
                </AgendaCard>
              );
            })}
      </AgendaList>

      <AgendaDetails>
        <span>
          {/* <Select name="" id="" value={month} onChange={(selectedValue) => {
            setMonth(Number(selectedValue.target.value));
          }}>
            <option value="1">Janeiro</option>
            <option value="2">Fevereiro</option>
            <option value="3">Março</option>
            <option value="4">Abril</option>
            <option value="5">Maio</option>
            <option value="6">Junho</option>
            <option value="7">Julho</option>
            <option value="8">Agosto</option>
            <option value="9">Setembro</option>
            <option value="10">Outubro</option>
            <option value="11">Novembro</option>
            <option value="12">Dezembro</option>
          </Select> */}

          <SelectDate type="date" value={month.toLocaleDateString('en-CA')} onChange={(selectedValue) => {
            setMonth(new Date(selectedValue.target.value));
            alert(month)
          }}/>
          <div>
            <h3>Título do aviso</h3>
            <AgendaTitle value={title} type="text" placeholder='Digite aqui o título do aviso...' onChange={(e) => {
              setTitle(e.target.value);
            }} />
          </div>

          <div>
            <h3>Descrição do aviso</h3>
            <AgendaDescription value={description} aria-multiline placeholder='Digite aqui a descrição do aviso...' onChange={(e) => {
              setDescription(e.target.value);
            }} />
          </div>

          <SaveButton onClick={() => {
            selectedEventId ? handleEditEvent() : handleCreateEvent();
          }}>
            <p>Salvar</p>
          </SaveButton>
        </span>
      </AgendaDetails>
    </AgendaContainer>
  );
};

export default Agenda;