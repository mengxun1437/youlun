const baseURL = 'https://www.mengxun.online/youlun';
const header = {
  "Content-Type":"application/json"
}

const getUserOpenId = (code) => new Promise((resolve,reject)=>{
  wx.request({
    url:`https://mengxun.online/cxsj4/user/openId?code=${code}`,
    method:'GET',
    header:header,
    success(res){
      resolve(res);
    },
    fail(err){
      reject(err);
    }
  })
})

const getAllCuriseInfo =(curiseId) => new Promise((resolve,reject)=>{
  wx.request({
    url:`${baseURL}/curise/${curiseId}`,
    method:'GET',
    header:header,
    success(res){
      resolve(res);
    },
    fail(err){
      reject(err);
    }
  })
})

const getRoomInfoByCuriseId = (curiseId) => new Promise((resolve,reject)=>{
  wx.request({
    url:`${baseURL}/rooms/${curiseId}`,
    method:"GET",
    header:header,
    success(res){
      resolve(res);
    },
    fail(err){
      reject(err);
    }
  })
})

const getRoomDetailId = (curiseId,roomId) => new Promise((resolve,reject)=>{
  wx.request({
    url:`${baseURL}/rooms/?curiseId=${curiseId}&roomId=${roomId}`,
    method:"GET",
    header:header,
    success(res){
      resolve(res);
    },
    fail(err){
      reject(err);
    }
  })
})

const getUserAllOrderList = (openId)=> new Promise((resolve,reject)=>{
  wx.request({
    url: `${baseURL}/order/${openId}`,
    method:"GET",
    header:header,
    success(res){
      resolve(res);
    },
    fail(err){
      reject(err);
    }
  })
})

const addNewOrder= (openId,curiseId,roomId,users)=> new　Promise((resolve,reject)=>{
  wx.request({
    url: `${baseURL}/order/${openId}`,
    method:"POST",
    header:header,
    data:{
      curiseId,roomId,users
    },
    success(res){
      resolve(res);
    },
    fail(err){
      reject(err);
    }
  })
})

const cancelOrder = (orderId) => new Promise((resolve,reject)=>{
  wx.request({
    url: `${baseURL}/order/${orderId}`,
    method:"DELETE",
    header:header,
    success(res){
      resolve(res);
    },
    fail(err){
      reject(err);
    }
  })
})

export{
  getAllCuriseInfo,getRoomInfoByCuriseId,getRoomDetailId,addNewOrder,cancelOrder,getUserAllOrderList,getUserOpenId
}