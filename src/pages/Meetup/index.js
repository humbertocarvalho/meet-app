import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import api from '~/services/api';
import PhotoInput from './PhotoInput';

import { Container, Botao } from './styles';

export default function Meetup({ meetup }) {
  async function handleSubmit(data) {
    const response = await api.post('/meetup', data);
    console.tron.log(response);
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <PhotoInput name="file_id" />
        <Input name="title" placeholder="Título do Meetup" />

        <Input multiline name="description" placeholder="Descrição completa" />

        <hr />

        <Input name="date" placeholder="Data do Meetup" />
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
