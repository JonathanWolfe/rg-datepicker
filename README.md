<img src="https://raw.githubusercontent.com/RiotGear/rg-datepicker/master/demo/img/example.png" width="500px" />

### Use

Add this to your Riot app markup

```html
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
```

and add this to your Javascript to handle the events that the component raises

```js
this.opened = function () { ... }

this.closed = function (date) { ... }

this.selected = function (date) { ... }
```

- `date` defaults to today if you don't specify one. Can be a string or a Date/Moment object
- `format` format of the date in the text box. Defaults to 'LL' ("July 21, 2015")
- `yearFormat` format of the years in the calendar box. Defaults to 'YYYY' (2015)
- `monthFormat` format of the month in the calendar box. Defaults to 'MMMM' (January)
- `weekFormat` format of the week in the calendar box. Defaults to 'ddd' (Sun)
- `dayForma` format of the day in the calendar box. Defaults to 'DD' (01)
- `months` and `years` when set to false will turn off the month and year incredment controls.
- `showToday` will toggle the today button shortcut

This component relies on a third party date management library called **Moment**. You can find more information
about Moment from their website at <a href="http://momentjs.com/">http://momentjs.com/</a>.