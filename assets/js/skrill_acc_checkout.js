const skrill_acc_settings = window.wc.wcSettings.getSetting( 'skrill_acc_data', {} );
const skrill_acc_label = window.wp.htmlEntities.decodeEntities( skrill_acc_settings.title ) || window.wp.i18n.__( 'Credit Cards', 'wc-skrill' );
const skrill_acc_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_acc_settings.description || '' );
};

const skrill_acc_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_acc_settings.icon,
      alt: skrill_acc_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_acc_Block_Gateway = {
    name: 'skrill_acc',
    icons: [skrill_acc_settings.icon],
    label: skrill_acc_final_label,
    content: Object( window.wp.element.createElement )( skrill_acc_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_acc_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_acc_label,
    supports: {
        features: skrill_acc_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_acc_Block_Gateway );