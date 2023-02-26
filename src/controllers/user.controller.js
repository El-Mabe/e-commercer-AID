const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/user.model");
const pool = require("../../databases/postgres");

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  res.status(200).json(response.rows);
};

const getUsers = async (req, res) => {
  const query = "SELECT * FROM users";
  const rta = await pool.query(query);
  return res.status(200).json(rta.rows);
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Encrypt password
  const salt = bcryptjs.genSaltSync(10);
  const passwordCryp = bcryptjs.hashSync(password, salt);

  const response = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
    [name, email, passwordCryp]
  );

  res.status(200).json({
    message: "User Added successfully",
    body: {
      user: { name, email, passwordCryp },
    },
  });
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { address, image } = req.body;
  if (address && image) {
    console.log('address && image');
    const resp =await pool.query('UPDATE users SET address = $1, image = $2 WHERE id = $3', [
      address,
      image,
      id
  ]);
  return res.json(resp.rows);
  }
  if (address) {
    console.log('address');
    const resp =await pool.query('UPDATE users SET address = $1 WHERE id = $2', [
      address,
      id
  ]);
  return res.json(resp.rows);
  }
  if ( image) {
    console.log(' image');
    const resp =await pool.query('UPDATE users SET image = $1 WHERE id = $2', [
      image,
      id
  ]);
  return res.json(resp.rows);
  }

};


const deleateUser = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query('DELETE FROM users WHERE id = $1', [
      id
  ]);
  res.json(`User ${id} deleted Successfully`);
};

module.exports = {
  getUserById,
  getUsers,
  createUser,
  /* Updating the user's address and image. */
  updateUser,
  deleateUser,
};
