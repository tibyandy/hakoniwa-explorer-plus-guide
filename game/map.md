# World
> :warning: work in progress!

[Hakoniwa Explorer Plus](../about/what-is.md) world is divided into 9 [regions](places.md). The player journey starts at Firsttown, in the First region. Other regions are initially locked.

Every region has several [~~dungeons~~](dungeons.md) filled with [enemies](enemies.md), some which have [bosses](bosses.md) at the end. Most regions also have a [town](towns.md), where the player can receive [~~quests~~](quests.md), and [shops](shops.md) which sell and buy [equipments, items and loot](items.md).

<style>
.map { display: grid;
    grid:
    "l l l l l l l l l l l" 0.3fr
    "x x p p a a a q q y y" 1fr
    "x x b b b v c c c y y" 1fr
    "d d d t e e e m f f f" 1fr
    "z z g g g u h h h w w" 1fr
    "z z r r i i i s s w w" 1fr 
    "z z n n n n n n n w w" 0.45fr/
    1fr 6fr 4fr 1fr 4fr 3fr 4fr 1fr 4fr 6fr 1fr;
    max-height: 495px;
    text-align: center;
}
.map img {
    width: 100%;
    aspect-ratio: 980/495;
    object-fit: contain; 
}
.map_wrap { position: relative }
.map_wrap .map {
    width: 100%;
    aspect-ratio: 980/495;
    object-fit: contain; 
}
.map_wrap .map { position: absolute; top: 0; align-items: stretch; }
.map a {
    color: #fff;
    font-weight: bold;
    font-size: min(1.2em, 2.2vw);
    line-height: 1em;
    text-shadow: -1px -1px 1px #000, 1px 1px 1px #000, 1px -1px 1px #000, -1px 1px 1px #000, -2px 0 1px #000, 2px 0 1px #000, 0 2px 1px #000, 0 -2px 1px #000;
    text-decoration: none;
/*    background: #0004; */
    display: flex;
    align-items: center;
    justify-content: center;
}
.map a, .map a:hover { text-decoration: none; }
.map a:hover span { background: #c36;
    border-radius: 20px;
    box-shadow: -1vw 0 0.01vw 0.8vw #c36, 1vw 0 0.01vw 0.8vw #c36;
    opacity: 0.8
}
.map .n  { grid-area: a }
.map .nw { grid-area: b }
.map .ne { grid-area: c }
.map .w  { grid-area: d }
.map .c  { grid-area: e }
.map .e  { grid-area: f }
.map .sw { grid-area: g }
.map .se { grid-area: h }
.map .s  { grid-area: i }
</style>

<div class="map_wrap">
    <img src="world_map.png" style="max-width: 980px; image-rendering:-webkit-optimize-contrast; width: 100%">
    <div class="map">
    <a href="places.md#hiyass-mountain-region" class="n"><span>Hiyass Mountain</span></a>
    <a href="places.md#chillbrae-region" class="nw"><span>Chillbrae region</span></a>
    <a href="places.md#maggy-region" class="ne"><span>Maggy region</span></a>
    <a href="places.md#stiffchub-lake-region" class="w"><span>Stiffchub Lake</span></a>
    <a href="places.md#notternback-forest" class="c"><span>Notternback Forest</span></a>
    <a href="places.md#totory-dunes" class="e"><span>Totory Dunes</span></a>
    <a href="places.md#phucken-marsh-region" class="sw"><span>Phucken Marsh</span></a>
    <a href="places.md#first-region" class="se"><span>First region</span></a>
    <a href="places.md#profundum-region" class="s"><span>Profundum</span></a>
    </div>
</div>

## Regions
Main article: [Regions](places.md)

- [First region](places.md#first-region)
- [Profundum region](places.md#profundum-region)
- [Phucken Marsh region](places.md#phucken-marsh-region)
- [Totory Dunes region](places.md#totory-dunes)
- [Maggy region](places.md#maggy-region)
- [Notternback Forest](places.md#notternback-forest)
- [Stiffchub Lake](places.md#stiffchub-lake-region)
- [Chillbrae region](places.md#chillbrae-region)
- [Hiyass Mountain](places.md#hiyass-mountain-region)