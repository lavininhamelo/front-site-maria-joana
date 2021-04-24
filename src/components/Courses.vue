<template>
  <div class="courses container full-width column items-center">
    <Title title="Cursos" subtitle="os mais procurados"></Title>
    <q-carousel
      flat
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      :autoplay="3600"
      infinite
      draggable
      animated
      control-color="primary"
      class="bg-transparent full-width"
      padding
      arrows
    >
   
      <q-carousel-slide v-for="(_,index) in getcoursesByIndexLength()" :key="index" :name="index" class="column no-wrap">
        <div
          class="row fit justify-between items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <Card v-for=" course in getcourseByIndex(index)" :name="course.name" :value="course.value" :key="course.id" :whatsapp="whatsapp"/>
        </div>
      </q-carousel-slide>
  
      
    </q-carousel>
    <q-btn color="primary" label="Ver todos" outline class="q-px-xl q-mb-lg" @click="getcourseByIndex(3)" />
  </div>
</template>
<script>
import { Screen } from 'quasar'
import Title from "./global/Title.vue";
import Card from "./global/Card.vue";
export default {
  components: { Card, Title },
  props: {
    data: {
      type: Array
    },
     whatsapp: {
      type: String || Number
    },
  },
  data() {
    return {
      slide: 1,
      courses: this.data,
     
      getcoursesByIndexLength: function(){
  
        const array = [...new Array(Math.ceil(this.courses.length/this.quantityShown)).fill(1)]
        return  array;
       },
    };
  },
  watch:{
   
  },
  computed:{ // da pra faezr this.$q.screen.width > 300 etc etc tmb
  //eu queria fazer por breaking point ai ficava mais certo, mas vou tentar assim tb vc q sabe
     quantityShown: ()=>{
       console.log(Screen.name)
      switch(Screen.name){
        case "xs":
       
          return 1
          break
             case "sm":
               return 2;
               break;
        case "md":
          return 3;
          break
       default:
          return 4;
      }
     }
    
  },
  methods:{
 getcourseByIndex: function(i){
   const start = i* this.quantityShown
   const end = start + this.quantityShown
   const arr = []
   for (let index = start; index < end ; index++) {
    if(this.courses.length > start){
      arr.push(this.courses[index])
     }  
   }
  return arr.filter((item)=>item!= null)
  }
}}
</script>
<style lang="scss" scoped>
.courses {
  background: $beige2;
}
</style>
