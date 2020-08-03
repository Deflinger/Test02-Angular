import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../services/heroes.services';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[]=[];
  termino:String;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroeService,
              private router: Router) { }

  ngOnInit(): any {

    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      console.log(params['termino']);
      this.heroes= this.heroesService.buscarHeroes(params['termino'] );
      console.log(this.heroes);
    })


  }

}
