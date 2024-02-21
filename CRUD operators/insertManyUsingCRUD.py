from pymongo import MongoClient
import datetime

# Connect to MongoDB (replace with your actual MongoDB URI)
uri = "mongodb+srv://puttasathvik16:Sathvik123@cluster0.4xuta2y.mongodb.net/"
client = MongoClient(uri)

try:
    # Get reference to 'students' database
    db = client.students

    # Get reference to 'enrollments' collection
    enrollments_collection = db.enrollments

    # Enroll students in courses
    new_enrollments = [
        {
            "student_id": "0942304",
            "full_name": "Sathvik Putta",
            "courses": ["ADV Database Design", "Big Data", "Scripting"],
        },
        {
            "student_id": "0942303",
            "full_name": "Latha Reddy",
            "courses": ["Computer Science", "Physics", "Big Data"],
            
        },
    ]

    # Insert the 'new_enrollments' documents into the 'enrollments' collection
    result = enrollments_collection.insert_many(new_enrollments)

    document_ids = result.inserted_ids
    print("# of documents inserted: " + str(len(document_ids)))
    print(f"_ids of inserted documents: {document_ids}")

except Exception as e:
    print(f"Error: {e}")
finally:
    client.close()
