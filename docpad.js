// http://docpad.org/docs/config

//require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "Cloyne",
      description: "needs your help!",
    },
  },
  detectEncoding: true,
  plugins: {
    handlebars: {
      helpers: {
        partial: function (content, options) {
          return this.partial(content, options);
        },
        block: function (blockName) {
          return this.getBlock(blockName).toHTML();
        },
      },
    },
    browserifydocs: {
    },
    raw: {
      'font-awesome': {
        command: ['rsync', '-r', 'node_modules/font-awesome/fonts/', 'out/fonts'],
      },
      semantic: {
        command: ['rsync', '-r', 'node_modules/semantic/src/fonts/', 'out/fonts'],
      },
    },
    ghpages: {
      deployRemote: 'origin',
      deployBranch: 'gh-pages',
    },
    menu: {
      menuOptions: {
        optimize: false,
        skipFiles: /(.js|.less|.css)$/,
      },
    },
  },
  environments: {
    development: {
      port: 5000,
    },
  },
};
