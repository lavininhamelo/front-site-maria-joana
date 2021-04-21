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
             <q-btn color="primary"  label="Novo produto" unelevated  class="ml-lg"/>

        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  components: {
    Header,
  },
  data() {
    return {
      filter: "",
      slide: 1,
      columns: [
        {
          name: "name",
          required: true,
          label: "Nome",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
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
      ],
      data: [
        {
          name: "Anel de coco",
          qtd: 12,
          value: "R$ 12,00",
        },
        {
          name: "Colar trançado biju",
          qtd: 13,
          value: "R$ 15,00",
        },
        {
          name: "Kit miçanga",
          qtd: 23,
          value: "R$ 42,00",
        },
        {
          name: "Pulseira",
          qtd: 15,
          value: "R$ 8,00",
        },
      ],
    };
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