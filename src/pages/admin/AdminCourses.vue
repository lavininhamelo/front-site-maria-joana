<template>
	<q-page class="column q-px-xl">
		<Header title="Cursos" subtitle="Nessa área você pode alterar os cursos do site"></Header>
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
					<q-btn color="primary" label="Novo curso" unelevated class="ml-lg" @click="dialog = true" />
				</template>

				<template v-slot:body="props">
					<q-tr :props="props">
						<q-td key="cover" :props="props">
							<img :src="props.row.cover" height="60" />
						</q-td>
						<q-td key="name" :props="props">{{ props.row.name }}</q-td>
						<q-td key="description" :props="props">{{ props.row.description }}</q-td>
						<q-td key="nameTeacher" :props="props">{{ props.row.nameTeacher}}</q-td>
						<q-td key="hours" :props="props">{{ props.row.hours }} CH</q-td>
						<q-td key="value"  :props="props">  R${{ props.row.value }}</q-td>
						<q-td key="actions" :props="props">
							<div class="row">
								<q-btn
									color="yellow-10"
									icon="edit"
									class="q-mr-md"
									dense
									outline
									@click="openDialog(props.row)"
								/>
								<q-btn color="red-9" icon="delete" outline dense @click="deleteCourse(props.row.id)" />
							</div>
						</q-td>
					</q-tr>
				</template>
			</q-table>

			<q-dialog v-model="dialog">
				<q-card style="min-width: 320px; width: 60%">
					<q-card-section class="row items-center q-pb-none">
						<div class="text-h6" v-if="!courses.id">Adicionar Curso</div>
						<div class="text-h6" v-else>Editar Curso</div>
						<q-space />
						<q-btn icon="close" flat round dense v-close-popup />
					</q-card-section>
					<q-separator spaced />
					<q-card-section>
						<q-input
							class="q-mb-md"
							outlined
							color="primary"
							v-model="courses.name"
							square
							type="text"
							label="Nome"
						/>
						<q-input
							class="q-mb-md"
							outlined
							color="primary"
							v-model="courses.hours"
							square
							type="number"
							label="Quantidade de Horas"
						/>
						<q-input
							class="q-mb-md"
							outlined
							color="primary"
							v-model="courses.nameTeacher"
							square
							type="text"
							label="Nome do Professor"
						/>
						<q-input
							class="q-mb-md"
							outlined
							color="primary"
							v-model="courses.value"
							square
						              type="number"

							label="Valor"
						/>
						<q-input
							class="q-mb-md"
							outlined
							color="primary"
							v-model="courses.description"
							square
							type="textarea"
							label="Descrição"
						/>
					</q-card-section>
					<q-card-section>
					      <q-card-section>
            <q-btn
              color="primary"
              v-if="!courses.id"
                            label="Adicionar"
              @click="newCourse()"
              class="q-py-xs full-width"
            />
            <q-btn
            v-else
              color="primary"
              label="Editar"
              @click="editCourse(courses.id)"
              class="q-py-xs full-width"
            />
          </q-card-section>
					</q-card-section>
				</q-card>
			</q-dialog>
		</div>
	</q-page>
</template>

<script>
import Header from "src/components/admin/Header.vue";
import axios from 'axios'
export default {
	components: {
		Header
	},
	data() {
		return {
			dialog: false,
			filter: "",
			slide: 1,
			courses: {
				id: "",
				name: "",
				hours: "",
				value: "",
				description: "",
				nameTeacher: ""
			},
			columns: [
				{
					name: "cover",
					required: true,
					label: "Capa",
					align: "left",
					sortable: true
				},
				{
					name: "name",
					required: true,
					label: "Nome",
					align: "left",
					sortable: true
				},
				{
					name: "description",
					required: true,
					label: "Descrição",
					field: "description",
					align: "left",
					sortable: true
				},
				{
					name: "nameTeacher",
					align: "center",
					label: "Professor",
					field: "nameTeacher",
					sortable: true
				},
				{
					name: "hours",
					align: "center",
					label: "Carga Horária",
					field: "hours",
					sortable: true
				},
				{ name: "value", label: "Valor", field: "value", sortable: true },
				{ name: "actions", label: "Ações", field: "actions" }
			],
			data: [
				{
					id: 1,
					cover:
						"https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					nameTeacher: "Maria Joana",
					description: "bla bla bla bla",
					name: "Anel de coco",
					hours: 12,
					value: "12,00"
				},
				{
					id: 1,
					cover:
						"https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					nameTeacher: "Maria Joana",
					description: "bla bla bla bla",
					name: "Colar trançado biju",
					hours: 13,
					value: "15,00"
				},
				{
					id: 1,
					cover:
						"https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					nameTeacher: "Maria Joana",
					description: "bla bla bla bla",
					name: "Kit miçanga",
					hours: 23,
					value: "42,00"
				},
				{
					id: 1,
					cover:
						"https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
					nameTeacher: "Maria Joana",
					description: "bla bla bla bla",
					name: "Pulseira",
					hours: 15,
					value: "8,00"
				}
			]
		};
	},
methods: {
    async openDialog(course){
      this.courses = course;
      this.dialog = true;
    },

     async closeDialog(){
      this.courses =   {
      	id: "",
				name: "",
				hours: "",
				value: "",
				description: "",
				nameTeacher: ""    
      },
      this.dialog = false;
    },
    async newCourse() {
      const data = this.courses
      data.cover = 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      const response = await axios.post('http://localhost:3000/courses', data)
      if(response.status === 201){
        this.getAllCourses()
				this.dialog = false
				   this.$q.notify({
          color: 'positive',
          message: "Ação realizada com sucesso"
        })
      }
    },
     async editCourse(id) {
      const data = this.courses
			 data.cover = 'https://images.unsplash.com/photo-1619013971034-a2c9e56fdb6d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      const response = await axios.put('http://localhost:3000/courses/'+id, data)
      if(response.status === 200){
				this.$q.notify({
					color: "positive",
					message: "Ação realizada com sucesso!"
				})
           this.courses =   {
        name: "",
        qtd:"",
        value:"",
        description:""      
      },
      this.dialog = false
        this.getAllCourses()
      }
    },
    async deleteCourse(id) {
      this.$q.dialog({
        title: 'Deletar produto?',
        message: 'Você deseja deletar esse produto?',
        cancel: true,
        persistent: true
      }).onOk(async () => {
        const response = await axios.delete('http://localhost:3000/courses/'+id)
        if(response.status === 200){
					this.$q.notify({
						color: "positive",
						message: "Ação realizada com sucesso!"
					})
          this.getAllCourses()
        }
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
      
    },  
     async getAllCourses() {

      const response = await axios.get('http://localhost:3000/courses')
      if(response.status === 200){
			
       this.data = response.data
      }
			this.$q.loading.hide()

    },  
     async getCourse(id) {
      const response = await axios.get('http://localhost:3000/courses/'+id)
      if(response.status === 200){
			
      }
    },  
    
    },mounted(){
			this.$q.loading.show()
    this.getAllCourses()
		
  },
};
</script>

<style lang="scss" scoped>
.beige1 {
	background: $beige;
}
.border-primary {
	border: 2px solid $primary;
}
</style>