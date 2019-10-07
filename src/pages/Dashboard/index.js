import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetups, Meetup, Detalhar } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="meetups/create">
          <MdAddCircleOutline color="#fff" size={22} />
          Novo Meetup
        </Link>
      </header>

      <Meetups>
        <Meetup to={`/meetups/${'1'}`}>
          <span>Meetup de React Native</span>
          <Detalhar>
            <p>24 de Junho, às 20h</p>
            <MdChevronRight color="#fff" size={22} />
          </Detalhar>
        </Meetup>
        <Meetup to={`/meetups/${'1'}`}>
          <span>Meetup de React Native</span>
          <Detalhar>
            <p>24 de Junho, às 20h</p>
            <MdChevronRight color="#fff" size={22} />
          </Detalhar>
        </Meetup>
        <Meetup to={`/meetups/${'1'}`}>
          <span>Meetup de React Native</span>
          <Detalhar>
            <p>24 de Junho, às 20h</p>
            <MdChevronRight color="#fff" size={22} />
          </Detalhar>
        </Meetup>
        <Meetup to={`/meetups/${'1'}`}>
          <span>Meetup de React Native</span>
          <Detalhar>
            <p>24 de Junho, às 20h</p>
            <MdChevronRight color="#fff" size={22} />
          </Detalhar>
        </Meetup>
        <Meetup to={`/meetups/${'1'}`}>
          <span>Meetup de React Native</span>
          <Detalhar>
            <p>24 de Junho, às 20h</p>
            <MdChevronRight color="#fff" size={22} />
          </Detalhar>
        </Meetup>
        <Meetup to={`/meetups/${'1'}`}>
          <span>Meetup de React Native</span>
          <Detalhar>
            <p>24 de Junho, às 20h</p>
            <MdChevronRight color="#fff" size={22} />
          </Detalhar>
        </Meetup>
      </Meetups>
    </Container>
  );
}
