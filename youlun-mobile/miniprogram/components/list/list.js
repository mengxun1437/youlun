// components/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    name:{
      type:String,
      value:''
    },

    src:{
      type:String,
      value:''
    },

    link:{
      type:String,
      value:""
    },

    linkText:{
      type:String,
      value:''
    }


  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick:(e)=>{
      const link = e.currentTarget.dataset.link
      if(!link) return
      wx.navigateTo({
        url: link,
      })
    }
  }
})
