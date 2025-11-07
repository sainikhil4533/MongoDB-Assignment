const dbRef = db.getSiblingDB("SchoolDB");

dbRef.getCollection("Teachers").find({
  $or: [ { subject: "Math" }, { experience: { $gt: 5 } } ]
}).forEach(doc => printjson(doc));
