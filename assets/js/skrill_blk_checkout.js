const skrill_blk_settings = window.wc.wcSettings.getSetting( 'skrill_blk_data', {} );
const skrill_blk_label = window.wp.htmlEntities.decodeEntities( skrill_blk_settings.title ) || window.wp.i18n.__( 'Blik', 'wc-skrill' );
const skrill_blk_Content = () => {
    return window.wp.htmlEntities.decodeEntities( skrill_blk_settings.description || '' );
};

const skrill_blk_final_label = window.wp.element.createElement(
    "span",
    null,
    window.wp.element.createElement("img", {
      src: skrill_blk_settings.icon,
      alt: skrill_blk_label,
      style: { float: 'right', marginRight: '20px', height: '50px',
      maxHeight: '50px' }
    }),
    "" 
  );

const skrill_blk_Block_Gateway = {
    name: 'skrill_blk',
    icons: [skrill_blk_settings.icon],
    label: skrill_blk_final_label,
    content: Object( window.wp.element.createElement )( skrill_blk_Content, null ),
    edit: Object( window.wp.element.createElement )( skrill_blk_Content, null ),
    canMakePayment: () => true,
    ariaLabel: skrill_blk_label,
    supports: {
        features: skrill_blk_settings.supports,
    },
};
window.wc.wcBlocksRegistry.registerPaymentMethod( skrill_blk_Block_Gateway );