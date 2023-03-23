---
theme: apple-basic
highlighter: shiki
lineNumbers: true
title: SymfonyLive Paris 2023
favicon: symfony.ico
info: |
  ## SymfonyLive Paris 2023
drawings:
  persist: false
colorSchema: light
fonts:
  provider: 'none'
  local: 'SF Pro Display,Josefin Sans'
  sans: 'SF Pro Display'
  serif: 'Josefin Sans'
src: 'content/cover.md'
---

---
layout: section
---

Créer un `DateTime` à partir d'une date, ça a un inconvénient

```php {all|5}
$dateTime = \DateTime::createFromFormat(format: 'Y-m-d', datetime: '2023-03-23');
dump($dateTime);

^ DateTime @1679576390 {#3
    date: 2023-03-23 13:57:29.0 Europe/Paris (+01:00)
}
```

---
layout: section
---

# Comment reset le temps d'un objet DateTime ?

<v-click>
  <h2>Qui a une idée ?</h2>
</v-click>

---
layout: section
---

Avec la méthode `setTime`

```php
$dateTime = \DateTime::createFromFormat(format: 'Y-m-d', datetime: '2023-03-23');
$dateTime = $dateTime->setTime(0, 0);
dump($dateTime);
```

<v-click>
```php
^ DateTime @1679576390 {#3
    date: 2023-03-23 00:00:00.0 Europe/Paris (+01:00)
}
```
</v-click>

---
layout: section
---

Avec un `!`

```php
$dateTime = \DateTime::createFromFormat(format: '!Y-m-d', datetime: '2023-03-23');
dump($dateTime);
```

<v-click>
```php
^ DateTime @1679576390 {#3
    date: 2023-03-23 00:00:00.0 Europe/Paris (+01:00)
}
```
`!` reset en réalité tous les "champs" qui ne sont pas précisés dans le paramètre `format` (à 0 ou 1 ou 1970 selon le champ)
</v-click>

---
layout: section
---

Avec un `|`

```php
$dateTime = \DateTime::createFromFormat(format: 'Y-m-d|', datetime: '2023-03-23');
dump($dateTime);
```

<v-click>
```php
^ DateTime @1679576390 {#3
    date: 2023-03-23 00:00:00.0 Europe/Paris (+01:00)
}
```
`|` reset tous les "champs" qui n'ont pas encore été parsé, donc ceux qui le suivent dans le paramètre `datetime`
</v-click>

---
layout: section
---

Avec une date + `midnight` (mais ça marche aussi à midi ou à 16h52)

```php
$dateTime = new \DateTime('2023-03-23 midnight');
var_dump($dateTime);
```

<v-click>
```php
^ DateTime @1679576390 {#3
    date: 2023-03-23 00:00:00.0 Europe/Paris (+01:00)
}
```
</v-click>

---
layout: section
---

## 🍬🍬🍬

<p class="mb-24">&nbsp;</p>

```php
$firstDayOfNextMonth = new \DateTime('first day of next month midnight'); // "2023-04-01 00:00:00.000000"
$tomorrowAtNoon = new \DateTime('tomorrow noon'); // "2023-03-24 12:00:00.000000"
$lastDayOfTheLastWeek = new \DateTime('last day of last week midnight'); // "2023-03-31 00:00:00.000000"
```

---
layout: section
---

> All fields are initialised with the current date/time. In most cases you would want to reset these to "zero" (the Unix epoch, 1970-01-01 00:00:00 UTC). You do that by including the ! character as first character in your format, or | as your last. Please see the documentation for each character below for more information.

---
layout: section
---

# Merci 👋

<a href="https://www.php.net/manual/en/datetimeimmutable.createfromformat.php">www.php.net/manual/en/datetimeimmutable.createfromformat.php</a>
<br>
<a href="https://jolicode.com/blog/">jolicode.com/blog</a>
<br>
<a href="https://blog.welcomattic.com/">blog.welcomattic.com</a>
