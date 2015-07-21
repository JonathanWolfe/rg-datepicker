riot.tag('demo-app', '<p>{ date }</p> <rg-datepicker date="2015-07-18" format="LL" onopen="{ opened }" onclose="{ closed }" onselect="{ selected }"></rg-datepicker>', function(opts) {
		var _this = this;
_this.opened = function () {
	console.log('opened');
}.bind(this);

_this.closed = function (date) {
	_this.date = date;
	console.log('closed');
	console.log(date);
	_this.update();
}.bind(this);

_this.selected = function (date) {
	console.log('selected');
	console.log(date);
}.bind(this);
	
});