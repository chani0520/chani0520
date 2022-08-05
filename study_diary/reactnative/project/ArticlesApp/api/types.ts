export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: null | boolean;
  role: number;
  created_at: string;
  updated_at: string;
}

export interface Article {
  data: {
    id: number;
    attributes: {
      title: string;
      body: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface Comment {
  data: {
    id: number;
    attributes: {
      message: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface AuthResult {
  jwt: string;
  user: User;
}
