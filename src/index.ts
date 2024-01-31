import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

const pjmdf: JupyterFrontEndPlugin<void> = {
  id: '@jans-code/pretty_jupyter_metadata_form:pjmdf',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('Pretty Jupyter metadata-form activated');
  }
};

export default [pjmdf];
