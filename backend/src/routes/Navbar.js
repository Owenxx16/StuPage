const express = require('express');
const router = express.Router();
const { getAllNavbar,
  getNavbarById,
  getNavbarByCategoryId,
  updateNavbar,
  deleteNavbar,
  createNavbar } = require('../controller/MT/Navbar');

  router.get('/', getAllNavbar);
  router.get('/:id', getNavbarById);
  router.post('/', createNavbar);
  router.put('/:id', updateNavbar);
  router.delete('/:id', deleteNavbar);


  router.get('/category/:navbarId', getNavbarByCategoryId);
module.exports = router;