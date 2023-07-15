import { useState } from 'react';
import {
  ScheduleButton,
  SchedulesContainer,
  Select,
  ScheduleButtonsDiv
} from './styles';

import {
  FiFilePlus,
  FiFileText
} from 'react-icons/fi';
import api from '../../../services/api';
import { AxiosError } from 'axios';


function Schedules() {
  const [selectedSchoolClass, setSelectedSchoolClass] = useState('1A-DS');

  async function handleOpenSchedule() {
    await api.http.get(`/schedule/${selectedSchoolClass}`).then((resp) => {
      window.open(resp.data.url); 
    }).catch((err: AxiosError) => {
      alert(err)
      alert('Houve um erro ao abrir o horário selecionado. Tente novamente mais tarde.')
    });
  };

  return (
    <SchedulesContainer>
      <Select name="" value={selectedSchoolClass} id="" onChange={(e) => {
        setSelectedSchoolClass(e.target.value);
      }} >
        <option value="1A-DS">1A-DS</option>
        <option value="1B-DS">1B-DS</option>
        <option value="1A-MULT">1A-MULT</option>
        <option value="1B-MULT">1B-MULT</option>
        <option value="2A-DS">2A-DS</option>
        <option value="2B-DS">2B-DS</option>
        <option value="2A-MULT">2A-MULT</option>
        <option value="2B-MULT">2B-MULT</option>
        <option value="3A-DS">3A-DS</option>
        <option value="3B-DS">3B-DS</option>
        <option value="3A-MULT">3A-MULT</option>
        <option value="3B-MULT">3B-MULT</option>
      </Select>

      <ScheduleButtonsDiv>
        <ScheduleButton onClick={handleOpenSchedule}>
          <FiFileText color={'#048F36'} size={48} />
          <h4>Ver arquivo</h4>
        </ScheduleButton>

        <ScheduleButton>
          <FiFilePlus color={'#048F36'} size={48} />
          <h4>Editar arquivo</h4>
        </ScheduleButton>
      </ScheduleButtonsDiv> 
    </SchedulesContainer>
  );
};

export default Schedules;