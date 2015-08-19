riot.tag('demo-app', '<p>{ date }</p> <rg-datepicker date="2015-07-18" format="LL" onopen="{ opened }" onclose="{ closed }" onselect="{ selected }"></rg-datepicker>', function(opts) {var _this = this;

this.opened = function () {
	return console.log('opened');
};

this.closed = function (date) {
	_this.date = date;
	console.log('closed', date);
	_this.update();
};

this.selected = function (date) {
	return console.log('selected', date);
};
});
