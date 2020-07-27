<template>
    <div style="display: flex; padding: 20px">
         <logo style="width: 50px"/>
        <div style="flex: 1;" /> 
        <drz-menu/>
        <div style="margin-left: 20px">LOGIN</div>
    
 </div>
</template>
<script>
import Logo from "~/components/Logo"
import DrzMenu from "~/components/Menu"
export default {
    components:{
        Logo,
        DrzMenu
    }
}
</script>