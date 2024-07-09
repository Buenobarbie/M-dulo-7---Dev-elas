const messageAirports = (req, res, next) => {
    res.json({
        Origem: req.params.FROM,
        Destino: req.params.TO,
        Descrição: `Voo partindo do ${req.airports.from} até ${req.airports.to} `
      })
};

module.exports = messageAirports; 