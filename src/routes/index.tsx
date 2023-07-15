import { ReactNode } from 'react';
import { HashRouter, Route, Routes as Rts } from 'react-router-dom';
import Login from '../pages/Login';

import Notices from '../pages/Auth/Notices';
import Agenda from '../pages/Auth/Agenda';
import Chat from '../pages/Auth/Chat';
import Schedules from '../pages/Auth/Schedules';
import Solicitations from '../pages/Auth/Solicitations';

interface IRoutes {
  children: ReactNode;
}

function Routes({ children }: IRoutes) {
  return (
    <HashRouter >
      <div style={{ display: 'flex', flex: 1, flexDirection: 'row' }}>
        {
          children
        }
        <Rts >
          <Route path={localStorage.getItem('token') !== null ? '/login' : '/'} element={<Login />} />
          <Route path={localStorage.getItem('token') === null ? '/notices' : '/'} element={<Notices />} />
          <Route path='/agenda' element={<Agenda />} />
          <Route path='/schedules' element={<Schedules />} />
          <Route path='/solicitations' element={<Solicitations />} />
          <Route path='/news' element={<Agenda />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/config' element={<Agenda />} />
        </Rts>
      </div>
    </HashRouter>
  );
}

export default Routes;