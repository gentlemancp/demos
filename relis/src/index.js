import EDITOR from '@model/config.json';
import CONCEPT from '@model/concept.json';
import PROJECTION from '@model/projection.json';

let editor = Gentleman.activateEditor(".app-editor")[0];
editor.init({
    config: EDITOR,
    conceptModel: CONCEPT,
    projectionModel: PROJECTION
});

let instance = editor.createInstance("project");
instance.changeSize("fullscreen");