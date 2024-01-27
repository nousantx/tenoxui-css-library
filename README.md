# TenoxUI Library

## About

Explore various classes, styles, and components built with TenoxUI (css framework).

## Classes

TenoxUI is used to built classes, styles, and component. Quick learn about TenoxUI css framework :

### Adding class through element

The style will applied into element immediately. So, you don't need to add new css file, the style will applied through element.

input => `mt-35px` : Set `margin-top` property.

output => `margin-top: 35px;`

### Manipulating styles

If you have element that have same `property`, TenoxUI will override of first class and use the last class instead.

Try this out :

HTML :

```html
<h1 class="tc-red">Hello Dev!</h1>
<h1 class="tc-red tc-blue">Hello Dev!</h1>

```
The first heading will have `color: red`. For the second tag, the `tc-red` will ignored and use the `color: blue` instead.

### Adding custom type and property

In TenoxUI css framework, there's variable called `type` and `propertiy`. `type` is what class that will used to trigger the styling. `property` is what css property that will trigered after we call its `type` that we already define, `property` must be an array.

Parameter :
```js
Types = {
  type: property
}
```

Usage :
```js
props = {
  "my-props": ["property1", "property2"],
}
```
After define it, you can use it directly to you elements :

```html
<tag class="my-props-{n}"></tag>
```

#### Knowing what you do

Let's say we've defined type and property

```json
{
  "py": ["paddingTop", "paddingBottom"],
  "px": ["paddingRight", "paddingLeft"]
}
```

After define your custom types, you can use it directly in your project

```html
<div class="px-2rem py-4rem"></div>
```

the code will give style; 2rem of padding top and bottom, 4rem for padding left and right.

#### `addType` and `defineProps`

Now, how can i add my custom type and property? Dont worry, you can use `addType` and `defineProps`

- `addType`

This function allow you to add your custom type with single line of code

Parameter :
```js
addType(type, [property])
```

`type`: class will trigger the style. It always string.

`property`: this is what css property that will added to the element. It must be an array.

Simple Usage :

```js
addType("my-prop", ["padding"])
```

After define it, you can use `my-prop` to set the padding of an element

```html
<div class="my-prop-18px"></div>
```

It will give 18px of padding to the element.


Note: `addType` function will add only one new type.

- `defineProps`

Similiar to `addType`, it'll allow you to add new type and property. But, you can add more than one type and property.

Parameter :

```js
arr = {
  type: [property]
}

defineProps({array})
```

Simple Usage :
```js
let myProps = {
  "py": ["paddingTop", "paddingBottom"],
  // Specify the property
  "br": ["", "", ""]
}
```

### Give multiple style in one class

You can stack classes and use it as style for your element in the future. And you can achive it using :

#### `makeStyle` function

This function will stack style only for one element

Parameter :
```js
makeStyle(selector, classes)
```

- `selector` : Add selector you want to give the style.
- `classes` : Stacked TenoxUI Framework classes you want to add to the style.

Simple Usage :

```js

makeStyle(".my-button", "p-10px br-5px bg-[primary]");

```
This code will make style for `every` HTML element that have `my-button` className.

#### `makeStyles` function

It's basically same as `makeStyle` func, just with additional `s` in the end of its name 😅. 

`makeStyles` is a function you need to give style for different elements and selectors needed

Parameter :
```js
let param = {
  selector1: classes1,
  selector2: classes2
}

makeStyles(param)
```
`makeStyles` only need one parameter, and its an object.

Usage : 

```js
makeStyles({

  // from className
  ".my-btn": "p-10px br-8px fs-1rem",

  // Add multiple selector like css
  ".fx-ctr, .flex-center": "display-flex jc-center ai-center",

  // From id
  "#my-sec": "w-100% h-mn-100vh",

})

```
You can add selector you want except `pseudo` selector.

## Purpose

Built seamless, fast, and responsive ui design with various classes and style we provide. Also make it faster with framework we built ( TenoxUI Css Framework ) to generate small, fast, and more efficient styling for your web projects.

## Support me 😞

[![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/nousantx) [![PayPal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/nousantx) [![Ko-Fi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/nousantx)
