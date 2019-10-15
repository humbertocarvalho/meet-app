import React, { useEffect, useState } from 'react';
import { parseISO } from 'date-fns';
import {
  MdDeleteForever,
  MdModeEdit,
  MdLocationOn,
  MdEvent,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import detail from '~/assets/detail.png';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Details } from './styles';

export default function Meetup({ match }) {
  const [meetup, setMeetup] = useState({});
  const { id } = match.params;

  async function handleEdit() {
    history.push(`/meetups/${id}/edit`);
  }
  async function handleDelete() {
    try {
      await api.delete(`meetup/${id}`);
      toast.success('Meetup cancelado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      const responseError = error.response.data;
      toast.error(
        responseError && responseError.error
          ? `Erro ao cancelar o Meetup: ${responseError.error}`
          : 'Erro ao cancelar o Meetup, tente novamente!'
      );
    }
  }
  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetup/${id}`);
      setMeetup({
        ...response.data,
        dateFormatted: parseISO(response.data.date),
      });
      console.tron.log(response);
    }

    loadMeetup();
  }, [id]);
  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <nav>
          <button type="button" onClick={handleEdit} className="edit">
            <MdModeEdit size={22} color="#ffff" />
            <span>Editar</span>
          </button>
          <button type="button" onClick={handleDelete} className="cancel">
            <MdDeleteForever size={22} color="#ffff" />
            <span>Cancelar</span>
          </button>
        </nav>
      </header>
      <Details>
        <img src={detail} alt="imagem" />

        <p>{meetup.description}</p>

        <footer>
          <MdEvent size={20} />
          {meetup.date}
          <MdLocationOn size={20} />
          {meetup.location}
        </footer>
      </Details>
    </Container>
  );
}
