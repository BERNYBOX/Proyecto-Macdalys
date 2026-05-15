(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"contacto_atlas_1", frames: [[1351,0,320,234],[1673,0,320,234],[1351,236,320,234],[1673,236,320,234],[1351,472,320,234],[1673,472,320,234],[1351,708,320,234],[1673,708,320,234],[1335,944,320,234],[1657,944,320,234],[1335,1180,320,234],[1657,1180,320,234],[0,0,1349,871],[0,873,1333,787]]}
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



(lib.Kk1EH_0 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_1 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_10 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_11 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_2 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_3 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_4 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_5 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_6 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_7 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_8 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Kk1EH_9 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1982);


(lib.Mapadebits2 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits3 = function() {
	this.initialize(ss["contacto_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.terr = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Terreno", "italic 30px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 37;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(25.8,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsfEsIAApXIY/AAIAAJXg");
	this.shape.setTransform(80,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.terr, new cjs.Rectangle(0,0,160,87.8), null);


(lib.sevicios = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("SERVICIOS", "italic 68px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 81;
	this.text.lineWidth = 324;
	this.text.parent = this;
	this.text.setTransform(1.6726,1.7,0.8472,0.8472);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#CCCCCC"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,278.3,91.2);


(lib.sat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Satelite", "italic 30px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 37;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(29.4,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsfEsIAApXIY/AAIAAJXg");
	this.shape.setTransform(80,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sat, new cjs.Rectangle(0,0,160,87.8), null);


(lib.proyectos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("PROYECTOS", "italic 68px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 81;
	this.text.lineWidth = 360;
	this.text.parent = this;
	this.text.setTransform(1.7,1.7,0.8472,0.8472);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#CCCCCC"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308.6,92.3);


(lib.nosotros = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("NOSOTROS", "italic 68px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 81;
	this.text.lineWidth = 337;
	this.text.parent = this;
	this.text.setTransform(1.7,1.7,0.8472,0.8472);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#CCCCCC"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,91.2);


(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("INICIO", "italic 68px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 81;
	this.text.lineWidth = 207;
	this.text.parent = this;
	this.text.setTransform(1.7,1.7,0.8472,0.8472);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#CCCCCC"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179,101.8);


(lib.figg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.Kk1EH_0();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.figg, new cjs.Rectangle(0,0,320,234), null);


(lib.contacto_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("CONTACTO", "italic 68px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 81;
	this.text.lineWidth = 360;
	this.text.parent = this;
	this.text.setTransform(1.7,1.7,0.8472,0.8472);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#CCCCCC"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308.6,92.3);


(lib.terreno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.terr();
	this.instance.setTransform(80,43.9,1,1,0,0,0,80,43.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.7109},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,87.8);


(lib.satelite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.text = new cjs.Text("Satelite", "italic 30px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 37;
	this.text.lineWidth = 116;
	this.text.parent = this;
	this.text.setTransform(29.4,14.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AsfEsIAApXIY/AAIAAJXg");
	this.shape.setTransform(80,30);

	this.instance = new lib.sat();
	this.instance.setTransform(80,43.9,1,1,0,0,0,80,43.9);
	this.instance.alpha = 0.7109;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// Capa_2
	this.instance_1 = new lib.Mapadebits2();
	this.instance_1.setTransform(-188,-11,0.8172,0.8165);

	this.instance_2 = new lib.sat();
	this.instance_2.setTransform(83.35,43.2,1,1,0,0,0,80,43.9);
	this.instance_2.alpha = 0.7109;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188,-11,1102.5,711.2);


// stage content:
(lib.contacto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.index.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('index.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.servicios.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('servicios.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.nosotros.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('nosotros.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.proyectos.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('proyectos.html', '_self');
		});
		
		
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.contacto.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('contacto.html', '_self');});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(81));

	// btnmapa
	this.text = new cjs.Text("Direccion", "italic 60px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 72;
	this.text.lineWidth = 268;
	this.text.parent = this;
	this.text.setTransform(1352,239.3);

	this.text_1 = new cjs.Text("F3CR+8CQ, Santo Domingo", "italic 30px 'Trebuchet MS'");
	this.text_1.lineHeight = 37;
	this.text_1.lineWidth = 273;
	this.text_1.parent = this;
	this.text_1.setTransform(1334.9,399.6);

	this.instance = new lib.satelite();
	this.instance.setTransform(342.65,323.9,1,1,0,0,0,80,43.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 2);

	this.instance_1 = new lib.terreno();
	this.instance_1.setTransform(170,323.9,1,1,0,0,0,80,43.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(9,2,1).p("A13AAMArvAAA");
	this.shape.setTransform(1490,320);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A5RPCIAA+DMAyjAAAIAAeDg");
	this.shape_1.setTransform(1468.225,433.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(81));

	// mapa
	this.instance_2 = new lib.Mapadebits3();
	this.instance_2.setTransform(75,268,0.8252,0.8996);

	this.instance_3 = new lib.Mapadebits2();
	this.instance_3.setTransform(77,267,0.814,0.814);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(81));

	// gif
	this.instance_4 = new lib.figg();
	this.instance_4.setTransform(1763.9,987,1,1,0,0,0,160,117);

	this.instance_5 = new lib.Kk1EH_1();
	this.instance_5.setTransform(1600,856);

	this.instance_6 = new lib.Kk1EH_2();
	this.instance_6.setTransform(1600,856);

	this.instance_7 = new lib.Kk1EH_3();
	this.instance_7.setTransform(1600,856);

	this.instance_8 = new lib.Kk1EH_4();
	this.instance_8.setTransform(1604,856);

	this.instance_9 = new lib.Kk1EH_5();
	this.instance_9.setTransform(1604,846);

	this.instance_10 = new lib.Kk1EH_6();
	this.instance_10.setTransform(1600,856);

	this.instance_11 = new lib.Kk1EH_7();
	this.instance_11.setTransform(1600,856);

	this.instance_12 = new lib.Kk1EH_8();
	this.instance_12.setTransform(1604,873);

	this.instance_13 = new lib.Kk1EH_9();
	this.instance_13.setTransform(1604,856);

	this.instance_14 = new lib.Kk1EH_10();
	this.instance_14.setTransform(1600,856);

	this.instance_15 = new lib.Kk1EH_11();
	this.instance_15.setTransform(1600,856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},7).to({state:[{t:this.instance_6}]},7).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.instance_9}]},7).to({state:[{t:this.instance_10,p:{x:1600}}]},6).to({state:[{t:this.instance_10,p:{x:1604}}]},1).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_13}]},6).to({state:[{t:this.instance_14}]},7).to({state:[{t:this.instance_15}]},7).wait(7));

	// Botones
	this.contacto = new lib.contacto_1();
	this.contacto.name = "contacto";
	this.contacto.setTransform(1738.6,83.5,1,1,0,0,0,154.3,46.1);
	new cjs.ButtonHelper(this.contacto, 0, 1, 1);

	this.proyectos = new lib.proyectos();
	this.proyectos.name = "proyectos";
	this.proyectos.setTransform(1410,82.45,1,1,0,0,0,154.3,46.1);
	new cjs.ButtonHelper(this.proyectos, 0, 1, 1);

	this.nosotros = new lib.nosotros();
	this.nosotros.name = "nosotros";
	this.nosotros.setTransform(1100.05,83,1,1,0,0,0,144.5,45.6);
	new cjs.ButtonHelper(this.nosotros, 0, 1, 1);

	this.servicios = new lib.sevicios();
	this.servicios.name = "servicios";
	this.servicios.setTransform(800,83,1,1,0,0,0,139.1,45.6);
	new cjs.ButtonHelper(this.servicios, 0, 1, 1);

	this.index = new lib.index();
	this.index.name = "index";
	this.index.setTransform(550.75,88.3,1,1,0,0,0,89.5,50.9);
	new cjs.ButtonHelper(this.index, 0, 1, 1);

	this.text_2 = new cjs.Text("PLANETARY", "italic 75px 'Trebuchet MS'");
	this.text_2.lineHeight = 89;
	this.text_2.lineWidth = 406;
	this.text_2.parent = this;
	this.text_2.setTransform(14.25,65.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(9,2,1).p("AAAwCMAAAAgF");
	this.shape_2.setTransform(420,102.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.text_2},{t:this.index},{t:this.servicios},{t:this.nosotros},{t:this.proyectos},{t:this.contacto}]}).to({state:[{t:this.shape_2},{t:this.text_2},{t:this.index},{t:this.servicios},{t:this.nosotros},{t:this.proyectos},{t:this.contacto}]},74).wait(7));

	// NAvbar
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6600CC").s().p("EiV/AQrMAAAghVMEr/AAAMAAAAhVg");
	this.shape_3.setTransform(960,103.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(81));

	// Fondo
	this.instance_16 = new lib.Mapadebits1();
	this.instance_16.setTransform(0,0,0.6413,0.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6600CC").s().p("EiV/ATiMAAAgnDMEr/AAAMAAAAnDg");
	this.shape_4.setTransform(960,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_16}]}).wait(81));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,535.8,964,571.2);
// library properties:
lib.properties = {
	id: 'ED1E18D39058664D8C92F7334D5737DE',
	width: 1920,
	height: 1080,
	fps: 100,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits1.png?1778552312230", id:"Mapadebits1"},
		{src:"images/contacto_atlas_1.png?1778552312194", id:"contacto_atlas_1"}
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
an.compositions['ED1E18D39058664D8C92F7334D5737DE'] = {
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