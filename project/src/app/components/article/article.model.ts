export class Article{
 private imagen:string;

    public getImagen(): string  {
        return this.imagen;
    }

    public setImagen(imagen: string): void {
        this.imagen = imagen;
    }

constructor(
imagen:string
){this.imagen = imagen;}




}


