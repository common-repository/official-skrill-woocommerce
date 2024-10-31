const skrill_idl_settings = window.wc.wcSettings.getSetting( 'skrill_idl_data', {} );
const skrill_idl_label = window.wp.htmlEntities.decodeEntities( skrill_idl_settings.title ) || window.wp.i18n.__( 'iDEAL', 'wc-skrill' );
const skrill_idl_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_idl_settings.description || '' );
};

const skrill_idl_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_idl_settings.icon,
      alt: skrill_idl_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_idl_Block_Gateway = {
    name: 'skrill_idl',
    icons: [skrill_idl_settings.icon],
    label: skrill_idl_final_label,
    content: Object( window.wp.element.createElement )( skrill_idl_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_idl_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_idl_label,
    supports: {
        features: skrill_idl_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_idl_Block_Gateway );