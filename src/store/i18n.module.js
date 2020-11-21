import {LANG_CHANGE, LANG_INIT} from "@/store/mutations.type"
import {I18N_INIT} from "@/store/actions.type";

const state = {
    code: '', // iso code
    languages: [], // languages list
    content: '' // content of json file
}

const mutations = {
    // init language (from file)
    [LANG_INIT](state, json) {
        state.content = new Function(`return ${JSON.stringify(json)}`); // pour éviter de parser deux fois.
        state.languages = Object.keys(json);

        let language = localStorage.language;

        if (!language)
            language = navigator.language || 'en';

        state.code = Object.keys(json).includes(language) ? language : 'en'; // langue de base: anglais

        // on stocke cette info dans le local storage
        localStorage.language = state.code;
    },

    // change current language
    [LANG_CHANGE](state, code = state.languages[0]) {

        // La langue n'existe pas
        if (!state.languages.includes(code))
            return;

        state.code = code;
        localStorage.language = code;
    }
}

const actions = {
    // Non async : la traduction doit être affichée directement
    [I18N_INIT](context) {
        // on charge le fichier des traductions
        import('../assets/json/languages.json').then(res => context.commit(LANG_INIT, res.default));
    }
}

const getters = {

    getLanguages: state => {
        if (!state.languages)
            return null;
        return state.languages;
    },

    getLanguageCode: state => {
        return state.code;
    },

    getTranslationByCode: state => (key, variables, code) => {
        if (!state.content)
            return key; // Fichier non trouvé ou erreur de chargement.

        let lang = state.content()[code];

        /*
            On souhaite pouvoir faire des catégories

            Par exemple:
            "contact" {
                "title" : "Contactez nous ici"
            }

            On peut traduire ça par contact.title
            On doit donc pouvoir naviguer de tronc en tronc
         */
        key.split('.').forEach(t => {
            lang = !!lang && !!lang[t] ? lang[t] : null;
        });

        if (!!lang && !!variables) {

            /*
             * On veut pouvoir ajouter des variables
             * Exemple %name% = Paul
             */

            Object.keys(variables).forEach(name => {
                lang = lang.replaceAll("%" + name + "%", variables[name]);
            });
        }

        return lang || key;
    },

    /*
    argument : key => on recupère la valeur pour la clé cherchée
    exemple : getTranslation('title')
    */
    getTranslation: state => (key, variables) => {
        return getters.getTranslationByCode(state)(key, variables, state.code);
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}