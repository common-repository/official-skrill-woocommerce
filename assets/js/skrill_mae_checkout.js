const skrill_mae_settings = window.wc.wcSettings.getSetting( 'skrill_mae_data', {} );
const skrill_mae_label = window.wp.htmlEntities.decodeEntities( skrill_mae_settings.title ) || window.wp.i18n.__( 'Maestro', 'wc-skrill' );
const skrill_mae_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_mae_settings.description || '' );
};

const skrill_mae_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_mae_settings.icon,
      alt: skrill_mae_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_mae_Block_Gateway = {
    name: 'skrill_mae',
    icons: [skrill_mae_settings.icon],
    label: skrill_mae_final_label,
    content: Object( window.wp.element.createElement )( skrill_mae_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_mae_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_mae_label,
    supports: {
        features: skrill_mae_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_mae_Block_Gateway );