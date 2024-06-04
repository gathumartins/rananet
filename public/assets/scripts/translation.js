function TranslateInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "ar,zh-CN,zh-TW,fr,ja,pt,ru,es",
    },
    "siteTrans"
  );
}
