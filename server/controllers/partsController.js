module.exports = {

    caseParts: async (req, res) => {
        const cases = await req.app.get('db').get_case_parts();
        return res.status(200).send(cases);
    },

    motherboardParts: async (req, res) => {
        const motherboards =  await req.app.get('db').get_motherboard_parts();
        return res.status(200).send(motherboards);
    },

    cpuParts: async(req,res) => {
        const cpus = await req.app.get('db').get_cpu_parts();
        return res.status(200).send(cpus);
    },

    gpuParts: async(req,res) => {
        const gpus = await req.app.get('db').get_gpu_parts();
        return res.status(200).send(gpus);
    },

    coolerParts: async(req,res) => {
        const coolers = await req.app.get('db').get_cooler_parts();
        return res.status(200).send(coolers);
    },

    memoryParts: async(req,res) => {
        const memory = await req.app.get('db').get_memory_parts();
        return res.status(200).send(memory);
    },

    fanParts: async(req,res) => {
        const fans = await req.app.get('db').get_fan_parts();
        return res.status(200).send(fans);
    },

    psuParts: async(req,res) => {
        const psus = await req.app.get('db').get_psu_parts();
        return res.status(200).send(psus);
    },

    deleteUser: async(req, res) => {
        const account = await req.app.get('db').delete_user(req.params.user_id)
        req.session.destroy()
        return res.status(200).send(account)
    },

    updateUsername: async(req, res) => {
        const { id, username } = req.body
        console.log(req.body)
        const newname = await req.app.get('db').update_username(username, id)
        return res.status(200).send(newname[0])
    }
}