// namespacing should be better
var preferenceSchema = {};

preferenceSchema.textSpacing = {
    name: "Text Spacing",
    class: "textSpacing",
    preferences: {}
    // TODO: track retina angle here for future use
};

preferenceSchema.textSpacing.preferences.lineHeight = {
    name: "Line Height",
    defaultValue: "initial",
    type: "numeric",
    control: {
        min: 1,
        max: 3,
        step: 0.1
    }
};

preferenceSchema.textSpacing.preferences.paragraphSpacing = {
    name: "Paragraph Spacing",
    defaultValue: "initial",
    type: "numeric",
    control: {
        min: 1,
        max: 3,
        step: 0.1
    }
};

preferenceSchema.textSpacing.preferences.letterSpacing = {
    name: "Letter Spacing",
    defaultValue: "initial",
    type: "numeric",
    control: {
        min: 0,
        max: 3,
        step: 0.1
    }
};

preferenceSchema.textSpacing.preferences.wordSpacing = {
    name: "Word Spacing",
    defaultValue: "initial",
    type: "numeric",
    control: {
        min: 0,
        max: 3,
        step: 0.1
    }
};
