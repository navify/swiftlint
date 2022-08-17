const { which } = require('@navify/utils-subprocess');

const isInstalled = async () => {
  try {
    await which('@navify/swiftlint');
  } catch (e) {
    if (e.code !== 'ENOENT') {
      throw e;
    }

    return false;
  }

  return true;
};

module.exports = { isInstalled };
