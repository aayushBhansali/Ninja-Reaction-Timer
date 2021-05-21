<template>
<div class="container">
  <h1> Ninja Reaction Timer </h1>
  <img style="margin-bottom: 2em;" src="./assets/ninja.jpg" width="200"/> 
  <button class="button" @click="start" :disabled="isPlaying"> Play </button>
  <div v-if="!isPlaying" class="instructions">
    <p> Click on the box as soon as you see it </p>
  </div>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Result v-if="showResult" :score="score"/>
</div>
</template>

<script>
import Block from "./components/Block"
import Result from "./components/Result"

export default {
  name: 'App',
  components: { Block, Result },

  data() {
    return {
      isPlaying: false,
      delay: null,
      score: 0,
      showScore: false,
      showResult: false
    }
  },

  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showScore = false;
      this.showResult = false;
    },

    endGame (reactionTime) {
      this.score = reactionTime;
      this.showScore = true;
      this.isPlaying = false;
      this.showResult = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button {
  padding: 1em;
  border: none;
  border-radius: 10px;
  width: 10%;
  font-weight :bold;
  font-size: medium;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

.button[disabled] {
  cursor: not-allowed;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.instructions {
  width: 35%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
}

@media (max-width: 600px) {
  .button {
    width: 25%;
  }

  .instructions {
    width: 50%;
    text-align: justify;
  }
}
</style>
