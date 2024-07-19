export class Pedido {
    constructor(_id='', user= '',total = 0) {
        this._id = _id;
        this.user = user;
        this.total = total;
      }
        _id: string;
        user: string;
        total: number;
}
