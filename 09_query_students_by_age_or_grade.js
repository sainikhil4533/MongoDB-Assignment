const dbRef = db.getSiblingDB("SchoolDB");

dbRef.getCollection("Students").find({
  $or: [ { age: { $gt: 15 } }, { grade: "10" } ]
}).forEach(doc => printjson(doc));
