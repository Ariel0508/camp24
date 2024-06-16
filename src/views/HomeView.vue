<template>
<div class="container-fluid home_banner d-f fd-c">
<div class="row">
<div class="home_banner_img col-12 col-md-12 col-lg-7">
</div>
  <div class="home_hero col-12 col-md-12 col-lg-5">
  <div class="home_hero_content py-40 text-center col-9 col-lg-8 m-auto">
<h2 class="home_hero_content_title fz-32 fw-bold lh-12 mb-24">Hi！我是 Noel</h2>
<p class="home_hero_content_title_text fz-20 mb-8 text-gray-300">具有 10 年經驗的
<span class="underline underline-1">資深 UI 設計師</span>兼
<span class="underline underline-2">前端工程師</span>
</p>

<p class="home_hero_content_title_text fz-20 text-gray-300">
   技術雙修並行，</p>
<p class="home_hero_content_title_text fz-20 mb-16 text-gray-300">熱衷於優化使用者的網頁體驗</p>
<p class="home_hero_content_title_text mb-24 text-gray-200">
   WEB DEVELOPMENT / BRANDING /
UI / UX / APP DESIGN
</p>
<ul class="home_hero_content_list d-f jc-c gap-16 col-7 m-auto">
<li class="home_hero_content_list_item">
<img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/instagram.svg" alt="hero icon" class="hero icon">
</li>
<li class="home_hero_content_list_item">
<img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/facebook.svg" alt="hero icon" class="hero icon">
</li>
<li class="home_hero_content_list_item">
<img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/youtube.svg" alt="hero icon" class="hero icon">
</li>
</ul>
  </div>
  </div>
</div>
</div>
   <div class="container-fluid home_service bg-gray-100">
     <div class="container pb-80 service">
       <div class="title-text text-center py-40">
         <h2 class="title d-f jc-c">
           <span class="fz-24 fw-bold lh-15 px-16">服務項目</span>
         </h2>
       </div>
       <ul class="service_list d-f jc-c fd-c ai-c gap-24">
         <li class="service_list_item border-radius-16 d-f ai-c jc-c">
           <div class="service_list_item_content text-center">
             <img
               src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-visual.svg"
               alt="icon"
               class="service_list_item_icon"
             />
             <h3 class="service_list_item_title text-light fz-24 fw-bold">
               平面設計
             </h3>
           </div>
         </li>
         <li class="service_list_item border-radius-16 d-f ai-c jc-c">
           <div class="service_list_item_content text-center">
             <img
               src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-ui.svg"
               alt="icon"
               class="service_list_item_icon"
             />
             <h3 class="service_list_item_title text-light fz-24 fw-bold">
               UI 設計
             </h3>
           </div>
         </li>
         <li class="service_list_item border-radius-16 d-f ai-c jc-c">
           <div class="service_list_item_content text-center">
             <img
               src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-html%26css.svg"
               alt="icon"
               class="service_list_item_icon"
             />
             <h3 class="service_list_item_title text-light fz-24 fw-bold">
               切版服務
             </h3>
           </div>
         </li>
         <li class="service_list_item border-radius-16 d-f ai-c jc-c">
           <div class="service_list_item_content text-center">
             <img
               src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/service-item-front-end.svg"
               alt="icon"
               class="service_list_item_icon"
             />
             <h3 class="service_list_item_title text-light fz-24 fw-bold">
               前端開發
             </h3>
           </div>
         </li>
       </ul>
       <div class="cooperate mt-40 m-auto text-center">
         <h3 class="cooperate_title fz-20 fw-bold">想要合作或瞭解更多？</h3>
         <RouterLink
           to="/service"
           class="cooperate_btn border-radius-5 text-light bg-dark py-8 px-16 mt-24"
         >
           <div class="cooperate_btn_content d-f ai-c">
             詳細內容與合作流程
             <span class="material-symbols-outlined text-light ml-8 fz-16"
               >arrow_forward</span
             >
           </div>
         </RouterLink>
       </div>
     </div>
   </div>
   <div class="container pt-40 pb-80 home_article">
     <div class="title-text text-center">
       <h2 class="title d-f jc-c mb-40">
         <span class="fz-24 fw-bold lh-15 px-16">精選文章</span>
       </h2>
     </div>
     <swiper
        :slidesPerView="3"
        :spaceBetween="24"
        :pagination="{
          clickable: true,
        }"
        :breakpoints="{
          '375': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          '1200':{
            slidesPerView: 3,
            spaceBetween: 24,
          }
        }"
        :grabCursor="true"
        :freeMode="true"
        :modules="modules"
        class="mySwiper"
        :keyboard="true"
      >
    <swiper-slide>
    <li class="blog_card_list_item cursor-p">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image1.png?raw=true"
              alt="img"
              class="blog_card_list_item_img border-1 border-gray border-radius-8
              mb-16"
            />
            <div class="blog_card_list_item_content">
              <div
                class="blog_card_list_item_content_info ai-c d-f jc-sb mb-16"
              >
                <div class="date text-gray-300">2024/02/10</div>
                <div class="tag border-radius-16 bg-gray px-12 py-4">
                  UI/UX 新知
                </div>
              </div>
              <h2 class="blog_card_list_item_content_title fz-20 fw-bold lh-12 mb-12">
               Vision Pro 登場！Vision Pro UI/UX 設計重點大公開 (上)
              </h2>
            </div>
   </li>
   </swiper-slide>
    <swiper-slide>
    <li class="blog_card_list_item cursor-p">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image2.png?raw=true"
              alt="img"
              class="blog_card_list_item_img border-1 border-gray border-radius-8
              mb-16"
            />
            <div class="blog_card_list_item_content">
              <div
                class="blog_card_list_item_content_info ai-c d-f jc-sb mb-16"
              >
                <div class="date text-gray-300">2023/11/20</div>
                <div class="tag border-radius-16 bg-gray px-12 py-4">
                  UI/UX 新知
                </div>
              </div>
              <h2 class="blog_card_list_item_content_title fz-20 fw-bold lh-12 mb-12">
               給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (下)
              </h2>
            </div>
   </li>
   </swiper-slide>
    <swiper-slide>
    <li class="blog_card_list_item cursor-p">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image3.png?raw=true"
              alt="img"
              class="blog_card_list_item_img border-1 border-gray border-radius-8
              mb-16"
            />
            <div class="blog_card_list_item_content">
              <div
                class="blog_card_list_item_content_info ai-c d-f jc-sb mb-16"
              >
                <div class="date text-gray-300">2023/10/18</div>
                <div class="tag border-radius-16 bg-gray px-12 py-4">
                  UI/UX 新知
                </div>
              </div>
              <h2 class="blog_card_list_item_content_title fz-20 fw-bold lh-12 mb-12">
               給設計師和工程師的 Figma-Dev Mode 開發模式使用指南 (上)
              </h2>
            </div>
   </li>
   </swiper-slide>
    <swiper-slide>
    <li class="blog_card_list_item cursor-p">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image4.png?raw=true"
              alt="img"
              class="blog_card_list_item_img border-1 border-gray border-radius-8
              mb-16"
            />
            <div class="blog_card_list_item_content">
              <div
                class="blog_card_list_item_content_info ai-c d-f jc-sb mb-16"
              >
                <div class="date text-gray-300">2023/09/200</div>
                <div class="tag border-radius-16 bg-gray px-12 py-4">
                  數位產品設計
                </div>
              </div>
              <h2 class="blog_card_list_item_content_title fz-20 fw-bold lh-12 mb-12">
               虛擬實境 (VR) 介面設計對使用者沈浸感影響的研究
              </h2>
            </div>
   </li>
   </swiper-slide>
    <swiper-slide>
    <li class="blog_card_list_item cursor-p">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image5.png?raw=true"
              alt="img"
              class="blog_card_list_item_img border-1 border-gray border-radius-8
              mb-16"
            />
            <div class="blog_card_list_item_content">
              <div
                class="blog_card_list_item_content_info ai-c d-f jc-sb mb-16"
              >
                <div class="date text-gray-300">2023/08/10</div>
                <div class="tag border-radius-16 bg-gray px-12 py-4">
                  數位產品設計
                </div>
              </div>
              <h2 class="blog_card_list_item_content_title fz-20 fw-bold lh-12 mb-12">
               想打到目標受眾？先讓設計師跟你都瞭解他們痛在哪！
              </h2>
            </div>
   </li>
   </swiper-slide>
    <swiper-slide>
    <li class="blog_card_list_item cursor-p">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image6.png?raw=true"
              alt="img"
              class="blog_card_list_item_img border-1 border-gray border-radius-8
              mb-16"
            />
            <div class="blog_card_list_item_content">
              <div
                class="blog_card_list_item_content_info ai-c d-f jc-sb mb-16"
              >
                <div class="date text-gray-300">2023/07/03</div>
                <div class="tag border-radius-16 bg-gray px-12 py-4">
                  前端開發
                </div>
              </div>
              <h2 class="blog_card_list_item_content_title fz-20 fw-bold lh-12 mb-12">
               React vs. Vue，哪種前端框架比較好用？從三大面向談起
              </h2>
            </div>
   </li>
   </swiper-slide>
    <swiper-slide>
    <li class="blog_card_list_item cursor-p">
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/article-image7.png?raw=true"
              alt="img"
              class="blog_card_list_item_img border-1 border-gray border-radius-8
              mb-16"
            />
            <div class="blog_card_list_item_content">
              <div
                class="blog_card_list_item_content_info ai-c d-f jc-sb mb-16"
              >
                <div class="date text-gray-300">2023/07/10</div>
                <div class="tag border-radius-16 bg-gray px-12 py-4">
                  UI/UX 新知
                </div>
              </div>
              <h2 class="blog_card_list_item_content_title fz-20 fw-bold lh-12 mb-12">
                Vision Pro 來了！UIUX 設計師的未來在哪裡？
              </h2>
            </div>
   </li>
   </swiper-slide>
  </swiper>
  <div class="text-center">
    <RouterLink to="/blog" class="articleBtn">
    <div class="d-f ai-c gap-8">
      更多文章
      <span class="material-symbols-outlined">arrow_forward</span>
    </div>
    </RouterLink>
  </div>
   </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';

import {
  Pagination,
  Keyboard,
} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Keyboard],
    };
  },
};
</script>
