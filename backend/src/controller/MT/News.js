const connection = require('../../config/database.js');
const {getAllNews,
  getNewsById,
  updateNewsAndContent,
  deleteNews} = require('../../service/MT/CRUDnews.js');


const getNews = async (req, res) => {
  try {
      const news = await getAllNews();
      res.json(news);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}


const getNewsByIdd = async (req, res) => {
  const id = req.params.id;
  try {
      const news = await getNewsById(id);
      res.json(news);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

const insertNewsWithContent = async (newsData, contentData) => {
  const conn = await connection.getConnection();
  try {
      await conn.beginTransaction();
      
      
      let [result] = await conn.execute(
          'INSERT INTO news (title, created_at) VALUES (?, ?)',
          [newsData.title, new Date()]
      );
      const newsId = result.insertId;
     
      await conn.execute(
          'INSERT INTO news_content (news_id, type, value) VALUES (?, ?, ?)',
          [newsId, contentData.type, contentData.value]
      );
      
      await conn.commit();
      return { success: true, message: 'Insert thành công', newsId };
  } catch (error) {
      await conn.rollback();
      throw error;
  } finally {
      conn.release();
  }
};

const updateNews = async (req, res) => {
  const newsId = req.params.id;
  const newsData = req.body;
  const contentData = req.body.content;
  try {
      const result = await updateNewsAndContent(newsId, newsData, contentData);
      res.json(result);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}

const deleteNew = async (req, res) => {
  const id = req.params.id;
  try {
      const result = await deleteNews(id);
      res.json(result);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}


module.exports = {
  getNews,
  getNewsByIdd,
  insertNewsWithContent,
  updateNews,
  deleteNew
};