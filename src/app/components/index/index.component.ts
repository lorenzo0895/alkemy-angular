import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  screenWidth: any;
  listTeam: any[] = [];
  showAddSuperhero:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event) {
    this.screenWidth = window.innerWidth;
  }

  switchButtons(i:number) {
    let tr = <HTMLTableRowElement>document.getElementById('tr-hidden-'+i);
    let div = <HTMLDivElement>tr.getElementsByTagName('div')[0];
    if (div.classList.contains('active')) {
      tr.style.padding = '0 8px';
      div.classList.remove('active');
    } else {
      tr.style.padding = '8px 8px';
      div.classList.add('active');
    }
  }

  switchAddSuperhero() {
    this.showAddSuperhero = !this.showAddSuperhero;
  }

  addSuperheroe(e:any) {
    this.listTeam.push(e);
  }

  removeSuperheroe(id:number) {
    this.listTeam = this.listTeam.filter(el => {
      return el.id != id;
    });
  }

  deleteImage(e:Event) {
    (e.target as HTMLImageElement).style.display = 'none';
  }

}
