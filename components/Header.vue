<template>
    <div style="display: flex; padding: 20px">
        <a href="../login"><logo style="width: 50px"/></a>
        <div style="flex: 1;" /> 
        <drz-menu/>
        <a href="../login"><div style="margin-left: 20px">LOGIN</div></a>
        <a href="../register"><div style="margin-left: 20px">REGISTER</div></a>
    
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