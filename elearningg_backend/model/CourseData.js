const mongoose=require('mongoose')
const courseSchema=mongoose.Schema({
    title:String,
    description:String,
    category:String,
    courseimageurl:String,
    contentFileLink: String
    
})
const CourseData=mongoose.model('learn',courseSchema)
module.exports=CourseData

