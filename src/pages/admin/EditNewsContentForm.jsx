import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';
import './EditNewsContentForm.css';

const EditNewsContentForm = ({ contentId, onDone }) => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      if (!contentId) return;
      try {
        const res = await axios.get(`https://stupage.onrender.com/news_content/${contentId}`);
        setContent(res.data.data.content);
      } catch (error) {
        console.error('Lỗi khi tải nội dung:', error);
        alert('Không thể lấy nội dung bài viết');
      }
    };

    fetchContent();
  }, [contentId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contentId || !content) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.put(`https://stupage.onrender.com/news_content/${contentId}`, {
        content: content,
      });

      alert('Cập nhật thành công!');
      console.log(res.data);
      if (onDone) onDone();
    } catch (error) {
      console.error('Lỗi khi cập nhật:', error);
      alert('Không thể cập nhật nội dung');
    } finally {
      setIsLoading(false);
    }
  };

  if (!contentId) return null; // Không hiển thị nếu chưa có ID

  return (
    <div className="edit-form-container">
      <h2 className="edit-form-title">Sửa nội dung bài viết</h2>

      <form onSubmit={handleSubmit}>
        <Editor
          apiKey="bv0d3h5gn8pt9jt11pgs0hacta2fcwxmdj96p6p97s4xtpbc"
          value={content}
          onEditorChange={(newValue) => setContent(newValue)}
          init={{
            height: 400,
            menubar: true,
            plugins: ['image', 'link', 'code', 'preview'],
            toolbar:
              'undo redo | bold italic underline | alignleft aligncenter alignright | image | code preview',
            automatic_uploads: false,
            file_picker_types: 'image',
            file_picker_callback: function (cb, value, meta) {
              if (meta.filetype === 'image') {
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                input.onchange = function () {
                  const file = input.files[0];
                  const reader = new FileReader();
                  reader.onload = function () {
                    const base64 = reader.result;
                    cb(base64, { title: file.name });
                  };
                  reader.readAsDataURL(file);
                };

                input.click();
              }
            }
          }}
        />

        <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
          <button
            type="submit"
            disabled={isLoading}
            className="edit-form-submit"
          >
            {isLoading ? 'Đang cập nhật...' : 'Cập nhật bài viết'}
          </button>

          <button
            type="button"
            className="edit-form-submit"
            onClick={onDone}
            style={{
              padding: '8px 16px',
              backgroundColor: 'red',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Huỷ
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditNewsContentForm;
