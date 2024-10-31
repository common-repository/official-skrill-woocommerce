const skrill_ali_settings = window.wc.wcSettings.getSetting( 'skrill_ali_data', {} );
const skrill_ali_label = window.wp.htmlEntities.decodeEntities( skrill_ali_settings.title ) || window.wp.i18n.__( 'Alipay', 'wc-skrill' );
const skrill_ali_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_ali_settings.description || '' );
};

const skrill_ali_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_ali_settings.icon,
      alt: skrill_ali_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_ali_Block_Gateway = {
    name: 'skrill_ali',
    icons: [skrill_ali_settings.icon],
    label: skrill_ali_final_label,
    content: Object( window.wp.element.createElement )( skrill_ali_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_ali_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_ali_label,
    supports: {
        features: skrill_ali_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_ali_Block_Gateway );