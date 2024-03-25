<template>
    <div class="container">
        <div class="row text-center">
            <div class="col">
                <h1>Covid 19 Report Statewise</h1>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-4 text-center">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-warning fw-bold">
                            {{ totalCases.Confirmed }}
                        </h3>
                        <p>
                            Total Cases Confirmed
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4 text-center">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-danger fw-bold">
                            {{ totalCases.Deaths }}
                        </h3>
                        <p>
                            Total Cases Deaths
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4 text-center">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title text-success fw-bold">
                            {{ totalCases.Recovered }}
                        </h3>
                        <p>
                            Total Cases Recovered
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <table class="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">State</th>
                        <th scope="col">Confirmed</th>
                        <th scope="col">Recovered</th>
                        <th scope="col">Deaths</th>
                        <th scope="col">Active</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(acase, i) in cases">
                        <CovidStateHelper :count="i" :state="acase.State" :confirmed="acase.Confirmed"
                            :recovered="acase.Recovered" :deaths="acase.Deaths" :active="acase.Active" />
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { cases, totalNoCases } from "../../covidCasesData.js";
import CovidStateHelper from "../components/CovidStateHelper.vue";
const totalCases = totalNoCases;
</script>

<style></style>