export default{
  name: 'app',
  data(){
    return{
      api_key: process.env.VUE_APP_MY_API_KEY,
      url_base: 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?applicationId=',
      query: '',
    }
  },
  methods: {
    fetchGoods(e){
      if(e.key == "Enter"){
        const eURL = encodeURIComponent(`${this.query}`)
        fetch(`${this.url_base}${process.env.VUE_APP_MY_API_KEY}&keyword=${eURL}&sort=%2BitemPrice&minPrice=10`)
        .then(res => {
          return res.json();
        }).then(this.setResults);
      }
    },
    setResults(results){
      this.rakutenGoods = results.Items;
      console.log(this.rakutenGoods);
    },
  }
}