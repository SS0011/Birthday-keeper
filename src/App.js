import React, { useState, useRef } from 'react';
import style from './App.module.css';
import { usersDataList } from './RecoilState';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import Select from './Select';
import { GrUpload } from 'react-icons/gr';
import { dateArray, monthArray, yearArray } from './Fixtures/Const';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [usersList, setUsersList] = useRecoilState(usersDataList);
  const inputRef = useRef(null);

  const onImageChange = (event) => {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = () => {
    if(!firstName || !lastName || !age || !date || !month || !year || !image ){
      alert("Please Fill All The Details Then Submit")
    }else{
      const userDetails = {
        firstName,
        lastName,
        age,
        date,
        month,
        year,
        image,
      };
      console.log(userDetails);
      setUsersList([userDetails, ...usersList]);
      alert("You have successfully register yourself..!! Now You Can Check Birthday Feeds")
      setFirstName("")
      setLastName("")
      setAge("")
      setDate("")
      setMonth("")
      setYear("")
      setImage("")
    }
  };

  const handleDate = (e) => {
    console.log(e.target.value, 'date');
    setDate(e.target.value);
  };
  const handleMonth = (e) => {
    console.log(e.target.value, 'months');
    setMonth(e.target.value);
  };
  const handleYear = (e) => {
    console.log(e.target.value, 'year');
    setYear(e.target.value);
  };

  function handlePhotoUpload() {
    inputRef.current.click();
  }

  return (
    <>
      <div className={style.mainWrapper}>
        <div className={style.main}>
        <Link className={style.link} to="/feeds"> Check BirthDay Feeds</Link>
          <div onClick={handlePhotoUpload} className={style.uploadAndPic}>
            <GrUpload />
            <p className={style.uploadAndPicText}>
              {image ? 'Change Picture' : ' Upload Picture'}
            </p>
            <input
              ref={inputRef}
              hidden
              className={style.picInput}
              type="file"
              onChange={onImageChange}
              className="filetype"
            />

            {image ? (
              <img
                className={style.picPreview}
                width="100px"
                height="100px"
                src={image}
                alt="preview image"
              />
            ) : (
              ''
            )}
          </div>
          <input
            value={firstName}
            className={style.text}
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            value={lastName}
            className={style.text}
            type="text"
            placeholder="Last name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            value={age}
            className={style.text}
            type="number"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />

          <div>
            <Select
              className={style.select}
              onChange={handleDate}
              defaultValue="Date"
              dateArray={dateArray}
            />
            <Select
              className={style.select}
              onChange={handleMonth}
              defaultValue="Month"
              dateArray={monthArray}
            />
            <Select
              className={style.select}
              onChange={handleYear}
              defaultValue="Year"
              dateArray={yearArray}
            />
          </div>

          <button onClick={handleSubmit} className={style.btn}>
            Submit
          </button>
        </div>
      
      </div>
    </>
  );
}
