<template>
  <div class="viewport">
    <div class="stacked-bar-graph">
      <div class="bar" v-for="bar in bars" v-bind:style="{ width: bar.width+ '%' }">
        <span class="bar-title">
          {{bar.name}}
        </span><br>
        <span>
          {{bar.value}}
        </span><br>
        <span class="bar-percentage">
          {{ bar.width }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'stacked-bar-chart',
    data: function data() {
      return {
        bars: [
          { name: 'ABC', value: 2200 },
          { name: '#1', value: 353 },
          { name: 'FOO', value: 1069 },
          { name: 'BAR', value: 764 },
          // { name: '.', value: 120 },
          // { name: '#', value: 190 },
          // { name: '&', value: 220 },
          // { name: '+', value: 300},
        ],
        barsSum: 999,
      };
    },

    created: function created() {
      this.barsSum = this.getBarSum();
      this.setRelativeBarWidth();
    },

    /* eslint no-param-reassign: ["error", { "props": false }] */
    methods: {
      sort: function sort() {
        // greater values first
        return this.bars.sort((a, b) => b.value - a.value);
      },

      getBarSum: function getBarSum() {
        const buildBarSum = (sum, bar) => sum + bar.value;
        // initialize sum with 0;
        return this.bars.reduce(buildBarSum, 0);
      },

      setRelativeBarWidth: function relativeBarWidth() {
        // map % to of bar.value relative to sum of all values

        this.bars.forEach((bar) => {
          const relativeWidth = (100 / this.barsSum) * bar.value;
          bar.width = this.precisionRound(relativeWidth, 2);
        });
      },

      precisionRound: function precisionRound(number, precision) {
        const factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
      },
    },
  };
</script>

<style lang="scss">
$chartcolors: #608FA1, #FF7F50, #CD853F, #F4A460, #DEB887, #E6AB6B,  #FFA07A, #E9967A, #FF7F50;

.viewport {
  width: 90vw;
  height: 90vh;
  padding: 5vh 5vw
}

.stacked-bar-graph:empty::before {
    content: "no data defined";
  }

.stacked-bar-graph {
  width: 100%;
  height: 100%;
  background: #EEE;
  color:#414042;
  font-family: arial, sans-serif;

  .bar {
    display: block;
    height: 6em;
    float: left;
    box-sizing: border-box;
    font-weight: bold;
    > span{
      &:first-child{
        padding-top: 0.6rem;
      }

      display: inline-block;
      padding-left: 0.6rem;
    }

    > .bar-title {

      color: white;
      font-size: 2em;
    }

    > .bar-percentage {
      opacity: 0.3;
    }
  }

  @each $chartcolor in $chartcolors {
    $colorindex: index($chartcolors, $chartcolor);

    & > .bar:nth-child(#{$colorindex}) {
      background-color: #{$chartcolor};
    }
  }
}

</style>
