import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

type VStackElement = ElementRef<'div'>;

type VStackProps = {
  alignV?: 'start' | 'center' | 'end' | 'between';
  alignH?: 'start' | 'center' | 'end' | 'between';
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  reverse?: boolean;
} & ComponentPropsWithoutRef<'div'>;

const VStack = forwardRef<VStackElement, VStackProps>((props, forwardedRef) => {
  const { style, spacing, alignV, alignH, reverse, ...rest } = props;
  return (
    <div
      {...rest}
      ref={forwardedRef}
      style={{
        ...style,
        display: 'flex',
        flexDirection: 'column',
        ...(spacing && { gap: `var(--amerkit-spacing-${spacing})` }),
        ...(alignV && {
          justifyContent: {
            start: 'flex-start',
            center: 'center',
            end: 'flex-end',
            between: 'space-between',
          }[alignV],
        }),
        ...(alignH && {
          alignItems: {
            start: 'start',
            center: 'center',
            end: 'end',
            between: 'space-between',
          }[alignH],
        }),
        ...(reverse && { flexDirection: 'column-reverse' }),
      }}
    />
  );
});

VStack.displayName = 'VStack';

export { VStack };
