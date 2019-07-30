// Author: Amirul Sunesara (B00813456)

// References: https://sailsjs.com/documentation/reference/waterline-orm/models/find
// https://sailsjs.com/documentation/concepts/actions-and-controllers

module.exports = {
  
    //fetch inventory report
    getInventoryReport: async function (req, res) {
        var fromDate = new Date(req.body.fromDate).getTime();
        var toDate = new Date(req.body.toDate).getTime();

        //query from date and to date
        var query = {createdAt: {'>=':fromDate, '<=': toDate}};
        Minventory3.find(query).exec(function(err, items) {            
            return (res.json(items));
        });

    },
    //fetch reservation report
    getReservationReport: async function (req, res) {
        var fromDate = new Date(req.body.fromDate).getTime();
        var toDate = new Date(req.body.toDate).getTime();
    
        //query from date and to date
        var query = {createdAt: {'>=': fromDate, '<=': toDate}};
        Reservelist.find(query).exec(function(err, reservations) {            
            return (res.json(reservations));
        });
    
    },



};

