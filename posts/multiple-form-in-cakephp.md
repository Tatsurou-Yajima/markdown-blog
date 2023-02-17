---
title: '同一画面で複数のsubmitボタンを実装する方法'
date: '2023-02-10'
---

# 同一画面で複数のsubmitボタンを実装する方法

![logo](/images/cakephp_logo.jpg)

今回は、同一画面で複数のsubmitボタンを実装する方法について解説します。

たとえば下記のようなユースケースを想定しています。

- フォーム入力画面
  - submitボタンを複数設置したい
  - どのボタンが押されたかによって処理を切り替えたい
  - フォームの入力値はすべてのsubmitで使用したい

今回は、そんな時にどのように実装するかをお伝えします。

CakePHPを使用しますが、別の言語でも似たような実装ができると思います！

## 実装

複数のsubmitボタンを実装するには、**フォームの`name`属性の値を判定**します。

今回は以下のように実装します。

```php:View
<?= $this->Form->button('form_1', [
    ['action' => 'action_1'],
    'class' => 'btn btn-primary',
    'name' => 'form_1',
]); ?>
<?= $this->Form->button('form_2', [
    ['action' => 'action_1'],
    'class' => 'btn btn-primary',
    'name' => 'form_2',
]); ?>
```

![](/images/2023-02-10-08-21-29.png)

ポイントは、`name`属性を付与していることです。

コントローラーでは以下のように記述します。

```php:Controller
if ($this->request->is(['post'])) {
    $requestData = $this->request->getData();
    if (isset($requestData['form_1'])) {
        // form_1 ボタンの処理
    } else {
        // form_2 ボタンの処理
    }
}
```

PHP組み込みの`isset`関数を使用することで、`form_1`という値が存在する = `form_1`のボタンがクリックされた場合、を判定することができます。

もし`form_1`が押された場合、`form_2`はリクエストデータに存在しません。

このように、フォームの`name`属性の値を判定することで、処理を切り替えることができます。
