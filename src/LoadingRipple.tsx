interface LoadingRippleProps {
  size?: string
  colorVariant?: 'green'
  margin?: 'none'
}
export const LoadingRipple = (props: LoadingRippleProps) => {

    let size;
    if (props.size === undefined) {
      size = '24px';
    } else {
      size = props.size;
    }

    let color1;
    let color2;
    if (props.colorVariant === undefined) {
      color1 = '#0a0a0a';
      color2 = '#28292f';
    } else if (props.colorVariant === 'green') {
      color1 = '#56bb47';
      color2 = 'lightGreen';
    }

    let margin;
    if (props.margin === undefined) {
      margin = 'auto';
    } else {
      margin = props.margin;
    }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={{
        margin: margin,
        background: 'transparent',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width={size}
      height={size}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <circle
        cx='50'
        cy='50'
        r='0'
        fill='none'
        stroke={color1}
        strokeWidth='2'
      >
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='1s'
          values='0;40'
          keyTimes='0;1'
          keySplines='0 0.2 0.8 1'
          calcMode='spline'
          begin='0s'
        ></animate>
        <animate
          attributeName='opacity'
          repeatCount='indefinite'
          dur='1s'
          values='1;0'
          keyTimes='0;1'
          keySplines='0.2 0 0.8 1'
          calcMode='spline'
          begin='0s'
        ></animate>
      </circle>
      <circle
        cx='50'
        cy='50'
        r='0'
        fill='none'
        stroke={color2}
        strokeWidth='2'
      >
        <animate
          attributeName='r'
          repeatCount='indefinite'
          dur='1s'
          values='0;40'
          keyTimes='0;1'
          keySplines='0 0.2 0.8 1'
          calcMode='spline'
          begin='-0.5s'
        ></animate>
        <animate
          attributeName='opacity'
          repeatCount='indefinite'
          dur='1s'
          values='1;0'
          keyTimes='0;1'
          keySplines='0.2 0 0.8 1'
          calcMode='spline'
          begin='-0.5s'
        ></animate>
      </circle>
    </svg>
  );
};
