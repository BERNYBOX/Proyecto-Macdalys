(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"nosotros_atlas_1", frames: [[0,0,2048,1281]]},
		{name:"nosotros_atlas_2", frames: [[0,0,2048,1281]]},
		{name:"nosotros_atlas_3", frames: [[0,0,2048,1281]]},
		{name:"nosotros_atlas_4", frames: [[0,0,2048,1365]]},
		{name:"nosotros_atlas_5", frames: [[0,0,2048,1463]]}
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


(lib.Mapadebits4 = function() {
	this.initialize(ss["nosotros_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits5 = function() {
	this.initialize(ss["nosotros_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits6 = function() {
	this.initialize(ss["nosotros_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits7 = function() {
	this.initialize(ss["nosotros_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits8 = function() {
	this.initialize(ss["nosotros_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



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


(lib.nosotros_1 = function(mode,startPosition,loop,reversed) {
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


(lib.Interpolación4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mapadebits8();
	this.instance.setTransform(1017.05,-222.95,0.331,0.3202);

	this.instance_1 = new lib.Mapadebits7();
	this.instance_1.setTransform(339.05,-222.95,0.3311,0.3454);

	this.instance_2 = new lib.Mapadebits6();
	this.instance_2.setTransform(-339.95,-222.95,0.3315,0.3481);

	this.instance_3 = new lib.Mapadebits5();
	this.instance_3.setTransform(-1006.95,-212.95,0.3258,0.2979);

	this.instance_4 = new lib.Mapadebits4();
	this.instance_4.setTransform(-1694.95,-213.95,0.3358,0.3409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1694.9,-222.9,3389.9,445.9);


(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Mapadebits8();
	this.instance.setTransform(1017.05,-222.95,0.331,0.3202);

	this.instance_1 = new lib.Mapadebits7();
	this.instance_1.setTransform(339.05,-222.95,0.3311,0.3454);

	this.instance_2 = new lib.Mapadebits6();
	this.instance_2.setTransform(-339.95,-222.95,0.3315,0.3481);

	this.instance_3 = new lib.Mapadebits5();
	this.instance_3.setTransform(-1006.95,-212.95,0.3258,0.2979);

	this.instance_4 = new lib.Mapadebits4();
	this.instance_4.setTransform(-1694.95,-213.95,0.3358,0.3409);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1694.9,-222.9,3389.9,445.9);


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


// stage content:
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1280));

	// nosotros_texto
	this.text = new cjs.Text("Nuestro planetario te da la bienvenida 🌌. Gracias por entrar a nuestra página, un lugar donde podrás descubrir las maravillas del espacio y aprender sobre el universo.\n\n\nAquí conocerás los planetas, las estrellas y muchos datos curiosos del sistema solar 🚀. Queremos que aprendas de una forma divertida e interesante.\n\n\nEsperamos que disfrutes esta experiencia espacial y que explores todo el contenido que hemos preparado para ti ✨. ¡Prepárate para viajar por el universo!", "20px 'Palatino Linotype'");
	this.text.lineHeight = 29;
	this.text.lineWidth = 476;
	this.text.parent = this;
	this.text.setTransform(179.3,456.05);

	this.text_1 = new cjs.Text("NOSOTROS ", "100px 'Palatino Linotype'");
	this.text_1.lineHeight = 137;
	this.text_1.lineWidth = 568;
	this.text_1.parent = this;
	this.text_1.setTransform(130.45,270.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(9,2,1).p("EgshAAAMBZDAAA");
	this.shape.setTransform(415,410);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgrvAkuMAAAhJbMBXfAAAMAAABJbg");
	this.shape_1.setTransform(420,685);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1280));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg1HAi2MAAAhFrMBqPAAAMAAABFrg");
	mask.setTransform(1452.05,585.85);

	// animacion
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.setTransform(3486.95,585.95);

	this.instance_1 = new lib.Interpolación4("synched",0);
	this.instance_1.setTransform(96.95,585.95);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1279).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:96.95},1279).wait(1));

	// Botones
	this.contacto = new lib.contacto();
	this.contacto.name = "contacto";
	this.contacto.setTransform(1738.6,83.5,1,1,0,0,0,154.3,46.1);
	new cjs.ButtonHelper(this.contacto, 0, 1, 1);

	this.proyectos = new lib.proyectos();
	this.proyectos.name = "proyectos";
	this.proyectos.setTransform(1410,82.45,1,1,0,0,0,154.3,46.1);
	new cjs.ButtonHelper(this.proyectos, 0, 1, 1);

	this.nosotros = new lib.nosotros_1();
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.text_2},{t:this.index},{t:this.servicios},{t:this.nosotros},{t:this.proyectos},{t:this.contacto}]}).wait(1280));

	// NAvbar
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6600CC").s().p("EiV/AQrMAAAghVMEr/AAAMAAAAhVg");
	this.shape_3.setTransform(960,103.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1280));

	// Fondo
	this.instance_2 = new lib.Mapadebits1();
	this.instance_2.setTransform(0,0,0.6413,0.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6600CC").s().p("EiV/ATiMAAAgnDMEr/AAAMAAAAnDg");
	this.shape_4.setTransform(960,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.instance_2}]}).wait(1280));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(960,535.8,963.9000000000001,554.3);
// library properties:
lib.properties = {
	id: '6EB365678C2EF64B987828330955C1C3',
	width: 1920,
	height: 1080,
	fps: 100,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Mapadebits1.png?1778549550231", id:"Mapadebits1"},
		{src:"images/nosotros_atlas_1.png?1778549550209", id:"nosotros_atlas_1"},
		{src:"images/nosotros_atlas_2.png?1778549550209", id:"nosotros_atlas_2"},
		{src:"images/nosotros_atlas_3.png?1778549550209", id:"nosotros_atlas_3"},
		{src:"images/nosotros_atlas_4.png?1778549550209", id:"nosotros_atlas_4"},
		{src:"images/nosotros_atlas_5.png?1778549550209", id:"nosotros_atlas_5"}
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
an.compositions['6EB365678C2EF64B987828330955C1C3'] = {
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