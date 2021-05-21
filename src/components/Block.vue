<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        <h3> Click Me </h3>
    </div>
</template>

<script>
export default {
    props: ['delay'],

    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },

    mounted() {
        setInterval(() => {
            this.showBlock = true;
            this.startTimer();
        }, this.delay)
    },

    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10;
            }, 10);
        },

        stopTimer() {
            clearInterval(this.timer);
            this.$emit("end", this.reactionTime);
            console.log(this.reactionTime);
        }
    }
}
</script>

<style>
    .block {
        width: 40%;
        background: #0faf87;
        border-radius: 10px;
        color: white;
        margin: 2em auto;
        padding: 5em 0em;
    }
</style>