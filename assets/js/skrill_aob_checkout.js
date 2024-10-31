const skrill_aob_settings = window.wc.wcSettings.getSetting( 'skrill_aob_data', {} );
const skrill_aob_label = window.wp.htmlEntities.decodeEntities( skrill_aob_settings.title ) || window.wp.i18n.__( 'Manual Bank Transfer', 'wc-skrill' );
const skrill_aob_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_aob_settings.description || '' );
};

const skrill_aob_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_aob_settings.icon,
      alt: skrill_aob_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_aob_Block_Gateway = {
    name: 'skrill_aob',
    icons: [skrill_aob_settings.icon],
    label: skrill_aob_final_label,
    content: Object( window.wp.element.createElement )( skrill_aob_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_aob_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_aob_label,
    supports: {
        features: skrill_aob_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_aob_Block_Gateway );