import { unstable_flag as flag } from '@vercel/flags/next';

export const betaFeatures = flag({
  key: 'beta',
  decide: () => false,
});
