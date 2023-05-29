import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Character} from "../../interfaces/character.interface";
import {v4 as uuid} from "uuid";

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10
    }
  ]

  onDeleteCharacter(index: number): void {
    this.onDeleteId.emit(index);
  }

  onDeleteCharacterById(id: string): void {
    this.onDeleteById.emit(id);
  }
}
