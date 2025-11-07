const dbRef = db.getSiblingDB("ShopDB");

dbRef.createCollection("Customers");

dbRef.getCollection("Customers").drop();

dbRef.dropDatabase();
