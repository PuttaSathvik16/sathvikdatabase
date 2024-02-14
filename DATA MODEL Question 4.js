//data modelling in MongoDB
//DATA MODEL
{
  "_id": ObjectId("65b1553c5326bc7c7f57cf1c"),
  "Std_ID": "0942304",
  "Personal_details": {
    "First_Name": "sathvik",
    "Last_Name": "putta",
    "Date_Of_Birth": "2001-05-16"
  },
  "Contact": {
    "e-mail": "puttasathvik16@gmail.com",
    "phone": "1234567890"
  },
  "Address": {
    "city": "New Haven",
    "Area": “171 cedar hill ave",
    "State": "connecticut"
  }
}

// Employee document
{
  "_id": ObjectId("65b1553c5326bc7c7f57cf1c"),
  "Std_ID": "0942304",
  "Personal_details": {
    "First_Name": "sathvik",
    "Last_Name": "putta",
    "Date_Of_Birth": "2001-05-16"
  },
  "Contact_ID": ObjectId("65b1553c5326bc7c7f57cf1c"), // Reference to Contact document
  "Address_ID": ObjectId("65b1553c5326bc7c7f57cf1d") // Reference to Address document
}

// Contact document referenced
{
  "_id": ObjectId("65b1553c5326bc7c7f57cf1d"),
  "e-mail": "puttasathvik16@gmail.com",
  "phone": "1234567890"
}

// Address document referenced
{
  "_id": ObjectId("65b1553c5326bc7c7f57cf1e"),
"city": "New Haven",
    "Area": “171 cedar hill ave",
    "State": "connecticut"
}
