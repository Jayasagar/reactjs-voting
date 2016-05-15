import makeStore from '../store';
import {dispatch} from 'redux';
import {Map, List} from 'immutable';
import {expect} from 'chai';

describe('redux store', ()=>{
   it('should get default state', () => {
       const store = makeStore();
       store.dispatch({type:'SET_ENTRIES', entries: ['Sar', 'Ba']});
       
       const currentState = store.getState();
       expect(currentState).to.equal(Map({
           entries:List.of('Sar', 'Ba')
       }));
   }); 
});