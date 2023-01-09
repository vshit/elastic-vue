<template>
    <div>
        <v-header></v-header>
        <main>
            <slot></slot>
        </main>
        <v-footer></v-footer>
    </div>
    
    </template>
    
    <script>
    import VHeader from "../components/Header.vue";
    import VFooter from "../components/Footer.vue";
    export default {
        components: {
            'v-header': VHeader,
            'v-footer': VFooter
        }
    };
    </script>
    