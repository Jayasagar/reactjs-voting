
const handler = 'onClick';

export const obj = {
    handler,
    toString() {
        return 'test' + this.handler;
    },
    ['prop'+(()=>42)()] : [(()=>56)()]
};