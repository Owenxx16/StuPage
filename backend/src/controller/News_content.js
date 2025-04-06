const db = require('../config/database');

const createNewsContent = async (req, res) => {
    const { news_id } = req.body;
    const uploadedFiles = req.files || [];

    if (!news_id) {
        return res.status(400).json({
            status: 400,
            message: 'Missing news_id',
            data: null
        });
    }
    const newsContentItems = req.body.news_content || [];
    if (newsContentItems.length === 0) {
        return res.status(400).json({
            status: 400,
            message: 'No news_content items provided',
            data: null
        });
    }

    const imageCount = newsContentItems.filter(item => item.type === 'image').length;
    if (imageCount !== uploadedFiles.length) {
        return res.status(400).json({
            status: 400,
            message: 'Number of uploaded images does not match number of image items in news_content',
            data: null
        });
    }

    try {
        let fileIndex = 0;
        for (const item of newsContentItems) {
            const { type, value } = item;

            console.log('Processing:', { type, value });
            if (type === 'image') {
                const imageUrl = `/content_news/${uploadedFiles[fileIndex].filename}`;
                console.log('Inserting image into DB:', { news_id, type, value: imageUrl });
                await db.execute(
                    'INSERT INTO news_content (news_id, type, value) VALUES (?, ?, ?)',
                    [news_id, type, imageUrl]
                );
                fileIndex++;
            }
            else if (type === 'text') {
                console.log('Inserting text into DB:', { news_id, type, value });
                await db.execute(
                    'INSERT INTO news_content (news_id, type, value) VALUES (?, ?, ?)',
                    [news_id, type, value]
                );
            }
            else {
                console.log('Skipping invalid type:', type);
            }
        }

        return res.status(201).json({
            status: 201,
            message: 'News content created successfully',
            data: { news_id }
        });
    } catch (error) {
        console.error('Database error in createNewsContent:', error);
        return res.status(500).json({
            status: 500,
            message: `Failed to create news content: ${error.message}`,
            data: null
        });
    }
};

const updateNewsContent = async (req, res) => {
    const { id } = req.params;
    const {type, value } = req.body;
    const contentFiles = req.files || [];

    try {
        const [result] = await db.execute('SELECT * FROM news_content WHERE id = ?', [id]);

        if (result.length === 0) {
            return res.status(404).json({
                status: 404,
                message: 'News content not found',
                data: null
            });
        }

        if (type === 'image' && contentFiles.length > 0) {
            const imageUrl = `assets/content_news/${contentFiles[0].filename}`;

            await db.execute(
                'UPDATE news_content SET type = ?, value = ? WHERE id = ?',
                [type, imageUrl, id]
            );
        }
        else if (type === 'text') {
            await db.execute(
                'UPDATE news_content SET type = ?, value = ? WHERE id = ?',
                [type, value, id]
            );
        }

        res.status(200).json({
            status: 200,
            message: 'News content updated successfully',
            data: { id }
        });
    } catch (error) {
        console.error("Error updating news content:", error);
        res.status(500).json({
            status: 500,
            message: `Failed to update news content: ${error.message}`,
            data: null
        });
    }
};




const deleteNewsContent = async (req, res) => {
    const id = req.params.id;

    try {
        const [result] = await db.execute('SELECT * FROM news_content WHERE id = ?', [id]);

        if (result.length === 0) {
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
            data: { id }
        });
    } catch (error) {
        console.error("Error deleting news content:", error);
        res.status(500).json({
            status: 500,
            message: `Failed to delete news content: ${error.message}`,
            data: null
        });
    }
};

module.exports = { createNewsContent, updateNewsContent, deleteNewsContent };