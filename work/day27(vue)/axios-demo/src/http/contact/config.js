export default {
  api:{
    getContactList:{
      url:"/contactList",
      method:"get"
    },
    deleteContact:{
      url:"/contact",
      method:"delete"
    },
    addContactByForm:{
      url:"/contact/new/form",
      method:"post",
      transfromType:"form"  //当前请求体要使用formdata的格式
    },
    addContactByJson:{
      url:"/contact/new/json",
      method:"post"
    },
    editContact:{
      url:"/contact/edit",
      method:"put"
    }
  }
}
