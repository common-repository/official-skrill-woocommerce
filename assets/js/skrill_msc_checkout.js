const skrill_msc_settings = window.wc.wcSettings.getSetting( 'skrill_msc_data', {} );
const skrill_msc_label = window.wp.htmlEntities.decodeEntities( skrill_msc_settings.title ) || window.wp.i18n.__( 'MasterCard', 'wc-skrill' );
const skrill_msc_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_msc_settings.description || '' );
};

const skrill_msc_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_msc_settings.icon,
      alt: skrill_msc_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_msc_Block_Gateway = {
    name: 'skrill_msc',
    icons: [skrill_msc_settings.icon],
    label: skrill_msc_final_label,
    content: Object( window.wp.element.createElement )( skrill_msc_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_msc_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_msc_label,
    supports: {
        features: skrill_msc_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_msc_Block_Gateway );