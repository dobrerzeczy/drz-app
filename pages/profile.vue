<template>
    <div class="container">   
        <div class="profile">
            
            <div class="avatar">
                
                <div class="avatarimg"><h1>AVATAR</h1></div>
                    
            </div>
            
            <div class="profileName">

                <div class="tekst"><h1>NAZWAPROFILU</h1></div>
                
            </div>

            <div class="info2">

                <div class="tekst">tekst tekst tekst</div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
  middleware: 'auth'

}
</script>

<style>
html
{
    background-color: rgb(255, 255, 255);

}
.container
{
    background-color: lightblue;
    padding: 5px;
    display: flexbox;
    border: black solid 4px;
    margin: 0;
    width: 100%;
    height: 800px;
   float: center;
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
  width: 25%;
  padding: 2%;
  float: left;
}

.profileName
{

  padding: 2%;
  height: 50%;
}
.info2
{
    display: flex;
    padding: 2%;
    height: 50%;
}
.tekst
{
    padding: 5px;
    border: black solid 3px;
    height: 100%;
    width : 100%;
    background-color: white;

}
.avatarimg
{
    padding: 5px;
    height: 100%;
    width: 100%;
    border: black solid 3px;

    background-color: white;

}



</style>
