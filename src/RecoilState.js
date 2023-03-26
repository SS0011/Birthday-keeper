import {atom} from 'recoil'

export const usersDataList = atom({
  key : "usersDataList",
  default : [
    {
      firstName: "Ashar",
      lastName: "Ahmad",
      age: "25",
      date: "21",
      month: "09",
      year : "1997",
      image: "https://inspirationseek.com/wp-content/uploads/2016/02/Cute-Dog-Images.jpg",
    },
    {
      firstName: "Harshit",
      lastName: "Mishra",
      age: "20",
      date: "17",
      month: "02",
      year : "2000",
      image: "http://www.pixelstalk.net/wp-content/uploads/2016/08/Cute-Puppy-Bulldog-Background.jpeg",
    },
    {
      firstName: "Abhishek",
      lastName: "Kumar",
      age: "23",
      date: "18",
      month: "02",
      year : "2003",
      image: "http://3.bp.blogspot.com/-28TYEvTXzw8/UQqIuF-mqvI/AAAAAAAAAk0/Ppo2mQx9kL0/s1600/cute-dog+88.jpg",
    },
    {
      firstName: "Subhali",
      lastName: "Shah",
      age: "21",
      date: "15",
      month: "08",
      year : "1999",
      image: "https://tse1.mm.bing.net/th?id=OIP.0HjF9Z0pNw3oi0P5i0pfsQHaFj&pid=Api&P=0",
    },
    {
      firstName: "Sweta",
      lastName: "Raz",
      age: "22",
      date: "12",
      month: "10",
      year : "1997",
      image: "https://i.pinimg.com/originals/73/c5/34/73c534c1f60b589e23809bea72d7907e.jpg",
    },
    {
      firstName: "Ritu",
      lastName: "Jaiswal",
      age: "18",
      date: "18",
      month: "02",
      year : "1997",
      image: "https://tse3.mm.bing.net/th?id=OIP.eGZTyqA2KJull4-KKDi92wHaEo&pid=Api&P=0",
    },
 
  ]
})