const skrill_flexible_settings = window.wc.wcSettings.getSetting( 'skrill_flexible_data', {} );
const skrill_flexible_label = window.wp.htmlEntities.decodeEntities( skrill_flexible_settings.title ) || window.wp.i18n.__( 'Pay By Skrill', 'wc-skrill' );
const skrill_flexible_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_flexible_settings.description || '' );
};

const skrill_flexible_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_flexible_settings.icon,
      alt: skrill_flexible_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_flexible_Block_Gateway = {
    name: 'skrill_flexible',
    icons: [skrill_flexible_settings.icon],
    label: skrill_flexible_final_label,
    content: Object( window.wp.element.createElement )( skrill_flexible_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_flexible_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_flexible_label,
    supports: {
        features: skrill_flexible_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_flexible_Block_Gateway );