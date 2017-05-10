/* eslint-disable import/prefer-default-export */
import { max } from 'd3-array';

export const domain = (data, accessor, x = true) => {
  if (x) return [max(data, accessor), 0];
  return [0, max(data, accessor)];
};

const arrayUtils = {
  domain,
};

export default arrayUtils;
