export interface Users {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  nat: string;
  email: string;
  picture: {
    thumbnail: string;
  };
}
