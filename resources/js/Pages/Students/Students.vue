<template>
<header>
    <studnetsheader 
    :header-name="'Student List'" 
        :button-name="'Add Student'" 
        :button-icon="'mdi-plus'" 
        :button-action="addStudent"
    
    />

    
</header>
</template>

<script>
import studnetsheader from '../../Models/Headers/headerModel.vue';

export default {
  components: { studnetsheader },


  methods: {
       
          addStudent() {
              this.$router.push('/students/add-new');
          }
       
    }
}
</script>

<style>

</style>