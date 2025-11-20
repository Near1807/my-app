export function Card(props: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`transition-colors duration-200 bg-white dark:bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-300 dark:border-black p-4 ${props.className}`}
    >
      {props.children}
    </div>
  );
}

export function Title(props: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={`text-xl font-bold mb-4 dark:text-white ${props.className}`}>
      {props.children}
    </h1>
  );
}
export function Subtext(props: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={`text-xs dark:text-gray-300 ${props.className}`}>
      {props.children}
    </h1>
  );
}
export function Subtitle(props: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={`text-lg font-semibold text-gray-500 dark:text-gray-300 ${props.className}`}
    >
      {props.children}
    </h2>
  );
}
export function Text(props: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <p className={`text-sm dark:text-gray-300 ${props.className}`}>
      {props.children}
    </p>
  );
}

export function PersonalImage() {
  return (
    <img
      src="/images/profile_pic.png"
      className="rounded-full w-32 h-32 mx-auto mb-4"
    />
  );
}

export function Divider() {
  return (
    <>
      <br />
      <div className="bg-gray-400 dark:bg-white grow h-0.25"></div>
      <br />
    </>
  );
}

export function Contact(props: {
  className: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex  flex-row gap-2">
      <div className={`${props.className}`} />
      <Text>{props.children}</Text>
    </div>
  );
}
