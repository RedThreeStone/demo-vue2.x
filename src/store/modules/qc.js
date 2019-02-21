const state={
  name:""
}

const getters={
  chineseName:function (state,getters,rootState,rootGetters) {
    return "中文名:"+this.state.name;
  }
}

const mutations={
  chineseName:function (state,getters,rootState,rootGetters,newName) {
    state.name=newName;
  }
}

const actions={
  sayChineseNameDelay:function (context) {
    alert("我是sayChineseNameDelay");
    context.commit('chineseName');
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}


