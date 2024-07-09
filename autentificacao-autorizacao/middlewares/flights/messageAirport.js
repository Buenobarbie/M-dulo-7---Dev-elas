const messageAirports = (req, res, next) => {
    res.json({
        origem: req.params.FROM,
        destino: req.params.TO,
        descricao: `Voo partindo do ${req.airports.from} até ${req.airports.to} `
      })
};

module.exports = messageAirports; 