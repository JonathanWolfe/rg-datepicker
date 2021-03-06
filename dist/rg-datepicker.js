riot.tag('rg-datepicker', '<div class="container { open: opened }"> <input type="text" onclick="{ show }" value="{ date.format(this.format) }" readonly> <div class="calendar" show="{ opened }"> <div class="grid grid-row" if="{ opts.years != \'false\' }"> <div class="selector" onclick="{ prevYear }">&lsaquo;</div> <span class="year">{ date.format(this.yearFormat) }</span> <div class="selector" onclick="{ nextYear }">&rsaquo;</div> </div> <div class="grid grid-row" if="{ opts.years == \'false\' }"> <span class="year fill">{ date.format(this.yearFormat) }</span> </div> <div class="grid grid-row" if="{ opts.months != \'false\' }"> <div class="selector" onclick="{ prevMonth }">&lsaquo;</div> <span class="month">{ date.format(this.monthFormat) }</span> <div class="selector" onclick="{ nextMonth }">&rsaquo;</div> </div> <div class="grid grid-row" if="{ opts.months == \'false\' }"> <span class="month fill">{ date.format(this.monthFormat) }</span> </div> <div class="grid grid-row"> <span class="day-name" each="{ day in dayNames }">{ day }</span> </div> <div class="grid grid-wrap"> <div each="{ day in startBuffer }" onclick="{ changeDate }" class="date { in: day.inMonth, selected: day.selected, today: day.today }"> { day.date.format(this.dayFormat) } </div> <div each="{ day in days }" onclick="{ changeDate }" class="date { in: day.inMonth, selected: day.selected, today: day.today }"> { day.date.format(this.dayFormat) } </div> <div each="{ day in endBuffer }" onclick="{ changeDate }" class="date { in: day.inMonth, selected: day.selected, today: day.today }"> { day.date.format(this.dayFormat) } </div> </div> <div if="{ this.showToday }" class="grid grid-row"> <a class="shortcut" onclick="{ setToday }">Today</a> </div> </div> </div>', 'rg-datepicker .container, [riot-tag="rg-datepicker"] .container{ position: relative; display: inline-block; cursor: pointer; } rg-datepicker input, [riot-tag="rg-datepicker"] input{ font-size: 1em; padding: 10px; border: 1px solid #D3D3D3; cursor: pointer; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; outline: none; } rg-datepicker .calendar, [riot-tag="rg-datepicker"] .calendar{ position: absolute; text-align: center; background-color: white; border: 1px solid #D3D3D3; padding: 5px; width: 330px; margin-top: 10px; left: 50%; -webkit-transform: translateX(-50%); -moz-transform: translateX(-50%); -ms-transform: translateX(-50%); -o-transform: translateX(-50%); transform: translateX(-50%); -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; -webkit-box-shadow: 0 2px 10px -4px #444; -moz-box-shadow: 0 2px 10px -4px #444; box-shadow: 0 2px 10px -4px #444; } rg-datepicker .grid, [riot-tag="rg-datepicker"] .grid{ display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-items: center; -ms-flex-align: center; align-items: center; } rg-datepicker .grid-wrap, [riot-tag="rg-datepicker"] .grid-wrap{ width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; } rg-datepicker .grid-row, [riot-tag="rg-datepicker"] .grid-row{ height: 35px; } rg-datepicker .selector, [riot-tag="rg-datepicker"] .selector{ font-size: 2em; font-weight: 100; padding: 0; -webkit-flex: 0 0 15%; -ms-flex: 0 0 15%; flex: 0 0 15%; } rg-datepicker .year, [riot-tag="rg-datepicker"] .year,rg-datepicker .month, [riot-tag="rg-datepicker"] .month{ text-transform: uppercase; font-weight: normal; -webkit-flex: 0 0 70%; -ms-flex: 0 0 70%; flex: 0 0 70%; } rg-datepicker .fill, [riot-tag="rg-datepicker"] .fill{ -webkit-flex: 0 0 100%; -ms-flex: 0 0 100%; flex: 0 0 100%; } rg-datepicker .day-name, [riot-tag="rg-datepicker"] .day-name{ font-weight: bold; -webkit-flex: 0 0 14.28%; -ms-flex: 0 0 14.28%; flex: 0 0 14.28%; } rg-datepicker .date, [riot-tag="rg-datepicker"] .date{ -webkit-flex: 0 0 14.28%; -ms-flex: 0 0 14.28%; flex: 0 0 14.28%; padding: 10px; border-radius: 100%; box-sizing: border-box; font-size: 0.8em; font-weight: normal; border: 2px solid transparent; color: #cacaca; } rg-datepicker .date:hover, [riot-tag="rg-datepicker"] .date:hover{ background-color: #f3f3f3; } rg-datepicker .date.in, [riot-tag="rg-datepicker"] .date.in{ color: inherit; } rg-datepicker .today, [riot-tag="rg-datepicker"] .today{ border-color: #ededed; } rg-datepicker .selected, [riot-tag="rg-datepicker"] .selected,rg-datepicker .selected:hover, [riot-tag="rg-datepicker"] .selected:hover{ background-color: #ededed; border-color: #dedede; } rg-datepicker .shortcut, [riot-tag="rg-datepicker"] .shortcut{ -webkit-flex: 0 0 100%; -ms-flex: 0 0 100%; flex: 0 0 100%; color: #6495ed; }', function(opts) {var _this = this;

this.months = !!opts.months || true;
this.years = !!opts.years || true;

// Set today shortcut boolean
this.showToday = opts.showToday ? !!opts.showToday : true;

// Get our display formats
this.format = opts.format || 'LL';
this.yearFormat = opts.yearFormat || 'YYYY';
this.monthFormat = opts.monthFormat || 'MMMM';
this.weekFormat = opts.weekFormat || 'ddd';
this.dayFormat = opts.dayFormat || 'DD';

// Convert the given date to a moment object
this.date = moment(opts.date || false);

// Setup our bouding dates
this.beginningBound = opts.beginningBound ? moment(opts.beginningBound) : false;
this.endingBound = opts.endingBound ? moment(opts.endingBound) : false;

// Setup the weekday list
var temp = moment();
this.dayNames = [temp.day(0).format(this.weekFormat), temp.day(1).format(this.weekFormat), temp.day(2).format(this.weekFormat), temp.day(3).format(this.weekFormat), temp.day(4).format(this.weekFormat), temp.day(5).format(this.weekFormat), temp.day(6).format(this.weekFormat)];

var handleClickOutside = function handleClickOutside(e) {
	if (!_this.root.contains(e.target) && _this.opened) {
		if (opts.onclose) opts.onclose(_this.date);
		_this.opened = false;
		_this.update();
	}
};

var dayObj = function dayObj(dayDate) {
	var dateObj = dayDate || moment();

	return {
		date: dateObj,
		selected: _this.date.isSame(dayDate, 'day'),
		today: moment().isSame(dayDate, 'day'),
		inMonth: _this.date.isSame(dayDate, 'month')
	};
};

var buildCalendar = function buildCalendar() {
	var begin = moment(_this.date).startOf('month');
	var end = moment(_this.date).endOf('month');

	_this.days = [];
	_this.startBuffer = [];
	_this.endBuffer = [];

	for (var i = begin.weekday(); i >= 0; i -= 1) {
		var bufferDate = moment(begin).subtract(i, 'days');
		_this.startBuffer.push(dayObj(bufferDate));
	};

	for (var i = end.date() - 1; i > 0; i -= 1) {
		var current = moment(begin).add(i, 'days');
		_this.days.unshift(dayObj(current));
	};

	for (var i = end.weekday(); i < 6; i += 1) {
		var bufferDate = moment(end).add(i, 'days');
		_this.endBuffer.push(dayObj(bufferDate));
	};

	_this.opts.date = _this.date.toDate();
	_this.update();
};

this.on('mount', function () {
	document.addEventListener('click', handleClickOutside);
});

this.on('unmount', function () {
	document.removeEventListener('click', handleClickOutside);
});

// Handle the clicks on dates
this.changeDate = function (e) {
	var day = e.item.day;
	_this.date = day.date;

	if (opts.onselect) opts.onselect(_this.date);

	buildCalendar();
};

// Handle today shortcut
this.setToday = function () {
	_this.date = opts.date = moment();
	buildCalendar();
};

// Handle the previous year change
this.prevYear = function () {
	_this.date = moment(_this.date).subtract(1, 'year').startOf('month');
	buildCalendar();
};

// Handle the next month change
this.nextYear = function () {
	_this.date = moment(_this.date).add(1, 'year').startOf('month');
	buildCalendar();
};

// Handle the previous month change
this.prevMonth = function () {
	_this.date = moment(_this.date).subtract(1, 'month').startOf('month');
	buildCalendar();
};

// Handle the next month change
this.nextMonth = function () {
	_this.date = moment(_this.date).add(1, 'month').startOf('month');
	buildCalendar();
};

// Show/hide the datepicker
this.show = function () {
	if (opts.onopen) opts.onopen();
	buildCalendar();
	_this.opened = true;
};
});
