module.exports = {
    computerParts: async(req, res) => {
        const parts =  await req.app.get('db').get_computer_parts();
        return res.status(200).send(parts);
    },

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

    addCase: async(req,res) => {
        const addcase = await req.app.post('db').add_transaction();
        return res.status(200).send(addcase);
    }
}