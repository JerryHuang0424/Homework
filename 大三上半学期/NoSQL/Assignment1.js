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

// students table
db.Students.insertMany(
    {
      "StudentID":ST001,
      "FirstName":"Frankie",
      "LastName":"Jin",
      "Email":"FJ001@setu.ie",
      "PhoneNumber":"100001"
    },

    {
      "StudentID":ST002,
      "FirstName":"Jerry",
      "LastName":"Huang",
      "Email":"JH002@setu.ie",
      "PhoneNumber":"200002"
    },

    {
        "StudentID":ST003,
        "FirstName":"Wisdom",
        "LastName":"Guo",
        "Email":"WG003@setu.ie",
        "PhoneNumber":"300003"
      },

      {
        "StudentID":ST004,
        "FirstName":"Zane",
        "LastName":"Wang",
        "Email":"ZW004@setu.ie",
        "PhoneNumber":"400004"
      },

      {
        "StudentID":ST005,
        "FirstName":"Sherlock",
        "LastName":"Xia",
        "Email":"SX005@setu.ie",
        "PhoneNumber":"500005"
      },

      {"StudentID":ST006,
      "FirstName":"Dylan",
      "LastName":"Wu",
      "Email":"DW006@setu.ie",
      "PhoneNumber":"600006"
      }
)

//courses table
db.Courses.insertMany(
    {
        "CourseID":CR001,
        "CourseName":"Advanced Mathematics",
        "Credits":6
    },

    {
        "CourseID":CR002,
        "CourseName":"Linear Algebra",
        "Credits":3
    },

    {
        "CourseID":CR003,
        "CourseName":"Computer System",
        "Credits":2
    },

    {
        "CourseID":CR004,
        "CourseName":"Computer Networks",
        "Credits":4
    },

    {
        "CourseID":CR005,
        "CourseName":"Relational Databases",
        "Credits":3
    },

    {
        "CourseID":CR006,
        "CourseName":"NoSQL Databases",
        "Credits":2
    }
)

//enrollments table
db.Enrollments.insertMany(
    {
        "EnrollmentID":EM001,
        "StudentID":ST001,
        "CourseID":CR001,
        "EnrollmentDate":new Date("2024-12-01")
    },

    {
        "EnrollmentID":EM002,
        "StudentID":ST002,
        "CourseID":CR002,
        "EnrollmentDate":new Date("2024-12-02")
    },

    {
        "EnrollmentID":EM003,
        "StudentID":ST003,
        "CourseID":CR003,
        "EnrollmentDate":new Date("2024-12-03")
    },

    {
        "EnrollmentID":EM004,
        "StudentID":ST004,
        "CourseID":CR004,
        "EnrollmentDate":new Date("2024-12-04")
    },

    {
        "EnrollmentID":EM005,
        "StudentID":ST005,
        "CourseID":CR005,
        "EnrollmentDate":new Date("2024-12-05")
    },

    {
        "EnrollmentID":EM006,
        "StudentID":ST006,
        "CourseID":CR006,
        "EnrollmentDate":new Date("2024-12-06")
    }
)

//grades table
db.Grades.insertMany(
    {
        "GradeID":GD001,
        "EnrollmentID":EM001,
        "Grade":A
    },

    {
        "GradeID":GD002,
        "EnrollmentID":EM002,
        "Grade":A
    },

    {
        "GradeID":GD003,
        "EnrollmentID":EM003,
        "Grade":A
    },

    {
        "GradeID":GD004,
        "EnrollmentID":EM004,
        "Grade":B
    },

    {
        "GradeID":GD005,
        "EnrollmentID":EM005,
        "Grade":C
    },

    {
        "GradeID":GD006,
        "EnrollmentID":EM006,
        "Grade":C
    }
)
