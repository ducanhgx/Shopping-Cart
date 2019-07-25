import { Component, OnInit } from '@angular/core';
import { Student } from './../models/student.model';
import { StudentService } from '../services/student.service';
import { NgForm } from '@angular/forms'
import { FormGroup, FormControl ,Validators } from '@angular/forms';

@Component({
  selector: 'lab5-bai1',
  templateUrl: './bai1.component.html',
  styleUrls: ['./bai1.component.css'],
  providers:[StudentService]
})
export class Bai1Component implements OnInit {

  rfStudent: FormGroup;
  students: Student[] = []
  showFormEditAdd : Boolean = true;

  constructor(
    private studentService: StudentService
  ) {
    this.getDataStudents()
    
   }

  ngOnInit() {
  this.rfValueForm()
  }
  rfValueForm(){
    this.rfStudent = new FormGroup({
      id: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      birthday:new FormControl(new Date().toISOString().substring(0, 10)),
      mark: new FormControl(null, Validators.required),
    })
  }
  onSubmit() {
    if(this.rfStudent.value.name && this.rfStudent.value.mark && this.rfStudent.value.birthday && this.showFormEditAdd){
      const newStudent = Object.assign(this.rfStudent.value,{id:this.students.length +1})
    this.studentService.addStudent(newStudent).subscribe(res => {
      this.students = res
      this.rfValueForm()
    })
    }
    if(!this.showFormEditAdd){
      this.saveEditStudent(this.rfStudent.value.id)
    }
  }
  getDataStudents() {
    this.studentService.getAllStudents().subscribe(res => {
      this.students = res
    })
  }

  showEditStudent(student:Student){
    this.showFormEditAdd = false
    this.rfStudent = new FormGroup({
      id: new FormControl(student.id),
      name: new FormControl(student.name),
      birthday:new FormControl(new Date(student.birthday).toISOString().substring(0, 10)),
      mark: new FormControl(student.mark),
    })
  }

  saveEditStudent(studentId: Number){
    this.studentService.editStudent(studentId, this.rfStudent.value).subscribe(res =>{
      this.students = res;
      this.showFormEditAdd = true
      this.rfValueForm()
    })
  }

  backEdit(){
    this.showFormEditAdd = true;
    this.rfValueForm()
  }
  deteleStudent(studentId: Number) {
    this.studentService.deleteStudent(studentId).subscribe(res => {
      this.students = res
      this.rfValueForm()
    })
  }
  gradeStudent(student :Student){
    if(student.mark >= 0 && student.mark < 5){
      return 'Yếu/Kém'
    } else{
      if(5 <= student.mark && student.mark <= 8) return 'Trung bình/Khá'
      if( student.mark > 8) return 'Giỏi/Xuất sắc'
    }
  }
}

