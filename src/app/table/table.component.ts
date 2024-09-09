import { Component, OnInit, signal } from '@angular/core';
import { MasterService } from '../Services/master.service';
import { ApiResponseModel, ITask, Task } from '../model/task';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,DatePipe,FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  taskList:ITask[]=[]
     constructor(private masterService :MasterService){}

     ngOnInit(){
      this.loadAllTask() 
     }
     loadAllTask(){
      this.masterService.getAllTaskList().subscribe((res:ApiResponseModel)=>{
     this.taskList=res.data;
     console.log(this.taskList)
      })
     }
     isOpen:boolean=false
     oldTask:any
    //  isOpenModal=signal(false)
     taskObj:Task=new Task()
     onEdit(task:any){
      
      this.isOpen=true
  
   
      this.taskObj=task
      console.log("taskObj:"+JSON.stringify(this.taskObj))


     }
     onUpdate(){
    
      this.masterService.updateTask(this.taskObj).subscribe((res:ApiResponseModel)=>{
        if(res.result){
          console.log("res")
          alert("Task Updated Successfully")
        }
      },error=>{
   alert("API call error")
      })
     }

     onDelete(id:number){
      const isConfirm=confirm("Are you sure to delete this task")
      if(isConfirm){
        this.masterService.DeleteTask(id).subscribe((res:ApiResponseModel)=>{
          if(res.result){
            console.log("res")
            alert("Task Deleted Successfully")
          }
        },error=>{
     alert("API call error")
        })
      }
     
     }
     onClose(){
      this.isOpen=false
     }
}
