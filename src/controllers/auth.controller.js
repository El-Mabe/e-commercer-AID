const { response } = require("express");

const login = (req, res=response) => {
  // const id = parseInt(req.params.id);
  // const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  // res.status(200).json(response.rows);

  res.json({
    msg: "Login ok",
  });
};

module.exports = {
  login
};
