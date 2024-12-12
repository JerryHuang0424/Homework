use college

db.grades.find({student_i:42},{class_id:18})<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
  MathJax.Hub.Config({ tex2jax: {inlineMath: [['$', '$']]}, messageStyle: "none" });
</script>


db.grades.updateOne(
    {student_id:52,class_id:30},
    {$set:{
        student_id:52,
        class_id:30,
        "scores":[
            {type:"exam",score:55.9},
            {type:"quiz",score:22.2},
            {type:"homework",score:79.9}
        ]
    }},{upsert:true}
)

db.grades.updateMany(
    {"scores.score":{$gte:99}},
    {$set:{
        "scores.$[element].score":100
    }},
    {arrayFilters:[
        {"element.score":{$gte:100}}
    ]}
)