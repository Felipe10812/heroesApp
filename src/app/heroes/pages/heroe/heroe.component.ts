import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroesComponent implements OnInit {

  heroe!: Heroe;

  constructor(private activateRouter: ActivatedRoute, private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {

    // this.activateRouter.params.subscribe( ({id}) => console.log( id ) ); 
    this.activateRouter.params.pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id))).subscribe(heroe => this.heroe = heroe);
  }

  regresar() {
    this.router.navigate(['/heroes/listado'])
  }

}
