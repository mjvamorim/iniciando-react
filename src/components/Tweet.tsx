type TweetProps = {
  // text?: string;
  text: string;
};

export function Tweet(props: TweetProps) {
  const { text } = props;
  return <div> {text} </div>;
}
