TestimonialSlide = function(data) {
  this.data = data;
  this.$slide = $('<div />', {
    'class': 'testimonial_slide'
  });

  this.createOptions();
  this.createSlide();
};

TestimonialSlide.prototype = {
  createOptions: function() {
    this.options = {
      duration: 750,
      distance: 250
    };
  },

  createSlide: function() {
    this.$slide.append(this.createQuoteNode());
    this.$slide.append(this.createAuthorFotoNode());
  },

  createQuoteNode: function() {
    var $quoteNode = $('<div />', {
      'class': 'quote'
    });

    $quoteNode.append(this.createQuotationMark());
    $quoteNode.append(this.createTextNode());
    $quoteNode.append(this.createQuotationMarkInverted());
    $quoteNode.append(this.createSignatureNode());
    return $quoteNode;
  },

  createTextNode: function() {
    var $text = $('<div />', {
      'class': 'text'
    });
    $text.text(this.data.quote);
    return $text;
  },

  createQuotationMark: function() {
    var $quotationMark = $('<div />', {
      'class': 'quotation_mark'
    });
    return $quotationMark;
  },

  createQuotationMarkInverted: function() {
    var $quotationMarkInverted = $('<div />', {
      'class': 'quotation_mark_inverted'
    });
    return $quotationMarkInverted;
  },

  createSignatureNode: function() {
    var $signatureNode = $('<div />', {
      'class': 'signature'
    });
    $signatureNode.append(this.createAuthorNode());
    $signatureNode.append(this.createCompanyNode());
    return $signatureNode;
  },

  createAuthorNode: function() {
    var $authorNode = $('<div />', {
      'class': 'author'
    });
    $authorNode.text('- ');
    $authorNode.append(this.createLinkNode(this.data.authorHref, this.data.fullName));
    return $authorNode;
  },

  createCompanyNode: function() {
    var $companyNode = $('<div />', {
      'class': 'company'
    });
    $companyNode.append(this.createLinkNode(this.data.companyHref, this.data.company));
    return $companyNode;
  },

  createLinkNode: function(href, text) {
    var $linkNode = $('<a />', {
      target: '_blank',
      href: href,
      text: text
    });
    return $linkNode;
  },

  createAuthorFotoNode: function() {
    var $authorFoto = $('<img />', {
      'class': 'author_foto',
      'src': this.data.fotoSrc
    });
    return $authorFoto;
  },

  animateHide: function() {
    var self = this;

    this.$slide.animate({
        "margin-left": "+=" + this.options.distance + "px",
        opacity: "0"
      },
      this.options.duration,
      function() {
        self.hideSlide();
      }
    );
  },

  animateShow: function() {
    this.$slide.show().animate({
        "margin-left": "+=" + this.options.distance + "px",
        opacity: "1"
      },
      this.options.duration * 2);
  },

  hideSlide: function() {
    /*jshint multistr: true */
    var styleVal = 'display: none; opacity: 0; \
      margin-left: -' + this.options.distance + 'px';
    this.$slide.attr('style', styleVal);
  },

  height: function() {
    return this.$slide.height();
  },

  getNode: function() {
    return this.$slide;
  }
};