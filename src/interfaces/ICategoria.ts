import type SelecionarIngredientes from "@/components/SelecionarIngredientes.vue";

export default interface ICategoria {
  nome: string,
  ingredientes: string[],
  imagem: string
}