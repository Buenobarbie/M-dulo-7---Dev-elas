const sanitazeCPF = (req, res, next) => {
    const { usr } = req.body;
    req.body.usr = usr.replace(/\D+/g, ""); // o g pega todas as ocorrências
    next();
}

module.exports = sanitazeCPF;