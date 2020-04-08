/**
 * This mixin provides an easy way of setting CSS media queries
 *
 * @category Mixin
 */

import { breakpoint } from "../tokens/breakpoint";

const minWidthQuery = minWidth => `@media (min-width: ${minWidth})`;
const maxWidthQuery = maxWidth => `@media (max-width: ${maxWidth})`;

export const mediaMin = {
  CUSTOM: minWidthQuery,
  WIDTH_0: minWidthQuery(breakpoint.WIDTH_0),
  WIDTH_1: minWidthQuery(breakpoint.WIDTH_1),
  WIDTH_2: minWidthQuery(breakpoint.WIDTH_2),
  WIDTH_3: minWidthQuery(breakpoint.WIDTH_3),
  WIDTH_4: minWidthQuery(breakpoint.WIDTH_4),
  WIDTH_5: minWidthQuery(breakpoint.WIDTH_5),
};

export const mediaMax = {
  CUSTOM: maxWidthQuery,
  WIDTH_0: maxWidthQuery(breakpoint.WIDTH_0),
  WIDTH_1: maxWidthQuery(breakpoint.WIDTH_1),
  WIDTH_2: maxWidthQuery(breakpoint.WIDTH_2),
  WIDTH_3: maxWidthQuery(breakpoint.WIDTH_3),
  WIDTH_4: maxWidthQuery(breakpoint.WIDTH_4),
  WIDTH_5: maxWidthQuery(breakpoint.WIDTH_5),
};

export const printQuery = () => `@media print`;
