<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input 
        type="text" 
        class="search-bar" 
        placeholder="Search...."
        v-model="query" 
        @keypress="fetchGoods"
        />
      </div>
    </main>
    <div id="items">
      <p>dddddd</p>
      <ul id="v-for-rakutenGoods" class="rakutenGoods-wrap">
        <li v-for="(rakutenGood, key) in rakutenGoods" :key="key">
          <a v-bind:href="rakutenGood.Item.itemUrl">
            <div class="ItemWap">
                <div class="ItemImages" v-for="(goodsImage, key) in rakutenGood.Item.mediumImageUrls" :key="key">
                  <img v-bind:src="goodsImage.imageUrl">
                </div>
                <div class="ItemDescription">
                  <!-- <p>{{ rakutenGood.Item.itemCaption }}</p> -->
                  <p>{{ rakutenGood.Item.catchcopy }}</p>
                  <p>{{ rakutenGood.Item.itemName }}</p>
                  <p>{{ rakutenGood.Item.itemPrice }}</p>
                  <p>{{ rakutenGood.Item.shopName }}</p>
                  <!-- <p>{{ rakutenGood.Item.itemUrl }}</p> -->
                </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script src="./js/api.js"></script>
<style src="./css/style.css"></style>


