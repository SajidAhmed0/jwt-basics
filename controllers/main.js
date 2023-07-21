const login = (req, res) => {
    res.send('Fake Login/Register/Singup Route');
}

const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({msg:`Hello, Jhon Doe`, secret: `Here is your authorize data, your lucky number is ${luckyNumber}`});
}

module.exports = {
    login,
    dashboard
}