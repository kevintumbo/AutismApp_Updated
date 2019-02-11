// ==================
// Constants
// ==================

export const SELECT_SYLLABUS = 'SELECT_SYLLABUS';
export const SELECT_UNIT = 'SELECT_UNIT';

// =================
// ACTION CREATORS (trigger dispatch)
// =================

export const selectSyllabus = syllabus_id => (dispatch) => {
  dispatch({
    type: SELECT_SYLLABUS,
    syllabus_id,
  });
};

export const selectUnit = unit_id => (dispatch) => {
  dispatch({
    type: SELECT_UNIT,
    unit_id,
  });
};

// ====================
// Initial state
// ====================

export const initialState = {
  syllabus: {
    selected_syllabus: null,
    selected_unit: null,
  },
};


// ===================
// REDUCER
// Your reducer should be without side effects, simply digesting the action
// payload and returning a new state object
// ===================

export const syllabusReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_SYLLABUS': {
      return Object.assign({}, state, {
        syllabus: {
          ...state.syllabus,
          selected_syllabus: action.syllabus_id
        }
      });
    }
    case 'SELECT_UNIT': {
      return Object.assign({}, state, {
        syllabus: {
          ...state.syllabus,
          selected_unit: action.unit_id
        }
      });
    }
    default: return state;
  }
};
