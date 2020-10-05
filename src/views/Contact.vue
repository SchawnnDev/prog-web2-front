<template>
    <div>

        <div class="title-container title-responsive">
            <h1>{{getTranslation("views.contact.title")}}</h1>
        </div>

        <div class="panel contact-panel">

            <div>
                <p>Notre association se trouve à l'adresse :</p>
                <p>5 rue des palmiers - 67000 Strasbourg</p>
                <br>
                <p>Notre email est: contact@aemfs.fr</p>
            </div>

            <hr class="separator"/>

            <form class="input-form">
                <div class="input-group">
                    <label for="name">{{ getTranslation("views.contact.form.names") }}</label>
                    <input id="name" required type="text">
                </div>

                <div class="input-group">
                    <label for="email">{{ getTranslation("views.contact.form.email") }}</label>
                    <input id="email" required type="email">
                </div>

                <div class="input-group">
                    <label for="message">{{ getTranslation("views.contact.form.message") }}</label>
                    <textarea cols="30" id="message" required rows="5"/>
                </div>

                <input class="submit-button button-sm" type="submit" :value="getTranslation('views.contact.buttons.send')">
            </form>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Contact",
        computed: {
          ...mapGetters(["getTranslation"])
        }
    }
</script>

<style scoped>

    .panel.contact-panel {
        margin-left: 20%;
        margin-right: 20%;
    }

    @media only screen and (max-width: 768px) {
        .panel.contact-panel {
            margin-left: 5%;
            margin-right: 5%;
        }
    }

</style>