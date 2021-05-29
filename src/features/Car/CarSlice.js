import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    { image:'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  title:'MODEL S',
  details:'',
  power:'1050 hp',
  speed:'200 mph',
  range:'350 mi',
},
{ image:'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
  title:'MODEL 3',
  details:'',
  power:'1020hp',
  speed:'220mph',
  range:'320mi',
},
{ image:'https://robbreport.com/wp-content/uploads/2020/07/6-3.jpg',
  title:'MODEL X',
  details:'',
  power:'1060hp',
  speed:'300mph',
  range:'320mi',
},
{ image:'https://images.unsplash.com/photo-1570829174962-38c53efc5e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  title:'MODEL Y',
  details:'',
  power:'1030hp',
  speed:'350mhp',
  range:'300mi',
},
]

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {}
})

// export const selectCars = state => state.car.cars

export default carSlice.reducer;