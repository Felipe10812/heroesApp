import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
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
    alt_img: '',
  }

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id))).subscribe(heroe => this.heroe = heroe);
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    this.heroesService.agregarHeroe(this.heroe).subscribe(resp => { console.log('Respuesta', resp) })
  }

}
