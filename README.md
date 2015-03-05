Special Thanks
------------------
A special thanks and shoutout to <a href="http://github.com/stefanerickson">Stefan Erickson</a> for creating the original <a href="http://github.com/stefanerickson/covervid">CoverVid</a>.

CoverVid
========
At the core of CoverVid, is the idea of this little CSS snippet being possible...
```css
.selector {
    background-video: url('../foo/bar.mp4 || ../foo/bar.webm');
    background-size: cover;
    background-position: center center;
}
```
Why is it special?
------------------
NgCoverVid is very lightweight, with only 1279 bytes of Javascript. Its logic is parent based, meaning the parent element can be any size (Not necessarily just a full-screen background).

How do I use it?
----------------
1. First pull the project down from <a href="http://github.com/jfeigel/ngCovervid">GitHub</a> or install it through <a href="http://www.bower.io">Bower</a> and link <code>ngCovervid.min.js</code> into your site.
    ```
    bower install ng-covervid
    ```

2. It is important to note that the video you target will use its parent element to scale. With that in mind, we will create some simple markup and add some base styling to size the videos' parent/wrapper element. The directive must be declared as either an attribute of a video element or as an element itself.
    
    ATTRIBUTE
    ```html
    <div class="covervid-wrapper">
        <video covervid class="covervid-video" autoplay loop
            poster="img/video-fallback.png">
            <source src="videos/clouds.webm" type="video/webm">
            <source src="videos/clouds.mp4" type="video/mp4">
        </video>
    </div>
    ```
    ELEMENT
    ```html
    <div class="covervid-wrapper">
        <covervid class="covervid-video" autoplay loop poster="img/video-fallback.png">
            <source src="videos/clouds.webm" type="video/webm">
            <source src="videos/clouds.mp4" type="video/mp4">
        </covervid>
    </div>
    ```
    STYLES
    ```css
    .covervid-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    ```

3. You have the option to include the native height and width of the video as attributes of the element or let the directive determine them for you. Note that including these values as attributes will ensure there is no lag in the initial sizing of the video as the directive needs to wait for the video's metadata to load before it can resize the video.
    ```html
    <covervid class="covervid-video" autoplay loop poster="img/video-fallback.png"
        height="720" width="1280">
    ```
