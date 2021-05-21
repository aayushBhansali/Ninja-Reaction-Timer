<template>
    <div class="result">
        <p> Reaction Time : {{ this.score }} ms </p>
        <p> {{ this.rank }} </p>
    </div>
</template>

<script>
export default {
    props: ['score'],

    data() {
        return {
            rank: null
        }
    },

    mounted() {
        if (this.score < 260) {
            this.rank = "Ninja Fingers";
        } else if (this.score < 400) {
            this.rank = "Rapid Reflexes";
        } else {
            this.rank = "Snail Pace";
        }
    }
}
</script>

<style>
    .result {
        font-size: 1em;
        font-weight: bold;
        color: #0faf87;
    }
</style>