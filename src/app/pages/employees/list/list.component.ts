import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  fakeData = [
    {
      name: 'Manuel',
      lastName: 'Pérez',
      email: 'me@gmail.com',
      startDate: '01/02/2021'
    },
    {
      name: 'Jose',
      lastName: 'Jimenez',
      email: 'me@gmail.com',
      startDate: '01/02/2021'
    },
    {
      name: 'Maria',
      lastName: 'Pérez',
      email: 'me@gmail.com',
      startDate: '01/02/2021'
    },
    {
      name: 'Bezael',
      lastName: 'Code',
      email: 'me@gmail.com',
      startDate: '01/02/2021'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item: any): void {
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToDelete(item: any): void {
    alert('Deleted');
  }



}
