export class address{
	street: string;
	suite: string;
	city: string;
	zipcode: string;
}

export class User{
	name: string;
	email: string;
	phone: string;
	address = new address();
}