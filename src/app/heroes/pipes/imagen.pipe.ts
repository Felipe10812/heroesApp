import { Pipe, PipeTransform } from "@angular/core";
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
    name: 'imagen'
    //pure: true
})
export class imagenPipe implements PipeTransform {
    
    transform(heroe: Heroe): string {
        console.log('se proceso');

        if (!heroe.id && !heroe.alt_img) {
            return 'assets/No-imagen.jpg';
        }
        else if (heroe.alt_img) {
            return heroe.alt_img;
        }
        else {
            return `assets/heroes/${heroe.id}.jpg`;
        }

    }

}