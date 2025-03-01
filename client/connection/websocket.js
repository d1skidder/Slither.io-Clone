import incoming from "./receive";

export default class WS {
    constructor(wsURL) {
        this.ws = new WebSocket(wsURL);

        this.ws.onmessage = (ev) => {
            const msg = JSON.parse(ev.data);

            incoming(msg[0], msg[1]);

            console.log("incoming", msg)
        }
    }

    /*

    emit types:


    look - change snake dir
    spd - acceleration
    sn - spawn snake
    */
    emit(type, ...args) {
        const message = [type, ...args];
        this.ws.send(JSON.stringify(message));
    }
}