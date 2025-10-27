import { Component } from '@angular/core';

@Component({
    selector: 'app-tareas',
    templateUrl: './tareas.html',
    styleUrls: ['./tareas.scss']
})
export class Tareas {
    val = false;

    toggle() {
        this.val = !this.val;
    }
}
