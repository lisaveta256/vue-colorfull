<template>
  <div
    class="single_advisor_profile wow fadeInUp"
    data-wow-delay="0.2s"
    style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp"
  >
    <!-- Team Thumb-->
    <div class="advisor_thumb">
      <img :src="user.picture.large" alt="pic" />
      <!-- Social Info-->
      <div class="social-info">
        <a href="#"><i class="fa fa-facebook"></i></a
        ><a href="#"><i class="fa fa-twitter"></i></a
        ><a href="#"><i class="fa fa-linkedin"></i></a>
      </div>
    </div>
    <!-- Team Details-->
    <div class="single_advisor_details_info">
      <h6>{{ user.name.title }}</h6>
      <p class="designation">{{ user.name.first }} {{ user.name.last }}</p>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "UserCard",
  props: ["user"],
};
</script>


