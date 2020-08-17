<template>
    <div class="container">   
        <div class="profile">
            
            <div class="avatar">
                
                <div class="avatarimg"><h1>AVATAR</h1></div>
                    
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
    padding: 5px;
    height: 100%;
    width: 100%;
    border: black solid 3px;

    background-color: white;

}



</style>
