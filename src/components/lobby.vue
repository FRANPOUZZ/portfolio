<template>
<head>

</head>
<body>
    <header>
    <div>
        <a href="#"><img id="home" src="/src/assets/home.png" alt="logo d'accueuil"></a>
    </div>
    <div >
        <nav class="navbar">
            <ul>
                <li class="navbutton" onclick="menu()"><a href="#"><img id="menu"src="/src/assets/menu.png" alt="menu nav déroulant"></a></li>
                <li class="navlist">1</li>
                <li class="navlist">2</li>
                <li class="navlist">3</li>
            </ul>
        </nav>
        
    </div>
    <h1>Portfolio</h1>
</header>
</body>
</template>

<script setup>
</script>

<style scoped>
header{
    background-color: #F6F4E8;
    display: block;
    padding: 2px;
    position: sticky;
}
h1{
    text-align: center;
}
#home{
    height: 2.5%;
    width: 2.5%;
}
div{
    text-align: left;
}
#menu{
    height: 2.5%;
    width: 2.5%;
}
ul{
    text-align: left;
    padding-left: 2px;
}
.navlist{
    display: none;
}
.navbutton{
    display: block;
}
.navbutton:hover .navlist{
    display: block;
}
</style>