import React from 'react';
import ReactDOM from 'react-dom';
import ConversorMoedas from '../conversor-moedas';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios';

describe('Conversor de moedas', () => {
  test('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  /* BUG 
  *   Esse teste não está funcionando,
  *   Verificar qual é o problema
  *   Erro: Incapaz de encontrar um elemento por: [data-testid="modal"]
  *
  test('Deve simular uma conversão de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    axiosMock.get.mockResolvedValueOnce({
      data: {success: true, rates: { BRL: 4.564292, USD: 1.101049 }}
    });
    fireEvent.click(getByTestId('btn-converter'));
    const modal = await findByTestId('modal');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('1 BRL = 0.24 USD');
  });
  */
});
