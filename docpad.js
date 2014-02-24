// http://docpad.org/docs/config

//require('longjohn');

module.exports = {
  templateData: {
    site: {
      styles: ["/styles/index.css"],
      scripts: [],
      title: "Cloyne needs your help!",
      description: "Recently the membership of Cloyne Court was &quot;briefed&quot; with a proposal by the Cabinet of the BSC to: 1) Make Cloyne a substance free house, 2) Make Cloyne an academic themed house and 3) Kick out all current membership and not allow them to return.",
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
        arguments: ['-t', 'uglifyify'],
        entry: 'scripts/gallery.js',
        out: 'scripts/gallerybundle.js',
      }],
      environments: {
        development: {
          bundles: [{
            arguments: ['-d'],
            entry: 'scripts/gallery.js',
            out: 'scripts/gallerybundle.js',
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
          url: "https://api.imgur.com/3/album/mmLJg.json",
          requestOptions: {
            headers: {
              'Authorization': "Client-ID 99694b515475fd1",
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
