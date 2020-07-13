import {UPDATESEARCHNAME} from "./mutation_types"
export default {
  [UPDATESEARCHNAME]({commit},searchName){
    commit(UPDATESEARCHNAME,searchName)
  }
}
