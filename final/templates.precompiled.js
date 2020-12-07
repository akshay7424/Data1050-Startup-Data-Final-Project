(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['deletePostModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"modal fade\" id=\"deletePost"
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":2,"column":38},"end":{"line":2,"column":48}}}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deletePost\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content post-content delete-post-modal\">\n            <div class=\"modal-header\">\n                <div style=\"font-size: 2em; float:left;\">\n                    Delete Post\n                </div>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" style=\"color: white;\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\" style=\"background-color: var(--Z-Dark-Input-Background);\">\n                <h4>\n                    Are you sure you want to delete this post?\n                    <br />\n                    <br />\n                    The post will be gone forever.\n\n                </h4>\n            </div>\n            <div class=\"modal-footer\">\n                <form id=\"deletePostForm\" name=\"deletePostForm\" action=\"/posts/delete/"
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":25,"column":86},"end":{"line":25,"column":96}}}) : helper)))
    + "\" method=\"POST\">\n                    <div class=\"createPostBottomMostButtonsContainer\" style=\"display: block;\">\n                        <button class=\"submitEditButton tabHighlightable zTooltipRelative \" id=\"deletePostButton\"\n                            tabindex=\"0\">\n                            <span class=\"zToolTip\">Delete Post</span>\n                            <span class=\"insideTabHighlightable\" tabindex=\"-1\">Delete</span>\n                        </button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<script>\n    deletePostButton = document.getElementById(\"deletePostButton\");\n    deletePostButton.addEventListener('click', function (event) {\n        document.deletePostForm.submit();\n    });\n</script>\n\n";
},"useData":true});
templates['mainFeedPostTagContainer'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"imptTag") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":10,"column":16},"end":{"line":18,"column":23}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"tagStyleImportant postTag\">\n                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":12,"column":24},"end":{"line":12,"column":31}}}) : helper)))
    + "\n                    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"tagStyleRegular postTag\">\n                        "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"tag") || (depth0 != null ? lookupProperty(depth0,"tag") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tag","hash":{},"data":data,"loc":{"start":{"line":16,"column":24},"end":{"line":16,"column":31}}}) : helper)))
    + "\n                    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"tagRowOverallContainer\">\n\n    <svg class=\"tagSymbol\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 22\">\n        <path d=\"M22,13,9.59.59A2,2,0,0,0,8.17,0H2A2,2,0,0,0,0,2V8.17A2,2,0,0,0,.59,9.59L13,22ZM5,7A2,2,0,1,1,7,5,2,2,0,0,1,5,7Z\"/>\n    </svg>\n\n    <div class=\"tagContainerCroppingBox tagContainerSpecial dragToScroll\" tabindex=\"0\">\n        <span class=\"insideTagContainerCroppingBox\" tabindex=\"-1\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"tagsArray") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":9,"column":12},"end":{"line":19,"column":21}}})) != null ? stack1 : "")
    + "            <div class=\"invisibleTagForFadeOutPadding\"></div>\n        </span>\n    </div>\n    <div class=\"invisibleTagContainerFadeOutEffectAnchor\">\n        <div class=\"tagContainerFadeOutEffect\">\n        </div>\n    </div>\n\n</div>\n\n";
},"useData":true});
templates['postBase'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"postBody") : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":42,"column":12},"end":{"line":44,"column":19}}})) != null ? stack1 : "")
    + "\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <p class=\"postBody mainFeedPostBodyClampedPreview\"> "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"postBody") || (depth0 != null ? lookupProperty(depth0,"postBody") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"postBody","hash":{},"data":data,"loc":{"start":{"line":43,"column":68},"end":{"line":43,"column":80}}}) : helper)))
    + " </p>\n";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifEqual")||(depth0 && lookupProperty(depth0,"ifEqual"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"postType") : depth0),"imagePost",{"name":"ifEqual","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(15, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":46,"column":8},"end":{"line":166,"column":8}}})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"postCarouselOuterWrapper\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifLongerThanOne")||(depth0 && lookupProperty(depth0,"ifLongerThanOne"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"postImagesArray") : depth0),{"name":"ifLongerThanOne","hash":{},"fn":container.program(8, data, 0),"inverse":container.program(13, data, 0),"data":data,"loc":{"start":{"line":48,"column":16},"end":{"line":79,"column":36}}})) != null ? stack1 : "")
    + "            </div>\n\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"postCarouselWrapper\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"postImagesArray") : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":24},"end":{"line":57,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n                    <button class=\"postCarouselButtonPrev tabHighlightable\"\n                            aria-label=\"Previous Image\" type=\"button\">\n                        <span class=\"insideTabHighlightable darkerShadow\">\n                        </span>\n                    </button>\n                    <button class=\"postCarouselButtonNext tabHighlightable\"\n                            aria-label=\"Next Image\" type=\"button\">\n                        <span class=\"insideTabHighlightable darkerShadow\">\n                        </span>\n                    </button>\n                    <div class=\"postCarouselPageIndicators\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"postImagesArray") : depth0),{"name":"each","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":70,"column":24},"end":{"line":72,"column":33}}})) != null ? stack1 : "")
    + "                    </div>\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                            <div class=\"postCarouselSlideContainer right\">\n                                <div class=\"postCarouselSlideInnerContainerForCentering\">\n                                    <img class=\"postCarouselImage\"\n                                         src=\""
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "\" alt=\"An Image\">\n                                </div>\n                            </div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return "                            <div class=\"postCarouselPips\"></div>\n";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <div class=\"postIndividualImage\">\n                        <img class=\"postCarouselImage\"\n                             src=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"postImagesArray") : depth0)) != null ? lookupProperty(stack1,"0") : stack1), depth0))
    + "\" alt=\"An Image\">\n                    </div>\n";
},"15":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifEqual")||(depth0 && lookupProperty(depth0,"ifEqual"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"postType") : depth0),"linkPost",{"name":"ifEqual","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":82,"column":8},"end":{"line":166,"column":8}}})) != null ? stack1 : "");
},"16":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"postLink\">\n                <a class=\"tabHighlightable\" href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"postLink") || (depth0 != null ? lookupProperty(depth0,"postLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postLink","hash":{},"data":data,"loc":{"start":{"line":84,"column":50},"end":{"line":84,"column":62}}}) : helper)))
    + "\" tabindex=\"0\">\n                    <span class=\"insideTabHighlightable insideButText\" tabindex=\"-1\">\n                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"postLink") || (depth0 != null ? lookupProperty(depth0,"postLink") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postLink","hash":{},"data":data,"loc":{"start":{"line":86,"column":24},"end":{"line":86,"column":36}}}) : helper)))
    + "\n                    </span>\n                </a>\n            </div>\n\n";
},"18":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifEqual")||(depth0 && lookupProperty(depth0,"ifEqual"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"postType") : depth0),"documentPost",{"name":"ifEqual","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.program(21, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":91,"column":8},"end":{"line":166,"column":8}}})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"postDocumentPreviewWrapper\">\n                <div class=\"postDocumentPreviewTop\">\n                    <div class=\"postDocumentPreviewToolbar\">\n                        "
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"postDocumentInfo") : depth0)) != null ? lookupProperty(stack1,"documentTitle") : stack1), depth0))
    + "\n                        <div class=\"postDocumentIconContainerWrapper\">\n                            <a class=\"downloadButton postDocumentIconContainer tabHighlightable zToolTipRelative\"\n                               tabindex=\"0\" href=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"postDocumentInfo") : depth0)) != null ? lookupProperty(stack1,"documentUrl") : stack1), depth0))
    + "\" download>\n                                <span class=\"zToolTip\">Download</span>\n                                <span class=\"insideTabHighlightable\" tabindex=\"-1\">\n                                    <svg class=\"downloadSymbol postDocumentIcon\"\n                                         xmlns=\"http://www.w3.org/2000/svg\"\n                                         viewBox=\"0 0 22 22\">\n                                        <path d=\"M19,15v4H3V15a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V15a1,1,0,0,0-1-1H20A1,1,0,0,0,19,15Z\"/><path\n                                            d=\"M17.59,8H14V1a1,1,0,0,0-1-1H9A1,1,0,0,0,8,1V8H4.41a1,1,0,0,0-.7,1.71l6.58,6.58a1,1,0,0,0,1.42,0l6.58-6.58A1,1,0,0,0,17.59,8Z\"/>\n                                    </svg>\n                                </span>\n                            </a>\n                            <button class=\"togglePreviewButton postDocumentIconContainer tabHighlightable zToolTipRelative\"\n                                    tabindex=\"0\" type=\"button\">\n                                <span class=\"zToolTip\">Open Preview</span>\n                                <span class=\"insideTabHighlightable\" tabindex=\"-1\">\n                                    <svg class=\"openPreviewSymbol postDocumentIcon\"\n                                         xmlns=\"http://www.w3.org/2000/svg\"\n                                         viewBox=\"0 0 22 16\">\n                                        <path d=\"M21.6,6.54C20.26,4.23,17,0,11,0S1.74,4.23.4,6.54a2.88,2.88,0,0,0,0,2.92C1.74,11.77,5,16,11,16s9.26-4.23,10.6-6.54A2.88,2.88,0,0,0,21.6,6.54ZM11,13a5,5,0,1,1,5-5A5,5,0,0,1,11,13Z\"/>\n                                        <circle cx=\"11\" cy=\"8\" r=\"2.5\"/>\n                                    </svg>\n                                </span>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n                <iframe class=\"postDocumentPreview\"\n                        data-src-is-loaded=\"false\"\n                        data-src-buffer=\""
    + alias2(alias1(((stack1 = (depth0 != null ? lookupProperty(depth0,"postDocumentInfo") : depth0)) != null ? lookupProperty(stack1,"documentUrl") : stack1), depth0))
    + "\"\n                        src=\"\"></iframe>\n                <div class=\"postDocumentPreviewBottom\"></div>\n            </div>\n\n";
},"21":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"ifEqual")||(depth0 && lookupProperty(depth0,"ifEqual"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"postType") : depth0),"pollPost",{"name":"ifEqual","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":131,"column":8},"end":{"line":166,"column":8}}})) != null ? stack1 : "");
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"postPollWrapper\">\n                <form id=\"formForPollPost"
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":133,"column":41},"end":{"line":133,"column":51}}}) : helper)))
    + "\" class=\"postPollForm\" autocomplete=\"off\">\n                    <div class=\"postPollInformationWrapper\"\n                         data-total-votes=\""
    + alias4(container.lambda(((stack1 = (depth0 != null ? lookupProperty(depth0,"postPollInfo") : depth0)) != null ? lookupProperty(stack1,"totalVotes") : stack1), depth0))
    + "\" data-post-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":135,"column":86},"end":{"line":135,"column":96}}}) : helper)))
    + "\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"postPollInfo") : depth0)) != null ? lookupProperty(stack1,"postPollOptions") : stack1),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":136,"column":24},"end":{"line":152,"column":33}}})) != null ? stack1 : "")
    + ((stack1 = (lookupProperty(helpers,"ifFirstTrueSecondFalse")||(depth0 && lookupProperty(depth0,"ifFirstTrueSecondFalse"))||alias2).call(alias1,((stack1 = (depth0 != null ? lookupProperty(depth0,"postPollInfo") : depth0)) != null ? lookupProperty(stack1,"pollIsOpen") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"postPollInfo") : depth0)) != null ? lookupProperty(stack1,"userHasVoted") : stack1),{"name":"ifFirstTrueSecondFalse","hash":{},"fn":container.program(26, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":153,"column":24},"end":{"line":161,"column":51}}})) != null ? stack1 : "")
    + "                    </div>\n                </form>\n            </div>\n\n        ";
},"23":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=container.lambda, alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                            <div class=\"postPollOptionWrapper\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifFirstTrueSecondFalse")||(depth0 && lookupProperty(depth0,"ifFirstTrueSecondFalse"))||alias2).call(alias1,((stack1 = (depths[1] != null ? lookupProperty(depths[1],"postPollInfo") : depths[1])) != null ? lookupProperty(stack1,"pollIsOpen") : stack1),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"postPollInfo") : depths[1])) != null ? lookupProperty(stack1,"userHasVoted") : stack1),{"name":"ifFirstTrueSecondFalse","hash":{},"fn":container.program(24, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":138,"column":32},"end":{"line":145,"column":59}}})) != null ? stack1 : "")
    + "                                <div class=\"postPollOptionNumbers\">"
    + ((stack1 = (lookupProperty(helpers,"compactNumber")||(depth0 && lookupProperty(depth0,"compactNumber"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"votes") : depth0),{"name":"compactNumber","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":146,"column":67},"end":{"line":147,"column":70}}})) != null ? stack1 : "")
    + "</div>\n\n                                <span class=\"postPollOptionText\">"
    + alias4(alias3((depth0 != null ? lookupProperty(depth0,"option") : depth0), depth0))
    + "</span>\n                                <div class=\"postPollOptionBar\" data-votes=\""
    + alias4(alias3((depth0 != null ? lookupProperty(depth0,"votes") : depth0), depth0))
    + "\"></div>\n                            </div>\n";
},"24":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                                    <input type=\"radio\" class=\"postPollOptionRadio\"\n                                           id=\"pollPost"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"postID") : depths[1]), depth0))
    + "option"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"index") : depth0), depth0))
    + "\"\n                                           name=\"pollPost"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"postID") : depths[1]), depth0))
    + "\" value=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"index") : depth0), depth0))
    + "\"\n                                           tabindex=\"0\">\n                                    <label for=\"pollPost"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"postID") : depths[1]), depth0))
    + "option"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"index") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"option") : depth0), depth0))
    + "</label>\n";
},"26":function(container,depth0,helpers,partials,data) {
    return "                            <button class=\"postPollVoteButton tabHighlightable\" type=\"button\"\n                                    tabindex=\"0\" aria-label=\"Save Draft\">\n                            <span class=\"insideTabHighlightable\" tabindex=\"-1\">\n                                Vote\n                            </span>\n                            </button>\n";
},"28":function(container,depth0,helpers,partials,data) {
    return "                        Me\n";
},"30":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                        "
    + alias4(((helper = (helper = lookupProperty(helpers,"opName") || (depth0 != null ? lookupProperty(depth0,"opName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opName","hash":{},"data":data,"loc":{"start":{"line":186,"column":24},"end":{"line":186,"column":34}}}) : helper)))
    + "\n                        '"
    + alias4(((helper = (helper = lookupProperty(helpers,"opYear") || (depth0 != null ? lookupProperty(depth0,"opYear") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opYear","hash":{},"data":data,"loc":{"start":{"line":187,"column":25},"end":{"line":187,"column":35}}}) : helper)))
    + "\n";
},"32":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"editButton dropdownMenuOption tabHighlightable enterToClick\"\n                     tabindex=\"0\" onclick=\"$('#editPost"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":259,"column":55},"end":{"line":259,"column":65}}}) : helper)))
    + "').modal('show');\">\n                    <span class=\"insideTabHighlightable noSelect\" tabindex=\"-1\">\n                        <svg class=\"editSymbol dropdownMenuOptionIcon\"\n                             xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20.02 22\">\n                            <path d=\"M19.44,4.12l-9.07,9.06a2.94,2.94,0,0,1-1.28.76l-2.51.73a1,1,0,0,1-1.24-1.25l.74-2.49a3,3,0,0,1,.75-1.28L15.9.59a2,2,0,0,1,2.83,0l.71.7A2,2,0,0,1,19.44,4.12Z\"/>\n                            <path d=\"M1.5,4H9.66l3-3H1.5a1.5,1.5,0,0,0,0,3Z\"/>\n                            <path d=\"M11.5,19H1.5a1.5,1.5,0,0,0,0,3h10a1.5,1.5,0,0,0,0-3Z\"/>\n                            <path d=\"M19.2,7.18,16.38,10H18.5a1.5,1.5,0,0,0,.7-2.82Z\"/>\n                            <path d=\"M5.42,8.24,6.66,7H1.5a1.5,1.5,0,0,0,0,3H4.29A5,5,0,0,1,5.42,8.24Z\"/>\n                            <path d=\"M18.5,13H13.38l-1.59,1.6a5,5,0,0,1-2.15,1.26L9.17,16H18.5a1.5,1.5,0,0,0,0-3Z\"/>\n                            <path d=\"M3.9,15.5A3,3,0,0,1,3.4,13H1.5a1.5,1.5,0,0,0,0,3H4.37A3.2,3.2,0,0,1,3.9,15.5Z\"/>\n                        </svg>\n                        <span class=\"dropdownMenuOptionText\"> Edit Post </span>\n                    </span>\n                </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":1,"column":13},"end":{"line":1,"column":23}}}) : helper)))
    + "\" class=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"postType") || (depth0 != null ? lookupProperty(depth0,"postType") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postType","hash":{},"data":data,"loc":{"start":{"line":1,"column":32},"end":{"line":1,"column":44}}}) : helper)))
    + " singlePostContainer\">\n\n    <div class=\"postLeft\">\n        <button class=\"likeButton postLeftIconContainer tabHighlightable\" tabindex=\"0\"\n                data-post-id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":5,"column":30},"end":{"line":5,"column":40}}}) : helper)))
    + "\" data-likes=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"likeCount") || (depth0 != null ? lookupProperty(depth0,"likeCount") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"likeCount","hash":{},"data":data,"loc":{"start":{"line":5,"column":54},"end":{"line":5,"column":67}}}) : helper)))
    + "\" type=\"button\"\n                aria-pressed=\"false\" aria-label=\"Like Post\">\n                <span class=\"insideTabHighlightable\" tabindex=\"-1\">\n                    <svg class=\"likeSymbol postLeftIcon\" xmlns=\"http://www.w3.org/2000/svg\"\n                         viewBox=\"0 0 22 22\">\n                        <rect x=\"18\" y=\"9\" width=\"4\" height=\"13\"/>\n                        <path d=\"M7.6,1.6a1,1,0,0,0-.41,1.09L8.54,7.74A1,1,0,0,1,7.58,9H1a1,1,0,0,0-1,1v3.88l0,.24,1.78,7.12a1,1,0,0,0,1,.76H16V9L10,0Z\"/>\n                    </svg>\n                </span>\n        </button>\n        <span class=\"likeCount postLeftNumbers\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compactNumber")||(depth0 && lookupProperty(depth0,"compactNumber"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"likeCount") : depth0),{"name":"compactNumber","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":16,"column":12},"end":{"line":16,"column":58}}})) != null ? stack1 : "")
    + "\n        </span>\n        <button class=\"commentButton postLeftIconContainer tabHighlightable\" tabindex=\"0\"\n                type=\"button\">\n                <span class=\"insideTabHighlightable\" tabindex=\"-1\">\n                    <svg class=\"commentSymbol postLeftIcon\" xmlns=\"http://www.w3.org/2000/svg\"\n                         viewBox=\"0 0 22 22\">\n                        <path d=\"M17,22V16h1a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4H4A4,4,0,0,0,0,4v8a4,4,0,0,0,4,4h6l6,6\"/>\n                    </svg>\n                </span>\n        </button>\n        <span class=\"commentCount postLeftNumbers\">\n            "
    + ((stack1 = (lookupProperty(helpers,"compactNumber")||(depth0 && lookupProperty(depth0,"compactNumber"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"commentCount") : depth0),{"name":"compactNumber","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":28,"column":12},"end":{"line":28,"column":61}}})) != null ? stack1 : "")
    + "\n        </span>\n    </div>\n\n    <div class=\"postCenter\">\n        <h3 class=\"postTitle\">\n            <a class=\"postTitleLink tabHighlightable\" href=\"/posts/"
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":34,"column":67},"end":{"line":34,"column":77}}}) : helper)))
    + "\" tabindex=\"0\">\n                <span class=\"insideTabHighlightable insideButText\" tabindex=\"-1\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"postTitle") || (depth0 != null ? lookupProperty(depth0,"postTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postTitle","hash":{},"data":data,"loc":{"start":{"line":36,"column":20},"end":{"line":36,"column":33}}}) : helper)))
    + "\n                </span>\n            </a>\n        </h3>\n\n"
    + ((stack1 = (lookupProperty(helpers,"ifEqual")||(depth0 && lookupProperty(depth0,"ifEqual"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"postType") : depth0),"textPost",{"name":"ifEqual","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.program(6, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":41,"column":8},"end":{"line":166,"column":20}}})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"mainFeedPostTagContainer"),depth0,{"name":"mainFeedPostTagContainer","hash":{"tagsArray":(depth0 != null ? lookupProperty(depth0,"tagsArray") : depth0)},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "        <span class=\"postProvenance\">\n            Posted\n            <span class=\"timeAgo zTooltipRelative tabHighlightable\" tabindex=\"0\">\n                <span class=\"zToolTip\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"absoluteTime")||(depth0 && lookupProperty(depth0,"absoluteTime"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"postTimestamp") : depth0),{"name":"absoluteTime","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":173,"column":20},"end":{"line":173,"column":68}}})) != null ? stack1 : "")
    + "\n                </span>\n                <span class=\"insideTabHighlightable insideButText\" tabindex=\"-1\">\n                    "
    + ((stack1 = (lookupProperty(helpers,"relativeTimeVsNow")||(depth0 && lookupProperty(depth0,"relativeTimeVsNow"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"postTimestamp") : depth0),{"name":"relativeTimeVsNow","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":176,"column":20},"end":{"line":176,"column":78}}})) != null ? stack1 : "")
    + "\n                </span>\n            </span>\n            by\n            <a class=\"username tabHighlightable\" href=\"/user/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opID") || (depth0 != null ? lookupProperty(depth0,"opID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opID","hash":{},"data":data,"loc":{"start":{"line":180,"column":61},"end":{"line":180,"column":69}}}) : helper)))
    + "\" id=\"username\"\n               tabindex=\"0\">\n                <span class=\"insideTabHighlightable insideButText\" tabindex=\"-1\">\n"
    + ((stack1 = (lookupProperty(helpers,"ifEqual")||(depth0 && lookupProperty(depth0,"ifEqual"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"opID") : depth0),(depth0 != null ? lookupProperty(depth0,"userID") : depth0),{"name":"ifEqual","hash":{},"fn":container.program(28, data, 0, blockParams, depths),"inverse":container.program(30, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":183,"column":20},"end":{"line":188,"column":32}}})) != null ? stack1 : "")
    + "                </span>\n                <div class=\"opBio\" id=\"opBio\">\n                        <div class=\"userNameText\">\n                            user/"
    + alias4(((helper = (helper = lookupProperty(helpers,"opName") || (depth0 != null ? lookupProperty(depth0,"opName") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opName","hash":{},"data":data,"loc":{"start":{"line":192,"column":33},"end":{"line":192,"column":43}}}) : helper)))
    + " '"
    + alias4(((helper = (helper = lookupProperty(helpers,"opYear") || (depth0 != null ? lookupProperty(depth0,"opYear") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opYear","hash":{},"data":data,"loc":{"start":{"line":192,"column":45},"end":{"line":192,"column":55}}}) : helper)))
    + "\n                        </div>\n                    <div class=\"userInfo\">\n                        Concentration:\n                        <br>\n                        <p class=\"userInfoText\">\n                            "
    + alias4(((helper = (helper = lookupProperty(helpers,"opConcentration") || (depth0 != null ? lookupProperty(depth0,"opConcentration") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opConcentration","hash":{},"data":data,"loc":{"start":{"line":199,"column":28},"end":{"line":199,"column":47}}}) : helper)))
    + "\n                        </p>\n                        Bio:\n                        <br>\n                        <p class=\"userInfoText\">\n                            "
    + alias4(((helper = (helper = lookupProperty(helpers,"opBio") || (depth0 != null ? lookupProperty(depth0,"opBio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"opBio","hash":{},"data":data,"loc":{"start":{"line":204,"column":28},"end":{"line":204,"column":37}}}) : helper)))
    + "\n                        </p>\n                    </div>\n                </div>\n            </a>\n        </span>\n    </div>\n\n    <div class=\"postRight\">\n        <button class=\"postDropdownIconContainer tabHighlightable\" tabindex=\"0\"\n                aria-haspopup=\"true\" aria-expanded=\"false\" type=\"button\">\n                <span class=\"insideTabHighlightable forJSDropdownClickClass\" tabindex=\"-1\">\n                    <svg class=\"dropdownSymbol\" xmlns=\"http://www.w3.org/2000/svg\"\n                         viewBox=\"0 0 10 6\">\n                        <path d=\"M5,6a1,1,0,0,1-.71-.29l-4-4A1,1,0,0,1,1.71.29L5,3.59,8.29.29A1,1,0,1,1,9.71,1.71l-4,4A1,1,0,0,1,5,6Z\"/>\n                    </svg>\n                </span>\n        </button>\n        <div class=\"dropdownMenu\">\n            <div class=\"shareButton dropdownMenuOption tabHighlightable enterToClick\"\n                 tabindex=\"0\">\n                    <span class=\"insideTabHighlightable noSelect\" tabindex=\"-1\">\n                        <svg class=\"shareSymbol dropdownMenuOptionIcon\"\n                             xmlns=\"http://www.w3.org/2000/svg\"\n                             viewBox=\"0 0 22 20.74\">\n                            <path d=\"M12.67.26A1,1,0,0,0,11,1V4.74c-7,.89-11,7-11,16,2-5,7-8,11-8v3.74a1,1,0,0,0,1.67.74L22,8.74Z\"/>\n                        </svg>\n                        <span class=\"dropdownMenuOptionText\"> Share </span>\n                    </span>\n            </div>\n            <div class=\"saveButton dropdownMenuOption tabHighlightable enterToClick\"\n                 tabindex=\"0\">\n                    <span class=\"insideTabHighlightable noSelect\" tabindex=\"-1\">\n                        <svg class=\"saveAddSymbol dropdownMenuOptionIcon\"\n                             xmlns=\"http://www.w3.org/2000/svg\"\n                             viewBox=\"0 0 16 22.33\">\n                            <path d=\"M14,0H2A2,2,0,0,0,0,2V21.33a1,1,0,0,0,1.63.78L7.37,17.5a1,1,0,0,1,1.26,0l5.74,4.61A1,1,0,0,0,16,21.33V2A2,2,0,0,0,14,0ZM12,10H10a1,1,0,0,0-1,1v2a1,1,0,0,1-2,0V11a1,1,0,0,0-1-1H4A1,1,0,0,1,4,8H6A1,1,0,0,0,7,7V5A1,1,0,0,1,9,5V7a1,1,0,0,0,1,1h2a1,1,0,0,1,0,2Z\"/>\n                        </svg>\n                        <span class=\"dropdownMenuOptionText\"> Save Post </span>\n                    </span>\n            </div>\n            <div class=\"reportButton dropdownMenuOption tabHighlightable enterToClick\"\n                 tabindex=\"0\">\n                    <span class=\"insideTabHighlightable noSelect\" tabindex=\"-1\">\n                        <svg class=\"reportSymbol dropdownMenuOptionIcon\"\n                             xmlns=\"http://www.w3.org/2000/svg\"\n                             viewBox=\"-2 0 24.33 22\">\n                            <path\n                                    d=\"M17.5,8.63a1,1,0,0,1,0-1.26l4.61-5.74A1,1,0,0,0,21.33,0H2A2,2,0,0,0,0,2V21a1,1,0,0,0,1,1H2a1,1,0,0,0,1-1V16H21.33a1,1,0,0,0,.78-1.63Z\"/>\n                            </svg>\n                        <span class=\"dropdownMenuOptionText\"> Report </span>\n                    </span>\n            </div>\n"
    + ((stack1 = (lookupProperty(helpers,"ifEqual")||(depth0 && lookupProperty(depth0,"ifEqual"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"postType") : depth0),"textPost",{"name":"ifEqual","hash":{},"fn":container.program(32, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":257,"column":12},"end":{"line":274,"column":24}}})) != null ? stack1 : "")
    + "            <div class=\"deleteButton dropdownMenuOption tabHighlightable enterToClick\"\n                 tabindex=\"0\" onclick=\"$('#deletePost"
    + alias4(((helper = (helper = lookupProperty(helpers,"postID") || (depth0 != null ? lookupProperty(depth0,"postID") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"postID","hash":{},"data":data,"loc":{"start":{"line":276,"column":53},"end":{"line":276,"column":63}}}) : helper)))
    + "').modal('show');\">\n                <span class=\"insideTabHighlightable noSelect\" tabindex=\"-1\">\n                    <svg class=\"deleteSymbol dropdownMenuOptionIcon\"\n                    xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16.61 22.06\">\n                        <path d=\"M.1,8.6l1,11.63a2,2,0,0,0,2,1.83H13.54a2,2,0,0,0,2-1.83l1-11.63A.49.49,0,0,0,16,8.06H.6A.5.5,0,0,0,.1,8.6Zm11.33,11,.34-9.49h2.31l-.57,9.53a.56.56,0,0,1-.59.47H12A.55.55,0,0,1,11.43,19.55ZM7.15,10.06H9.46l-.11,9.51a.55.55,0,0,1-.59.49h-.9a.55.55,0,0,1-.59-.49Zm-4.61,0H4.85l.34,9.49a.55.55,0,0,1-.59.51H3.7a.56.56,0,0,1-.59-.47Z\"/><path\n                        d=\"M16.59,5.34,16,3.68A1,1,0,0,0,15.09,3H11.31V1a1,1,0,0,0-1-1h-4a1,1,0,0,0-1,1V3H1.53a1,1,0,0,0-.95.68L0,5.34A.5.5,0,0,0,.5,6H16.11A.5.5,0,0,0,16.59,5.34Z\"/>\n                    </svg>\n                    <span class=\"dropdownMenuOptionText\"> Delete Post </span>\n                </span>\n            </div>\n        </div>\n    </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"deletePostModal"),depth0,{"name":"deletePostModal","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</article>\n";
},"usePartial":true,"useData":true,"useDepths":true});
})();