<template>
    <div style="display: flex; padding: 20px">
         <logo style="width: 50px"/>
        <div style="flex: 1;" /> 
        <drz-menu/>
        <a href="../login"><div style="margin-left: 20px">Login</div></a>
        <a href="../register"><div style="margin-left: 20px">Register</div></a>
    
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