//Mongopy
//question 6
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
              
uri = "mongodb+srv://puttasathvik16:Sathvik123@cluster0.4xuta2y.mongodb.net/retryWrites=true&w=majority"

// Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

// Send a ping to confirm a successful connection
try:
   client.admin.command('ping')
   print("Pinged your deployment. You successfully connected to MongoDB!")
   '''for db_name in client.list_database_names():
       print(db_name)*/''' #once sucessfully established connection
except Exception as e:
   print(e)
/* output
PS'C:/Users/puttasathvik/anaconda3/bin/python /Users/puttasathvik/mongopy.py
Pinged your deployment. You successfully connected to MongoDB!*/
