<template>
    <div class="status-menu">
      <div class="status" v-for="item in items" v-bind:class="{ active: selected == item.title }"
        @click="selected = item.title">{{item.title}}</div>
    </div>
</template>

<script>
export default {
  name: 'StatusMenu',
  data() {
    return {
      selected: 'All Books',
      items: [
        {
          title: 'All Books',
          class: 'all-books',
        },
        {
          title: 'Currently Reading',
          class: 'reading',
        },
        {
          title: 'Completed',
          class: 'completed',
        },
        {
          title: 'On Hold',
          class: 'on-hold',
        },
        {
          title: 'Dropped',
          class: 'dropped',
        },
        {
          title: 'Plan to Read',
          class: 'plan-to-watch',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status-menu {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 10% 0 10%;
  padding: 10px 0 10px 0;
  vertical-align: middle;
}

.status {
  border-radius: 20px;
  color: whitesmoke;
  cursor: pointer;
  font-size: large;
  padding: 10px;
}

.active {
  background-color: #187ce5;
  color: white;
  font-weight: bold;
}
</style>
