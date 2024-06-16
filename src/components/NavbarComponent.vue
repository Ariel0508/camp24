<template>
  <header class="fixed-top border-bottom-1 border-gray">
      <div class="container">
        <nav class="menu d-f ai-c">
          <h1 class="logo">
            <RouterLink to="/" @click="openMenu">
              <img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/a0deba953fc5322a513e717e7c24b25fa3d946f8/2024%20web-camp/logo.svg" alt="logo">
            </RouterLink>
          </h1>
          <button class="menu-btn cursor-p" id="menu-btn" @click="openMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path class="line top-line" d="M4 6l16 0" />
              <path class="line middle-line" d=" M4 12l16 0" />
              <path class="line bottom-line" d=" M4 18l16 0" />
            </svg>
          </button>
          <ul class="menu-list text-center">
            <li class="menu-item">
              <RouterLink to="/" class="nav-hover" @click="openMenu">首頁
                <span class="span-top"></span>
                <span class="span-right"></span>
                <span class="span-bottom"></span>
                <span class="span-left"></span>
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/portfolio" class="nav-hover" @click="openMenu">作品集
                <span class="span-top"></span>
                <span class="span-right"></span>
                <span class="span-bottom"></span>
                <span class="span-left"></span>
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/service" class="nav-hover" @click="openMenu">服務項目
                <span class="span-top"></span>
                <span class="span-right"></span>
                <span class="span-bottom"></span>
                <span class="span-left"></span>
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/blog" class="nav-hover"
              :class="{ active: $route.path === '/blog' || $route.path === '/blogVr' }"
               @click="openMenu">部落格
                <span class="span-top"></span>
                <span class="span-right"></span>
                <span class="span-bottom"></span>
                <span class="span-left"></span>
              </RouterLink>
            </li>
            <li class="menu-item">
              <RouterLink to="/contact" class="nav-hover" @click="openMenu">聯絡我
                <span class="span-top"></span>
                <span class="span-right"></span>
                <span class="span-bottom"></span>
                <span class="span-left"></span>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
  </header>
  <div class="mb"></div>
  <div class="navMaskEffect"></div>
</template>

<script setup>
const openMenu = () => {
  const menu = document.querySelector('.menu');
  const maskEffect = document.querySelector('.navMaskEffect');
  menu.classList.toggle('open');
  maskEffect.classList.toggle('navMask');
};
</script>

<style lang="scss">
// /*共用 */
// header {
//   background: #ffffff;
//   z-index: 10;
// }

// .menu-btn {
//   display: none;
// }

// /* mobile */
// @media screen and (max-width: 767px) {
//   header {
//     height: 56px;
//   }

//   header .container {
//     padding: 0;
//   }

//   .mb {
//     margin-bottom: 56px;
//   }

//   .logo {
//     width: 74px;
//     height: 33px;
//   }

//   .menu {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     position: relative;
//     height: 56px;
//     padding: 0 12px;

//     .menu-list {
//       display: flex;
//       flex-direction: column;
//       background: #fff;
//       position: absolute;
//       top: 100%;
//       left: 0;
//       width: 100%;
//       padding: 40px 0 16px;
//       scale: 0;
//       transition: height 0.5s ease-in-out;
//       transform-origin: center;

//       .menu-item {
//         margin-bottom: 24px;

//         a {
//           font-size: 20px;
//         }
//       }
//     }
//   }

//   .menu.open .menu-list {
//     scale: 1;
//   }

//   .menu-btn {
//     display: block;
//     border: none;
//     width: 40px;
//     height: 40px;
//     padding: 0;
//     background: transparent;
//   }

//   .menu.open .menu-btn .top-line {
//     rotate: 45deg;
//     translate: 0 -4px;
//   }

//   .menu.open .menu-btn .middle-line {
//     opacity: 0;
//   }

//   .menu.open .menu-btn .bottom-line {
//     rotate: -45deg;
//     translate: 0 4px;
//   }

//   .menu-btn .line {
//     transition: rotate 0.3s linear, opacity 0.3s linear;
//     transform-origin: left center;
//   }

//   /*遮罩效果*/
//   .navMask {
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.7);
//     z-index: 9;
//   }
// }

// /*ipad */
// @media screen and (min-width: 768px) {
//   header {
//     height: 96px;
//   }

//   .mb {
//     margin-bottom: 96px;
//   }

//   header .container {
//     position: relative;
//   }

//   .menu {
//     height: 96px;
//   }

//   .logo {
//     width: 90px;
//     height: 40px;
//   }

//   .menu-list {
//     position: absolute;
//     top: 0;
//     left: 50%;
//     transform: translateX(-50%);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 15px;
//     padding: 32px 0;
//   }
// }

// /*pc */
// @media screen and (min-width: 1200px) {
//   .menu-list {
//     gap: 40px;
//   }
// }
</style>
