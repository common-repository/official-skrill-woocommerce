const skrill_spx_settings = window.wc.wcSettings.getSetting( 'skrill_spx_data', {} );
const skrill_spx_label = window.wp.htmlEntities.decodeEntities( skrill_spx_settings.title ) || window.wp.i18n.__( 'PIX', 'wc-skrill' );
const skrill_spx_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_spx_settings.description || '' );
};

const skrill_spx_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_spx_settings.icon,
      alt: skrill_spx_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_spx_Block_Gateway = {
    name: 'skrill_spx',
    icons: [skrill_spx_settings.icon],
    label: skrill_spx_final_label,
    content: Object( window.wp.element.createElement )( skrill_spx_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_spx_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_spx_label,
    supports: {
        features: skrill_spx_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_spx_Block_Gateway );