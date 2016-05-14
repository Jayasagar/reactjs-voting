import {List, Map} from 'immutable';

export const INITIAL_STATE = Map();

export function setEntries(state, entries) {
    return state.set('entries', List(entries));
}

export function next(state) {
    const entries = state.get('entries').concat(getWinners(state));
    
    if (entries.size === 1) {
        return state.remove('vote')
                    .remove('entries')
                    .set('winner', entries.first());
    }
    return state.merge({
        vote:Map({pair:entries.take(2)}),
        entries: entries.skip(2)
    });
}

function getWinners(state) {
    const vote = state.get('vote');
    if(!vote) return [];
    
    const [one, two] = vote.get('pair');
    const movieOneVotes = vote.getIn(['tally', one], 0);
    const movieTwoVotes = vote.getIn(['tally', two], 0);
    
    if(movieOneVotes > movieTwoVotes) return [one];
    else if (movieOneVotes < movieTwoVotes) return [two];
    else return [one, two];
}

export function vote(voteState, entry) {
    return voteState.updateIn(
        ['tally', entry], 
        0, 
        tally => tally + 1
    );
}