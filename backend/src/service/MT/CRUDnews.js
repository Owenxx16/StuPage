 const connection = require('../../config/database.js');

 const getAllNews = async () => {
      let [result, fields] = await connection.execute(
        'SELECT news.id, news.title, news.created_at, nc.id AS news_content_id, nc.type, nc.value FROM news JOIN news_content nc ON news.id = nc.news_id');
      return result;
  }

const getNewsById = async (id) => {
    let [result, fields] = await connection.execute(
        'SELECT news.id, news.title, news.created_at, nc.id AS news_content_id, nc.type, nc.value FROM news JOIN news_content nc ON news.id = nc.news_id WHERE news.id = ?', [id]);
    return result;
}

const updateNewsAndContent = async (newsId, newsData, contentData) => {
  const conn = await connection.getConnection();
  try {
      await conn.beginTransaction();
      
      await conn.execute(
          'UPDATE news SET title = ? WHERE id = ?',
          [newsData.title, newsId]
      );
      
      await conn.execute(
          'UPDATE news_content SET type = ?, value = ? WHERE news_id = ?',
          [contentData.type, contentData.value, newsId]
      );
      
      await conn.commit();
      return { success: true, message: 'Cập nhật thành công' };
  } catch (error) {
      await conn.rollback();
      throw error;
  } finally {
      conn.release();
  }
};

const deleteNews = async (id) => {
    let [result, fields] = await connection.execute(
        'DELETE FROM news WHERE id = ?', [id]);
    return result;
}


module.exports = {
  getAllNews,
  getNewsById,
  updateNewsAndContent,
  deleteNews
};