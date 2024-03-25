<template>
    <div class="row">
        <div class="col-4 text-center">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-warning fw-bold">
                        {{ data.confirmCases }}
                    </h3>
                    <p>
                        Total Confirmed Cases
                    </p>
                </div>
            </div>
        </div>
        <div class="col-4 text-center">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-danger fw-bold">
                        {{ data.mortality }}
                    </h3>
                    <p>
                        Total Deaths Cases
                    </p>
                </div>
            </div>
        </div>
        <div class="col-4 text-center">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-success fw-bold">
                        {{ data.recoveredCases }}
                    </h3>
                    <p>
                        Total Recovered Cases
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import {reactive} from "vue";

let data=reactive({confirmCases:"",recoveredCases:"",mortality:""});
const options = {
    method: 'GET',
    url: 'https://coronavirus-smartable.p.rapidapi.com/stats/v1/IN/',
    headers: {
        'X-RapidAPI-Key': '3529614e57msh68e37317fe6936dp1c7e7fjsnb6aeb4341521',
        'X-RapidAPI-Host': 'coronavirus-smartable.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    data.confirmCases = response.data.stats.totalConfirmedCases;
    data.mortality=response.data.stats.totalDeaths;
    data.recoveredCases=response.data.stats.totalRecoveredCases;
    console.log(response.data.stats.totalConfirmedCases);
} catch (error) {
    console.error(error);
}
</script>

<style></style>
