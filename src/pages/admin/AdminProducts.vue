<template>
  <q-page class="column q-px-xl">
    <Header
      title="Produtos"
      subtitle="Nessa área você pode alterar os produtos do site"
    ></Header>
    <div class="q-py-md">
      <q-table
       card-class="beige1 text-black border-primary"
        table-class="text-black"
        table-header-class="text-black"
        flat
        bordered
        title="Produtos"
        :data="data"
        :columns="columns"
        row-key="name"
        :filter="filter"
      >
        <template v-slot:top-right>
          <q-input
            dense
            debounce="300" 
            outlined
            class="q-mr-md"
            v-model="filter"
            placeholder="Procurar..."
          >
            <q-icon slot="append" name="search" />
          </q-input>
             <q-btn color="primary"  label="Novo produto" unelevated  class="ml-lg" @click="dialog = true"/>
            

        </template>

        <template v-slot:body="props">
        <q-tr :props="props">
             <q-td key="cover" :props="props">
              <img :src="props.row.cover" height="60" />
          </q-td>
          <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="description" :props="props">
              {{ props.row.description }}
          </q-td>
          <q-td key="qtd" :props="props">
              {{ props.row.qtd }}
          </q-td>
       
          <q-td key="value" :props="props">
              {{ props.row.value }}
          </q-td>
            <q-td key="actions" :props="props">
             <div class="row">
               <q-btn color="yellow-10" icon="edit" class="q-mr-md" dense outline @click="openDialog(props.row)" />
               <q-btn color="red-9" icon="delete" outline dense  @click="deleteProduct(props.row.id)" />
             </div>
          </q-td>
        </q-tr>
      </template>
      </q-table>






      <q-dialog v-model="dialog">
            <q-card style="min-width: 320px; width: 60%">
            <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Adicionar Produto </div>
            <q-space />
            <q-btn icon="close" flat round dense @click="closeDialog()" />
          </q-card-section>
          <q-separator spaced />
          <q-card-section>
            <q-input class="q-mb-md" outlined color="primary" v-model="products.name"  square type="text" label="Nome" />
            <q-input class="q-mb-md" outlined color="primary" v-model="products.qtd"  square type="number" label="Quantidade" />
            <q-input class="q-mb-md" outlined color="primary" v-model="products.value"  square type="text" label="Valor" />
            <q-input class="q-mb-md" outlined color="primary" v-model="products.description"  square type="textarea" label="Descrição" />
          </q-card-section>
          <q-card-section>
            <q-btn
              color="primary"
              v-if="!products.id"
                            label="Adicionar"
              @click="newProduct()"
              class="q-py-xs full-width"
            />
            <q-btn
            v-else
              color="primary"
              label="Editar"
              @click="editProduct(products.id)"
              class="q-py-xs full-width"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import axios from "axios"
export default {
  components: {
    Header,
  },
  mounted(){
    this.getAllProducts()
  },
  data() {
    return {
      dialog: false,
      filter: "",
      slide: 1,
      products: {
        name: "",
        qtd:"",
        value:"",
        description:""      
      },
      columns: [
         {
          name: "cover",
          required: true,
          label: "Capa",
          align: "left",
          sortable: true,
        },
        {
          name: "name",
          required: true,
          label: "Nome",
          align: "left",
          sortable: true,
        },
         {
          name: "description",
          required: true,
          label: "Descrição",
          align: "left",
          sortable: true,
        },
        {
          name: "qtd",
          align: "center",
          label: "Quantidade",
          field: "qtd",
          sortable: true,
        },
        { name: "value", label: "Valor", field: "value", sortable: true },
        { name: "actions", label: "Ações", field: "actions" }


      ],
      data: [
        {
          id: 1,
          cover: 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: "Anel de coco",
          description: "Bla bla bla bla bla",
          qtd: 12,
          value: "R$ 12,00",
        },
        {
          id: 2,
          cover: 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: "Colar trançado biju",
          description: "Bla bla bla bla bla",
          qtd: 13,
          value: "R$ 15,00",
        },
        {
          id: 3,
          cover: 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: "Kit miçanga",
          description: "Bla bla bla bla bla",
          qtd: 23,
          value: "R$ 42,00",
        },
        {
          id: 4,
          cover: 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          name: "Pulseira",
          description: "Bla bla bla bla bla",
          qtd: 15,
          value: "R$ 8,00",
        },
      ],
    };
  },
  methods: {
    async openDialog(product){
      this.products = product;
      this.dialog = true;
    },

     async closeDialog(){
      this.products =   {
        name: "",
        qtd:"",
        value:"",
        description:""      
      },
      this.dialog = false;
    },
    async newProduct() {
      const data = this.products
      data.cover = 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      const response = await axios.post('http://localhost:3000/products', data)
      if(response.status === 201){
        this.getAllProducts()
      }
    },
     async editProduct(id) {
      const data = this.products
       data.cover = 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      const response = await axios.put('http://localhost:3000/products/'+id, data)
      if(response.status === 200){
           this.products =   {
        name: "",
        qtd:"",
        value:"",
        description:""      
      },
      this.dialog = false
        this.getAllProducts()
      }
    },
    async deleteProduct(id) {
      this.$q.dialog({
        title: 'Deletar produto?',
        message: 'Você deseja deletar esse produto?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        const response = await axios.delete('http://localhost:3000/products/'+id)
        if(response.status === 200){
          this.getAllProducts()
        }
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
      
    },  
     async getAllProducts() {
      const response = await axios.get('http://localhost:3000/products')
      if(response.status === 200){
       this.data = response.data
      }
    },  
     async getProduct(id) {
      const response = await axios.get('http://localhost:3000/products/'+id)
      if(response.status === 200){
      }
    },  
    
    },
};
import Header from "src/components/admin/Header";
</script>

<style lang="scss" scoped>
.beige1{
  background: $beige;
}

.border-primary {
  border: 2px solid $primary;
}
</style>