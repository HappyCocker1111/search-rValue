export default{
  name: 'app',
  data(){
    return{
      api_key: process.env.VUE_APP_MY_API_KEY,
      url_base: 'https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?[parameter]=',
      query: '',
    }
  },
  methods: {
    fetchGoods(e){
      if(e.key == "Enter"){
        console.log(`${this.api_key}`)
      }
    }
  }
}