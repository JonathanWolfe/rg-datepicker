<rg-datepicker>
  <div class="container">
    <input
      type="text"
      onclick="{toggle}"
      value="{dateText()}"
      readonly>

    <div class="datepicker-cal" show={opened}>
      <table>
        <thead>
          <tr>
            <th onclick={prevMonth}>&laquo;</th>
            <th colspan="5">{dateMonthText()}</th>
            <th onclick={nextMonth}>&raquo;</th>
          </tr>
          <tr>
            <th each={day in days}>{day}</th>
          </tr>
        </thead>
        <tbody>
          <tr each={week in weeks}>
            <td each={day in week}
              onclick={changeDate}
              class={in: inMonth(day[1])}>
              {day[0]}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>


  <style scoped>
    .container {
      position: relative;
      display: inline-block;
      border: 1px solid red;
    }

    .container .datepicker-cal tbody tr td {
      cursor: pointer;
      font-style: italic;
      color: gray;
    }

    .container .datepicker-cal tbody tr td.in {
      font-style: normal;
      color: darkblue;
    }

    .container .datepicker-cal tbody tr td:hover {
      background: #ccc;
    }
  </style>

  <script>
    this.date = opts.date || new Date();
    this.days = [];

    let handleClickOutside = (e) => {
			if (!this.root.contains(e.target) && this.opened) {
        this.toggle()
        this.update()
			}
		}

    this.on('mount', () => {
      document.addEventListener('click', handleClickOutside);
      this.buildCalendar()
    })

    this.on('unmount', () => {
      document.removeEventListener('click', handleClickOutside)
    })

    this.on('update', () => this.buildCalendar())

    /**
     * Show formated date
     */
    this.dateText = () => {
      return moment(this.date).format('LL')
    }

    /**
     * Show completed month name
     * @return {[type]} [description]
     */
    this.dateMonthText = () => {
      return moment(this.date).format('MMMM')
    }

    /**
     * Create the array of dates to shown
     */
    this.buildCalendar = () => {
      let cursor = moment(this.date)
      let end = moment(cursor)
      let week = []

      // Set cursor to start of the month and start of the week
      cursor.startOf('month')
      cursor.day(0)
      // end of month and end of week
      end.endOf('month')
      end.day(6)

      this.days = []
      this.weeks = []

      do {
        if (this.days.length < 7) {
          this.days.push(cursor.format('dd'))
        }

        week.push([cursor.format('DD'), moment(cursor)])
        if (cursor.day() > 5) {
          this.weeks.push(week)
          week = []
        }

        cursor = cursor.add(1, 'days')
      } while (cursor.isBefore(end))
    }

    /**
     * Handle the clicks on dates
     */
    this.changeDate = (e) => {
      this.date = e.item.day[1]
      this.update()
    }

    /**
     * Handle the previous month change
     */
    this.prevMonth = (e) => {
      this.date = moment(this.date).subtract(1, 'month').toDate()
      this.update()
    }

    /**
     * Handle the next month change
     */
    this.nextMonth = (e) => {
      this.date = moment(this.date).add(1, 'month').toDate()
      this.update()
    }

    /**
     * Show/hide the datepicker
     */
    this.toggle = (e) => {
      this.opened = !this.opened
    }

    this.inMonth = (date) => moment(this.date).isSame(moment(date), 'month')
  </script>

</rg-datepicker>
