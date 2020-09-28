<template>
    <div>
        <div class="title-container title-responsive">
            <h1>Photos d'événements passés</h1>
        </div>

        <div class="panel images-panel">

            <div class="images-container">
                <div class="image-item">
                    <img class="image-img" src="../assets/img/background/1.jpg"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>

                <!-- TEST DESIGN -->
                <div class="image-item">
                    <img class="image-img" src="../assets/img/team/avatar_men.png"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div class="image-item">
                    <img class="image-img" src="../assets/img/team/avatar_men.png"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div class="image-item">
                    <img class="image-img" src="../assets/img/team/avatar_men.png"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div class="image-item">
                    <img class="image-img" src="../assets/img/team/avatar_men.png"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div class="image-item">
                    <img class="image-img" src="../assets/img/team/avatar_men.png"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div class="image-item">
                    <img class="image-img" src="../assets/img/team/avatar_men.png"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>
                <div class="image-item">
                    <img class="image-img" src="../assets/img/team/avatar_men.png"/>
                    <div class="image-description">
                        <h3>Titre</h3>
                        <p>Description</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Images"
    }
</script>

<style scoped>
    .panel.images-panel {

    }

    .images-panel .images-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        column-gap: 10px;
        row-gap: 10px;
    }

    .images-panel .image-item {
        flex: 0 0 25%;
        border: 2px solid #eee;
    }

    .images-panel .image-item .image-img {
        width: 100%;
    }

    .images-panel .image-item .image-text {

    }

    .images-panel .image-item .image-text h3, p {
        text-align: center;
    }
</style>