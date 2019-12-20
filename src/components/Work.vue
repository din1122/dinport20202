<template>
<v-container gird-list-xs>
<v-layout row wrap>
<v-flex>

<WorkTabs />
</v-flex>
</v-layout>
</v-container>
</template>



<script>
import WorkTabs from '@/components/WorkTabs'
export default {
    data(){
        return{
           
        }
    },
     components:{
                WorkTabs
    }
}
</script>