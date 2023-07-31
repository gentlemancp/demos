import CONCEPT from '@model/concept.json';
import PROJECTION from '@model/projection.json';

let editor = Gentleman.activateEditor(".app-editor")[0];
editor.init({
    conceptModel: CONCEPT,
    projectionModel: PROJECTION
});