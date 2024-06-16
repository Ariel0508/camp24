<template>
  <footer>
    <div class="container-fluid d-f jc-sb ai-c">
      <div class="container">
        <div class="row d-f ai-c jc-sb">
          <div class="contact col-12 col-md-6 ">
            <RouterLink to="/" class="footer-logo"><img src="https://raw.githubusercontent.com/hexschool/2022-web-layout-training/2f8d8c7a6133b448ecff5bf0a3d282b87b7c6a7e/2024%20web-camp/logo.svg" alt="logo" />
            </RouterLink>
            <p class="mt-24">若有數位產品設計和開發相關問題</p>
            <p class="mb-24">歡迎填寫表單，或直接與我聯絡！</p>
            <a href="mailto:service@hexschool.com" class="text-gray-dark">service@hexschool.com</a>
          </div>
          <div class="social d-f fd-c jc-sb ai-c col-12 col-md-3">
            <RouterLink to="/contact" class="w100 bg-dark border-radius-8
            text-light mb-24 d-f ai-c fz-20">
              <img src="https://hex2024.worksbyaaron.com/image/icon/list.svg" class="mr-8 ml-24 mb-4 mt-4" alt="" />
              <span>填寫表單</span>
            </RouterLink>
            <a href="#" target="_blank" class="w100 bg-light border-radius-8
            border-1 border-gray-200 mb-24 d-f ai-c fz-20">
              <img src="https://hex2024.worksbyaaron.com/image/icon/instagram.svg" class="mr-8 ml-24 mb-4 mt-4" alt="ig" />
              <span>hexschool_demo</span>
            </a>
            <a href="#" target="_blank" class="w100 bg-light border-radius-8
            border-1 border-gray-200 d-f ai-c fz-20">
              <img src="https://hex2024.worksbyaaron.com/image/icon/facebook.svg" class="mr-8 ml-24 mb-4 mt-4" alt="facebook" />
              <span>hexschoolTW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
</script>

<style lang="scss">
// footer {
//   background: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/footer-bg-sm.png?raw=true") no-repeat;
// }

// .footer-logo {
//   width: 120px;
//   height: 54px;
//   margin: 0 auto;
// }

// @media (max-width: 767px) {
//   .contact {
//     margin-top: 40px;
//     text-align: center;
//   }

//   .social {
//     margin: 40px auto;

//     a {
//       width: 306px;
//       height: 64px;
//     }
//   }
// }

// @media (min-width: 768px) {
//   footer {
//     background: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/footer-bg-lg.png?raw=true") no-repeat;
//   }

//   footer .container {
//     width: 1296px;
//     margin: 80px auto;
//   }

//   .contact {
//     text-align: left;
//     font-size: 16px;
//   }

//   .social {
//     margin: 0;

//     a {
//       height: 72px;
//       font-size: 16px;

//       img {
//         margin-block: 8px;
//         margin-inline: 0px;
//       }
//     }
//   }
// }

// @media screen and (min-width: 1200px) {
//   .contact {
//     font-size: 20px;
//   }
//   .social {
//     a {
//       font-size: 20px;
//       img {
//         margin-right: 8px;
//         margin-left: 24px;
//       }
//     }
// }
// }
</style>
