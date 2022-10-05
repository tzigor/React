// import { ToggleProfile, ChangeName } from '../../Types';

export const TOGGLE_PROFILE = 'PROFILE::TOGGLE_PROFILE';
export const CHANGE_NAME = 'PROFILE::CHANGE_NAME';

// export const toggleProfile = (): ToggleProfile => ({
//     type: TOGGLE_PROFILE,
// });

export const toggleProfile = () => ({
  type: TOGGLE_PROFILE,
});

export const changeName = (name: string) => ({
  type: CHANGE_NAME,
  name,
});
