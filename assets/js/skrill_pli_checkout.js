const skrill_pli_settings = window.wc.wcSettings.getSetting( 'skrill_pli_data', {} );
const skrill_pli_label = window.wp.htmlEntities.decodeEntities( skrill_pli_settings.title ) || window.wp.i18n.__( 'POLi', 'wc-skrill' );
const skrill_pli_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_pli_settings.description || '' );
};

const skrill_pli_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_pli_settings.icon,
      alt: skrill_pli_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_pli_Block_Gateway = {
    name: 'skrill_pli',
    icons: [skrill_pli_settings.icon],
    label: skrill_pli_final_label,
    content: Object( window.wp.element.createElement )( skrill_pli_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_pli_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_pli_label,
    supports: {
        features: skrill_pli_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_pli_Block_Gateway );