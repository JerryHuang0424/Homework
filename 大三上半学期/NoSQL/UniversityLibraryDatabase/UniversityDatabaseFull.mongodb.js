/* University Database - Full Example*/

// Insert Departments

db.departments.insert(
   {
    _id:ObjectId('671d6424422aa9770e86b033'), name: "Machine Learning", head: "Dr.John Simth", contact: "John.smith@example.com"
   } 
)
db.departments.insertMany([
    { _id: ObjectId("671d6424422aa9770e86b031"), name: "Computer Science", head: "Dr. Alice Brown", contact: "alice.brown@example.com" },
    { _id: ObjectId("671d6424422aa9770e86b032"), name: "Business Administration", head: "Dr. Bob Green", contact: "bob.green@example.com" }
])

// Verify Departments
db.departments.find();

// Insert Instructors
db.instructors.insertMany([
    {
        _id: ObjectId("671d597d422aa9770e86b01f"),
        name: "Dr. Charlie White",
        email: "charlie.white@example.com",
        departmentId: ObjectId("671d6424422aa9770e86b031"), // Reference to Department
        bio: "Expert in software engineering and AI.",
        officeHours: [
            { day: "Tuesday", time: "2:00 PM - 4:00 PM", location: "Room 202" },
            { day: "Thursday", time: "10:00 AM - 12:00 PM", location: "Room 202" }
        ]
    },
    {
        _id: ObjectId("671d597d422aa9770e86b020"),
        name: "Ms. Dana Black",
        email: "dana.black@example.com",
        departmentId: ObjectId("671d6424422aa9770e86b032"), // Reference to Department
        bio: "Specializes in management and marketing.",
        officeHours: [
            { day: "Monday", time: "1:00 PM - 3:00 PM", location: "Room 105" },
            { day: "Wednesday", time: "3:00 PM - 5:00 PM", location: "Room 105" }
        ]
    }
])

// Insert Courses
db.courses.insertMany([
    {
        _id: ObjectId("671d5ac7422aa9770e86b021"),
        title: "Data Structures and Algorithms",
        description: "An introduction to data structures and algorithms.",
        credits: 3,
        departmentId: ObjectId("671d6424422aa9770e86b031"), // Reference to Department
        instructorId: ObjectId("671d597d422aa9770e86b01f"), // Reference to Instructor
        schedule: {
            days: ["Monday", "Wednesday"],
            time: "10:00 AM - 11:30 AM",
            location: "Room 101"
        },
        prerequisites: [
            { courseId: ObjectId("671d5ac7422aa9770e86b025"), title: "Introduction to Programming" }
        ]
    },
    {
        _id: ObjectId("671d5ac7422aa9770e86b022"),
        title: "Marketing Principles",
        description: "Fundamentals of marketing concepts and practices.",
        credits: 3,
        departmentId: ObjectId("671d6424422aa9770e86b032"), // Reference to Department
        instructorId: ObjectId("671d597d422aa9770e86b020"), // Reference to Instructor
        schedule: {
            days: ["Tuesday", "Thursday"],
            time: "9:00 AM - 10:30 AM",
            location: "Room 203"
        },
        prerequisites: []
    }
])

// Insert Students
db.students.insertMany([
    {
        _id: ObjectId("671d5bef422aa9770e86b023"),
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        major: ObjectId("671d6424422aa9770e86b031"), // Reference to Department
        enrollmentYear: 2023,
        contacts: {
            phone: "123-456-7890",
            emergencyContact: {
                name: "John Wilson",
                relationship: "Father",
                phone: "123-555-6789"
            }
        },
        addresses: [
            { type: "home", address: "123 Elm St, Springfield, IL", postalCode: "62701" },
            { type: "dorm", address: "Dorm A, Room 202, University Campus", postalCode: "62702" }
        ]
    },
    {
        _id: ObjectId("671d5bef422aa9770e86b024"),
        name: "Liam Johnson",
        email: "liam.johnson@example.com",
        major: ObjectId("671d6424422aa9770e86b032"), // Reference to Department
        enrollmentYear: 2022,
        contacts: {
            phone: "987-654-3210",
            emergencyContact: {
                name: "Sarah Johnson",
                relationship: "Mother",
                phone: "987-555-4321"
            }
        },
        addresses: [
            { type: "home", address: "456 Maple Ave, Springfield, IL", postalCode: "62703" }
        ]
    }
])

// Insert Enrollments
db.enrollments.insertMany([
    {
        studentId: ObjectId("671d5bef422aa9770e86b023"), // Reference to Student
        courseId: ObjectId("671d5ac7422aa9770e86b021"), // Reference to Course
        semester: "Fall 2024",
        grade: null,
        grades: [
            { assignment: "Midterm Exam", score: 85 },
            { assignment: "Project", score: 92 },
            { assignment: "Final Exam", score: 88 }
        ],
        attendanceRecords: [
            { date: new Date("2024-09-01"), status: "Present" },
            { date: new Date("2024-09-03"), status: "Absent" },
            { date: new Date("2024-09-05"), status: "Present" }
        ]
    },
    {
        studentId: ObjectId("671d5bef422aa9770e86b024"), // Reference to Student
        courseId: ObjectId("671d5ac7422aa9770e86b022"), // Reference to Course
        semester: "Spring 2024",
        grade: null,
        grades: [
            { assignment: "Presentation", score: 78 },
            { assignment: "Final Paper", score: 88 }
        ],
        attendanceRecords: [
            { date: new Date("2024-01-10"), status: "Present" },
            { date: new Date("2024-01-12"), status: "Present" }
        ]
    }
])
