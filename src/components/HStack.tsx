import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from 'react';

type HStackElement = ElementRef<'div'>;

type HStackProps = {
  alignV?: 'start' | 'center' | 'end' | 'between';
  alignH?: 'start' | 'center' | 'end' | 'between';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  reverse?: boolean;
} & ComponentPropsWithoutRef<'div'>;

const HStack = forwardRef<HStackElement, HStackProps>((props, forwardedRef) => {
  const { style, spacing, alignV, alignH, reverse, ...rest } = props;
  return (
    <div
      {...rest}
      ref={forwardedRef}
      style={{
        ...style,
        display: 'flex',
        ...(spacing && { gap: `var(--amerkit-spacing-${spacing})` }),
        ...(alignV && {
          alignItems: {
            start: 'start',
            center: 'center',
            end: 'end',
            between: 'space-between',
          }[alignV],
        }),
        ...(alignH && {
          justifyContent: {
            start: 'flex-start',
            center: 'center',
            end: 'flex-end',
            between: 'space-between',
          }[alignH],
        }),
        ...(reverse && { flexDirection: 'row-reverse' }),
      }}
    />
  );
});

HStack.displayName = 'HStack';

export { HStack };
