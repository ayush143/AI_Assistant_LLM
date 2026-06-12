const mongoose =require('mongoose');

async function ConnectDB() {
    try{
      await mongoose.connect(`mongodb+srv://yt:k7h5gZcbmfWdNpBS@backend.jpgreny.mongodb.net/Ai-Assistant`);
      console.log("Database is Connected");
    }
    
    catch{
        console.log("Error :Database is Failed to connect",error);
    }
}
module.exports = ConnectDB ;