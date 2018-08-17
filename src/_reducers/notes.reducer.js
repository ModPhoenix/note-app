import { notesConstants } from '../_constants';

const initialState = {
  isFetchingNotes: false,
  data: null,
  errorNotes: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case notesConstants.FETCH_NOTES_REQUEST:
      return {
        ...state,
        isFetchingNotes: true,
        errorNotes: null,
      };
    case notesConstants.FETCH_NOTES_SUCCESS:
      return {
        ...state,
        isFetchingNotes: false,
        data: action.payload.data,
        errorNotes: null,
      };
    case notesConstants.FETCH_NOTES_FAILURE:
      return {
        ...state,
        isFetchingNotes: false,
        errorNotes: action.payload,
      };
    default:
      return state;
  }
}
