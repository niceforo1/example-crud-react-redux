import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

class PostForm extends Component {
	handleSubmit = e => {
		e.preventDefault();
		const title = this.getTitle.value;
		const message = this.getMessage.value;

		this.props.addPost({
			id: new Date(),
			title,
			message,
			editing: false
		});

		this.getTitle.value = '';
		this.getMessage.value = '';
	};

	render() {
		return (
			<div>
				<h1>Create Post</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						placeholder="Enter Post Title"
						required
						ref={input => (this.getTitle = input)}
					/>
					<br />
					<textarea
						rows="5"
						cols="28"
						placeholder="Enter Post"
						ref={input => (this.getMessage = input)}
					/>
					<br />
					<button>Post</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { addPost })(PostForm);
