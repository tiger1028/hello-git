export interface UserInfoType {
  userId: number;
  name: string;
  email: string;
}

export const INITIAL_INFO: UserInfoType[] = [
  {
    userId: 1, name: "Tiger", email: "tiger@gmail.com"
  },
  {
    userId: 2, name: "Sanai", email: "sanai@gmail.com"
  },
]