const _0xf8a22d=_0x313a;(function(_0x54da0d,_0xffbf46){const _0x34d342=_0x313a,_0x34ee5c=_0x54da0d();while(!![]){try{const _0x5f03b0=-parseInt(_0x34d342(0x1f0))/0x1+parseInt(_0x34d342(0x1d7))/0x2+parseInt(_0x34d342(0x1e9))/0x3*(parseInt(_0x34d342(0x180))/0x4)+parseInt(_0x34d342(0x1af))/0x5*(parseInt(_0x34d342(0x1e4))/0x6)+-parseInt(_0x34d342(0x1b1))/0x7*(parseInt(_0x34d342(0x1d2))/0x8)+-parseInt(_0x34d342(0x183))/0x9*(parseInt(_0x34d342(0x1c1))/0xa)+parseInt(_0x34d342(0x1c6))/0xb*(parseInt(_0x34d342(0x1eb))/0xc);if(_0x5f03b0===_0xffbf46)break;else _0x34ee5c['push'](_0x34ee5c['shift']());}catch(_0x2a2013){_0x34ee5c['push'](_0x34ee5c['shift']());}}}(_0x4c82,0xe0e9b));import*as _0x3c66f6 from'three';import{GLTFLoader}from'https://rawcdn.githack.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';let flightModel='',hitTextTimeout='',flightList=[],countdown=0x3*0x6*0xa,continueGame=!![];const scene=new _0x3c66f6['Scene']();scene[_0xf8a22d(0x17d)]=new _0x3c66f6[(_0xf8a22d(0x1b8))]()['setPath']('texture/cubemap/')[_0xf8a22d(0x18e)](['right.jpeg',_0xf8a22d(0x193),_0xf8a22d(0x1d8),_0xf8a22d(0x1ee),_0xf8a22d(0x1e8),_0xf8a22d(0x18a)]);const DirectionalLight=new _0x3c66f6[(_0xf8a22d(0x1e1))](0xffffff,0x8);scene[_0xf8a22d(0x190)](DirectionalLight);const camera=new _0x3c66f6['PerspectiveCamera'](0x32,window[_0xf8a22d(0x182)]/window[_0xf8a22d(0x1fb)],0.1,0x2710),geometry=new _0x3c66f6['CylinderGeometry'](0.19,0.19,0x80,0x40),material=new _0x3c66f6[(_0xf8a22d(0x1cf))]({'color':0xffffff}),canvas=document[_0xf8a22d(0x1b6)]('map'),ctx=canvas[_0xf8a22d(0x1ed)]('2d'),renderer=new _0x3c66f6[(_0xf8a22d(0x1ff))]();renderer[_0xf8a22d(0x1a3)]=_0x3c66f6[_0xf8a22d(0x1ea)],renderer[_0xf8a22d(0x1e2)](window['innerWidth'],window[_0xf8a22d(0x1fb)]),window[_0xf8a22d(0x18c)]('resize',onWindowResize);function onWindowResize(){const _0x354e45=_0xf8a22d;renderer[_0x354e45(0x1e2)](window[_0x354e45(0x182)],window[_0x354e45(0x1fb)]);}function printCountDown(){const _0x7555da=_0xf8a22d;if(Math[_0x7555da(0x1c9)](countdown)==countdown){let _0x15076a=Math['floor'](countdown/0x3c),_0x408526=countdown-Math['floor'](countdown/0x3c)*0x3c;document['querySelector'](_0x7555da(0x1c2))[_0x7555da(0x1d3)]=_0x15076a+':'+(_0x408526<0xa?'0'+_0x408526:_0x408526);if(countdown==0x0){continueGame=![],document[_0x7555da(0x1f2)](_0x7555da(0x1a6))[_0x7555da(0x1d4)][_0x7555da(0x1ae)]=_0x7555da(0x1f5),document[_0x7555da(0x1f2)]('#table-head')['style'][_0x7555da(0x1ae)]=_0x7555da(0x1f5),document[_0x7555da(0x1f2)](_0x7555da(0x198))[_0x7555da(0x1d4)][_0x7555da(0x1ae)]=_0x7555da(0x19c);return;}}}function bullet(_0x2d07db){const _0x24d983=_0xf8a22d;if(flightList[_0x2d07db][_0x24d983(0x1a4)]=='<'||flightList[_0x2d07db][_0x24d983(0x1a4)]=='>'||flightList[_0x2d07db][_0x24d983(0x1a4)]=='<<'||flightList[_0x2d07db][_0x24d983(0x1a4)]=='>>'||flightList[_0x2d07db]['hararet']>=0x64)return;if(!continueGame)return;flightList[_0x2d07db]['dt'][_0x24d983(0x1ab)]({'name':_0x24d983(0x1b9)+_0x2d07db+''+new Date()[_0x24d983(0x1e7)](),'moveCount':0x0}),flightList[_0x2d07db][_0x24d983(0x1f8)]++,flightList[_0x2d07db][_0x24d983(0x1a5)]+=0x1,clearInterval(flightList[_0x2d07db][_0x24d983(0x1b0)]),document['querySelector']('#bullet-text')[_0x24d983(0x1d3)]=flightList[_0x2d07db][_0x24d983(0x1f8)];let _0x2c32b8=flightList[_0x2d07db][_0x24d983(0x1a5)]<0x4b?'yellow':_0x24d983(0x1c0);document['querySelector'](_0x24d983(0x186))[_0x24d983(0x1d4)]['background']=_0x24d983(0x197)+_0x2c32b8+'\x20'+flightList[_0x2d07db][_0x24d983(0x1a5)]+_0x24d983(0x1bf)+flightList[_0x2d07db][_0x24d983(0x1a5)]+'%)';}function _0x4c82(){const _0x49ac27=['innerWidth','49446hVKLfl','mouseup','length','div#bullet','keyup','scene','force','back.jpeg','dtInterval','addEventListener','which','load','autopilot','add','clientX','show','left.jpeg','css','ceil','fadeOut','linear-gradient(to\x20top,\x20','div#tab-text','round','yellow','colorSpace','none','splice','#table-head','fillStyle','sqrt','wrapT','black','outputEncoding','rotate','hararet','#table','%\x20loaded\x20(','name','total','abs','push','div#game','render','display','1568055yoLyHA','hararetInterval','5628wODCcq','preventDefault','target','undefined','position','getElementById','</span></div>','CubeTextureLoader','flight','MB\x20of\x2032MB)','<div\x20style=\x22position:relative;float:left;width:100%;height:32px;\x22><span\x20style=\x22position:relative;float:left;left:11px;top:5px;font-weight:','span#loading','700','moveCount','%,\x20white\x20','red','3170lXTKIt','span#countdown','map','\x20>\x20','fill','496309qFcFKW','average','contextmenu','floor','gothit','hit','linear-gradient(to\x20top,\x20red\x20100%,\x20white\x20100%)','#fullscreen-button','MeshPhongMaterial','MeshBasicMaterial','remove','translateY','11688RWbLOJ','innerHTML','style','keyCode','Mesh','2641184xDbBDa','top.jpeg','visible','keydown','https://rawcdn.githack.com/alperenbutun/free-time-project/master/gltf/f35.glb','color','getObjectByName','TextureLoader','clientWidth','set','DirectionalLight','setSize','arc','6udKAUZ','SRGBColorSpace','startTheGame','getTime','front.jpeg','453165YEqzHY','sRGBEncoding','552bshzqV','rotation','getContext','bottom.jpeg','beginPath','627467wDgSTE','domElement','querySelector','PlaneGeometry','cylinder','block','#hit-text','span#percentage','bullet','RepeatWrapping','body','innerHeight','pow','translateZ','material','WebGLRenderer','sort','normal','clone','traverse','wrapS','background','stroke','random','20kePiCW','html'];_0x4c82=function(){return _0x49ac27;};return _0x4c82();}function _0x313a(_0x5ca786,_0x4f5c71){const _0x4c829d=_0x4c82();return _0x313a=function(_0x313a46,_0x40daf7){_0x313a46=_0x313a46-0x179;let _0x557b1a=_0x4c829d[_0x313a46];return _0x557b1a;},_0x313a(_0x5ca786,_0x4f5c71);}function bulletStop(_0xc4f2){const _0x367f97=_0xf8a22d;clearInterval(flightList[_0xc4f2][_0x367f97(0x18b)]),clearInterval(flightList[_0xc4f2][_0x367f97(0x1b0)]),flightList[_0xc4f2][_0x367f97(0x1b0)]=setInterval(function(){const _0x5c8939=_0x367f97;flightList[_0xc4f2][_0x5c8939(0x1a5)]-=0x1;flightList[_0xc4f2][_0x5c8939(0x1a5)]<=0x0&&(flightList[_0xc4f2][_0x5c8939(0x1a5)]=0x0,clearInterval(flightList[_0xc4f2][_0x5c8939(0x1b0)]));let _0x487121=flightList[_0xc4f2][_0x5c8939(0x1a5)]<0x4b?_0x5c8939(0x19a):_0x5c8939(0x1c0);document[_0x5c8939(0x1f2)](_0x5c8939(0x186))['style'][_0x5c8939(0x17d)]=_0x5c8939(0x197)+_0x487121+'\x20'+flightList[_0xc4f2]['hararet']+_0x5c8939(0x1bf)+flightList[_0xc4f2]['hararet']+'%)';},0x32);}const gt=new _0x3c66f6[(_0xf8a22d(0x1de))]()[_0xf8a22d(0x18e)]('https://rawcdn.githack.com/alperenbutun/free-time-project/f881038/texture/texture.jpg'),gg=new _0x3c66f6[(_0xf8a22d(0x1f3))](0x249f0,0x249f0),gm=new _0x3c66f6[(_0xf8a22d(0x1ce))]({'color':0xffffff,'map':gt,'transparent':!![],'opacity':0.025}),ground=new _0x3c66f6[(_0xf8a22d(0x1d6))](gg,gm);ground['rotation']['x']=-Math['PI']/0x2,ground[_0xf8a22d(0x1fe)][_0xf8a22d(0x1c3)]['repeat']['set'](0x40,0x40),ground[_0xf8a22d(0x1fe)][_0xf8a22d(0x1c3)][_0xf8a22d(0x17c)]=_0x3c66f6[_0xf8a22d(0x1f9)],ground['material'][_0xf8a22d(0x1c3)][_0xf8a22d(0x1a1)]=_0x3c66f6[_0xf8a22d(0x1f9)],ground['material']['map'][_0xf8a22d(0x19b)]=_0x3c66f6[_0xf8a22d(0x1e5)],scene['add'](ground),new GLTFLoader()['load'](_0xf8a22d(0x1db),function(_0x56a6f6){const _0x549eb2=_0xf8a22d;document[_0x549eb2(0x18c)]('mousedown',function(_0x2784a0){const _0x5b80e9=_0x549eb2;switch(_0x2784a0[_0x5b80e9(0x18d)]){case 0x1:!flightList[0x0][_0x5b80e9(0x18f)]&&(_0x2784a0[_0x5b80e9(0x191)]<_0x2784a0[_0x5b80e9(0x1b3)][_0x5b80e9(0x1df)]*0.5?_0x2784a0['clientX']-_0x2784a0[_0x5b80e9(0x1b3)]['clientWidth']*0.5>-0x7b?flightList[0x0][_0x5b80e9(0x1a4)]='<<':flightList[0x0][_0x5b80e9(0x1a4)]='<':_0x2784a0[_0x5b80e9(0x191)]-_0x2784a0[_0x5b80e9(0x1b3)][_0x5b80e9(0x1df)]*0.5<0x7b?flightList[0x0][_0x5b80e9(0x1a4)]='>>':flightList[0x0][_0x5b80e9(0x1a4)]='>');break;case 0x2:bullet(0x0),flightList[0x0][_0x5b80e9(0x18b)]=setInterval(function(){bullet(0x0);},0x32);break;case 0x3:bullet(0x0),flightList[0x0][_0x5b80e9(0x18b)]=setInterval(function(){bullet(0x0);},0x32);break;}}),document[_0x549eb2(0x18c)](_0x549eb2(0x184),function(_0x27ded3){const _0x257e1d=_0x549eb2;switch(_0x27ded3[_0x257e1d(0x18d)]){case 0x1:!flightList[0x0][_0x257e1d(0x18f)]&&(flightList[0x0][_0x257e1d(0x1a4)]='|');break;case 0x2:bulletStop(0x0);break;case 0x3:bulletStop(0x0);break;}}),document[_0x549eb2(0x18c)](_0x549eb2(0x1c8),function(_0x56e50c){const _0x3c1ef9=_0x549eb2;_0x56e50c[_0x3c1ef9(0x1b2)]();}),document[_0x549eb2(0x18c)](_0x549eb2(0x1da),function(_0xd9e6f5){const _0x4248ba=_0x549eb2;switch(_0xd9e6f5[_0x4248ba(0x1d5)]){case 0x9:_0xd9e6f5[_0x4248ba(0x1b2)](),document['querySelector'](_0x4248ba(0x1a6))['style'][_0x4248ba(0x1ae)]=_0x4248ba(0x1f5),document[_0x4248ba(0x1f2)](_0x4248ba(0x19e))[_0x4248ba(0x1d4)][_0x4248ba(0x1ae)]='block',document[_0x4248ba(0x1f2)]('div#tab-text')[_0x4248ba(0x1d4)][_0x4248ba(0x1ae)]=_0x4248ba(0x19c);break;}}),document[_0x549eb2(0x18c)](_0x549eb2(0x187),function(_0x4da73a){const _0x146148=_0x549eb2;switch(_0x4da73a[_0x146148(0x1d5)]){case 0x9:_0x4da73a[_0x146148(0x1b2)](),document[_0x146148(0x1f2)]('#table')[_0x146148(0x1d4)][_0x146148(0x1ae)]='none',document[_0x146148(0x1f2)]('#table-head')[_0x146148(0x1d4)][_0x146148(0x1ae)]=_0x146148(0x19c),document[_0x146148(0x1f2)](_0x146148(0x198))[_0x146148(0x1d4)][_0x146148(0x1ae)]='block';break;}}),setInterval(function(){const _0x1e04a8=_0x549eb2;let _0x23aa9e=[];ctx['clearRect'](0x0,0x0,0x7d,0x7d);for(let _0x8d2d17=0x0;_0x8d2d17<flightList[_0x1e04a8(0x185)];_0x8d2d17++){let _0x480939=scene[_0x1e04a8(0x1dd)](flightList[_0x8d2d17][_0x1e04a8(0x1a8)]),_0x45a3db=[Math[_0x1e04a8(0x1c9)](_0x480939[_0x1e04a8(0x1b5)]['x']/0x50)+62.5,Math[_0x1e04a8(0x1c9)](_0x480939[_0x1e04a8(0x1b5)]['z']/0x50)+62.5];ctx[_0x1e04a8(0x19f)]=_0x8d2d17==0x0?_0x1e04a8(0x1c0):_0x1e04a8(0x1a2),ctx['strokeStyle']=_0x8d2d17==0x0?_0x1e04a8(0x1c0):_0x1e04a8(0x1a2),ctx[_0x1e04a8(0x1ef)](),ctx[_0x1e04a8(0x1e3)](_0x45a3db[0x0],_0x45a3db[0x1],0x3,0x0,0x2*Math['PI']),ctx[_0x1e04a8(0x1c5)](),ctx[_0x1e04a8(0x17e)](),flightList[_0x8d2d17][_0x1e04a8(0x1c7)]=flightList[_0x8d2d17]['hit']-flightList[_0x8d2d17][_0x1e04a8(0x1ca)],_0x23aa9e[_0x23aa9e[_0x1e04a8(0x185)]]=flightList[_0x8d2d17];}_0x23aa9e[_0x1e04a8(0x200)](function(_0x90d9bc,_0xda1528){const _0xa2c7ab=_0x1e04a8;return _0xda1528[_0xa2c7ab(0x1c7)]-_0x90d9bc[_0xa2c7ab(0x1c7)];}),document[_0x1e04a8(0x1f2)](_0x1e04a8(0x1a6))['innerHTML']='';for(let _0x4f11ca=0x0;_0x4f11ca<_0x23aa9e['length'];_0x4f11ca++){let _0x5da4a6=_0x4f11ca==0x0?_0x1e04a8(0x1bd):_0x1e04a8(0x179);document['querySelector'](_0x1e04a8(0x1a6))[_0x1e04a8(0x1d3)]+=_0x1e04a8(0x1bb)+_0x5da4a6+'\x22>'+_0x23aa9e[_0x4f11ca]['name']+'</span><span\x20style=\x22position:relative;float:right;right:11px;top:5px;\x22>'+_0x23aa9e[_0x4f11ca][_0x1e04a8(0x1cb)]+'/'+_0x23aa9e[_0x4f11ca][_0x1e04a8(0x1ca)]+_0x1e04a8(0x1c4)+_0x23aa9e[_0x4f11ca][_0x1e04a8(0x1c7)]+_0x1e04a8(0x1b7);}countdown>0x0&&(countdown-=0.5,printCountDown());let _0xdf6ce9=flightList[0x0][_0x1e04a8(0x189)]*(0.1+0.1)<0x4b?'yellow':_0x1e04a8(0x1c0);document[_0x1e04a8(0x1f2)](_0x1e04a8(0x1ac))[_0x1e04a8(0x1d4)][_0x1e04a8(0x17d)]='linear-gradient(to\x20top,\x20'+_0xdf6ce9+'\x20'+flightList[0x0][_0x1e04a8(0x189)]*(0.1+0.1)+_0x1e04a8(0x1bf)+flightList[0x0][_0x1e04a8(0x189)]*(0.1+0.1)+'%)';},0x1f4),flightModel=_0x56a6f6[_0x549eb2(0x188)],flightModel[_0x549eb2(0x17b)](_0x3d36a8=>{const _0x1ae3bf=_0x549eb2;_0x3d36a8[_0x1ae3bf(0x1fe)]&&(_0x3d36a8[_0x1ae3bf(0x1fe)]['color']['r']=0x0,_0x3d36a8[_0x1ae3bf(0x1fe)]['color']['g']=0x0,_0x3d36a8[_0x1ae3bf(0x1fe)][_0x1ae3bf(0x1dc)]['b']=0x0);});for(let _0x34c5d2=0x0;_0x34c5d2<0x5;_0x34c5d2++){flightList[flightList[_0x549eb2(0x185)]]={'name':_0x549eb2(0x1b9)+_0x34c5d2,'rotate':'|','autopilot':![],'dt':[],'dtInterval':'','bullet':0x0,'hit':0x0,'gothit':0x0,'average':0x0,'hararet':0x0,'hararetInterval':'','force':0x0};let _0x3563f0=flightModel[_0x549eb2(0x17a)]();_0x3563f0[_0x549eb2(0x1a8)]=_0x549eb2(0x1b9)+_0x34c5d2,_0x3563f0[_0x549eb2(0x1b5)][_0x549eb2(0x1e0)](Math['round'](Math['random']()*0x2328)-0x1194,0x5,Math[_0x549eb2(0x199)](Math[_0x549eb2(0x17f)]()*0x2328)-0x1194),_0x3563f0[_0x549eb2(0x1ec)]['y']=Math[_0x549eb2(0x17f)]()*Math['PI']*0x2,scene[_0x549eb2(0x190)](_0x3563f0);}var _0x1e2bef=new _0x3c66f6[(_0x549eb2(0x1d6))](geometry,material);_0x1e2bef['name']=_0x549eb2(0x1f4),_0x1e2bef['visible']=![],scene['add'](_0x1e2bef),document[_0x549eb2(0x1f2)](_0x549eb2(0x1cd))[_0x549eb2(0x1d4)][_0x549eb2(0x1ae)]=_0x549eb2(0x1f5);},function(_0x1112fc){const _0x4266bd=_0xf8a22d;let _0x203609=Math[_0x4266bd(0x195)](_0x1112fc['loaded']/_0x1112fc[_0x4266bd(0x1a9)]*0x64);document['querySelector'](_0x4266bd(0x1f7))[_0x4266bd(0x1d3)]='\x20'+_0x203609+_0x4266bd(0x1a7)+Math['ceil'](0x20*_0x203609/0x64)+_0x4266bd(0x1ba);}),window[_0xf8a22d(0x1e6)]=function(){const _0x3f53e3=_0xf8a22d;document[_0x3f53e3(0x1f2)](_0x3f53e3(0x1cd))[_0x3f53e3(0x1d4)][_0x3f53e3(0x1ae)]='none',setTimeout(function(){const _0x394a67=_0x3f53e3;document[_0x394a67(0x1fa)]['appendChild'](renderer[_0x394a67(0x1f1)]),document[_0x394a67(0x1f2)](_0x394a67(0x1bc))[_0x394a67(0x1d4)]['display']=_0x394a67(0x19c),document[_0x394a67(0x1f2)]('canvas#map')[_0x394a67(0x1d4)][_0x394a67(0x1ae)]=_0x394a67(0x1f5),document['querySelector'](_0x394a67(0x186))[_0x394a67(0x1d4)]['display']=_0x394a67(0x1f5),document[_0x394a67(0x1f2)]('div#game')[_0x394a67(0x1d4)][_0x394a67(0x1ae)]=_0x394a67(0x1f5),document[_0x394a67(0x1f2)](_0x394a67(0x198))[_0x394a67(0x1d4)]['display']='block',animate();},0x1f4);};function animate(){const _0x90b7db=_0xf8a22d;requestAnimationFrame(animate);if(!continueGame)return;for(let _0x2b9af3=0x0;_0x2b9af3<flightList[_0x90b7db(0x185)];_0x2b9af3++){let _0x5cef67=scene['getObjectByName'](flightList[_0x2b9af3][_0x90b7db(0x1a8)]);if(flightList[_0x2b9af3]['rotate']==='<')_0x5cef67[_0x90b7db(0x1ec)]['z']-=Math['PI']/0x24,_0x5cef67[_0x90b7db(0x1ec)]['z']<=-Math['PI']/2.6&&(_0x5cef67['rotation']['z']=-Math['PI']/2.6,_0x5cef67[_0x90b7db(0x1ec)]['y']+=Math['PI']/0x10e,flightList[_0x2b9af3][_0x90b7db(0x189)]++);else{if(flightList[_0x2b9af3]['rotate']==='>')_0x5cef67[_0x90b7db(0x1ec)]['z']+=Math['PI']/0x24,_0x5cef67[_0x90b7db(0x1ec)]['z']>=Math['PI']/2.6&&(_0x5cef67[_0x90b7db(0x1ec)]['z']=Math['PI']/2.6,_0x5cef67[_0x90b7db(0x1ec)]['y']-=Math['PI']/0x10e,flightList[_0x2b9af3][_0x90b7db(0x189)]++);else{if(flightList[_0x2b9af3][_0x90b7db(0x1a4)]==='<<'&&_0x5cef67[_0x90b7db(0x1ec)]['z']==0x0)_0x5cef67['rotation']['y']+=Math['PI']/0x438,flightList[_0x2b9af3][_0x90b7db(0x189)]--;else{if(flightList[_0x2b9af3]['rotate']==='>>'&&_0x5cef67[_0x90b7db(0x1ec)]['z']==0x0)_0x5cef67['rotation']['y']-=Math['PI']/0x438,flightList[_0x2b9af3][_0x90b7db(0x189)]--;else{if(Math[_0x90b7db(0x1aa)](_0x5cef67['rotation']['z'])<Math['PI']/0x24)_0x5cef67['rotation']['z']=0x0;else{if(_0x5cef67[_0x90b7db(0x1ec)]['z']>0x0)_0x5cef67[_0x90b7db(0x1ec)]['z']-=Math['PI']/0x24;else _0x5cef67['rotation']['z']<0x0&&(_0x5cef67[_0x90b7db(0x1ec)]['z']+=Math['PI']/0x24);}flightList[_0x2b9af3]['force']--;}}}}if(flightList[_0x2b9af3]['force']<0x0)flightList[_0x2b9af3][_0x90b7db(0x189)]=0x0;else flightList[_0x2b9af3]['force']>0x1f4&&(flightList[_0x2b9af3]['force']=0x1f4,!flightList[_0x2b9af3]['autopilot']&&(flightList[_0x2b9af3][_0x90b7db(0x1a4)]='|'),document[_0x90b7db(0x1f2)](_0x90b7db(0x1ac))[_0x90b7db(0x1d4)]['background']=_0x90b7db(0x1cc));let _0x9cb635=-_0x5cef67[_0x90b7db(0x1ec)]['y']*(0xb4/Math['PI'])%0x168;_0x9cb635=_0x9cb635<0x0?0x168+_0x9cb635:_0x9cb635;if(_0x5cef67[_0x90b7db(0x1b5)]['z']>=0x1388)flightList[_0x2b9af3]['autopilot']==![]&&(flightList[_0x2b9af3][_0x90b7db(0x18f)]=!![],_0x9cb635>=0x0&&_0x9cb635<=0x5a?flightList[_0x2b9af3][_0x90b7db(0x1a4)]='>':flightList[_0x2b9af3][_0x90b7db(0x1a4)]='<');else{if(_0x5cef67[_0x90b7db(0x1b5)]['z']<=-0x1388)flightList[_0x2b9af3][_0x90b7db(0x18f)]==![]&&(flightList[_0x2b9af3][_0x90b7db(0x18f)]=!![],_0x9cb635>=0xb4&&_0x9cb635<=0x10e?flightList[_0x2b9af3]['rotate']='>':flightList[_0x2b9af3][_0x90b7db(0x1a4)]='<');else{if(_0x5cef67[_0x90b7db(0x1b5)]['x']>=0x1388)flightList[_0x2b9af3][_0x90b7db(0x18f)]==![]&&(flightList[_0x2b9af3][_0x90b7db(0x18f)]=!![],_0x9cb635>=0x10e&&_0x9cb635<=0x168?flightList[_0x2b9af3]['rotate']='>':flightList[_0x2b9af3][_0x90b7db(0x1a4)]='<');else{if(_0x5cef67[_0x90b7db(0x1b5)]['x']<=-0x1388)flightList[_0x2b9af3][_0x90b7db(0x18f)]==![]&&(flightList[_0x2b9af3][_0x90b7db(0x18f)]=!![],_0x9cb635>=0x5a&&_0x9cb635<=0xb4?flightList[_0x2b9af3]['rotate']='>':flightList[_0x2b9af3][_0x90b7db(0x1a4)]='<');else flightList[_0x2b9af3][_0x90b7db(0x18f)]==!![]&&(flightList[_0x2b9af3]['rotate']='|',flightList[_0x2b9af3][_0x90b7db(0x18f)]=![]);}}}_0x5cef67[_0x90b7db(0x1fd)](0x5);_0x2b9af3==0x0&&(camera[_0x90b7db(0x1b5)]['set'](_0x5cef67[_0x90b7db(0x1b5)]['x'],_0x5cef67['position']['y'],_0x5cef67[_0x90b7db(0x1b5)]['z']),camera[_0x90b7db(0x1ec)]['y']=_0x5cef67[_0x90b7db(0x1ec)]['y']+Math['PI'],camera[_0x90b7db(0x1fd)](0x18),camera[_0x90b7db(0x1d1)](3.8));for(let _0x5e4462=0x0;_0x5e4462<flightList[_0x2b9af3]['dt']['length'];_0x5e4462++){if(flightList[_0x2b9af3]['dt'][_0x5e4462]['moveCount']==0x0){let _0x42e8c7=scene[_0x90b7db(0x1dd)]('cylinder')['clone']();_0x42e8c7['position']['set'](_0x5cef67[_0x90b7db(0x1b5)]['x'],_0x5cef67[_0x90b7db(0x1b5)]['y'],_0x5cef67[_0x90b7db(0x1b5)]['z']),_0x42e8c7[_0x90b7db(0x1ec)]['x']=-Math['PI']/0x2,_0x42e8c7['rotation']['z']=_0x5cef67[_0x90b7db(0x1ec)]['y']+[0.0075,0.005,0.0025,0.0025,0.0025,-0.0025,-0.0025,-0.0025,-0.005,-0.0075][Math[_0x90b7db(0x1c9)](Math[_0x90b7db(0x17f)]()*0xa)],_0x42e8c7[_0x90b7db(0x1a8)]=flightList[_0x2b9af3]['dt'][_0x5e4462]['name'],_0x42e8c7[_0x90b7db(0x1d9)]=!![],_0x42e8c7[_0x90b7db(0x1d1)](-0x4b),scene['add'](_0x42e8c7),flightList[_0x2b9af3]['dt'][_0x5e4462][_0x90b7db(0x1be)]+=0x1;}else{flightList[_0x2b9af3]['dt'][_0x5e4462]['moveCount']+=0x1;let _0x22a8d8=scene[_0x90b7db(0x1dd)](flightList[_0x2b9af3]['dt'][_0x5e4462][_0x90b7db(0x1a8)]);_0x22a8d8['translateY'](-0x13);if(flightList[_0x2b9af3]['dt'][_0x5e4462][_0x90b7db(0x1be)]>0xfa)flightList[_0x2b9af3]['dt'][_0x90b7db(0x19d)](_0x5e4462,0x1),scene[_0x90b7db(0x1d0)](_0x22a8d8);else for(let _0x22dbbe=0x0;_0x22dbbe<flightList[_0x90b7db(0x185)];_0x22dbbe++){if(_0x2b9af3==_0x22dbbe||typeof flightList[_0x2b9af3]['dt'][_0x5e4462]==_0x90b7db(0x1b4))continue;let _0x1e7fd7=scene[_0x90b7db(0x1dd)](flightList[_0x2b9af3]['dt'][_0x5e4462]['name']);if(typeof _0x1e7fd7=='undefined')continue;let _0x38ca86=scene[_0x90b7db(0x1dd)](flightList[_0x22dbbe][_0x90b7db(0x1a8)]),_0x350cac=Math[_0x90b7db(0x1a0)](Math[_0x90b7db(0x1fc)](_0x38ca86[_0x90b7db(0x1b5)]['x']-_0x1e7fd7[_0x90b7db(0x1b5)]['x'],0x2)+Math[_0x90b7db(0x1fc)](_0x38ca86[_0x90b7db(0x1b5)]['z']-_0x1e7fd7[_0x90b7db(0x1b5)]['z'],0x2));_0x350cac<=0x7&&(flightList[_0x2b9af3]['hit']+=0x1,flightList[_0x22dbbe][_0x90b7db(0x1ca)]+=0x1,flightList[_0x2b9af3]['dt'][_0x90b7db(0x19d)](_0x5e4462,0x1),scene[_0x90b7db(0x1d0)](_0x1e7fd7),$(_0x90b7db(0x1f6))[_0x90b7db(0x194)](_0x90b7db(0x1dc),_0x2b9af3==0x0?'white':'red'),$('#hit-text')[_0x90b7db(0x194)](_0x90b7db(0x1ae))!=_0x90b7db(0x19c)?$(_0x90b7db(0x1f6))['html'](parseInt($(_0x90b7db(0x1f6))[_0x90b7db(0x181)]())+0x1):$(_0x90b7db(0x1f6))['html']('1'),$('#hit-text')[_0x90b7db(0x192)](),clearTimeout(hitTextTimeout),hitTextTimeout=setTimeout(function(){const _0x2c5474=_0x90b7db;$(_0x2c5474(0x1f6))[_0x2c5474(0x196)]();},0x3e8));}}}}renderer[_0x90b7db(0x1ad)](scene,camera);}