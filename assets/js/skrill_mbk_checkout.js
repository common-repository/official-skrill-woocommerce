const skrill_mbk_settings = window.wc.wcSettings.getSetting( 'skrill_mbk_data', {} );
const skrill_mbk_label = window.wp.htmlEntities.decodeEntities( skrill_mbk_settings.title ) || window.wp.i18n.__( 'My Bank', 'wc-skrill' );
const skrill_mbk_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_mbk_settings.description || '' );
};

const skrill_mbk_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_mbk_settings.icon,
      alt: skrill_mbk_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_mbk_Block_Gateway = {
    name: 'skrill_mbk',
    icons: [skrill_mbk_settings.icon],
    label: skrill_mbk_final_label,
    content: Object( window.wp.element.createElement )( skrill_mbk_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_mbk_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_mbk_label,
    supports: {
        features: skrill_mbk_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_mbk_Block_Gateway );