import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  lastName: string;
  isDisabled: boolean;
  textColor:string;
  bgColor:string;

  constructor() { 
    this.name = '';
    this.lastName = '';
    this.isDisabled = false;
    this.textColor = 'red';
    this.bgColor = 'blue';
  }

  ngOnInit(): void {
  }
  toggleSubmitBtn(): void {
    // console.log(event);
    console.log(`Changing to...${!this.isDisabled}`);
    this.isDisabled = !this.isDisabled;
  }

  changeColor(): void {
    this.textColor = this.textColor === 'red' ? 'blue' : 'red';
    this.bgColor = this.bgColor === 'red' ? 'blue' : 'red';
}

  displayImportantMsg(): boolean {
    return true;
  }
  updateName(event: Event): void {
    console.log("Updating element");
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }
  printWelcome(): void {
    alert(`Welcome ${this.name} ${this.lastName}`);
  }
}
