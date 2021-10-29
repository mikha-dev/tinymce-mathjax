let className = 'math-tex';
if (document.currentScript) {
  let urlParts = document.currentScript.getAttribute('src').split('?');
  if (urlParts[1]) {
    let queryParams = urlParts[1].split('&');
    for (let i = 0; i < queryParams.length; i++) {
      let param = queryParams[i].split('=');
      if (param[0] === 'class') {
        className = param[1];
        break;
      }
    }
  }
}
MathJax = {
    options: {
        enableMenu: false,
        processHtmlClass: className,
        ignoreHtmlClass: '.*',
        a11y: {
            speech: false,
            braille: false,
            subtitles: false
        }
    },
    tex: {
        macros: {
            arcsec: '\\DeclareMathOperator{\\arcsec}{arcsec}\\arcsec',
            arccsc: '\\DeclareMathOperator{\\arccsc}{arccsc}\\arccsc',
            arccot: '\\DeclareMathOperator{\\arccot}{arccot}\\arccot'
        }
    }
};
