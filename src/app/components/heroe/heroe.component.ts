import {Component, OnInit} from '@angular/core';

import {Heroe} from '../../modelos/heroe.model';
import {HeroeService} from '../../services/heroe.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    'nombre': '',
    'casa': 'Marvel',
    'bio': ''
  };

  constructor(private _heroe: HeroeService, private router: Router, private activated: ActivatedRoute) {
  }

  ngOnInit() {

    this.activated.params
      .map(param => param['id'])
      .subscribe(params => {
        if (params !== 'nuevo') {
          this.getHeroe(params);
        } else {
          this.heroe = {nombre: '', casa: 'Marvel', bio: ''};
        }
      });

  }

  guardarOActualizar() {

    this.activated.params
      .map(param => param['id'])
      .subscribe(params => {
        if (params === 'nuevo') {
          if (this.heroe.nombre !== '') {
            this.guardarHeroe();
          }
        } else {
          this.actualizarHeroe(params);
        }

      });

  }

  actualizarHeroe(key: string) {
    this._heroe.actualizaHeroe(this.heroe, key).subscribe(
      data => {
        // console.log(data);
      }, err => console.error(err)
    );
  }

  guardarHeroe() {
    this._heroe.creaHeroe(this.heroe).subscribe(
      data => {
        this.router.navigate(['/heroe', data]);
      }, error => console.log(error)
    );
  }


  getHeroe(key: string) {
    this._heroe.getHeroe(key).subscribe(
      data => {
        this.heroe = data;
      }, err => console.error(err)
    );
  }

  nuevoHeroe(forma: NgForm) {
    this.router.navigate(['/heroes']);
    this.router.navigate(['/heroe', 'nuevo']);

    forma.reset({
      casa: 'Marvel'
    });

  }

}
