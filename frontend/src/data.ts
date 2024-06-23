interface BlogProp {
  id: number;
  img: string;
  category: string;
  title: string;
  link: string;
}

export const blogdata: BlogProp[] = [
  {
    id: 1,
    img: "https://a.storyblok.com/f/127416/1107x603/f4f1e49ff8/header_writing_your_goals.jpg",
    category: "Goal-setting",
    title: "How writing down your goals literally helps you achieve them",
    link: "https://www.futureme.org/blog/writing-down-your-goals-helps-you-achieve-them",
  },
  {
    id: 2,
    img: "https://a.storyblok.com/f/127416/1107x603/413038ce76/header_whywritemyselft.jpg",
    category: "Mindfulness",
    title: "Why should I write a letter to my future self?",
    link: "https://www.futureme.org/blog/why-should-i-write-a-letter-to-myself-future",
  },
  {
    id: 3,
    img: "https://a.storyblok.com/f/127416/1107x603/2be93524b6/header_capture_memory.png",
    category: "Writing letters to the future",
    title: "How to write a letter to yourself: Capture a memory",
    link: "https://www.futureme.org/blog/how-to-write-a-letter-to-yourself-in-the-future-memories",
  },
  {
    id: 4,
    img: "https://a.storyblok.com/f/127416/1107x603/45ff181aa8/header_gratitude_list.png",
    category: "Writing letters to the future",
    title: "How to write a letter to yourself: The gratitude list",
    link: "https://www.futureme.org/blog/how-to-write-a-letter-to-yourself-in-the-future-gratitude",
  },
];
