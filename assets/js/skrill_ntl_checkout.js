const skrill_ntl_settings = window.wc.wcSettings.getSetting( 'skrill_ntl_data', {} );
const skrill_ntl_label = window.wp.htmlEntities.decodeEntities( skrill_ntl_settings.title ) || window.wp.i18n.__( 'NETELLER', 'wc-skrill' );
const skrill_ntl_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_ntl_settings.description || '' );
};

const skrill_ntl_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_ntl_settings.icon,
      alt: skrill_ntl_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_ntl_Block_Gateway = {
    name: 'skrill_ntl',
    icons: [skrill_ntl_settings.icon],
    label: skrill_ntl_final_label,
    content: Object( window.wp.element.createElement )( skrill_ntl_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_ntl_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_ntl_label,
    supports: {
        features: skrill_ntl_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_ntl_Block_Gateway );