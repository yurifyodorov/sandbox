var $siteHeaderItems = $('.siteHeader .siteHeader__item');

$siteHeaderItems.click(event => {
  var selectedClass = 'is-site-header-item-selected';
  $siteHeaderItems.removeClass(selectedClass);
  $(event.target).addClass(selectedClass);
});
