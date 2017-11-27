<template>
    <div class="side-menu">
        <a class="menu-item" href="#" v-for="item in items">
          <span class="text">{{item}}</span>
        </a>
    </div>
</template>

<script>
export default {
  name: 'SideMenu',
  data() {
    return {
      items: ['Quick Add', 'Book List', 'Authors'],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-menu {
  display: block;
  padding-left: 10px;
  position: fixed;
  top: 20%;
  width: 50px;
}

.side-menu .menu-item {
  background-color: white;
  display: block;
  height: 50px;
  margin-bottom: 5px;
  opacity: 1;
  position: relative;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  width: 50px;
}

.side-menu .menu-item .text {
  color: white;
  display: inline-block;
  font-family: sans-serif;
  font-size: 1.4em;
  left: 50px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  top: 14px;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  vertical-align: middle;
  white-space: nowrap;
  width: 0;
}

.side-menu .menu-item:hover .text {
  opacity: 1;
  width: 94px;
}

/* TODO: При ширине уже в 1440px начинает заезжать на элементы */
.side-menu .menu-item:hover {
  background-color: #3e94ec;
  color: white;
  cursor: auto;
  display: block;
  height: 50px;
  opacity: 1;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease-in-out;
  width: 145px;
}
</style>
