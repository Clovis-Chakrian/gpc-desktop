import { SideBarContainer, LogoImg, NavBar, SideBarLink, NavBarItem } from './styles';
import { IoClipboard, IoCalendar, IoDocuments, IoFolderOpen, IoNewspaper, IoChatbubbles, IoSettings } from 'react-icons/io5';
import Logo from '../../../assets/logo.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function SideBar() {  
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location.pathname])

  return (
    <SideBarContainer
    show={currentPath !== '/' || localStorage.getItem('token') !== null}
    >
      <LogoImg src={Logo} alt='Logo' />
      <NavBar>
        <NavBarItem>
          <SideBarLink to={localStorage.getItem('token') === null ? '/notices' : '/'}>
            <IoClipboard size={44} color='#FFF' />
            <p>Mural</p>
          </SideBarLink>
        </NavBarItem>

        <NavBarItem>
          <SideBarLink to={'/agenda'}>
            <IoCalendar size={44} color='#FFF' />
            <p>Agenda</p>
          </SideBarLink>
        </NavBarItem>

        <NavBarItem>
          <SideBarLink to={'/schedules'}>
            <IoDocuments size={44} color='#FFF' />
            <p>Horários</p>
          </SideBarLink>
        </NavBarItem>

        <NavBarItem>
          <SideBarLink to={'/solicitations'}>
            <IoFolderOpen size={44} color='#FFF' />
            <p>Solicitações</p>
          </SideBarLink>
        </NavBarItem>

        <NavBarItem>
          <SideBarLink to={'/news'}>
            <IoNewspaper size={44} color='#FFF' />
            <p>Notícias</p>
          </SideBarLink>
        </NavBarItem>

        <NavBarItem>
          <SideBarLink to={'/chat'}>
            <IoChatbubbles size={44} color='#FFF' />
            <p>Chat</p>
          </SideBarLink>
        </NavBarItem>

        <NavBarItem>
          <SideBarLink to={'/config'}>
            <IoSettings size={44} color='#FFF' />
            <p>Config.</p>
          </SideBarLink>
        </NavBarItem>
      </NavBar>
    </SideBarContainer>
  );
}

export default SideBar;