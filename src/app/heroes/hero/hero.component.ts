import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  public showChangeName: boolean = true;
  public showChangeAge: boolean = true;

  get capitalizedName (): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
    this.showChangeName = false;
  }

  changeAge(): void {
    this.age = 25;
    this.showChangeAge= false;
  }

  resetValues(): void {
    this.name = 'ironman';
    this.age = 45;
    this.showChangeAge = true;
    this.showChangeName = true;
  }
}
