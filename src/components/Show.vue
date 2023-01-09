<template>
    <div class="flex mb-10 items-center">
        <div class="w-10 h-20 mr-4">
            <img :src="item?.image?.medium || 'https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg'" class="w-full h-full object-contain">
        </div>
        <p>{{ item.name }}</p>
    </div>
</template>

<script>
    export default {
        props: {
        item: {
            type: Object,
            default() {
                return{}
            }
        }
    }
    }
</script>
