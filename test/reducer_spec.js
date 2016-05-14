import {expect} from 'chai';
import {List, Map} from 'immutable';
import reducer from '../reducer';

describe('reducer', () => {
   it('perform action based on state', () => {
       const initialState = Map();
       const action = {type: 'SET_ENTRIES', entries:['Godavari']};
       const nextState = reducer(initialState, action);
       expect(nextState).to.equal(Map({
           entries:List.of('Godavari')
       }));
   });
    it('initialize to valid state', () => {
       const action = Map({
           type: 'SET_ENTRIES',
           entries: ['Godavari', 'Sarkar']
       }); 
        const nextState = reducer(undefined, action);
        expect(nextState).to.equal(Map({
        }))
    });
    it('play sequence of actions',() => {
        const actions = [
            {type:'SET_ENTRIES', entries:['Sarkar', 'Babhubali']},
            {type: 'NEXT'},
            {type: 'VOTE', entry:'Sarkar'},
            {type: 'VOTE', entry:'Babhubali'},
            {type: 'VOTE', entry: 'Sarkar'},
            {type: 'NEXT'}
        ];
        
        const winner = actions.reduce(reducer, Map());
        
        expect(winner).to.equal(Map({
            'winner':'Sarkar'
        }));
    })
});