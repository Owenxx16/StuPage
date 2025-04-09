const db = require('../config/database');
const { uploadTinyImage } = require('../config/upload');


const createNewsContent = async (req, res) => {
    const { news_id, content } = req.body;

    if (!news_id || !content) {
        return res.status(400).json({
            status: 400,
            message: 'Missing news_id or content',
            data: null
        });
    }

    try {
        await db.execute(
            'INSERT INTO news_content (news_id, content) VALUES (?, ?)',
            [news_id, content]
        );

        res.status(201).json({
            status: 201,
            message: 'News content created successfully',
            data: { news_id, content }
        });
    } catch (error) {
        console.error('Error creating news content:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

const updateNewsContent = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;

    try {
        const [rows] = await db.execute('SELECT * FROM news_content WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'News content not found',
                data: null
            });
        }

        await db.execute('UPDATE news_content SET content = ? WHERE id = ?', [content, id]);

        res.status(200).json({
            status: 200,
            message: 'News content updated successfully',
            data: { id, data }
        });
    } catch (error) {
        console.error('Error updating news content:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

const deleteNewsContent = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.execute('SELECT * FROM news_content WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'News content not found',
                data: null
            });
        }

        await db.execute('DELETE FROM news_content WHERE id = ?', [id]);

        res.status(200).json({
            status: 200,
            message: 'News content deleted successfully',
        });
    } catch (error) {
        console.error('Error deleting news content:', error);
        res.status(500).json({
            status: 500,
            message: 'Internal server error',
            data: null
        });
    }
};

const uploadTinyImageHandler = async (req, res) => {
    uploadTinyImage(req, res, (err) => {
        if (err) {
            console.error('Image upload error:', err);
            return res.status(500).json({ error: 'Image upload failed' });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const imageUrl = `/content_news/${req.file.filename}`;
        return res.status(200).json({ location: imageUrl });
    });
};

module.exports = {
    createNewsContent,
    updateNewsContent,
    deleteNewsContent,
    uploadTinyImage: uploadTinyImageHandler
};
