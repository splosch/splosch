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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.75em;
    padding: 0.35em 0 0;
    box-sizing: border-box;
  }
</style>
