import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';

import { default as Loader } from './loader';
import { default as CheckboxBlank } from './checkbox-blank';
import { default as CheckboxChecked } from './checkbox-checked';

export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

export const Icons = {
  Loader,
  CheckboxBlank,
  CheckboxChecked,
};
