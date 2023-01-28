import Participant from "../models/participant.model.js";

 export const createParticipant = async (req, res) =>{
    try {
        const {name} = req.body;
        await Participant.create({
            name
        });
        res.send("hola");
    } catch (error) {
        res.send(error.message);
    }
}
export const getAllParticipants = async (req, res) => {
    try {
        const rows = await Participant.findAll()
        res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
};
export const getOneParticipants = async (req, res) => {
    try {
        const {id} = req.params;
        const rows = await Participant.findOne( { where:{ id} } )
        if (rows === null) {
            return res.status(404).json({ message: "Not found"});
        }
        res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
};
export const updateParticipants = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;  
        const validate = await Participant.findOne( { where:{ id} } )
        if (validate === null) { return res.status(404).json({ message:"Participant not found"}); }
        const result = await Participant.upsert({
            id: id,
            name: name,
        });    
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
export const DeleteParticipants = async (req, res) => {
    try {
        const { id } = req.params;
        const validate = await Participant.findOne( { where:{ id} } )
        if (validate === null) { return res.status(404).json({ message:"Participant not found"}); }
        const result = await Participant.destroy({
            where: { id: id },
          });
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};
