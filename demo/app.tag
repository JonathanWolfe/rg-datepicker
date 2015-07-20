<demo-app>

	<rg-datepicker date="2015-07-18" format="LL" onopen="{ opened }" onclose="{ closed }" onselect="{ selected }"></rg-datepicker>

	<script>
		var _this = this;
		_this.opened = function () {
			console.log('opened');
		};

		_this.closed = function (date) {
			console.log('closed');
			console.log(date);
		};

		_this.selected = function (date) {
			console.log('selected');
			console.log(date);
		};
	</script>

</demo-app>