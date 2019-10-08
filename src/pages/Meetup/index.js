import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container, Botao } from './styles';

export default function Meetup() {
  function handleSubmit() {}
  return (
    <Container>
      <Form
        initialData={{ name: 'Humberto', email: 'hvcarvalhobrt@gmail.com' }}
        onSubmit={handleSubmit}
      >
        <Input name="title" placeholder="Título do Meetup" />

        {/* TODO Verificar por que não está expandindo */}
        <Input
          name="description"
          multiline
          rows={50}
          placeholder="Descrição completa"
        />

        <hr />

        <Input name="date" type="password" placeholder="Data do Meetup" />
        <Input
          name="location"
          type="password"
          placeholder="Localização do Meetup"
        />

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
