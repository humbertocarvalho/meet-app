import React from 'react';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>Meus meetups</h1>
      <Link to="meetups/create">
        <MdAddCircleOutline color="#fff" size={22} />
        Novo Meetup
      </Link>
    </Container>
  );
}
