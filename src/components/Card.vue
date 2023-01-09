<template>
    <div class="flex mb-10 items-center">
        <div class="w-10 h-20 mr-4">
            <img :src="item?.image?.medium || 'https://thumbs.dreamstime.com/b/%D0%BD%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%B7%D0%B0%D0%BF%D1%80%D0%B5%D1%82%D0%B0-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%D0%B0-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D1%81%D0%B8%D0%BB%D1%83%D1%8D%D1%82-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B3%D0%BE-226535630.jpg'" class="w-full h-full object-contain">
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