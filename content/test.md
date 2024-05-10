# markdown pwoered by react components

```js
function convert_images_and_links_to_HTML(string) {
  let url_unique = []
  let images_unique = []

  const urls = string.match(/https*:\/\/[^\s<),]+[^\s<),.]/gim) ?? []
  const imgs = string.match(/[^"'>\s]+\.(jpg|jpeg|gif|png|webp)/gim) ?? []

  for (const url of urls) {
    if (!url_unique.includes(url)) {
      url_unique.push(url)
    }
  }
}
```

<DivisonGroupsDemo />
