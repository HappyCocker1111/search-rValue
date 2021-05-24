<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input 
        type="text" 
        class="search-bar" 
        placeholder="検索..."
        v-model="query" 
        @keypress="fetchGoods"
        />
      </div>
    </main>
    <div id="items">
      <ul id="v-for-rakutenGoods" class="rakutenGoods-wrap">
        <li v-for="(rakutenGood, key) in rakutenGoods" :key="key">
          <a v-bind:href="rakutenGood.Item.itemUrl">
            <div class="ItemWap">
                <div class="ItemImages" v-for="(goodsImage, key) in rakutenGood.Item.mediumImageUrls" :key="key">
                  <img v-if="key == 0" v-bind:src="goodsImage.imageUrl">
                </div>
            </div>
            <div class="ItemDescription">
              <p>{{ rakutenGood.Item.itemName }}</p>
              <p>{{ rakutenGood.Item.itemPrice }}円</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script src="./js/api.js"></script>
<style src="./css/style.css"></style>


