import {expect} from 'chai';
import {List, Map} from 'immutable';
import {setEntries, next, vote} from '../core';

describe("application logic", () => {
    describe('set entries', () => {
        it('should add entries to state', () =>{
            let state = Map();
            const entries = ['Godavari','HDays'];
            const nextState = setEntries(state, entries);
            expect(nextState).to.equal(Map({entries:List.of('Godavari','HDays')}));
        });
    });
    
    describe('pair', () => {
        it(' should return next pair for voting', () => {
            const state = Map({entries:List.of('Godavari','HDays','Mirchi')});
            const nextState = next(state);
            
            expect(nextState).to.equal(Map({
                vote: Map({pair:List.of('Godavari','HDays')}),
                entries: List.of('Mirchi') 
            }));
        });
        it('put winner back to list and pick next movies', () =>{
            const state = Map({
                vote: Map({
                    pair: List.of('Godavari','HDays'),
                    tally:Map({
                        'Godavari' : 1,
                        'HDays':2
                    })
                }),
                entries: List.of('Mirchi', 'Babhubali')
            });
            
            const nextState = next(state);
            
            expect(nextState).to.equal(Map({
                vote: Map({
                    pair:List.of('Mirchi', 'Babhubali')
                }),
                entries: List.of('HDays')
            }))
        });
    });
    
    describe('vote a movie', () => {
        it('should increment the vote if not already exist', () => {
            const state = Map({
                    pair:List.of('Godavari', 'HDays')
                });
            
            const nextState = vote(state, 'Godavari');
            expect(nextState).to.equal(Map({
                    pair:List.of('Godavari','HDays'),
                    tally:Map({'Godavari':1})
                })
            );
        })
    });
});