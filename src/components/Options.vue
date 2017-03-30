<template>
  <div class="hello">
    <h1>{{ msg }}</h1> <br>
    <form>
      <div class="multiselect">
        <div class="selectBox" @click="showCheckboxes">
          <select>
            <option>Select an option</option>
          </select>
          <div class="overSelect"></div>
        </div>
        <div id="checkboxes">
          <label v-for="label in labels">
            <input type="checkbox" :value="label" v-model="options" /> {{ label }}
          </label>
        </div>
      </div>
    </form>

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
      options: [],
      expanded: false,
      labels: ['First', 'Second', 'Third']
    }
  },
  methods: {
      change () {
          console.log(this.options)
      },

      showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!this.expanded) {
          checkboxes.style.display = "block";
          this.expanded = true;
        } else {
          checkboxes.style.display = "none";
          this.expanded = false;
        }
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

.multiselect {
  width: 200px;
}

.selectBox {
  position: relative;
}

.selectBox select {
  width: 100%;
  font-weight: bold;
}

.overSelect {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

#checkboxes {
  display: none;
  border: 1px #dadada solid;
}

#checkboxes label {
  display: block;
}

#checkboxes label:hover {
  background-color: #1e90ff;
}


</style>
