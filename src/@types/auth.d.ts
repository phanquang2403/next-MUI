declare namespace Auth {
  interface LoginPayload {
    username: string;
    password: string;
  }

  interface UserProfile {
    city: string;
    email: string;
    username: string;
  }
}
