// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import Badge from '@mui/material/Badge';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import CheckIcon from '@mui/icons-material/Check';

// function App() {
//   const [value, setValue] = useState(new Date());
//   const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);
//   return (
//     <div className="text-center p-[2rem] ml-auto mr-auto mt-[10%] max-w-[1280px]">
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <StaticDatePicker
//           variant='static'
//           orientation='portrait'
//           value={value}
//           disableFuture
//           onChange={(newValue) => setValue(newValue)}
//           renderInput={(params) => {
//             <TextField {...params} />;
//           }}
//           renderDay={(day, _value, DayComponentProps) => {
//             const isSelected =
//               !DayComponentProps.outsideCurrentMonth &&
//               highlightedDays.indexOf(day.getDate()) >= 0;

//             return (
//               <Badge
//                 key={day.toString()}
//                 overlap='circular'
//                 badgeContent={isSelected ? <CheckIcon color='red' /> : undefined}
//               >
//                 <PickersDay {...DayComponentProps} />
//               </Badge>
//             );
//           }}
//         />
//       </LocalizationProvider>
//     </div>
//   )
// }

// export default App;

import React, { useState } from 'react';
function App() {
  return (
    <div className="text-center p-[2rem] ml-auto mr-auto mt-[10%] max-w-[1280px]">
      <p>Calendar</p>
    </div>
  )
}

export default App;

// import * as React from 'react';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

// export default function StaticDatePickerLandscape() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <StaticDatePicker orientation="landscape" />
//     </LocalizationProvider>
//   );
// }