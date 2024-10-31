const skrill_pwy_settings = window.wc.wcSettings.getSetting( 'skrill_pwy_data', {} );
const skrill_pwy_label = window.wp.htmlEntities.decodeEntities( skrill_pwy_settings.title ) || window.wp.i18n.__( 'Przelewy24', 'wc-skrill' );
const skrill_pwy_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_pwy_settings.description || '' );
};

const skrill_pwy_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_pwy_settings.icon,
      alt: skrill_pwy_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_pwy_Block_Gateway = {
    name: 'skrill_pwy',
    icons: [skrill_pwy_settings.icon],
    label: skrill_pwy_final_label,
    content: Object( window.wp.element.createElement )( skrill_pwy_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_pwy_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_pwy_label,
    supports: {
        features: skrill_pwy_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_pwy_Block_Gateway );