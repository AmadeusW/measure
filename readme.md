Measure this room
==
*a web browser extension for real estate websites*

When looking to rent or purchase a property, it is important to find one where you can live comfortably, whether you are a tall person or don't like confined spaces.

Often, real estate photos are taken with wide angle lenses that distort the size of the rooms. Upon visitng such place, you may find that the ceilings are too low for your liking, ultimately wasting your time. Is there a way to tell height of a room before making a trip to see it?

I think so, and that's why I built this extension. First, find a photo that has an electrical socket on a wall. Right click on it and select "measure this room". The extension will use the relative size of the wall feature with respect to the entirety of the wall to estimate the height of the room. 

![extension icon](src/icon128.png)

To use it, click on the top and bottom edges of the wall feature. Then click on edges where the wall meets the ceiling and the floor. After these four clicks, the extensions will estimate the size of the room. Click on the photo again to start over.

One of the sources of error is inaccuracy of selecting the measurement points. The extension accounts for you being off by a pixel and shows a margin of error. Another source of error is distortion by the lens, but I think that it's not as significant on the vertical axis. Contributions are welcome!

