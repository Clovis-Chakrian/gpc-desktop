import { GlobalStyle } from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import SideBar from './components/SideBar';
import Routes from './routes';

export function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes>
        <SideBar />
      </Routes>
    </ThemeProvider>
  )
}