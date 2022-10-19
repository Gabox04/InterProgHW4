(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"hw3_atlas_1", frames: [[1984,602,20,70],[1448,746,363,70],[1032,1120,348,70],[1032,904,671,70],[1705,890,241,70],[1032,1048,360,70],[1448,602,534,70],[1448,818,363,70],[1382,1120,348,70],[1032,976,671,70],[1705,962,241,70],[1394,1048,360,70],[1448,674,534,70],[1448,0,600,600],[0,904,1030,530],[0,0,1446,902]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_13 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom1pngcopy = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcom2 = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.pngwingcompngcopy = function() {
	this.initialize(ss["hw3_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pngwingcom2();
	this.instance.setTransform(-77,-40.05,0.1495,0.1511);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-40,154,80.1);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.pngwingcom1pngcopy();
	this.instance.setTransform(-96.05,-103,0.3201,0.3433);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-103,192.1,206);


(lib.an_TextInput = function(options) {
	this.initialize();
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.myshape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AhEGFIgFgBQgFgCgCgHQAAgFACgHQADgGALgPQALgPABgJQADgGgBgIIgBgQQgBgTAGgRQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIABABIACAAQAEACADAEQACAEABAMIAAAlQABATgEAJQgCAGgHAHQgNARgFAQIgDAAIgBAAIgEABgAABFVIADgHIAFgGQABgDAAgEIgBgWQAAgHABgEQADgGAFgCIAAAAIACAAQAGAAADAIQABADAAAJIAAAeQAAAJgBADIAAABIgDADIgIAEIgDABIgCAAIgIABQgFgGABgFgAjnAGQgGgCgCgDQgDgEAHgEQAEgEAFgBIFPACIAjADIAIADQAGABADADQADAEgBAEIgBAAQgCADgDAAIgCABgAhhh1QgHgCgDgCQgFgGAGgQIAIgeQAEgSAGgKIALgRIANgQIAYgnQAOgXAPgKQAGgEAGAAIACAAIADACQADAAABADQADAGgGAFIgCADIgCACIgFAFIgBAAQgJAFgHANIgLAXIAAACIgNAUIgVAbQgUAeAEAaIAAAAIBygPIABAAIAEAAIABAAIAJAAIACAAQAEACACAEQADADgBAEQgCAHgMACIgIACIiAANgADrk5QgFgCgNgKIgJgFIgJgIIgEgMIAAgIIh1gBIgFgCQgDgDABgEQAAgEAEgDQADgCAGgBIAHgBIEbADIAFABIAEACQAGADgBAFIgDAFIAAAAIgBABIAAAAIgFABIggAAIgBAAIAAAFIAAADIgJAMIgGAGIgEADIgVAOIgCABIgDAAIgCABIg6ABIgGgBgADallQABAHANAIQAHAGAHABIAHABIAJAAIAAgBQgDgDgBgHQgBgIABgCIAAgDIgpAAIABABgAEYliIACALQAAAFgBADIALAAIARgKQAEgEAEgFIAEgEIgrAAIACAEgAj3k/IgLgDIgTgLQgMgIgCgEQgCgEAAgJIAAgIIAAAAIhVgEIgBAAIgFAAQgDgCAAgFQAAgEAEgCQADgCAFgBIAHgBIABAAIBQACIABAAIAEgCIADgBIACABIAEACQB5ACByAKIAKACIAGACQADADABAEQABAEgEADQgBABgFABIgFAAIh3gFIgEAGIgQATIgKAIIgeAJgAkOlsQgCAFADACQAAABAAAAQAAAAAAAAQABABAAAAQABAAABABIAOAJIALAEIAIABIgBgBIAAgJIABgHQACgEAEgBIgrgDgAjQliQADAEAAADQACACgDAEIADgBQAFgCAHgEIAHgGIAFgGIgngCQAFADAFAFg");
	this.shape.setTransform(77.3391,100.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(77.603,85.8771);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhzLzQg1gFgqgQQhSgehUhbQhThZg4hnQg5hrgYhxQgJgzgDg0Qg1gEhDgYQgngNgGgWQgEgQAQgZQASgaARgXQAMgQAMgFQAIgEAVAAIA9ACQAIAAAFAEIACAAQAMg/AYg8QAKgbANgZQgmiwgWisQgCgVAIgHQAIgIAPAHQALAFAKALIBiBwQAgAlAZgGQAKgDAJgKQAFgGAHgNQA7hnAthqQAJgXAOgDQALgDALAKQAKAKADANQACAIAAARQACAQAFAJQARgqAngdQAUgPAYgIQAUgGAWgCQAfgDAXALIAHAFQAWAOARAmQAVAsAIAxQBEgqBRgTQBRgSBRAIQATADAGAHQAIAJgFAUQgMAzgQAtQBkhSB0g/QAWgLAMAFQAMAGAAARQgBAOgIAPQhAB5hVBqQBzgVB0AHQAUACAHAHQAHAIgCASQgEAigUAcQgUAdgeARQAKgBAHAJQAHALgDAKQgFAPgXARIiDBbQAUA2AKA3QAygkA/gJQAmgGAUAOQAZAQACAlQABALgCATIgCAgIAAApQAAAXgIAQQgOAZgkAJQgVAFgqAAIhKgBQgFAxgFAeQgJAugPAlQgMAfgZAsQg7Btg3BAQhLBXhXAnQg0AXhEAKQgyAHhKACIgfAAQgnAAgegDgApBCwQAVB9BABxQAJAQALARIBMBpIABADIACABIBBBJIAUASQAMAMAOAJIBOAtIADABIACAAIAKAEIBSAPIABAAQAnADA5gCIBngJIAFgBQA8gKAugRQBignBPhcQBDhOAyhuQAVgwAMgnQASg3AHg4IgIAAQgFAAgBgCQgDgDABgEQABgEAEgDIAJgCIADgBIABAAQAKh1glh3IgMgpQgGgDABgFIAAgEQg7iah+hpQg8gyg5gVIgIgDIiagWQhuAFg3gBIgBAAIgFAAQgGgCgDgCQgGgIAKgGQAHgFAIgCIAvAAIgZgSQgKgHgGgCIgEgBIgLAAIhHALIgKACIgCABIgCAAIgIABIgBAAIgDgBIgKAEQgPAGgPAJIivCHIgCADIgEADIgCAEIgJAJIgjAyQgRAZgOAbIAFAXQABAKgEALIgDAEIgBABIAAABIgBAAIgDABIAAAAIgEgBIgEgSIAAABIgBgBQgYA2gOA8QgVBYACBYIABAAIAJAAIAKAAIAGABIABABIACACIACADQABAFgBACIgDADIgBAAIgCABIgFAAIgSACIgBAAQACAmAHAngAKcggQgqAOgkASIgLAFQADAXAAAXQADAogHBFIBPgDQAfgBARgFQAbgIALgSQAFgIACgNIABgZIAAg8QACgegLgOQgMgPgXAAQgRAAgWAIgAphg6Ig+ACQgLAAgIADQgMAEgOAVIgZAkQgIAMABAIQACAKATAHQAtAQAdAHIAsAJIgBgSQAAg9AKg6IgJACg");
	this.shape_2.setTransform(77.455,75.7894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.9,151.6);


// stage content:
(lib.hw3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Static_Names
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(29.25,717.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(18,522.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(18.45,389.8,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(18.45,13.8,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(18.45,270.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(18.45,120.85,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_12();
	this.instance_6.setTransform(29.25,717.7,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_11();
	this.instance_7.setTransform(18,522.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_10();
	this.instance_8.setTransform(18.45,389.8,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_9();
	this.instance_9.setTransform(18.45,13.8,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_8();
	this.instance_10.setTransform(18.45,270.5,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_7();
	this.instance_11.setTransform(18.45,120.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},91).wait(1));

	// Input_TB
	this.instance_12 = new lib.an_TextInput({'id': 'instance_12', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.instance_12.setTransform(121.25,83.85,1.84,2.3636,0,0,0,50,11.1);

	this.instance_13 = new lib.CachedBmp_13();
	this.instance_13.setTransform(86.75,57.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12}]}).to({state:[]},91).wait(1));

	// MyShape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("AgrDxIgDAAQgDgCgBgEQAAgDABgEIAJgOQAHgJABgFQABgEAAgFIgBgKQAAgMADgKIADgBIAAAAIACAAQACABACADQABACABAIIAAAXQABALgDAGQgBAEgFAEQgIALgDAJIgCABIAAAAIgDAAgAAADTIACgEIADgEQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIgBgOIABgHQACgDADgBIAAAAIABAAQAEAAACAEIABAIIAAATIgBAHIAAABIgCACIgFACIgCABIgBAAIgFAAQgDgEAAgDgAiRAEQgEgBgBgCQgCgCAFgDQACgCAEgBIDRABIAWACIAFACQAEABACABQAAABABAAQAAABAAABQAAAAAAABQAAAAAAABIgBAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAgAg9hIQgEgBgCgCQgDgDAEgKIAFgTQACgLAEgGIAHgLIAIgKIAPgYQAJgOAJgGQAEgDADAAIACAAIACABIACACQACAEgEADIgCADIgDADIgBAAQgFAEgFAIIgHAOIAAABIgIAMIgNARQgMATACAQIAAAAIBHgJIABAAIACAAIABAAIAGAAIABAAQACABACACQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQgCAEgHABIgFABIhQAIgACTjCQgDgBgIgGIgGgDIgFgFIgDgIIAAgFIhJAAIgDgBQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAABgBIAFgCIAFAAICxABIADABIADABQAEACgBADQAAABAAAAQgBABAAAAQAAABAAAAQgBAAAAABIgBAAIgDABIgUAAIAAAAIAAADIAAACIgGAHIgGAGIgCABIgLAHIgCABIgDAAIgkABIgEgBgACIjdQABAFAIAEQAFAEAEABIAEAAIAGAAIAAAAQgCgCgBgFIAAgGIABgCIgaAAIAAABgACvjbIACAHIgBAFIAHAAIAEgCIAGgFIAGgFIACgCIgbAAIABACgAibjFIgHgCIgLgHIgJgHQgCgDAAgFIABgFIgBAAIg1gDIAAAAIgEAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBQAAAAAAAAQABgBAAAAIAFgCIAEAAIABAAIAyABIABAAIACgCIACAAIACAAIACACQBMABBHAGIAHABIADACQACABABADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgEACIgDAAIhLgEIgCAEIgKAMIgGAFIgTAFgAipjhQAAAAAAABQgBABABAAQAAABAAAAQAAABAAAAIACACIAJAGIAHACIAFABIgBgBIAAgGIABgEQABgCADgBIgbgCgAiCjbQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIACgBIAHgDIAFgEIADgEIgZgBQAEACADADg");
	this.shape.setTransform(75.46,228.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(75.6229,218.8821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhHHUQgigDgagKQgzgTg1g4Qg0g3gjhAQgkhCgPhGQgGgggCggQghgDgqgPQgYgIgEgNQgCgKAKgPIAWgfQAHgKAHgDQAFgCAOAAIAmABQAFAAADACIABABQAIgnAPgmQAGgQAIgQQgXhtgOhrQgCgNAFgEQAGgFAJAEQAHADAGAHIA9BGQAUAXAQgEQAHgCAFgGIAIgMQAlhAAchBQAGgPAIgCQAHgCAHAHQAGAGACAIIACAQQABAJADAGQAKgaAZgSQANgJAOgFQANgEAOgBQATgCAOAHIAFADQANAIALAYQANAbAFAfQArgaAzgMQAygLAzAFQAMABAEAFQAFAFgDANQgIAfgKAcQA/gzBJgmQANgHAIADQAIAEgBAKQAAAJgFAJQgoBLg2BCQBIgNBJAEQANABAEAFQAFAFgCALQgCAVgNARQgMASgTALQAGgBAFAGQAEAGgCAHQgDAJgPAKIhSA5QANAhAGAiQAggWAngGQAYgDAMAIQAQAKABAXIAAATIgCATIABAaQAAAOgGAKQgIAPgXAGQgNADgaAAIgvAAQgDAegDASQgGAdgJAXQgIATgPAcQglBDgjAoQgvA2g2AYQghAOgqAGQggAFguABIgUAAQgZAAgRgCgAlpBtQANBOAoBGIANAUIAvBBIABACIABABIApAtIAMALIARANIAxAcIACAAIABABIAGACIA0AJIAAAAQAYACAkgBIBAgGIAEAAQAlgGAdgLQA9gYAyg5QAqgwAfhFQAOgeAHgYQALgiAFgiIgFAAIgEgCQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAFgCIACAAIABAAQAGhJgXhJIgIgZQgDgCAAgEIAAgCQglhfhPhBQglgfgkgOIgFgBIhggOQhFADgjAAIAAAAIgDgBIgGgCQgEgFAHgEQAEgDAFgBIAeAAIgQgLQgGgFgEgBIgDAAIgHAAIgsAGIgHACIgBAAIgBAAIgFABIgBAAIgBgBIgHADIgSAJIhuBUIgCACIgCACIgBACIgGAGIgWAeQgKAQgJARIADAOQABAGgDAHIgDADIAAABIgCAAIAAAAIgDAAIgCgLIAAAAIgBAAQgPAhgJAlQgNA3ACA2IAAAAIAGAAIAGAAIAEABIABAAIAAAAIACADQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgCACIgBAAIgBAAIgDAAIgLABIgBAAQACAYAEAYgAGjgUQgaAJgXALIgHADIACAdQACAYgEArIAxgCQATAAALgDQARgFAHgLQADgGABgIIABgPIAAglQABgTgHgIQgHgJgPAAQgKAAgOAEgAl9gkIgnACQgHAAgFABQgIADgIANIgQAWQgFAHABAFQABAGAMAFQAcAKASAEIAcAGIgBgMQAAglAHgkIgGABg");
	this.shape_2.setTransform(75.5333,212.6421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},91).wait(1));

	// Other_Graphic
	this.instance_14 = new lib.pngwingcompngcopy();
	this.instance_14.setTransform(18,306,0.0858,0.0977);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(92));

	// FbF_Ani
	this.instance_15 = new lib.pngwingcompngcopy();
	this.instance_15.setTransform(15,429,0.0858,0.0977);

	this.instance_16 = new lib.Tween2("synched",0);
	this.instance_16.setTransform(138.05,468);
	this.instance_16._off = true;

	this.instance_17 = new lib.Tween3("synched",0);
	this.instance_17.setTransform(1180,465);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{x:15,y:429}}]}).to({state:[{t:this.instance_16}]},4).to({state:[{t:this.instance_16}]},37).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},4).to({state:[{t:this.instance_16}]},38).to({state:[{t:this.instance_15,p:{x:18,y:431}}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4).to({_off:false},0).to({x:1187.95},37).to({_off:true,x:1180,y:465},1).wait(3).to({_off:false,skewY:180,x:1110.9,y:467.5},0).to({x:1021.85,y:466.05},4).to({x:175.95,y:473.5},38).to({_off:true},4).wait(1));

	// ST
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3300FF").ss(66,1,1).p("AqnlJIVPAAIAAKTI1PAAg");
	this.shape_3.setTransform(122.95,629);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AqnFKIAAqTIVPAAIAAKTg");
	this.shape_4.setTransform(122.95,629);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#3306F9").ss(66,1,1).p("AqrlDIMlgSIIqAGIAID9IgBGWImMAMIssAGIiTgEg");
	this.shape_5.setTransform(147.125,629.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010600").s().p("AqgFTIgLqWIMlgSIIqAGIAID9IgBGWImMAMIssAGg");
	this.shape_6.setTransform(147.125,629.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#330CF3").ss(66,1,1).p("Aquk8IMhglIIuAMIAOD6IgCGZImDAYIsxAMIiSgHg");
	this.shape_7.setTransform(171.3,630.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#020C00").s().p("AqZFbIgVqXIMhglIIuAMIAOD6IgCGZImDAYIsxAMg");
	this.shape_8.setTransform(171.3,630.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3311EE").ss(66,1,1).p("Aqyk1IMfg4IIwASIAWD3IgDGcIl6AkIs3ASIiRgLg");
	this.shape_9.setTransform(195.475,631.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#031100").s().p("AqSFjIggqYIMfg4IIwASIAWD3IgDGcIl6AkIs3ASg");
	this.shape_10.setTransform(195.475,631.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#3317E8").ss(66,1,1).p("Aq1kvIMbhLII0AZIAcD0IgDGfIlyAwIs8AZIiQgQIgqqZg");
	this.shape_11.setTransform(219.675,631.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#051700").s().p("AqLFrIgqqZIAAgBIMbhLII0AZIAcD0IgDGfIlyAwIs8AYg");
	this.shape_12.setTransform(219.675,631.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#331DE2").ss(66,1,1).p("Aq5koIMZhdII2AeIAkDxIgEGiIlqA9ItBAeIiPgTIg1qbg");
	this.shape_13.setTransform(243.825,632.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#061D00").s().p("AqEFzIg1qaIAAgBIMZheII2AfIAkDxIgEGiIlqA9ItBAdg");
	this.shape_14.setTransform(243.825,632.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3323DC").ss(66,1,1).p("Aq9khIMWhxII6AlIAqDuIgEGlIlhBIItHAlIiOgXIhAqdg");
	this.shape_15.setTransform(268,633.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#072300").s().p("Ap9F8IhAqdIAAgBIMWhvII5AkIArDuIgEGlIliBIItGAkg");
	this.shape_16.setTransform(268,633.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#3329D6").ss(66,1,1).p("ArAkbIMTiDII8ArIAyDrIgGGoIlZBVItKAqIiOgbIhKqeg");
	this.shape_17.setTransform(292.2,633.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#082900").s().p("Ap2GEIhKqeIAAgBIMTiDII8ArIAyDrIgFGoIlZBVItLAqg");
	this.shape_18.setTransform(292.2,633.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#332ED1").ss(66,1,1).p("ArEkUIMQiWII/AxIA6DoIgGGrIlRBhItRAwIiMgeIhVqgg");
	this.shape_19.setTransform(316.375,634.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#092E00").s().p("ApvGNIhVqgIAAgBIMQiWII/AxIA6DoIgGGrIlRBhItRAwg");
	this.shape_20.setTransform(316.375,634.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3334CB").ss(66,1,1).p("ArHkOIMNioIJCA3IBADlIgGGuIlJBtItVA2IiMgiIhfqig");
	this.shape_21.setTransform(340.525,635.375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0A3400").s().p("ApoGVIhfqiIAAgBIMNioIJCA3IBADlIgGGuIlJBtItVA2g");
	this.shape_22.setTransform(340.525,635.375);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#333AC5").ss(66,1,1).p("ArLkHIMLi7IJEA9IBIDiIgIGwIlAB6ItaA8IiLglIhqqlg");
	this.shape_23.setTransform(364.725,636.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0C3A00").s().p("AphGdIhqqkIAAAAIMLi7IJEA9IBIDiIgIGwIlAB6ItaA8g");
	this.shape_24.setTransform(364.725,636.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#3340BF").ss(66,1,1).p("ArOkBIMHjNIJIBDIBPDfIgJG0Ik3CFItgBCIiKgpIh0qlg");
	this.shape_25.setTransform(388.9,636.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0D4000").s().p("ApZGmIh1qlIAAgCIMHjNIJIBDIBPDgIgJGzIk3CFItgBCg");
	this.shape_26.setTransform(388.9,636.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#3346B9").ss(66,1,1).p("ArSj6IMFjgIJKBJIBWDdIgJG2IkvCRItlBIIiJgtIh/qng");
	this.shape_27.setTransform(413.05,637.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0E4600").s().p("ApSGuIiAqnIAAgBIMFjgIJKBJIBWDdIgJG2IkvCRItlBJg");
	this.shape_28.setTransform(413.05,637.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#334BB4").ss(66,1,1).p("ArVjzIMBj0IJOBQIBcDZIgKG6IkmCdItqBPIiIgyIiJqpg");
	this.shape_29.setTransform(437.25,638.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#0F4B00").s().p("ApMG2IiKqoIAAgBIMDj0IJMBQIBeDZIgLG6IkmCdItqBPg");
	this.shape_30.setTransform(437.25,638.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#3351AE").ss(66,1,1).p("ArZjtIL/kGIJQBWIBkDWIgLG9IkeCpItvBUIiHg0IiUqrg");
	this.shape_31.setTransform(461.425,638.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#105100").s().p("ApFG/IiUqrIAAgBIL/kFIJQBVIBkDWIgLG9IkeCqItvBUg");
	this.shape_32.setTransform(461.425,638.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#3357A8").ss(66,1,1).p("ArdjmIL8kZIJTBcIBsDTIgMHAIkWC1It0BbIiGg5Iifqsg");
	this.shape_33.setTransform(485.625,639.625);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#115700").s().p("Ao+HHIifqsIAAgBIL8kZIJTBcIBsDTIgMHAIkWC1It0Bbg");
	this.shape_34.setTransform(485.625,639.625);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#335DA2").ss(66,1,1).p("ArgjfIL5ksIJWBiIByDRIgMHCIkNDCIt6BgIiEg8Iiqqvg");
	this.shape_35.setTransform(509.775,640.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#135D00").s().p("Ao2HQIiqqvIAAAAIL5ksIJWBiIByDRIgMHCIkNDCIt6Bgg");
	this.shape_36.setTransform(509.775,640.325);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#33639C").ss(66,1,1).p("ArkjZIL2k+IJZBoIB6DOIgNHFIkFDOIt/BmIiDhAIi1qxg");
	this.shape_37.setTransform(533.975,641.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#146300").s().p("AovHYIi1qxIAAAAIL2k+IJZBoIB6DNIgNHGIkFDNIt/Bng");
	this.shape_38.setTransform(533.975,641.05);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#336897").ss(66,1,1).p("ArnjSILzlRIJcBuICBDLIgOHHIj9DbIuEBsIiChEIi/qxg");
	this.shape_39.setTransform(558.15,641.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#156800").s().p("AooHgIjAqxIAAgBIL0lRIJcBuICBDLIgPHIIj8DaIuEBsg");
	this.shape_40.setTransform(558.15,641.75);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#336E91").ss(66,1,1).p("ArrjMILxljIJeB0ICIDHIgOHMIj1DmIuJByIiBhIIjKqzg");
	this.shape_41.setTransform(582.325,642.45);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#166E00").s().p("AohHoIjKqzIAAgBILxljIJeB0ICIDIIgOHLIj1DmIuJByg");
	this.shape_42.setTransform(582.325,642.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#33748B").ss(66,1,1).p("ArujFILul2IJhB6ICODFIgPHOIjsDyIuOB4IiBhLIjTq2g");
	this.shape_43.setTransform(606.5,643.175);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#177400").s().p("AobHxIjTq2IAAAAILul2IJgB6ICQDFIgQHOIjsDyIuOB4g");
	this.shape_44.setTransform(606.5,643.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#337A85").ss(66,1,1).p("Aryi+ILsmJIJjCAICWDCIgQHRIjjD+IuUB+Ih/hPIjfq3g");
	this.shape_45.setTransform(630.675,643.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#187A00").s().p("AoTH5Ijfq3IAAAAILsmJIJjCAICWDCIgQHRIjjD+IuUB+g");
	this.shape_46.setTransform(630.675,643.875);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#338080").ss(66,1,1).p("Ar2i4ILpmbIJmCGICeC/IgRHUIjbEKIuZCEIh+hSIjqq6g");
	this.shape_47.setTransform(654.875,644.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1A8000").s().p("AoMICIjqq6IAAAAILpmcIJmCHICeC/IgRHUIjbEKIuZCEg");
	this.shape_48.setTransform(654.875,644.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#33857A").ss(66,1,1).p("Ar5ixILmmuIJpCMICkC8IgRHXIjTEWIueCLIh9hXIj0q7g");
	this.shape_49.setTransform(679.025,645.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1B8500").s().p("AoFIKIj0q7IAAAAILmmuIJpCMICkC7IgRHYIjTEWIueCKg");
	this.shape_50.setTransform(679.025,645.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#338B74").ss(66,1,1).p("Ar9iqILjnBIJsCSICsC4IgSHaIjLEjIujCQIh8haIj/q8g");
	this.shape_51.setTransform(703.2,646);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1C8B00").s().p("An+ISIj/q8IAAgBILknBIJrCTICsC4IgSHbIjLEiIuiCQg");
	this.shape_52.setTransform(703.2,646);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#33916E").ss(66,1,1).p("AsAikILgnUIJvCZICyC2IgTHcIjBEvIupCXIh7heIkJq/g");
	this.shape_53.setTransform(727.375,646.725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#1D9100").s().p("An3IbIkJq/IAAAAILgnUIJvCZICyC2IgTHcIjBEvIupCXg");
	this.shape_54.setTransform(727.375,646.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#339768").ss(66,1,1).p("AsEieILenmIJxCfIC6CzIgTHgIi6E6IutCdIh7hiIkUrAg");
	this.shape_55.setTransform(751.55,647.425);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E9700").s().p("AnwIjIkUrAIAAgBILenmIJxCfIC6CzIgTHgIi6E6IuuCdg");
	this.shape_56.setTransform(751.55,647.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#339C63").ss(66,1,1).p("AsIiXILbn5IJ0ClIDCCwIgVHjIixFHIuyCiIh6hmIkfrBg");
	this.shape_57.setTransform(775.725,648.125);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1F9C00").s().p("AnpIrIkfrBIAAgBILbn5IJ0ClIDCCwIgVHjIixFHIuyCig");
	this.shape_58.setTransform(775.725,648.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#33A25D").ss(66,1,1).p("AsLiRILYoLIJ3CrIDICsIgVHmIipFTIu3CpIh5hpIkprEg");
	this.shape_59.setTransform(799.925,648.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#20A200").s().p("AniI0IkprEIAAAAILYoMIJ3CrIDICtIgVHmIipFTIu3Cog");
	this.shape_60.setTransform(799.925,648.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#33A857").ss(66,1,1).p("AsPiJILVofIJ6CxIDQCqIgWHpIigFfIu9CuIh4htg");
	this.shape_61.setTransform(824.075,649.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#22A800").s().p("AnbI8Ik0rGILVoeIJ6CxIDQCqIgWHoIigFgIu9Cug");
	this.shape_62.setTransform(824.075,649.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#33AE51").ss(66,1,1).p("AsSiDILSoxIJ9C3IDWCnIgWHrIiYFsIvCC0Ih3hxIk+rHg");
	this.shape_63.setTransform(848.275,650.275);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#23AE00").s().p("AnUJEIk+rHIAAAAILSoxIJ9C3IDWCnIgWHrIiYFsIvCC0g");
	this.shape_64.setTransform(848.275,650.275);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#33B44B").ss(66,1,1).p("AsWh9ILPpDIKAC9IDeCkIgXHuIiQF4IvIC6Ih1h0IlJrJg");
	this.shape_65.setTransform(872.45,650.975);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#24B400").s().p("AnNJNIlJrJIAAgBILPpDIKAC9IDeCkIgXHuIiQF4IvIC6g");
	this.shape_66.setTransform(872.45,650.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#33B946").ss(66,1,1).p("Asah2ILMpWIKDDDIDlChIgYHxIiHGEIvNDAIh0h4g");
	this.shape_67.setTransform(896.65,651.675);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#25B900").s().p("AnGJVIlTrLILMpWIKCDDIDmChIgZHxIiHGEIvMDAg");
	this.shape_68.setTransform(896.65,651.675);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#33BF40").ss(66,1,1).p("AsdhwILKppIKFDKIDsCeIgZH0Ih+GQIvSDGIh0h8IlerMg");
	this.shape_69.setTransform(920.8,652.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#26BF00").s().p("Am/JeIlerNIAAAAILJpqIKGDKIDsCeIgZH0Ih/GQIvRDGg");
	this.shape_70.setTransform(920.8,652.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#33C53A").ss(66,1,1).p("AshhpILHp8IKIDQID0CbIgaH4Ih2GbIvXDNIhziAIlprOg");
	this.shape_71.setTransform(944.975,653.075);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#27C500").s().p("Am4JmIlprOIAAgBILHp8IKIDQID0CbIgaH4Ih2GbIvXDNg");
	this.shape_72.setTransform(944.975,653.075);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#33CB34").ss(66,1,1).p("AskhiILDqPIKMDWID6CYIgbH7IhtGoIvcDSIhyiEg");
	this.shape_73.setTransform(969.175,653.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#29CB00").s().p("AmxJuIlzrQILDqPIKMDWID6CYIgbH6IhtGoIvcDTg");
	this.shape_74.setTransform(969.175,653.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#33D12E").ss(66,1,1).p("AsohcILBqhIKODdIECCUIgcH+IhlG0IvhDYIhxiIg");
	this.shape_75.setTransform(993.325,654.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2AD100").s().p("AmqJ3Il+rTILBqhIKODcIECCVIgcH9IhlG1IvhDYg");
	this.shape_76.setTransform(993.325,654.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#33D629").ss(66,1,1).p("AsshVIK/q0IKRDiIEJCSIgcIBIhdG/IvnDfIhwiLImJrUg");
	this.shape_77.setTransform(1017.5,655.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#2BD600").s().p("AmjJ/ImIrUIAAAAIK+q0IKRDiIEICSIgcIAIhcHAIvnDfg");
	this.shape_78.setTransform(1017.5,655.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#33DC23").ss(66,1,1).p("AsvhOIK7rHIKUDoIEQCPIgdIDIhUHNIvsDkIhviPg");
	this.shape_79.setTransform(1041.7,655.925);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#2CDC00").s().p("AmcKHImTrVIK7rHIKUDoIEQCPIgdIDIhVHNIvrDkg");
	this.shape_80.setTransform(1041.7,655.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#33E21D").ss(66,1,1).p("AszhIIK5rZIKWDuIEYCMIgeIGIhMHZIvxDqIhuiSg");
	this.shape_81.setTransform(1065.875,656.625);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#2DE200").s().p("AmVKQImerYIK5rZIKWDuIEYCMIgeIGIhMHZIvxDqg");
	this.shape_82.setTransform(1065.875,656.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#33E817").ss(66,1,1).p("As2hBIK1rsIKaD0IEeCJIgeIJIhEHlIv2DwIhtiWg");
	this.shape_83.setTransform(1090.025,657.325);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#2EE800").s().p("AmOKYImorZIK1rsIKaD0IEeCJIgeIJIhEHlIv2Dwg");
	this.shape_84.setTransform(1090.025,657.325);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#33EE11").ss(66,1,1).p("As6g6IKzr/IKcD6IEmCGIgfINIg8HwIv7D3Ihsibg");
	this.shape_85.setTransform(1114.225,658.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#30EE00").s().p("AmHKgImzraIKzsAIKcD7IEmCGIgfIMIg8HxIv7D3g");
	this.shape_86.setTransform(1114.225,658.05);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#33F30C").ss(66,1,1).p("As+g0IKwsSIKfECIEtCDIggIPIgyH8IwBD9Ihrifg");
	this.shape_87.setTransform(1138.4,658.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#31F300").s().p("Al/KpIm/rdIKxsRIKeEAIEuCEIghIPIgzH8Iv/D8g");
	this.shape_88.setTransform(1138.4,658.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#33F906").ss(66,1,1).p("AtBgtIKtslIKiEHIE0CAIghISIgqIJIwGEDIhpiig");
	this.shape_89.setTransform(1162.575,659.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#32F900").s().p("Al4KxInJreIKtslIKiEHIE0CAIghISIgqIJIwGEDg");
	this.shape_90.setTransform(1162.575,659.475);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#33FF00").ss(66,1,1).p("AMCJWIwKEJIo9uGIKrs3IPgGKg");
	this.shape_91.setTransform(1186.75,660.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#33FF00").s().p("AtEgnIKps3IPhGKIhEQqIwLEJg");
	this.shape_92.setTransform(1186.75,660.175);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#33FA05").ss(66,1,1).p("AtBgtIKtslIKiEHIE0CAIghISIgpIKIwGECIhqiig");
	this.shape_93.setTransform(1163.875,659.525);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#33F40B").ss(66,1,1).p("As+gzIKwsUIKfEBIEuCDIggIPIgyH/IwBD9Ihrieg");
	this.shape_94.setTransform(1140.975,658.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#33EF10").ss(66,1,1).p("As7g5IKzsDIKdD8IEnCFIgfINIg6HzIv9D4Ihribg");
	this.shape_95.setTransform(1118.1,658.225);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#33E916").ss(66,1,1).p("As3g/IK1ryIKaD3IEgCIIgeIKIhCHoIv3DyIhtiYImrrZg");
	this.shape_96.setTransform(1095.225,657.55);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#33E41B").ss(66,1,1).p("As0hFIK4rgIKXDxIEaCLIgeIHIhKHcIvyDsIhuiTg");
	this.shape_97.setTransform(1072.375,656.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#33DE21").ss(66,1,1).p("AsxhMIK6rOIKWDrIETCNIgeIFIhRHRIvuDnIhuiRg");
	this.shape_98.setTransform(1049.5,656.275);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#33D926").ss(66,1,1).p("AsthSIK9q9IKSDlIEMCRIgcIBIhZHHIvpDhIhviNg");
	this.shape_99.setTransform(1026.6,655.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#33D42B").ss(66,1,1).p("AsqhYILAqrIKPDfIEGCTIgcH/IhhG7IvkDbIhwiJg");
	this.shape_100.setTransform(1003.725,654.95);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#33CE31").ss(66,1,1).p("AsmhfILCqZIKNDaID/CWIgbH8IhpGvIvfDWIhxiGIl6rRg");
	this.shape_101.setTransform(980.85,654.325);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#33C936").ss(66,1,1).p("AsjhlILFqIIKKDUID4CZIgaH5IhxGkIvaDQIhyiCg");
	this.shape_102.setTransform(957.95,653.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#33C33C").ss(66,1,1).p("AsghrILIp2IKHDOIDxCcIgZH2Ih5GYIvVDLIhzh/g");
	this.shape_103.setTransform(935.1,653);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#33BE41").ss(66,1,1).p("AschxILKplIKFDJIDqCeIgZH0IiAGNIvRDFIh0h7IlbrMg");
	this.shape_104.setTransform(912.225,652.325);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#33B847").ss(66,1,1).p("AsZh3ILNpUIKCDDIDkChIgZHxIiHGCIvNC/Ih0h4g");
	this.shape_105.setTransform(889.35,651.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#33B34C").ss(66,1,1).p("AsWh9ILQpCIJ/C9IDeCkIgYHuIiQF2IvHC6Ih2h0IlIrJg");
	this.shape_106.setTransform(866.475,651.05);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#33AE51").ss(66,1,1).p("AsSiDILSoxIJ9C4IDWCmIgXHsIiYFrIvBC0Ih3hxIk+rHg");
	this.shape_107.setTransform(843.575,650.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#33A857").ss(66,1,1).p("AsPiJILVofIJ6CxIDQCqIgWHoIigFgIu9CuIh4htg");
	this.shape_108.setTransform(820.7,649.725);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#33A35C").ss(66,1,1).p("AsLiQILXoNIJ4CsIDJCsIgVHmIioFUIu4CpIh5hqIkqrDg");
	this.shape_109.setTransform(797.8,649.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#339D62").ss(66,1,1).p("AsIiWILan8IJ1CmIDCCvIgVHkIivFJIu0CjIh5hmg");
	this.shape_110.setTransform(774.95,648.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#339867").ss(66,1,1).p("AsFicILdnqIJyCgIC8CyIgUHgIi4E+IuuCdIh7hiIkWrBg");
	this.shape_111.setTransform(752.075,647.775);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#33926D").ss(66,1,1).p("AsCiiILgnZIJvCaIC1C1IgTHeIjAEyIupCYIh8hfIkMq/g");
	this.shape_112.setTransform(729.2,647.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#338D72").ss(66,1,1).p("Ar+ioILinIIJtCVICuC4IgSHaIjIEnIulCTIh8hcg");
	this.shape_113.setTransform(706.325,646.475);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#338877").ss(66,1,1).p("Ar7ivILlm1IJqCPICoC6IgSHYIjPEcIuhCMIh9hYIj4q7g");
	this.shape_114.setTransform(683.45,645.825);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#33827D").ss(66,1,1).p("Ar3i1ILomkIJnCJIChC9IgRHWIjXEQIucCHIh+hVIjuq5g");
	this.shape_115.setTransform(660.55,645.15);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#337D82").ss(66,1,1).p("Ar0i7ILqmTIJlCEICaDAIgRHSIjeEFIuXCCIh/hRIjkq5g");
	this.shape_116.setTransform(637.7,644.525);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#337788").ss(66,1,1).p("ArwjBILtmBIJiB+ICTDDIgQHPIjnD6IuRB8IiAhOIjaq2g");
	this.shape_117.setTransform(614.8,643.85);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#33728D").ss(66,1,1).p("ArtjIILulvIJhB4ICMDFIgPHOIjuDuIuNB2IiBhKIjQq1g");
	this.shape_118.setTransform(591.925,643.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#336D92").ss(66,1,1).p("ArqjNILyleIJdByICGDIIgOHLIj2DiIuIBxIiChGIjHq0g");
	this.shape_119.setTransform(569.05,642.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#336798").ss(66,1,1).p("ArnjUIL0lNIJbBtICADLIgOHIIj+DXIuDBrIiDhDIi9qxg");
	this.shape_120.setTransform(546.175,641.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#33629D").ss(66,1,1).p("ArjjaIL3k7IJYBnIB5DOIgNHFIkHDMIt+BlIiDhAIizqvg");
	this.shape_121.setTransform(523.3,641.25);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#335CA3").ss(66,1,1).p("ArgjgIL5kqIJWBhIByDRIgNHCIkODBIt5BgIiEg8Iipqvg");
	this.shape_122.setTransform(500.45,640.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#3357A8").ss(66,1,1).p("ArcjnIL8kYIJTBcIBrDTIgMHAIkWC1It0BaIiFg4Iifqtg");
	this.shape_123.setTransform(477.55,639.95);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#3351AE").ss(66,1,1).p("ArZjtIL+kGIJRBWIBkDWIgKG9IkeCqItwBUIiGg1IiVqrg");
	this.shape_124.setTransform(454.675,639.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#334CB3").ss(66,1,1).p("ArWjyIMCj2IJNBRIBeDZIgKG5IkmCfItrBPIiHgxIiLqqg");
	this.shape_125.setTransform(431.775,638.625);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#3347B8").ss(66,1,1).p("ArSj5IMEjjIJLBKIBXDcIgJG3IkuCTItmBJIiIgtIiBqog");
	this.shape_126.setTransform(408.9,637.975);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#3341BE").ss(66,1,1).p("ArPj/IMHjSIJIBEIBQDfIgIG0Ik2CJIthBDIiJgqIh3qng");
	this.shape_127.setTransform(386.025,637.35);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#333CC3").ss(66,1,1).p("ArMkFIMKjBIJFA/IBKDiIgIGxIk9B9ItcA+IiLgnIhtqkg");
	this.shape_128.setTransform(363.15,636.675);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#3336C9").ss(66,1,1).p("ArIkLIMMivIJDA5IBDDkIgIGvIlFBxItXA4IiLgjIhjqig");
	this.shape_129.setTransform(340.3,636.025);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#3331CE").ss(66,1,1).p("ArFkRIMPieIJAA0IA8DnIgGGsIlNBmItTAyIiMgfIhZqhg");
	this.shape_130.setTransform(317.4,635.35);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#332BD4").ss(66,1,1).p("ArCkYIMSiMII9AuIA2DqIgGGpIlVBbItOAtIiMgdIhQqfg");
	this.shape_131.setTransform(294.525,634.725);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#3326D9").ss(66,1,1).p("Aq+keIMUh6II7AoIAvDsIgFGnIldBPItJAnIiOgYIhFqeg");
	this.shape_132.setTransform(271.65,634.075);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#3321DE").ss(66,1,1).p("Aq7kkIMXhpII4AiIAoDwIgEGjIllBEItEAiIiPgVIg7qcg");
	this.shape_133.setTransform(248.75,633.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#331BE4").ss(66,1,1).p("Aq4kqIMahYII1AdIAiDyIgEGhIlsA4ItAAdIiPgSIgyqag");
	this.shape_134.setTransform(225.875,632.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#3316E9").ss(66,1,1).p("Aq0kwIMchGIIzAWIAaD1IgDGeIl0AuIs6AWIiRgOg");
	this.shape_135.setTransform(203.025,632.125);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#3310EF").ss(66,1,1).p("Aqxk3IMfg0IIwARIAUD4IgCGbIl8AiIs2ARIiRgLg");
	this.shape_136.setTransform(180.15,631.45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#330BF4").ss(66,1,1).p("Aquk9IMigjIItAMIAOD7IgCGYImEAXIsxALIiSgHg");
	this.shape_137.setTransform(157.275,630.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#3305FA").ss(66,1,1).p("AqqlDIMkgRIIrAGIAGD8IAAGXImNALIsrAFIiTgDg");
	this.shape_138.setTransform(134.375,630.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:122.95,y:629}}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_3,p:{x:111.5,y:629.5}}]},1).wait(1));

	// MT
	this.instance_18 = new lib.myshape("synched",0);
	this.instance_18.setTransform(99.85,927,1,1,0,0,0,77.5,75.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({x:119.95,y:922.15},0).wait(1).to({x:140.1,y:917.35},0).wait(1).to({x:160.2,y:912.5},0).wait(1).to({x:180.35,y:907.7},0).wait(1).to({x:200.45,y:902.85},0).wait(1).to({x:220.6,y:898.05},0).wait(1).to({x:240.7,y:893.25},0).wait(1).to({x:260.85,y:888.4},0).wait(1).to({x:280.95,y:883.6},0).wait(1).to({x:301.1,y:878.75},0).wait(1).to({x:321.2,y:873.95},0).wait(1).to({x:341.35,y:869.1},0).wait(1).to({x:361.45,y:864.3},0).wait(1).to({x:381.6,y:859.5},0).wait(1).to({x:395.8,y:866.95},0).wait(1).to({x:410.05,y:874.4},0).wait(1).to({x:424.25,y:881.85},0).wait(1).to({x:438.45,y:889.35},0).wait(1).to({x:452.7,y:896.8},0).wait(1).to({x:466.9,y:904.25},0).wait(1).to({x:481.1,y:911.7},0).wait(1).to({x:495.35,y:919.2},0).wait(1).to({x:509.55,y:926.65},0).wait(1).to({x:523.75,y:934.1},0).wait(1).to({x:538,y:941.55},0).wait(1).to({x:552.2,y:949.05},0).wait(1).to({x:566.4,y:956.5},0).wait(1).to({x:580.65,y:963.95},0).wait(1).to({x:594.85,y:971.4},0).wait(1).to({x:609.05,y:965.6},0).wait(1).to({x:623.3,y:959.8},0).wait(1).to({x:637.5,y:954},0).wait(1).to({x:651.7,y:948.2},0).wait(1).to({x:665.95,y:942.4},0).wait(1).to({x:680.15,y:936.6},0).wait(1).to({x:694.35,y:930.8},0).wait(1).to({x:708.6,y:925},0).wait(1).to({x:722.8,y:919.2},0).wait(1).to({x:737.05,y:913.4},0).wait(1).to({x:751.25,y:907.6},0).wait(1).to({x:765.45,y:901.8},0).wait(1).to({x:779.7,y:896},0).wait(1).to({x:793.9,y:890.15},0).wait(1).to({x:808.1,y:884.35},0).wait(1).to({x:823.25,y:890.95},0).wait(1).to({x:838.4,y:897.5},0).wait(1).to({x:853.5,y:904.1},0).wait(1).to({x:868.65,y:910.65},0).wait(1).to({x:883.8,y:917.25},0).wait(1).to({x:898.9,y:923.8},0).wait(1).to({x:914.05,y:930.4},0).wait(1).to({x:929.2,y:936.95},0).wait(1).to({x:944.3,y:943.55},0).wait(1).to({x:959.45,y:950.1},0).wait(1).to({x:974.6,y:956.7},0).wait(1).to({x:989.7,y:963.25},0).wait(1).to({x:1004.85,y:969.8},0).wait(1).to({x:1020,y:976.4},0).wait(1).to({x:1035.1,y:982.95},0).wait(1).to({x:1048.9,y:976.4},0).wait(1).to({x:1062.7,y:969.8},0).wait(1).to({x:1076.5,y:963.2},0).wait(1).to({x:1090.25,y:956.65},0).wait(1).to({x:1104.05,y:950.05},0).wait(1).to({x:1117.85,y:943.45},0).wait(1).to({x:1131.65,y:936.9},0).wait(1).to({x:1145.4,y:930.3},0).wait(1).to({x:1159.2,y:923.7},0).wait(1).to({x:1173,y:917.15},0).wait(1).to({x:1186.8,y:910.55},0).wait(1).to({x:1200.55,y:903.95},0).wait(1).to({x:1214.35,y:897.4},0).wait(1).to({x:1228.15,y:890.8},0).wait(1).to({x:1241.95,y:884.2},0).wait(1).to({x:1255.7,y:889.8},0).wait(1).to({x:1269.5,y:895.45},0).wait(1).to({x:1283.3,y:901.05},0).wait(1).to({x:1297.1,y:906.65},0).wait(1).to({x:1310.85,y:912.25},0).wait(1).to({x:1324.65,y:917.85},0).wait(1).to({x:1338.45,y:923.45},0).wait(1).to({x:1352.25,y:929.05},0).wait(1).to({x:1366,y:934.65},0).wait(1).to({x:1379.8,y:940.25},0).wait(1).to({x:1393.6,y:945.85},0).wait(1).to({x:1407.4,y:951.45},0).wait(1).to({x:1421.15,y:957.05},0).wait(1).to({x:1434.95,y:962.65},0).wait(1).to({x:1448.75,y:968.25},0).wait(1).to({x:1462.55,y:973.85},0).wait(1).to({x:1476.35,y:979.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(970.5,553.8,583.3,505);
// library properties:
lib.properties = {
	id: '7559CE978DE9F24880FAF9E7A55F9FFD',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/hw3_atlas_1.png?1664423364714", id:"hw3_atlas_1"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js?1664423364746", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js?1664423364746", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1664423364746", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7559CE978DE9F24880FAF9E7A55F9FFD'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;