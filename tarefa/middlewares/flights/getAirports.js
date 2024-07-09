const getAirports = (req, res, next) => {
    const siglas = require("./siglas.json");
    req.airports = {
        from : siglas[req.params.FROM],
        to : siglas[req.params.TO]
    };
    next();
};

module.exports = getAirports; 


