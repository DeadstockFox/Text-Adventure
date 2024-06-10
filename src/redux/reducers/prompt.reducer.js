
const prompts = (state = [], action) => {
        switch (action.type) {
            case 'SET_PROMPT':
                return action.payload;
            default: 
                return state;
         ;
}
}


export default prompts;

