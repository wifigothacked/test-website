<template>
    <th scope="row">{{ count+1 }}</th>
    <td>{{state}}</td>
    <td class="text-center">{{confirmed}}</td>
    <td class="text-center">{{recovered}}</td>
    <td class="text-center">{{deaths}}</td>
    <td class="text-center">{{active}}</td>
</template>

<script setup>
const props=defineProps(['count','state','confirmed','recovered','deaths','active']);
</script>

<style>
</style>