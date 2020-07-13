import {UPDATESEARCHNAME} from "./mutation_types"
export default {
  [UPDATESEARCHNAME](state,searchName){
      state.searchName = searchName
  }
}
