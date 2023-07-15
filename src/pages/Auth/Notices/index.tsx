import {
  NoticesContainer,
  NoticeDetails,
  NoticesList,
  NoticeCard,
  Select,
  NoticeCardInfo,
  NoticeCardButton,
  NoticeCardButtons,
  NoticeTitle,
  NoticeDescription,
  SaveButton
} from './styles';

import {
  IoTrashOutline,
  IoPencil
} from 'react-icons/io5';

import api from '../../../services/api';
import { useEffect, useState } from 'react';

import { INotices } from '../../../@types/api';
import { AxiosError } from 'axios';

function Notices() {
  const [notices, setNotices] = useState<INotices[]>();
  const [selectedSchoolClass, setSelectedSchoolClass] = useState('1A-DS');
  const [selectedNoticeId, setSelectedNoticeId] = useState('');
  const [schoolClass, setSchoolClass] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function getNotices(schoolClass: string) {
    await api.http.get('/notices', {
      params: {
        schoolClass
      }
    }).then((resp) => {
      setNotices(resp.data);
    }).catch((err: AxiosError) => {
      console.error(err);
      alert('Houve um erro ao buscar os avisos, tente novamente mais tarde.')
    })
  };

  function handleSelectNoticeToEdit(id: string, schoolClass: string, title: string, description: string) {
    setSelectedNoticeId(id);
    setSchoolClass(schoolClass);
    setTitle(title);
    setDescription(description)
  };

  function handleNewNoticeButton() {
    setSelectedNoticeId('');
    setSchoolClass('1A-DS');
    setTitle('');
    setDescription('')
  };

  async function handleCreateNewNotice() {
    alert('Novo aviso.');
  };

  async function handleEditNotice() {
    alert('Editando aviso')
  }

  useEffect(() => {
    getNotices(selectedSchoolClass);
  }, [selectedSchoolClass]);

  return (
    <NoticesContainer>
      <NoticesList>
        <h2 onClick={handleNewNoticeButton}>
          Novo aviso +
        </h2>
        <Select name="" id="" onChange={(selectedValue) => {
          setSelectedSchoolClass(selectedValue.target.value);
        }}>
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
        {
          notices?.length === 0 ?
            <p>Ainda não há nenhum aviso para essa turma.</p>
            :
            notices?.map(notice => {
              return (
                <NoticeCard key={notice.id}>
                  <NoticeCardInfo>
                    <h3>{notice.title}</h3>
                    <p>{notice.description}</p>
                  </NoticeCardInfo>

                  <NoticeCardButtons>
                    <NoticeCardButton onClick={() => {
                      handleSelectNoticeToEdit(notice.id, notice.schoolClass, notice.title, notice.description)
                    }}>
                      <IoPencil color='#048F36' size={28} />
                    </NoticeCardButton>

                    <NoticeCardButton>
                      <IoTrashOutline color='#DF000C' size={28} />
                    </NoticeCardButton>
                  </NoticeCardButtons>
                </NoticeCard>
              );
            })}
      </NoticesList>

      <NoticeDetails>
        <span>
          <Select name="" id="" value={schoolClass} onChange={(e) => {
            setSchoolClass(e.target.value);
          }}>
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
          <div>
            <h3>Título do aviso</h3>
            <NoticeTitle type="text" value={title} placeholder='Digite aqui o título do aviso...' onChange={(e) => {
              setTitle(e.target.value);
            }} />
          </div>

          <div>
            <h3>Descrição do aviso</h3>
            <NoticeDescription value={description} aria-multiline placeholder='Digite aqui a descrição do aviso...' onChange={(e) => {
              setDescription(e.target.value);
            }} />
          </div>

          <SaveButton onClick={() => {
            selectedNoticeId ? handleEditNotice() : handleCreateNewNotice();
          }}>
            <p>Salvar</p>
          </SaveButton>
        </span>
      </NoticeDetails>
    </NoticesContainer>
  );
};

export default Notices;