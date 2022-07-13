import ContentLoader from "react-content-loader";

const MyLoader = (props: JSX.IntrinsicAttributes) => (
  <ContentLoader
    speed={2}
    width={375}
    height={426}
    className="mb-10"
    viewBox="0 0 375 426"
    backgroundColor="#f0f0f0"
    foregroundColor="#e6e6e6"
    {...props}>
    <rect x="0" y="270" rx="0" ry="0" width="375" height="26" />
    <rect x="0" y="315" rx="0" ry="0" width="100" height="18" />
    <rect x="0" y="353" rx="0" ry="0" width="375" height="30" />
    <rect x="130" y="315" rx="0" ry="0" width="118" height="18" />
    <rect x="275" y="315" rx="0" ry="0" width="100" height="18" />
    <rect x="0" y="0" rx="0" ry="0" width="375" height="245" />
    <rect x="0" y="409" rx="0" ry="0" width="60" height="15" />
  </ContentLoader>
);

export default MyLoader;
