import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';

import { default as Loader } from './loader';

export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

export const Icons = {
  Loader,
};
