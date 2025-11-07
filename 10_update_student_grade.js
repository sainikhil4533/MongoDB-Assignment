const dbRef = db.getSiblingDB("SchoolDB");

dbRef.getCollection("Students").updateOne(
  { name: "Alice" },
  { $set: { grade: "11" } }
);
