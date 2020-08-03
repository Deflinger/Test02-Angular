import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeService, Heroe } from '../../services/heroes.services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private router: Router,
              _heroesService: HeroeService) { }

  ngOnInit(): void {
  }


  buscarHeroe(termino: string){
    // console.log(termino);
    this.router.navigate(['/buscar', termino]);

  }
  verHeroe(idx:number){
    this.router.navigate( ['/heroe', idx] );
  }
}
