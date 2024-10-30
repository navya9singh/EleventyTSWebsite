import * as monaco from 'monaco-editor'
declare global {
  interface Window {
    MonacoEnvironment: monaco.Environment;
  }
}
self.MonacoEnvironment = {
	getWorker: function (workerId, label): Worker {
      const getWorkerModule = (moduleUrl, label) => {
        if (self.MonacoEnvironment.getWorkerUrl) {
        return new Worker(self.MonacoEnvironment.getWorkerUrl(workerId, label));
        }
        else {
          return new Worker(moduleUrl);
        }
      };

      switch (label) {
        case 'json':
          return getWorkerModule('/monaco-editor/esm/vs/language/json/json.worker?worker', label);
        case 'css':
        case 'scss':
        case 'less':
          return getWorkerModule('/monaco-editor/esm/vs/language/css/css.worker?worker', label);
        case 'html':
        case 'handlebars':
        case 'razor':
          return getWorkerModule('/monaco-editor/esm/vs/language/html/html.worker?worker', label);
        case 'typescript':
        case 'javascript':
          return getWorkerModule('/monaco-editor/esm/vs/language/typescript/ts.worker?worker', label);
        default:
          return getWorkerModule('/monaco-editor/esm/vs/editor/editor.worker?worker', label);
      }

	}
}