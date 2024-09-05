<template>
<head>

</head>
<body>
    <article>
        <a href="/src/assets/CV-de-Fran-ois-Croizer-main/index.html" target="blank">
            <img id="CV"src="/src/assets/Photo CV.png" alt="">
            <p id="CVlink">CV en HTML</p>
        </a>
    </article>
</body>
</template>

<script setup>

</script>

<style scoped>
article{
    border: 3px solid none;
    padding: 0%;
    width: 450px;
    height: 350px;
    border-radius: 10%;
}
article:hover{
    background-color: #BACEC1;
    border-color: #BACEC1;
    box-shadow: 10px 10px 8px 5px gray;
}
#CV{
    height: 264.734px;
    width: 327.75px;
    border-radius: 10% 10% 10% 10%;
    border: 3px solid #BACEC1;
}
#CVlink{
    text-align: center;
}
</style>