import notiuser from "@/assets/images/notiuser.jpg";
import user from "@/assets/images/user.jpg";

export const notifications = [
  {
    id: 1,
    message: "Lorem ipsum dolor sit amet consectetur. Sapien ac ipsum amet.",
    time: "8 min ago",
    isUnread: true,
    username: "John",
    avatar: user,
  },
  {
    id: 2,
    message: "System update available for your account",
    time: "1 hour ago",
    isUnread: true,
    username: "Admin",
    avatar: notiuser,
  },
  {
    id: 3,
    message: "Welcome to GameGPT! Your account has been successfully created.",
    time: "1 day ago",
    isUnread: false,
    username: "System",
  },
];
