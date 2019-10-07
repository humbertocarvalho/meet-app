import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container, Meetups, Meetup } from './styles';

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
        <Meetup>
          <span>Meetup de React Native</span>
          <Link to="meetups/create">
            <MdAddCircleOutline color="#fff" size={22} />
          </Link>
        </Meetup>
        <Meetup>
          <span>Meetup de React Native</span>
          <Link to="meetups/create">
            <MdAddCircleOutline color="#fff" size={22} />
          </Link>
        </Meetup>
        <Meetup>
          <span>Meetup de React Native</span>
          <Link to="meetups/create">
            <MdAddCircleOutline color="#fff" size={22} />
          </Link>
        </Meetup>
        <Meetup>
          <span>Meetup de React Native</span>
          <Link to="meetups/create">
            <MdAddCircleOutline color="#fff" size={22} />
          </Link>
        </Meetup>
      </Meetups>
    </Container>
  );
}
