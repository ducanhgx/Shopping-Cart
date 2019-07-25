import { Injectable } from '@angular/core';
import { Student } from './../models/student.model';
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students: Student[] = [
    new Student(
      {
        id: 1,
        name: 'Nguyễn văn tèo',
        birthday: new Date(2019, 6, 30),
        mark: 8
      }
    ),
    new Student(
      {
        id: 2,
        name: 'Phan thị nở',
        birthday: new Date(2019, 2, 29),
        mark: 8
      }
    )
    ,
  ]
  constructor() { }

  getAllStudents() {
    return of(this.students);
  }
  addStudent(newStudent: Student) {
    this.students.push(newStudent)
    return of(this.students)
  }
  editStudent(studentId: Number, newstudent: Student) {
    const students = [...this.students]
    let index = students.indexOf(students.find(stu => stu.id === studentId))
    this.students[index] = newstudent
    return of(this.students)
  }
  deleteStudent(studentId: Number) {
    this.students = this.students.filter(student => student.id !== studentId)
    return of(this.students)
  }
}
