When your contents need extra structure that cannot be supported by single layout grid, you can nest layout grid within each other. To nest layout grid, add a new `<mdc-layout-grid-row>` to wrap around nested `<mdc-layout-grid-cell>` within an existing `<mdc-layout-grid-cell>`.

The nested layout grid behaves exactly like when they are not nested, e.g, they have 12 columns on desktop, 8 columns on tablet and 4 columns on phone. They also use the **same gutter size** as their parents, but margins are not re-introduced since they are living within another cell.

However, the Material Design guidelines do not recommend having a deeply nested grid as it might mean an over complicated UX.

```
<mdc-layout-grid>
  <mdc-layout-grid-row>
    <mdc-layout-grid-cell>
      <mdc-layout-grid-row>
        <mdc-layout-grid-cell><span>Second level</span></mdc-layout-grid-cell>
        <mdc-layout-grid-cell><span>Second level</span></mdc-layout-grid-cell>
      </mdc-layout-grid-row>
    </mdc-layout-grid-cell>
    <mdc-layout-grid-cell>First level</mdc-layout-grid-cell>
    <mdc-layout-grid-cell>First level</mdc-layout-grid-cell>
  </mdc-layout-grid-row>
</mdc-layout-grid>
```