import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { usersDataList } from './RecoilState';
import { Link } from 'react-router-dom';
import Select from './Select';
import style from './Feed.module.css';

export default function Feed() {
  let currentDate = new Date().getDate();
  let currentMonth = new Date().getMonth() + 1;

  const userData = useRecoilValue(usersDataList);
  const [filterlist, setFilterList] = useState('');
  const [random, setRandom] = useState(userData);

  const DateWiseFilter = [
    'Today',
    'Yesterday',
    'Tommorow',
    'Day After Tommorow',
    'All User List',
  ];

  function handleFilter(e) {
    setFilterList(e.target.value);
    console.log(e.target.value);
    if (e.target.value === 'Today') {
      setRandom(todayBirthday);
    } else if (e.target.value === 'Yesterday') {
      setRandom(yesterdayBirthday);
    } else if (e.target.value === 'Tommorow') {
      setRandom(tommorowBirthday);
    } else if (e.target.value === 'Day After Tommorow') {
      setRandom(dayAfterTommorowBirthday);
    } else if (e.target.value === 'All User List') {
      setRandom(userData);
    }
  }

  
  const todayBirthday = userData.filter(
    (x) => x.date == currentDate && x.month == currentMonth
  );
  const yesterdayBirthday = userData.filter(
    (x) => x.date == currentDate - 1 && x.month == currentMonth
  );
  const tommorowBirthday = userData.filter(
    (x) => x.date == currentDate + 1 && x.month == currentMonth
  );
  const dayAfterTommorowBirthday = userData.filter(
    (x) => x.date == currentDate + 2 && x.month == currentMonth
  );

  return (
    <>
    <div className={style.mainWrap}>
      <div className={style.main}>
      <Link  className={style.link} to="/">Register Your Self</Link>
      <div className={style.filterText}>
        {/* <p>Filter by Birth Date &#x2192;</p> */}
        <Select
          onChange={handleFilter}
          defaultValue="Filter Category"
          className={style.select}
          dateArray={DateWiseFilter}
        />
        </div>
        {random === userData ? (
          ''
        ) : (
          <h2 className={style.countBirthday}>
            {random.length} user birthday{' '}
          </h2>
        )}
        {random.map((element, index) => (
          <div className={style.listMain}>
            <img
              className={style.image}
              width="70px"
              height="70px"
              src={element.image}
              alt="profile Pic"
            />
            <div>
              <div className={style.data}>
                <span className={style.name}>{element.firstName}</span>&nbsp;
                <span className={style.name}>{element.lastName}</span>
                <p className={style.age}>{element.age} years</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
