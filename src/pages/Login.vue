<template>
  <div class="login">
    <div class="login-form">
      <h1 class="login-form__title">會員登入</h1>
      <div class="form-group">
        <div class="form-group__icon"><i class="fas fa-user"></i></div>
        <input type="text" class="form-group__input" placeholder="電子信箱/手機號碼">
      </div>
      <div class="form-group" style="margin-top: 13px;">
        <div class="form-group__icon"><i class="fas fa-key"></i></div>
        <input type="text" class="form-group__input" placeholder="請輸入使用者密碼">
      </div>
      <div class="form-check">
        <dessert-checkbox/>
      </div>
      <button class="login-form__submit">登入帳號</button>
    </div>
    <div class="social-form">
      <h2 class="social-form__title">
        <span>連結社群帳號</span>
      </h2>
      <ul class="social-form__btn-group">
        <li class="social-form__btn-group-item img-fb"></li>
        <li class="social-form__btn-group-item img-google"></li>
        <li class="social-form__btn-group-item img-yahoo"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import DessertCheckbox from '../components/dessertCheckbox'
export default {
  components: {
    DessertCheckbox
  }
}
</script>

<style>

</style>
