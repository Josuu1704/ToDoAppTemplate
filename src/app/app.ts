import { Component, signal } from '@angular/core';
import {Login} from './login/login';
import {Register} from './register/register';
import {Practicando} from './practicando/practicando';
import {Tareas} from "./tareas/tareas";
import {AprendiendoBootstrap} from "./aprendiendo-bootstrap/aprendiendo-bootstrap";
import {LoginB} from "./login-b/login-b";
import {RepasoCSS} from "./repaso-css/repaso-css";
import {RepasandoBoots} from "./repasando-boots/repasando-boots";

@Component({
  selector: 'app-root',
    imports: [ RepasandoBoots],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {



  protected readonly title = signal('ToDoApp');
}
