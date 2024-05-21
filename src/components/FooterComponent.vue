<template>
  <footer>
    <div class="container-fluid d-f jc-sb ai-c">
      <div class="container">
        <div class="row d-f ai-c jc-sb">
          <div class="contact col-md-6 col-12">
            <RouterLink to="/" class="footer-logo"><img src="../assets/images/footer-logo.png" alt="logo" />
            </RouterLink>
            <p class="mt-24">若有數位產品設計和開發相關問題</p>
            <p class="mb-24">歡迎填寫表單，或直接與我聯絡！</p>
            <a href="mailto:service@hexschool.com" class="text-gray-dark">service@hexschool.com</a>
          </div>
          <div class="social d-f fd-c jc-sb ai-c col-md-4 col-12">
            <RouterLink to="/contact" class="w100 bg-dark border-radius-8 text-light mb-24 d-f ai-c">
              <img src="../assets/images/list.png" class="mr-8 ml-24 mb-4 mt-4" alt="" />
              <span>填寫表單</span>
            </RouterLink>
            <a href="#" target="_blank" class="w100 bg-light border-radius-8 border-1 border-gray-200 mb-24 d-f ai-c">
              <img src="../assets/images/Vector.png" class="mr-8 ml-24 mb-4 mt-4" alt="" />
              <span>hexschool_demo</span>
            </a>
            <a href="#" target="_blank" class="w100 bg-light border-radius-8 border-1 border-gray-200 d-f ai-c">
              <img src="../assets/images/Vector-1.png" class="mr-8 ml-24 mb-4 mt-4" alt="" />
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
footer {
  background: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/footer-bg-sm.png?raw=true") no-repeat;
  height: 538px;
}

.footer-logo {
  width: 120px;
  height: 54px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .contact {
    margin-top: 40px;
    text-align: center;
  }

  .social {
    margin: 40px auto;

    a {
      width: 306px;
      height: 64px;
    }
  }
}

@media (min-width: 768px) {
  footer {
    background: url("https://github.com/hexschool/2022-web-layout-training/blob/main/2024%20web-camp/footer-bg-lg.png?raw=true") no-repeat;
    height: 424px;
  }

  footer .container {
    width: 1296px;
    margin: 80px auto;
  }

  .contact {
    text-align: left;
  }

  .social {
    margin: 0;

    a {
      height: 72px;

      img {
        margin-block: 8px;
      }
    }
  }
}
</style>
