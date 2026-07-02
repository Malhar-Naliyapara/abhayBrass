# Product Photos — Upload Guide

Drop product photos into the matching folder using the **exact filename** listed below
(all lowercase, `.jpg`). The website picks images in this order:

1. **Product photo** — `upload/<folder>/<filename>.jpg` (shown if it exists)
2. **Category photo** — `upload/<folder>/_category.jpg` (fallback used for every product
   in that category that has no own photo)
3. **Icon** — shown only if neither photo exists yet

So at minimum, add one `_category.jpg` per folder and every product will have an image.
Add individual photos later to override the category fallback.

> `.jpg` is expected. If you only have `.png`/`.webp`, tell me and I'll switch the extension.

---

## Tower Bolts → `upload/tower-bolts/`

Category fallback: **`_category.jpg`**

### Brass — One Piece
| Product | Filename |
|---|---|
| 3/8″ Round Tower Bolt (Light) | `brass-round-tb-3-8-light.jpg` |
| 3/8″ Round Tower Bolt (Heavy) | `brass-round-tb-3-8-heavy.jpg` |
| ½″ Round Tower Bolt | `brass-round-tb-half.jpg` |
| ½″ Hex Tower Bolt | `brass-hex-tb-half.jpg` |
| ½″ V-Hex Tower Bolt | `brass-vhex-tb-half.jpg` |

### Brass — Two Piece
| Product | Filename |
|---|---|
| Matka Tower Bolt (SRD) | `brass-matka-tb-srd.jpg` |
| Full Brass Matka Tower Bolt | `brass-full-matka-tb.jpg` |
| Marble Tower Bolt (Regular) | `brass-marble-tb-regular.jpg` |
| Marble Tower Bolt (Heavy) | `brass-marble-tb-heavy.jpg` |
| 10mm Xylo Tower Bolt | `brass-xylo-tb-10mm.jpg` |
| 12mm Xylo Tower Bolt | `brass-xylo-tb-12mm.jpg` |
| 10mm Hex Tower Bolt | `brass-hex-tb-10mm.jpg` |
| 10mm V-Hex Tower Bolt | `brass-vhex-tb-10mm.jpg` |
| 12mm Hex Tower Bolt | `brass-hex-tb-12mm.jpg` |
| 12mm V-Hex Tower Bolt | `brass-vhex-tb-12mm.jpg` |

### Aluminium
| Product | Filename |
|---|---|
| 16mm Round Tower Bolt | `alu-round-tb-16mm.jpg` |
| 12mm Round Tower Bolt | `alu-round-tb-12mm.jpg` |
| 12mm V-Hex Tower Bolt | `alu-vhex-tb-12mm.jpg` |
| 12mm Apple Tower Bolt | `alu-apple-tb-12mm.jpg` |
| 12mm Double Line Veli Tower Bolt | `alu-double-line-veli-tb-12mm.jpg` |
| 10mm Round Tower Bolt | `alu-round-tb-10mm.jpg` |
| Xylo Tower Bolt | `alu-xylo-tb.jpg` |
| Pyramid Tower Bolt | `alu-pyramid-tb.jpg` |
| Super Marble / Duck Marble | `alu-super-marble-duck-marble.jpg` |
| Pollo Marble | `alu-pollo-marble.jpg` |
| Royal Tower Bolt | `alu-royal-tb.jpg` |
| Flower Tower Bolt | `alu-flower-tb.jpg` |
| Sylo Tower Bolt | `alu-sylo-tb.jpg` |
| Half Round Tower Bolt | `alu-half-round-tb.jpg` |
| Owel Tower Bolt | `alu-owel-tb.jpg` |
| Square Tower Bolt | `alu-square-tb.jpg` |
| Jumbo Baby Latch | `alu-jumbo-baby-latch.jpg` |
| 12mm Round Baby Latch | `alu-round-baby-latch-12mm.jpg` |
| 12mm Square Baby Latch | `alu-square-baby-latch-12mm.jpg` |
| Xylo Baby Latch | `alu-xylo-baby-latch.jpg` |
| 12mm Round Tower Bolt (One Pcs) | `alu-round-tb-12mm-one-pcs.jpg` |
| 12mm Veli Tower Bolt (One Pcs) | `alu-veli-tb-12mm-one-pcs.jpg` |
| 12mm V-Hex Tower Bolt (One Pcs) | `alu-vhex-tb-12mm-one-pcs.jpg` |

---

## Hinges → `upload/hinges/`

Category fallback: **`_category.jpg`**

### Steel
| Product | Filename |
|---|---|
| L Hinges | `steel-l-hinges.jpg` |
| Butt Hinges | `steel-butt-hinges.jpg` |
| Butterfly Hinges | `steel-butterfly-hinges.jpg` |
| Parliament Hinges | `steel-parliament-hinges.jpg` |

### Brass
| Product | Filename |
|---|---|
| Railway Hinges | `brass-railway-hinges.jpg` |
| Butt Hinges | `brass-butt-hinges.jpg` |
| L Hinges | `brass-l-hinges.jpg` |
| W Hinges | `brass-w-hinges.jpg` |
| Parliament Hinges | `brass-parliament-hinges.jpg` |
| Duck Hinges | `brass-duck-hinges.jpg` |

---

## Company Logos → `upload/logos/`

Used on the **About** page and homepage "Our group" section. `.png` with a
**transparent background** works best (falls back to a monogram until added).

| Company | Filename |
|---|---|
| Abhay Brass (flagship) | `abhay-brass.png` |
| Owned unit (name TBC) | `company-two.png` |
| Partner (name TBC) | `company-three.png` |

> When you send the real company **names + descriptions**, search the HTML for
> `TODO` / `name TBC` — those are the exact spots to update.
