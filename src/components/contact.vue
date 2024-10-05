<template>
<body>
    <section id="contact">
        <div>
            <h2>Me contacter</h2>
            <form action="mailto:francois.croizer64@gmail.com" method="post" enctype="text/plain">
                <input type="text" name="name" placeholder="Nom"><br>
                <input type="text" name="FirstName" placeholder="Prénom"><br>
                <input id="object" type="text" name="object" placeholder="objet"><br>
                <textarea name="message" id="message" rows="10" placeholder="message"></textarea>
                <button id="submitmessage" type="submit">Envoyer</button>
            </form>
        </div>
    </section>

</body>
</template>

<script setup>

</script>

<style scoped>
div{
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 10rem;
}
input{
    margin: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: #BACEC1;
}
#message{
    margin: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: #BACEC1;
    height: 300px;
    width: 700px;
}
#object{
    width:700px;
}
button{
    margin: 5px;
    background-color: #E59560;
    border: none;
    padding: 10px;
}
</style>