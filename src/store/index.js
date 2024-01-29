import { createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newStade = { ...state };
      newStade.botaoClicado = !newStade.botaoClicado;
      return newStade;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
