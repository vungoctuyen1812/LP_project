var timer = null;
UIkit.util.on(window, "scroll", function () {
  // clearTimeout( timer );
  // timer = setTimeout(function() {
  var toTopIcon = UIkit.util.$("#to-top-icon");
  var contactBtn = UIkit.util.$("#fixed-contact-btn");

  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 100) {
    setVisible(toTopIcon);
    setVisible(contactBtn);
  } else {
    setHidden(toTopIcon);
    setHidden(contactBtn);
  }
  // }, 100);
});

function setVisible(element) {
  if (element && UIkit.util.hasClass(element, "uk-hidden")) {
    UIkit.util.addClass(element, "uk-animation-fade");
    UIkit.util.addClass(element, "uk-visible");
    UIkit.util.removeClass(element, "uk-hidden");
  }
}

function setHidden(element) {
  if (element && UIkit.util.hasClass(element, "uk-visible")) {
    UIkit.util.addClass(element, "uk-hidden");
    UIkit.util.removeClass(element, "uk-visible");
  }
}

UIkit.util.ready(function () {
  var anniv = null;
  if (typeof URL == "function") {
    var params = new URL(document.location).searchParams;
    anniv = params.get("15th-Anniversary");
  } else {
    // IE対応
    var paramStr = document.location.search.substring(1);
    if (paramStr === "15th-Anniversary") {
      anniv = true;
    }
  }
  if (anniv !== null) {
    var kslinkModal = UIkit.util.$("#kslink-modal");
    UIkit.modal(kslinkModal).show();
  }
});
