import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-add-superhero',
  templateUrl: './add-superhero.component.html',
  styleUrls: ['./add-superhero.component.css']
})
export class AddSuperheroComponent implements OnInit {

  @Input() listTeam?: any[];
  @Output() togglePopUp = new EventEmitter();
  @Output() toggleAddSuperheroe = new EventEmitter();
  listSuperheroes: any[] = [];
  formBuilder: FormBuilder = new FormBuilder();
  form: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]]
  });
  alert:string = '';

  constructor(private superheroesService: SuperheroesService) { }

  ngOnInit(): void {
  }

  get name() {
    return this.form.get('name');
  }

  switchAddSuperhero() {
    this.togglePopUp.emit();
  }

  find() {
    if (!this.form.valid) {
      this.name?.markAsTouched();
      return;
    }
    this.superheroesService.findByName(this.name?.value).subscribe({
      next: (value: any) => {
        if (value.hasOwnProperty('error')) {
          this.listSuperheroes = [];
          this.alert = "Sorry, we didn't find any superhero with that name 😥";
          return;
        }
        this.listSuperheroes = value.results.reduce((acc:[], el:any) => {
          let isAlreadyAdded:boolean = this.listTeam?.reduce((acc2, el2) => {
            if (acc2 || el2.id === el.id) {
              return true;
            } else {
              return false;
            }
          }, false);
          if (!isAlreadyAdded) {
            return [...acc, el];
          } else {
            return acc;
          }
        }, []);
        if (this.listSuperheroes.length === 0) {
          this.alert = "Sorry, we didn't find any superhero with that name 😥";
          return;
        }
        this.alert = '';
      },
      error: (error) => {

      }
    });
  }

  deleteImage(e: Event) {
    (e.target as HTMLImageElement).style.display = 'none';
  }

  addSuerheroe(superheroe: any) {
    this.toggleAddSuperheroe.emit(superheroe);
    this.listSuperheroes = this.listSuperheroes.filter(el => {
      return el.id !== superheroe.id;
    })
  }

}
function el(el: any, arg1: (any: any) => boolean): any[] {
  throw new Error('Function not implemented.');
}

