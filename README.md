# render

## scssの環境設定
Live Sass Compilerを使用する
VSCode画面下部の「Watch Sass」ボタンをクリック
ボタンが「Watching...」に変わり、SCSSファイルの変更を監視し自動コンパイルを開始

- 出力先の設定
settings.jsonに以下の設定を追加

```json
"liveSassCompile.settings.formats": [
  {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "/css"
  }
]
```

```json
    "liveSassCompile.settings.formats": [
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "/css"
        }
```

# 配色
#3d1617 : #c8eae9
#525c00 : #a79eed