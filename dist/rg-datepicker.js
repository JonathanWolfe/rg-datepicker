riot.tag('rg-datepicker', '<div class="container { open: opened }"> <input type="text" onclick="{ show }" value="{ date.format(opts.format || \'LL\') }" readonly> <div class="calendar" show="{ opened }"> <div class="grid grid-row"> <div class="selector" onclick="{ prevMonth }">&lsaquo;</div> <span class="month">{ date.format(\'MMMM\') }</span> <div class="selector" onclick="{ nextMonth }">&rsaquo;</div> </div> <div class="grid grid-row"> <span class="day-name" each="{ day in dayNames }">{ day }</span> </div> <div class="grid grid-wrap"> <div each="{ day in days }" onclick="{ changeDate }" class="date { in: day.inMonth, selected: day.selected, today: day.today }"> { day.date.format(\'DD\') } </div> </div> <div class="grid grid-row"> <a class="shortcut" onclick="{ setToday }">Today</a> </div> </div> </div>', 'rg-datepicker .container, [riot-tag="rg-datepicker"] .container{ position: relative; display: inline-block; cursor: pointer; } rg-datepicker input, [riot-tag="rg-datepicker"] input{ font-size: 1em; padding: 10px; border: 1px solid #D3D3D3; cursor: pointer; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; outline: none; } rg-datepicker .calendar, [riot-tag="rg-datepicker"] .calendar{ position: absolute; text-align: center; background-color: white; border: 1px solid #D3D3D3; padding: 0 5px; width: 310px; margin-top: 10px; left: 50%; -webkit-transform: translateX(-50%); -moz-transform: translateX(-50%); -ms-transform: translateX(-50%); -o-transform: translateX(-50%); transform: translateX(-50%); -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; -webkit-box-shadow: 0 2px 10px -4px #444; -moz-box-shadow: 0 2px 10px -4px #444; box-shadow: 0 2px 10px -4px #444; } rg-datepicker .grid, [riot-tag="rg-datepicker"] .grid{ display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-align-items: center; -ms-flex-align: center; align-items: center; } rg-datepicker .grid-wrap, [riot-tag="rg-datepicker"] .grid-wrap{ width: 100%; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; } rg-datepicker .grid-row, [riot-tag="rg-datepicker"] .grid-row{ height: 35px; } rg-datepicker .selector, [riot-tag="rg-datepicker"] .selector{ font-size: 2em; font-weight: 100; padding: 0; -webkit-flex: 0 0 15%; -ms-flex: 0 0 15%; flex: 0 0 15%; } rg-datepicker .month, [riot-tag="rg-datepicker"] .month{ text-transform: uppercase; font-weight: normal; -webkit-flex: 0 0 70%; -ms-flex: 0 0 70%; flex: 0 0 70%; } rg-datepicker .day-name, [riot-tag="rg-datepicker"] .day-name{ font-weight: bold; -webkit-flex: 0 0 14.28%; -ms-flex: 0 0 14.28%; flex: 0 0 14.28%; } rg-datepicker .date, [riot-tag="rg-datepicker"] .date{ -webkit-flex: 0 0 14.28%; -ms-flex: 0 0 14.28%; flex: 0 0 14.28%; padding: 12px; box-sizing: border-box; font-size: 0.8em; border-radius: 100%; font-weight: normal; border: 2px solid transparent; color: #cacaca; } rg-datepicker .date:hover, [riot-tag="rg-datepicker"] .date:hover{ background-color: #f3f3f3; } rg-datepicker .date.in, [riot-tag="rg-datepicker"] .date.in{ color: inherit; } rg-datepicker .today, [riot-tag="rg-datepicker"] .today{ border-color: #ededed; } rg-datepicker .selected, [riot-tag="rg-datepicker"] .selected,rg-datepicker .selected:hover, [riot-tag="rg-datepicker"] .selected:hover{ background-color: #ededed; border-color: #dedede; } rg-datepicker .shortcut, [riot-tag="rg-datepicker"] .shortcut{ -webkit-flex: 0 0 100%; -ms-flex: 0 0 100%; flex: 0 0 100%; color: #6495ed; }', function(opts) {
		var _this = this;
		_this.date = moment(opts.date || new Date());

		function handleClickOutside(e) {
			if (!_this.root.contains(e.target) && _this.opened) {
				if (opts.onclose) {
					opts.onclose(_this.date);
				}
				_this.opened = false;
				_this.update();
			}
		}

		function buildCalendar() {
			var cursor = moment(_this.date);
			var end = moment(cursor);

			cursor.startOf('month');
			cursor.day(0);

			end.endOf('month');
			end.day(6);

			_this.dayNames = [];
			_this.days = [];

			while (cursor.isBefore(end)) {
				if (_this.dayNames.length < 7) {
					_this.dayNames.push(cursor.format('dd'));
				}

				_this.days.push({
					date: moment(cursor),
					selected: _this.date.isSame(cursor, 'day'),
					today: moment().isSame(cursor, 'day'),
					inMonth: _this.date.isSame(cursor, 'month')
				});

				cursor = cursor.add(1, 'days');
			}
			_this.opts.date = _this.date.toDate();
			_this.update();
		}

		_this.on('mount', function () {
			document.addEventListener('click', handleClickOutside);
		});

		_this.on('unmount', function () {
			document.removeEventListener('click', handleClickOutside)
		});

		_this.changeDate = function (e) {
			_this.date = e.item.day.date;
			if (opts.onselect) {
				opts.onselect(_this.date);
			}
			buildCalendar();
		};

		_this.setToday = function () {
			_this.date = opts.date = moment();
			if (opts.onselect) {
				opts.onselect(_this.date);
			}
			buildCalendar();
		};

		_this.prevMonth = function () {
			_this.date.subtract(1, 'month');
			buildCalendar();
		};

		_this.nextMonth = function () {
			_this.date.add(1, 'month');
			buildCalendar();
		};

		_this.show = function () {
			if (opts.onopen) {
				opts.onopen();
			}
			buildCalendar();
			_this.opened = true;
		};
	
});