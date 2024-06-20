import { Card, CardHeader, CardTitle } from "./ui/card";

export const BlogCard = () => {
  return (
    <Card className="max-w-xs bg-foreground mx-4">
      <img
        src="https://a.storyblok.com/f/127416/1107x603/f4f1e49ff8/header_writing_your_goals.jpg"
        alt="Cover image"
        className="aspect-video object-cover rounded-t-lg"
      />
      <CardHeader className="text-background">
        <h3 className="text-muted-foreground">Goal Setting</h3>
        <CardTitle>
          How writing down your goals literally helps you achieve them
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
