const validateStrongPass = (req, res, next) => {
    const { pwd } = req.body;
    const pwdArr = pwd.split("");
    const validate = {}
    pwdArr.forEach((char) => {
        const charCode = char.charCodeAt();

        if(charCode >= 65 && charCode <= 90)
            validate.upperCase = true;
        if(charCode >= 97 && charCode <= 122)
            validate.lowerCase = true;
        if(charCode >= 48 && charCode <= 57)
            validate.number = true;
        if(charCode >= 32 && charCode <= 47 || charCode >= 58 && charCode <= 64 || charCode >= 91 && charCode <= 96 )
            validate.special = true;
    });
    if(validate.upperCase && validate.lowerCase && validate.number && validate.special)
        next();
    else
        res.status(404).json({ message : "Wrong strong password"});
}

module.exports = validateStrongPass;