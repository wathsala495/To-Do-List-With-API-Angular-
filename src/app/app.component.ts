import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag/tag.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { ApiResponseModel, ITask, Task } from './model/task';
import { MasterService } from './Services/master.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgbModule,FormsModule,CommonModule,TagComponent,ButtonComponent,InputComponent,TableComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private masterService :MasterService){}

  title = 'to_do_App_with_api';
  model: any;
  buttonArray:string[]=["Filter By Tags","Show All","Show Completed"]
  buttonstyle:any[]=[
    {
    border:"border-0",
    bg:"bg-primary",
    borderRadius:"rounded" ,
    mr:"me-2"
  },
    {
    border:"border-0",
    bg:"bg-success",
    borderRadius:"rounded" ,
        mr:"me-2"
  },
    {
    border:"border-0",
    bg:"bg-warning",
    borderRadius:"rounded",
    mr:"me-2" 
  },

]
  inputObj={
    type:"text",
    placeholder:["Task Name","Enter Comma Seperated tags"],
    width:"w-100"
  }

  taskObj:Task=new Task()
  taskList:ITask[]=[]
  loadAllTask(){
    this.masterService.getAllTaskList().subscribe((res:ApiResponseModel)=>{
   this.taskList=res.data;
   console.log(this.taskList)
    })
   }

  addTask(){
    this.masterService.addNewTask(this.taskObj).subscribe((res:ApiResponseModel)=>{
      console.log("response"+res)
    if(res.result){
      debugger
      alert('Task Created Succcefull');
      this.loadAllTask()
      this.taskObj=new Task()
    }
    },error=>{
      alert('API Call Error')
       }
  )
  }
 
}
