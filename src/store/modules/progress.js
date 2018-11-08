import { getSyllabus, getSyllabusProgress, getUnits, getUnitProgress } from "../../utility/database";
// ==================
// Constants
// ==================

export const SUCCESS_SYLLABUS_PROGRESS_RETRIVAL = "SUCCESS_SYLLABUS_PROGRESS_RETRIVAL";
export const FAILURE_PROGRESS_RETRIVAL = "FAILURE_PROGRESS_RETRIVAL";
export const SELECTED_SYLLABUS = "SELECTED_SYLLABUS";
export const SET_UNITS_PROGRESS = "SET_UNITS_PROGRESS";

// =================
// HELPER FUNCTIONs
// ================

const calculateProgress = (syllabusProgress, list) => {
	const progressList = [];
	for (let i = 0; i < list.length; i += 1) {
		const syllabusObject = list[i];
		const syllabusID = syllabusObject.id;
		const syllabusName = syllabusObject.syllabus_name;
		const syllabusUnit = syllabusObject.syllabus_units;
		const mylist = [];
		for (let x = 0; x < syllabusProgress.length; x += 1) {
			if (syllabusProgress[x].syllabus_id === syllabusID) {
				mylist.push(syllabusProgress[x]);
			}
		}
		if (mylist.length > 0) {
			const len = mylist.length;
			const progress = Math.round((len / syllabusUnit) * 100);
			progressList.push({
				Syllabus_name: syllabusName,
				Syllabus_id: syllabusID,
				Progress: progress,
			});
		} else {
			const progress = 0;
			progressList.push({
				Syllabus_name: syllabusName,
				Syllabus_id: syllabusID,
				Progress: progress,
			});
		}
	}
	return progressList;
};

const calculateUnitProgress = (unitList, progressList) => {
	const unitProgressList = [];
	for (let i = 0; i < unitList.length; i += 1) {
		const unitObject = unitList[i];
		const unitId = unitObject.id;
		const unitName = unitObject.unit_name;
		if (progressList.length > 0 && progressList[i]) {
			if (progressList[i].unit_id === unitId) {
				const progress = 100;
				unitProgressList.push({
					unit_name: unitName,
					unit_id: unitId,
					Progress: progress,
				});
			}
		} else {
			const progress = 0;
			unitProgressList.push({
				unit_name: unitName,
				unit_id: unitId,
				Progress: progress,
			});
		}
	}
	return unitProgressList;
};


// =================
// ACTION CREATORS (trigger dispatch)
// =================

export const getSelectedSyllabusProgress = syllabusId => (dispatch) => {
	if (syllabusId) {
        dispatch({
            type: SELECTED_SYLLABUS,
            syllabusId,
        });
	}
};

export const getSyllabusAction = userId => (async (dispatch) => {
	try {
		const syllabusList = await getSyllabus();
		const syllabusProgressList = await getSyllabusProgress(userId);
		const syllabusProgress = calculateProgress(syllabusProgressList, syllabusList);
		if (syllabusProgress.length === 5) {
			dispatch({
                syllabusProgress,
                type: SUCCESS_SYLLABUS_PROGRESS_RETRIVAL,
            });
		} else {
			dispatch({
                type: FAILURE_PROGRESS_RETRIVAL
            });
		}
	} catch (e) {
        console.log(e)
		dispatch({
            type: FAILURE_PROGRESS_RETRIVAL
        });
	}
});

export const getUnitProgressAction = (syllabusId, userId) => (async (dispatch) => {
	try {
		const unitList = await getUnits(syllabusId);
		const progressList = await getUnitProgress(syllabusId, userId);
		const unitProgressList = calculateUnitProgress(unitList, progressList);
		if (unitProgressList.length > 0) {
			dispatch({
                type: SET_UNITS_PROGRESS,
                unitProgressList,
            });
		}
		console.log('unitProgressList',unitProgressList);
	} catch (e) {
		console.log('error');
	}
});

// ====================
// Initial state
// ====================

export const initialState = {
    syllabus: {
        syllabusProgress: [],
	    selectedSyllabus: null,
	    selectedUnitProgress: [],
    }
};

// ===================
// REDUCER
// Your reducer should be without side effects, simply digesting the action
// payload and returning a new state object
// ===================

export function syllabusProgressReducer(state = initialState, action){
    switch (action.type) {
        case "SUCCESS_SYLLABUS_PROGRESS_RETRIVAL": {
            return Object.assign({}, state, {
                syllabus: {
                    ...state.syllabus,
                    syllabusProgress: action.syllabusProgress,
                }
            });
        }
        case "SELECTED_SYLLABUS": {
            return Object.assign({}, state, {
                syllabus: {
                    ...state.syllabus,
                    selectedSyllabus: action.syllabusId,
                }
            });

        }
        case "SET_UNITS_PROGRESS": {
            return Object.assign({}, state, {
                syllabus: {
                    ...state.syllabus,
                    selectedUnitProgress: action.unitProgressList,
                }
            });
        }
        case "FAILURE_PROGRESS_RETRIVAL":
            return state;
        default:
            return state;
        }
}
