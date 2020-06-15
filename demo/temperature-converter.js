
const fahrenheitTemp = (x) => { return (x * 9 / 5) + 32 }
const Celsiustemp = (x) => { return (x - 32) *5/9 }

const area = new Vue({
    el: '#area',
    data: {
        area1: 'Maryville',
        temp1: 25,
        area2: 'Houston',
        temp2: 77,
        result1: "",
        result2: ""
    },
  
    mounted() {
        this.result1 = fahrenheitTemp(this.temp1);
        this.result2 = Celsiustemp(this.temp2);
    },
    methods: {
        fahTemp() {
            this.result1 = fahrenheitTemp(this.temp1);
        },
        celsTemp() {
            this.result2 = Celsiustemp(this.temp2);
        },
    }
})