<script>
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.getUserDetail(this.$route.params.id);
  },
  methods: {
    getUserDetail(id) {
      const URL = `https://jsonplaceholder.org/users/${id}`;
      fetch(URL, { method: "GET" })
        .then((res) => {
          // console.log(res.json());
          res.json().then((data) => {
            // this.users = data;
            this.user = {
              nama: data.firstname,
            };
            console.log(data);
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
  <h1>User Detail</h1>
  <h5>{{ user.nama }}</h5>
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
