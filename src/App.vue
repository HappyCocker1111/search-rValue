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
    <div id="hello-vue" class="demo">
      {{ testcomment }}Hwllo
    </div>
  </div>
</template>


<script src="./js/api.js"></script>
<style src="./css/style.css"></style>


