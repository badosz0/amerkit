import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

type AspectRatioElement = ElementRef<'div'>;

type AspectRatioProps = {
  ratio?: number;
} & ComponentPropsWithoutRef<'div'>;

const AspectRatio = forwardRef<AspectRatioElement, AspectRatioProps>(
  (props, forwardedRef) => {
    const { style, ratio = 1 / 1, ...rest } = props;
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: `${100 / ratio}%`,
        }}
      >
        <div
          {...rest}
          ref={forwardedRef}
          style={{
            ...style,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        />
      </div>
    );
  },
);

AspectRatio.displayName = 'AspectRatio';

export { AspectRatio };
