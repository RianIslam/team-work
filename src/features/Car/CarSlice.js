import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
  // image:'https://images.unsplash.com/photo-1566473965997-3de9c817e938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  image:'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
  title:'Aventador S',
  details:'Safety is the most important part of the overall Model 3 designhe metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test,Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.',
  power:'1050 hp',
  speed:'200 mph',
  range:'350 mi',
},
{ image:'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
  title:'Huracán',
  details:'Safety is the most important part of the overall Model 3 designhe metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test,Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.',


  power:'1020hp',
  speed:'220mph',
  range:'320mi',
},
{ image:'https://images.pexels.com/photos/4635345/pexels-photo-4635345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  title:'Urus',
  details:'Safety is the most important part of the overall Model 3 designhe metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test,Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.',

  power:'1060hp',
  speed:'300mph',
  range:'320mi',
},
{ image:'https://images.unsplash.com/photo-1570829174962-38c53efc5e5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTR8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80',
  title:'Huracán EVO',
  details:'Safety is the most important part of the overall Model 3 designhe metal structure is a combination of aluminum and steel, for maximum strength in every area. In a roof-crush test,Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.',

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