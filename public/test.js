var a = 100;
var that = null;
console.log(this)
function start(obj){
	that = obj;
	console.log(that)
	this.msg = "lucy"
	return this.msg
}

function aa(){
	console.log("aa function")
	console.log(this.msg)
	return "aa result"
}

return {
	a,
	aa,
	start,
	that
}