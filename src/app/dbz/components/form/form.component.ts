import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

@Output()
export class FormComponent {

  onNewCharacter : EventEmitter<Character> = new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter() : void{
    console.log(this.character);

    this.character.name = '';
    this.character.power = 0;
  }
}
