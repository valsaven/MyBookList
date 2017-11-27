<template>
    <div class="list-container">
        <div class="list">
            <table>
            <tr class="table-header">
                <th v-for="item in headItems">{{item}}</th>
            </tr>
            <tr v-for="book in books">
                <td class="index">{{$index}}</td>
                <td></td>
                <td class="title">{{book.title}}</td>
                <td>
                <!-- <a href="/api/authors/{{book.author.id}}">{{book.author.name}}</a> TODO: Set the correct url -->
                <a href="#">{{book.author.name}}</a>
                </td>
                <td></td>
                <td>{{book.comment}}</td>
                <td>{{book.year}}</td>
                <td>{{book.currentPage}} / {{book.totalPages}}</td>
                <td>
                <div class="edit-more-delete">
                    <span class="edit">
                    <a class="inList" href="#">Edit</a>
                    </span>
                    <span class="more">
                    <a class="inList" href="#">More</a>
                    </span>
                    <span class="delete">
                    <a class="inList" href="#" ng-click="deleteBook(book)">Delete</a>
                    </span>
                </div>
                </td>
            </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      headItems: ['#', 'Image', 'Title', 'Author', 'Genres', 'Comment', 'Year', 'Progress', ''],
      //TODO: Temp data
      books: [
        {
          author: {
            id: 0,
            firstName: 'Andrzej',
            lastName: 'Sapkowski',
            born: '1948-06-21',
            description: 'https://en.wikipedia.org/wiki/Andrzej_Sapkowski',
          },
          title: 'Wiedźmin',
          status: 1,
          comment: 'Geralt of Rivia is a witcher.',
          year: 2003,
          currentPage: 100,
          totalPages: 320,
        },
      ],
    };
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  margin: 0 10% 0 10%;
  overflow-x: auto;
}

table {
  background: white;
  border-collapse: collapse;
  border-radius: 3px;
  width: 100%;
}

tr {
  border-bottom: 1px solid #c1c3d1;
  border-top: 1px solid #c1c3d1;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr.table-header {
  background: #2980b9;
  color: #ffffff;
  font-weight: 900;
}

th {
  background: #076ad0;
  /*TODO: Remove if the table is empty*/
  /*border-bottom: 4px solid #91c2f5;*/
  border-right: 1px solid white;
  color: white;
  font-size: 23px;
  font-weight: 100;
  padding: 12px;
  vertical-align: middle;
}

th:first-child {
  border-top-left-radius: 3px;
}

th:last-child {
  border-right: none;
  border-top-right-radius: 3px;
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

/* List element */
td {
  color: #1d439b;
}

td.index {
  color: black;
}

td.title {
  font-size: 1.1em;
  font-weight: bold;
}
</style>
