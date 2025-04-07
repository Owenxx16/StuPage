const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const path = require("path");
const khoaRouter = require('./routes/khoa.js');
const feedbackRouter = require('./routes/feedback.js');
const PhongBRouter = require('./routes/phongban.js');
const DaoTaoRouter = require('./routes/daotao.js');
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
const TuyenSinhRouter = require('./routes/TuyenSinh.js');
const SinhVienRouter = require('./routes/SinhVien.js');
const DoanTheRouter = require('./routes/DoanThe.js');
const NewCategoryRouter = require('./routes/NewsCategory.js');
// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use('/khoa', khoaRouter);
app.use('/feedback', feedbackRouter);
app.use('/department', PhongBRouter);
app.use('/daotao', DaoTaoRouter);
app.use('/giangday', GiangDayRouter);
app.use('/chuongtrinh', ChuongTrinhRouter);
app.use('/camnang', CamNangRouter);
app.use('/sukien', SuKienRouter);
app.use('/lienket', LienKetRouter);
app.use('/hocthi', HocThiRouter);
app.use('/tuyensinh', TuyenSinhRouter);
app.use('/sinhvien', SinhVienRouter);
app.use('/doanthe', DoanTheRouter);
app.use('/newcategory', NewCategoryRouter);

//app.use('/news', newsRouter);
app.use('/categories', categoriesRouter);
app.use('/user', userRouter);
app.use('/news', NewsRouter);
app.use('/news_content', NewsContentRouter);
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});