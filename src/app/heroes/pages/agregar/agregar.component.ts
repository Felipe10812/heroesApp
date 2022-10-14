import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 54%;
      border-radius: 5px; 
    }`
  ]
})
export class AgregarComponent implements OnInit {

  publicaciones = [
    {
      id: 'Dc Comics',
      desc: 'Dc - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    },
    {
      id: 'Naturaleza',
      desc: 'Naturaleza'
    },
  ]

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }


  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute,
    private router: Router, private snackBar: MatSnackBar, private dialog: Dialog) { }

  ngOnInit(): void {

    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params.pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id))).subscribe(heroe => this.heroe = heroe);
  }

  guardar() {

    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // Actalizar
      this.heroesService.actualizarHeroe(this.heroe).subscribe(heroe => this.mostrarSnakbar('Registro actualizado'))
    }
    else {
      // Crear
      this.heroesService.agregarHeroe(this.heroe).subscribe(heroe => { this.router.navigate(['/heroes/editar', heroe.id]); 
      this.mostrarSnakbar('Registro creado') });
    }

  }

  borrarHeroe() {
    this.dialog.open( ConfirmarComponent, { width: '500'} );
    //this.heroesService.borrarHeroe(this.heroe.id!).subscribe(resp => { this.router.navigate(['/heroes']) });
  }

  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'Cerrar', { duration: 2500 })
  }

}
