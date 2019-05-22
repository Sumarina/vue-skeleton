<template>
    <div id="app" class="m-skeleton">
         <ul>
             <li>{{message}}</li>
         </ul>
    </div>
</template>

<script>
import './style.css';
export default {
    name:'app',
    data(){
        return {
            message:'hello world'
        }
    }
}
</script>

<style>
</style>
