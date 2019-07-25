export class Student {
  id?: Number;
  name: String;
  birthday: Date;
  mark: Number;
  constructor(
   student
  ) {
    this.id = student.id;
    this.name = student.name;
    this.birthday = student.birthday;
    this.mark = student.mark
  }
}