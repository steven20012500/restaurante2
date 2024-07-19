export class Mesero {
    constructor(_id='', nombre= '',  imagen= '',scoreSelected = false, calificacion = 0) {
        this._id = _id;
        this.nombre = nombre;
        this.imagen = imagen;
        this.scoreSelected = scoreSelected;
        this.calificacion = calificacion;
      }
        _id: string;
      nombre: string;
      imagen: string;
      scoreSelected: boolean;
      calificacion: number;
}
