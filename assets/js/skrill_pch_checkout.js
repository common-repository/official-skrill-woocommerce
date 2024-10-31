const skrill_pch_settings = window.wc.wcSettings.getSetting( 'skrill_pch_data', {} );
const skrill_pch_label = window.wp.htmlEntities.decodeEntities( skrill_pch_settings.title ) || window.wp.i18n.__( 'Paysafecash', 'wc-skrill' );
const skrill_pch_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_pch_settings.description || '' );
};

const skrill_pch_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_pch_settings.icon,
      alt: skrill_pch_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_pch_Block_Gateway = {
    name: 'skrill_pch',
    icons: [skrill_pch_settings.icon],
    label: skrill_pch_final_label,
    content: Object( window.wp.element.createElement )( skrill_pch_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_pch_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_pch_label,
    supports: {
        features: skrill_pch_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_pch_Block_Gateway );