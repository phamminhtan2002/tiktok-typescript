export interface Video {
	caption: string;
	video: {
		asset: {
			_id: string;
			url: string;
		};
	};
	_id: string;
	postedBy: {
		_id: string;
		userName: string;
		image: string;
	};
	likes: {
		postedBy: {
			_id: string;
			userName: string;
			image: string;
		};
	}[];
	comments: {
		comment: string;
		length: number;
		_key: string;
		postedBy: {
			_id: string;
			_ref: string;
		};
	}[];
	userId: string;
	topic: string;
}

export interface IUser {
	_id: string;
	_type: string;
	userName: string;
	image: string;
}
