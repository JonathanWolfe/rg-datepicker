<demo-app>

	<p>{ date }</p>

	<rg-datepicker date="2014-01-01"
	               format="LL"
	               yearFormat="YYYY"
	               monthFormat="MMMM"
	               weekFormat="ddd"
	               dayFormat="DD"
	               months="true"
	               years="true"
	               showToday="true"
	               onopen="{ opened }"
	               onclose="{ closed }"
	               onselect="{ selected }">
	</rg-datepicker>

	<script>
		this.opened = () => console.log('opened')

		this.closed = date => {
			this.date = date
			console.log('closed', date)
			this.update()
		};

		this.selected = date => console.log('selected', date)

		this.invalid = date => console.log('invalid', date)
	</script>

</demo-app>
