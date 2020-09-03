import mongoose from 'mongoose'

const tiktokSchema=mongoose.Schema({
url:String,
channel:String,
song:String,
likes:String,
messages:String,
description:String,
shares:String,
});


// collection inside the database collection is same as table. Inside collection there is json objects
// [] =>is a collection and {}=> is a document in the collection
export default mongoose.model('tiktokVideos', tiktokSchema)
// module.exports=mongoose.model('tiktokVideos', tiktokSchema);