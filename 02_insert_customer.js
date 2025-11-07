const dbRef = db.getSiblingDB("ShopDB");

dbRef.getCollection("Customers").insertOne({
  name: "John Doe",
  address: "123 Main St",
  totalPurchases: 750,
  joined: new Date()
});
