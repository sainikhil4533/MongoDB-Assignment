const dbRef = db.getSiblingDB("SchoolDB");

dbRef.getCollection("Students").insertMany([
  { name: "Alice", age: 16, grade: "10" },
  { name: "Bob", age: 14, grade: "8" },
  { name: "Charlie", age: 17, grade: "11" }
]);
