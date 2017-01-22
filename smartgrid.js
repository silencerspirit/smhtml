var smartgrid = require('smart-grid');
 
/* It's principal settings in smart grid project */
var settings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: "0.5%", /* gutter width px || % */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '0.5%' /* side fields */
    },
    breakPoints: {
        lg: {
            'width': '1200px', /* -> @media (max-width: 1100px) */
            'fields': '0.25%' /* side fields */
        },
        md: {
            'width': '992px',
            'fields': '0.25%'
        },
        sm: {
            'width': '768px',
            'fields': '0.25%'
        },
        xs: {
            'width': '480px',
            'fields': '0.25%'
        },
        sxs: {
            'width': '320px',
            'fields': '0.25%'
        }

        /* 
        We can create any quantity of break points.
 
        some_name: {
            some_width: 'Npx',
            some_offset: 'N(px|%)'
        }
        */
    }
};
 
smartgrid('./app/libs/smartgrid/', settings);