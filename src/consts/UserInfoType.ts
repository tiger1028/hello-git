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
  {
    userId: 3, name: "killer", email: "killer@gmail.com"
  },
  {
    userId: 4, name: "bear", email: "bear@gmail.com"
  },
]