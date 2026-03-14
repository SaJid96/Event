interface LoaderProps {
  loaded: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loaded }) => {
  return (
    <div id="loader" className={loaded ? 'done' : ''}>
      <div className="loader-text">Grandora</div>
      <div className="loader-sub">Convention Centre</div>
      <div className="loader-bar" />
    </div>
  );
};

export default Loader;
