import {setEntries, next, vote, INITIAL_STATE} from './core';
import {Map} from 'immutable';

export default function reducer(state = INITIAL_STATE, action) {
    const type = action.type;
    switch(type) {
        case 'SET_ENTRIES':
            return setEntries(state, action.entries);
        case 'NEXT':
            return next(state);
        case 'VOTE':
            return state.update('vote', (stateVote) => vote(stateVote, action.entry));
    }
    return state;
}