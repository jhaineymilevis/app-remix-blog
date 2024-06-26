export function BasicLayout(props: { children: any }) {
  const { children } = props;

  return (
    <>
      <div>Menu</div>
      <div className="container mx-auto">{children}</div>
    </>
  );
}
