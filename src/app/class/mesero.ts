export class Mesero {
    constructor(_id='', user= '',  dishes= '',total = 0) {
        this._id = _id;
        this.user = user;
        this.total = total;
      }
        _id: string;
        user: string;
        total: number;
}
