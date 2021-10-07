<template>
    <div >
        <figure class="img">
            <img :src="user.picture.large" alt="pic">
        </figure>
        {{user.name.title}} {{user.name.first}}  {{user.name.last}}
        gjgy</div>
</template>
<style scoped>

</style>
<script>
export default {
    name:'UserCard',
    props:['user']
}
</script>


