<template>
<div>

<ul>
<li v-scroll-to="'#one'">Home</li>
<li v-scroll-to="'.projects'">Projects</li>
<li v-scroll-to="'.footer'">About</li>
</ul>
</div>

</template>

<script>
export default{
    data(){
        return{
        
        }
    }
}
</script>

<style scoped>
li{
    color:#fff;
    display:flex;
    transition:0.3s;
    cursor:pointer;
    height:32px;
    opacity:0.8;
}
li:hover{
    text-decoration: line-through;
    transition:0.5s;
    opacity:1;
}
ul{
    list-style:none;
    padding-left:0;
}
.nav-container{
position:fixed
}

</style>