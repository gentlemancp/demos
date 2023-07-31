import CONCEPT from '@model/concept.json';
import PROJECTION from '@model/projection.json';
import FIELD_PROJECTION from '@model/field-projection.json';

import AUTHORS_DATA from '@data/authors.json';

let editor = Gentleman.activateEditor(".app-editor")[0];
editor.init({
    config: {
        header: false,
    },
    conceptModel: CONCEPT,
    projectionModel: [PROJECTION, FIELD_PROJECTION]
});

if (Array.isArray(AUTHORS_DATA)) {
    AUTHORS_DATA.forEach(item => {
        let author = editor.createConcept("author");

        for (const key in item) {
            const value = item[key];
            if (author.hasAttribute(key)) {
                author.getAttribute(key).setValue(value);
            }
        }
    });
}

editor.createInstance("library").changeSize("fullscreen");