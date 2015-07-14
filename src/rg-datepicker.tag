<rg-datepicker>
  <div class="container">
    <input
      type="text"
      class="field { open: opened}"
      onclick="{toggle}"
      value="{dateText()}"
      readonly/>
    <div class="datepicker-cal" show={opened}>
      <table>
        <thead>
          <tr>
            <th each={day in days}>{day}</th>
          </tr>
        </thead>
        <tbody>
          <tr each={week in weeks}>
            <td each={day in week} onclick={parent.parent.changeDate}>
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
    }
    .container .datepicker-cal tbody tr td:hover {
      background: #ccc;
    }
  </style>

  <script>
    this.date = opts.date || new Date();
    this.days = [];

    let calendarDiv;

    this.dateText = () => {
      return moment(this.date).format('LL')
    }

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

    /**
     * Create the array of dates to shown
     */
    this.buildCalendar = () => {
      let i = 0;
      let m = moment(this.date)
      let end = moment(m)
      let weekCount = m.format('w')
      let week = []
      m.startOf('month')
      m.day(0)
      end.endOf('month')
      end.day(6)

      this.days = []
      this.weeks = []

      while (m.isBefore(end)) {
        if (this.days.length < 7) {
          this.days.push(m.format('dd'))
        }

        week.push([m.format('DD'), moment(m)])
        if (m.day() > 5) {
          this.weeks.push(week)
          week = []
        }

        m = m.add(1, 'days')
      }

      this.weeks.push(week)
      this.update()
    }

    /**
     * Handle the clicks on dates
     */
    this.changeDate = (e) => {
      this.date = e.item[1]
      this.buildCalendar()
    }

    /**
     * Show/hide the datepicker
     */
    this.toggle = (e) => {
      this.opened = !this.opened
    }
  </script>

</rg-datepicker>
