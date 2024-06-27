const SVG = ({ svgProps, pathProps }) => {
  const { viewBox, anotherSvgProps } = svgProps;
  const { d, anotherPathProps } = pathProps;
  return (
    <svg
      className="w-4 h-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      {...anotherSvgProps}
    >
      <path d={d} {...anotherPathProps} />
    </svg>
  );
};
export default SVG;
