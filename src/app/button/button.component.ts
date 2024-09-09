import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
 @Input() textName!:string
 @Input() bR!:string
 @Input() bg!:string
@Input()  border!:string
@Input()  mr!:string

 

}

