
const prompts = (state = {}, action) => {
        switch (action.type) {
            case 'SET_PROMPT':
                return action.payload;
            default: 
                return state;
         ;
}
}


export default prompts;

/*
const userReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_USER':
        return action.payload;
      case 'UNSET_USER':
        return {};
      default:
        return state;
    }
  };
  */