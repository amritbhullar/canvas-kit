import * as React from 'react';
import ColorInput from './ColorInput';
import {TextInputProps} from '@workday/canvas-kit-react-text-input';
import styled from '@emotion/styled';
import {colors} from '@workday/canvas-kit-react-core';

export interface ColorPreviewProps extends TextInputProps {
  /**
   * The value of the ColorPreview.
   */
  value: string;
  /**
   * The HTML `id` of the underlying text input element.
   */
  id?: string;
}

const ColorPreviewComponent = styled(ColorInput)({
  backgroundColor: colors.frenchVanilla100,
  borderColor: colors.frenchVanilla100,
  pointerEvents: 'none',
});

export default class ColorPreview extends React.Component<ColorPreviewProps> {
  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {id, value, ...elemProps} = this.props;

    return (
      <ColorPreviewComponent id={id} value={value} readOnly={true} placeholder="" {...elemProps} />
    );
  }
}
