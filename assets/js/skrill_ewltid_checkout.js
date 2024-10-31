const skrill_ewltid_settings = window.wc.wcSettings.getSetting( 'skrill_ewltid_data', {} );
const skrill_ewltid_label = window.wp.htmlEntities.decodeEntities( skrill_ewltid_settings.title ) || window.wp.i18n.__( 'E-wallet Indonesia', 'wc-skrill' );
const skrill_ewltid_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_ewltid_settings.description || '' );
};

const skrill_ewltid_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_ewltid_settings.icon,
      alt: skrill_ewltid_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_ewltid_Block_Gateway = {
    name: 'skrill_ewltid',
    icons: [skrill_ewltid_settings.icon],
    label: skrill_ewltid_final_label,
    content: Object( window.wp.element.createElement )( skrill_ewltid_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_ewltid_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_ewltid_label,
    supports: {
        features: skrill_ewltid_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_ewltid_Block_Gateway );