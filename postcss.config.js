module.exports = {
  plugins: [
    require('autoprefixer')({ browsers: ['last 2 versions', 'iOS >= 8'] }),
    require('precss'),
    require('css-mqpacker'),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
