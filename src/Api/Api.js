import config from './../config.js';

/**
 * Fetch API to list files from directory
 * @param {String} path
 * @returns {Object}
 */
export function list(path) {
  console.log("run here call api list file", path)
  if (path) {
    return fetch(config.url_list);
  }
};

/**
 * Fetch API to list files from directory
 * @param {String} pathdir
 * @returns {Object}
 */
export function listdir(pathdir) {
  console.log("check pathdir", pathdir)
  return fetch(config.url_readdir + "?path=" + pathdir)
}

/**
 * Fetch API to create a directory
 * @param {String} path
 * @param {String} directory
 * @returns {Object}
 */
export function createDirectory(path, directory) {
  return fetch(config.url_create_folder, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path, directory
    })
  });
};

/**
 * Fetch API to create a file
 * @param {String} path
 * @param {String} filename
 * @returns {Object}
 */
export function createFile(path, filename) {

  return fetch(config.url_create_file, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path, filename
    })
  });
};



/**
 * Fetch API to get file body
 * @param {String} path
 * @returns {Object}
 */
export function getFileContent(path) {

  let del_str = path.slice(1);
  let del_ = del_str.replace('/', '')
  return fetch(config.url_get_content + '?path=' + del_);
};


/**
 * Fetch API to remove a file or folder
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function remove(path, filenames, recursive = true) {

  return fetch(config.url_remove, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path, filenames, recursive
    })
  });
};

/**
 * Fetch API to move files
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function move(path, destination, filenames) {
  return fetch(config.url_move, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path, destination, filenames
    })
  });
};

/**
 * Fetch API to move files
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function rename(path, destination) {
  return fetch(config.url_rename, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path, destination
    })
  });
};

/**
 * Fetch API to copy files
 * @param {String} path
 * @param {Array} filenames
 * @param {Boolean} recursive
 * @returns {Object}
 */
export function copy(path, destination, filenames) {
  return fetch(config.url_copy, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      path, destination, filenames
    })
  });
};

/**
 * Fetch API to copy files
 * @param {String} path
 * @param {Object<FileList>} fileList
 * @returns {Object}
 */
export function upload(path, fileList, formData = new FormData()) {
  [...fileList].forEach(f => {
    formData.append('file[]', f);
  });
  formData.append('path', path);

  return fetch(config.url_upload, {
    method: 'POST',
    body: formData,
    headers: {
      // a workaround for node connector, passing the path by header
      path: path
    }
  });
};
