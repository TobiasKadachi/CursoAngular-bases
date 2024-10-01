import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';



@Injectable({
  providedIn: 'root'})

export class dbzService {

  public characters : Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegetta',
    power: 7500
  }];

  addCharacter(character: Character): void{

    const onNewCharacter: Character = {id: uuid(), ...character}

    console.log(onNewCharacter);
    this.characters.push(onNewCharacter);
  }

  onDeleteCharacterById(id : string){
    this.characters = this.characters.filter(character => character.id !== id);

  }

}
