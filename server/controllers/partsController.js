module.exports = {
    computerParts: async(req, res) => {
        const parts = await req.app.get('db').get_computer_parts(1);
        return res.status(200).send(parts);
    },

    
}