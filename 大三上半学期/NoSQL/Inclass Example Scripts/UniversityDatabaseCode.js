db.departments.insertMany([
    {
        //deptId:"WD40";
        name: "Computer Science",
        head: "Dr. Alice Brown",
        contact: "alice.brown@example.com"
    },
    {
        //deptId:"WD55";
        name: "Business Administration",
        head: "Dr. Bob Green",
        contact: "bob.green@example.com"
    }
])

db.departments.find();

// Create Instructors Collection
db.instructors.insertMany([
    {
        name: "Dr. Charlie White",
        email: "charlie.white@example.com",
        departmentId: ObjectId("671d6424422aa9770e86b031"), --"WD40"
        bio: "Expert in software engineering and AI." 
    },
    {
        name: "Ms. Dana Black",
        email: "dana.black@example.com",
        departmentId: ObjectId("671d6424422aa9770e86b032"), --"WDFF"
        bio: "Specializes in management and marketing."
    }
])


db.courses.insertMany([
    {
        
        title: "Data Structures and Algorithms",
        description: "An introduction to data structures and algorithms.",
        credits: 3,
        departmentId: ObjectId("671d5663422aa9770e86b01d"),
        instructorId: ObjectId("671d597d422aa9770e86b01f")
    },
    {
        
        title: "Marketing Principles",
        description: "Fundamentals of marketing concepts and practices.",
        credits: 3,
        departmentId: ObjectId("671d5663422aa9770e86b01e"),
        instructorId: ObjectId("671d597d422aa9770e86b020")
    }
])

db.students.insertMany([
    {
        name: "Emma Wilson",
        email: "emma.wilson@example.com",
        major: ObjectId('671d5663422aa9770e86b01d'),
        enrollmentYear: 2023
    },
    {
        name: "Liam Johnson",
        email: "liam.johnson@example.com",
        major: ObjectId('671d5663422aa9770e86b01e'),
        enrollmentYear: 2022
    }
])


db.enrollments.insertMany([
    {
        studentId: ObjectId("671d5bef422aa9770e86b023"),
        courseId: ObjectId("671d5ac7422aa9770e86b021"),
        semester: "Fall 2024",
        grade: null // Grade can be assigned later
    },
    {
        studentId: ObjectId("671d5bef422aa9770e86b024"),
        courseId: ObjectId("671d5ac7422aa9770e86b022"),
        semester: "Spring 2024",
        grade: null
    }
])

db.departments.find();
