const _ = require('lodash')

const code = {
	"SUCCESS": {codeName:"SUCCESS",status:0,msg:"success"},
	"SYSTEM_ERROR": {codeName:"SYSTEM_ERROR",status:101,msg:"系统异常"},
	"DB_ERROR": {codeName:"DB_ERROR",status:201,msg: "数据库异常"},
	"DB_DISCONNECT": {codeName:"DB_DISCONNECT",status:202,msg: "数据库连接失败"},
	"PARAMETER_ERROR": {codeName:"PARAMETER_ERROR",status:301,msg: "参数错误"},
	"PARAMETER_NOT_ENOUGH_ERROR": {codeName:"PARAMETER_NOT_ENOUGH_ERROR",status:302,msg: "缺少参数"},
	"PARAMETER_LACK_APINAME_ERROR": {codeName:"PARAMETER_LACK_APINAME_ERROR",status:3021,msg: "缺少标题"},
	"PARAMETER_LACK_URL_INFO_ERROR": {codeName:"PARAMETER_LACK_URL_INFO_ERROR",status:3022,msg: "缺少服务名或接口地址"},
	"PARAMETER_LACK_SEARCH_TYPE_ERROR": {codeName:"PARAMETER_LACK_SEARCH_TYPE_ERROR",status:3023,msg: "缺少搜索类型"},
	"RESULT_NOT_FOUND": {codeName:"RESULT_NOT_FOUND",status:303,msg:"暂无数据"},
	"DATA_INSERT_FAIL": {codeName:"DATA_INSERT_FAIL",status:304,msg:"添加失败"},
	"DATA_EXIST_INSERT_FAIL": {codeName:"DATA_EXIST_INSERT_FAIL",status:3041,msg:"已存在相同数据"},
	"DATA_DELETE_FAIL": {codeName:"DATA_DELETE_FAIL",status:305,msg:"删除失败"},
	"DATA_DELETE_AGAIN_FAIL": {codeName:"DATA_DELETE_AGAIN_FAIL",status:3051,msg:"该数据已不存在"},
	"DATA_UPDATE_FAIL": {codeName:"DATA_UPDATE_FAIL",status:306,msg:"修改失败"}
}

class resCode {
	constructor(status, data) {
		this.status = status;
		this.data = data;
	}

	resultBody(){
		let self = this
		_.findKey(code, function(v,k){
			if ( k == self.status ) {
				self.obj = {
					status: v.status,
					msg: v.msg,
					data: self.data
				}
			}
		})
		return this.obj
	}
}

module.exports = resCode