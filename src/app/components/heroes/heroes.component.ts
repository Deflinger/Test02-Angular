import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../services/heroes.services';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];
  constructor( private _heroesService: HeroeService ) { 
    console.log('constructor');
  }

  ngOnInit(){
    
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

}
