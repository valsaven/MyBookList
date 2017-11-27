<template>
    <div class="home">
        <vHeader></vHeader>
        <sidemenu></sidemenu>
        <cover></cover>
        <statusmenu></statusmenu>
        <list></list>
    </div>
</template>

<script>
import vHeader from './Header';
import cover from './Cover';
import sidemenu from './SideMenu';
import statusmenu from './StatusMenu';
import list from './List';

import Modal from './Modal';

export default {
  name: 'Home',
  data() {
    return {};
  },
  components: {
    vHeader,
    cover,
    sidemenu,
    statusmenu,
    list,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
