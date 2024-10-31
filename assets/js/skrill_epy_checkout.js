const skrill_epy_settings = window.wc.wcSettings.getSetting( 'skrill_epy_data', {} );
const skrill_epy_label = window.wp.htmlEntities.decodeEntities( skrill_epy_settings.title ) || window.wp.i18n.__( 'ePay.bg', 'wc-skrill' );
const skrill_epy_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_epy_settings.description || '' );
};

const skrill_epy_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_epy_settings.icon,
      alt: skrill_epy_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_epy_Block_Gateway = {
    name: 'skrill_epy',
    icons: [skrill_epy_settings.icon],
    label: skrill_epy_final_label,
    content: Object( window.wp.element.createElement )( skrill_epy_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_epy_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_epy_label,
    supports: {
        features: skrill_epy_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_epy_Block_Gateway );