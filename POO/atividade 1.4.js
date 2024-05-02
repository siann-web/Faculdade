class Student {
    constructor (student,discipline,note1,note2,note3,note4){
        this.student = student;
        this.discipline = discipline;
        this.note1 = note1;
        this.note2 = note2;
        this.note3 = note3;
        this.note4 = note4;
    }
}
class School {
    constructor (){
        this.student = [];
    }
    addStudent(student){
        this.student.push(student);
    }
    listStudent(student){
        return this.student;
    }
    delStudent(id){
      if (id >= 0 && id < this.student.length){
        this.student.splice(id, 1);
        }
  }
    upStudent(id, newStudent, newDiscipline,newNote1, newNote2, newNote3, newNote4 ){
       if(id >= 0 && id < this.student.length){
        this.student[id].student = newStudent;
        this.student[id].discipline = newDiscipline;
        this.student[id].note1 = newNote1;
        this.student[id].note2 = newNote2;
        this.student[id].note3 = newNote3;
        this.student[id].note4 = newNote4;
       }
    }
}
const school = new School();

school.addStudent (
  new Student('Ruan','Mátematica',4,8,9,3)
);
school.addStudent (
  new Student('Lucas','Mátematica',5,7,8,2)
);
school.addStudent (
  new Student('Jordânia','Mátematica',9,9,9,9)
);
school.addStudent (
  new Student('Pedro','Mátematica',4,3,8,2)
);
school.delStudent()
school.upStudent(3,'Pedro','Mátematica',4,9,8,2)
console.log(school.listStudent())
console.log(school.student[1])

function media(id) {
    let student = school.listStudent()[id];
    var calculo = (student.note1 + student.note2 + student.note3 + student.note4) / 4;
    if(calculo >= 7.0){
        console.log("Aprovado");
    }
    else if ((calculo < 7.0) && (calculo >= 4.0)){
        console.log("Recuperação");
    }
    else if (calculo < 4.0){
        console.log("Reprovado");
    }
}
console.log(media(0));
console.log(media(1));
console.log(media(2));
console.log(media(3));
