<template>
<transition name="component-fade" mce="in-out" appear>
    <div class="wrapper">
        <div class="card">
        <input type="checkbox" id="card3" class="more">
        <div class="content">
            <div class="front">
                <div class="inner">
                    <h2>Get Schwifty Team</h2>
                    <label for="card3" class="button" aria-hidden="true">
                        Details
                    </label>
                </div>
            </div>
            <div class="back">
                <div class="inner">
                    <div class="p1">
                        Raeanne Ramharrack <br/>
                        Lorum epsum dolor sit amet
                    </div>
                    <div class="p2">
                        Marc Mungal<br/>
                        Lorum epsum dolor sit amet
                    </div>
                    <div class="p3">
                        Match Hue Paul <br/>
                        Lorum epsum dolor sit amet
                    </div>
                    <div class="p4">
                        Rajiv Sadho<br/>
                        Lorum epsum dolor sit amet
                    </div>
                    <label for="card3" class="button" aria-hidden="true">
                        Back
                    </label>
                </div>
            </div>
        </div>
    </div>
    </div>
</transition>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.card {
  width: 900px;
  height: 450px;
  margin: 1em;
  perspective: 1500px;
}
.card .content {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);
}
.more {
  display: none;
}
.more:checked ~ .content {
  transform: rotateY(180deg);
}
.front, .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  border-radius: 2px;
}
.front .inner, .back .inner {
  height: 100%;
  display: grid;
  padding: 1.5em;
  transform: translateZ(80px) scale(0.94);
}
.front {
  background-image: url("../assets/rick.png");
  background-position: center center;
  background-size: cover;
}
.front:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 6px;
  backface-visibility: hidden;
}
.front .inner {
  grid-template-rows: 5fr 1fr 1fr 2fr 1fr;
  justify-items: center;
}
.front h2 {
  /* grid-row: 2; */
  /* margin-bottom: 0.3em; */
  /* text-transform: uppercase; */
  /* letter-spacing: 3px; */
  color: #fff;
  /* font-weight: 500; */
  text-shadow: 0 0 6px red;
}
.back {
  background-image: url("https://www.kidspartyworks.com/images/comic-book-background.jpg");
  background-position: center center;
  background-size: cover;
  transform: rotateY(180deg);
  border: 6px solid black;
}
.back .inner {
  grid-template-rows: 12fr 8fr 2fr 2fr 10fr;
  grid-template-columns: repeat(1, auto);
  /* grid-column-gap: 2.0em; */
  justify-items: center;
  font-size: 20px;
}
.back .button {
  /* grid-column: 2/-1; */
  justify-self: center;
}
.button {
  grid-row: 6;
  text-transform: uppercase;
  display: block;
  padding: 0 1.5em;
  height: 3em;
  line-height: 2.9em;
  min-width: 3em;
  background-color: transparent;
  border: solid 2px #fff;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  left: 50%;
  backface-visibility: hidden;
  transition: 0.3s ease-in-out;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}
.button:hover {
  background-color: #fff;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  text-shadow: none;
  color: red;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #f66;
}
::-webkit-scrollbar-thumb:hover {
  background: red;
}

.p1 {
    grid-row: 1;
    grid-column: 1/3;
    justify-self: left;
}

.p2 {
    grid-row: 1;
    grid-column: 3/-1;
    justify-self: right;
}

.p3 {
    grid-row: 4;
    grid-column: 1/3;
    justify-self: left;
}
.p4 {
    grid-row: 3;
    grid-column: 3/-1;
    justify-self: right;
    /* margin-top: 60px; */
}
</style>
