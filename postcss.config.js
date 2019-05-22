module.exports = {
    plugins: {
        'precss': {},
        'autoprefixer': {},
        'saladcss-bem': {
            defaultNamespace: undefined, // default namespace to use, none by default 
            style: 'suit',                // suit or bem, suit by default, 
            separators: {
                namespace: '-',
                descendent: '__',         // overwrite any default separator for chosen style 
                modifier: '--'
            },
            shortcuts: {
                component: 'b',          //override at-rule name 
                descendent: 'e',
                modifier: 'm'
            }
        }
    }
}