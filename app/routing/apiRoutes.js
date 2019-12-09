var friendsTable = require("../data/friends");

module.exports = function(app) {
  
   app.get("/api/friends", function(req, res) {
    res.json(friendsTable);
  });
 
  app.post("/api/friends", function(req, res) {

      friendsTable.push(req.body);
      res.json(true);

    });
  app.post("/api/clear", function(req, res) {
    
    friendsTable.length = 0;

    res.json({ ok: true });
  });
};
