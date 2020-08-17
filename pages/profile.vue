<template>
    <div class="container">   
        <div class="profile">
            
            <div class="avatar">

                <div class="avatarimg" :class="{ dragging }" @dragenter="dragging = true" @dragend="dragging = false" @drop.prevent="handleDrop">
                    <img v-if="true" src='~/assets/avatar.jpg' />
                    <div v-else>
                        <span v-if="dragging">DROP IT LIKE ITS HOT</span>
                        <span v-else>drop your avatar here
                        to update it</span>
                    </div>
                </div>

            </div>
            
            <div class="infobox">
                <div class="tekst">
                    <div class="name"><h2>Firstname_Lastname</h2></div>
                    <div class="age"><h4>Age</h4></div>              
                    
                </div>
                
            </div>

            <div class="infobox2">
                <div class="tekst">


                    
                    nic.
                    nic.
                    nic.
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
//   middleware: 'auth'

    data() {
        return {
            avatarUrl: '',
            dragging: false
        }
    },

    methods: {
        handleDrop(event) {
            event.preventDefault();
            event.stopPropagation()
            this.dragging = false;
            console.log(event)
        }
    }
}
</script>
<style>

.container
{
    background-color: lightblue;
    padding: 5px;
    display: flexbox;
    border: black solid 4px;
    margin: 5% auto 5% auto;
    width: 90%;
    height: 800px;
}
.profile
{
    height: 100%;
    width: 100%;
}

.avatar
{
    display: flex;
    height: 50%;
    width: 35%;
    padding: 2%;
    float: left;
}

.avatarimg img
{
    width: 100%;
    height: 100%;
}

.infobox
{
    display: flex;
    padding: 2%;
    height: 50%;
}
.infobox2
{
    display: flex;
    padding: 2%;
    height: 50%;
}
.tekst
{
    word-wrap: break-word;
    padding: 5px;
    border: black solid 3px;
    height: 100%;
    width : 100%;
    background-color: white;

}
.avatarimg
{
    
    height: 100%;
    width: 100%;
    border: black solid 3px;

    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;

}
.avatarimg.dragging {
    border: 10px dashed green;
}


</style>
