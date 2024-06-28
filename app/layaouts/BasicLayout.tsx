import classNames from "classnames";
import { Menu } from "~/components/Menu";
export function BasicLayout(props: { children: any }) {
  const { children, className } = props;

  return (
    <>
      <Menu />
      <div className={`container mx-auto ${className}`}>{children}</div>
      <div
        className={classNames("container mx-auto", { [className]: className })}
      >
        {children}
      </div>
    </>
  );
}
