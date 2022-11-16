import React from 'react';
import ReactDOM from 'react-dom/client';
//import css: Ảnh hưởng toàn bộ ứng dụng
import './index.scss';
import BaiTapShop from './props/BaiTapShop/BaiTapShop';



const root = ReactDOM.createRoot(document.getElementById('root'));

//JSX 
root.render(
  <>
  <BaiTapShop></BaiTapShop>
  </>
)
