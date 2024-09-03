import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'peter parker'
  public age: number = 31;

  get capitalizedName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() : void {

    if(this.name == 'peter parker'){
      this.name = 'miles morales'
    }else{
      this.name = 'peter parker'
    }
  }

  changeAge() : void {
    if(this.age == 31){
      this.age = 19;
    }else{
      this.age = 31;
    }
  }
}
