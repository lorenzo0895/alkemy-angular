import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  superheroe?:any;

  constructor(
    private superheroesService:SuperheroesService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value:any) => {
      this.superheroesService.findById(value.id).subscribe(superheroe => {
        this.superheroe = superheroe;
      });
    });
  }

  deleteImage(e: Event) {
    (e.target as HTMLImageElement).style.display = 'none';
  }

}
