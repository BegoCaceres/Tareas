import { Component, OnInit } from '@angular/core';
//importamos el modelo para poder usarlo
import {Tarea} from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  
  //creamos una lista de tareas de tipo Models Tarea
  listTareas:Tarea[] = [];
  nombreTarea ="";

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(){
    //Creamos un objeto tarea
    const tarea:Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }

    //Agregar el objeto tarea al array
    this.listTareas.push(tarea);
    
    //Reset el input
    this.nombreTarea = "";
  }

}
