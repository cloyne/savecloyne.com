// http://docpad.org/docs/config

//require('longjohn');

module.exports = {
  templateData: {
    site: {
      title: "Cloyne needs your help!",
      description: "Recently the membership of Cloyne Court was &quot;briefed&quot; with a proposal by the Cabinet of the BSC to: 1) Make Cloyne a substance free house, 2) Make Cloyne an academic themed house and 3) Kick out all current membership and not allow them to return.",
      testimonials: require('./src/json/testimonials'),
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
  collections: {
    testimonials: function () {
      return this.getCollection('documents').findAllLive({
        relativeOutDirPath: 'testimonials',
        isPagedAuto: { $ne: true },
      }).sortCollection(function (model) { return model.get('order'); });
    },
  },
  environments: {
    development: {
      port: 5000,
    },
  },
};
