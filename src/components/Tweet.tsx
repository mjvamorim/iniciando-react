type TweetProps = {
  text: string;
};

export default function Tweet(props: TweetProps) {
  const { text } = props;
  return <div>{text}</div>;
}
