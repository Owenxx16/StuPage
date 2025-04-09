import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: '450px' }}>
      <iframe
        title="STU Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.544142754432!2d106.67721427590238!3d10.84587078931695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec8c8a6f4f1%3A0x1c5024b4f5b43ac5!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBDw7RuZyBOZ2jhu4cgU8OgaSBHw6BvbiAtIFNUIFRlY2huaWNhbCBDb2xsZWdl!5e0!3m2!1svi!2s!4v1712478974775!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
