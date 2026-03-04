const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/collegeDB')
  .then(() => console.log('✅ Connection Successful! Node.js is talking to MongoDB.'))
  .catch(err => console.error('❌ Connection Failed:', err));
const userSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', userSchema);
  
const postSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  });
const Post = mongoose.model('Post', postSchema);
  

const run = async () => {
    const admin = await User.create({ name: 'Lina' });
    await Post.create({ title: 'Mongoose is Awesome', author: admin._id });
  

    const postWithData = await Post.findOne({ title: 'Mongoose is Awesome' }).populate('author');
    console.log(`Post Title: ${postWithData.title}`);
    console.log(`Author Name: ${postWithData.author.name}`); // Accessing name via population
  };

run()

const studentSchema = new mongoose.Schema({
    name: String,
    updatedAt: Date
  });
  
  studentSchema.pre('save', async function(next) {
    this.updatedAt = Date.now(); 
  });
  
  const Student = mongoose.model('Student', studentSchema);
  const display= async ()=>{

      const student = await Student.create({name: "Omar"})
      const info= await Student.find()
      console.log(info)
  }

  display()
  