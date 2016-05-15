import {Map} from 'immutable';

export function destructure() {
    
    const [a,b] = [1,2];
    
    console.log(a + " " + b);
    const [c] = [1,2,3];
    console.info(c);
    
    const user = Map({
       name: 'JJ',
        address:Map({
            street : 'Nacharm',
            road: 'SC'
        })  
    });
    
    const [name] = user;
}