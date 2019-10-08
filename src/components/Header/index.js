import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

import { Container, Content, Profile, Logout } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="GoBarber" />
          </Link>
        </nav>

        <aside>
          {/* <Notifications /> */}
          <Profile>
            <div>
              <strong>Humberto de Carvalho</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
          </Profile>
          <Logout>Sair</Logout>
        </aside>
      </Content>
    </Container>
  );
}
