//const MongoClient=require('mongodb').MongoClient;
const{MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
   if(error){
   console.log('Unable to connect to MongoDb server');
   }
   // console.log('Connected to MongoDB server');
   // db.collection('Todos').find({
   //   _id:new ObjectID('5a99d155609d6914ec9c76fb')
   // }).toArray().then((docs)=>{
   // console.log('Todos');
   // console.log(JSON.stringify(docs, undefined,2));
   // },(error)=>{
   //   console.log('Unable to fetch todos');
   // });

   // console.log('Connected to MongoDB server');
   // db.collection('Todos').find().count().then((count)=>{
   // console.log(`Todos count:${count}`);
   // },(error)=>{
   //   console.log('Unable to fetch todos');
   // });

   db.collection('Users').find({
     age:280
   }).toArray().then((person)=>{
     console.log('Users');
     console.log(JSON.stringify(person,undefined ,2));
   },(error)=>{
     console.log('Unable to fetch designated person',error);
   });


   db.close();
});
