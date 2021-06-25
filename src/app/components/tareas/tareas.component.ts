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
  
  //Eliminamos de la lista de tareas segun indice
  eliminarTarea(indice:number):void{
    //splice te borra donde le marques el indice el numero de elementos en 
    //este caso eliminaria 1
    this.listTareas.splice(indice,1)
  }

  actualizarTarea(indice:number, tarea:Tarea){
    this.listTareas[indice].estado = !tarea.estado;

  }

}
