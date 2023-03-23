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
$dateTime = \DateTime::createFromFormat('Y-m-d', '2023-03-23');
dump($dateTime);

^ DateTime @1679576390 {#3
    date: 2023-03-23 13:57:29.0 Europe/Paris (+01:00)
}
```

---
layout: section
---

# Comment reset le temps d'un objet DateTime ?

---
layout: section
---

Avec la méthode `setTime`

```php
$dateTime = \DateTime::createFromFormat('Y-m-d', '2023-03-23');
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
$dateTime = \DateTime::createFromFormat('!Y-m-d', '2023-03-23');
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

Avec un `|`

```php
$dateTime = \DateTime::createFromFormat('Y-m-d|', '2023-03-23');
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

# Merci 👋
