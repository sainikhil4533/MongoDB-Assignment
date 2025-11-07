const dbRef = db.getSiblingDB("SchoolDB");

dbRef.getCollection("Teachers").insertMany([
  { name: "Mr. Smith", subject: "Math", experience: 6 },
  { name: "Ms. Johnson", subject: "Science", experience: 4 },
  { name: "Mrs. Lee", subject: "English", experience: 10 }
]);
