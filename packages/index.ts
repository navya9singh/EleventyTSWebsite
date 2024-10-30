import '../useWorker'
import { h, render } from 'preact';
//import { createRootFragment } from 'preact-root-fragment';
import Play from './typescriptPlayground/src/templates/play';

const root = document.getElementById('app')!;
const pageContext = {
    lang: 'en',
    examplesTOC: "toc", // Provide the actual examplesTOC data here
    optionsSummary: {}, // Provide the actual optionsSummary data here
    playgroundHandbookTOC: { docs: [] } // Provide the actual playgroundHandbookTOC data here
};

// render(
//     <Play pageContext={pageContext} />,document.getElementById('root')
// );
render(h(Play, { pageContext }), root);
// render(<Play pageContext={pageContext} />, root);