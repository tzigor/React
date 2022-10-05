import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile, changeName } from 'src/store/profile/actions';
import { ProfileState } from 'src/store/profile/reducer';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: ProfileState) => state.name);
  const visible = useSelector((state: ProfileState) => state.visible);
  const [value, setValue] = useState('');
  return (
    <div>
      <p>profile page</p>
      <p>{name}</p>
      <input type="checkbox" checked={visible} readOnly />
      <button onClick={() => dispatch(toggleProfile())}>Change state</button>
      <br />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(changeName(value))}>Change name</button>
    </div>
  );
};
