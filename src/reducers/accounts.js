const accountsReducer = (state, action) => {
    switch(action.type){
        case 'POPULATE_ACCOUNTS':
            return action.accounts;
        default:
            return state;
    }
};

export default accountsReducer;
