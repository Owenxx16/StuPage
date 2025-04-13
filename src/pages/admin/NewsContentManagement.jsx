import React, { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from "../../axiosInstance";
import './NewsContentForm.css';

const NewsContentForm = ({ newsId, onDone }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent('');
  }, [newsId]); // Reset content mỗi khi newsId thay đổi

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newsId || !content) {
      alert('Vui lòng nhập đầy đủ nội dung');
      return;
    }

    let tempContent = content;
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const images = doc.querySelectorAll('img');

    // Upload từng ảnh nếu là base64
    for (let img of images) {
      const src = img.getAttribute('src');
      if (src.startsWith('data:image/')) {
        const blob = await (await fetch(src)).blob();
        const formData = new FormData();
        formData.append('file', blob, 'image.png');

        try {
          const res = await axios.post('https://stupage.onrender.com/news_content/upload', formData);
          const realUrl = res.data.location;
          tempContent = tempContent.replace(src, realUrl); // Thay thế base64 bằng link thật
        } catch (error) {
          console.error('Lỗi upload ảnh:', error);
          alert('Không thể upload ảnh!');
          return;
        }
      }
    }

    // Gửi nội dung sau khi đã thay link ảnh
    try {
      const res = await axios.post('https://stupage.onrender.com/news_content', {
        news_id: newsId,
        content: tempContent,
      });

      alert('Tạo nội dung thành công!');
      console.log(res.data);
      setContent(''); // Reset sau khi gửi thành công
      if (onDone) onDone(); // Gọi callback nếu có
    } catch (error) {
      console.error('Error submitting:', error);
      alert('Lỗi khi gửi nội dung');
    }
  };

  return (
    <div className="news-form-container">
      <h2 className="news-form-title">Tạo nội dung cho bài viết ID: {newsId}</h2>
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

        <button
          type="submit"
          className="news-form-button"
        >
          Gửi bài viết
        </button>
      </form>
    </div>
  );
};

export default NewsContentForm;
