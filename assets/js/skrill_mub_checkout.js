const skrill_mub_settings = window.wc.wcSettings.getSetting( 'skrill_mub_data', {} );
const skrill_mub_label = window.wp.htmlEntities.decodeEntities( skrill_mub_settings.title ) || window.wp.i18n.__( 'Multibanco', 'wc-skrill' );
const skrill_mub_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_mub_settings.description || '' );
};

const skrill_mub_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_mub_settings.icon,
      alt: skrill_mub_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_mub_Block_Gateway = {
    name: 'skrill_mub',
    icons: [skrill_mub_settings.icon],
    label: skrill_mub_final_label,
    content: Object( window.wp.element.createElement )( skrill_mub_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_mub_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_mub_label,
    supports: {
        features: skrill_mub_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_mub_Block_Gateway );