import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        locale="pt-BR"
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText={placeholder}
        autoComplete="off"
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.element.isRequired,
  placeholder: PropTypes.element.isRequired,
};
