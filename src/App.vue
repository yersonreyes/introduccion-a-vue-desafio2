<template>
  <div id="app">
    <h1 class="text-center mt-3" >Listado de tareas</h1>
    <div class="container mt-5 mb-5">
      <div class="input-group m-0">
        <input  v-model="nuevaTarea" v-on:keypress.enter="agregarNuevaTarea" type="text" class="form-control" placeholder="Nueva tarea" >
        <div class="input-group-append">
        <button @click="agregarNuevaTarea" class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
        </div>
  	  </div>
    </div>

    <div class="container section2">
      <ul class="list-group">
        <li class="list-group-item" v-for="(tarea, $index) of tareas" :key="$index">
        {{ $index + 1 }}: {{ tarea }}
        <button  @click="eliminarTarea($index)" class="btn btn-danger ml-auto"> eliminar</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  data: () => ({
    nuevaTarea: "",
    tareas: [],
  }),
    methods: {
    agregarNuevaTarea() {
      this.tareas.unshift(this.nuevaTarea);
      this.nuevaTarea = "";
    },
    
    eliminarTarea(eliminar){
        if(eliminar == 0){
          this.tareas.shift()
        }else{
          this.tareas.splice(eliminar,eliminar)
        }
      }
    }
    }
</script>

<style>
  .section2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .section2 ul{
    width: 100%;
  }

 .list-group-item{
    display: flex;
  }
</style>
