const initialState = {
  availableLangs: {
      ru: 'РУС',
      en: 'ENG'
  },
  currentLang: 'ru'
}

const lang = (state = initialState, action) => {
  switch (action.type) {
      case 'CHANGE_LANG':
          return {
              ...state,
              currentLang: action.payload.lang
          }
        default:
  }

  return state;
}

export default lang;