(function() {
  document.addEventListener("DOMContentLoaded", function () {
    const iconPatternGlobal = /\{\{icon:([\w\-]+)\}\}/g;

    // 取得整個 body HTML 字串
    let html = document.body.innerHTML;

    // 全局替換所有 {{icon:xxx}} 為 <ion-icon>
    html = html.replace(iconPatternGlobal, (_, iconName) => {
      return `<ion-icon name="${iconName}" size="large"></ion-icon>`;
    });

    // 寫回 body
    document.body.innerHTML = html;
  });
})();