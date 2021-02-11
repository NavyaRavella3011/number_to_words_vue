<template>
  <div id="app">
    <div class="text-h6">Numbers to words converter</div>
    <input type="number" v-model="inputNumber" @keyup="inWords($event.target.value)" placeholder="Enter number" />
    <div class="text-h6 q-mt-lg">{{output}}</div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      output: '',
      inputNumber: '',
      a: [
        '',
        'one ',
        'two ',
        'three ',
        'four ',
        'five ',
        'six ',
        'seven ',
        'eight ',
        'nine ',
        'ten ',
        'eleven ',
        'twelve ',
        'thirteen ',
        'fourteen ',
        'fifteen ',
        'sixteen ',
        'seventeen ',
        'eighteen ',
        'nineteen ',
      ],
      b: [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety',
      ],
    };
  },
  methods: {
    inWords(num) {
      if ((num = num.toString()).length > 9) this.output = 'overflow';
      let n = ('000000000' + num)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
      if (!n) return;
      var str = '';
      str +=
        n[1] != 0
          ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'crore '
          : '';
      str +=
        n[2] != 0
          ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'lakh '
          : '';
      str +=
        n[3] != 0
          ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'thousand '
          : '';
      str +=
        n[4] != 0
          ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'hundred '
          : '';
      str +=
        n[5] != 0
          ? (str != '' ? 'and ' : '') +
            (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]])
          : '';
      this.output = str;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

input {
  width: 250px;
  height: 35px;
  padding: 10px;
  border: 2px solid #1d1d1d;
  border-radius: 5px;
  margin-top: 2em;
}
</style>
