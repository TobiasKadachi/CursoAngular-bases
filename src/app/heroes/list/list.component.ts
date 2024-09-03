import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames : string[] = ["Spider-man", "Venom", "Batman", "Red Hood", "Gambit", "Deadpool"];
  public deletedHero?: string;

  removeLastHero() : void {
    this.deletedHero = this.heroNames.pop();
    console.log("deleted hero: ", this.deletedHero)
  }
}


