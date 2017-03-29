<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <br>
    <select v-model="options" @change="change" multiple>
        <option value="Python">Python</option>
        <option value="Django">Django</option>
        <option value="Flask">Flask</option>
        <option value="Scrapy">Scrapy</option>
        <option value="VueJs">VueJS</option>
        <option value="ReactJS">ReactJS</option>
        <option value="AsyncIO">AsyncIO</option>
        <option value="BeautifulSoup">Beautiful Soup</option>
        <option value="LXML">LXML</option>
        <option value="Docker">Docker</option>
        <option value="Vagrant">Vagrant</option>
        <option value="Pandas">Pandas</option>
        <option value="Numpy">Numpy</option>
        <option value="MySQL">MySQL</option>
        <option value="MsSQL">MsSQL</option>
        <option value="PgSQL">PgSQL</option>
        <option value="MongoDB">MongoDB</option>
        <option value="CouchDB">CouchDB</option>
    </select> <br>
    <p>Selected options: {{ options }} </p>
    <br>
    <router-link to="/">Go back to root!</router-link>
  </div>
</template>

<script>
export default {
  name: 'options',
  data () {
    return {
      msg: 'Welcome to the select dropdown page!',
      options: []
    }
  },
  methods: {
      change () {
          console.log(this.options)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
