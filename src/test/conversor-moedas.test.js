import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ConversorMoedas from '../conversor-moedas';

describe('Conversor de moedas', () => {

  test('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
