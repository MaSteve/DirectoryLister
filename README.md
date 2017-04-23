# Directory Lister
Based on [DirectoryLister](https://github.com/DirectoryLister/DirectoryLister).

# Installation

## API
- Move the API folder into your web server folder and modify your server config files in order to share `api/MAGRServerAPI/public`.
- Rename `api/MAGRServerAPI/.env.example` to `api/MAGRServerAPI/.env` and modify `DEF_PATH` and `OMXD_FILE` fields with your media center root directory path and omxd file path.

## Directory Lister
- Copy the content of this repo (except API folder) in your media center root directory. It should be a folder shared with your web server.
- Modify `resources/themes/bootstrap/js/directorylister.js` file with your API endpoints.

## omxd

If you want to reproduce your films, you need [omxd](https://github.com/subogero/omxd). This daemon creates a file and listens for commands through it. This file is required in `api/MAGRServerAPI/.env`.
