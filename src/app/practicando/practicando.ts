import {Component} from '@angular/core';

@Component({
  selector: 'app-practicando',
  imports: [],
  templateUrl: './practicando.html',
  styleUrl: './practicando.scss'
})
export class Practicando {


  nombre: string = "Camilo";
  x: number = 0;
  val: boolean = true;
  alumnos: string[] = ["Camilo", "Pepe", "Juan"];
  alumnos_dict: {} = {}
  logged: boolean | null = null;
  y: any = null // Cualquier cosa, cualquier dato puede guardar.

  aumentarClics(): void {
    this.x += 1;
  }

}
