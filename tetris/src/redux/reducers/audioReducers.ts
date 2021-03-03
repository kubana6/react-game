const initialState = {
  isPlayMusic: false,
  isPlaySound: true,
  music: new Audio(
    `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3`
  ),
  sound: new Audio(
    `https://zvukipro.com/uploads/files/2020-03/1584619296_sound-effect-2.mp3`
  ),
  volumeMusic: 40,
  volumeSound: 60,
  level: 'Easy',
  interval: 1000,
};

export const audioReducers = (
  state = initialState,
  action: { type: string; value: number; level: string }
) => {
  switch (action.type) {
    case PLAY_MUSIC: {
      return { ...state, isPlayMusic: !state.isPlayMusic } as const;
    }
    case PLAY_SOUND: {
      return { ...state, isPlaySound: !state.isPlaySound };
    }
    case SET_VOLUME_MUSIC: {
      return { ...state, volumeMusic: action.value };
    }
    case SET_VOLUME_SOUND: {
      return { ...state, volumeSound: action.value };
    }
    case CHANGE_LEVEL: {
      let interval = 1000;
      switch (action.level) {
        case 'Easy':
          interval = 1000;
          break;

        case 'Medium':
          interval = 800;
          break;

        case 'Hard':
          interval = 500;
          break;

        default:
          break;
      }
      return { ...state, level: action.level, interval };
    }
    default:
      return state;
  }
};
const CHANGE_LEVEL = 'CHANGE_LEVEL';
const PLAY_MUSIC = 'PLAY_MUSIC';
const PLAY_SOUND = 'PLAY_SOUND';
const SET_VOLUME_MUSIC = 'SET_VOLUME_MUSIC';
const SET_VOLUME_SOUND = 'SET_VOLUME_SOUND';
export const setVolumeMusic = (value: number | number[]) => ({
  type: SET_VOLUME_MUSIC,
  value,
});
export const setVolumeSound = (value: number | number[]) => ({
  type: SET_VOLUME_SOUND,
  value,
});
export const changeLevel = (level: string) => ({
  type: CHANGE_LEVEL,
  level,
});
export const playMusic = () => ({ type: PLAY_MUSIC });
export const playSound = () => ({ type: PLAY_SOUND });
