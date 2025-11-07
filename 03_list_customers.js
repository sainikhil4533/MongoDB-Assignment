const dbRef = db.getSiblingDB("ShopDB");

dbRef.getCollection("Customers").find({}).forEach(doc => printjson(doc));
