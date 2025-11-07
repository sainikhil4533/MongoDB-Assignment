const dbRef = db.getSiblingDB("SchoolDB");

dbRef.getCollection("Teachers").updateOne(
  { name: "Mr. Smith" },
  { $inc: { experience: 1 } }
);
