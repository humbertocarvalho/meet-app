import React from 'react';
import {
  MdDeleteForever,
  MdModeEdit,
  MdLocationOn,
  MdEvent,
} from 'react-icons/md';
import detail from '~/assets/detail.png';

import { Container, Details } from './styles';

export default function Meetup() {
  return (
    <Container>
      <header>
        <h1>Meetup de React Native</h1>
        <nav>
          <button type="button" className="edit">
            <MdModeEdit size={22} color="#ffff" />
            <span>Editar</span>
          </button>
          <button type="button" className="cancel">
            <MdDeleteForever size={22} color="#ffff" />
            <span>Cancelar</span>
          </button>
        </nav>
      </header>
      <Details>
        <img src={detail} alt="imagem" />

        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados.
          <br />
          <br />
          <br />
          Caso queira participar como palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br
        </p>

        <footer>
          <MdEvent size={20} />
          24 de Junho, às 20h
          <MdLocationOn size={20} />
          Rua Guilherme Gembala, 260
        </footer>
      </Details>
    </Container>
  );
}
