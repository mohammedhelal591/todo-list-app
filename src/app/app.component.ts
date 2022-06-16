import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List';
  list:any[] = [];



  addTask(item:string){
    this.list.push({id:this.list.length , name:item});
    let tasksContainer = JSON.stringify(this.list);
    localStorage.setItem('Tasks',tasksContainer);
  };

  removeTask(id:number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
