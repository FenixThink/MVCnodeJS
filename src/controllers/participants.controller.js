import { pool } from "../db.js";

export const getAllParticipants = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM participant");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const postParticipant = async (req, res) => {
    try {
      const { name } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO participant (name) VALUES (?)",
        [name]
      );
      res.status(201).json({ id: rows.insertId, name });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };

export const getOneParticipants = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM participant WHERE id = ?", [id]);
  
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Participant not found" });
      }
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const updateParticipants = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;  
      const [result] = await pool.query(
        "UPDATE participant SET name = IFNULL(?, name) WHERE id = ?",
        [name, id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "participant not found" });
  
      const [rows] = await pool.query("SELECT * FROM participant WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const deleteParticipants = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("DELETE FROM participant WHERE id = ?", [id]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "participant not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };