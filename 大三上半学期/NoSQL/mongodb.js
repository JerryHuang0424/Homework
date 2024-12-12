db.books.update({author:"Jerry Huang"},{$set:{author:"J H"}

db.students.insertMany(
    {
        studentID:"WD123456",
        name："Jerry Huang",
        email:"JerryHuang.@example.com",
        major:"Internet of things",
        enrollmentYear:2022
    }
)