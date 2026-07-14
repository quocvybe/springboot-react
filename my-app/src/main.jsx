import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Kiểm tra phần tử root tồn tại trong DOM để tránh lỗi runtime khi không có <div id="root"></div>
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Không tìm thấy phần tử #root trong HTML. Vui lòng kiểm tra file public/index.html.');
}

// Khởi tạo React 18 và bọc toàn bộ ứng dụng bằng StrictMode để bật các kiểm tra phát triển.
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
