import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import api from '~/services/api';
import history from '~/services/history';
import BannerInput from './BannerInput';

import { Container, Botao } from './styles';
import DatePicker from '~/components/DatePicker';

const schema = Yup.object().shape({
  banner_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Banner é requerido'),
  title: Yup.string().required('Título do Meetup é obrigatório.'),
  description: Yup.string().required('A descrição do Meetup é obrigatória.'),
  date: Yup.string().required('A data do Meetup é obrigatória.'),
  location: Yup.string().required('A localização do Meetup é obrigatória.'),
});

export default function Meetup({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    async function loadMeetup() {
      const response = await api.get(`meetup/${id}`);
      setMeetup(response.data);
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      let response;
      if (meetup.id) {
        response = await api.put('/meetup', data);
      } else {
        console.tron.log(data);
        response = await api.post('/meetup', data);
      }

      toast.success('Meetup criado com sucesso');
      history.push(`/meetups/${response.data.id}`);
    } catch (error) {
      const responseError = error.response.data;
      toast.error(
        responseError && responseError.error
          ? `Erro ao criar o Meetup: ${responseError.error}`
          : 'Erro ao criar o Meetup, tente novamente!'
      );
    }
  }

  return (
    <Container>
      <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Título do Meetup" />

        <Input multiline name="description" placeholder="Descrição completa" />

        <hr />

        <DatePicker name="date" placeholder="Data do Meetup" />
        <Input name="location" placeholder="Localização do Meetup" />

        <Botao>
          <button type="submit">
            <MdAddCircleOutline color="#fff" size={22} />
            <p>Salvar Meetup</p>
          </button>
        </Botao>
      </Form>
    </Container>
  );
}

Meetup.propTypes = {
  match: PropTypes.element.isRequired,
};
