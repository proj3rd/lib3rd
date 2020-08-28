import { Borders, Font } from 'exceljs';
import { merge } from 'lodash';

export const FontBold: Partial<Font> = {
  bold: true,
};

export const FontTitle: Partial<Font> = merge(
  {},
  {
    size: 22,
  },
  FontBold
);

export const BorderBottom: Partial<Borders> = {
  bottom: { style: 'thin' },
};

export const BorderLeft: Partial<Borders> = {
  left: { style: 'thin' },
};

export const BorderRight: Partial<Borders> = {
  right: { style: 'thin' },
};

export const BorderTop: Partial<Borders> = {
  top: { style: 'thin' },
};

export const BorderLeftTop: Partial<Borders> = merge({}, BorderLeft, BorderTop);

export const BorderRightTop: Partial<Borders> = merge(
  {},
  BorderRight,
  BorderTop
);
