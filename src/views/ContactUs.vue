<template>
    <div class="mx-2">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input v-model="data.email" type="text" class="form-control" id="exampleFormControlInput1"
                placeholder="name@example.com">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea v-model="data.message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button @click="sendMail" class="btn btn-primary">Submit</button>
    </div>
</template>

<script setup>
import { reactive } from 'vue';


let data = reactive({ email: "", message: "" });

function sendMail(e) {
    console.log(data.email);
    e.preventDefault();
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "miheerkumarvarasda@gmail.com",
        Password: "90C43AA9D9D7948F32DF351E84AD09253770",
        To: "miheerkumarvarasda@gmail.com",
        From: data.email,
        Subject: "Contact US",
        Body: data.message
    }).then(
        message => alert(message)
    );
}

</script>

<style></style>