import { BASE_UNIT } from './constants';

import type * as Stitches from '@stitches/react';

const getValueWithBaseUnit = <T>(v: T) => typeof v === 'number' ? v * BASE_UNIT : v;

const utils = {
  p: (value: Stitches.PropertyValue<'padding'>) => ({
    padding: getValueWithBaseUnit(value),
  }),
  pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
    paddingTop: getValueWithBaseUnit(value),
  }),
  pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
    paddingRight: getValueWithBaseUnit(value),
  }),
  pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
    paddingBottom: getValueWithBaseUnit(value),
  }),
  pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
    paddingLeft: getValueWithBaseUnit(value),
  }),
  px: (value: Stitches.PropertyValue<'paddingLeft'>) => {
    const properValue = getValueWithBaseUnit(value);
    return {
      paddingLeft: properValue,
      paddingRight: properValue,
    };
  },
  py: (value: Stitches.PropertyValue<'paddingTop'>) => {
    const properValue = getValueWithBaseUnit(value);
    return {
      paddingTop: properValue,
      paddingBottom: properValue,
    };
  },
  gap: (value: Stitches.PropertyValue<'gap'>) => ({
    gap: getValueWithBaseUnit(value),
  }),
  m: (value: Stitches.PropertyValue<'margin'>) => ({
    margin: getValueWithBaseUnit(value),
  }),
  mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
    marginTop: getValueWithBaseUnit(value),
  }),
  mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
    marginRight: getValueWithBaseUnit(value),
  }),
  mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
    marginBottom: getValueWithBaseUnit(value),
  }),
  ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
    marginLeft: getValueWithBaseUnit(value),
  }),
  mx: (value: Stitches.PropertyValue<'marginLeft'>) => {
    const properValue = getValueWithBaseUnit(value);
    return {
      marginLeft: properValue,
      marginRight: properValue,
    };
  },
  my: (value: Stitches.PropertyValue<'marginTop'>) => {
    const properValue = getValueWithBaseUnit(value);
    return {
      marginTop: properValue,
      marginBottom: properValue,
    };
  },
  size: (value: Stitches.PropertyValue<'width'>) => {
    const properValue = getValueWithBaseUnit(value);
    return {
      width: properValue,
      height: properValue,
    };
  },
};

export default utils;
