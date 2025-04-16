const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const path = require("path");
const feedbackRouter = require('./routes/feedback.js');
const GiangDayRouter = require('./routes/giangday.js');
const categoriesRouter = require('./routes/CategoriesRoute.js');
const userRouter = require('./routes/UsersRoute.js');
const NewsRouter = require('./routes/NewsRoute.js');
const NewsContentRouter = require('./routes/News_contentRoute.js');
const ChuongTrinhRouter = require('./routes/ChuongTrinh.js');
const CamNangRouter = require('./routes/CamNang.js');
const SuKienRouter = require('./routes/SuKien.js');
const LienKetRouter = require('./routes/LienKet.js');
const HocThiRouter = require('./routes/HocThi.js');
const NewsCategoryRouter = require('./routes/NewsCategory.js');
const CategoriesNavRouter = require('./routes/CategoryNav.js');
const NavbarRouter = require('./routes/Navbar.js');
const phongbanRouter = require('./routes/PhongBan.js');
const AdminRouter = require('./routes/Admin.js');
// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/feedback', feedbackRouter);
app.use('/giangday', GiangDayRouter);
app.use('/chuongtrinh', ChuongTrinhRouter);
app.use('/camnang', CamNangRouter);
app.use('/sukien', SuKienRouter);
app.use('/lienket', LienKetRouter);
app.use('/hocthi', HocThiRouter);
app.use('/news_category', NewsCategoryRouter);
app.use('/category_nav', CategoriesNavRouter);
app.use('/navbar', NavbarRouter);
//app.use('/news', newsRouter);
app.use('/categories', categoriesRouter);
app.use('/user', userRouter);
app.use('/news', NewsRouter);
app.use('/news_content', NewsContentRouter);
app.use('/phongban', phongbanRouter);
app.use('/admin', AdminRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});