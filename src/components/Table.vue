<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.getAllUser();
  },
  methods: {
    getAllUser() {
      fetch("https://jsonplaceholder.org/users", { method: "GET" })
        .then((res) => {
          // console.log(res);
          res.json().then((data) => {
            this.users = data;
            // console.log(data);
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <h1>Table</h1>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama</th>
        <th>Email</th>
        <th>No Telp</th>
        <th>Tanggal Lahir</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ user.firstname }} {{ user.lastname }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.birthDate }}</td>
        <td>
          <router-link :to="{ name: 'UserDetail', params: { id: index } }"> Go </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table.table {
  width: 100%;
  border-collapse: collapse;
}

table.table tr,
table.table th,
table.table td {
  border: 1px solid black;
  padding: 0.5rem 2rem;
}
</style>
