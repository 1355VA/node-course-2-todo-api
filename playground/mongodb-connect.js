//const MongoClient=require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
   if(error){
   console.log('Unable to connect to MongoDb server');
   }
   console.log('Connected to MongoDB server');
   /*
   db.collection('Todos').insertOne({
      text: 'Something to do',
      completed:false
   },(error,result)=>{
     if(error){
       return console.log('Unable to insert todo',error);
     }
     console.log(JSON.stringify(result.ops,undefined ,2));
   });
   */
  db.collection('User').insertOne({
    //_id:02,
    name:'Nurmemet',
    age:34,
    location:'Virginia ,USA'
  },(error,result)=>{
    if(error){
       return console.log('Unable to insert user info');
    }
    return console.log(result.ops[0]._id.getTimestamp());
  });
   db.close();
});
