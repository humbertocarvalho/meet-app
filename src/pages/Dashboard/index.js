import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Meetups, Meetup, Detalhar } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('/meetup');

      const data = response.data.map(meetup => {
        return {
          ...meetup,
          formattedDate: format(
            parseISO(meetup.date),
            "dd 'de' MMMM, ' ás 'HH'h'",
            { locale: pt }
          ),
        };
      });

      setMeetups(data);
    }
    loadMeetups();
    console.tron.log('aqui chegou');
  }, []);

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
        {meetups.map(meetup => (
          <Meetup to={`/meetups/${meetup.id}`}>
            <span>{meetup.title}</span>
            <Detalhar>
              <p>{meetup.formattedDate}</p>
              <MdChevronRight color="#fff" size={22} />
            </Detalhar>
          </Meetup>
        ))}
      </Meetups>
    </Container>
  );
}
