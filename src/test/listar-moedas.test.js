import React from 'react';
import ReactDOM from 'react-dom';
import ListarMoedas from '../listar-moedas';

describe('Teste do comonente de listagem de moedas', () => {
    test('Deve renderizar o componente sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ListarMoedas />, div);
        ReactDOM.unmountComponentAtNode(div);

    });
});
