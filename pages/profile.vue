<template>
    <div class="container">   
        <div class="profile">
            
            <div class="avatar">
                AVATAR
                
                    
            </div>
            
            <div class="info">

                <div class="tekst"><h1>NAZWAPROFILU</h1></div>
                
            </div>

            <div class="info2">

                <div class="tekst">tekst tekst tekst</div>

            </div>

        </div>
    </div>
</template>

<style>
html
{
    background-color: rgb(255, 255, 255);

}
.container
{
    padding: 5px;
    display: flexbox;
    border: black solid 4px;
    margin: 5%;
    width: 90%;
    height: 600px;
}
.profile
{
    height: 100%;
    width: 100%;
    background-color: gray;
}

.avatar
{
    height: 50%;
    width: 22%;
    background-color: green;
    float: left;
}

.info
{
    display: flex;
    padding: 2%;
    height: 50%;
    background-color: red;
}
.info2
{
    display: flex;
    padding: 2%;
    height: 50%;
    background-color: rgb(60, 255, 0);
}
.tekst
{
    padding: 5px;
    border: black solid 3px;
    height: 100%;
    width : 100%;
    background-color: white;

}



</style>