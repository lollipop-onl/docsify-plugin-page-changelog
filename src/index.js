/** プラグインをインストール */
const install = (hook, vm) => {
  console.log(vm);

  if (!vm.frontmatter) {
    console.warn(
      "[docsify-plugin-page-history] before install official front matter plugin. see https://www.npmjs.com/package/docsify-plugin-page-history#install",
    );

    return;
  }

  hook.afterEach((content) => {
    return content;
  });
};

$docsify.plugins = [].concat(install, $docsify.plugins);
