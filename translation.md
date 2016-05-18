# Translation
This file serves as a guide for future translation of this resume into Spanish and Japanese languages.

---

## In `index.html`

Add the following snippet to `[role="banner"]`:
``` html
<nav>
  <ul id="nav-list">
    <li id="nav-en" class="active">
      <a href="#">
        <span>En</span>
      </a>
    </li>
    <li id="nav-es">
    <a href="#">
        <span>Es</span>
    </a>
    </li>
    <li id="nav-jp">
      <a href="#">
        <span>日</span>
      </a>
    </li>
  </ul>
</nav>
```

Add SVG template:
``` html
<!-- TAB TEMPLATE -->
<svg height="0" width="0" style="position: absolute; margin-left: -100%;">
    <path id="tab-shape" class="tab-shape" d="M116.486,29.036c-23.582-8-14.821-29-42.018-29h-62.4C5.441,0.036,0,5.376,0,12.003v28.033h122v-11H116.486z">
</svg>
```

Add files translations:
``` html
<script src="scripts/es.js" defer></script>
<script src="scripts/jp.js" defer></script>
```

---

## In `header.scss`
Add the following snippet:
``` sass
#nav-list {
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    font-size: 0.8em;
    width:10%;
    left: 0em;
    text-align: center;
    text-transform: uppercase;
    opacity: 0.5;
    &>li {
        display: inline-block;
        background: #c7c7c7;
        color: #333;
        min-height: 48px;
        margin: 0.5em 0 0 0;
        padding-top: 20%;
        width: 70%;
        &:before{
            content: none;
        }
        &.active {
            width: 100%;
            background-color: #333;
            &>a {
                color: #c7c7c7;
            }
        }
        &>a {
            color: #797979;
        }
    }
}
```

---

## In `resumeBuilder.js`

Add the following in main function:
``` javascript
$('#nav-list').children('li').on('click', function toggleActive() {
    $(this).siblings('.active').toggleClass('active');
    $(this).toggleClass('active');
});
```