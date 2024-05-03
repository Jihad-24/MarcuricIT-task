interface TabContentType {
  id: number;
  title: string;
  icon?: string;
}
const tabContents: TabContentType[] = [
  {
    id: 1,
    title: "General",
    icon: "uil-bright",
  },
  {
    id: 2,
    title: "Email",
    icon: "uil-envelope",
  },
  {
    id: 3,
    title: "Reports",
    icon: "uil-file-alt",
  },
  {
    id: 4,
    title: "SMS",
    icon: " uil-comment-message",
  },
  {
    id: 5,
    title: "Whatsapp",
    icon: "uil-whatsapp",
  },
  {
    id: 6,
    title: "Api Keys",
    icon: "uil-key-skeleton-alt",
  },
];

export default tabContents;
