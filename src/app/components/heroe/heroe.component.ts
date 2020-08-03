import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroeService } from '../services/heroes.services';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent  {

  heroe: any = {};

  constructor(private activateRoute: ActivatedRoute, private heroeservice: HeroeService){

    this.activateRoute.params.subscribe(params => {
      this.heroe = this.heroeservice.getHeroe(params ['id']);
      console.log(params.id);
    });

  }

}
