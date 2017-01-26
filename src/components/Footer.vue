<template>
  <div class="footer">
    <span meta="obj">
      <span meta="prop">name: <em>{{profile.name}}</em></span>,
      <span meta="prop">job: <em>{{profile.job}}</em></span>,
      <span meta="prop">profiles: <em>[
          <a :href="profile.xingURL" class="external">@xing</a>,
          <a :href="profile.githubURL" class="external">@github</a>
        ]</em>
      </span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'app-footer',
    data() {
      return {
        profile: {
          name: "'Mario Winkler'",
          job: "'Web Developer'",
          xingURL: 'https://www.xing.com/profile/Mario_Winkler9',
          githubURL: 'https://github.com/splosch/',
        },
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .footer {
    position: absolute;
    bottom: 1vh;
    width: 100%;
  }
</style>
