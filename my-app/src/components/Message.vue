<template>
  <div class="box is-info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>


<script>

export default {
    
}

</script>

<style>
    .box {
        width: 200px;
        height: 200px;
        margin: 0 auto;
        background-color: lightblue;
        padding: 50px;
        border: 1px solid light;
        margin-bottom: 20px;
        text-align: center;
    }
</style>
