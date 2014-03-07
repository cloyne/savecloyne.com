// http://docpad.org/docs/config

//require('longjohn');

module.exports = {
  templateData: {
    site: {
      styles: ["/styles/index.css"],
      scripts: ["/scripts/bundle.js"],
      title: "Cloyne needs your help!",
      description: "Recently the membership of Cloyne Court was &quot;briefed&quot; with a proposal by the Cabinet of the BSC to: 1) Kick out all current membership and not allow them to return, 2) Make Cloyne a substance free house, and 3) Make Cloyne an academic themed house.",
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
    browserifybundles: {
      bundles: [{
        arguments: ['-g', 'uglifyify'],
        entry: 'scripts/gallery.js',
        out: 'scripts/gallerybundle.js',
      }, {
        arguments: ['-g', 'uglifyify'],
        entry: 'scripts/index.js',
        out: 'scripts/bundle.js',
      }],
      environments: {
        development: {
          bundles: [{
            arguments: ['-d'],
            entry: 'scripts/gallery.js',
            out: 'scripts/gallerybundle.js',
          }, {
            arguments: ['-d'],
            entry: 'scripts/index.js',
            out: 'scripts/bundle.js',
          }],
        },
      },
    },
    raw: {
      'font-awesome': {
        command: ['rsync', '-r', 'node_modules/font-awesome/fonts/', 'out/fonts'],
      },
      semantic: {
        command: ['rsync', '-r', 'node_modules/semantic/src/fonts/', 'out/fonts'],
      },
      'blueimp-gallery-img': {
        command: ['rsync', '-r', 'node_modules/blueimp-gallery/img/', 'out/img'],
      },
    },
    ghpages: {
      deployRemote: 'origin',
      deployBranch: 'gh-pages',
    },
    menu: {
      menuOptions: {
        optimize: false,
        skipFiles: /^(scripts|styles|testimonials)/,
      },
    },
    feedr: {
      feeds: {
        imgur: {
          url: "https://api.imgur.com/3/album/oud1k.json",
          requestOptions: {
            headers: {
              'Authorization': "Client-ID a6253679fd7fa71",
            },
          },
        },
      },
    },
  },
  collections: {
    testimonials: function () {
      return this.getCollection('documents').findAllLive({
        relativeOutDirPath: 'testimonials',
        isPagedAuto: { $ne: true },
      }).setComparator({ order: 1 });
    },
  },
  environments: {
    development: {
      port: 5000,
    },
  },
};
