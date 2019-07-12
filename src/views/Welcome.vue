<template>
    <div class="welcome">
        <hello-world msg="Welcome!!!!!"></hello-world>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'welcome',
        components: {
            HelloWorld
        }
    }
</script>
