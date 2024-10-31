const skrill_gir_settings = window.wc.wcSettings.getSetting( 'skrill_gir_data', {} );
const skrill_gir_label = window.wp.htmlEntities.decodeEntities( skrill_gir_settings.title ) || window.wp.i18n.__( 'Giropay', 'wc-skrill' );
const skrill_gir_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_gir_settings.description || '' );
};

const skrill_gir_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_gir_settings.icon,
      alt: skrill_gir_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_gir_Block_Gateway = {
    name: 'skrill_gir',
    icons: [skrill_gir_settings.icon],
    label: skrill_gir_final_label,
    content: Object( window.wp.element.createElement )( skrill_gir_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_gir_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_gir_label,
    supports: {
        features: skrill_gir_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_gir_Block_Gateway );