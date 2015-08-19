<demo-app>

	<p>{ date }</p>

	<rg-datepicker date="2015-07-18" format="LL" onopen="{ opened }" onclose="{ closed }" onselect="{ selected }"></rg-datepicker>

	<script>
		this.opened = () => console.log('opened')

		this.closed = date => {
			this.date = date
			console.log('closed', date)
			this.update()
		};

		this.selected = date => console.log('selected', date)
	</script>

</demo-app>
