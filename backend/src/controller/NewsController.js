const db = require('../config/database');

const createNews = async (req, res) => {
    const { title, content, category_id, user_id } = req.body;

    if (!title || !content || !category_id || !user_id) {
        return res.status(400).json({ status: 400, message: "Missing required fields" });
    }

    try {
        const mainImageFile = req.file;
        const image_title = mainImageFile ? `assets/${mainImageFile.filename}` : (req.body.image_title || '');

        const [newsResult] = await db.execute(
            `INSERT INTO news 
                (title, content, category_id, user_id, image_title) 
             VALUES (?, ?, ?, ?, ?)`,
            [title, content, category_id, user_id, image_title]
        );
        res.status(201).json({
            status: 201,
            message: "News created successfully",
            data: { id: newsResult.insertId, title, image_title }
        });
    } catch (error) {
        console.error("Error creating news:", error);
        res.status(500).json({ status: 500, message: error.message });
    }
};

const createNewsContent = async (req, res) => {
    const { news_id } = req.body;
    let news_content = req.body["news_content"];

    if (!news_id) {
        return res.status(400).json({ status: 400, message: "news_id is required" });
    }

    if (!news_content) news_content = [];
    if (typeof news_content === "string") {
        try {
            news_content = JSON.parse(news_content);
        } catch (error) {
            return res.status(400).json({ status: 400, message: "Invalid JSON format in news_content" });
        }
    }
    if (!Array.isArray(news_content)) {
        news_content = [news_content];
    }

    try {
        for (let i = 0; i < news_content.length; i++) {
            let { type, value } = news_content[i];

            if (type === "image" && req.files[i]) {
                value = `/uploads/news_content/${req.files[i].filename}`;
            }

            await db.execute(
                "INSERT INTO news_content (news_id, type, value) VALUES (?, ?, ?)",
                [news_id, type, value]
            );
        }

        res.status(201).json({
            status: 201,
            message: "News content uploaded successfully",
        });

    } catch (error) {
        console.error("Error creating news content:", error);
        res.status(500).json({ status: 500, message: error.message });
    }
};







// const createNews = async (req, res) => {
//     try {
//         const { title, content, category_id, user_id, news_content } = req.body;

//         // 1) Lấy file ảnh đại diện (nếu có)
//         //    req.files['image'] là mảng chứa file của fieldname "image"
//         const mainImageFile = req.files['image'] ? req.files['image'][0] : null;
//         // Lưu tên file (hoặc đường dẫn)
//         const image_title = mainImageFile ? mainImageFile.filename : null;

//         // 2) Thêm tin tức vào bảng `news`
//         const [newsResult] = await db.execute(
//             `INSERT INTO news 
//                 (title, content, category_id, user_id, image_title, created_at) 
//              VALUES (?, ?, ?, ?, ?, ?)`,
//             [title, content, category_id, user_id, image_title, new Date()]
//         );
//         const newsId = newsResult.insertId;

//         // 3) Xử lý nội dung tin tức (text/image)
//         //    `news_content` là mảng JSON do client gửi
//         //    VD: [{"type":"text","value":"Hello"},{"type":"image","value":"..."}]
//         let contentItems = [];
//         if (news_content) {
//             try {
//                 // Nếu client gửi dạng chuỗi JSON
//                 contentItems = JSON.parse(news_content);
//             } catch (error) {
//                 // Hoặc nếu client đã gửi dạng object, cẩn thận
//                 console.error('Cannot parse news_content as JSON:', error);
//             }
//         }

//         // 4) Lấy các file ảnh nội dung (nếu có)
//         //    req.files['image_content'] là mảng chứa file
//         const contentImages = req.files['image_content'] || [];
//         let imageIndex = 0;

//         for (const item of contentItems) {
//             const { type, value } = item;

//             // Nếu là TEXT
//             if (type === 'text') {
//                 await db.execute(
//                     `INSERT INTO news_content (news_id, type, value) VALUES (?, ?, ?)`,
//                     [newsId, 'text', value]
//                 );
//             }
//             // Nếu là IMAGE
//             else if (type === 'image') {
//                 // Lấy file tiếp theo trong mảng `contentImages`
//                 if (contentImages[imageIndex]) {
//                     const fileName = contentImages[imageIndex].filename;
//                     const imageUrl = `/assets/content_news/${fileName}`;
//                     await db.execute(
//                         `INSERT INTO news_content (news_id, type, value) VALUES (?, ?, ?)`,
//                         [newsId, 'image', imageUrl]
//                     );
//                     imageIndex++;
//                 } else {
//                     // Nếu client đánh dấu type = 'image' nhưng không có file
//                     // ta có thể bỏ qua hoặc xử lý tuỳ ý
//                     console.warn('No corresponding file for this image item');
//                 }
//             }
//         }

//         return res.status(201).json({
//             status: 201,
//             message: 'News created successfully',
//             data: {
//                 id: newsId,
//                 title,
//                 image_title
//             }
//         });
//     } catch (error) {
//         console.error('Error creating news:', error);
//         return res.status(500).json({
//             status: 500,
//             message: error.message,
//             data: null
//         });
//     }
// };

// // Các hàm khác (getAllNews, getNewsById, updateNews, deleteNews) ...




const getAllNews = async (req, res) => {
    try {
        const [newsResults] = await db.execute(
            'SELECT news.id, news.title, news.content, categories.name AS category_name, users.username AS author FROM news JOIN categories ON news.category_id = categories.id JOIN users ON news.user_id = users.id'
        );

        for (const news of newsResults) {
            const [contentResults] = await db.execute(
                'SELECT id, type, value FROM news_content WHERE news_id = ?', [news.id]
            );
            news.content_details = contentResults;
        }

        res.status(200).json({
            status: 200,
            message: 'News fetched successfully',
            data: newsResults
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};
const getNewsById = async (req, res) => {
    const newsId = req.params.id;

    try {
        const [newsResult] = await db.execute(
            'SELECT news.id, news.title, news.content, categories.name AS category_name, users.username AS author FROM news JOIN categories ON news.category_id = categories.id JOIN users ON news.user_id = users.id WHERE news.id = ?', [newsId]
        );

        if (newsResult.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'News not found',
                data: null
            });
        }

        const [contentResults] = await db.execute(
            'SELECT type, value FROM news_content WHERE news_id = ?', [newsId]
        );

        newsResult[0].content_details = contentResults;

        res.status(200).json({
            status: 200,
            message: 'News fetched successfully',
            data: newsResult[0]
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};
const updateNews = async (req, res) => {
    const newsId = req.params.id;
    const { title, content, category_id, user_id } = req.body;

    if (!title || !content || !category_id || !user_id) {
        return res.status(400).json({ status: 400, message: "Missing required fields" });
    }

    try {
        const [newsResult] = await db.execute(
            'SELECT news.id, news.title, news.content, categories.name AS category_name, users.username AS author FROM news JOIN categories ON news.category_id = categories.id JOIN users ON news.user_id = users.id WHERE news.id = ?', [newsId]
        );

        if (newsResult.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'News not found',
                data: null
            });
        }

        const mainImageFile = req.file;
        const image_title = mainImageFile ? `assets/${mainImageFile.filename}` : null;

        await db.execute(
            `UPDATE news 
             SET title = ?, content = ?, category_id = ?, user_id = ?, 
                 image_title = IFNULL(?, image_title) 
             WHERE id = ?`,
            [title, content, category_id, user_id, image_title, newsId]
        );

        res.status(200).json({
            status: 200,
            message: "News updated successfully",
            data: { id: newsId, title, image_title }
        });
    } catch (error) {
        console.error("Error updating news:", error);
        res.status(500).json({ status: 500, message: error.message });
    }
};
const deleteNews = async (req, res) => {
    const newsId = req.params.id;

    try {
        const [newsResult] = await db.execute(
            'SELECT news.id, news.title, news.content, categories.name AS category_name, users.username AS author FROM news JOIN categories ON news.category_id = categories.id JOIN users ON news.user_id = users.id WHERE news.id = ?', [newsId]
        );

        if (newsResult.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'News not found',
                data: null
            });
        }

        await db.execute('DELETE FROM news_content WHERE news_id = ?', [newsId]);

        await db.execute('DELETE FROM news WHERE id = ?', [newsId]);

        res.status(200).json({
            status: 200,
            message: 'News deleted successfully',
            data: { id: newsId }
        });
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message,
            data: null
        });
    }
};

module.exports = {
    createNews,
    getAllNews,
    getNewsById,
    updateNews,
    deleteNews,
    createNewsContent
};