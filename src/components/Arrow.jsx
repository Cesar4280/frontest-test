import SVG from "./SVG.jsx";

const Arrow = ({ direction = "left" }) => {

  const d =
    direction === "left"
      ? "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      : "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z";

  const props = {
    svg: { viewBox: "0 0 20 20", anotherSvgProps: {} },
    path: { d, clipRule: "evenodd", fillRule: "evenodd", anotherPathProps: {} }
  };

  return <SVG svgProps={props.svg} pathProps={props.path} />;
};

export default Arrow;
