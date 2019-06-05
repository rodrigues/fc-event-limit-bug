import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGrid from '@fullcalendar/timegrid'

import '../node_modules/@fullcalendar/core/main.css'
import '../node_modules/@fullcalendar/daygrid/main.css'
import '../node_modules/@fullcalendar/timegrid/main.css'

const events = [
  {title: 'A', start: '2019-06-05T09:00:00Z', end: '2019-06-05T10:00:00Z'},
  {title: 'B', start: '2019-06-05T13:00:00Z', end: '2019-06-05T14:00:00Z'},
  {title: 'C', start: '2019-06-05T15:00:00Z', end: '2019-06-05T16:00:00Z'},
  {title: 'D', start: '2019-06-05T17:00:00Z', end: '2019-06-05T18:00:00Z'},
  {title: 'E', start: '2019-06-05T19:00:00Z', end: '2019-06-05T21:00:00Z'},
  {title: 'F', start: '2019-06-05T21:00:00Z', end: '2019-06-05T22:00:00Z'},
  {title: 'G', start: '2019-06-05T21:00:00Z', end: '2019-06-06T05:10:00Z'}
]

const App = () => {
  return (
    <FullCalendar
      events={events}
      eventLimit={() => 5}
      plugins={[dayGridPlugin, timeGrid]} />
  )
}

export default App
