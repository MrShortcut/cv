export const cx = (...classes: any[]) =>
  classes.filter((cls) => typeof cls === 'string' && cls).join(' ');
