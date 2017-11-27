<template>
    <div class="cover">
      <h1>MyBookList</h1>
      <img src="../assets/booklet.png">
      <p class="lead">HOW MUCH BOOKS HAVE YOU READ?</p>
    </div>
</template>

<script>
export default {
  name: 'Cover',
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cover {
  align-items: center;
  background-color: #3e94ec;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 120%;
  font-weight: 600;
  justify-content: center;
  margin: 0 10% 0 10%;
}
</style>
