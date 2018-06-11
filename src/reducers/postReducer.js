import {
	ADD_POST,
	DELETE_POST,
	EDIT_POST,
	UPDATE_POST
} from '../actions/types';
const postReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_POST:
			return [...state, action.payload];

		case DELETE_POST:
			return state.filter(post => post.id !== action.payload.id);
		case EDIT_POST:
			return state.map(
				post =>
					post.id === action.payload.id
						? { ...post, editing: !post.editing }
						: post
			);
		case UPDATE_POST:
			return state.map(post => {
				if (post.id === action.payload.id) {
					return {
						...post,
						title: action.payload.newTitle,
						message: action.payload.newMessage,
						editing: !post.editing
					};
				} else {
					return post;
				}
			});
		default:
			return state;
	}
};

export default postReducer;
