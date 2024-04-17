export const passwordValidator = (req, res, next) => {
    const password = req.body.password; 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#$%&()*+\/?@[\\\]^_{|}]).{8,}$/;

    if (!passwordRegex.test(password)) {
        return res.status(400).json({ error: 'La contraseña debe contener: letras mayúsculas y minúsculas, números y caracteres especiales.' });
    }

    next();
};