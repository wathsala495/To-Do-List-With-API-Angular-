import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../model/task';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type!:string
  @Input() placeholder!:string
  @Input() style!:string
  @Input() value!:string




}
