import SQLite from "react-native-sqlite-storage";

// ==================
// Constants
// ==================
const db = SQLite.openDatabase({ name: "app.db", createFromLocation: "~app.db" });
export const AUTHENTICATION_SUCCESS = "AUTHENTICATION_SUCCESS";
export const AUTHENTICATION_FAILURE = "AUTHENTICATION_FAILURE";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const DUPLICATE_ACCOUNT = "DUPLICATE_ACCOUNT";
export const LOG_OUT = "LOG_OUT";

// =================
// ACTION CREATORS (trigger dispatch)
// =================

export const loginUserAction = (name, password) => async (dispatch) => {
		try {
			await db.transaction((tx) => {
				tx.executeSql("SELECT * FROM users WHERE name='" + name + "' AND password=" + password, [], (tx, results) => {
					console.log('results', results);
					// Get rows with Web SQL Database spec compliance.
					const len = results.rows.length;
					if (len > 0) {
					const row = results.rows.item(0);
					const username = row.name;
					const { id } = row;
						dispatch({
							type: AUTHENTICATION_SUCCESS,
							payload: {
								username,
								id,
								isAuthenticated: true,
							},
						});
					} 
					else {
						dispatch({
							type: AUTHENTICATION_FAILURE,
							payload: {
								errorMessage: "User does not exist. Please try again.",
							},
						});
					}
				});
			});
		} catch(e) {
			const message = "Name or password is wrong. Try Again.";
			dispatch({
				type: AUTHENTICATION_FAILURE,
				payload: {
					errorMessage: message,
				},
			});
		}
	};

export const signUpAction = (name, password)  => async (dispatch) => {
	try {
		await db.transaction((tx) => {
			tx.executeSql("SELECT * FROM users WHERE name='" + name + "' AND password=" + password, [], (tx, results) => {
				// Get rows with Web SQL Database spec compliance.
				const len = results.rows.length;
				if (len > 0) {
					dispatch({
						type: DUPLICATE_ACCOUNT,
						payload: {
							message: 'A user with this name already exist.'
						},
					});
				} else {
					tx.executeSql("INSERT INTO users(name, password) VALUES ('" + name + "','" + password + "')", [], () => {
						dispatch({
							type: SIGNUP_SUCCESS,
							payload: {
								message: 'Congratulations. You can now login.'
							},
						});
					});
				}
			});
		});
	} catch(e) {
		const message = "Error signing up.";
		dispatch({
			type: SIGNUP_FAILURE,
			payload: {
				errorMessage: message,
				error: e
			},
		});
	} 
}

export const clearErrors = () => (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS,
	});
}

export const logoutAction = () => (dispatch) => {
	dispatch({
		type: LOG_OUT,
		payload: {
			isAuthenticated: false,
			username: null,
			id: null,
			message: null,
			errorMessage: null,
			error: null,
		}
	});

}

// ====================
// Initial state
// ====================

export const initialState = {
	auth: {
		isAuthenticated: false,
		username: null,
		id: null,
		message: null,
		errorMessage: null,
		error: null,
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
				...state.auth,
				isAuthenticated: action.payload.isAuthenticated,
				username: action.payload.username,
				id: action.payload.id,
			},
		});
	}
	case "AUTHENTICATION_FAILURE": {
		return Object.assign({}, state, {
			auth: {
				...state.auth,
				errorMessage: action.payload.errorMessage,
			},
		});
	}
	case "SIGNUP_SUCCESS": {
		return Object.assign({}, state, {
			auth: {
				...state.auth,
				message: action.payload.message,
			},
		});
	}
	case "SIGNUP_FAILURE": {
		return Object.assign({}, state, {
			auth: {
				...state.auth,
				errorMessage: action.payload.errorMessage,
				error: action.payload.error,
			},
		});
	}
	case "DUPLICATE_ACCOUNT": {
		return Object.assign({}, state, {
			auth: {
				...state.auth,
				message: action.payload.message,
			},
		});
	}
	case "CLEAR_ERRORS": {
		return Object.assign({}, state, {
			auth: {
				...state.auth,
				errorMessage: '',
				error: '',
				message: '',
			},
		});
	}
	case "LOG_OUT": {
		return Object.assign({}, state, {
			...state.auth,
			...action.payload,
		})
	}
	default: return state;
	}
}
