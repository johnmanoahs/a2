export class PostComments{
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

export class Post{
	id: number;
	userId: number;
	title: string;
	body: string;
	comments = new PostComments()
}