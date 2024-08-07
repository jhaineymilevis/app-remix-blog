import classNames from "classnames";

export default function Avatar(props) {
  const { src, className } = props;
  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={classNames("w-16 h-16 bg-center bg-no-repeat rounded-full", {
        [className]: className,
      })}
    ></div>
  );
}
