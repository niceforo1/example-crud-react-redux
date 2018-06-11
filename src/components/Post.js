import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../actions';

class Post extends Component {
	editPost() {
		this.props.editPost({ id: this.props.post.id });
	}
	delPost() {
		this.props.deletePost({ id: this.props.post.id });
	}
	render() {
		return (
			<div>
				<h2>{this.props.post.title}</h2>
				<p>{this.props.post.message}</p>
				<button onClick={() => this.editPost()}>Edit</button>

				<button onClick={() => this.delPost()}>Delete</button>
			</div>
		);
	}
}

export default connect(null, { deletePost, editPost })(Post);
