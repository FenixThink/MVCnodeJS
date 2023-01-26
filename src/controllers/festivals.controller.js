import { pool } from "../db.js";

export const getAllEvents = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM festivals");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const getOneEvents = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM festivals WHERE id = ?", [id]);
  
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Event not found" });
      }
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const postEvent = async (req, res) => {
    try {
      const { title,description,START_DATE,ENDING_DATE } = req.body;
      const [rows] = await pool.query(
        "INSERT INTO festivals (title,description,START_DATE,ENDING_DATE) VALUES (?,?,?,?)",
        [title,description,START_DATE,ENDING_DATE]
      );
      res.status(201).json({ id: rows.insertId, title,description,START_DATE,ENDING_DATE });
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const getFestivalParticipants = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("SELECT * FROM festivals WHERE id = ?", [id]);
  
      if (rows.length <= 0) {
        return res.status(404).json({ message: "Event not found" });
      }
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const updateEvent = async (req, res) => {
    try {
      const { id } = req.params;
      const { title,description,START_DATE,ENDING_DATE } = req.body;  
      const [result] = await pool.query(
        "UPDATE festivals SET title = IFNULL(?, title), description = IFNULL(?, description), START_DATE = IFNULL(?, START_DATE), ENDING_DATE = IFNULL(?, ENDING_DATE) WHERE id = ?",
        [title,description,START_DATE,ENDING_DATE, id]
      );
  
      if (result.affectedRows === 0)
        return res.status(404).json({ message: "Event not found" });
      const [rows] = await pool.query("SELECT * FROM festivals WHERE id = ?", [
        id,
      ]);
  
      res.json(rows[0]);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const deleteEvent = async (req, res) => {
    try {
      const { id } = req.params;
      const [rows] = await pool.query("DELETE FROM festivals WHERE id = ?", [id]);
  
      if (rows.affectedRows <= 0) {
        return res.status(404).json({ message: "festival not found" });
      }
  
      res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const getAllEventsOrderAscStart = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM festivals order by START_DATE DESC");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const getAllEventsOrderDescStart = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM festivals order by START_DATE ASC");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const getAllEventsOrderAscEnd = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM festivals order by ENDING_DATE DESC");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };
export const getAllEventsOrderDescEnd = async (req, res) => {
    try {
      const [rows] = await pool.query("SELECT * FROM festivals order by ENDING_DATE ASC");
      res.json(rows);
    } catch (error) {
      return res.status(500).json({ message: "Something goes wrong" });
    }
  };  
export const getAllEventsOrderBetween = async (req, res) => {
    try {
        console.log( req.params);
      const { title,description,START_DATE,ENDING_DATE } = req.body;  

        const [rows] = await pool.query("SELECT * FROM festivals order by ENDING_DATE ASC");
        res.json(rows);
      } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
      }
    
    res.send("hola");

}