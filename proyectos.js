(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"proyectos_atlas_1", frames: [[1608,0,320,240],[0,0,854,480],[856,0,750,450]]}
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



(lib.Mapadebits1 = function() {
	this.initialize(img.Mapadebits1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3000,1982);


(lib.Mapadebits3 = function() {
	this.initialize(ss["proyectos_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.initialize(ss["proyectos_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.initialize(ss["proyectos_atlas_1"]);
	this.gotoAndStop(2);
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


(lib.sopbrero = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mapadebits6();
	this.instance.setTransform(0,0,0.7339,0.7936);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sopbrero, new cjs.Rectangle(0,0,626.7,381), null);


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


(lib.proyectos_1 = function(mode,startPosition,loop,reversed) {
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
	this.text = new cjs.Text("GALAXIAS", "italic 68px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 81;
	this.text.lineWidth = 360;
	this.text.parent = this;
	this.text.setTransform(1.7,1.7,0.8472,0.8472);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({color:"#CCCCCC"},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,308.6,138.9);


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


(lib.ENANA = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mapadebits3();
	this.instance.setTransform(0,0,1.5651,1.5651);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ENANA, new cjs.Rectangle(0,0,500.8,375.6), null);


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


(lib.adromedd = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mapadebits7();
	this.instance.setTransform(0,0,0.776,0.776);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.adromedd, new cjs.Rectangle(0,0,582,349.2), null);


(lib.Galsom = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.sopbrero();
	this.instance.setTransform(313.4,190.5,1,1,0,0,0,313.4,190.5);

	this.text = new cjs.Text("La Galaxia del Sombrero", "italic 40px 'Trebuchet MS'");
	this.text.lineHeight = 48;
	this.text.lineWidth = 506;
	this.text.parent = this;
	this.text.setTransform(86.8,142);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:1}}]}).to({state:[{t:this.instance,p:{alpha:0.6211}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,626.7,381);


(lib.enanan = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ENANA();
	this.instance.setTransform(250.4,187.8,1,1,0,0,0,250.4,187.8);

	this.text = new cjs.Text(" Galaxia Enana del Can Mayor", "italic 30px 'Trebuchet MS'");
	this.text.lineHeight = 37;
	this.text.lineWidth = 301;
	this.text.parent = this;
	this.text.setTransform(109.75,154.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{alpha:1}}]}).to({state:[{t:this.instance,p:{alpha:0.6211}},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500.8,375.6);


(lib.Adrome = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mapadebits7();
	this.instance.setTransform(0,0,0.776,0.776);

	this.text = new cjs.Text("Andromeda", "italic 60px 'Trebuchet MS'");
	this.text.lineHeight = 72;
	this.text.parent = this;
	this.text.setTransform(127.9,113.85);

	this.instance_1 = new lib.adromedd();
	this.instance_1.setTransform(291,174.6,1,1,0,0,0,291,174.6);
	this.instance_1.alpha = 0.7109;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.text}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,582,349.2);


// stage content:
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

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Botones
	this.instance = new lib.Adrome();
	this.instance.setTransform(931,550.6,1,1,0,0,0,291,174.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Galsom();
	this.instance_1.setTransform(1569.4,549.5,1,1,0,0,0,313.4,190.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.enanan();
	this.instance_2.setTransform(349.4,549.8,1,1,0,0,0,250.4,187.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.contacto = new lib.contacto();
	this.contacto.name = "contacto";
	this.contacto.setTransform(1738.6,83.5,1,1,0,0,0,154.3,46.1);
	new cjs.ButtonHelper(this.contacto, 0, 1, 1);

	this.proyectos = new lib.proyectos_1();
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

	this.text = new cjs.Text("PLANETARY", "italic 75px 'Trebuchet MS'");
	this.text.lineHeight = 89;
	this.text.lineWidth = 406;
	this.text.parent = this;
	this.text.setTransform(14.25,65.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(9,2,1).p("AAAwCMAAAAgF");
	this.shape.setTransform(420,102.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text},{t:this.index},{t:this.servicios},{t:this.nosotros},{t:this.proyectos},{t:this.contacto},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// NAvbar
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6600CC").s().p("EiV/AQrMAAAghVMEr/AAAMAAAAhVg");
	this.shape_1.setTransform(960,103.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Fondo
	this.instance_3 = new lib.Mapadebits1();
	this.instance_3.setTransform(0,0,0.6413,0.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6600CC").s().p("EiV/ATiMAAAgnDMEr/AAAMAAAAnDg");
	this.shape_2.setTransform(960,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,535.8,963.9000000000001,554.3);
// library properties:
lib.properties = {
	id: '68B1811C280878468A2F1DEF86B13F55',
	width: 1920,
	height: 1080,
	fps: 100,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits1.png?1778553157961", id:"Mapadebits1"},
		{src:"images/proyectos_atlas_1.png?1778553157936", id:"proyectos_atlas_1"}
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
an.compositions['68B1811C280878468A2F1DEF86B13F55'] = {
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