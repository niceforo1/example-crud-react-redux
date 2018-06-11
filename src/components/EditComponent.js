import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../actions';

class EditComponent extends Component {
	handleEdit = e => {
		e.preventDefault();
		const newTitle = this.getTitle.value;
		const newMessage = this.getMessage.value;

		this.props.updatePost({
			id: this.props.post.id,
			newTitle,
			newMessage
		});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.handleEdit}>
					<input
						type="text"
						ref={input => (this.getTitle = input)}
						defaultValue={this.props.post.title}
						placeholder="Enter post Title"
						required
					/>
					<textarea
						rows="5"
						ref={input => (this.getMessage = input)}
						defaultValue={this.props.post.message}
						cols="28"
						placeholder="Enter Post Message"
						required
					/>
					<button>Update</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { updatePost })(EditComponent);
