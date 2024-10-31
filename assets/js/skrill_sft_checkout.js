const skrill_sft_settings = window.wc.wcSettings.getSetting( 'skrill_sft_data', {} );
const skrill_sft_label = window.wp.htmlEntities.decodeEntities( skrill_sft_settings.title ) || window.wp.i18n.__( 'Sofort', 'wc-skrill' );
const skrill_sft_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_sft_settings.description || '' );
};

const skrill_sft_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_sft_settings.icon,
      alt: skrill_sft_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_sft_Block_Gateway = {
    name: 'skrill_sft',
    icons: [skrill_sft_settings.icon],
    label: skrill_sft_final_label,
    content: Object( window.wp.element.createElement )( skrill_sft_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_sft_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_sft_label,
    supports: {
        features: skrill_sft_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_sft_Block_Gateway );