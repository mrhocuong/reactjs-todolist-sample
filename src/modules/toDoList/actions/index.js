export const ADD_TO_DO = "ADD_TO_DO"
export function add(data){
	return {
		type: ADD_TO_DO,
		payload: data
	}
}

export const CHANGE_SUBJECT = "CHANGE_SUBJECT"
export function changeSubject(data){
	return {
		type: CHANGE_SUBJECT,
		payload: data
	}
}


export const CLEAR_CREATE_OBJECT = "CLEAR_CREATE_OBJECT"
export function clearCreateObject(data){
	return {
		type: CLEAR_CREATE_OBJECT,
	}
}
