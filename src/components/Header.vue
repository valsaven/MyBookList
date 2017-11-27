<template>
    <div class="header">
        <div class="header-menu">
            <div class="btn-menu">
                Viewing
                <span class="username">Your</span> Book List
            </div>
        </div>
        <a href="/" class="header-title">MyBookList</a>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header a {
  color: #fff;
  font-weight: bold;
}

.header a:hover {
  text-decoration: underline;
}

.header {
  color: white;
  display: block;
  height: 80px;
  margin: 0 10% 0 10%;
  position: relative;
}

.header .header-title {
  background: url('../assets/logo_head.png') no-repeat left top;
  background-size: auto 36px;
  display: block;
  height: 36px;
  overflow: hidden;
  position: absolute;
  text-indent: -9999px;
  top: 21px;
  width: 240px;
}

.header .header-menu {
  position: absolute;
  right: 4px;
  top: 25px;
}

.header .header-menu .btn-menu {
  display: block;
  font-size: 16px;
  text-align: right;
}

.header .username {
  font-weight: bold;
}
</style>
