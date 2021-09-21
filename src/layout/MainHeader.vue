<template>
 <header>
     <mini-nav></mini-nav>
        <div>
            <h1>Color paints</h1>
            <p>CHOOSE A PAINT COLOR FAMILY</p>
            <span>We have over 2,000 paint colors to choose from</span>
            
        </div>
    </header>
</template>
<script>
import MiniNav from '../views/components/MiniNavigation.vue';
export default {
    components: {
        MiniNav
    },
    name: 'index'
}
</script>