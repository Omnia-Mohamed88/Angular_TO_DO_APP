import { CommonModule, NgClass } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
  TaskArray = [{ taskname: '', iscompeted: false }];
  onsubmit(form: NgForm) {
    this.TaskArray.push({
      taskname: form.controls['task'].value,
      iscompeted: false,
    })
    form.reset();
  }
  ondelete(index: number) {
    this.TaskArray.splice(index, 1)

  }
  oncheck(index: number) {
    this.TaskArray[index].iscompeted = !this.TaskArray[index].iscompeted
    console.log(this.TaskArray)
  }
}
