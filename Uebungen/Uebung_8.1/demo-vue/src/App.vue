<template>
<div>
    <div v-for="bind in subjects" v-bind:key="bind">
        <Subject :title=bind.name :grades=bind.grades :avg=getAverage(bind.grades) />
    </div>

    <Summary :avg=getOverAllAverage :punkte=getMangelPunkte />
</div>
</template>

<script>
import Subject from './components/Subject'
import Summary from './components/Summary'

export default {
    components: {Subject, Summary},
    data: function () {
        return {
            subjects: [{
                    name: "Mathematik",
                    grades: [5, 4.7, 3.5, 4.1],
                },
                {
                    name: "Geschichte",
                    grades: [5.5, 4.9, 5.75],
                },
                {
                    name: "Physik",
                    grades: [2, 2.7, 4.3],
                },
                {
                    name: "Deutsch",
                    grades: [4.25, 4.1, 3.5],
                },
            ],
        };
    },
    methods: {
        getAverage: function (grades) {
            let res = 0;
            grades.forEach((grade) => {
                res += grade;
            });
            res = res / grades.length;
            return (Math.round(res * 2) / 2).toString();
        },
    },
    computed: {
        getOverAllAverage: function () {
            let finalgrades = [];
            this.subjects.forEach((subject) => {
                finalgrades = [...finalgrades, ...subject.grades];
            });
            let res = 0;
            finalgrades.forEach((grade) => {
                res += grade;
            });
            res = res / finalgrades.length;
            return (Math.round(res * 2) / 2).toString();
        },
        getMangelPunkte: function () {
            let finalgrades = [];
            this.subjects.forEach((subject) => {
                finalgrades = [...finalgrades, ...subject.grades];
            });
            let res = 0;
            finalgrades.forEach((grade) => {
                if (grade < 4) {
                    res++;
                }
            });
            return res.toString();
        },
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
