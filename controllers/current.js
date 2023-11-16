const current = async (req, res) => {
    const { userName, email, portrait } = req.user;
    res.json({
        userName,
        email,
        portrait
    })
}

module.exports = {
    current
}