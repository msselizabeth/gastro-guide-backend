const current = async (req, res) => {
    const { userName, email } = req.user;
    res.json({
        userName,
        email
    })
}

module.exports = {
    current
}