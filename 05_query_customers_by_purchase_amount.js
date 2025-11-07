const dbRef = db.getSiblingDB("ShopDB");

dbRef.getCollection("Customers").find({ totalPurchases: { $gt: 500 } }).forEach(doc => printjson(doc));
