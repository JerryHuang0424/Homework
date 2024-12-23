
//Clean all data in Scores
db.Students.updateMany(
    {}, // find all documents
    { $set: { "Grades.$[].Scores": [] } } // clean all document
  );
  

  




  
//suppose students have just finished their assignment and the instructor of this course is gathering their scores
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 86, "Type": "Quiz" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 95, "Type": "Quiz" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Quiz" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 95, "Type": "Quiz" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d5'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d0")},
    { 
        $push: { "Grades.$.Scores": { "Score": 55, "Type": "Quiz" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d5'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Quiz" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d6'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d0")},
    { 
        $push: { "Grades.$.Scores": { "Score": 60, "Type": "Quiz" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d6'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d1")},
    { 
        $push: { "Grades.$.Scores": { "Score": 77, "Type": "Quiz" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d7'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d2")},
    { 
        $push: { "Grades.$.Scores": { "Score": 90, "Type": "Quiz" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d7'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d1")},
    { 
        $push: { "Grades.$.Scores": { "Score": 61, "Type": "Quiz" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d8'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d2")},
    { 
        $push: { "Grades.$.Scores": { "Score": 90, "Type": "Quiz" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d8'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 89, "Type": "Quiz" } } // Add new score
      }
    );







// For example, students finshed the course and have the exam of the course, instrcutors is gathering their exam scores:
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Exam" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 87, "Type": "Exam" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 70, "Type": "Exam" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 98, "Type": "Exam" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d5'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d0")},
    { 
        $push: { "Grades.$.Scores": { "Score": 65, "Type": "Exam" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d5'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Exam" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d6'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d0")},
    { 
        $push: { "Grades.$.Scores": { "Score": 72, "Type": "Exam" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d6'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d1")},
    { 
        $push: { "Grades.$.Scores": { "Score": 83, "Type": "Exam" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d7'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d2")},
    { 
        $push: { "Grades.$.Scores": { "Score": 59, "Type": "Exam" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d7'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d1")},
    { 
        $push: { "Grades.$.Scores": { "Score": 90, "Type": "Exam" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d8'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d2")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Exam" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d8'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 98, "Type": "Exam" } } // Add new score
      }
    );









//Afer the exam, students are handing on their assignment 
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Assignment" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 87, "Type": "Assignment" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 70, "Type": "Assignment" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 98, "Type": "Assignment" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d5'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d0")},
    { 
        $push: { "Grades.$.Scores": { "Score": 65, "Type": "Assignment" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d5'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Assignment" } } // Add new score
      }
    );

db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d6'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d0")},
    { 
        $push: { "Grades.$.Scores": { "Score": 72, "Type": "Assignment" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d6'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d1")},
    { 
        $push: { "Grades.$.Scores": { "Score": 83, "Type": "Assignment" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d7'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d2")},
    { 
        $push: { "Grades.$.Scores": { "Score": 59, "Type": "Assignment" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d7'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d1")},
    { 
        $push: { "Grades.$.Scores": { "Score": 90, "Type": "Assignment" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d8'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5d2")},
    { 
        $push: { "Grades.$.Scores": { "Score": 80, "Type": "Assignment" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d8'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 98, "Type": "Assignment" } } // Add new score
      }
    );






//Some courses are strict, instructors may assign some homework after one day`s course.
//Assume Advanced Mathematics , Linear Algebra and Operating System have homework
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d8'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 85, "Type": "Homework" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cd")},
    { 
        $push: { "Grades.$.Scores": { "Score": 86, "Type": "Homework" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d3'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 55, "Type": "Homework" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5ce")},
    { 
        $push: { "Grades.$.Scores": { "Score": 89, "Type": "Homework" } } // Add new score
      }
    ),
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d4'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 99, "Type": "Homework" } } // Add new score
      }
    );
db.Students.updateOne(
    {_id: ObjectId('676817fdcf2448bbf451c5d5'),"Grades.ClassID": ObjectId("6767dd51cf2448bbf451c5cf")},
    { 
        $push: { "Grades.$.Scores": { "Score": 60, "Type": "Homework" } } // Add new score
      }
    );