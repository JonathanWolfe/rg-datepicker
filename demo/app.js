riot.tag('demo-app', '<p>{ date }</p> <rg-datepicker date="2014-01-01" format="LL" yearFormat="YYYY" monthFormat="MMMM" weekFormat="ddd" dayFormat="DD" months="true" years="true" showToday="true" beginningBound="2000-01-01" endingBoud="2016-01-01" onopen="{ opened }" onclose="{ closed }" onselect="{ selected }" oninvalid="{ invalid }"> </rg-datepicker>', function(opts) {var _this = this;

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

this.invalid = function (date) {
	return console.log('invalid', date);
};
});
