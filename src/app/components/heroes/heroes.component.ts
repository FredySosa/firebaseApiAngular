import {Component, OnInit} from '@angular/core';
import {HeroeService} from '../../services/heroe.service';
import {Heroe} from '../../modelos/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes: any[] = [];
  public loading = true;

  constructor(private _heroe: HeroeService) {
  }

  ngOnInit() {
    setTimeout(() => {
        this.loading = false;
        this.getHeroes();
      }, 3000
    );

  }


  getHeroes() {
    this._heroe.getHeroes().subscribe(
      data => {

        this.heroes = data;

      }, err => console.error(err)
    );
  }

  eliminarHeroe(key: string) {
    this._heroe.eliminarHeroe(key).subscribe(
      data => {
        if (!data) {
          delete this.heroes[key];
        }

      }, err => console.error(err, 'Hola')
    );
  }

}
