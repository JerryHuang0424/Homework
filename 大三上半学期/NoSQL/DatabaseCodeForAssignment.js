/*
db.department.find()

db.instructors.find()

db.instructors.find({"deptID":"WD001"})

db.students.find({"enrollmentYear":2023})

db.instructors.find({"name":"Dr. Charlie White"},{"officeHours":1})

db.enrollments.find({semester:'Fall 2024'})

db.instructors.find({},{name: 1, email: 1, _id: 0})

db.instructors.find({},{name:1,deptID:1}).sort({name:-1})
*/
// students table and we insert the 'Grades' table,so we delete the EnrollmentID and gradeID



db.Students.insertMany([
    {
        _id : ObjectId('676817fdcf2448bbf451c5d3'),
      "FirstName":"Frankie",
      "LastName":"Jin",
      "Email":"FJ001@setu.ie",
      "PhoneNumber":"100001",
      "Grades":[
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5cd'),
        "Scores":[
            {    
                "Score":90,
                "Type":"Assignment"
            },
    
            {
                "Score":86,
                "Type":"Quiz"
            },
    
            {
                "Score":80,
                "Type":"Exam"
            }
          ]
        },
        
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5ce'),
        "Scores":[
            {    
                "Score":55,
                "Type":"Homework"
            },
        
            {
                "Score":95,
                "Type":"Quiz"
            },
        
            {
                "Score":87,
                "Type":"Exam"
            }
          ]
        }
      ]
    },

    {
        _id : ObjectId('676817fdcf2448bbf451c5d4'),
      "FirstName":"Jerry",
      "LastName":"Huang",
      "Email":"JH002@setu.ie",
      "PhoneNumber":"200002",
      "Grades":[
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5ce'),
        "Scores":[
            {    
                "Score":100,
                "Type":"Assignment"
            },
    
            {
                "Score":80,
                "Type":"Quiz"
            },
    
            {
                "Score":70,
                "Type":"Exam"
            }
          ]
        },
        
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5cf'),
        "Scores":[
            {    
                "Score":99,
                "Type":"Homework"
            },
        
            {
                "Score":95,
                "Type":"Quiz"
            },
        
            {
                "Score":98,
                "Type":"Exam"
            }
          ]
        }
      ]
    },

    {
        _id : ObjectId('676817fdcf2448bbf451c5d5'),
        "FirtName":"Wisdom",
        "LastName":"Guo",
        "Email":"WG003@setu.ie",
        "PhoneNumber":"300003",
        "Grades":[
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5cf'),
        "Scores":[
            {    
                "Score":45,
                "Type":"Assignment"
            },
    
            {
                "Score":55,
                "Type":"Quiz"
            },
    
            {
                "Score":65,
                "Type":"Exam"
            }
          ]
        },
        
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5d0'),
        "Scores":[
            {    
                "Score":88,
                "Type":"Homework"
            },
        
            {
                "Score":80,
                "Type":"Quiz"
            },
        
            {
                "Score":80,
                "Type":"Exam"
            }
          ]
        }
      ]
    },

    {
        _id : ObjectId('676817fdcf2448bbf451c5d6'),
        "FirstName":"Zane",
        "LastName":"Wang",
        "Email":"ZW004@setu.ie",
        "PhoneNumber":"400004",
        "Grades":[
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5d0'),
        "Scores":[
            {    
                "Score":69,
                "Type":"Assignment"
            },
    
            {
                "Score":60,
                "Type":"Quiz"
            },
    
            {
                "Score":72,
                "Type":"Exam"
            }
          ]
        },
        
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5d1'),
        "Scores":[
            {    
                "Score":71,
                "Type":"Homework"
            },
        
            {
                "Score":77,
                "Type":"quiz"
            },
        
            {
                "Score":83,
                "Type":"Exam"
            }
          ]
        }
      ]
    },

    {
        _id : ObjectId('676817fdcf2448bbf451c5d7'),
        "FirstName":"Sherlock",
        "LastName":"Xia",
        "Email":"SX005@setu.ie",
        "PhoneNumber":"500005",
        "Grades":[
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5d1'),
        "Scores":[
            {    
                "Score":57,
                "Type":"Assignment"
            },
    
            {
                "Score":90,
                "Type":"Quiz"
            },
    
            {
                "Score":59,
                "Type":"Exam"
            }
          ]
        },
        
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5d2'),
        "Scores":[
            {    
                "Score":95,
                "Type":"Homework"
            },
        
            {
                "Score":61,
                "Type":"quiz"
            },
        
            {
                "Score":90,
                "Type":"Exam"
            }
          ]
        }
      ]
    },

    {
        _id : ObjectId('676817fdcf2448bbf451c5d8'),
      "FirstName":"Dylan",
      "LastName":"Wu",
      "Email":"DW006@setu.ie",
      "PhoneNumber":"600006",
      "Grades":[
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5d2'),
        "Scores":[
            {    
                "Score":90,
                "Type":"Assignment"
            },
    
            {
                "Score":90,
                "Type":"Quiz"
            },
    
            {
                "Score":80,
                "Type":"Exam"
            }
          ]
        },
        
        {
        ClassID:ObjectId('6767dd51cf2448bbf451c5cd'),
        "Scores":[
            {    
                "Score":85,
                "Type":"Homework"
            },
        
            {
                "Score":89,
                "Type":"Quiz"
            },
        
            {
                "Score":98,
                "Type":"Exam"
            }
          ]
        }
      ]
    }]
)


//courses table
db.Courses.insertMany([
    {
        "CourseName":"Advanced Mathematics",
        "Credits":6,
        "Instructor":"Minerva McGonagall",
        "Arrangement":[
            {
                "Info":"This is our normal time. ",
                "Week":"1~15 week",
                "Time":"Fri, 8:00 ~ 9:40, 10 minutes break in 8:45" ,
                "Location": "Binjiang Building BN504"
            },
            {
                "Info":"The classes in Week 8 and week 9 was canceled due to the teacher's illness and will be rescheduled. ",
                "Week":"16~17 week",
                "Time":"Fri, 8:00 ~ 9:40, 10 minutes break in 8:45",
                "Location":"Binjiang Building BN504"
            }
        ]
    
    },

    {
        "CourseName":"Linear Algebra",
        "Credits":3,
        "Instructor":"Filius Flitwick",
        "Arrangement":[
            {
                "Info":"Normal time ",
                "Week":"1~16week",
                "Time":"Thur, 15:55:17:35, 10 minutes break in 16:40" ,
                "Location": "Binjiang building BN204"
            },
            {
                "Info":"Maybe I have some misunderstanding about the course time, I miss the course in 15 week, we will have the reschedulation in week 17. ",
                "Week":"17 week",
                "Time":"Thur, 15:55:17:35, 10 minutes break in 16:40",
                "Location":"Binjiang building BN204"
            }
        ]
    },

    {
        "CourseName":"Operating System",
        "Credits":2,
        "Instructor":"Severus Snape",
        "Arrangement":[
            {
                "Info":"Normal time, do not forget, or your Ordinary performance will decress ",
                "Week":"1~16week",
                "Time":"Wed, 18:45~21:20, 10 minutes break in 17:30 and 20:25" ,
                "Location": "Mingde Building N601"
            }
        ]
    },

    {
        "CourseName":"Computer Networks",
        "Credits":4,
        "Instructor":"Aurora Sinistra",
        "Arrangement":[
            {
                "Info":"Normal time, and we will have two leason in one week. This is the first time. ",
                "Week":"4~12",
                "Time":"Tues, 10:10~11:50, no time break." ,
                "Location": "Linjiang Building B507"
            },
            {
                "Info":"Normal time, this is the second time of a week. ",
                "Week":"4~12",
                "Time":"Thur, 10:10~11:50, no time break." ,
                "Location": "Lanjiang Building N308"
            },
            {
                "Info":"We need some extra lesson to do some lab. ",
                "Week":"13~16",
                "Time":"Tues, 10:10~11:50, no time break." ,
                "Location": "Linjiang Building B507"
            }

        ]
    },

    {
        "CourseName":"Relational Databases",
        "Credits":3,
        "Instructor":"Rubeus Hagrid",
        "Arrangement":[
            {
                "Info":"Normal time guys, and you will see me again in Wed.",
                "Week":"5~10week",
                "Time":"Mon, 8:00~9:40, 10 minutes break in 8:45." ,
                "Location": "Lanjiang C504"
            },
            {
                "Info":"Second time",
                "Week":"5~10week",
                "Time":"Thur, 8:00~9:40, 10 minutes break in 8:45." ,
                "Location": "Lanjiang C504"
            }
        ]
    },

    {
        "CourseName":"NoSQL Databases",
        "Credits":3,
        "Instructor":"John Organ",
        "Arrangement":[
            {
                "Info":"Our time is short so we will have a lot of lessones in the following weeks .",
                "Week":"13~16week",
                "Time":"Mon, 10:10~11:50, 10 minutes break in 10:55." ,
                "Location": "Linjiang B209"
            },
            {
                "Info":"Second time.",
                "Week":"13~16week",
                "Time":"Tues, 8:00~9:40, 10 minutes break in 8:45." ,
                "Location": "Lanjiang B209"
            },
            {
                "Info":"Third time.",
                "Week":"13~16week",
                "Time":"Wed, 8:00~9:40, 10 minutes break in 8:45." ,
                "Location": "Lanjiang B209"
            },
            {
                "Info":"Fourth time.",
                "Week":"13~16week",
                "Time":"Thur, 10:10~11:50 and 13:45~15:25, 10 minutes break in 10:55 and in 14:30." ,
                "Location": "Lanjiang B209"
            },
            {
                "Info":"Last time for a week.",
                "Week":"13~16week",
                "Time":"Thur, 10:10~11:50 and 13:45~15:25, 10 minutes break in 10:55 and in 14:30." ,
                "Location": "Lanjiang B209"
            }

        ]
    }]
)

db.Enrollments.insertMany([
    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d3'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5cd'),
        "EnrollmentDate":new Date("2024-12-01")
    },

    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d3'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5ce'),
        "EnrollmentDate":new Date("2024-12-02")
    },

    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d4'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5ce'),
        "EnrollmentDate":new Date("2024-12-03")
    },

    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d4'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5cf'),
        "EnrollmentDate":new Date("2024-12-04")
    },

    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d5'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5cf'),
        "EnrollmentDate":new Date("2024-12-05")
    },

    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d5'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5d0'),
        "EnrollmentDate":new Date("2024-12-06")
    },

    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d6'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5d0'),
        "EnrollmentDate":new Date("2024-12-06")
    },
    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d6'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5d1'),
        "EnrollmentDate":new Date("2024-12-06")
    },
    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d7'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5d2'),
        "EnrollmentDate":new Date("2024-12-06")
    },
    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d7'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5d1'),
        "EnrollmentDate":new Date("2024-12-06")
    },
    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d8'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5d2'),
        "EnrollmentDate":new Date("2024-12-06")
    },
    {
        "StudentId":ObjectId('676817fdcf2448bbf451c5d8'),
        "CourseId":ObjectId('6767dd51cf2448bbf451c5cd'),
        "EnrollmentDate":new Date("2024-12-06")
    },
    ]
)


