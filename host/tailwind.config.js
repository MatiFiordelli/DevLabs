//Needed for Tailwind. With it, remote style classes will be applied properly.
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{js,jsx,ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../layout/src/**/!(*.stories|*.spec).{js,jsx,ts,tsx}'), // added
    join(__dirname, '../content/src/**/!(*.stories|*.spec).{js,jsx,ts,tsx}'), // added
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
