<template>
<table>
    <tr>
        <th>Fach</th>
        <th>Noten</th>
        <th>Durchschnitt</th>
    </tr>
    <tr v-for="subject in subjects" v-bind:key="subject">
        <td>{{ subject.name }}</td>
        <td>{{ subject.grades.toString() }}</td>
        <td>{{ getAverage(subject.grades) }}</td>
    </tr>
</table>

<p>Durchschnitt über alle Fächer: {{ getOverAllAverage }}</p>
<p>Mangelpunkte: {{ getMangelPunkte }}</p>
</template>

<script>
export default {
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
            return Math.round(res * 2) / 2;
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
            return Math.round(res * 2) / 2;
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
            return res;
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
