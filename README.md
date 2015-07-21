<img src="https://raw.githubusercontent.com/RiotGear/rg-datepicker/master/demo/img/example.png" width="500px" />

### Use

Add this to your Riot app markup

```html
<rg-datepicker date="2015-07-18"
               format="LL"
               months="false"
               years="false"
               onopen="{ opened }"
               onclose="{ closed }"
               onselect="{ selected }">
</rg-datepicker>
```

and add this to your Javascript to handle the events that the component raises

```
this.opened = function () { ... }

this.closed = function (date) { ... }

this.selected = function (date) { ... }
```

- `date` defaults to today if you don't specify one.
- `format` format of the date in the text box. Defaults to 'LL' = "July 21, 2015"
- `months` and `years` when set to false will turn off the month and year incredment controls.

This component relies on a third party date management library called **Moment**. You can find more information 
about Moment from their website at <a href="http://momentjs.com/">http://momentjs.com/</a>.