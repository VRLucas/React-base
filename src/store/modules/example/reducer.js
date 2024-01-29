const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
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
}
