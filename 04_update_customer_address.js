const dbRef = db.getSiblingDB("ShopDB");

dbRef.getCollection("Customers").updateOne(
  { name: "John Doe" },
  { $set: { address: "456 Oak Ave" } }
);
