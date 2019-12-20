<template>
<div>
<span>model data:</span>
<button @click="emit('close')">Cancel</button>
</div>
</template>
<script>
export default{
    props:['user'],
    data(){
        return{

        }
    }
}
</script>