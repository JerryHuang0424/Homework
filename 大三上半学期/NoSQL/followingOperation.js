
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


//part 1
db.Students.find()
db.Courses.find()
db.Enrollments.find()

//part 2
db.students.find( ).count

//part 3
db.Students.find({FirstName:"Frankie"})

//part 4
db.Students.find({FirstName:"Frankie"})
db.Students.find({LastName:"Guo"})
db.Students.find({Email:"FJ001@setu.ie"})
    

//part 5
db.Students.find({FirstName:"Frankie"},{{Email:"FJ001@setu.ie"})


//part 6
db.Students.find({FirstName:"Frankie"},{FirstName:1,LastName:1})

db.Students.find({FirstName:"Frankie"},{FirstName:1,LastName:1,_id:0})
    
//part 7

  //$eq
  db.Courses.find({Credits:{$eq:3}},{_id:0, CourseName:1, Instructor:1})
  //$gt
  db.Courses.find({Credits:{$gt:3}},{_id:0, CourseName:1, Instructor:1})
  //gte
  db.Courses.find({Credits:{$gte:3}},{_id:0, CourseName:1, Instructor:1})
  //$in
  db.Courses.find({"Credits":{$in:[3,4]}},{"CourseName":1,"credit":1})
  //$or
  db.Courses.find({$or:[{Instructor:"Minerva McGonagall"},{Credits:3}]},{_id:0,Instructor:1,"CourseName":1,"Credits":1})
  //$lt
  db.Courses.find({Credits:{$lt:3}},{_id:0, CourseName:1,Instructor:1,Credits:1})
  //$lte
  db.Courses.find({Credits:{$lte:3}},{_id:0, CourseName:1,Instructor:1,Credits:1})
  //$ne
  db.Courses.find({Credits:{$ne:3}},{_id:0, CourseName:1,Instructor:1,Credits:1})
  //$nin
  db.Courses.find({Credits:{$nin:[3,6]}},{_id:0, CourseName:1,Instructor:1,Credits:1})

  db.Courses.find({"Credits":{gte:3}},{"Instructor":0})
  db.Courses.find({"Credits":{$gt:1,$lt:5}},{"CourseName":1,"credit":1})
  db.Courses.find({"Credits":{$gt:1,$lt:5}},{"CourseName":1,"credit":1}).limit(2)
  db.Courses.find({"Credits":{$gt:1,$lt:5}}).skip(1)

//part 8
db.Students.find( ).sort({FirstName:-1})

//part 9
db.Students.find(
  {
  "Grades.Scores":{
  $elemMatch:{Type:"Homework"}
  }
  },
  {
  _id:0,
  FirstName:1,
  LastName:1,
  "Grades.Scores.Score":1,
  "Grades.Scores.Type":1
  }
 )

//part 10

db.Students.aggregate([{$unwind:"Grades"}])

db.Students.aggregate([
  { $unwind: "$Grades" }, 
  { $unwind: "$Grades.Scores" }, 
  { 
   $match: { 
   "Grades.Scores.Score": { $gt: 90 }, 
   "Grades.Scores.Type": "homework" 
   } 
  },
  { 
   $project: { 
   FirstName: 1, 
   LastName: 1, 
   "Grades.Scores": 1 
   } 
  }
  ])

db.Students.aggregate([
    { $unwind: "$Grades" }, 
    { $unwind: "$Grades.Scores" }, 
    { 
     $match: { 
     "Grades.Scores.Score": { $gt: 50, $lt: 70 },
     "Grades.Scores.Type": "Homework"
    } 
  },
  { 
   $project: { 
   _id: 0,
   FirstName: 1, 
   LastName: 1, 
   "Grades.Scores": 1 
   } 
  }
  ]);

db.Enrollments.aggregate([
  $match:{"CourseId":ObjectId('6767dd51cf2448bbf451c5d2')}
],
    {
    $project:{
    "FirstName":1,
    "LastName":1,
    "CourseName":1
    }
    },
    {
    $sort:{"FirstName":-1}
    })

    db.Enrollments.aggregate(
      {
      $match:{"CourseId":ObjectId('6767dd51cf2448bbf451c5d1')}
      },
      {
      $count:'TotalStudents'
    }
)

db.Students.aggregate([
      { $unwind: "$Grades" }, 
      { $unwind: "$Grades.Scores" }, 
      { 
       $match: { "FirstName":"Frankie"} 
      },
      { 
       $project: { 
       "Grades.Scores.Type":1,
       "Grades.Scores.ClassID":1,
       averageScore: { $avg: "Grades.Scores.Score" }, // Calculate
      average score
       highestScore: { $max: "Grades.Scores.Score" }, // Find the maximum
      score
       lowestScore: { $min: "Grades.Scores.Score" }
       } 
      }
      ])


    db.Students.aggregate(
      [
        { $unwind: "$Grades" },  
        { $unwind: "$Grades.Scores" },  
        { 
          $match: { 
            "Grades.Scores.Type": "Exam", 
            "Grades.Scores.Score": { $gte: 80 } 
             } 
        },
        { 
          $group: { 
            _id: { 
                  first_name: "$FirstName", 
                  second_name: "$LastName" 
                  }
                  Scores_of_exam: { 
                       $push:{ 
                            courseId: "$Grades.ClassID",
                            type: "$Grades.Scores.Type", 
                            score: "$Grades.Scores.Score" 
                       }
                  }
             } 
        }
        ]
   )

 db.Enrollments.aggregate([
               {
                    $match: { "CourseId": ObjectId('6767dd51cf2448bbf451c5d2') }
               },
               // connect to Students collection to get the information
               {
                    $lookup: {
                         from: "Students",
                         localField: "StudentId",
                         foreignField: "_id",
                         as: "StudentInfo"
                    }
               },
               {
                    $unwind: "$StudentInfo"
               },
               // connect to Course collection to get the information
               {
                    $lookup: {
                         from: "Courses",
                         localField: "CourseId",
                         foreignField: "_id",
                         as: "CourseInfo"
                    }
               },
               {
                    $unwind: "$CourseInfo"
               },
               {
                    $project: {
                         _id: 0,
                         FirstName: "$StudentInfo.FirstName",
                         LastName: "$StudentInfo.LastName",
                         CourseName: "$CourseInfo.CourseName"
                    }
               },
               {
                    $sort: { "LastName": 1 }
               }
          ]);


db.Students.aggregate([
          // unwind Grades and Scores array
          { $unwind: "$Grades" },
          { $unwind: "$Grades.Scores" },
          // Mark the "Homework" and "Assignment"
          {
               $addFields: {
                    isHomework: { $eq: ["$Grades.Scores.Type", "Homework"] },
                    isAssignment: { $eq: ["$Grades.Scores.Type", "Assignment"] }
               }
          },
          // Grouping to detect the presence of Homework
          //calculate the sum of scores for Assignment and Assignment
          {
               $group: {
                    _id: { firstName: "$FirstName", lastName: "$LastName", classId: "$Grades.ClassID" },
                    totalQuizScore: {
                         $sum: {
                              $cond: [{ $eq: ["$Grades.Scores.Type", "Quiz"] }, "$Grades.Scores.Score", 0]
                         }
                    },
                    totalExamScore: {
                         $sum: {
                              $cond: [{ $eq: ["$Grades.Scores.Type", "Exam"] }, "$Grades.Scores.Score", 0]
                         }
                    },
                    totalAssignmentScore: {
                         $sum: {
                              $cond: ["$isAssignment", "$Grades.Scores.Score", 0]
                         }
                    },
                    totalHomeworkScore: {
                         $sum: {
                              $cond: ["$isHomework", "$Grades.Scores.Score", 0]
                         }
                    },
                    hasHomework: {
                         $max: {
                              $cond: ["$isHomework", 1, 0]
                         }
                    }
               }
          },
          // dymatical calculate the weighted grades
          {
               $addFields: {
                    weightedAssignmentAndHomework: {
                         $cond: [
                              { $eq: ["$hasHomework", 1] },
                              { $add: [
                              { $multiply: ["$totalAssignmentScore", 0.15] },
                              { $multiply: ["$totalHomeworkScore", 0.15] }
                              ] },
                              { $multiply: ["$totalAssignmentScore", 0.3] }
                         ]
                    },
                    weightedQuiz: { $multiply: ["$totalQuizScore", 0.2] }, // Quiz weight 20%
                    weightedExam: { $multiply: ["$totalExamScore", 0.5] } // Exam weight 50%
               }
          },
          {
               $project: {
                    _id: 0,
                    firstName: "$_id.firstName",
                    lastName: "$_id.lastName",
                    courseId: "$_id.classId",
                    totalScore: {
                         $add: ["$weightedAssignmentAndHomework", "$weightedQuiz", "$weightedExam"]
                         }
                    }
               }
]);



db.Students.aggregate([
  // unwind Grades and Scores array
  { $unwind: "$Grades" },
  { $unwind: "$Grades.Scores" },
  // Mark the "Homework" and "Assignment"
  {
       $addFields: {
            isHomework: { $eq: ["$Grades.Scores.Type", "Homework"] },
            isAssignment: { $eq: ["$Grades.Scores.Type", "Assignment"] }
       }
  },
  // Grouping to detect the presence of Homework
  //calculate the sum of scores for Assignment and Assignment
  {
       $group: {
            _id: { firstName: "$FirstName", lastName: "$LastName", classId: "$Grades.ClassID" },
            totalQuizScore: {
                 $sum: {
                      $cond: [{ $eq: ["$Grades.Scores.Type", "Quiz"] }, "$Grades.Scores.Score", 0]
                 }
            },
            totalExamScore: {
                 $sum: {
                      $cond: [{ $eq: ["$Grades.Scores.Type", "Exam"] }, "$Grades.Scores.Score", 0]
                 }
            },
            totalAssignmentScore: {
                 $sum: {
                      $cond: ["$isAssignment", "$Grades.Scores.Score", 0]
                 }
            },
            totalHomeworkScore: {
                 $sum: {
                      $cond: ["$isHomework", "$Grades.Scores.Score", 0]
                 }
            },
            hasHomework: {
                 $max: {
                      $cond: ["$isHomework", 1, 0]
                 }
            }
       }
  },
  // dymatical calculate the weighted grades
  {
       $addFields: {
            weightedAssignmentAndHomework: {
                 $cond: [
                      { $eq: ["$hasHomework", 1] },
                      { $add: [
                      { $multiply: ["$totalAssignmentScore", 0.15] },
                      { $multiply: ["$totalHomeworkScore", 0.15] }
                      ] },
                      { $multiply: ["$totalAssignmentScore", 0.3] }
                 ]
            },
            weightedQuiz: { $multiply: ["$totalQuizScore", 0.2] }, // Quiz weight 20%
            weightedExam: { $multiply: ["$totalExamScore", 0.5] } // Exam weight 50%
       }
  },
  {
       $project: {
            _id: 0,
            firstName: "$_id.firstName",
            lastName: "$_id.lastName",
            courseId: "$_id.classId",
            totalScore: {
                 $add: ["$weightedAssignmentAndHomework", "$weightedQuiz", "$weightedExam"]
                 }
            }
       }
]);


db.Students.aggregate([
  { $unwind: "$Grades" },
  { $unwind: "$Grades.Scores" },
  {
  $addFields: {
       isHomework: { $eq: ["$Grades.Scores.Type", "Homework"] },
       isAssignment: { $eq: ["$Grades.Scores.Type", "Assignment"] }
  }
  },
  {
  $group: {
       _id: { studentId: "$_id", classId: "$Grades.ClassID" },
       firstName: { $first: "$FirstName" },
       lastName: { $first: "$LastName" },
       email: { $first: "$Email" },
       phoneNumber: { $first: "$PhoneNumber" },
       totalQuizScore: {
       $sum: { $cond: [{ $eq: ["$Grades.Scores.Type", "Quiz"] }, "$Grades.Scores.Score", 0] }
       },
       totalExamScore: {
       $sum: { $cond: [{ $eq: ["$Grades.Scores.Type", "Exam"] }, "$Grades.Scores.Score", 0] }
       },
       totalAssignmentScore: {
       $sum: { $cond: ["$isAssignment", "$Grades.Scores.Score", 0] }
       },
       totalHomeworkScore: {
       $sum: { $cond: ["$isHomework", "$Grades.Scores.Score", 0] }
       },
       hasHomework: {
       $max: { $cond: ["$isHomework", 1, 0] }
       }
  }
  },
  {
  $addFields: {
       weightedAssignmentAndHomework: {
       $cond: [
            { $eq: ["$hasHomework", 1] },
            { $add: [
            { $multiply: ["$totalAssignmentScore", 0.15] },
            { $multiply: ["$totalHomeworkScore", 0.15] }
            ] },
            { $multiply: ["$totalAssignmentScore", 0.3] }
       ]
       },
       weightedQuiz: { $multiply: ["$totalQuizScore", 0.2] },
       weightedExam: { $multiply: ["$totalExamScore", 0.5] }
  }
  },
  {
  $addFields: {
       totalScore: {
       $add: ["$weightedAssignmentAndHomework", "$weightedQuiz", "$weightedExam"]
       }
  }
  },
  {
  $project: {
       _id: 0, 
       studentId: "$_id.studentId",
       classId: "$_id.classId",
       firstName: 1,
       lastName: 1,
       email: 1,
       phoneNumber: 1,
       totalScore: 1
  }
  },
  // Save to a new collection
  {
  $out: "StudentsWithTotalScores" // Name of the new collection
  }
  ]);