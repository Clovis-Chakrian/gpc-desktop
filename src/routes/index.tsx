import { ReactNode } from 'react';
import { HashRouter, Route, Routes as Rts } from 'react-router-dom';
import Login from '../pages/Login';

import Notices from '../pages/Notices';
import Agenda from '../pages/Agenda';
import Chat from '../pages/Chat';


interface IRoutes {
  children: ReactNode;
}

function Routes({ children }: IRoutes) {
  return (
    <HashRouter>
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        {
          window.location.href.includes('/login')
            ? <></>
            : children
        }
        <Rts >
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Notices />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='/schedules' element={<Agenda />} />
          <Route path='/solicitations' element={<Agenda />} />
          <Route path='/news' element={<Agenda />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/config' element={<Agenda />} />
        </Rts>
      </div>
    </HashRouter>
  );
}

export default Routes;