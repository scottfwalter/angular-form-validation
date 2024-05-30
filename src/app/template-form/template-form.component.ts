import { Component, ElementRef, Signal, ViewChild, viewChild } from '@angular/core'
import { JsonPipe } from '@angular/common'
import { FormsModule, NgModel, NgForm } from '@angular/forms'

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent {
  //@ViewChild('myNameField') myNameField!: NgModel
  myNameField = viewChild<NgModel>('myNameField')
  //@ViewChild('myForm') myForm!: NgForm
  myForm = viewChild<NgForm>('myForm')

  myname = 'Scott'

  invalidatenNameField() {
    console.log(this.myNameField()?.control)
    this.myNameField()?.control.setErrors({ custom: true })
    console.log(this.myForm())
  }

  logFormObject() {
    console.log(this.myForm())
  }
}
