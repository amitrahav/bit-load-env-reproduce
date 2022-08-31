import React, { ReactNode } from 'react';

export type TextProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Text({ children }: TextProps) {
  return (
    <div>
      {children}
    </div>
  );
}
