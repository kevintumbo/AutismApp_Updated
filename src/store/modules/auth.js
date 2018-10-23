import SQLite from "react-native-sqlite-storage";

// ==================
// Constants
// ==================
const db = SQLite.openDatabase({ name: "app.db", createFromLocation: "~app.db" });
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";

// =================
// ACTION CREATORS (trigger dispatch)
// =================

export function loginUser(name, password) {
	return async (dispatch) => {
		db.transaction((tx) => {
			tx.executeSql(`SELECT * FROM users WHERE name='${name}' AND password=${password}`, [], (results) => {
				// Get rows with Web SQL Database spec compliance.
				const len = results.rows.length;
				const row = results.rows.item(0);
				const username = row.name;
				const { id } = row;
				if (len > 0) {
					dispatch({
						type: AUTHENTICATION_SUCCESS,
						payload: {
							username,
							id,
							isAuthenticated: true,
						},
					});
				} else {
					const message = "Name or password is wrong. Try Again.";
					dispatch({
						type: AUTHENTICATION_FAILURE,
						payload: {
							errorMessage: message,
						},
					});
				}
			});
		});
	};
};


// ====================
// Initial state
// ====================

export const initialState = {
	auth: {
		isAuthenticated: false,
		username: null,
		id: null,
		errorMessage: null,
	},
};


// ===================
// REDUCER
// Your reducer should be without side effects, simply digesting the action
// payload and returning a new state object
// ===================

export function authReducer(state = initialState, action) {
	switch (action.type) {
	case "AUTHENTICATION_SUCCESS": {
		return Object.assign({}, state, {
			auth: {
				isAuthenticated: action.payload.isAuthenticated,
				username: action.payload.username,
				id: action.payload.id,
			},
		});
	}
	case "AUTHENTICATION_FAILURE": {
		return Object.assign({}, state, {
			auth: {
				isAuthenticated: action.payload.isAuthenticated,
			},
		});
	}
	default: return state;
	}
}
