# mdc-card

A Stencil version of an [MDC Card](https://github.com/material-components/material-components-web/tree/master/packages/mdc-card).


Check out an [example](./mdc-card.html)

## Releated

- [`mdc-card-action-buttons`](../mdc-card-action-buttons/)
- [`mdc-card-action-icons`](../mdc-card-action-icons/)
- [`mdc-card-actions`](../mdc-card-actions/)
- [`mdc-card-media`](../mdc-card-media/)
- [`mdc-card-primary-content`](../mdc-card-primary-content/)

<!-- Auto Generated Below -->


## Usage

### Combined

```
<mdc-card>
  <mdc-card-primary-content>
    <mdc-card-media
      size="square"
      image-url="https://avatars3.githubusercontent.com/u/59491353?s=200&v=4">
      <mdc-card-media-content>
        <h1>Title</h1>
      </mdc-card-media-content>
    </mdc-card-media>
  </mdc-card-primary-content>
  <mdc-card-actions>
    <mdc-card-action-buttons>
      <mdc-button class="mdc-card__action mdc-card__action--button">test</mdc-button>
      <mdc-button class="mdc-card__action mdc-card__action--button">test</mdc-button>
      <mdc-button class="mdc-card__action mdc-card__action--button">test</mdc-button>
    </mdc-card-action-buttons>
  </mdc-card-actions>
</mdc-card>
```



## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `outlined` | `outlined` |             | `boolean` | `undefined` |


## Slots

| Slot | Description   |
| ---- | ------------- |
|      | Card contents |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
