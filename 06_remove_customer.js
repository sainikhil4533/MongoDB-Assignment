const dbRef = db.getSiblingDB("ShopDB");

dbRef.getCollection("Customers").deleteOne({ name: "John Doe" });
