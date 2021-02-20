import {defineComponent} from 'vue'
export const App = defineComponent({
  name: 'App',
  setup(){
    return (
      <div id="app">
        <router-view/>
      </div>
    )
  }
})