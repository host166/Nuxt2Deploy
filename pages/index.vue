<template>
  <section class="incWrap pages__home_wrap">
    你好 Nuxt SSR 和 SSG。
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return {
      fibCache: {}
    };
  },
  methods: {
    // 算法 - 斐波那契数列
    fib(n){
      console.count('次数');
      if( this.fibCache.hasOwnProperty(n) ){
        return this.fibCache[n];
      }
      let val = (n===0||n===1) ? 1 : this.fib(n-1) + this.fib(n-2);
      this.fibCache[n] = val;

      return val;
    },
    fibMain(){
      for(let i=0; i<9; i++){
        this.fib(i);
      }
    },
    // 算法 - 算出一下字母中连续出现最多的字母
    letter(str=''){
      // let str = 'aaaaabbbbbbcccccccddddeee';
      let i = 0,j = 1;
      let maxLetter = '', maxRepeatCount = 0;
      let result = {};

      while( i < str.length-1 ){
        if( str[i] !== str[j] ){
          console.log(`下标值${i}和${j}之间是连续相同的！！都是字母${str[i]}，重复了${j-i}次。`);
          if( (j-i) > maxRepeatCount ){
            maxRepeatCount = (j-i);
            maxLetter = str[i];
          }
          i = j;
        }
        j++;
      };
      
      result = {
        char: maxLetter,
        count: maxRepeatCount
      }
      console.log(result);
      return result;
    },
    letterMain(){
      this.letter('aaaaabbbbbbcccccccddddeee');
    },
    // 规则复用 - 递归
    deeploop(vals=[]){
      // example：{children:[{value:1,children:[]}]}
      let resultArray = [];
      // 写法1
      // for( let i=0,len=vals.length; i<len; i++ ){
      //   let item = vals[i];
      //   console.log('Array.isArray(item)', Array.isArray(item), item);
      //   if( typeof item==="number" ){
      //     resultArray.push({
      //       value: 1
      //     });
      //   }else if( Array.isArray(item) ){
      //     resultArray.push({
      //       children: this.deeploop(item)
      //     });
      //   }
      // }
      
      // 写法2
      if(typeof vals==="number"){
        return {
          value: vals
        }
      }else if( Array.isArray(vals) ){
        return {
          children: vals.map(opts=> this.deeploop(opts))
        }
      }

      return resultArray;
    },
    deeploopMain(){
      let newArr = this.deeploop([1,2,3,[4,5],[6,7,[8,[9,10],11],12],13]);
      console.log( `规则复用，递归结果：`, newArr );
    }
    
  },
  created(){
    // this.deeploopMain();
  },
  mounted(){

  }
}
</script>

<style scoped>
.pages__home_wrap{
  color:#000;
}
</style>