<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="basic-calculator">
    <div class="display">{{number || '0'}}</div>
    <div @click="clear" class="btn clear">C</div>
    <div @click="remove" class="btn remove">Del</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="multiplication" class="btn operator">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="substraction" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="addition()" class="btn operator">+</div>
    <div @click="append('0')" class="btn">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="division" class="btn operator">/</div>
    <div @click="equal" class="btn operator">=</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      prevNum: null,
      number: '',
      operator:null,
      operatorClicked: false
    }
  },
  methods:{
    clear(){
        this.number='';
    },
    append(num){
      if(this.operatorClicked){
        this.number='',
        this.operatorClicked=false;
      }
      this.number=`${this.number}${num}`;
    },
    remove(){
      this.number=this.number.slice(0,-1);
    },
    setPrevNum(){
      this.prevNum = this.number;
      this.operatorClicked=true;
    },
    addition(){
      this.operator = (a,b) => a+b;
      this.setPrevNum();
    },
    substraction(){
      this.operator = (a,b) => a-b;
      this.setPrevNum();
    },
    division(){
      this.operator = (a,b) => a/b;
      this.setPrevNum();
    },
    multiplication(){
      this.operator = (a,b) => a*b;
      this.setPrevNum();
    },
    equal(){
      this.number=`${this.operator(parseFloat(this.prevNum),parseFloat(this.number))}`;
      this.prevNum='';
    },
    dot(){
      if(this.number.indexOf('.')===-1){
        this.append('.');
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.basic-calculator{
  display: grid;
  grid-template-columns: repeat(4,lfr);
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
}

.display{
  grid-column: 1/5;
  background-color: #333;
  color: #fff;
}
.clear{
  grid-column: 1/3;
}
.remove{
  grid-column: 3/5;
}
.btn:hover{
  background-color:gainsboro;
}
.btn{
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
}
.operator:hover{
  background-color:#228999;
}
.operator{
  background-color: #2699ab;
  color: #fff;
}
</style>
