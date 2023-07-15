import {
  Container,
  LoginForm,
  Label,
  Input,
  InputContainer,
  LoginButton
} from './styles';
import api from '../../services/api';

import Logo from '../../../assets/logo.png';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  async function onSubitLogin() {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    if (email === '' || password === '') {
      alert('Você deve preencher todos os campos para fazer login.');
      return
    }

    const data = {
      email,
      password
    }

    await api.http.post(('/login-manager'), {
      ...data
    }).then(async (res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
      
      navigate('/notices');
    }).catch((err: AxiosError) => {
      const message = (err.response?.data as { message: string }).message
      console.error({ err: err.response, message, code: err.code });
      alert(message);
    });
  };

  return (
    <Container>
      <header>
        <img src={Logo} alt="ETE Ginásio Pernambucano" />
      </header>

      <LoginForm>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" />
        </InputContainer>

        <InputContainer>
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" name="password" />
        </InputContainer>

        <LoginButton onClick={onSubitLogin} type="button">
          Entrar
        </LoginButton>
      </LoginForm>
    </Container>
  );
};

export default Login;