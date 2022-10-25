(function() {
	Math.PIT = Math.PI / 2;
	Math.PIO = Math.PI * 2;

	window.indicOn = true;
	window.drawScreenInd = true;

	const userDevice = window.navigator.userAgent.toLowerCase();
	const typeOfDevice = (((((((userDevice.indexOf("mobile") !== -1) || (userDevice.indexOf("android") !== -1)) || (userDevice.indexOf("ipad") !== -1)) || (userDevice.indexOf("iphone") !== -1)) || (userDevice.indexOf("ipod") !== -1)) || (userDevice.indexOf("kindle") !== -1)) || (userDevice.indexOf("silk/") !== -1)) ? 1 : 0;
	if (typeOfDevice === 1) {
		const metaElement = document.createElement("meta");
		metaElement.name = "viewport";
		metaElement.content = "initial-scale=1.0 maximum-scale=1.0";
		document.getElementsByTagName("head")[0].appendChild(metaElement);
	}
  
	function renderI() {
	    context.font="20px Black Han Sans";
      context.fillStyle = "#fff";
      if(window.indicOn === true) {
        context.fillText(window.itog, ((window.XX / parScaling) - 5) * parScaling + 189/2 * parScaling, ((window.YY / parScaling) + 69) * parScaling + 18);
      }
	}

	window.servers = {};

	(async function serversJSON() {
		const res = await fetch("./json/servers.json");
		const servers = await res.json();

		return servers;
	})().then(res => {
		const servers = res.filter(server => server[0] !== "???");

		for(let i = 0; i < servers.length; i++) {
			if(i < servers.length - 1) {
				if(servers[i][4] === servers[i + 1][4]) {
					servers[i][4] += "1";
					servers[i + 1][4] += "2";
				}
			}
		}
		servers.forEach(server => window.servers[server[4]] = `wss://${server[1]}/`);
	})
	
	let canvasM;
	let var1, var2, var3, var4, var5, var6, var7, var8, var9, var10, var11, var12;
	let context;
	let var13 = 0;
	let var14 = 0;
	let parScaling = 1;
	let p100 = 100;
	let var15 = 1;
	let one1 = 1;
	const graphicOptions = (function() {
		let Wvvnm;
		let MwN = 0;
		let mWmmM = 0;
		let MNVVv = 0;
		let VvVmm = 0;
		const MMMMM = new window.Array(5);
		const windowOptions = {
			one2: one1,
			size: window.innerWidth,
			parTrue: true,
			devicePixelRatio1: window.devicePixelRatio || 1,
			devicePixelRatio2: window.devicePixelRatio || 1,
			WnWVV: 1,
			MNmVM: 0,
			ratio: 0,
			NMn: 1,
			vWnwM: 1,
			canvas: "can",
			body: "bod"
		};

		function vMnWv(VvW, one2, canvas, body, height, parUndefined, parTrue) {
			VwVMv(VvW);
			if (one2 !== undefined) windowOptions.one2 = one2;
			if (canvas !== undefined) windowOptions.canvas = canvas;
			if (body !== undefined) windowOptions.body = body;
			if (height !== undefined) windowOptions.size = height;
			if (parUndefined !== undefined) windowOptions.ratio = parUndefined;
			if (parTrue !== undefined) windowOptions.parTrue = parTrue;
			canvasM = document.getElementById(windowOptions.canvas);
			context = canvasM.getContext('2d');
			windowOptions.WnWVV = ((((context.vWmvm || context.wVVVv) || context.wvwVv) || context.WNVMN) || context.NNwmw) || 1;
			wVnMw();
			canvasM.oncontextmenu = function() {
				return false;
			};
			const bodyWithOpt = document.getElementById(windowOptions.body);
			bodyWithOpt.ondragstart = () => false;
			bodyWithOpt.ondrop = () => false;
			bodyWithOpt.onresize = mNwnw;
			mNwnw();
			WWNnn();
		};

		function mNwnw() {
			let parUndefined, vM, wW;
			if (windowOptions.one2 === 0) {
				if (window.innerWidth > window.innerHeight) {
					parUndefined = window.innerHeight / window.innerWidth;
					vM = windowOptions.size;
					wW = Math.floor(vM * parUndefined);
				} else {
					parUndefined = window.innerWidth / window.innerHeight;
					wW = windowOptions.size;
					vM = Math.floor(wW * parUndefined);
				}
			} else {
				vM = window.innerWidth;
				wW = window.innerHeight;
			}
			var1 = vM;
			var2 = wW;
			var3 = Math.floor(var1 / 2);
			var4 = Math.floor(var2 / 2);
			var5 = Math.floor(var1 / 4);
			var6 = Math.floor(var2 / 4);
			windowOptions.NMn = var1 / window.innerWidth;
			windowOptions.vWnwM = var2 / window.innerHeight;
			parUndefined = windowOptions.devicePixelRatio2 / windowOptions.WnWVV;
			if (windowOptions.ratio !== 0) parUndefined *= windowOptions.ratio;
			canvasM.width = var1 * parUndefined;
			canvasM.height = var2 * parUndefined;
			if (windowOptions.one2 === one1) {
				parScaling = Math.max(wW / ((windowOptions.size * 11) / 16), vM / windowOptions.size);
				canvasM.style.width = vM + "px";
				canvasM.style.height = wW + "px";
			}
			var7 = var1 / parScaling;
			var8 = var2 / parScaling;
			var9 = var3 / parScaling;
			var10 = var4 / parScaling;
			var11 = var5 / parScaling;
			var12 = var6 / parScaling;
			context.scale(parUndefined, parUndefined);
			MmWVn(context, windowOptions.parTrue);
			Wvvnm.update();
		};

		function wVnMw() { // Как я тут заменил вары на лет и конст. У меня чуток лагать начало. Но всё работает.
			let nNWMm = 0;
			const prefix = ['ms', 'moz', 'webkit', 'o'];
			for (let i = 0;(i < prefix.length) && !window.requestAnimationFrame; ++i) {
				window.requestAnimationFrame = window[prefix[i] + 'RequestAnimationFrame'];
				window.cancelAnimationFrame = window[prefix[i] + 'CancelAnimationFrame'] || window[prefix[i] + 'CancelRequestAnimationFrame'];
			}
			if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, WNwvn) {
				let rAFTime = (new window.Date).getTime();
				let WMMmm = Math.max(0, 16 - (rAFTime - nNWMm));
				const WW = window.setTimeout(function() {
					callback(rAFTime + WMMmm);
				}, WMMmm);
				nNWMm = rAFTime + WMMmm;
				return WW;
			};
			if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(WW) {
				window.clearTimeout(WW);
			};
		};

		function VMMNW(WmWNW) {
			if (((WmWNW === 1) || (WmWNW === 2)) || (WmWNW === 3)) {
				if (WmWNW === windowOptions.MNmVM) {
					WmWNW = 0;
					windowOptions.devicePixelRatio2 = windowOptions.devicePixelRatio1 / var15;
				} else windowOptions.devicePixelRatio2 = windowOptions.devicePixelRatio1 / WmWNW;
				windowOptions.MNmVM = WmWNW;
				mNwnw();
			}
		};

		function vNMWw() {
			mWmmM++;
			MwN += var13;
			if (MwN >= 1000) {
				MNVVv = (1000 * mWmmM) / MwN;
				MMMMM[VvVmm] = MNVVv;
				VvVmm++;
				if (VvVmm === 5) {
					let MmnVn = 0;
					for (let i = 0; i < 5; i++) MmnVn += MMMMM[i];
					MmnVn = MmnVn / 5;
					const parUndefined = windowOptions.devicePixelRatio1 / windowOptions.WnWVV;
					if (((windowOptions.MNmVM === 0) && (parUndefined === 2)) && (Math.abs(p100 - MmnVn) < 5)) {
						if ((MmnVn < 22) && (p100 < 22)) {
							if (var15 === 1) {
								var15 = 2;
								windowOptions.devicePixelRatio2 = windowOptions.devicePixelRatio1 / 2;
								mNwnw();
							} else if (var15 === 2) {
								var15 = 3;
								windowOptions.devicePixelRatio2 = windowOptions.devicePixelRatio1 / 3;
								mNwnw();
							}
						} else if ((windowOptions.devicePixelRatio1 > windowOptions.devicePixelRatio2) && ((MmnVn + p100) > 119)) {
							if (var15 === 2) {
								var15 = 1;
								windowOptions.devicePixelRatio2 = windowOptions.devicePixelRatio1;
								mNwnw();
							} else if (var15 === 3) {
								var15 = 2;
								windowOptions.devicePixelRatio2 = windowOptions.devicePixelRatio1 / 2;
								mNwnw();
							}
						}
					}
					p100 = MmnVn;
					VvVmm = 0;
				}
				MwN = 0;
				mWmmM = 0;
			}
		};

		function WWNnn(VwNmn) {
			window.requestAnimationFrame(WWNnn);
			if (VwNmn !== undefined) {
				var13 = VwNmn - var14;
				var14 = VwNmn;
			}
			vNMWw();
			Wvvnm.nv();
		};

		function MmWVn(context, lParTrue) {
			if (lParTrue === false) document.getElementById(windowOptions.canvas).style.nNnMn = "pixelated";
			else document.getElementById(windowOptions.canvas).style.nNnMn = "auto";
			context.imageSmoothingEnabled = lParTrue;
		};

		function MMMvW(nWnvw) {
			const image = new window.Image;
			image.src = nWnvw.toDataURL("image/png");
			image.width = nWnvw.width;
			image.height = nWnvw.height;
			return image;
		};

		function vMMWv(context, nWmwm, NvVmW, vNnNN, vNMVW) {
			context.beginPath();
			context.moveTo(nWmwm * parScaling, NvVmW * parScaling);
			context.lineTo(vNnNN * parScaling, vNMVW * parScaling);
		};

		function MvWNN(context, mVNvW, vMwVM, vM) {
			if (mVNvW !== undefined) {
				context.fillStyle = mVNvW;
				context.fill();
			}
			if (vMwVM !== undefined) {
				if (vM !== undefined) context.lineWidth = vM;
				context.strokeStyle = vMwVM;
				context.stroke();
			}
		};

		function vVNVM(context, nI, vV, Nmv, vwW) {
			context.beginPath();
			context.rect(nI * parScaling, vV * parScaling, Nmv * parScaling, vwW * parScaling);
		};

		function vMMVN() {
			let MVNwV = "#";
			for (let i = 0; i < 3; i++) { // mN
				const V = Math.floor(Math.random() * 256);
				MVNwV += (V < 16) ? ("0" + V.toString(16)) : V.toString(16);
			}
			return MVNwV;
		};

		function VMWMV(VVnVV, lParTrue) {
			const length = VVnVV.length; // VmV
			const MmnMV = Math.floor(lParTrue * length);
			const vnVmm = VVnVV[Math.max(0, MmnMV - 1)];
			const MvMMV = VVnVV[Math.min(MmnMV, length - 1)];
			lParTrue = (lParTrue % (1 / length)) * length;
			let MVNwV = "#";
			for (let i = 0; i < 3; i++) {
				const MnM = Math.floor(((MvMMV[i] - vnVmm[i]) * lParTrue) + vnVmm[i]);
				MVNwV += (MnM < 16) ? ("0" + MnM.toString(16)) : MnM.toString(16);
			}
			return MVNwV;
		};

		function mMn(context, nI, vV, Nmv, vwW, MVNwV) {
			context.beginPath();
			context.fillStyle = MVNwV;
			context.fillRect(nI * parScaling, vV * parScaling, Nmv * parScaling, vwW * parScaling);
		};

		function MNmwv(context, nI, vV, V) {
			context.beginPath();
			context.arc(nI * parScaling, vV * parScaling, V * parScaling, 0, Math.PIO);
		};

		function WnMNN(context, nI, vV, V, NMMvN, nMnmM) {
			context.beginPath();
			context.arc(nI * parScaling, vV * parScaling, V * parScaling, NMMvN, nMnmM);
		};

		function VwVMv(VvW) {
			console.log(Wvvnm);
			Wvvnm = VvW;
		};

		function MwWwW() {
			this.v = 1;
			this.wMv = this.width / 2;
			this.nNn = this.height / 2;
		};

		function VmwMN() {
			this.v = 0;
		};

		function createMenuImg(src, image) {
			if ((image !== undefined) && (image.v === 2)) return image;
			image = new window.Image;
			image.v = 2;
			image.onload = MwWwW;
			image.onerror = VmwMN;
			image.src = src;
			return image;
		};

		function MmM(mNmVN, NwMMv, Nmv) {
			const MnM = Math.max(1, Math.floor(60 / p100));
			for (let i = 0; i < MnM; i++) mNmVN = vnw.MmM(mNmVN, NwMMv, Nmv);
			return mNmVN;
		};

		function VvWmV() {
			const VvnWM = document.getElementById("bod");
			if (VvnWM.requestFullscreen) VvnWM.requestFullscreen();
			else if (VvnWM.msRequestFullscreen) VvnWM.msRequestFullscreen();
			else if (VvnWM.WvWMM) VvnWM.WvWMM();
			else if (VvnWM.webkitRequestFullscreen) VvnWM.webkitRequestFullscreen();
		};

		function MVnnM() {
			if (document.exitFullscreen) document.exitFullscreen();
			else if (document.msExitFullscreen) document.msExitFullscreen();
			else if (document.mozCancelFullscreen) document.WwWwv();
			else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
		};

		function nNNWV(src) {
			return {
				src: src,
				image: {
					v: 0
				}
			};
		};

		function NmwVW(src) {
			const mwm = nNNWV(src);
			mwm.image = graphicOptions.createMenuImg(mwm.src, mwm.image);
			return mwm;
		};

		function drawMapStructures(mwm, nI, vV, angle, mvmWN, wMMmv, VM) {
			const image = mwm.image;
			if (image.v !== 1) {
				mwm.image = graphicOptions.createMenuImg(mwm.src, mwm.image);
				return;
			}
			VM *= parScaling;
			nI *= parScaling;
			vV *= parScaling;
			const Nmv = image.wMv * VM;
			const vwW = image.nNn * VM;
			const vNmWw = (-Nmv / 2) + (mvmWN * VM);
			const NnmwV = (-vwW / 2) + (wMMmv * VM);
			if ((((((nI + vNmWw) + Nmv) < 0) || (((vV + NnmwV) + vwW) < 0)) || (((nI - Nmv) - var1) > 0)) || (((vV - vwW) - var2) > 0)) return;
			context.save();
			context.translate(nI, vV);
			context.rotate(angle);
			context.drawImage(image, vNmWw, NnmwV, Nmv, vwW);
			context.restore();
		};

		function drawMeleeInstruments(mwm, nI, vV, angle, mvmWN, wMMmv, VM, wVMMv, VWNvN, nvwvW) {
			const image = mwm.image;
			if (image.v !== 1) {
				mwm.image = graphicOptions.createMenuImg(mwm.src, mwm.image);
				return;
			}
			VM *= parScaling;
			const Nmv = image.wMv * VM;
			const vwW = image.nNn * VM;
			context.save();
			context.translate(nI * parScaling, vV * parScaling);
			context.rotate(angle);
			context.translate(mvmWN * VM, wMMmv * VM);
			context.rotate(wVMMv);
			context.drawImage(image, (-Nmv / 2) + (VWNvN * VM), (-vwW / 2) + (nvwvW * VM), Nmv, vwW);
			context.restore();
		};


		function WVNmv(context, vwV, m, WMvVw, MnM, V) {
			context.beginPath();
			context.moveTo(vwV + V, m);
			context.arcTo(vwV + WMvVw, m, vwV + WMvVw, m + MnM, V);
			context.arcTo(vwV + WMvVw, m + MnM, vwV, m + MnM, V);
			context.arcTo(vwV, m + MnM, vwV, m, V);
			context.arcTo(vwV, m, vwV + WMvVw, m, V);
			context.closePath();
		};
		return {
			options: windowOptions,
			vMnWv: vMnWv,
			MmWVn: MmWVn,
			VMMNW: VMMNW,
			MMMvW: MMMvW,
			rect: vVNVM,
			fillRect: mMn,
			MNmwv: MNmwv,
			WVNmv: WVNmv,
			vMMVN: vMMVN,
			VMWMV: VMWMV,
			line: vMMWv,
			MvWNN: MvWNN,
			VwVMv: VwVMv,
			createMenuImg: createMenuImg,
			MmM: MmM,
			VvWmV: VvWmV,
			MVnnM: MVnnM,
			drawMapStructures: drawMapStructures,
			drawMeleeInstruments: drawMeleeInstruments,
			nNNWV: nNNWV,
			NmwVW: NmwVW
		};
	})();
	const mnW = (function() {
		function angle(wVWvw, mVWvW, VNMVV, nVmVn) {
			// console.log(wVWvw, mVWvW, VNMVV, nVmVn);
			const mNMwW = nVmVn - mVWvW;
			const MMVnn = VNMVV - wVWvw;
			return Math.atan2(mNMwW, MMVnn);
		};

		function WNw(wVWvw, mVWvW, VNMVV, nVmVn) {
			const nI = VNMVV - wVWvw;
			const vV = nVmVn - mVWvW;
			return Math.sqrt((nI * nI) + (vV * vV));
		};

		function nmw(wVWvw, mVWvW, VNMVV, nVmVn) {
			const nI = VNMVV - wVWvw;
			const vV = nVmVn - mVWvW;
			return (nI * nI) + (vV * vV);
		};
		return {
			angle: angle,
			WNw: WNw,
			nmw: nmw
		};
	})();
	const vnw = (function() {
		const mMv = {
			vwMMw: function(Vnw, vnmVM, NNV) {
				return Math.min((NNV * Vnw) + vnmVM(Vnw), 1);
			},
			mmNMN: function(Vnw) {
				return Vnw;
			},
			nVw: function(Vnw) {
				return Vnw * (2 - Vnw);
			},
			MwmWV: function(Vnw) {
				return (((--Vnw) * Vnw) * Vnw) + 1;
			},
			nwW: function(Vnw) {
				return (Vnw < 0.5) ? ((2 * Vnw) * Vnw) : (-1 + ((4 - (2 * Vnw)) * Vnw));
			},
			VMN: function(Vnw) {
				return Vnw * Vnw;
			},
			wWvVM: function(Vnw) {
				return (Vnw < 0.5) ? (((4 * Vnw) * Vnw) * Vnw) : ((((Vnw - 1) * ((2 * Vnw) - 2)) * ((2 * Vnw) - 2)) + 1);
			},
			mNWVN: function(Vnw) {
				return (Vnw * Vnw) * Vnw;
			},
			nnMvm: function(Vnw) {
				return (Vnw < 0.5) ? ((((8 * Vnw) * Vnw) * Vnw) * Vnw) : (1 - ((((8 * (--Vnw)) * Vnw) * Vnw) * Vnw));
			},
			wnvnv: function(Vnw) {
				return ((Vnw * Vnw) * Vnw) * Vnw;
			},
			VmN: function(Vnw) {
				return 1 - ((((--Vnw) * Vnw) * Vnw) * Vnw);
			},
			NvmNN: function(Vnw) {
				return 1 + (((((--Vnw) * Vnw) * Vnw) * Vnw) * Vnw);
			}
		};

		function vwvnN(mVn) {
			if (mVn >= 20000) mVn = (mVn - 20000) * 1000;
			else if (mVn >= 10000) mVn = (mVn - 10000) * 100;
			return mVn;
		};

		function WWwMn(mVn) {
			if (mVn >= 10000) {
				const VWn = Math.floor(Math.log10(mVn)) - 2;
				const wmNNV = Math.max(0, 3 - VWn);
				let W = Math.floor(mVn / 1000).toString();
				if (wmNNV) {
				  let VVMNN = 0;
					W += "." + ((mVn % 1000) / 1000).toString().substring(2).substring(0, wmNNV);
					for (let i = W.length - 1; i > 0; i--) { //mN
						if (W[i] != '0') break;
						else VVMNN++
					}
					W = W.substring(0, W.length - VVMNN);
					if (W[W.length - 1] === '.') W = W.substring(0, W.length - 1);
				}
				W += "k";
				return W;
			} else return mVn.toString();
		};

		function MmM(mNmVN, NwMMv, Nmv) {
			return ((1 - Nmv) * mNmVN) + (NwMMv * Nmv);
		};

		function vmnmW(lParTrue) {
			const mVn = lParTrue + "";
			let W = "";
			const length = mVn.length; // VmV
			for (let i = length - 1, NM = 0; i >= 0; i--, NM++) { //mN
				let MnM = mVn[i];
				if ((NM > 2) && (MnM !== '-')) {
					NM = 0;
					W = "," + W;
				}
				W = MnM + W;
			}
			return W;
		};

		function vNmNW(NnWnV, vMm) {
			vwV = [];
			vwV.push.apply(vwV, NnWnV);
			const wnWVw = [];
			while (vwV.length > 0) {
				const V = Math.floor(vMm() * vwV.length);
				wnWVw.push(vwV[V]);
				vwV.splice(V, 1);
			}
			return wnWVw;
		};

		function vNVMM(NMMvN, nMnmM) {
			return nMnmM + (Math.round((NMMvN - nMnmM) / Math.PIO) * Math.PIO);
		};
		return {
			mMv: mMv,
			MmM: MmM,
			vwvnN: vwvnN,
			WWwMn: WWwMn,
			vmnmW: vmnmW,
			vNmNW: vNmNW,
			vNVMM: vNVMM
		};
	})();
	const nmn = (function() {
		function wnvVN(vN, NVM) {
			if (NVM !== nmn.mnwNM) nmn.state = NVM;
			nmn.mvN = Math.floor(vN.clientX * graphicOptions.options.NMn);
			nmn.wWM = Math.floor(vN.clientY * graphicOptions.options.vWnwM);
			nmn.x = Math.floor(nmn.mvN / parScaling);
			nmn.y = Math.floor(nmn.wWM / parScaling);
		};

		function wwNNW() {
			nmn.angle = mnW.angle(1, 0, nmn.x - var9, nmn.y - var10);
		};

		function NwMNn() {
			nmn.WNw = mnW.WNw(var9, var10, nmn.x, nmn.y);
		};

		function vWvWv(vN, NVM) {
			wnvVN(vN, NVM);
			wwNNW();
		};

		function WWn(vN, NVM) {
			wnvVN(vN, NVM);
			wwNNW();
			NwMNn();
		};

		function wVW(vN, vWmwm, NwMVn) {
			vN.clientX = NwMVn.clientX;
			vN.clientY = NwMVn.clientY;
			vN.altKey = vWmwm.altKey;
			vN.ctrlKey = vWmwm.ctrlKey;
		};

		function wMVVN() {
			this.clientX = 0;
			this.clientY = 0;
			this.altKey = false;
			this.ctrlKey = false;
			this.preventDefault = function() {};
		};
		return {
			mnwNM: 0,
			MvwwV: 1,
			vvVwN: 2,
			state: 0,
			wnvVN: wnvVN,
			wwNNW: wwNNW,
			NwMNn: NwMNn,
			vWvWv: vWvWv,
			WWn: WWn,
			x: 0,
			y: 0,
			mvN: 0,
			wWM: 0,
			angle: 0,
			WNw: 0,
			wVW: wVW,
			wMVVN: wMVVN
		};
	})();
	var mn = (function() {
		function WVNmv(context, mMmNW, MWMmn, vM, wW, nnv) {
			(vM < (2 * nnv)) && (nnv = vM / 2);
			(wW < (2 * nnv)) && (nnv = wW / 2);
			(0 > nnv) && (nnv = 0);
			context.beginPath();
			context.moveTo(mMmNW + nnv, MWMmn);
			context.arcTo(mMmNW + vM, MWMmn, mMmNW + vM, MWMmn + wW, nnv);
			context.arcTo(mMmNW + vM, MWMmn + wW, mMmNW, MWMmn + wW, nnv);
			context.arcTo(mMmNW, MWMmn + wW, mMmNW, MWMmn, nnv);
			context.arcTo(mMmNW, MWMmn, mMmNW + vM, MWMmn, nnv);
			context.closePath();
		};

		function WNv(vM, wW, src) {
			var Wv = {
				x: 0,
				y: 0,
				disable: 0
			};
			var src = src;
			var image;
			if (src !== undefined) image = graphicOptions.createMenuImg(src);
			else Wv.disable = 1;

			function nwN() {
				Wv.disable = 1;
			};

			function VnV() {
				Wv.disable = 0;
			};

			function nv() {
				if ((Wv.disable === 1) || (image.v !== 1)) return;
				context.drawImage(image, 0, 0, image.width, image.height, Wv.x, Wv.y, vM * parScaling, wW * parScaling);
			};
			return {
				nv: nv,
				Wv: Wv,
				show: VnV,
				nwN: nwN
			};
		};

		function Nnv(vM, wW, NvWwn, MNVNv) {
			var Wv = {
				x: 0,
				y: 0,
				disable: 0
			};
			var NVM = 0;
			if (MNVNv === undefined) {
				MNVNv = [];
				if (NvWwn !== undefined) {
					for (var mN = 0; mN < NvWwn.length; mN++) MNVNv[mN] = graphicOptions.createMenuImg(NvWwn[mN]);
				} else Wv.disable = 1;
			}

			function nWm(NvWwn, vmnMn) {
				MNVNv = vmnMn;
				for (let i = 0; i < 3; i++) {
					var image = MNVNv[i];
					var M = NvWwn[i];
					if (image.v !== 1) MNVNv[i] = graphicOptions.createMenuImg(M, image);
				}
			};

			function nwN() {
				Wv.disable = 1;
			};

			function VnV() {
				Wv.disable = 0;
			};

			function MVv(nVmvw) {
				NVM = nVmvw;
			};

			function nWMwn() {
				return NVM;
			};

			function nv() {

				if (Wv.disable === 1) return;
				var image = MNVNv[NVM];
				if (MNVNv[NVM].v !== 1) return;
				context.drawImage(image, 0, 0, image.width, image.height, Wv.x, Wv.y, vM * parScaling, wW * parScaling);
			};

			function MW() {
				if (Wv.disable === 1) return 0;
				if ((((nmn.mvN > Wv.x) && (nmn.mvN < (Wv.x + (vM * parScaling)))) && (nmn.wWM > Wv.y)) && (nmn.wWM < (Wv.y + (wW * parScaling)))) {
					if (nmn.state === nmn.MvwwV) NVM = mn.mNN;
					else if (nmn.state === nmn.vvVwN) NVM = mn.WmMVm;
					else if ((nmn.state === nmn.mnwNM) && (NVM !== mn.mNN)) NVM = mn.WmMVm;
					return 1;
				}
				NVM = mn.Vmw;
				return 0;
			};
			return {
				Wv: Wv,
				MW: MW,
				nv: nv,
				MVv: MVv,
				getState: nWMwn,
				nWm: nWm,
				show: VnV,
				nwN: nwN
			};
		};

		function vmv(wwn, wWMvM, MVNwV, wW, vM, vnNMM, WNnVV, wnMWM, WWV, nvVvm, wMWNm, nnv, wmmmw, mNWmN, mwWnW) {
			if (wwn.length === 0) wwn = " ";
			if (WNnVV === undefined) WNnVV = 0;
			if (wnMWM === undefined) wnMWM = 0;
			if (WWV === undefined) WWV = 0;
			if (mNWmN === undefined) mNWmN = 0;
			var canvasM = document.createElement("canvas");
			var context = canvasM.getContext("2d");
			context.textBaseline = "middle", context.font = ((((mwWnW !== undefined) ? (mwWnW + " ") : '') + wW) + "px ") + wWMvM;
			if (vM !== undefined) vM = Math.min(context.measureText(wwn).width, vM);
			else vM = context.measureText(wwn).width;
			canvasM.width = vM + WNnVV;
			canvasM.height = wW + wnMWM;
			if (vnNMM !== undefined) {
				if (wMWNm !== undefined) context.globalAlpha = wMWNm;
				context.fillStyle = vnNMM;
				if (nnv !== undefined) {
					WVNmv(context, WWV + 2, WWV, ((vM + WNnVV) - (WWV * 2)) - 4, (wW + wnMWM) - (WWV * 2), nnv);
					context.fill();
				} else context.fillRect(WWV, WWV, (vM + WNnVV) - (WWV * 2), (wW + wnMWM) - (WWV * 2));
				context.globalAlpha = 1;
				if (WWV !== 0) {
					context.lineWidth = WWV;
					context.strokeStyle = nvVvm;
					context.stroke();
				}
			}
			context.textBaseline = "middle";
			context.font = ((((mwWnW !== undefined) ? (mwWnW + " ") : '') + wW) + "px ") + wWMvM;
			if (wmmmw !== undefined) {
				context.strokeStyle = wmmmw;
				context.lineWidth = mNWmN;
				context.lineJoin = 'miter';
				context.miterLimit = 2;
				context.strokeText(wwn, Math.floor(WNnVV / 2), Math.floor(wnMWM / 2) + Math.floor(wW / 2), vM);
			}
			context.fillStyle = MVNwV;
			context.fillText(wwn, Math.floor(WNnVV / 2), Math.floor(wnMWM / 2) + Math.floor(wW / 2), vM);
			canvasM.wMv = canvasM.width / 2;
			canvasM.nNn = canvasM.height / 2;
			return canvasM;
		};
		return {
			Vmw: 0,
			WmMVm: 1,
			mNN: 2,
			Nnv: Nnv,
			WNv: WNv,
			vmv: vmv
		};
	})();

	function MNnnv(vMn, wVv) {
		var Nvv = new window.Uint16Array(vMn);
		if (wVv[1] === 1) nmm.vnNMN();
		var VmV = (wVv.length - 2) / 18;
		for (var mN = 0, NNvnw = 2, vWnmv = 1; mN < VmV; mN++, NNvnw += 18, vWnmv += 9) {
			var WmObject = null;
			var Nvn = wVv[NNvnw];
			var Mvv = wVv[NNvnw + 1];
			var vW = wVv[NNvnw + 3];
			var NVM = Nvv[vWnmv + 2];
			var WW = Nvv[vWnmv + 3];
			var Wvn = Nvv[vWnmv + 8];
			if (NVM === 0) {
				nmm.remove(Nvn, WW, Mvv, vW, Wvn);
				continue;
			}
			WmObject = nmm.get(Nvn, WW, Mvv, vW);
			VMwvV(WmObject, Nvn, Mvv, WW, vW, Nvv[vWnmv + 4], Nvv[vWnmv + 5], Nvv[vWnmv + 6], Nvv[vWnmv + 7], Wvn, wVv[NNvnw + 2], NVM);
			var WvV = mvn[vW].update;
			if (WvV !== undefined) WvV(WmObject, Nvv[vWnmv + 4], Nvv[vWnmv + 5]);
		}
	};

	function NmwnV(vMn) {
		var Nvv = new window.Uint16Array(vMn);
		if ((WMW.wNN === wm.MvN) || (WMW.wNN === wm.mWwvm)) {
			nV.VmwvM(Nvv[1]);
			if (WMW.mVNVN <= 0) {
				WMW.vvmnV = (nV.state === nV.mMM.MMwmm) ? 0 : 1;
				WMW.mVNVN = 3000;
			}
		} else if (WMW.wNN === wm.MNMwn) {
			nV.VmwvM(-1);
			window.setTimeout(WMW.nNvVV, 300);
		}
	};

	function NNnmw() {
		nV.wNVMm();
		if (WMW.mVNVN <= 0) {
			WMW.vvmnV = 2;
			WMW.mVNVN = 3000;
		}
	};

	function NNvvN(wVv) {
		var VV = nmm.wNVNv(mNn, wm.wM.id, 0);
		if (VV !== null) nmm.remove(VV.Nvn, VV.id, VV.Mvv, VV.type, 1);
		wm.wM.NmwWN = (wVv[1] << 8) + wVv[2];
		nV.VWwMv();
	};

	function wmMvN(WW) {
		if (wm.nNv[WW].nVv === 0) wm.MNW--;
	};

	function vNWmv() {
		nV.WMvWw();
	};

	function wnvnW() {
		nV.MvmwN();
	};

	function NMnVM(NN) {
		nV.muted(NN);
	};

	function vVVwn(vMn, wVv) {
		if (vMn.byteLength === 1) return;
		var Nvv = new window.Uint16Array(vMn);
		wm.VNmwm(Nvv, wVv);
	};

	function mVwmM(vMn, wVv) {
		wm.wM.id = wVv[1];
		var Nvv = new window.Uint16Array(vMn);
		var MwN = Nvv[3] << 5;
		wm.WvvVv((MwN >= wm.Vvnvm) ? 1 : 0, MwN);
		nV.wvwmv();
		nM.reset();
		nmm.NnvMM = Nvv[1];
		wm.WnmVM = wVv[4];
		wm.wNN = wVv[5];
		wm.wM.NNNNm = -1;
		wm.wM.Vw = 0;
		wm.wM.click = 0;
		wm.wM.mwnmn = [];
		wm.wM.NwmwN = [];
		wm.wM.mwW.mwN = 0;
		wm.wM.wMW = -1;
		wm.wM.vMNww = 0;
		wm.wM.MwWvV = 0;
		wm.wM.wmm = 0;
		wm.wM.nWnmw = 0;
		wm.wM.nNVmV = 0;
		wm.wM.vMv = 0;
		for (var mN = 0; mN < wm.wM.WvN.length; mN++) wm.wM.WvN[mN] = 0;
		for (var mN = 0; mN < 8; mN++) wm.wM.VMWvW[mN] = {
			WmWmM: 0,
			id: 0
		};
		wm.wM.nnVMN = 0;
		wm.wM.NWMNW = 0;
		if (wm.wNN === wm.MNMwn) wm.wM.NNvwN = 0.2;
		else if (wm.wNN === wm.mWwvm) wm.wM.NNvwN = 0.4;
		else wm.wM.NNvwN = 1;
		wm.wM.mmwVv = [
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1],
			[-1, -1]
		];
		if (wm.wNN !== wm.mWwvm) wm.wM.wMvmN = 10000000;
		wm.wM.MMnnM = 0;
		wm.wM.WvN[mN] = 0;
		wm.wM.WMV = 0;
		wm.wM.mnn = 0;
		wm.wM.mMMwN = 0;
		wm.wM.vVmMW = 0;
		wm.wM.wmWWW = 0;
		wm.wM.MNnwM = 0;
		wm.wM.vmNMw = [0, 0, 0, 0, 0];
		wm.wM.Nwvnn = 0;
		wm.wM.nvmWV = 0;
		wm.wM.mNvWw = 0;
		wm.wM.VVm = -1;
		wm.wM.nMWNN = 0;
		wm.wM.wmn = -1;
		wm.wM.wvV = -1;
		wm.wM.Wvnwn = -1;
		wm.wM.VWnwv = 0;
		wm.wM.vmm = [];
		wm.wM.mvW = [];
		wm.wM.NvmWW = [];
		wm.wM.mwMNW = [];
		wm.wM.nMWwV = 0;
		wm.wM.wVNvm = 0;
		wm.wM.NwwmW = 0;
		wm.wM.nMNNN = [];
		wm.wM.nmwMW = 0;
		wm.wM.mWwnw = [];
		wm.wM.level = 0;
		wm.wM.NmwWN = 0;
		wm.wM.vNn = 0;
		wm.wM.nMV = 0;
		wm.wM.vWMmn = 0;
		wm.wM.vVw = 0;
		wm.wM.NwnWW = 0;
		wm.wM.Mvwnw = 0;
		nM.scale = 0;
		wm.wM.MwNmV = [];
		wm.wM.WNWVM = 0;
		for (var mN = 0; mN < 8; mN++) {
			wm.wM.MwNmV[mN] = [];
			for (var NM = 0; NM < 8; NM++) wm.wM.MwNmV[mN][NM] = 0;
		}
		var VmV = mvn[mNn].wnvvV;
		wm.wM.Nwv = [];
		for (var mN = 0; mN < VmV; mN++) wm.wM.Nwv[mN] = [0, 0, 0, 0];
		var VmV = (vMn.byteLength - 8) / 10;
		for (var NwNnN = 8, nVvvn = 4, mN = 0; mN < VmV; mN++, NwNnN += 10, nVvvn += 5) {
			var wM = wm.nNv[wVv[NwNnN]];
			wM.id = wVv[NwNnN];
			wm.vWnnV(wM, wVv[NwNnN + 1]);
			wM.MWm = (wVv[NwNnN + 2] === 0) ? 0 : (nM.vnn + (wVv[NwNnN + 2] * 2000));
			wM.Vvm = (wVv[NwNnN + 3] === 0) ? 0 : (nM.vnn + (wVv[NwNnN + 3] * 1000));
			wM.nVv = wVv[NwNnN + 4];
			if (wM.nVv !== 0) wm.MNW--;
			wM.VvNnm = Nvv[nVvvn + 3];
			wM.Vw = vnw.vwvnN(Nvv[nVvvn + 4]) + 1;
			// window.console.log("id", wM, "score", wM.Vw);
			wM.NVvnW = vnw.WWwMn(wM.Vw - 1);
		}
		wm.wM.nVv = wm.nNv[wm.wM.id].nVv;
		window.localStorage.setItem("tokenId", wm.nNv[wm.wM.id].VvNnm);
		window.localStorage.setItem("userId", wm.wM.id);
		wm.NMVmM();
		wm.WmNWw();
	};

	function VmVmW() {
		nV.VVNNw();
	};

	function wWNWv(wVv) {
		var wM = wm.nNv[wVv[1]];
		wM.mwnmn.push(wVv[2] >> 2);
		wM.NwmwN.push(wVv[2] & 3);
	};

	function vMWWM(vMn) {
		var wMw = wm.wMw;
		wMw.Nv.value = vMn[1];
		wMw.nnm.value = vMn[2];
		wMw.VMW.value = vMn[3];
		wMw.vVM.value = vMn[4];
		wMw.WVn.value = vMn[5];
	};

	function VwNMW(vMn) {
		var Nvv = new window.Uint16Array(vMn);
		wm.wM.Vw = (Nvv[1] << 16) + Nvv[2];
	};

	function MNmmM(WW, angle) {
		var VV = nmm.wNVNv(mNn, WW, 0);
		if (VV !== null) {
			if (WW === wm.wM.id) nM.vvwMv = 3;
			VV.mWM = 300;
			VV.VMv = ((angle * 2) * Math.PI) / 255;
		}
	};

	function WWWvN(vwvmN) {
		for (var mN = 0; mN < wm.wM.Nwv.length; mN++) {
			for (var NM = 0; NM < 4; NM++) wm.wM.Nwv[mN][0] = 0;
		}
		var NM = 0;
		for (var mN = 1; mN < vwvmN.length; mN += 4) {
			var NW = vwvmN[mN];
			if (NW !== 0) WWm.Nwv[NM].nWm(nvn[NW].nN.src, nvn[NW].nN.image);
			else continue;
			var mv = wm.wM.Nwv[NM];
			mv[1] = vwvmN[mN + 1];
			mv[2] = vwvmN[mN + 2];
			mv[3] = vwvmN[mN + 3];
			mv[0] = NW;
			NM++;
		}
	};

	function vmnnN(NW) {
		var mv = wm.wM.Nwv;
		for (var mN = 0; mN < mv.length; mN++) {
			if ((((mv[mN][0] === NW[1]) && (mv[mN][1] === NW[2])) && (mv[mN][2] === NW[3])) && (mv[mN][3] === NW[4])) {
				mv[mN][0] = 0;
				mv[mN][1] = 0;
				mv[mN][2] = 0;
				mv[mN][3] = 0;
				if ((WWm.wWV() === 1) && (wm.wM.wvV === -1)) wm.nWw(wm.wM.wmn);
				return;
			}
		}
	};

	function wmvVv(NW) {
		var mv = wm.wM.Nwv;
		for (var mN = 0; mN < mv.length; mN++) {
			if (mv[mN][0] === 0) {
				mv[mN][0] = NW[1];
				mv[mN][1] = NW[2];
				mv[mN][2] = NW[3];
				mv[mN][3] = NW[4];
				WWm.Nwv[mN].nWm(nvn[NW[1]].nN.src, nvn[NW[1]].nN.image);
				if ((WWm.wWV() === 1) && (wm.wM.wvV === -1)) wm.nWw(wm.wM.wmn);
				return;
			}
		}
	};

	function WnMMw(lParTrue) {
		wm.wMw.Nv.value = lParTrue;
	};

	function VMmvN() {
		wm.wMw.Nv.wmw = 1;
	};

	function NVVvm(vMn) {
		wm.nNnVM = nvn[(vMn[1] << 8) + vMn[2]].MmVNM;
	};

	function vWNwM() {
		wm.wMw.Nv.wmw = 0;
	};

	function NvwWn(WW) {
		var VV = nmm.wNVNv(mNn, WW, 0);
		if ((VV !== null) && (wm.nNv[WW].nVv === 0)) VV.nWV = 300;
	};

	function nvmWn() {
		wm.wMw.vVM.wmw = -1;
	};

	function wwwNm(NW) {
		var mv = wm.wM.Nwv;
		for (var mN = 0; mN < mv.length; mN++) {
			if ((((mv[mN][0] === NW[1]) && (mv[mN][1] === NW[2])) && (mv[mN][2] === NW[3])) && (mv[mN][3] === NW[4])) {
				mv[mN][1] = NW[5];
				if ((WWm.wWV() === 1) && (wm.wM.wvV === -1)) wm.nWw(wm.wM.wmn);
				return;
			}
		}
	};

	function WmwwW(vMn) {
		var mv = wm.wM.Nwv;
		var WWvNn = -1;
		var mwnNW = -1;
		for (var mN = 0; mN < mv.length; mN++) {
			if ((((WWvNn === -1) && (mv[mN][0] === vMn[1])) && (mv[mN][1] === vMn[2])) && (mv[mN][2] === vMn[3])) WWvNn = mN;
			else if (((mv[mN][0] === vMn[1]) && (mv[mN][1] === vMn[4])) && (mv[mN][2] === vMn[5])) mwnNW = mN;
		}
		var NW = nvn[vMn[1]];
		var NVMwN = vMn[2] + vMn[4];
		if (NW.stack < NVMwN) {
			mv[mwnNW][3] = Math.min(255, Math.max(0, Math.floor(((mv[WWvNn][3] * mv[WWvNn][1]) + (mv[mwnNW][3] * (NW.stack - mv[WWvNn][1]))) / NW.stack)));
			mv[WWvNn][1] = NVMwN - NW.stack;
			mv[mwnNW][1] = NW.stack;
		} else {
			mv[mwnNW][3] = Math.min(255, Math.max(0, Math.floor(((mv[WWvNn][3] * mv[WWvNn][1]) + (mv[mwnNW][3] * mv[mwnNW][1])) / NVMwN)));
			mv[WWvNn][0] = 0;
			mv[WWvNn][1] = 0;
			mv[WWvNn][2] = 0;
			mv[WWvNn][3] = 0;
			mv[mwnNW][1] = NVMwN;
		}
		if ((WWm.wWV() === 1) && (wm.wM.wvV === -1)) wm.nWw(wm.wM.wmn);
	};

	function MmVww(vMn) {
		var mv = wm.wM.Nwv;
		var nW = Math.floor(vMn[2] / 2);
		var NwmVv = -1;
		var WNnWN = -1;
		for (var mN = 0; mN < mv.length; mN++) {
			if ((((WNnWN === -1) && (mv[mN][0] === vMn[1])) && (mv[mN][1] === vMn[2])) && (mv[mN][2] === vMn[3])) {
				WNnWN = mN;
				mv[mN][1] -= nW;
			} else if ((NwmVv === -1) && (mv[mN][0] === 0)) {
				NwmVv = mN;
				mv[mN][0] = vMn[1];
				mv[mN][1] = nW;
				mv[mN][2] = vMn[4];
				WWm.Nwv[mN].nWm(nvn[vMn[1]].nN.src, nvn[vMn[1]].nN.image);
			}
		}
		mv[NwmVv][3] = mv[WNnWN][3];
		if ((WWm.wWV() === 1) && (wm.wM.wvV === -1)) wm.nWw(wm.wM.wmn);
	};

	function mMwMw() {
		wm.wMw.VMW.wmw = 0;
	};

	function WwNVn() {
		wm.wMw.VMW.wmw = 1;
	};

	function WVwmN(lParTrue) {
		wm.wMw.vVM.value = lParTrue;
	};

	function mnwMn() {
		wm.wMw.Nv.wmw = -1;
	};

	function WVMWv(NW) {
		var mv = wm.wM.Nwv;
		for (var mN = 0; mN < mv.length; mN++) {
			if ((((mv[mN][0] === NW[1]) && (mv[mN][1] === NW[2])) && (mv[mN][2] === NW[3])) && (mv[mN][3] === NW[4])) {
				mv[mN][3] = NW[5];
				return;
			}
		}
	};

	function vwNmn(mV) {
		wm.wM.wMW = 1;
		wm.wM.vMNww = mV * 100;
		wm.wM.mmNWn = wm.wM.vMNww;
	};

	function NWvNm() {
		wm.wM.wMW = -1;
		wm.wM.vMNww = 0;
	};

	function VWwWw(NW) {
		var mv = wm.wM.Nwv;
		for (var mN = 0; mN < mv.length; mN++) {
			if ((((mv[mN][0] === NW[1]) && (mv[mN][1] === NW[2])) && (mv[mN][2] === NW[3])) && (mv[mN][3] === NW[4])) {
				mv[mN][1] = NW[5];
				mv[mN][3] = NW[6];
				if ((WWm.wWV() === 1) && (wm.wM.wvV === -1)) wm.nWw(wm.wM.wmn);
				return;
			}
		}
	};

	function nmMvv(wmm) {
		wm.wM.wmm = wmm;
	};

	function MMMvm() {
		wm.Mvnwn(0, 0);
		wm.wMw.VMW.wmw = -1;
	};

	function mnvmv() {
		wm.Mvnwn(1, 0);
		if (wm.wM.mnn === 0) wm.wMw.VMW.wmw = 1;
	};

	function VvNwN(vNn) {
		wm.wM.vNn += vNn;
	};

	function WMvvn(wVv) {
		var wVM = wVv[1];
		wm.wM.level = wVM;
		wm.wM.vWMmn = wm.nVWwM(wVM);
		wm.wM.vNn = (((wVv[2] << 24) + (wVv[3] << 16)) + (wVv[4] << 8)) + wVv[5];
		wm.wM.nMV = wVM;
		for (var mN = 6; mN < wVv.length; mN++) VwmMn(wVv[mN]);
	};

	function VwmMn(MMNwv) {
		if (MMNwv === 0) return;
		wm.wM.mWwnw[MMNwv] = 1;
		wm.wM.nMV -= nvn[MMNwv].detail.nMnmm;
		var parScaling = nvn[MMNwv].scale;
		if (parScaling !== undefined) nM.scale = parScaling;
		else {
			var wwwvn = nvn[MMNwv].wwwvn;
			if (wwwvn !== undefined) {
				for (var mN = 0; mN < wwwvn; mN++) wm.wM.Nwv.push([0, 0, 0, 0]);
			}
		}
		if ((WWm.wWV() === 1) && (wm.wM.wvV !== -1)) wm.NnV(wm.wM.wvV);
	};

	function WmWvW(WW) {
		if ((WWm.wWV() === 1) && (wm.wM.wmn === 0)) wm.nWw(Mw.WVv);
		var NN = nvn[WW].detail.WmNvM[0] * wm.wM.NNvwN;
		wm.wM.VWnwv = window.Date.now() + NN;
		wm.wM.mMVvM = NN;
	};

	function NVvVw() {
		if (((((WWm.wWV() === 1) && (wm.wM.mnMWn !== -1)) && (wm.wM.wvV === -1)) && (wm.wM.wmn !== Mw.WVv)) || (wm.wM.NwnWW === 1)) WWm.mNV();
	};
	var wNwNM = window['Math'].acos;
	window['Math'].acos = window['Math'].asin;
	window['Math'].asin = wNwNM;

	function VnwNm(wVv) {
		var VMV = wVv[1];
		wm.nWw(VMV);
		if (wVv[8] === 0) {
			audioHandler.wmN(audioHandler.vm.open, 1, 0);
			WWm.WmwwM(1);
			wm.wM.vVw = 1;
		}
		var vNN = wm.wM.Vv;
		var MNv = vNN.MNv;
		wm.wM.Vv.VmV = 4;
		for (var mN = 0; mN < 4; mN++) {
			var NW = wVv[mN + 4];
			MNv[mN] = NW;
			if (NW !== 0) WWm.MNv[mN].nWm(nvn[NW].nN.src, nvn[NW].nN.image);
			else {
				wm.wM.Vv.VmV = mN;
				break;
			}
		}
		vNN.Wv = wVv[3];
		if (((((((VMV === Mw.wnn) || (VMV === Mw.mww)) || (VMV === Mw.MmN)) || (VMV === Mw.WnM)) || (VMV === Mw.nmV)) || (VMV === Mw.WMm)) || (VMV === Mw.MWn)) vNN.mWm = wVv[9];
		else vNN.mWm = -1;
		if (((MNv[0] !== 0) && (vNN.Wv !== 4)) && (MNv[vNN.Wv] !== 0)) {
			var NW = nvn[MNv[vNN.Wv]];
			var mNv = NW.detail.VMV;
			for (mN = 0; mN < mNv.length; mN++) {
				if (mNv[mN] === VMV) {
					vNN.wmvVV = NW.detail.WmNvM[mN] * wm.wM.NNvwN;
					break;
				}
			}
			vNN.time = window.Date.now() + (vNN.wmvVV * (wVv[2] / 255));
		} else if (wm.wM.Vv.VmV === vNN.Wv) vNN.time = 0;
	};

	function VmMwm(wVv) {
		wm.wM.Vv.mWm = wVv[1];
	};

	function WmvWV() {
		wm.wM.mnn = 1;
		wm.wMw.VMW.wmw = -1;
	};

	function WwMMm() {
		wm.wM.mnn = 0;
		if ((wm.NWW === 1) || (wm.WnV > 0)) wm.wMw.VMW.wmw = 1;
	};

	function vmMmw(mwV) {
		if (wm.wM.vVmMW <= 0) {
			wm.wM.vVmMW = 2000;
			wm.wM.mMMwN = mwV;
		}
	};

	function WVnVV(vMn) {
		var Nvv = new window.Uint16Array(vMn);
		wm.wMw.Nv.maxValueOfParam = Nvv[1];
		wm.wMw.Nv.Wwn = Nvv[2] / 10000;
		wm.wMw.Nv.WmM = Nvv[3] / 10000;
		wm.wMw.nnm.maxValueOfParam = Nvv[4];
		wm.wMw.nnm.Wwn = Nvv[5] / 10000;
		wm.wMw.nnm.WmM = Nvv[6] / 10000;
		wm.wMw.VMW.maxValueOfParam = Nvv[7];
		wm.wMw.VMW.Wwn = Nvv[8] / 10000;
		wm.wMw.VMW.WmM = Nvv[9] / 10000;
		wm.wMw.vVM.maxValueOfParam = Nvv[10];
		wm.wMw.vVM.Wwn = Nvv[11] / 10000;
		wm.wMw.vVM.WmM = Nvv[12] / 10000;
		wm.wMw.WVn.maxValueOfParam = Nvv[13];
		wm.wMw.WVn.Wwn = Nvv[14] / 10000;
		wm.wMw.WVn.WmM = Nvv[15] / 10000;
		wm.wMw.Nv.MmW = Math.min(wm.wMw.Nv.maxValueOfParam, wm.wMw.Nv.MmW);
		wm.wMw.Nv.value = Math.min(wm.wMw.Nv.maxValueOfParam, wm.wMw.Nv.value);
		wm.wMw.nnm.MmW = Math.min(wm.wMw.nnm.maxValueOfParam, wm.wMw.nnm.MmW);
		wm.wMw.nnm.value = Math.min(wm.wMw.nnm.maxValueOfParam, wm.wMw.nnm.value);
		wm.wMw.VMW.MmW = Math.min(wm.wMw.VMW.maxValueOfParam, wm.wMw.VMW.MmW);
		wm.wMw.VMW.value = Math.min(wm.wMw.VMW.maxValueOfParam, wm.wMw.VMW.value);
		wm.wMw.vVM.MmW = Math.min(wm.wMw.vVM.maxValueOfParam, wm.wMw.vVM.MmW);
		wm.wMw.vVM.value = Math.min(wm.wMw.vVM.maxValueOfParam, wm.wMw.vVM.value);
		wm.wMw.WVn.MmW = Math.min(wm.wMw.WVn.maxValueOfParam, wm.wMw.WVn.MmW);
		wm.wMw.WVn.value = Math.min(wm.wMw.WVn.maxValueOfParam, wm.wMw.WVn.value);
	};
	var mwmVW = 325;

	function mNVvW(vvwMv) {
		nM.MWmmv = -vvwMv;
	};

	function mMvvv(wVv) {
		var VNM = wm.wM.VNM;
		if (wVv[1] === 1) {
			WWm.WmwwM(2);
			wm.wM.NwnWW = 1;
			audioHandler.wmN(audioHandler.vm.open, 1, 0);
		}
		for (var mN = 0; mN < 4; mN++) {
			for (var NM = 0; NM < 3; NM++) {
				var lParTrue = wVv[(2 + (mN * 3)) + NM];
				if (NM === 0) {
					if (lParTrue === 0) {
						VNM[mN][0] = 0;
						VNM[mN][1] = 0;
						VNM[mN][2] = 0;
						VNM[mN][3] = 0;
						break;
					}
					WWm.VNM[mN].nWm(nvn[lParTrue].nN.src, nvn[lParTrue].nN.image);
				}
				VNM[mN][NM] = lParTrue;
			}
			VNM[mN][3] = VNM[mN][2];
		}
	};

	function nMmvw() {
		wm.wMw.WVn.wmw = 1;
	};

	function vvmVm() {
		wm.wMw.WVn.wmw = -1;
	};

	function mvVMV(wM, VVm) {
		wm.nNv[wM].VVm = VVm;
		wm.nNv[wM].wnV = wm.wVV[VVm].Mvv;
		if (wM === wm.wM.id) wm.wM.VVm = VVm;
	};

	function nNvWv(wM) {
		wm.nNv[wM].VVm = -1;
		if (wM === wm.wM.id) wm.wM.VVm = -1;
	};

	function vnNvm(VVm) {
		wm.VmMvw(VVm);
		if (VVm === wm.wM.VVm) {
			wm.wM.VVm = -1;
			wm.wM.wmWWW = 0;
		}
	};

	function NWNwM(wM) {
		var MNv = wm.wM.vmNMw;
		for (var mN = 0; mN < 5; mN++) {
			if (MNv[mN] === 0) {
				if (wm.wM.mNvWw === 0) {
					wm.wM.mNvWw = wM;
					wm.wM.MNnwM = 0;
				} else MNv[mN] = wM;
				return;
			}
		}
	};
	function nNWmM(wVv) {
		// window.console.log(wVv);
		var Wv = wm.wM.VMWvW;
		var VmV = (wVv.length - 1) / 3;
		var NM = 0;
		for (var mN = 0; mN < VmV; mN++) {
			var WW = wVv[3 + (mN * 3)];
			if (wm.wM.id !== WW) {
				var nI = wVv[1 + (mN * 3)];
				var vV = wVv[2 + (mN * 3)];
				var wM = wm.nNv[WW];
				Wv[NM].id = WW;
				Wv[NM].WmWmM = 14000;
				wM.x = nI * nM.MWNVV;
				wM.y = vV * nM.MWNVV;
				if (mnW.nmw(wM.rx, wM.ry, wM.x, wM.y) > 3000000) {
					wM.rx = wM.x;
					wM.ry = wM.y;
				}
				NM++;
			}
		}
		wm.wM.WwnnN = NM;
	};

	function mnwnV(nnVMN) {
		wm.wM.nnVMN = nnVMN;
	};

	function nMnmW(wVv) {
		if (wVv[1] !== wm.wM.id) {
			var wM = wm.nNv[wVv[1]];
			wM.x = wVv[2] * nM.MWNVV;
			wM.y = wVv[3] * nM.MWNVV;
			wM.nnVMN = wVv[4];
			wm.wM.MMnnM = wM.id;
			wm.wM.NWMNW = 14000;
		}
	};

	function wMVNW(wVv) {
		wm.wM.WNWVM++;
		wm.wM.wMvmN = wVv[1] * 1000;
		for (var VmW = 2; VmW < 14; VmW++) {
			if (wVv[VmW] === 100) {
				wm.wM.mmwVv[VmW - 2][0] = -1;
				wm.wM.mmwVv[VmW - 2][1] = -1;
			} else {
				var mN = Math.floor(wVv[VmW] / 8);
				var NM = wVv[VmW] % 8;
				wm.wM.MwNmV[mN][NM] = wm.wM.WNWVM;
				wm.wM.mmwVv[VmW - 2][0] = mN;
				wm.wM.mmwVv[VmW - 2][1] = NM;
			}
		}
		nM.mvMWW();
	};

	function wMvMn() {
		nV.VmwvM(0);
		if (WMW.mVNVN <= 0) {
			WMW.vvmnV = 3;
			WMW.mVNVN = 3000;
		}
	};

	function wwVwv(WW) {
		var VV = nmm.wNVNv(mNn, WW, 0);
		if (VV !== null) VV.mNw = 300;
	};

	function WWvWm(wMvwm) {
		wm.wM.wMvwm = [];
		for (var mN = 1; mN < wMvwm.length; mN++) wm.wM.wMvwm.push(wMvwm[mN] * 100);
	};

	function VnMNV(NN) {
		nM.VvmnW(NN * 1000);
	};

	function mVvvw(WW, NN) {
		wm.nNv[WW].MWm = nM.vnn + (NN * 2000);
	};

	function NMnNm(WW, NN) {
		wm.nNv[WW].Vvm = nM.vnn + (NN * 1000);
	};

	function nWnMN(WW, Vvm) {
		var wM = wm.nNv[WW];
		wM.Vvm = (Vvm !== 0) ? nM.vnn : 0;
		wM.MWm = nM.vnn;
	};

	function NMWVw(MwN) {
		wm.wM.wMvmN = MwN * 10000;
	};

	function VnmMV(vMn) {
		var wVv = new window.Uint8Array(vMn);
		switch (wVv[0]) {
			case 0:
				MNnnv(vMn, wVv);
				break;
			case 1:
				NmwnV(vMn);
				break;
			case 2:
				NNnmw();
				break;
			case 3:
				NNvvN(wVv);
				break;
			case 4:
				wmMvN(wVv[1]);
				break;
			case 5:
				vNWmv();
				break;
			case 6:
				wnvnW();
				break;
			case 7:
				NMnVM(wVv[1]);
				break;
			case 8:
				vVVwn(vMn, wVv);
				break;
			case 9:
				mVwmM(vMn, wVv);
				break;
			case 10:
				VmVmW();
				break;
			case 11:
				wWNWv(wVv);
				break;
			case 12:
				vMWWM(wVv);
				break;
			case 13:
				VwNMW(vMn);
				break;
			case 14:
				MNmmM(wVv[1], wVv[2]);
				break;
			case 15:
				WWWvN(wVv);
				break;
			case 16:
				vmnnN(wVv);
				break;
			case 17:
				wmvVv(wVv);
				break;
			case 18:
				WnMMw(wVv[1]);
				break;
			case 19:
				VMmvN();
				break;
			case 20:
				NVVvm(wVv);
				break;
			case 21:
				vWNwM();
				break;
			case 22:
				NvwWn(wVv[1]);
				break;
			case 23:
				nvmWn();
				break;
			case 24:
				wm.wMw.vVM.wmw = 0;
				break;
			case 25:
				wm.wMw.vVM.wmw = 1;
				break;
			case 26:
				wm.wMw.VMW.wmw = -1;
				break;
			case 27:
				mMwMw();
				break;
			case 28:
				WwNVn();
				break;
			case 29:
				WVwmN(wVv[1]);
				break;
			case 30:
				mnwMn();
				break;
			case 31:
				wwwNm(wVv);
				break;
			case 32:
				WmwwW(wVv);
				break;
			case 33:
				MmVww(wVv);
				break;
			case 34:
				WVMWv(wVv);
				break;
			case 35:
				vwNmn(wVv[1]);
				break;
			case 36:
				NWvNm();
				break;
			case 37:
				VWwWw(wVv);
				break;
			case 38:
				nmMvv(wVv[1]);
				break;
			case 39:
				MMMvm();
				break;
			case 40:
				mnvmv();
				break;
			case 41:
				VvNwN((wVv[1] << 8) + wVv[2]);
				break;
			case 42:
				WMvvn(wVv);
				break;
			case 43:
				VwmMn(wVv[1]);
				break;
			case 44:
				WmWvW(wVv[1]);
				break;
			case 45:
				NVvVw();
				break;
			case 46:
				VnwNm(wVv);
				break;
			case 47:
				VmMwm(wVv);
				break;
			case 48:
				nMmvw();
				break;
			case 49:
				vvmVm();
				break;
			case 50:
				WmvWV();
				break;
			case 51:
				WwMMm();
				break;
			case 52:
				vmMmw(wVv[1]);
				break;
			case 53:
				mMvvv(wVv);
				break;
			case 54:
				mvVMV(wVv[1], wVv[2]);
				break;
			case 55:
				nNvWv(wVv[1]);
				break;
			case 56:
				vnNvm(wVv[1]);
				break;
			case 57:
				NWNwM(wVv[1]);
				break;
			case 58:
				nNWmM(wVv);
				break;
			case 59:
				mnwnV(wVv[1]);
				break;
			case 60:
				nMnmW(wVv);
				break;
			case 61:
				wMVNW(wVv);
				break;
			case 62:
				wMvMn();
				break;
			case 63:
				WVnVV(vMn);
				break;
			case 64:
				mNVvW(wVv[1]);
				break;
			case 65:
				wwVwv(wVv[1]);
				break;
			case 66:
				WWvWm(wVv);
				break;
			case 67:
				VnMNV(wVv[1]);
				break;
			case 68:
				mVvvw(wVv[1], wVv[2]);
				break;
			case 69:
				NMnNm(wVv[1], wVv[2]);
				break;
			case 70:
				nWnMN(wVv[1], wVv[2]);
				break;
			case 71:
				NMWVw(wVv[1]);
				break;
		}
	};

	function MNmvv(vMn) {
		wm.nNv[vMn[1]].text.push(vMn[2]);
	};

	function mvNWW(vMn) {
		var wM = wm.nNv[vMn[1]];
		wM.VvNnm = vMn[2];
		wM.Vw = 0;
		wM.WmWmM = mNn;
		wM.mmn = (wm.wM.vnWMW === 1) ? ((vMn[3] + "#") + vMn[1]) : vMn[3];
		wM.MMw = vMn[4];
		wM.nVv = vMn[5];
		wM.VVm = -1;
		wM.VN = 0;
		wM.Mm = 0;
		wM.orientation = 1;
		wM.mVmVN = 1;
		wM.Vvm = 0;
		wM.MWm = 0;
		wM.mwnmn = [];
		wM.NwmwN = [];
		wM.WNnmW = 0;
		wM.MVVMN = 0;
		wM.text = [];
		wM.nVmNw = [];
		wM.wNvnv = [];
		wM.label = [];
		wM.nnnNM = -1;
		wM.VVn = -1;
		wM.NWm = null;
		wM.mMwMm = null;
		wM.NVmwV = null;
		if (wM.nVv === 0) wm.MNW++;
	};

	function vWWnV(vMn) {
		var VmV = vMn.length - 1;
		wm.WnmVM = VmV;
		window.localStorage.setItem("token", vMn[VmV]);
		vMn[0] = "";
		wm.WMNNN(vMn);
	};

	function wMWWN(mvMmN) {};

	function mVVvw(vMn) {
		var VVm = wm.wVV[vMn[1]];
		VVm.mwvNm = vMn[2];
		VVm.name = vMn[3];
		var wM = wm.nNv[VVm.mwvNm];
		wM.wnV = VVm.Mvv;
		wM.wmWWW = 1;
		wM.VVm = VVm.id;
		if (VVm.mwvNm === wm.wM.id) {
			wm.wM.wmWWW = 1;
			wm.wM.VVm = VVm.id;
		}
		if (WWm.Mvn === VVm.name) WWm.NMwwv = 0;
	};

	function wMnNv(vMn) {
		wm.nVmnn(vMn);
	};

	function mNWNN(vMn) {
		switch (vMn[0]) {
			case 0:
				MNmvv(vMn);
				break;
			case 1:
				mvNWW(vMn);
				break;
			case 2:
				vWWnV(vMn);
				break;
			case 3:
				wMWWN(vMn[1]);
				break;
			case 4:
				mVVvw(vMn);
				break;
			case 5:
				wMnNv(vMn);
				break;
		}
	};

	function wNwmm(Wnmmn) {
		var WVvMN = window.localStorage.getItem("token");
		var VvNnm = window.localStorage.getItem("tokenId");
		var MNmMn = -1;
		try {
			MNmMn = window.Number(window.localStorage.getItem("userId"));
			if (MNmMn === window.NaN) MNmMn = -1;
		} catch (error) {};
		var mmn = window.localStorage.getItem("nickname");
		var MWmNM = ((nV.state & nV.mMM.vmNVM) > 0) ? 1 : 0;
		var MMw = window.Number(window.localStorage.getItem("skin"));
		var vMmwv = 0;
		if (document.getElementById("passwordInput") !== null) {
			vMmwv = document.getElementById("passwordInput").value;
			if (vMmwv.length > 0) window.localStorage.setItem("password", vMmwv);
			if (Mwv.VnN("admin") !== null) {
				WMW.NWVmw = 0;
				WMW.nmvvn = -1;
			}
		}
		return [Wnmmn, WVvMN, VvNnm, MNmMn, MWmNM, mmn, MMw, WMW.NWVmw, vMmwv];
	};
	var nV = (function() {
		mMM = {
			drawPlayerStates: 1,
			Mwmww: 2,
			WwnVw: 4,
			MMwmm: 8,
			WvnWW: 16,
			wwVVW: 32,
			vmNVM: 64,
			NVNVv: 128,
			NwmvN: 256,
			WvMMN: 512,
			MwNnN: 1024
		};
		var nnvMn = 0;
		var VNVnn = 1;
		var WNMmN = 2;
		var VnWnV = 3;
		var WWvwV = 4;
		var mWmWW = 3000;
		var VvMNM = 1500;
		var nVnwn = window.JSON.stringify([0]);
		var WwVnw = 20;
		var nmmWw = 150;
		var WvWMV = 60;
		var nnW = 0;
		var NvM = 1;
		var wwV = undefined;
		var MMVMV = 0;
		var mmvmn = 0;
		var NN = 0;
		var MnMNm = mWmWW;
		var VVN = 0;
		var NnVMn = 0;
		var nnNVw = 0;
		var NnNvn = 0;
		var serverList = "";
		var Wnmmn = 0;
		var MNnwV = 0;
		var nVWmV = 0;
		var WnWvw = 0;
		var nWvwM = 0;
		var MMVmV = 0;
		var WnVww = 0;
		var VWvWV = nmn.angle;
		var nVwnM = 0;
		var mNWNN = undefined;
		var VnmMV = undefined;
		var wNwmm = undefined;

		function wnW(serverListName, mNMnm, vWnMv, WMNNW, VNwvw, NwmvW, wMMWN, mMWVM, mVmnW, wvnNW) {
			serverList = (serverListName !== undefined) ? serverListName : "json/servers.json";
			Wnmmn = (mNMnm !== undefined) ? mNMnm : 0;
			MNnwV = (vWnMv !== undefined) ? vWnMv : 15000;
			WnWvw = (VNwvw !== undefined) ? VNwvw : 3;
			NnVMn = (NwmvW !== undefined) ? NwmvW : 20000;
			Vwvvn = (wMMWN !== undefined) ? wMMWN : 10000;
			VnmMV = (mMWVM !== undefined) ? mMWVM : (function() {});
			mNWNN = (mVmnW !== undefined) ? mVmnW : (function() {});
			wNwmm = (wvnNW !== undefined) ? wvnNW : (function() {});
			nVWmV = (WMNNW !== undefined) ? WMNNW : 2000;
			nVwnM = var14;
			var VVmnW = window.localStorage.getItem("serverVersion");
			if ((window.localStorage.getItem("token") === null) || (VVmnW !== ("" + Wnmmn))) window.localStorage.setItem("token", nVwMw());
			window.localStorage.setItem("serverVersion", Wnmmn);
		};

		function MwWWm() {
			if (((nV.state & mMM.drawPlayerStates) === 0) || ((nV.state & mMM.vmNVM) > 0)) return;
			nV.state = mMM.vmNVM;
			wwV.close();
			Wwmnw();
		};

		function NmNVM() {
			if (var13 > Vwvvn) NN = var14;
			if ((var14 - NN) > MNnwV) {
				NN = var14;
				MwWWm();
			};
		};

		function Wwmnw() {
			mmvmn = 0;
			nV.state = mMM.Mwmww + (nV.state & (mMM.vmNVM | mMM.vMNMN));
			wnvMw();
		};

		function wvMmw(mmn, MMw) {
			if (((nV.state & mMM.Mwmww) === 0) && ((nV.state & mMM.drawPlayerStates) === 0)) {
				window.localStorage.setItem("nickname", mmn);
				window.localStorage.setItem("skin", MMw);
				Wwmnw();
			}
		};

		function vnwVv() {
			mmvmn++;
			wwV.close();
			if (mmvmn >= WnWvw) {
				nV.state = mMM.WwnVw + (nV.state & mMM.vmNVM);
				if ((nV.state & mMM.vmNVM) > 0) VnW();
			} else wnvMw();
		};

		function mNm(WmWnw) {
			VVN = var14;
			wwV.send(WmWnw);
		};

		function WNMWw() {
			if ((var14 - VVN) > NnVMn) {
				wwV.send(nVnwn);
				VVN = var14;
			}
		};

		function wMmvN(wvVWv) {
			if ((var14 - nWvwM) > MMVmV) {
				VVN = var14;
				wwV.send(window.JSON.stringify([1, wvVWv]));
				return 0;
			}
			return MMVmV - (var14 - nWvwM);
		};

		function mwwMW() {
			if ((var14 - nVwnM) > nmmWw) {
				var VmWMm = (((((nmn.angle - VWvWV) * 180) / Math.PI) % 360) + 360) % 360;
				if (VmWMm > 2) {
					VVN = var14;
					nVwnM = var14;
					VWvWV = nmn.angle;
					VmWMm = Math.floor(((((nmn.angle * 180) / Math.PI) % 360) + 360) % 360);
					wwV.send(window.JSON.stringify([6, VmWMm]));
				}
			}
		};

		function MwvMn() {
			if ((var14 - nVwnM) > WvWMV) {
				var VmWMm = (((((nmn.angle - VWvWV) * 180) / Math.PI) % 360) + 360) % 360;
				if (VmWMm > 2) {
					VVN = var14;
					nVwnM = var14;
					VWvWV = nmn.angle;
					VmWMm = Math.floor(((((nmn.angle * 180) / Math.PI) % 360) + 360) % 360);
					wwV.send(window.JSON.stringify([6, VmWMm]));
				}
			}
		};

		function NwwnV() {
			var NNVMw = Vvv.NWNVn();
			if (NNVMw !== NnNvn) {
				VVN = var14;
				NnNvn = NNVMw;
				wwV.send(window.JSON.stringify([7, NNVMw]));
			}
		};

		function mmMwn() {
			if (nmn.x >= var9) {
				if (WnVww !== NvM) {
					VVN = var14;
					WnVww = NvM;
					wwV.send(window.JSON.stringify([3, NvM]));
				}
			} else {
				if (WnVww !== nnW) {
					VVN = var14;
					WnVww = nnW;
					wwV.send(window.JSON.stringify([3, nnW]));
				}
			}
		};

		function WvVmM() {
			VVN = var14;
			wwV.send(window.JSON.stringify([4]));
		};

		function vNnVm() {
			VVN = var14;
			wwV.send(window.JSON.stringify([5]));
		};

		function WVnNm() {
			var Mm = 0;
			if (Vvv.NnNmn() === 1) Mm |= 1;
			if (Vvv.VwMvW() === 1) Mm |= 2;
			if (Vvv.NMnww() === 1) Mm |= 4;
			if (Vvv.VnWWN() === 1) Mm |= 8;
			if (nnNVw !== Mm) {
				VVN = var14;
				nnNVw = Mm;
				wwV.send(window.JSON.stringify([2, Mm]));
			}
		};

		function wnvMw() {
			var NMM = nV.wvm[nV.vvm][VNVnn];
			var wVWWV = nV.wvm[nV.vvm][WNMmN];
			var nvWVv = nV.wvm[nV.vvm][VnWnV];
			wwV = new window.WebSocket((((("ws" + ((nvWVv === 1) ? "s" : "")) + "://") + NMM) + ":") + wVWWV);
			MMVMV++;
			wwV.mnnNN = MMVMV;
			var mnnNN = MMVMV;
			wwV.binaryType = "arraybuffer";
			wwV.onerror = function() {
				if (this.mnnNN !== MMVMV) return;
				MwWWm();
			};
			wwV.onclose = function(vN) {
				if (this.mnnNN !== MMVMV) return;
				MwWWm();
			};
			wwV.onmessage = function(vN, WvwwV) {
				if (this.mnnNN !== MMVMV) return;
				NN = var14;
				if (typeof vN.data === 'string') mNWNN(window.JSON.parse(vN.data));
				else VnmMV(vN.data);
			};
			wwV.onopen = function(vN) {
				WnVww = -1;
				VVN = var14;
				window.clearTimeout(Vnmnn);
				wwV.send(window.JSON.stringify(wNwmm(Wnmmn)));
				Vnmnn = window.setTimeout(function() {
					if (mnnNN !== MMVMV) return;
					vnwVv();
				}, nVWmV);
			};
			Vnmnn = window.setTimeout(function() {
				if (mnnNN !== MMVMV) return;
				vnwVv();
			}, nVWmV);
		};

		function wNVMm() {
			nV.state |= nV.mMM.wwVVW;
		};

		function NMmWN(NN) {
			nWvwM = var14;
			MMVmV = NN * 60000;
		};

		function MvmwN() {
			nV.state = mMM.MwNnN;
			VnW();
		};

		function VVNNw() {
			nV.state = mMM.WvMMN;
			VnW();
		};

		function VWwMv() {
			nV.state = mMM.NVNVv;
			VnW();
		};

		function WMvWw() {
			window.clearTimeout(Vnmnn);
			nV.state = mMM.NwmvN;
			VnW();
		};

		function wvwmv() {
			window.clearTimeout(Vnmnn);
			nV.state = nV.mMM.drawPlayerStates;
			if (nV.wWm !== null) nV.wWm();
		};

		function VmwvM(VVmnW) {
			if (VVmnW > Wnmmn) nV.state = mMM.MMwmm;
			else if (VVmnW < Wnmmn) nV.state = mMM.WvnWW;
			window.clearTimeout(Vnmnn);
		};

		function vmmvm() {
			NNvWV = [];
			VNMVw = nV.wvm[nV.vvm][WWvwV];
			for (var mN = 0; mN < nV.wvm.length; mN++) {
				if (VNMVw === nV.wvm[mN][WWvwV]) NNvWV.push(mN);
			}
			nV.vvm = NNvWV[Math.floor(Math.random() * NNvWV.length)];
		};

		function Wwmvw(nMnwN) {
			nWNVV();
			window.setTimeout(function() {
				vmmvm();
				nMnwN();
			}, VvMNM);
		};

		function mWMWn() {
			MWmwv = window.JSON.stringify(window.localStorage.getItem("lastServer"));
			for (var mN = 0; mN < nV.wvm.length; mN++) {
				var MWnmw = nV.wvm[mN];
				if ((MWnmw[0] === MWmwv[0]) && (MWnmw[1] === MWmwv[1])) {
					nV.vvm = mN;
					return;
				}
			}
			throw "Server not found"
		};

		function wMwnm(nMnwN) {
			var nwwMm = 0;
			try {
				mWMWn();
				nwwMm = 1;
			} catch (error) {
				Wwmvw(nMnwN);
			}
			if (nwwMm === 1) nMnwN();
		};

		function WnnNv(nMnwN) {
			// window.console.log("GETSERVERLIST");
			if (VnmWn === undefined) {
				var WNW = new window.XMLHttpRequest;
				WNW.open("GET", serverList, true);
				WNW.onreadystatechange = function() {
					if ((WNW.readyState === 4) && (this.status === 200)) {
						nV.wvm = window.JSON.parse(this.responseText);
						wMwnm(nMnwN);
					}
				};
				WNW.send();
			} else {
				nV.wvm = wNNnW;
				wMwnm(nMnwN);
			}
		};

		function nWNVV() {
			const nVn = [];
			var MWwmv = nV.wvm;
			MnMNm = mWmWW;
			for (var mN = 0; mN < MWwmv.length; mN++) {
				var MWnmw = MWwmv[mN];
				var nwNWm = MWnmw[WWvwV];
				var vwwnw = 0;
				for (var VmW = 0; VmW < nV.MVVNM.length; VmW++) {
					if (nwNWm.indexOf(nV.MVVNM[VmW]) !== -1) {
						// //window.console.log("EXCLUSION OF " + nwNWm);
						vwwnw = 1;
						break;
					}
				}
				if (vwwnw === 1) continue;
				if (nVn[nwNWm] === undefined) {
					nVn[nwNWm] = 1;
					wwWMM(mN);
				}
			}
		};

		function wwWMM(WW) {
			var MWnmw = nV.wvm[WW];
			var WMwvm = window.Date.now();
			var WNW = new window.XMLHttpRequest;
			WNW.open("GET", (((("http" + ((MWnmw[VnWnV] === 1) ? "s" : "")) + "://") + MWnmw[nnvMn]) + ":") + MWnmw[WNMmN], true);
			WNW.onreadystatechange = function() {
				if (WNW.readyState === 4) {
					var NN = window.Date.now() - WMwvm;
					if (NN < MnMNm) {
						MnMNm = NN;
						nV.vvm = WW;
					}
				}
			};
			try {
				WNW.send(null);
			} catch (error) {}
		};

		function nVwMw() {
			var WVvMN = "";
			for (var mN = 0; mN < WwVnw; mN++) {
				WVvMN += window.String.fromCharCode(48 + Math.floor(Math.random() * 74));
			}
			return WVvMN;
		};

		function WvV() {
			if (nV.state === nV.mMM.drawPlayerStates) {
				NmNVM();
				WNMWw();
			}
		};

		function VnW() {
			if (nV.VnW !== null) {
				var NVM = nV.state;
				nV.state = 0;
				nV.VnW(NVM);
			}
		};
		return {
			state: 0,
			mMM: mMM,
			wvm: undefined,
			vvm: 0,
			wnW: wnW,
			wvMmw: wvMmw,
			WnnNv: WnnNv,
			wNVMm: wNVMm,
			wvwmv: wvwmv,
			VmwvM: VmwvM,
			WMvWw: WMvWw,
			VVNNw: VVNNw,
			MvmwN: MvmwN,
			muted: NMmWN,
			VWwMv: VWwMv,
			wMmvN: wMmvN,
			mNm: mNm,
			WVnNm: WVnNm,
			mwwMW: mwwMW,
			MwvMn: MwvMn,
			mmMwn: mmMwn,
			WvVmM: WvVmM,
			vNnVm: vNnVm,
			NwwnV: NwwnV,
			update: WvV,
			MVVNM: [],
			VnW: null,
			wWm: null
		};
	})();
	var wm = (function() {
		var wwv = 0;
		var mvv = 0;
		var wwvvv = 0;
		var VwMMn = 0;
		var VNMWw = 18;
		var WWNMm = 9;
		var WVVvV = 50;

		function NNMWm(Wvmnm, WNNmw) {
			wwv = Wvmnm;
			mvv = WNNmw;
			wwvvv = Wvmnm - 1;
			VwMMn = WNNmw - 1;
		};

		function WMNNN(nwvWM) {
			wm.MNW = -1;
			for (var mN = 0; mN < wm.WnmVM; mN++) {
				if (nwvWM[mN] !== 0) wm.MNW++;
				wm.nNv[mN] = new WmmNV(mN, nwvWM[mN]);
			}
		};

		function WmmNV(WW, mmn) {
			this.mmn = (wM.vnWMW === 1) ? ((mmn + "#") + WW) : mmn;
			this.id = WW;
			this.VvNnm = 0;
			this.MMw = 0;
			this.nVv = 0;
			this.Vw = 0;
			this.NVvnW = 0;
			this.VVm = -1;
			this.wnV = 0;
			this.wmWWW = 0;
			this.MWm = 0;
			this.Vvm = 0;
			this.mwnmn = [];
			this.NwmwN = [];
			this.WNnmW = 0;
			this.MVVMN = 0;
			this.text = [];
			this.nVmNw = [];
			this.wNvnv = [];
			this.label = [];
			this.WwWvn = [{
				x: 0,
				y: 0,
				NN: 0,
				angle: 0,
				size: 0
			}, {
				x: 0,
				y: 0,
				NN: 0,
				angle: 0,
				size: 0
			}, {
				x: 0,
				y: 0,
				NN: 0,
				angle: 0,
				size: 0
			}];
			this.WwVNw = [{
				type: 0,
				x: 0,
				y: 0,
				NN: 0,
				wVWvw: 0,
				mVWvW: 0
			}, {
				type: 0,
				x: 0,
				y: 0,
				NN: 0,
				wVWvw: 0,
				mVWvW: 0
			}, {
				type: 0,
				x: 0,
				y: 0,
				NN: 0,
				wVWvw: 0,
				mVWvW: 0
			}, {
				type: 0,
				x: 0,
				y: 0,
				NN: 0,
				wVWvw: 0,
				mVWvW: 0
			}];
			this.VN = 0;
			this.Mm = 0;
			this.orientation = 1;
			this.mVmVN = 1;
			this.MMm = -1;
			this.MMvwW = 0;
			this.NVmwV = null;
			this.NWm = null;
			this.mwn = null;
			this.nnnNM = -1;
			this.VVn = -1;
			this.x = 0;
			this.y = 0;
			this.rx = 0;
			this.ry = 0;
			this.nnVMN = 0;
		};

		function nVmnn(wVV) {
			for (var mN = 0; mN < VNMWw; mN++) wm.wVV[mN] = new VWWnM(mN, wVV[mN + 1]);
		};

		function vWnnV(WmNNN, WW) {
			if (WW === WVVvV) {
				WmNNN.VVm = -1;
				return;
			} else if (WW > WVVvV) {
				WW -= WVVvV + 1;
				wm.wVV[WW].mwvNm = WmNNN.id;
				WmNNN.wmWWW = 1;
				if (wm.wM.id === WmNNN.id) wm.wM.wmWWW = 1;
			} else WmNNN.wmWWW = 0;
			if (wm.wM.id === WmNNN.id) wm.wM.VVm = WW;
			WmNNN.VVm = WW;
			WmNNN.wnV = wm.wVV[WW].Mvv;
		};

		function vmmmW() {
			wM.mNvWw = 0;
			for (var mN = 0; mN < wM.vmNMw.length; mN++) {
				if (wM.vmNMw[mN] !== 0) {
					wM.mNvWw = wM.vmNMw[mN];
					wM.vmNMw[mN] = 0;
					return;
				}
			}
			wM.nvmWV = 0;
		};

		function VmMvw(WW) {
			var VVm = wm.wVV[WW];
			VVm.label = null;
			VVm.VVvvW = null;
			VVm.Mvv = wnV++;
			VVm.mwvNm = 0;
			VVm.name = "";
		};
		var wnV = 0;

		function VWWnM(WW, vWn) {
			this.id = WW;
			this.name = vWn;
			this.label = null;
			this.VVvvW = null;
			this.mwvNm = 0;
			this.Mvv = wnV++;
		};

		function wnvVN() {
			var VmV = mvn.length;
			for (var mN = 0; mN <= VmV; mN++) {
				if ((VmV !== mN) && (mvn[mN].Mm === 0)) continue;
				var wNn = nmm.wNn[mN];
				var WWV = nmm.border[mN];
				var mVn = WWV.border;
				for (var NM = 0; NM < mVn; NM++) vmMVn(wNn[WWV.nNW[NM]]);
			}
			if (wm.wM.VVm !== -1) {
				for (var mN = 0; mN < wM.WwnnN; mN++) {
					var MwVvn = wM.VMWvW[mN];
					if (MwVvn.WmWmM < 0) continue;
					var NmN = wm.nNv[MwVvn.id];
					NmN.rx = graphicOptions.MmM(NmN.rx, NmN.x, 0.03);
					NmN.ry = graphicOptions.MmM(NmN.ry, NmN.y, 0.03);
					MwVvn.WmWmM -= var13;
				}
			}
			if (wm.wM.NWMNW > 0) {
				var NmN = wm.nNv[wm.wM.MMnnM];
				NmN.rx = graphicOptions.MmM(NmN.rx, NmN.x, 0.03);
				NmN.ry = graphicOptions.MmM(NmN.ry, NmN.y, 0.03);
				wm.wM.NWMNW -= var13;
			}
		};

		function vmMVn(WmObject) {
			nI = WmObject.rx + ((var13 * WmObject.NNV) * WmObject.nMmvM);
			vV = WmObject.ry + ((var13 * WmObject.NNV) * WmObject.WnMNm);
			if (mnW.nmw(WmObject.rx, WmObject.ry, WmObject.Vnn, WmObject.nvM) < mnW.nmw(nI, vV, WmObject.rx, WmObject.ry)) {
				WmObject.rx = WmObject.Vnn;
				WmObject.ry = WmObject.nvM;
			} else {
				WmObject.rx = nI;
				WmObject.ry = vV;
			}
			WmObject.x = vnw.MmM(WmObject.x, WmObject.rx, WmObject.MmM);
			WmObject.y = vnw.MmM(WmObject.y, WmObject.ry, WmObject.MmM);
			WmObject.mN = Math.max(0, Math.min(VwMMn, Math.floor(WmObject.y / nM.vVm)));
			WmObject.NM = Math.max(0, Math.min(wwvvv, Math.floor(WmObject.x / nM.vVm)));
			if ((wm.wM.id === WmObject.Nvn) && (WmObject.id === 0)) WmObject.angle = nmn.angle;
			else if (WmObject.Nvn === 0) WmObject.angle = vnw.MmM(WmObject.angle, WmObject.WMnVN, WmObject.MmM / 2);
			else WmObject.angle = vnw.MmM(WmObject.angle, WmObject.WMnVN, WmObject.MmM * 2);
		};

		function vWWWn(vwV, m) {
			if ((wm.nNv[vwV].mmn === 0) && (wm.nNv[m].mmn === 0)) return 0;
			else if (wm.nNv[vwV].mmn === 0) return wm.nNv[m].Vw - 1;
			else if (wm.nNv[m].mmn === 0) return -1 - wm.nNv[vwV].Vw;
			else return wm.nNv[m].Vw - wm.nNv[vwV].Vw;
		};

		function NMVmM() {
			// window.console.log(wm.WnmVM);
			for (var mN = 0; mN < wm.WnmVM; mN++) wm.NWn[mN] = mN;
			wm.NWn = wm.NWn.sort(vWWWn).slice(0, 10);
			for (var mN = 0; mN < wm.WnmVM; mN++) wm.mWVwN = 1;
		};

		function VNmwm(Nvv, wVv) {
			for (var mN = 0; mN < 10; mN++) {
				var WW = wVv[2 + (mN * 4)];
				var Vw = Nvv[2 + (mN * 2)];
				var wM = wm.nNv[WW];
				wM.Vw = vnw.vwvnN(Vw);
				wM.nnVMN = wVv[3 + (mN * 4)];
				var NVvnW = vnw.WWwMn(wM.Vw);
				if (NVvnW !== wM.NVvnW) wM.mwn = null;
				wM.NVvnW = NVvnW;
				wm.NWn[mN] = WW;
			}
			wm.mWVwN = 1;
		};

		function Wmwwm() {
			this.MmW = 0;
			this.value = 0;
			this.maxValueOfParam = 0;
			this.NNV = 0;
			this.time = 0;
			this.nMnNw = 1;
			this.Mmwnv = 0;
		};

		function vmnWv(Nnw, lParTrue, Wwn, WmM, wmw) {
			Nnw.MmW = lParTrue;
			Nnw.value = lParTrue;
			Nnw.maxValueOfParam = lParTrue;
			Nnw.Wwn = Wwn;
			Nnw.WmM = WmM;
			Nnw.wmw = wmw;
			Nnw.Mmwnv = 0;
		};

		function WmNWw() {
			var Mmw = mvn[mNn].wMw;
			vmnWv(wMw.Nv, Mmw.Nv.maxValueOfParam, Mmw.Nv.Wwn, Mmw.Nv.WmM, 0);
			if (wM.nVv === 0) {
				vmnWv(wMw.nnm, Mmw.nnm.maxValueOfParam, Mmw.nnm.Wwn, Mmw.nnm.WmM, 1);
				vmnWv(wMw.VMW, Mmw.VMW.maxValueOfParam, Mmw.VMW.Wwn, Mmw.VMW.WmM, 0);
				vmnWv(wMw.vVM, Mmw.vVM.maxValueOfParam, Mmw.vVM.Wwn, Mmw.vVM.WmM, -1);
				vmnWv(wMw.WVn, Mmw.WVn.maxValueOfParam, Mmw.WVn.Wwn, Mmw.WVn.WmM, 0);
			} else {
				vmnWv(wMw.nnm, Mmw.nnm.maxValueOfParam, Mmw.nnm.Wwn, 0, 1);
				vmnWv(wMw.VMW, Mmw.VMW.maxValueOfParam, Mmw.VMW.Wwn, 0, 0);
				vmnWv(wMw.vVM, Mmw.vVM.maxValueOfParam, Mmw.vVM.Wwn * 2, Mmw.vVM.WmM / 2, -1);
				vmnWv(wMw.WVn, Mmw.WVn.maxValueOfParam, Mmw.WVn.Wwn, 0, 0);
			}
			vmnWv(wMw.vNn, 255, 0, 0, 0);
			wMw.vNn.value = 0;
			wMw.vNn.MmW = 0;
			wM.vWMmn = VnwMM;
			if (NWW === vWMmv) wMw.VMW.wmw = 1;
		};

		function mNNwn(Nnw) {
			if (Nnw.wmw === 1) Nnw.value = Math.min(Nnw.maxValueOfParam, Math.max(Nnw.value - (var13 * (Nnw.WmM - Nnw.Mmwnv)), 0));
			else if (Nnw.wmw === -1) Nnw.value = Math.min(Nnw.value + (var13 * (Nnw.Wwn + Nnw.Mmwnv)), Nnw.maxValueOfParam);
			Nnw.MmW = vnw.MmM(Nnw.MmW, Nnw.value, 0.1);
		};

		function mMnMN() {
			mNNwn(wMw.Nv);
			mNNwn(wMw.nnm);
			mNNwn(wMw.VMW);
			mNNwn(wMw.WVn);
			mNNwn(wMw.vVM);
			mNNwn(wMw.vNn);
			wm.wM.MwMVV += var13;
			if (wMw.WVn.MmW > 254) vNm.MwmmV = 0;
			else vNm.MwmmV = Math.min(1, Math.max(0, 1 - (wMw.WVn.MmW / 255)));
			mnwVV();
		};
		var wMw = {
			Nv: new Wmwwm,
			nnm: new Wmwwm,
			VMW: new Wmwwm,
			WVn: new Wmwwm,
			vVM: new Wmwwm,
			vNn: new Wmwwm
		};
		var vWMmv = 1;
		var Vvnvm = 0;
		var NWW = Vvnvm;
		var NMvwn = 0;

		function WmVNV() {
			var mnv;
			mnv = NVwNv;
			NVwNv = nvn;
			nvn = mnv;
			mnv = wMvWv;
			wMvWv = wnM;
			wnM = mnv;
			mnv = mVMVW;
			mVMVW = MWW;
			MWW = mnv;
			mnv = vmwwm;
			vmwwm = nwV;
			nwV = mnv;
			mnv = NVvmm;
			NVvmm = mvn;
			mvn = mnv;
			mnv = MmNnW;
			MmNnW = nMVNV;
			nMVNV = mnv;
			mnv = vWnMV;
			vWnMV = NVnNV;
			NVnNV = mnv;
			mnv = vmMmN;
			vmMmN = vMV;
			vMV = mnv;
			NWW = (NWW + 1) % 2;
			wm.NWW = NWW;
			if (NWW === 0) {
				document.getElementById("bod").style.backgroundColor = "#3D5942";
				canvasM.style.backgroundColor = "#3D5942";
			} else {
				document.getElementById("bod").style.backgroundColor = "#0B2129";
				canvasM.style.backgroundColor = "#0B2129";
			}
			NMvwn = 0;
		};

		function Mvnwn(nNW, VvMwV) {
			if (nNW !== NWW) wm.WnV = 1000;
			wm.NWW = NWW;
			NMvwn = VvMwV;
		};

		function WvvVv(nNW, VvMwV) {
			if (nNW !== NWW) WmVNV();
			wm.NWW = NWW;
			NMvwn = VvMwV;
		};

		function mMWWm() {
			NMvwn += var13;
			return (NMvwn % wm.Vvnvm) + (NWW * 10000000);
		};

		function WNWmm(WW) {
			var VmV = 0;
			var NW = nvn[WW];
			WWm.mvvVn.nWm(NW.nN.src, NW.nN.image);
			var VnnMM = NW.detail.Mnw;
			var mNv = NW.detail.VMV;
			var Mnw = WWm.Mnw;
			var VVvMm = WWm.VVvMm;
			var mwMNW = wM.mwMNW;
			wM.Wvnwn = WW;
			if (mNv !== undefined) {
				for (var mN = 0; mN < mNv.length; mN++) {
					var mwV = Mvmvn[mNv[mN]];
					if (mwV !== undefined) {
						NW = nvn[mwV];
						VVvMm[VmV].nWm(NW.nN.src, NW.nN.image);
						VmV++;
					}
				}
			}
			wM.nmwMW = VmV;
			VmV = 0;
			if (VnnMM !== undefined) {
				for (mN = 0; mN < VnnMM.length; mN++) {
					NW = nvn[VnnMM[mN][0]];
					Mnw[VmV].nWm(NW.nN.src, NW.nN.image);
					mwMNW[VmV] = NW.id;
					VmV++;
				}
			}
			wM.nMWwV = VmV;
			MWVmv(VnnMM);
		};

		function NNwww(WW, wn) {
			if ((wM.mWwnw[WW] === 1) || (wn.level === -1)) return 2;
			else if (((wn.level > wM.level) || (wM.nMV < wn.nMnmm)) || ((wn.WvWvV !== -1) && (wM.mWwnw[wn.WvWvV] === undefined))) return 0;
			return 1;
		};

		function MWVmv(Mnw) {
			var WvmMw = wM.NvmWW;
			var mv = wM.Nwv;
			var MVNWW = 1;
			if (Mnw === undefined) return MVNWW;
			for (var mN = 0; mN < Mnw.length; mN++) {
				var Mnvnw = Mnw[mN];
				for (var NM = 0; NM < mv.length; NM++) {
					var NW = mv[NM];
					if (NW[0] === Mnvnw[0]) {
						if (NW[1] >= Mnvnw[1]) {
							WvmMw[mN] = Mnvnw[1];
							break;
						} else WvmMw[mN] = -Mnvnw[1];
					}
				}
				if (NM === mv.length) {
					WvmMw[mN] = -Mnvnw[1];
					MVNWW = 0;
				}
			}
			return MVNWW;
		};

		function NVvVm() {
			if ((wm.wM.vVw === 1) || (wm.wM.NwnWW === 1)) {
				wm.wM.vVw = 0;
				wm.wM.NwnWW = 0;
				nV.mNm("[17]");
			}
		};

		function NnV(vnW) {
			wm.NVvVm();
			var mVVMW = 0;
			var WVvmv = 0;
			var VmV = 0;
			var vNN = wM.vmm;
			var vmm = WWm.vNN;
			var mvW = wM.mvW;
			for (var mN = 1; mN < nvn.length; mN++) {
				var NW = nvn[mN];
				if (NW.detail.vnW === vnW) {
					if (mVVMW === 0) {
						mVVMW = mN;
						WVvmv = VmV;
					}
					vmm[VmV].nWm(NW.nN.src, NW.nN.image);
					vNN[VmV] = mN;
					mvW[VmV] = NNwww(mN, NW.detail);
					VmV++;
				}
			}
			wM.nMWNN = VmV;
			wM.wmn = -1;
			wM.wvV = vnW;
			wM.WMNvw = WVvmv;
			WNWmm(mVVMW);
		};

		function nWw(VMV) {
			if (VMV === Mw.WVv) {
				wm.NVvVm();
				wM.Vv.mWm = -1;
			}
			var mVVMW = 0;
			var WVvmv = 0;
			var WvWvV = wm.wM.Wvnwn;
			var VmV = 0;
			var vNN = wM.vmm;
			var mvW = wM.mvW;
			var vmm = WWm.vNN;
			for (var mN = 1; mN < nvn.length; mN++) {
				var NW = nvn[mN];
				var wn = NW.detail;
				if (((wn.VMV !== undefined) && (wn.VMV.indexOf(VMV) !== -1)) && ((wn.level === -1) || (wM.mWwnw[NW.id] === 1))) {
					if ((mVVMW === 0) || (WvWvV === mN)) {
						mVVMW = mN;
						WVvmv = VmV;
					}
					vmm[VmV].nWm(NW.nN.src, NW.nN.image);
					vNN[VmV] = mN;
					mvW[VmV] = MWVmv(wn.Mnw);
					VmV++;
				}
			}
			wM.nMWNN = VmV;
			wM.wmn = VMV;
			wM.wvV = -1;
			wM.WMNvw = WVvmv;
			if (mVVMW > 0) WNWmm(mVVMW);
		};
		VnwMM = 900;
		Wwwnm = 1.105;

		function nVWwM(wVM) {
			var vNn = VnwMM;
			for (var mN = 0; mN < wVM; mN++) vNn = Math.floor(vNn * Wwwnm);
			return vNn;
		};

		function mnwVV() {
			if ((wM.vNn > 0) && (Math.abs(wMw.vNn.MmW - wMw.vNn.value) < 0.6)) {
				if (wMw.vNn.value === 255) {
					wMw.vNn.MmW = 0;
					wMw.vNn.value = 0;
					wM.level++;
					wM.nMV++;
					if ((WWm.wWV() === 1) && (wM.wvV !== -1)) NnV(wM.wvV);
					audioHandler.wmN(audioHandler.vm.NNWmw, 1, 0);
					return;
				}
				if (wM.vNn >= wM.vWMmn) {
					wMw.vNn.value = 255;
					wM.vNn -= wM.vWMmn;
					wM.vWMmn = Math.floor(wM.vWMmn * Wwwnm);
				} else wMw.vNn.value = Math.floor((255 * wM.vNn) / wM.vWMmn);
			}
		};
		var wM = {
			id: 0,
			x: 0,
			y: 0,
			vNW: 0,
			nwm: 0,
			Vw: 0,
			NNNNm: -1,
			nWWMn: 0,
			mwn: null,
			click: 0,
			Nwv: [],
			nMWwV: 0,
			nmwMW: 0,
			nMNNN: 0,
			nMWNN: 0,
			vVw: 0,
			NwnWW: 0,
			wmn: -1,
			wvV: -1,
			Wvnwn: -1,
			WMNvw: -1,
			mWwnw: [],
			level: 0,
			NmwWN: 0,
			vNn: 0,
			vWMmn: 0,
			nMV: 0,
			mwMNW: [],
			vmm: [],
			mvW: [],
			NvmWW: [],
			VWnwv: 0,
			mMVvM: 0,
			mwW: {
				mwN: 0,
				x: 0,
				y: 0,
				id: 0
			},
			VvnMw: null,
			wMW: -1,
			vMNww: 0,
			mmNWn: 0,
			WV: -1,
			NvmvM: -1,
			Mvwnw: 0,
			VVw: -1,
			vwvnm: -1,
			VmVVn: -1,
			wvWnM: -1,
			VNM: [
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0],
				[0, 0, 0, 0]
			],
			VWwwN: 0,
			Vv: {
				MNv: [0, 0, 0, 0],
				Wv: 0,
				time: 0,
				wmvVV: 0,
				VmV: 0,
				mWm: 0
			},
			wmm: 0,
			wMWVm: 0,
			nWnmw: 0,
			nNVmV: 0,
			vMv: 0,
			WvN: [0, 0, 0],
			wVVVw: 0,
			MNNmv: 0,
			vWNWM: [0, 0, 0],
			wnvwv: [0, 0, 0],
			WMV: 0,
			MvM: 0,
			vMw: 0,
			mvMNM: 0,
			mnn: 0,
			mMMwN: 0,
			vVmMW: 0,
			nvmWV: 0,
			wmWWW: 0,
			vmWWm: 0,
			MNnwM: 0,
			NMwwv: 0,
			Nwvnn: 0,
			vmNMw: [0, 0, 0, 0, 0],
			mNvWw: 0,
			MNnwM: 0,
			VVm: -1,
			VMWvW: [],
			WwnnN: 0,
			nnVMN: 0,
			MMnnM: 0,
			NWMNW: 0,
			mmwVv: null,
			wMvmN: 0,
			NNvwN: 1,
			nNnWw: 0,
			MwNmV: 0,
			WNWVM: 0,
			vnWMW: 0,
			nVv: 0,
			wMvwm: []
		};
		return {
			MvN: 0,
			MNMwn: 1,
			mWwvm: 2,
			wNN: 0,
			NWn: [],
			NMVmM: NMVmM,
			VNmwm: VNmwm,
			NNMWm: NNMWm,
			mWVwN: 0,
			WnmVM: 0,
			MNW: 0,
			nVmnn: nVmnn,
			wVV: [],
			vWnnV: vWnnV,
			VmMvw: VmMvw,
			vmmmW: vmmmW,
			WMNNN: WMNNN,
			nNv: [],
			wM: wM,
			vmMVn: vmMVn,
			wnvVN: wnvVN,
			wMw: wMw,
			WmNWw: WmNWw,
			mMnMN: mMnMN,
			WmVNV: WmVNV,
			Mvnwn: Mvnwn,
			WvvVv: WvvVv,
			mMWWm: mMWWm,
			Vvnvm: (8 * 60) * 1000,
			NWW: 0,
			WnV: 0,
			nWw: nWw,
			NnV: NnV,
			WNWmm: WNWmm,
			NVvVm: NVvVm,
			nVWwM: nVWwM
		};
	})();
	var nmm = (function() {
		var nVNww = 0;
		const wNn = [];
		const WWV = [];
		let VVnvW = [];
		var VNnMm = 0;

		function wnW(vnnwV, nwWmw, nwVMN) {
			nmm.nwWmw = (nwWmw === undefined) ? 0 : nwWmw;
			nmm.nwVMN = (nwVMN === undefined) ? 0 : nwVMN;
			VNnMm = nmm.nwVMN + nmm.nwWmw;
			nVNww = mvn.length;
			var VmV = mvn.length + 1;
			for (var mN = 0; mN < VmV; mN++) {
				WWV[mN] = new NmWnM.NmWnM(vnnwV);
				wNn[mN] = [];
				for (var NM = 0; NM < vnnwV; NM++) wNn[mN][NM] = nmm.create(mN);
			}
		};

		function wWmmW(vW) {
			return new VmVnM(vW);
		};

		function vnNMN() {
			for (var mN = 0; mN < mvn.length; mN++) WWV[mN].border = 0;
			VVnvW = [];
		};

		function wVw(Nvn, WW, Mvv, vW, NMmnw) {
			var mN = 0;
			var WvVWM = (((Nvn === 0) ? 0 : VNnMm) + (Nvn * nmm.NnvMM)) + WW;
			var WmObject = VVnvW[WvVWM];
			if (((WmObject !== undefined) && (WmObject.type === vW)) && (WmObject.Mvv === Mvv)) VVnvW[WvVWM] = undefined;
			var m = WWV[vW];
			var wmMmv = wNn[vW];
			var VmV = m.border;
			for (mN = 0; mN < VmV; mN++) {
				var WmObject = wmMmv[m.nNW[mN]];
				if (((WmObject.Mvv === Mvv) && (WmObject.Nvn === Nvn)) && (WmObject.id === WW)) {
					NmWnM.VMnWm(m, mN);
					if ((mvn[WmObject.type].remove > 0) && (NMmnw === 1)) {
						var MMMMn = wNn[nVNww][NmWnM.nnVnn(WWV[nVNww])];
						for (var NM in WmObject) MMMMn[NM] = WmObject[NM];
						MMMMn.wWn = 1;
					}
					return;
				}
			}
		};

		function vvW(Nvn, WW, Mvv, vW) {
			var WvVWM = (((Nvn === 0) ? 0 : VNnMm) + (Nvn * nmm.NnvMM)) + WW;
			var WmObject = VVnvW[WvVWM];
			if ((WmObject === undefined) || (WmObject.Mvv !== Mvv)) {
				var NVVnW = NmWnM.nnVnn(WWV[vW]);
				WmObject = wNn[vW][NVVnW];
				if (WmObject === undefined) {
					// window.console.log("Memory Warn: new entitie created");
					wNn[vW][NVVnW] = nmm.create(vW);
					WmObject = wNn[vW][NVVnW];
				}
				VVnvW[WvVWM] = WmObject;
				WmObject.update = 0;
				WmObject.wWn = 0;
			}
			return WmObject;
		};

		function MwvNm() {
			var m = WWV[nVNww];
			var wmMmv = wNn[nVNww];
			var VmV = m.border;
			for (mN = 0; mN < VmV; mN++) {
				var WmObject = wmMmv[m.nNW[mN]];
				if (WmObject.wWn !== 1) {
					NmWnM.VMnWm(m, mN);
					VmV--;
					mN--;
				}
			}
		};

		function wNVNv(vW, Nvn, WW) {
			var wmMmv = wNn[vW];
			var m = WWV[vW];
			var VmV = m.border;
			for (var mN = 0; mN < VmV; mN++) {
				var VV = wmMmv[m.nNW[mN]];
				if ((VV.id === WW) && (VV.Nvn === Nvn)) return VV;
			}
			return null;
		};
		return {
			wnW: wnW,
			create: wWmmW,
			get: vvW,
			wNVNv: wNVNv,
			remove: wVw,
			vnNMN: vnNMN,
			wNn: wNn,
			border: WWV,
			MwvNm: MwvNm,
			NnvMM: 0,
			nwWmw: 0,
			nwVMN: 0
		};
	})();
	var mvn = [{
		wMw: {
			Nv: {
				maxValueOfParam: 255,
				WmM: 0.005,
				Wwn: 0.005
			},
			nnm: {
				maxValueOfParam: 255,
				WmM: 0.0012,
				Wwn: 0.0012
			},
			VMW: {
				maxValueOfParam: 255,
				WmM: 0.0035,
				Wwn: 0.005
			},
			WVn: {
				maxValueOfParam: 255,
				WmM: 0.024,
				Wwn: 0.003
			},
			vVM: {
				maxValueOfParam: 255,
				WmM: 0.03,
				Wwn: 0.015
			}
		},
		NWNWv: [{
			head: {
				src: "img/day-skin0.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm0.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm0.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-skin1.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm0.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm0.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-skin2.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm2.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm2.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-skin3.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm2.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm2.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-skin4.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm4.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm4.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-skin5.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm4.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm4.png",
				image: {
					v: 0
				}
			}
		}],
		wVWmw: [{}, {
			head: {
				src: "img/day-headscarf.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-chapka.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-chapka.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-chapka.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-coat.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-coat.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-coat.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-gaz-mask.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-gaz-protection.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-gaz-protection.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-gaz-protection.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-radiation-suit.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-radiation-suit.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-radiation-suit.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-metal-helmet.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-welding-helmet.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-welding-helmet.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-welding-helmet.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-gladiator-helmet.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-gladiator-armor.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-gladiator-armor.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-leather-jacket.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-leather-jacket.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-leather-jacket.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-kevlar-suit.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-kevlar-suit.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-kevlar-suit.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-SWAT-suit.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-SWAT-suit.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-SWAT-suit.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-protective-suit.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-protective-suit.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-protective-suit.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-tesla-0.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-tesla-0.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-tesla-0.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-tesla-armor.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-tesla-armor.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-tesla-armor.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-camouflage-gear.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-camouflage-gear.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-camouflage-gear.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-christmas-hat.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-deer-hat.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-snowman-hat.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-snowman-hat.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-snowman-hat.png",
				image: {
					v: 0
				}
			}
		}, {
			head: {
				src: "img/day-elf-hat.png",
				image: {
					v: 0
				}
			},
			VNW: {
				src: "img/day-left-arm-elf-hat.png",
				image: {
					v: 0
				}
			},
			nvV: {
				src: "img/day-right-arm-elf-hat.png",
				image: {
					v: 0
				}
			}
		}],
		WwWvn: {
			src: "img/day-run-effect.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-dead-player.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/hurt-player.png",
			image: {
				v: 0
			}
		},
		nWV: {
			src: "img/heal-player.png",
			image: {
				v: 0
			}
		},
		nnm: {
			src: "img/food-player.png",
			image: {
				v: 0
			}
		},
		WwVNw: [{
			src: "img/day-shotgun-cartridge.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-9mm-cartridge.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-AK47-cartridge.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-crossbow-cartridge.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-nails-cartridge.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-cells-cartridge.png",
			image: {
				v: 0
			}
		}],
		vVMwn: [
			[{
				src: "img/day-bullet1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-bullet2.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-bullet2l.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-bullet3.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-bullet4.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-bullet4l.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-bullet5.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-bullet6.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-bullet6l.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-wood-arrow.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-wood-arrow1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-wood-arrowl.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-wood-spear0.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-wood-spear1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-wood-spearl.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-wood-crossarrow.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-wood-crossarrow1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-wood-crossarrowl.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-nail1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-nail2.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-nail2l.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-laser0.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-laser1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-laser1l.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-grenade0.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-grenade1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-grenadel.png",
				image: {
					v: 0
				}
			}]
		],
		nNN: [
			[{
				src: "img/day-gun-effect0.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-gun-effect1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-gun-effect2.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-laser-effect0.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-laser-effect1.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-laser-effect2.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-laser-effect3.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-laser-effect4.png",
				image: {
					v: 0
				}
			}]
		],
		mMvVV: [{
			type: 0,
			id: 0,
			MNm: 0,
			nvV: {
				angle: 0,
				x: 22,
				y: 39
			},
			VNW: {
				angle: 0,
				x: 22,
				y: -39
			},
			nmW: 0,
			www: 0.5,
			vvN: 3,
			VNV: ["audio/hand-swing0.mp3", "audio/hand-swing2.mp3", "audio/hand-swing3.mp3"],
			VN: 0.05,
			Mm: 3,
			NN: 300,
			NWv: 301,
			mVV: 150,
			NwW: 20,
			NnMwM: 3,
			wmv: 10,
			vVM: 2,
			nnv: 30,
			VNmvn: 0,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 0.8,
			vvN: 1,
			VNV: ["audio/pickaxe-swing.mp3"],
			Vn: {
				src: "img/day-stone-pickaxe.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 30,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			NN: 800,
			mWMnM: 800,
			NWv: 801,
			mVV: 650,
			NwW: 45,
			NnMwM: 16,
			wmv: 15,
			vVM: 5,
			nnv: 50,
			WNw: 56,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 0.8,
			vvN: 1,
			VNV: ["audio/pickaxe-swing.mp3"],
			Vn: {
				src: "img/day-steel-pickaxe.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 30,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			NN: 800,
			mWMnM: 800,
			NWv: 801,
			mVV: 650,
			NwW: 55,
			NnMwM: 22,
			wmv: 15,
			vVM: 5,
			nnv: 50,
			WNw: 56,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 0.8,
			vvN: 1,
			VNV: ["audio/hatchet-swing.mp3"],
			Vn: {
				src: "img/day-hachet.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 30,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			NN: 500,
			mWMnM: 500,
			NWv: 501,
			mVV: 350,
			NwW: 30,
			NnMwM: 7,
			wmv: 10,
			vVM: 4,
			nnv: 40,
			WNw: 59,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 0.8,
			vvN: 1,
			VNV: ["audio/axe-swing.mp3"],
			Vn: {
				src: "img/day-stone-axe.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 30,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.05,
			Mm: 3,
			NN: 650,
			NWv: 651,
			mVV: 550,
			NwW: 50,
			NnMwM: 26,
			wmv: 20,
			vVM: 4,
			nnv: 46,
			WNw: 72,
			MMm: 0,
			MW: 0
		}, {
			type: 3,
			id: 0,
			MNm: 1,
			nmW: 0.75,
			www: 1,
			vvN: 1,
			VNV: ["audio/spear-shot.mp3"],
			Vn: {
				src: "img/day-wood-spear.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 25,
				y: 40
			},
			nvV: {
				angle: 0,
				x: 10,
				y: 44
			},
			VNW: {
				angle: 0,
				x: 22,
				y: -39
			},
			Nwn: [0],
			NMv: 4,
			MNM: 0.5,
			wvn: 1,
			path: 600,
			NwW: 80,
			wmv: 30,
			VN: 0.05,
			nvwnw: 2,
			Mm: 3,
			NN: 850,
			NWv: 100,
			mVV: 100,
			vVM: 15,
			x: -40,
			WNw: 47,
			Mmv: 60,
			MMm: 0,
			MW: 0
		}, {
			type: 4,
			id: 0,
			MNm: 1,
			Nmnvv: {
				src: "img/day-wood-arrow1.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			nmW: 1.08,
			www: 1.4,
			vvN: 1,
			VNV: ["audio/bow-shot.mp3"],
			Vn: {
				src: "img/day-wood-bow.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 44,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 10,
				y: 44
			},
			VNW: {
				angle: 0,
				x: 40,
				y: -30
			},
			NwW: 40,
			wmv: 10,
			Nwn: [0],
			NMv: 3,
			MNM: 0.75,
			wvn: 1,
			path: 800,
			VN: 0.5,
			nvwnw: 1,
			Mm: 1,
			NN: 1200,
			NWv: 120,
			mVV: 100,
			vVM: 8,
			x: -1,
			WNw: 47,
			Mmv: -8,
			MMm: 0,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 43,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/shotgun-shot.mp3"],
			Vn: {
				src: "img/day-shotgun.png",
				image: {
					v: 0
				},
				x: 60,
				y: 0
			},
			NwW: 21,
			wmv: 20,
			nNN: 0,
			nWW: 0,
			Vmnnw: 500,
			NMW: 3,
			NNn: 4,
			vNw: 3,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0, 0.1, -0.1, 0.2, -0.2],
			NMv: 2,
			MNM: 1.1,
			wvn: 1,
			NNmMv: 8,
			reload: 10,
			Nvnmw: 1,
			Mmv: 58,
			VN: 1,
			Mm: 2,
			NN: 900,
			NWv: 901,
			vVM: 0,
			x: 0,
			path: 600,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/9mm-shot.mp3"],
			Vn: {
				src: "img/day-9mm.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			NwW: 28,
			wmv: 10,
			nNN: 0,
			nWW: 1,
			Vmnnw: 400,
			NMW: 2,
			NNn: 1,
			vNw: 2,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 0,
			MNM: 1.2,
			wvn: 1,
			NNmMv: 20,
			reload: 22,
			Nvnmw: 0,
			Mmv: 40,
			VN: 1,
			Mm: 2,
			NN: 400,
			NWv: 401,
			vVM: 0,
			x: 0,
			path: 800,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			nmW: 0,
			www: 1.3,
			vvN: 1,
			VNV: ["audio/desert-eagle-shot.mp3"],
			Vn: {
				src: "img/day-desert-eagle.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			NwW: 40,
			wmv: 25,
			nNN: 0,
			nWW: 1,
			Vmnnw: 400,
			NMW: 2,
			NNn: 1,
			vNw: 2,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 0,
			MNM: 1.4,
			wvn: 1,
			NNmMv: 7,
			reload: 22,
			Nvnmw: 0,
			Mmv: 40,
			VN: 1,
			Mm: 2,
			NN: 400,
			NWv: 401,
			vVM: 0,
			x: 0,
			path: 900,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 43,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/ak47-shot.mp3"],
			Vn: {
				src: "img/day-AK47.png",
				image: {
					v: 0
				},
				x: 60,
				y: 0
			},
			NwW: 30,
			wmv: 25,
			nNN: 0,
			nWW: 2,
			Vmnnw: 500,
			NMW: 3,
			NNn: 2,
			vNw: 4,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 1,
			MNM: 1.4,
			wvn: 1,
			NNmMv: 30,
			reload: 25,
			Nvnmw: 0,
			Mmv: 58,
			VN: 1,
			Mm: 2,
			NN: 120,
			NWv: 121,
			vVM: 0,
			x: 0,
			path: 900,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 43,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/sniper-shot.mp3"],
			Vn: {
				src: "img/day-sniper.png",
				image: {
					v: 0
				},
				x: 60,
				y: 0
			},
			NwW: 90,
			wmv: 30,
			nNN: 0,
			nWW: 2,
			Vmnnw: 500,
			NMW: 3,
			NNn: 1,
			vNw: 4,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 1,
			MNM: 1.5,
			wvn: 1,
			NNmMv: 10,
			reload: 20,
			Nvnmw: 0,
			Mmv: 70,
			VN: 1,
			Mm: 2,
			NN: 1250,
			NWv: 1251,
			vVM: 0,
			x: 0,
			path: 1100,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-raw-steak.png",
				image: {
					v: 0
				},
				angle: 1,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 20,
			nnm: 30,
			nvN: 0,
			mWV: 20,
			nWV: -10,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-cooked-steak.png",
				image: {
					v: 0
				},
				angle: 1,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 4,
			VN: 0.4,
			Mm: 0.8,
			vVM: 0,
			mNW: 200,
			wait: 20,
			nnm: 127,
			nvN: 0,
			mWV: 80,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-steak.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 20,
			nnm: 15,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-orange.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 40,
			nvN: 0,
			mWV: 10,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-orange.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 5,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-medikit.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 55,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 32
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -32
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 25,
			nnm: 0,
			nvN: 0,
			mWV: 0,
			nWV: 200,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-bandage.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 0,
			nvN: 0,
			mWV: 0,
			nWV: 60,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-soda.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 30,
			nvN: 0,
			mWV: 155,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 43,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/mp5-shot.mp3"],
			Vn: {
				src: "img/day-MP5.png",
				image: {
					v: 0
				},
				x: 60,
				y: 0
			},
			NwW: 18,
			wmv: 15,
			nNN: 0,
			nWW: 1,
			Vmnnw: 500,
			NMW: 3,
			NNn: 2,
			vNw: 4,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 0,
			MNM: 1.2,
			wvn: 1,
			NNmMv: 30,
			reload: 26,
			Nvnmw: 0,
			Mmv: 52,
			VN: 1,
			Mm: 2,
			NN: 100,
			NWv: 101,
			vVM: 0,
			x: 0,
			path: 900,
			WNw: 47,
			MW: 0
		}, {
			type: 6,
			id: 0,
			MNm: 0,
			nvV: {
				angle: 0,
				x: 22,
				y: 39
			},
			VNW: {
				angle: 0,
				x: 22,
				y: -39
			},
			VN: 0.05,
			Mm: 3,
			VNmvn: 0,
			wmm: {
				src: "img/day-hand-craft.png",
				image: {
					v: 0
				}
			},
			wnvMm: {
				src: "img/day-hand-craftpencil.png",
				image: {
					v: 0
				}
			},
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 0.8,
			vvN: 1,
			VNV: ["audio/pickaxe-swing.mp3"],
			Vn: {
				src: "img/day-sulfur-pickaxe.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 20,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			NN: 800,
			mWMnM: 800,
			NWv: 801,
			mVV: 650,
			NwW: 65,
			NnMwM: 30,
			wmv: 15,
			vVM: 5,
			nnv: 50,
			WNw: 56,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 0.8,
			vvN: 1,
			VNV: ["audio/hammer-swing.mp3"],
			Vn: {
				src: "img/day-hammer.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 25,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			NN: 1100,
			mWMnM: 1100,
			NWv: 1101,
			mVV: 950,
			NwW: 120,
			NnMwM: 30,
			wmv: 30,
			vVM: 15,
			nnv: 40,
			WNw: 56,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-repair-hammer.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 20,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			NN: 700,
			mWMnM: 700,
			NWv: 701,
			mVV: 550,
			NwW: 40,
			NnMwM: 15,
			wmv: 10,
			vVM: 6,
			nnv: 40,
			WNw: 59,
			MMm: 0,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-tomato-soup.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 30,
			nnm: 160,
			nvN: 0,
			mWV: 40,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-radaway.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 25
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -25
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 30,
			nnm: 0,
			nvN: 255,
			mWV: 30,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-tomato.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 50,
			nvN: 0,
			mWV: 10,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-tomato.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 5,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/crossbow-shot.mp3"],
			Vn: {
				src: "img/day-wood-crossbow.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			NwW: 50,
			wmv: 15,
			nNN: 0,
			nWW: 3,
			Vmnnw: 400,
			NMW: 2,
			NNn: 1,
			vNw: 2,
			WWv: 1,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 5,
			MNM: 0.95,
			wvn: 1,
			NNmMv: 1,
			reload: 8,
			Nvnmw: 0,
			Mmv: 40,
			VN: 1,
			Mm: 2,
			NN: 400,
			NWv: 401,
			vVM: 12,
			x: 0,
			path: 800,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/nail-gun-shot.mp3"],
			Vn: {
				src: "img/day-nail-gun.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			NwW: 6,
			wmv: 10,
			nNN: 0,
			nWW: 4,
			Vmnnw: 400,
			NMW: 2,
			NNn: 1,
			vNw: 2,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 6,
			MNM: 1,
			wvn: 1,
			NNmMv: 80,
			reload: 30,
			Nvnmw: 0,
			Mmv: 52,
			VN: 1,
			Mm: 2,
			NN: 300,
			NWv: 301,
			vVM: 0,
			x: 0,
			path: 500,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 43,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/shotgun-shot.mp3"],
			Vn: {
				src: "img/day-sawed-off-shotgun.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			NwW: 28,
			wmv: 30,
			nNN: 0,
			nWW: 0,
			Vmnnw: 500,
			NMW: 3,
			NNn: 4,
			vNw: 3,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0, 0.12, -0.12, 0.24, -0.24],
			NMv: 2,
			MNM: 1.11,
			wvn: 1,
			NNmMv: 8,
			reload: 10,
			Nvnmw: 1,
			Mmv: 53,
			VN: 1,
			Mm: 2,
			NN: 900,
			NWv: 901,
			vVM: 0,
			x: 0,
			path: 400,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-chips.png",
				image: {
					v: 0
				},
				angle: 1,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 4,
			VN: 0.4,
			Mm: 0.8,
			vVM: 0,
			mNW: 200,
			wait: 20,
			nnm: 90,
			nvN: 0,
			mWV: 50,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-chips.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 5,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/laser-pistol-shot.mp3"],
			Vn: {
				src: "img/day-laser-pistol.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			NwW: 55,
			wmv: 0,
			nNN: 1,
			nWW: 5,
			Vmnnw: 400,
			NMW: 2,
			NNn: 1,
			vNw: 2,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 7,
			MNM: 1.45,
			wvn: 2,
			NNmMv: 12,
			reload: 22,
			Nvnmw: 0,
			Mmv: 50,
			VN: 1,
			Mm: 2,
			NN: 400,
			NWv: 401,
			vVM: 0,
			x: 0,
			path: 900,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 0.8,
			vvN: 1,
			VNV: ["audio/axe-swing.mp3"],
			Vn: {
				src: "img/day-sulfur-axe.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 30,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.05,
			Mm: 3,
			NN: 650,
			NWv: 651,
			mVV: 550,
			NwW: 50,
			NnMwM: 30,
			wmv: 20,
			vVM: 4,
			nnv: 46,
			WNw: 72,
			MMm: 0,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-joystick.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 2,
			nnm: 0,
			nvN: 0,
			mWV: 0,
			nWV: 0,
			NMV: 0,
			MMm: 0,
			MW: 1
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/laser-submachine-shot.mp3"],
			Vn: {
				src: "img/day-laser-submachine.png",
				image: {
					v: 0
				},
				x: 50,
				y: 0
			},
			NwW: 45,
			wmv: 0,
			nNN: 1,
			nWW: 5,
			Vmnnw: 500,
			NMW: 3,
			NNn: 2,
			vNw: 4,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 7,
			MNM: 1.45,
			wvn: 2,
			NNmMv: 30,
			reload: 25,
			Nvnmw: 0,
			Mmv: 54,
			VN: 1,
			Mm: 2,
			NN: 160,
			NWv: 161,
			vVM: 0,
			x: 0,
			path: 900,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 3,
			id: 0,
			MNm: 1,
			Vn: {
				src: "img/day-hand-grenade.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 25,
				y: 50
			},
			nvV: {
				angle: 0,
				x: 10,
				y: 44
			},
			VNW: {
				angle: 0,
				x: 22,
				y: -39
			},
			Nwn: [0],
			NMv: 8,
			MNM: 0.4,
			wvn: 1,
			path: 380,
			NwW: 15,
			wmv: 5,
			VN: 0.05,
			nvwnw: 2,
			Mm: 3,
			NN: 850,
			NWv: 100,
			mVV: 100,
			vVM: 15,
			x: -50,
			WNw: 47,
			Mmv: 25,
			MMm: 0,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-super-hammer.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 25,
				y: 5,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			NN: 1100,
			mWMnM: 1100,
			NWv: 1101,
			mVV: 950,
			NwW: 1000,
			NnMwM: 255,
			wmv: 30,
			vVM: 15,
			nnv: 40,
			WNw: 56,
			MMm: 0,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-ghoul-drug.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 13
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 30,
			nnm: 0,
			nvN: 0,
			mWV: 0,
			nWV: -10,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-mushroom1.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 0,
			nvN: 0,
			mWV: 10,
			nWV: -20,
			NMV: 12,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-mushroom2.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 40,
			nvN: 0,
			mWV: 10,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-mushroom3.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 40,
			nvN: 0,
			mWV: 10,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-mushroom1.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 0,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 8,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-mushroom2.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 5,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-mushroom3.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 5,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-lapadoine.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 13
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 30,
			nnm: 0,
			nvN: 0,
			mWV: 0,
			nWV: -10,
			NMV: 2,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-pumpkin.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 25
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -25
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 20,
			nnm: 90,
			nvN: 0,
			mWV: 20,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-pumpkin.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 25
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -25
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 30,
			nvN: 0,
			mWV: 0,
			nWV: -40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-antidote.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 13
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -13
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 30,
			nnm: 0,
			nvN: 0,
			mWV: 0,
			nWV: 50,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-acorn.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 10
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -10
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 15,
			nvN: 0,
			mWV: 0,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			nmW: 0,
			www: 1,
			vvN: 3,
			VNV: 1,
			Vn: {
				src: "img/day-hand-rotten-acorn.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 10
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -10
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 2,
			nvN: 0,
			mWV: 0,
			nWV: -20,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 2,
			id: 0,
			MNm: 1,
			nvV: {
				angle: 0,
				x: 32,
				y: 15
			},
			VNW: {
				angle: 0,
				x: 43,
				y: -13
			},
			nmW: 0,
			www: 1,
			vvN: 1,
			VNV: ["audio/laser-sniper-shot.mp3"],
			Vn: {
				src: "img/day-laser-sniper.png",
				image: {
					v: 0
				},
				x: 55,
				y: 0
			},
			NwW: 100,
			wmv: 0,
			nNN: 1,
			nWW: 5,
			Vmnnw: 500,
			NMW: 3,
			NNn: 1,
			vNw: 4,
			WWv: 0,
			MnNWn: 0,
			VmVWw: 0,
			Nwn: [0],
			NMv: 7,
			MNM: 1.5,
			wvn: 2,
			NNmMv: 10,
			reload: 20,
			Nvnmw: 0,
			Mmv: 70,
			VN: 1,
			Mm: 2,
			NN: 1250,
			NWv: 1251,
			vVM: 0,
			x: 0,
			path: 1100,
			WNw: 47,
			MMm: 0,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-christmas-cake.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 10
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -10
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 127,
			nvN: 0,
			mWV: 30,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-rotten-christmas-cake.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 10
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -10
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 10,
			nvN: 0,
			mWV: 0,
			nWV: -20,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-gingerbread-man.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 10
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -10
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 20,
			nvN: 0,
			mWV: 20,
			nWV: 40,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-rotten-gingerbread-man.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 10
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -10
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 10,
			nvN: 0,
			mWV: 0,
			nWV: -20,
			NMV: 0,
			MMm: 1,
			MW: 0
		}, {
			type: 1,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-sugar-can.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 30,
				y: 0,
				VWv: 4,
				x2: 20,
				y2: 10
			},
			nvV: {
				angle: 0,
				x: 33,
				y: 28,
				WNw: 8,
				VWv: 1.8
			},
			VNW: {
				angle: 0,
				x: 30,
				y: -28,
				WNw: -14,
				VWv: 1
			},
			VN: 0.02,
			Mm: 2,
			mWMnM: 650,
			NN: 650,
			NWv: 651,
			mVV: 550,
			NwW: 60,
			NnMwM: 38,
			wmv: 20,
			vVM: 16,
			nnv: 50,
			WNw: 56,
			MMm: 0,
			MW: 0
		}, {
			type: 5,
			id: 0,
			MNm: 0,
			Vn: {
				src: "img/day-hand-sugar-can-bow.png",
				image: {
					v: 0
				},
				angle: 0,
				x: 50,
				y: 0
			},
			nvV: {
				angle: 0,
				x: 32,
				y: 10
			},
			VNW: {
				angle: 0,
				x: 32,
				y: -10
			},
			NMW: 3,
			VN: 0.02,
			Mm: 2,
			vVM: 0,
			mNW: 200,
			wait: 10,
			nnm: 30,
			nvN: 0,
			mWV: 50,
			nWV: 0,
			NMV: 0,
			MMm: 1,
			MW: 0
		}],
		vvVvM: {
			w: 24,
			vwW: 24
		},
		nnv: 38,
		nnwmW: 40,
		NNnNm: 36,
		vMmmM: 36,
		wnwNw: 36,
		nwn: 36,
		NNV: 0.23,
		NMnvW: 0.35,
		NNmvV: 0.08,
		VvVwn: 0.08,
		VMWwm: 0.08,
		MVwMv: 0.05,
		vWnVw: 0,
		remove: 1000,
		z: 0,
		Nv: 0,
		wnvvV: 8,
		MmM: 0.15,
		NVN: -1
	}, {
		vvVvM: {
			w: 0,
			vwW: 0
		},
		nnv: 50,
		NNnNm: 0,
		vMmmM: 0,
		wnwNw: 0,
		nwn: 0,
		NNV: 0.2,
		vWnVw: 2,
		remove: 1000,
		z: 0,
		Nv: 0,
		MmM: 0.1,
		NVN: 20000
	}, {
		vvVvM: {
			w: 0,
			vwW: 0
		},
		nnv: 4,
		NNnNm: 0,
		vMmmM: 0,
		wnwNw: 0,
		nwn: 0,
		NNV: 1,
		vWnVw: 2,
		remove: 1000,
		z: 0,
		Nv: 0,
		MmM: 0.2,
		NVN: -1
	}, {
		vvVvM: {
			w: 0,
			vwW: 0
		},
		NNnNm: 0,
		vMmmM: 0,
		wnwNw: 0,
		nwn: 0,
		NNV: 0,
		Nv: 0,
		remove: 1000,
		z: 0,
		MmM: 0.2,
		vWnVw: 1,
		NVN: -1
	}, {
		vvVvM: {
			w: 0,
			vwW: 0
		},
		NNnNm: 0,
		vMmmM: 0,
		wnwNw: 0,
		nwn: 0,
		NNV: 0,
		Nv: 0,
		remove: 1000,
		z: 0,
		MmM: 0.2,
		vWnVw: 1,
		NVN: -1
	}, {
		vvVvM: {
			w: 0,
			vwW: 0
		},
		NNnNm: 0,
		vMmmM: 0,
		wnwNw: 0,
		nwn: 0,
		NNV: 0,
		Nv: 0,
		remove: 1000,
		z: 0,
		MmM: 0.2,
		vWnVw: 1,
		NVN: -1
	}, {
		vvVvM: {
			w: 0,
			vwW: 0
		},
		NNnNm: 0,
		vMmmM: 0,
		wnwNw: 0,
		nwn: 0,
		NNV: 0,
		Nv: 0,
		remove: 1000,
		z: 0,
		MmM: 0.2,
		vWnVw: 1,
		NVN: -1
	}, {
		NNV: 0.7,
		Nv: 0,
		z: 0,
		MmM: 0.2
	}, {
		vvVvM: {
			w: 24,
			vwW: 24
		},
		nnv: 38,
		nnwmW: 40,
		NNnNm: 36,
		vMmmM: 36,
		wnwNw: 36,
		nwn: 36,
		NNV: 0,
		vWnVw: 0,
		remove: 1000,
		z: 1,
		Nv: 0,
		MmM: 0.15,
		NVN: 1800000
	}, {
		vvVvM: {
			w: 24,
			vwW: 24
		},
		nnv: 38,
		nnwmW: 40,
		NNnNm: 36,
		vMmmM: 36,
		wnwNw: 36,
		nwn: 36,
		NNV: 0,
		vWnVw: 0,
		remove: 1000,
		z: 1,
		Nv: 0,
		MmM: 0.15,
		NVN: 1800000
	}, {
		vvVvM: {
			w: 24,
			vwW: 24
		},
		nnv: 38,
		nnwmW: 40,
		NNnNm: 36,
		vMmmM: 36,
		wnwNw: 36,
		nwn: 36,
		NNV: 0,
		vWnVw: 0,
		remove: 1000,
		z: 1,
		Nv: 0,
		MmM: 0.15,
		NVN: 1800000
	}, {
		vvVvM: {
			w: 24,
			vwW: 24
		},
		nnv: 38,
		nnwmW: 40,
		NNnNm: 36,
		vMmmM: 36,
		wnwNw: 36,
		nwn: 36,
		NNV: 0,
		vWnVw: 0,
		remove: 1000,
		z: 1,
		Nv: 0,
		MmM: 0.15,
		NVN: 1800000
	}, {
		vvVvM: {
			w: 24,
			vwW: 24
		},
		MvNNV: [{
			src: "img/day-explosion0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-explosion9.png",
			image: {
				v: 0
			}
		}],
		nnv: 38,
		nnwmW: 40,
		NNnNm: 36,
		vMmmM: 36,
		wnwNw: 36,
		nwn: 36,
		NNV: 0,
		vWnVw: 2,
		remove: 0,
		z: 1,
		Nv: 64000,
		MmM: 0.15,
		NVN: 1500
	}, {
		vvVvM: {
			w: 24,
			vwW: 24
		},
		nnv: 38,
		nnwmW: 40,
		NNnNm: 36,
		vMmmM: 36,
		wnwNw: 36,
		nwn: 36,
		NNV: 0.23,
		NMnvW: 0.35,
		NNmvV: 0.08,
		MVwMv: 0.05,
		vWnVw: 0,
		remove: 1000,
		z: 0,
		Nv: 0,
		wnvvV: 8,
		MmM: 0.15,
		NVN: -1
	}];

	function VmVnM(vW) {
		this.Mvv = 0;
		this.Nvn = 0;
		this.id = 0;
		this.type = vW;
		this.wVm = 0;
		this.angle = 0;
		this.WMnVN = 0;
		this.nMmvM = 0;
		this.WnMNm = 0;
		this.state = 0;
		this.Wvn = 0;
		this.vmN = 0;
		this.x = 0;
		this.y = 0;
		this.rx = 0;
		this.ry = 0;
		this.Vnn = -1;
		this.nvM = 0;
		this.wVvmv = 0;
		this.WwnMn = 0;
		this.mN = 0;
		this.NM = 0;
		this.NNV = 0;
		this.update = 0;
		this.wWn = 0;
		this.mmw = 0;
		this.vnV = 0;
		this.mWM = 0;
		this.VMv = 0;
		this.nWV = 0;
		this.VMm = 0;
		this.mnM = 0;
		this.VN = 0;
		this.Nww = 0;
		this.NvW = [];
		this.nv = null;
		for (var mN = 0; mN < 10; mN++) this.NvW.push({
			c: 0,
			W: 0,
			NnWnV: 0,
			MnvMN: 0,
			Vnw: 0,
			r: 0
		});
		this.MmM = 0.1;
	};

	function VMwvV(WmObject, Nvn, Mvv, WW, vW, nI, vV, Vnn, nvM, Wvn, angle, NVM) {
		WmObject.Nvn = Nvn;
		WmObject.Mvv = Mvv;
		WmObject.id = WW;
		WmObject.WMnVN = vnw.vNVMM(WmObject.angle, ((angle * 2) * Math.PI) / 255);
		WmObject.state = NVM;
		WmObject.Vnn = Vnn;
		WmObject.nvM = nvM;
		WmObject.Wvn = Wvn;
		if (WmObject.update === 0) {
			var Mmw = mvn[vW];
			WmObject.NNV = Mmw.NNV;
			WmObject.angle = WmObject.WMnVN;
			WmObject.x = nI;
			WmObject.y = vV;
			WmObject.z = Mmw.z;
			WmObject.MmM = Mmw.MmM;
			WmObject.rx = nI;
			WmObject.ry = vV;
			WmObject.mN = Math.floor(vV / nM.vVm);
			WmObject.NM = Math.floor(nI / nM.vVm);
			WmObject.mmw = 0;
			WmObject.vnV = 0;
			WmObject.mWM = 0;
			WmObject.mNw = 0;
			WmObject.VMv = 0;
			WmObject.nWV = 0;
			WmObject.VMm = 0;
			WmObject.VN = 0;
			WmObject.Nww = 0;
			WmObject.mnM = 0;
			WmObject.vmN = 0;
			WmObject.wVm = 0;
			WmObject.nv = null;
			var wnW = Mmw.wnW;
			if (wnW !== undefined) wnW(WmObject);
		}
		var angle = mnW.angle(WmObject.rx, WmObject.ry, Vnn, nvM);
		WmObject.nMmvM = Math.cos(angle);
		WmObject.WnMNm = Math.sin(angle);
		WmObject.update = 1;
	};
	var NmWnM = (function() {
		function nnVnn(m) {
			if (m.border === m.size) {
				m.nNW[m.size] = m.size;
				m.MnMVN[m.size] = m.size;
				m.size++;
			}
			return m.nNW[m.border++];
		};

		function WmmWm(m) {
			if (m.border < m.size) return m.nNW[m.border++];
			return -1;
		};

		function VMnWm(m, wNVwv) {
			m.border--;
			var wVNNw = m.nNW[m.border];
			m.nNW[m.border] = m.nNW[wNVwv];
			m.nNW[wNVwv] = wVNNw;
		};

		function MvwVm(m, nnvmN) {
			m.border--;
			var wVNNw = m.nNW[m.border];
			var MwNNN = m.MnMVN[nnvmN];
			m.nNW[m.border] = nnvmN;
			m.nNW[MwNNN] = wVNNw;
			m.MnMVN[wVNNw] = MwNNN;
			m.MnMVN[nnvmN] = m.border;
		};

		function NmWnM(height) {
			this.size = height;
			this.border = 0;
			this.nNW = [];
			this.MnMVN = [];
			for (var mN = 0; mN < height; mN++) {
				this.nNW[mN] = mN;
				this.MnMVN[mN] = mN;
			}
		};

		function vwNmw(height) {
			var WWV = new NmWnM(height);
			var nNW = WWV.nNW;
			var vnNmM = new window.Array(height);
			this.length = 0;
			this.reset = function MWMVm() {
				WWV.border = 0;
				this.length = 0;
			};
			this.add = function nnvvV(Vnm) {
				vnNmM[nnVnn(WWV)] = Vnm;
				this.length++;
			};
			this.remove = function wVw(Vnm) {
				for (var mN = 0; mN < this.length; mN++) {
					if (vnNmM[nNW[mN]] === Vnm) {
						VMnWm(WWV, mN);
						this.length--;
						return;
					}
				}
			};
			this.get = function vvW(mN) {
				return vnNmM[nNW[mN]];
			};
		};

		function WmnWV(height) {
			var WWV = new NmWnM(height);
			var nNW = WWV.nNW;
			var vnNmM = new window.Array(height);
			var mN = 0;
			var mMNnM = [];
			for (mN = 0; mN < height; mN++) mMNnM[mN] = -1;
			this.length = 0;
			this.reset = function MWMVm() {
				WWV.border = 0;
				this.length = 0;
			};
			this.add = function nnvvV(Vnm) {
				var Wv = nnVnn(WWV);
				vnNmM[Wv] = Vnm;
				mMNnM[Vnm] = WWV.border - 1;
				this.length++;
			};
			this.remove = function wVw(Vnm) {
				var Wv = mMNnM[Vnm];
				if (Wv === -1) return;
				mMNnM[Vnm] = -1;
				VMnWm(WWV, Wv);
				this.length--;
				if (this.length > 0) mMNnM[vnNmM[nNW[Wv]]] = Wv;
			};
			this.get = function vvW(mN) {
				return vnNmM[nNW[mN]];
			};
		};
		return {
			NmWnM: NmWnM,
			WmnWV: WmnWV,
			vwNmw: vwNmw,
			WmmWm: WmmWm,
			nnVnn: nnVnn,
			MvwVm: MvwVm,
			VMnWm: VMnWm
		};
	})();
	var nMWvv = (function() {
		function NmVNM(MNNWN) {
			var MnvMN = 2147483648;
			var vwV = 1103515245;
			var MnM = 12345;
			var NVM = MNNWN ? MNNWN : Math.floor(Math.random() * (MnvMN - 1));
			this.wnW = function(MNNWN) {
				NVM = MNNWN ? MNNWN : Math.floor(Math.random() * (MnvMN - 1));
			};
			this.get = function() {
				NVM = ((vwV * NVM) + MnM) % MnvMN;
				return NVM / MnvMN;
			};
		};
		return {
			NmVNM: NmVNM
		};
	})();
	var vnmNm = (function() {
		function nmmnM(vMN, mMVmw, vVwwN, NWw, wWmMm) {
			var MnvMV = NWw;
			var mwNWW = vMN[vVwwN];
			var nnvwv = vMN[vVwwN];
			vMN[vVwwN] = vMN[wWmMm];
			vMN[wWmMm] = nnvwv;
			for (var vmNwV = NWw; vmNwV < wWmMm; vmNwV++) {
				if (mMVmw(vMN[vmNwV], mwNWW) <= 0) {
					var nnvwv = vMN[vmNwV];
					vMN[vmNwV] = vMN[MnvMV];
					vMN[MnvMV] = nnvwv;
					MnvMV++;
				}
			}
			var nnvwv = vMN[wWmMm];
			vMN[wWmMm] = vMN[MnvMV];
			vMN[MnvMV] = nnvwv;
			return MnvMV;
		};

		function WWmwn(vMN, mMVmw, NWw, wWmMm) {
			var vVwwN = 0;
			if (NWw < wWmMm) {
				vVwwN = NWw + Math.ceil((wWmMm - NWw) * 0.5);
				WnNMW = nmmnM(vMN, mMVmw, vVwwN, NWw, wWmMm);
				WWmwn(vMN, mMVmw, NWw, WnNMW - 1);
				WWmwn(vMN, mMVmw, WnNMW + 1, wWmMm);
			}
		};

		function MwNmN(vMN, mMVmw) {
			try {
				WWmwn(vMN, mMVmw, 0, vMN.length - 1);
			} catch (error) {
				vMN.sort(mMVmw);
			}
		};
		return {
			sort: MwNmN
		};
	})();
	var NMnNw = (function() {
		var MVm = 0;
		var WWWWW = {
			NMMnV: [MVm++, "en"],
			VVwNv: [MVm++, "ru"],
			nmNwW: [MVm++, "sp"],
			VmmMV: [MVm++, "fr"],
			MvVwM: [MVm++, "de"],
			VVNVV: [MVm++, "it"],
			wvmnW: [MVm++, "pl"],
			NNnwW: [MVm++, "pt"]
		};
		var vwN = WWWWW.NMMnV;
		var NVVvV = vwN[0];
		var NmnWm = [];
		for (var mN = 0; mN < MVm; mN++) NmnWm[mN] = [];
		var VVWvv = WWWWW.NMMnV;

		function NWwwn(vwnnw) {
			vwN = vwnnw;
			NMnNw.lang = vwN;
			NVVvV = vwN[0];
			window.localStorage.setItem("lang", window.JSON.stringify(vwN));
		};

		function vvW(WW) {
			if ((NmnWm[NVVvV] === undefined) || (NmnWm[NVVvV][WW] === undefined)) return NmnWm[VVWvv[0]][WW];
			else return NmnWm[NVVvV][WW];
		};

		function vwVNN(WW) {
			var Wmw;
			if ((NmnWm[NVVvV] === undefined) || (NmnWm[NVVvV][WW] === undefined)) MNnWM = NmnWm[VVWvv][WW];
			else MNnWM = NmnWm[NVVvV][WW];
			for (var mN = 1; mN < arguments.length; mN++) MNnWM[0] = MNnWM[0].replace("%d", arguments[mN]);
			return MNnWM;
		};

		function WWMnM(vNWnM) {
			for (var mN = 0; mN < vNWnM.length; mN++) NmnWm[NVVvV][mN] = [vNWnM[mN]];
		};

		function NNmMn(vwnnw, callback) {
			NWwwn(vwnnw);
			if (NmnWm[vwnnw[0]].length !== 0) {
				if (callback !== undefined) callback();
				return;
			}
			var WNW = new window.XMLHttpRequest;
			WNW.open("GET", ("json/lang" + vwnnw[1]) + ".json", true);
			WNW.onreadystatechange = function() {
				if ((WNW.readyState === 4) && (this.status === 200)) {
					WWMnM(window.JSON.parse(this.wvvWn));
					if (callback !== undefined) callback();
				}
			};
			WNW.send();
		};

		function wnW(vNWnM, vwvVn, callback) {
			if (vwvVn !== undefined) VVWvv = vwvVn;
			if (vNWnM !== undefined) {
				var mnv = NVVvV;
				NVVvV = VVWvv[0];
				WWMnM(vNWnM);
				NVVvV = mnv;
			}
			var wwmVw = window.localStorage.getItem("lang");
			if (wwmVw === null) {
				var VWwMM = window.navigator.language || window.navigator.userLanguage;
				switch (VWwMM) {
					case "ru":
						vwN = WWWWW.VVwNv;
						break;
					case "en":
						vwN = WWWWW.NMMnV;
						break;
					case "es":
						vwN = WWWWW.nmNwW;
						break;
					case "fr":
						vwN = WWWWW.VmmMV;
						break;
					case "it":
						vwN = WWWWW.VVNVV;
						break;
					case "pl":
						vwN = WWWWW.wvmnW;
						break;
					case "de":
						vwN = WWWWW.MvVwM;
						break;
					case "pt":
						vwN = WWWWW.NNnwW;
						break;
				}
			} else vwN = window.JSON.parse(wwmVw);
			NNmMn(vwN, callback);
		};
		return {
			languages: WWWWW,
			lang: vwN,
			get: vvW,
			vwVNN: vwVNN,
			wnW: wnW,
			NNmMn: NNmMn
		};
	})();
	var Vvv = (function() {
		var nnVmm = "0";
		var vNwNM = "1";
		var NmV = 0;
		var Nvmwn = 1;
		var nnW = 65;
		var NvM = 68;
		var Wnv = 87;
		var vvv = 83;
		var wMvNW = 37;
		var WmVnV = 39;
		var NVNNw = 38;
		var MwVnM = 40;
		var nnvvW = 16;
		var MWw = (new window.Array(255)).fill(NmV);
		var VnMVW = null;

		function VNNvV() {
			if (VnMVW === vNwNM) return 1;
			else return 0;
		};

		function VNwwV() {
			if (VnMVW === nnVmm) return 1;
			else return 0;
		};

		function WMwWv() {
			nnW = 81;
			NvM = 68;
			Wnv = 90;
			vvv = 83;
			window.localStorage.setItem("keyboardMap", vNwNM);
			VnMVW = vNwNM;
		};

		function VwmVn() {
			nnW = 65;
			NvM = 68;
			Wnv = 87;
			vvv = 83;
			window.localStorage.setItem("keyboardMap", nnVmm);
			VnMVW = nnVmm;
		};

		function mwMmv(vN) {
			var VmW = Math.min(vN.charCode || vN.keyCode, 255);
			MWw[VmW] = NmV;
		};

		function VVnvN(vN) {
			var VmW = Math.min(vN.charCode || vN.keyCode, 255);
			if ((VmW === nnW) || (VmW === wMvNW)) wVwnw();
			else if ((VmW === Wnv) || (VmW === NVNNw)) wwVNm();
			else if ((VmW === vvv) || (VmW === MwVnM)) nnNMV();
			else if ((VmW === NvM) || (VmW === WmVnV)) VNNWN();
			MWw[VmW] = Nvmwn;
			return VmW;
		};

		function wVwnw() {
			MWw[NvM] = NmV;
			MWw[WmVnV] = NmV;
		};

		function VNNWN() {
			MWw[nnW] = NmV;
			MWw[wMvNW] = NmV;
		};

		function nnNMV() {
			MWw[Wnv] = NmV;
			MWw[NVNNw] = NmV;
		};

		function wwVNm() {
			MWw[vvv] = NmV;
			MWw[MwVnM] = NmV;
		};

		function NnNmn() {
			return MWw[nnW] || MWw[wMvNW];
		};

		function VwMvW() {
			return MWw[NvM] || MWw[WmVnV];
		};

		function NMnww() {
			return MWw[vvv] || MWw[MwVnM];
		};

		function VnWWN() {
			return MWw[Wnv] || MWw[NVNNw];
		};

		function NWNVn() {
			return MWw[nnvvW];
		};

		function WvwwN(VMMNn) {
			return MWw[VMMNn];
		};

		function NmVMv() {
			MWw[NvM] = NmV;
			MWw[WmVnV] = NmV;
			MWw[nnW] = NmV;
			MWw[wMvNW] = NmV;
			MWw[Wnv] = NmV;
			MWw[NVNNw] = NmV;
			MWw[vvv] = NmV;
			MWw[MwVnM] = NmV;
		};

		function keyBoardConstructor() {
			this.keyCode = 0;
			this.charCode = 0;
			this.altKey = false;
			this.ctrlKey = false;
			this.preventDefault = function() {};
		};
		VnMVW = window.localStorage.getItem("keyboardMap");
		if (VnMVW === null) {
			var MVMWN = window.navigator.language || window.navigator.userLanguage;
			if ((MVMWN === "fr") || (MVMWN === "fr-FR")) WMwWv();
			else VwmVn();
		} else if (VnMVW === vNwNM) WMwWv();
		else VwmVn();
		return {
			WMwWv: WMwWv,
			VwmVn: VwmVn,
			mwMmv: mwMmv,
			VVnvN: VVnvN,
			NmVMv: NmVMv,
			NnNmn: NnNmn,
			VwMvW: VwMvW,
			NMnww: NMnww,
			VnWWN: VnWWN,
			VNNvV: VNNvV,
			VNwwV: VNwwV,
			NWNVn: NWNVn,
			WvwwN: WvwwN,
			keyBoardConstructor: keyBoardConstructor
		};
	})();
	var audioHandler = (function() {
		var wvwWw = 30000;
		var MMwMv = 300;
		window.AudioContext = window.AudioContext || window.webkitAudioContext;
		var WVMnw = new window.AudioContext;
		if (!WVMnw.createGain) WVMnw.createGain = WVMnw.wVvMN;
		vvmwn = null;
		WWMWn = null;
		nmvMW = [];
		wVmWN = null;
		nmmWN = null;

		function vVVVw() {
			return wVmWN;
		};

		function mWNMn() {
			vvmwn = WVMnw.createMediaStreamDestination();
			WWMWn = new window.MediaRecorder(vvmwn.stream);
			WWMWn.ondataavailable = function(vN) {
				nmvMW.push(vN.data);
			};
			WWMWn.onstop = function(vN) {
				var NNnnm = window.JSON.parse('{ "type" : "audio/ogg; codecs=opus" }');
				nmmWN = new window.Blob(nmvMW, NNnnm);
				wVmWN = window.URL.createObjectURL(nmmWN);
			};
		};

		function nvwnv() {
			nmmWN = null;
			wVmWN = null;
			nmvMW = [];
			WWMWn.start();
		};

		function wVvnM() {
			WWMWn.stop();
		};
		var windowOptions = {
			NmNnW: 1,
			NNMNW: 1
		};
		try {
			var lParTrue = window.localStorage.getItem("isFx");
			if (lParTrue !== null) windowOptions.NmNnW = window.Number(lParTrue);
			else if (typeOfDevice === 1) windowOptions.NmNnW = 0;
			lParTrue = window.localStorage.getItem("isAudio");
			if (lParTrue !== null) windowOptions.NNMNW = window.Number(lParTrue);
			else if (typeOfDevice === 1) windowOptions.NNMNW = 0;
		} catch (error) {
			if (typeOfDevice === 1) {
				windowOptions.NmNnW = 0;
				windowOptions.NNMNW = 0;
			}
		}

		function nvVMV(lParTrue) {
			if ((lParTrue === 0) && (windowOptions.NNMNW !== lParTrue)) {
				for (var wVmmw in audioHandler.wWN) {
					var wWN = audioHandler.wWN[wVmmw];
					nNWmW(wWN);
				}
			}
			windowOptions.NNMNW = lParTrue;
			window.localStorage.setItem("isAudio", "" + lParTrue);
		};

		function vmWVN(lParTrue) {
			if ((lParTrue === 0) && (windowOptions.NmNnW !== lParTrue)) {
				for (var vNwMM in audioHandler.vm) {
					var vm = audioHandler.vm[vNwMM];
					nNWmW(vm);
				}
			}
			windowOptions.NmNnW = lParTrue;
			window.localStorage.setItem("isFx", "" + lParTrue);
		};

		function wmN(vm, Nmn, WNw, WWVWn) {
			if (WNw > MMwMv) return;
			Nmn = (1 - (WNw / MMwMv)) * Nmn;
			vm.volume = Nmn;
			VvmmV(vm, 0, WWVWn);
			vm.wnm = 0;
		};

		function WvW(src, Nmn, VvnWN, vm) {
			this.url = src;
			this.buffer = null;
			this.source = null;
			this.v = 0;
			this.wnm = 0;
			this.WNNVw = null;
			this.loop = VvnWN;
			this.volume = 1;
			this.vMWNv = -1;
			if (Nmn !== undefined) this.volume = Nmn;
			this.Mvnvv = -1;
			this.vm = 0;
			if (vm === 1) this.vm = 1;
			this.nNWwv = 0;
			this.vvWWV = 0;
			this.mNnWn = 0;
			this.start = 0;
			this.WnwNn = 0;
		};

		function nNWmN(VNV, lParTrue) {
			VNV.WNNVw.gain.value = lParTrue;
			VNV.volume = lParTrue;
		};

		function nNWmW(VNV) {
			if (VNV.wnm === 1) {
				VNV.wnm = 0;
				VNV.vMWNv = -1;
				VNV.source.stop();
				//window.console.log("Stop", VNV.url);
			}
		};

		function nNvmn(VNV, MwN, Wnn) {
			if (VNV.Mvnvv !== -1) VNV.volume = VNV.Mvnvv;
			VNV.nNWwv = 0;
			VNV.vvWWV = MwN;
			VNV.mNnWn = Wnn;
			//window.console.log("FADE", VNV.url);
		};

		function VvmmV(VNV, MwN, WWVWn) {
			if (VNV.vm === 0) {
				if (windowOptions.NNMNW === 0) return;
			} else if (windowOptions.NmNnW === 0) return;
			if (VNV.wnm === 1) {
				if (((VNV.vMWNv !== -1) && (VNV.vvWWV === 0)) && ((var14 - VNV.vMWNv) > wvwWw)) {
					nNWmW(VNV);
					return;
				}
				if (VNV.vvWWV > 0) {
					VNV.nNWwv = Math.min(VNV.nNWwv + var13, VNV.vvWWV);
					var Nmn = Math.max(0, Math.min(1, VNV.volume + (Math.cos(((1 - (VNV.nNWwv / VNV.vvWWV)) * 0.5) * Math.PI) * VNV.mNnWn)));
					VNV.WNNVw.gain.value = Nmn;
					VNV.Mvnvv = Nmn;
					if (VNV.nNWwv === VNV.vvWWV) {
						VNV.volume = Nmn;
						VNV.Mvnvv = -1;
						VNV.vvWWV = 0;
						VNV.nNWwv = 0;
						if (VNV.volume === 0) VNV.vMWNv = var14;
						else VNV.vMWNv = -1;
					}
				}
				return;
			}
			if (((VNV.vvWWV === 0) && (VNV.nNWwv === 0)) && (VNV.volume === 0)) return;
			if (VNV.v !== 1) {
				vNV(VNV);
				return;
			}
			var WVV = WVMnw.createBufferSource();
			var WNNVw = WVMnw.createGain();
			VNV.source = WVV;
			VNV.WNNVw = WNNVw;
			nNWmN(VNV, VNV.volume);
			WVV.buffer = VNV.buffer;
			WVV.connect(WNNVw);
			if (vvmwn !== null) WVV.connect(vvmwn);
			WNNVw.connect(WVMnw.destination);
			if (VNV.loop === true) WVV.loop = VNV.loop;
			if (!WVV.stop) WVV.stop = WVV.NWVvV;
			if (!WVV.start) WVV.start = WVV.VwNMw;
			VNV.source.start(((WWVWn === undefined) ? 0 : WWVWn) + WVMnw.currentTime, (MwN === undefined) ? 0 : MwN);
			VNV.wnm = 1;
			VNV.start = var14;
		};

		function vNV(VNV) {
			if (VNV.v === 2) return;
			var nNWMN = new window.XMLHttpRequest;
			nNWMN.open('GET', VNV.url, true);
			nNWMN.responseType = 'arraybuffer';
			nNWMN.onload = function() {
				WVMnw.decodeAudioData(nNWMN.response, function(VnwmW) {
					VNV.buffer = VnwmW;
					VNV.v = 1;
					VNV.WnwNn = VnwmW.duration * 1000;
				});
			};
			VNV.v = 2;
			nNWMN.send();
			return;
		};
		return {
			WvW: WvW,
			vNV: vNV,
			VvmmV: VvmmV,
			wmN: wmN,
			nNWmW: nNWmW,
			nNvmn: nNvmn,
			nNWmN: nNWmN,
			options: windowOptions,
			nvVMV: nvVMV,
			vmWVN: vmWVN,
			mWNMn: mWNMn,
			nvwnv: nvwnv,
			wVvnM: wVvnM,
			vVVVw: vVVVw,
			wWN: {},
			vm: {}
		};
	})();
	var Mwv = (function() {
		var WVmNv;

		function wnW() {
			WVmNv = mn.WNv(423, 276, "img/loading1.png");
		};
		var vwm;
		var MnV = new nmn.wMVVN;
		var VwM = new Vvv.keyBoardConstructor;
		var nWM = 800;
		var NMw = 0;
		var vVNnn = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.wnvnv, 0.05);
		};
		var vvw = 800;
		var MwW = 0;
		var wNnmW = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.VmN, 0.05);
		};
		var WWW = 0;
		var vnN = 0;
		var Wmn = undefined;

		function wnm() {
			graphicOptions.VwVMv(Mwv);
			vnN = vvw;
			WWW = vvw;
			Wmn = wNnmW;
			MwW = 1;
			WvV();
		};

		function WVw(VvW) {
			vwm = VvW;
			vnN = nWM;
			WWW = nWM;
			Wmn = vVNnn;
			NMw = 1;
		};

		function WvV() {
			var vWv = 0;
			var WMn = 0;
			if (vnN > 0) {
				WMn = var2;
				var WnV = Wmn(1 - (vnN / WWW));
				if (WnV === 1) vnN = 0;
				if (NMw === 1) WnV *= -1;
				else WnV = 1 - Math.abs(WnV);
				vWv *= WnV;
				WMn *= WnV;
			}
			WVmNv.Wv.x = (var3 - Math.floor(211 * parScaling)) + vWv;
			WVmNv.Wv.y = Math.max(0, var4 - Math.floor(138 * parScaling)) + WMn;
		};

		function nv() {
			if (NMMNV() === 0) return;
			context.clearRect(0, 0, var1, var2);
			WVmNv.nv();
		};

		function NMMNV() {
			if (NMw === 1) {
				WvV();
				if (vnN < 0) {
					NMw = 0;
					vwm.wnm();
					return 0;
				}
				vnN -= var13;
			} else if (MwW === 1) {
				WvV();
				if (vnN < 0) {
					MwW = 0;
					Mwv.VnN = function(vWn) {
						mVMnV = window.location.href;
						vWn = vWn.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
						var wmNNM = ("[\\?&]" + vWn) + "=([^&#]*)";
						var MmMMv = new window.RegExp(wmNNM);
						var MnWvW = MmMMv.exec(mVMnV);
						return (MnWvW === null) ? null : MnWvW[1];
					};

					function nVnvm() {
						var wvm = nV.wvm;
						WMW.mVw = [];
						WMW.NNm = [];
						WMW.NWmNn = [];
						var mVw = [];
						var VWnmM = [];
						var mMwnW = 0;
						var wVnvN = '<select id="servers">';
						for (var mN = 0; mN < wvm.length; mN++) {
							var nVn = wvm[mN][4];
							var WnmVM = wvm[mN][5];
							mMwnW += WnmVM;
							if (nVn.indexOf("HIDDEN") !== -1) continue;
							if (nVn.indexOf("PRIV") !== -1) {
								WMW.NNm.push(mN);
								continue;
							}
							if (nVn.indexOf("GHOUL") !== -1) {
								WMW.NWmNn.push(mN);
								continue;
							}
							if (nVn.indexOf("BR") !== -1) {
								nVn = nVn.replace("BR", "");
								if (WMW.mVw[nVn] === undefined) WMW.mVw[nVn] = [];
								WMW.mVw[nVn].push(mN);
								continue;
							}
							for (var NM = 0; NM < mVw.length; NM++) {
								if (mVw[NM] === nVn) {
									VWnmM[NM] += WnmVM;
									NM = -1;
									break;
								}
							}
							if (NM !== -1) {
								mVw.push(nVn);
								VWnmM.push(WnmVM);
							}
						}
						var vnVMv = 0;
						var VNVNM = 0;
						for (mN = 0; mN < mVw.length; mN++) {
							nVn = mVw[mN];
							wVnvN += ((("<option disabled>" + mVw[mN]) + " - ") + VWnmM[mN]) + " players</option>";
							vnVMv++;
							var WW = 1;
							for (NM = 0; NM < wvm.length; NM++) {
								if (wvm[NM][4] === nVn) {
									wVnvN += ((((((('<option value="' + NM) + '">') + mVw[mN]) + " ") + (WW++)) + " - ") + wvm[NM][5]) + " players</option>";
									if (nV.vvm === NM) VNVNM = vnVMv;
									vnVMv++;
								}
							}
						}
						WMW.wNMnn = '<select id="servers">';
						for (var mN in WMW.mVw) {
							var vnVMv = 0;
							for (var VmW = 0; VmW < WMW.mVw[mN].length; VmW++) vnVMv += wvm[WMW.mVw[mN][VmW]][5];
							WMW.wNMnn += ((((('<option value="' + mN) + '">') + mN) + " - ") + vnVMv) + " players</option>";
						}
						WMW.NNm = WMW.NNm.sort(function(vwV, m) {
							return window.Number(wvm[m][5]) - window.Number(wvm[vwV][5]);
						});
						WMW.Mnwnm = '<select id="servers">';
						for (var mN in WMW.NNm) {
							WMW.Mnwnm += ((((('<option value="' + mN) + '">') + wvm[WMW.NNm[mN]][4].replace("PRIV", "")) + " - ") + wvm[WMW.NNm[mN]][5]) + " players</option>";
						}
						WMW.wNVNw = '<select id="servers">';
						for (var mN in WMW.NWmNn) {
							WMW.wNVNw += ((((('<option value="' + mN) + '">') + wvm[WMW.NWmNn[mN]][4].replace("GHOUL", "")) + " - ") + wvm[WMW.NWmNn[mN]][5]) + " players</option>";
						}
						wVnvN += ("<option disabled>All servers - " + mMwnW) + " players</option></select>";
						WMW.wNMnn += ("<option disabled>All servers - " + mMwnW) + " players</option></select>";
						WMW.Mnwnm += ("<option disabled>All servers - " + mMwnW) + " players</option></select>";
						WMW.wNVNw += ("<option disabled>All servers - " + mMwnW) + " players</option></select>";
						document.getElementById("serverList").innerHTML = wVnvN;
						document.getElementById("servers").selectedIndex = VNVNM;
						if (((Mwv.VnN("admin") !== null) || (Mwv.VnN("member") !== null)) || (Mwv.VnN("moderator") !== null)) {
							if ((Mwv.VnN("admin") !== null) || (Mwv.VnN("moderator") !== null)) {
								wm.wM.vnWMW = 1;
								document.getElementById("chatInput").maxLength = 1000000;
							}
							document.getElementById("nickname").innerHTML += '<input id="passwordInput" type="password" placeholder="Password" maxLength="16">';
							var vMmwv = window.localStorage.getItem("password");
							if (vMmwv !== null) document.getElementById("passwordInput").value = vMmwv;
						}
						var wVWWV = Mwv.VnN("port");
						var NMM = Mwv.VnN("ips");
						if (NMM !== null) {
							NMM = NMM.replace(/\./g, '-');
							var vvm = window.Number(document.getElementById("servers").value);
							nV.wvm[vvm][0] = NMM;
							nV.wvm[vvm][1] = NMM + ".devast.io";
							nV.wvm[vvm][2] = (wVWWV === null) ? "443" : wVWWV;
							nV.wvm[vvm][3] = 1;
						}
						NMM = Mwv.VnN("ip");
						if (NMM !== null) {
							NMM = NMM.replace(/\./g, '-');
							var vvm = window.Number(document.getElementById("servers").value);
							nV.wvm[vvm][0] = NMM;
							nV.wvm[vvm][1] = NMM;
							nV.wvm[vvm][2] = (wVWWV === null) ? "8080" : wVWWV;
							nV.wvm[vvm][3] = 0;
						}
					};
					nV.MVVNM = ["BR", "PRIV", "HIDDEN", "GHOUL"];
					nV.WnnNv(function() {
						nVnvm();
						Mwv.WVw(WMW);
					});
					var WWMmW = mvn[wvmWN].MvNNV;
					var MWnvn = NVvmm[wvmWN].MvNNV;
					for (var mN = 0; mN < WWMmW.length; mN++) {
						WWMmW[mN].image = graphicOptions.createMenuImg(WWMmW[mN].src, WWMmW[mN].image);
						MWnvn[mN].image = graphicOptions.createMenuImg(MWnvn[mN].src, MWnvn[mN].image);
					}
				}
				vnN -= var13;
			}
			return 1;
		};
		return {
			WVw: WVw,
			wnW: wnW,
			wnm: wnm,
			update: WvV,
			nv: nv
		};
	})();
	var WMW = (function() {
		function nNvVV() {
			try {
				document.getElementsByClassName("ympb_target")[0].id;
				document.getElementById("trevda").id;
				document.getElementById("preroll").id;
			} catch (error) {
				WMW.NWVmw = 1;
			}
			try {
				if (((wm.wM.vnWMW !== 1) && (typeof window["YMPB"] !== 'undefined')) && (typeof window["YMPB"]["preroll"] !== 'undefined')) {
					if (WMW.nMW === 1) return;
					if (WMW.nmvvn === 1) {
						vNm.mmwMw();
						document.getElementById("preroll").style.display = "block";
						window["YMPB"]["preroll"]('preroll', function() {
							WMW.nMW = 0;
							WMW.nmvvn = -1;
							WMW.nNvVV();
						});
						WMW.nMW = 1;
						return;
					}
				}
			} catch (error) {}
			if (WMW.vwwNM === 0) nV.vvm = WMW.NNm[window.Number(document.getElementById("servers").value)];
			else if (WMW.wNN === wm.MvN) nV.vvm = window.Number(document.getElementById("servers").value);
			else if (WMW.wNN === wm.mWwvm) nV.vvm = WMW.NWmNn[window.Number(document.getElementById("servers").value)];
			else if (WMW.wNN === wm.MNMwn) {
				//window.console.log("TRY CONNECTION", WMW.WNVnv);
				var nVn = WMW.mVw[document.getElementById("servers").value];
				nV.vvm = nVn[WMW.WNVnv];
				WMW.WNVnv = (WMW.WNVnv + 1) % nVn.length;
			}
			nV.wvMmw(document.getElementById("nicknameInput").value, 0);
		};

		function VnW(NVM) {};

		function nMvNv() {
			WVw(WWm);
		};

		function wWm() {
			nMvNv();
		};
		var WWM = 0;

		function vWN(vW, nI, vV, angle, MmWNn, wvNmM) {
			var WmObject = nmm.get(0, WWM, WWM, vW);
			VMwvV(WmObject, 0, WWM, WWM, vW, nI, vV, nI, vV, (MmWNn << 5) + (wvNmM << 10), angle, 1);
			WWM++;
		};

		function NmMnw(vW, nI, vV, mm, NVM, wVm) {
			var WmObject = nmm.get(0, WWM, WWM, vW);
			VMwvV(WmObject, 0, WWM, WWM, vW, nI, vV, nI, vV, (wVm << 7) + (mm << 5), 0, NVM);
			WWM++;
		};
		var wwN = 0;
		var MWMWn = {
			MnmNw: [{
				vWn: 'Yuukun',
				button: ["img/yuukun0out.png", "img/yuukun0in.png", "img/yuukun0click.png"],
				mVMnV: "https://www.youtube.com/watch?v=TyI_8Il64d8"
			}, {
				vWn: 'eXistenZ',
				button: ["img/existenz5out.png", "img/existenz5in.png", "img/existenz5click.png"],
				mVMnV: "https://www.youtube.com/watch?v=Seq6QGBTvNQ"
			}, {
				vWn: 'Bubble Gum',
				button: ["img/bubblegum2out.png", "img/bubblegum2in.png", "img/bubblegum2click.png"],
				mVMnV: "https://youtu.be/fD7lx9zAQGU"
			}],
			Mnwwn: [{
				vWn: 'Devaster',
				button: ["img/devaster0out.png", "img/devaster0in.png", "img/devaster0click.png"],
				mVMnV: "https://www.youtube.com/watch?v=Jpgx-d3qHzs"
			}]
		};
		var MNmMw = MWMWn.MnmNw;
		var VWwMM = window.navigator.language || window.navigator.userLanguage;
		if (VWwMM.toLowerCase().indexOf("fr") !== -1) MNmMw = MWMWn.Mnwwn;
		var WWnMN = MNmMw[Math.floor(MNmMw.length * Math.random())];
		var vVvwW = [mn.vmv(WWnMN.vWn, "'Comica Han Sans MS', sans-serif", "#FFFFFF", 30, 150), mn.vmv(WWnMN.vWn, "'Comic Han Sans MS', sans-serif", "#C5B03C", 30, 150), mn.vmv(WWnMN.vWn, "'Comic Han Sans MS', sans-serif", "#9B800D", 30, 150)];
		vVvwW[0].v = 1;
		vVvwW[1].v = 1;
		vVvwW[2].v = 1;
		var MvvNw = mn.Nnv(vVvwW[0].wMv, vVvwW[0].nNn, undefined, vVvwW);
		var vWMVM = mn.Nnv(120, 67, WWnMN.button);
		var nWMwm = {
			image: null
		};
		var nnN;
		var VNMVm;
		var mmn;
		var mNMmW;
		var NwVVn;
		var NNw;
		var VMVvV;
		var wVMVM;
		var VWnnM;
		var wvm;
		var WMmvv;
		var WVWNw;
		var vvwvM;
		var mNWNn;
		var nNwnn;
		var WNNvV;
		var vNVmw;
		var nMWMv;
		var WMVMM;
		var nMmmV;
		var VMvwM;
		var wMN;
		var mWMNN;
		var WVvnv;
		var nWMmw;
		var VnwNv;
		var Nvw;
		var MnwnN;
		var NwvNV;
		var vnM;
		var wvw;
		var wvnVM;
		var mNmww;
		var mmmwN;
		var MvvmN;
		var WnWWN;
		var VVvnn;
		var MMNwm;
		var VwNnm;
		var NNm;
		var WVnnm;
		var wvvVv;
		var MVWVm;
		var wVwwv;
		var mNNWv;
		var vVWvW;
		var wWVwn;

		function wnW() {
			WMW.nNvVV = nNvVV;
			WMW.nmvvn = 1;
			WMW.nMW = 0;
			if (window.String(document.createElement).indexOf("createElement") === -1) WMW.NWVmw = 1;
			WMW.wNN = 0;
			WMW.vwwNM = 1;
			WMW.vvmnV = 0;
			WMW.mVNVN = 0;
			document.getElementById("nicknameInput").value = window.localStorage.getItem("nickname", mmn);
			audioHandler.nNvmn(audioHandler.wWN.title, 1000, vNm.WwWWw);
			nmm.vnNMN();
			nM.reset(1);
			WWM = 0;
			vWN(nwwnV, 200, 0, 127, VVM.WnMvW, 3);
			vWN(WWnVn, 400, 100, 127, VVM.wnMMv, 2);
			vWN(Wnw, 100, 100, 127, VVM.MMW, 0);
			NmMnw(mmMWn, 900, 500, 0, 33, MM.wvv);
			NmMnw(nVVMM, 800, 400, 1, 1, MM.nnw);
			vWN(Wnw, 1100, 300, 10, VVM.MMW, 1);
			vWN(Wnw, 800, 200, 127, VVM.MMW, 2);
			vWN(Wnw, 700, 100, 127, VVM.MMW, 3);
			vWN(Wnw, 1200, 0, 127, VVM.MMW, 0);
			vWN(Wnw, 1300, 100, 127, VVM.MMW, 4);
			vWN(Wnw, 1300, 300, 127, VVM.MMW, 2);
			vWN(Wnw, 800, 500, 127, VVM.MMW, 4);
			vWN(WWnVn, 1000, 200, 127, VVM.wnMMv, 0);
			vWN(Wnw, 700, 600, 127, VVM.MMW, 0);
			vWN(Wnw, 500, 400, 127, VVM.MMW, 2);
			vWN(nwwnV, 500, 700, 127, VVM.WnMvW, 3);
			vWN(nwwnV, 1000, 300, 127, VVM.WnMvW, 4);
			vWN(Wnw, 1300, 500, 100, VVM.MMW, 2);
			vWN(Wnw, 1200, 700, 127, VVM.MMW, 4);
			vWN(Wnw, 1300, 700, 127, VVM.MMW, 0);
			vWN(nwwnV, 800, 600, 127, VVM.WnMvW, 5);
			vWN(Wnw, 500, 600, 127, VVM.MMW, 4);
			vWN(nwwnV, 200, 400, 127, VVM.vMmWV, 0);
			vWN(nwwnV, 400, 500, 50, VVM.VWvVN, 3);
			vWN(Wnw, 100, 400, 190, VVM.MMW, 2);
			vWN(Wnw, 100, 500, 190, VVM.MMW, 3);
			vWN(Wnw, 100, 600, 127, VVM.MMW, 4);
			vWN(Wnw, 0, 500, 127, VVM.MMW, 1);
			vWN(Wnw, 200, 300, 50, VVM.MMW, 4);
			vWN(Wnw, 400, 200, 10, VVM.MMW, 2);
			vWN(Wnw, 500, 200, 10, VVM.MMW, 1);
			vWN(Wnw, 100, 800, 10, VVM.MMW, 0);
			vWN(Wnw, 400, 800, 10, VVM.MMW, 1);
			vWN(Wnw, 700, 800, 10, VVM.MMW, 2);
			vWN(nwwnV, 900, 700, 50, VVM.VWvVN, 4);
			if (typeOfDevice === 1) nnN = mn.WNv(650, 312, "img/logo-homepage-mobile2.png");
			else nnN = mn.WNv(650, 312, "img/logo-homepage4.png");
			if (typeOfDevice === 1) VNMVm = mn.Nnv(0, 0);
			else VNMVm = mn.Nnv(94, 40, ["img/more-io-games-out.png", "img/more-io-games-in.png", "img/more-io-games-click.png"]);
			mmn = document.getElementById("nickname");
			mNMmW = mmn.style;
			NwVVn = {
				x: 0,
				y: 0
			};
			mmn.addEventListener("keyup", function(vN) {
				if ((NMw | MwW) === 1) return;
				if (vN.keyCode === 13) nNvVV();
			}, false);
			NNw = mn.Nnv(136, 57, ["img/play-button-out.png", "img/play-button-in.png", "img/play-button-click.png"]);
			VMVvV = document.getElementById("terms");
			wVMVM = VMVvV.style;
			VWnnM = {
				x: 0,
				y: 0
			};
			wvm = document.getElementById("serverList");
			WMmvv = wvm.style;
			WVWNw = {
				x: 0,
				y: 0
			};
			wvm.addEventListener("mouseover", function(vN) {
				if ((NMw | MwW) === 1) return;
			}, false);
			wvm.addEventListener("mousedown", function(vN) {
				if ((NMw | MwW) === 1) return;
			}, false);
			wvm.addEventListener("mouseup", function(vN) {
				if ((NMw | MwW) === 1) return;
			}, false);
			if (typeOfDevice === 1) vvwvM = mn.WNv(0, 0);
			else vvwvM = mn.WNv(230, 235, "img/changelogBox.png");
			mNWNn = document.getElementById("changelog");
			nNwnn = mNWNn.style;
			WNNvV = {
				x: 0,
				y: 0
			};
			if (typeOfDevice === 1) vNVmw = mn.WNv(0, 0);
			else vNVmw = mn.WNv(230, 355, "img/commandsBox.png");
			nMWMv = document.getElementById("howtoplay");
			WMVMM = nMWMv.style;
			nMmmV = {
				x: 0,
				y: 0
			};
			if (typeOfDevice === 1) VMvwM = mn.WNv(0, 0);
			else VMvwM = mn.WNv(123, 55, "img/gameMade.png");
			if (typeOfDevice === 1) wMN = mn.Nnv(0, 0);
			else wMN = mn.Nnv(40, 38, ["img/twitter-button-out.png", "img/twitter-button-in.png", "img/twitter-button-click.png"]);
			if (typeOfDevice === 1) mWMNN = mn.Nnv(0, 0);
			else mWMNN = mn.Nnv(40, 38, ["img/facebook-button-out.png", "img/facebook-button-in.png", "img/facebook-button-click.png"]);
			if (typeOfDevice === 1) WVvnv = mn.Nnv(0, 0);
			else WVvnv = mn.Nnv(40, 38, ["img/youtube-button-out.png", "img/youtube-button-in.png", "img/youtube-button-click.png"]);
			if (typeOfDevice === 1) nWMmw = mn.Nnv(0, 0);
			else nWMmw = mn.Nnv(54, 54, ["img/home-reddit-button-out.png", "img/home-reddit-button-in.png", "img/home-reddit-button-click.png"]);
			if (typeOfDevice === 1) VnwNv = mn.Nnv(0, 0);
			else VnwNv = mn.Nnv(54, 54, ["img/home-discord-button-out.png", "img/home-discord-button-in.png", "img/home-discord-button-click.png"]);
			Nvw = mn.Nnv(93, 51, ["img/survivalmode-button-out.png", "img/survivalmode-button-in.png", "img/survivalmode-button-click.png"]);
			MnwnN = mn.Nnv(93, 51, ["img/battle-royale-button-out.png", "img/battle-royale-button-in.png", "img/battle-royale-button-click.png"]);
			NwvNV = mn.Nnv(93, 51, ["img/ghoul-mode-button-out.png", "img/ghoul-mode-button-in.png", "img/ghoul-mode-button-click.png"]);
			vnM = mn.Nnv(68, 34, ["img/private-server-button-out.png", "img/private-server-button-in.png", "img/private-server-button-click.png"]);
			wvw = mn.Nnv(68, 34, ["img/public-server-button-out.png", "img/public-server-button-in.png", "img/public-server-button-click.png"]);
			if (typeOfDevice === 1) wvnVM = mn.WNv(0, 0);
			else wvnVM = mn.WNv(171, 432, "img/featured.png");
			if (typeOfDevice === 1) mNmww = mn.Nnv(0, 0);
			else mNmww = mn.Nnv(60, 60, ["img/home-limaxio-out.png", "img/home-limaxio-in.png", "img/home-limaxio-click.png"]);
			if (typeOfDevice === 1) mmmwN = mn.Nnv(0, 0);
			else mmmwN = mn.Nnv(60, 60, ["img/home-oibio-out.png", "img/home-oibio-in.png", "img/home-oibio-click.png"]);
			if (typeOfDevice === 1) MvvmN = mn.Nnv(0, 0);
			else MvvmN = mn.Nnv(60, 60, ["img/home-starveio-out.png", "img/home-starveio-in.png", "img/home-starveio-click.png"]);
			if (typeOfDevice === 1) WnWWN = mn.Nnv(0, 0);
			else WnWWN = mn.Nnv(60, 60, ["img/home-nendio-out.png", "img/home-nendio-in.png", "img/home-nendio-click.png"]);
			VVvnn = document.getElementById("featuredVideo");
			MMNwm = VVvnn.style;
			VwNnm = {
				x: 0,
				y: 0
			};
			if (typeOfDevice === 1) NNm = mn.Nnv(0, 0);
			else NNm = mn.Nnv(86, 48, ["img/privateserver-button-out.png", "img/privateserver-button-in.png", "img/privateserver-button-click.png"]);
			if (typeOfDevice === 1) WVnnm = mn.Nnv(0, 0);
			else WVnnm = mn.Nnv(52, 42, ["img/map-editor-button-out.png", "img/map-editor-button-in.png", "img/map-editor-button-click.png"]);
			wvvVv = document.getElementById("trevda");
			MVWVm = wvvVv.style;
			wVwwv = {
				x: 0,
				y: 0
			};
			mNNWv = document.getElementById("preroll");
			vVWvW = mNNWv.style;
			wWVwn = {
				x: 0,
				y: 0
			};
		};
		var vwm;
		var MnV = new nmn.wMVVN;
		var VwM = new Vvv.keyBoardConstructor;
		var nWM = 800;
		var NMw = 0;
		var vVNnn = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.wnvnv, 0.05);
		};
		var vvw = 2000;
		var MwW = 0;
		var wNnmW = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.VmN, 0.05);
		};
		var WWW = 0;
		var vnN = 0;
		var Wmn = undefined;

		function wnm() {
			nV.VnW = VnW;
			nV.wWm = wWm;
			wm.wM.WMV = 0;
			wm.wM.id = 0;
			nM.MwmMN(0);
			nM.mMNMw();
			if (WMW.wNN === 1) {
				wvw.nwN();
				vnM.nwN();
			}
			WMW.MVWVm = MVWVm;
			if (typeOfDevice === 1) {
				MvvNw.nwN();
				vWMVM.nwN();
				WVnnm.nwN();
			}
			graphicOptions.VwVMv(WMW);
			vnN = vvw;
			WWW = vvw;
			Wmn = wNnmW;
			MwW = 1;
			WvV();
			mNMmW.display = "inline-block";
			if (typeOfDevice === 0) wVMVM.display = "inline-block";
			WMmvv.display = "inline-block";
			if (typeOfDevice === 0) nNwnn.display = "inline-block";
			if (typeOfDevice === 0) WMVMM.display = "inline-block";
			if (typeOfDevice === 0) MMNwm.display = "inline-block";
		};

		function WVw(VvW) {
			vwm = VvW;
			MWwMm();
			vnN = nWM;
			WWW = nWM;
			Wmn = vVNnn;
			NMw = 1;
		};

		function WvV() {
			var vWv = 0;
			var WMn = 0;
			if (vnN > 0) {
				WMn = var2;
				var WnV = Wmn(1 - (vnN / WWW));
				if (WnV === 1) vnN = 0;
				if (MwW === 1) WnV = 1 - Math.abs(WnV);
				vWv *= WnV;
				WMn *= WnV;
			}
			nnN.Wv.x = ((var3 - Math.floor(325 * parScaling)) + Math.floor(((typeOfDevice === 0) ? -30 : -70) * parScaling)) - vWv;
			nnN.Wv.y = Math.max(0, (var4 - Math.floor(156 * parScaling)) + Math.floor(((typeOfDevice === 0) ? -150 : -150) * parScaling)) - WMn;
			VNMVm.Wv.x = Math.floor(5 * parScaling) + vWv;
			VNMVm.Wv.y = ((var2 - Math.floor(40 * parScaling)) + Math.floor(-5 * parScaling)) + WMn;
			NwVVn.x = ((var3 - Math.floor(91 * parScaling)) + Math.floor(((typeOfDevice === 0) ? -6.8 : -47.5) * parScaling)) - vWv;
			mNMmW.left = NwVVn.x + "px";
			NwVVn.y = nnN.Wv.y + Math.floor(143 * parScaling);
			mNMmW.top = NwVVn.y + "px";
			NNw.Wv.x = nnN.Wv.x + Math.floor(290 * parScaling);
			NNw.Wv.y = nnN.Wv.y + Math.floor(235 * parScaling);
			VWnnM.x = (var1 - 85) + vWv;
			wVMVM.left = VWnnM.x + "px";
			VWnnM.y = ((var2 - 17) + Math.floor(-10 * parScaling)) + WMn;
			wVMVM.top = VWnnM.y + "px";
			WVWNw.x = ((var3 - Math.floor(100 * parScaling)) + Math.floor(((typeOfDevice === 0) ? 12.8 : -26.5) * parScaling)) - vWv;
			WMmvv.left = WVWNw.x + "px";
			WVWNw.y = NwVVn.y + Math.floor(45 * parScaling);
			WMmvv.top = WVWNw.y + "px";
			vvwvM.Wv.x = ((var1 - Math.floor(230 * parScaling)) + Math.floor(7 * parScaling)) - vWv;
			vvwvM.Wv.y = -WMn;
			WNNvV.x = ((var1 - 200) + Math.floor(-10 * parScaling)) - vWv;
			nNwnn.left = WNNvV.x + "px";
			WNNvV.y = Math.floor(20 * parScaling) - WMn;
			nNwnn.top = WNNvV.y + "px";
			vNVmw.Wv.x = vvwvM.Wv.x;
			vNVmw.Wv.y = vvwvM.Wv.y + Math.floor(230 * parScaling);
			nMmmV.x = ((var1 - 200) + Math.floor(-10 * parScaling)) - vWv;
			WMVMM.left = nMmmV.x + "px";
			nMmmV.y = WNNvV.y + Math.floor(215 * parScaling);
			WMVMM.top = nMmmV.y + "px";
			VMvwM.Wv.x = Math.floor(15 * parScaling) - vWv;
			VMvwM.Wv.y = Math.floor(5 * parScaling) - WMn;
			wMN.Wv.x = VMvwM.Wv.x + Math.floor(-5 * parScaling);
			wMN.Wv.y = VMvwM.Wv.y + Math.floor(55 * parScaling);
			mWMNN.Wv.x = wMN.Wv.x + Math.floor(45 * parScaling);
			mWMNN.Wv.y = wMN.Wv.y;
			WVvnv.Wv.x = mWMNN.Wv.x + Math.floor(45 * parScaling);
			WVvnv.Wv.y = wMN.Wv.y;
			nWMmw.Wv.x = nnN.Wv.x + Math.floor(26 * parScaling);
			nWMmw.Wv.y = nnN.Wv.y + Math.floor(36 * parScaling);
			VnwNv.Wv.x = nWMmw.Wv.x + Math.floor(83.5 * parScaling);
			VnwNv.Wv.y = nWMmw.Wv.y;
			Nvw.Wv.x = NNw.Wv.x + Math.floor(213 * parScaling);
			Nvw.Wv.y = NNw.Wv.y + Math.floor(-98 * parScaling);
			MnwnN.Wv.x = Nvw.Wv.x;
			MnwnN.Wv.y = Nvw.Wv.y + Math.floor(60 * parScaling);
			NwvNV.Wv.x = Nvw.Wv.x;
			NwvNV.Wv.y = Nvw.Wv.y + Math.floor(60 * parScaling);
			vnM.Wv.x = NNw.Wv.x + Math.floor(-126 * parScaling);
			vnM.Wv.y = NNw.Wv.y + Math.floor(-58 * parScaling);
			wvw.Wv.x = vnM.Wv.x;
			wvw.Wv.y = vnM.Wv.y + Math.floor(-37 * parScaling);
			wvnVM.Wv.x = wMN.Wv.x;
			wvnVM.Wv.y = wMN.Wv.y + Math.floor(50 * parScaling);
			mNmww.Wv.x = wMN.Wv.x + Math.floor(21.5 * parScaling);
			mNmww.Wv.y = wMN.Wv.y + Math.floor(72 * parScaling);
			mmmwN.Wv.x = mNmww.Wv.x;
			mmmwN.Wv.y = mNmww.Wv.y + Math.floor(70 * parScaling);
			MvvmN.Wv.x = mmmwN.Wv.x;
			MvvmN.Wv.y = mmmwN.Wv.y + Math.floor(69 * parScaling);
			WnWWN.Wv.x = MvvmN.Wv.x;
			WnWWN.Wv.y = MvvmN.Wv.y + Math.floor(69 * parScaling);
			VwNnm.x = WnWWN.Wv.x + Math.floor(15 * parScaling);
			MMNwm.left = VwNnm.x + "px";
			VwNnm.y = WnWWN.Wv.y + Math.floor(83 * parScaling);
			MMNwm.top = VwNnm.y + "px";
			NNm.Wv.x = wvw.Wv.x + Math.floor(-120 * parScaling);
			NNm.Wv.y = wvw.Wv.y + Math.floor(41 * parScaling);
			WVnnm.Wv.x = NNm.Wv.x + Math.floor(-8.5 * parScaling);
			WVnnm.Wv.y = NNm.Wv.y + Math.floor(-53 * parScaling);
			wVwwv.x = var3 - Math.floor(150 * parScaling);
			MVWVm.left = wVwwv.x + "px";
			wVwwv.y = NwVVn.y + Math.floor(130 * parScaling);
			MVWVm.top = wVwwv.y + "px";
			var nVnvv = Math.min(parScaling, 1);
			var Wv = (NwVVn.y + WMn) + (170 * parScaling);
			document.getElementById("trevda").style.left = Math.floor(var3 - (325 * nVnvv)) + "px";
			document.getElementById("trevda").style.top = Math.floor(Wv + (((nVnvv * 250) - 250) / 2)) + "px";
			document.getElementById("trevda").style.transform = ("scale(" + nVnvv) + ")";
			var NNvwM = document.getElementById("nicknameInput").style;
			var vM = Math.floor(220 * parScaling);
			var wW = Math.floor(35 * parScaling);
			wW = wW + "px";
			vM = vM + "px";
			mNMmW.width = vM;
			mNMmW.height = wW;
			NNvwM["borderWidth"] = Math.floor(3 * parScaling) + "px";
			NNvwM.width = vM;
			NNvwM.height = wW;
			NNvwM.fontSize = Math.floor(18 * parScaling) + "px";
			if ((Mwv.VnN("ips") !== null) || (Mwv.VnN("ip") !== null)) {
				WMmvv.display = "none";
				Nvw.Wv.y = -500;
				MnwnN.Wv.y = -500;
				NwvNV.Wv.y = -500;
				vnM.Wv.y = -500;
				wvw.Wv.y = -500;
				if (Mwv.VnN("admin") !== null) wvvVv.display = "none";
			}
			if (document.getElementById("passwordInput") !== null) {
				var wmNmm = document.getElementById("passwordInput").style;
				var vM = Math.floor(220 * parScaling);
				var wW = Math.floor(35 * parScaling);
				var NWw = Math.floor(var3 - (vM / 2)) + "px";
				wW = wW + "px";
				vM = vM + "px";
				wmNmm.width = vM;
				wmNmm.height = wW;
				wmNmm.left = NWw;
				wmNmm["borderWidth"] = Math.floor(3 * parScaling) + "px";
				wmNmm.width = vM;
				wmNmm.height = wW;
				wmNmm.fontSize = Math.floor(18 * parScaling) + "px";
				wmNmm["marginTop"] = Math.floor(4 * parScaling) + "px";
			};
			vM = Math.floor(200 * parScaling);
			wW = Math.floor(28 * parScaling);
			wW = wW + "px";
			vM = vM + "px";
			WMmvv.width = vM;
			WMmvv.height = wW;
			WMmvv["backgroundSize"] = Math.floor(17 * parScaling) + "px";
			var WWNNN = document.getElementById("servers").style;
			vM = Math.floor(230 * parScaling) + "px";
			wW = Math.floor(28 * parScaling) + "px";
			WWNNN.width = vM;
			WWNNN.height = wW;
			WWNNN.fontSize = Math.floor(13 * parScaling) + "px";
			vM = Math.floor(185 * parScaling);
			wW = Math.floor(17 * parScaling);
			NWw = Math.floor(var1 - vM) + "px";
			wW = wW + "px";
			vM = vM + "px";
			nwn = (Math.floor(var2 - (18 * parScaling)) + WMn) + "px";
			wVMVM.width = vM;
			wVMVM.height = wW;
			wVMVM.left = NWw;
			wVMVM.top = nwn;
			wVMVM.fontSize = Math.floor(11 * parScaling) + "px";
			vM = Math.floor(197 * parScaling);
			wW = Math.floor(250 * parScaling);
			NWw = Math.floor(var1 - (205 * parScaling)) + "px";
			wW = wW + "px";
			vM = vM + "px";
			nNwnn.width = vM;
			nNwnn.height = wW;
			nNwnn.left = NWw;
			nNwnn.fontSize = Math.floor(11 * parScaling) + "px";
			nNwnn["borderRadius"] = Math.floor(5 * parScaling) + "px";
			nNwnn["paddingTop"] = Math.floor(18 * parScaling) + "px";
			var MVWwm = document.getElementById("changelogTitle").style;
			vM = Math.floor(197 * parScaling) + "px";
			wW = Math.floor(23 * parScaling) + "px";
			MVWwm.width = vM;
			MVWwm.height = wW;
			MVWwm.fontSize = Math.floor(16 * parScaling) + "px";
			MVWwm["paddingTop"] = Math.floor(8 * parScaling) + "px";
			MVWwm["paddingBottom"] = Math.floor(0 * parScaling) + "px";
			MVWwm["marginBottom"] = Math.floor(-2 * parScaling) + "px";
			MVWwm["marginTop"] = Math.floor(-22 * parScaling) + "px";
			MVWwm["borderRadius"] = ((((((Math.floor(5 * parScaling) + "px ") + Math.floor(5 * parScaling)) + "px ") + Math.floor(0 * parScaling)) + "px ") + Math.floor(0 * parScaling)) + "px";
			var nMMvm = document.getElementById("changelogImg").style;
			vM = Math.floor(175 * parScaling) + "px";
			wW = Math.floor(80 * parScaling) + "px";
			nMMvm.width = vM;
			nMMvm.height = wW;
			nMMvm.wVVMV = Math.floor(10 * parScaling) + "px";
			var Mvvvn = document.getElementById("changelogText").style;
			Mvvvn.fontSize = Math.floor(10 * parScaling) + "px";
			Mvvvn["padding"] = Math.floor(15 * parScaling) + "px";
			Mvvvn["paddingTop"] = Math.floor(5 * parScaling) + "px";
			vM = Math.floor(197 * parScaling);
			wW = Math.floor(347 * parScaling);
			NWw = Math.floor(var1 - (205 * parScaling)) + "px";
			nMWmw = Math.floor(var2 - (105 * parScaling)) + "px";
			wW = wW + "px";
			vM = vM + "px";
			WMVMM.width = vM;
			WMVMM.height = wW;
			WMVMM.left = NWw;
			WMVMM.bottom = nMWmw;
			WMVMM.fontSize = Math.floor(13 * parScaling) + "px";
			WMVMM["marginTop"] = Math.floor(0 * parScaling) + "px";
			WMVMM["paddingTop"] = Math.floor(18 * parScaling) + "px";
			document.getElementById("featuredVideo").style.fontSize = Math.floor(13 * parScaling) + "px";
			document.getElementById("mainCommands").style["marginTop"] = Math.floor(55 * parScaling) + "px";
			document.getElementById("secondCommands").style["marginTop"] = Math.floor(55 * parScaling) + "px";
			document.getElementById("moveCommand").style["paddingLeft"] = Math.floor(20 * parScaling) + "px";
			document.getElementById("moveCommand").style["paddingRight"] = Math.floor(20 * parScaling) + "px";
			document.getElementById("hitCommands").style["paddingLeft"] = Math.floor(10 * parScaling) + "px";
			document.getElementById("hitCommands").style["paddingRight"] = Math.floor(10 * parScaling) + "px";
			document.getElementById("runCommands").style["paddingLeft"] = Math.floor(0 * parScaling) + "px";
			document.getElementById("runCommands").style["paddingRight"] = Math.floor(20 * parScaling) + "px";
			document.getElementById("interactCommands").style["paddingLeft"] = Math.floor(7 * parScaling) + "px";
			document.getElementById("interactCommands").style["paddingRight"] = Math.floor(0 * parScaling) + "px";
			document.getElementById("craftCommands").style["paddingLeft"] = Math.floor(5 * parScaling) + "px";
			document.getElementById("craftCommands").style["paddingRight"] = Math.floor(18 * parScaling) + "px";
			document.getElementById("mapCommands").style["paddingLeft"] = Math.floor(6 * parScaling) + "px";
			document.getElementById("mapCommands").style["paddingRight"] = Math.floor(12 * parScaling) + "px";
			var VNmWW = document.getElementById("howtoplayTitle").style;
			vM = Math.floor(197 * parScaling) + "px";
			wW = Math.floor(23 * parScaling) + "px";
			VNmWW.width = vM;
			VNmWW.height = wW;
			VNmWW.fontSize = Math.floor(16 * parScaling) + "px";
			VNmWW["paddingTop"] = Math.floor(0 * parScaling) + "px";
			VNmWW["paddingBottom"] = Math.floor(13 * parScaling) + "px";
			VNmWW["marginBottom"] = Math.floor(6 * parScaling) + "px";
			VNmWW["marginTop"] = Math.floor(0 * parScaling) + "px";
			VNmWW["borderRadius"] = ((((((Math.floor(5 * parScaling) + "px ") + Math.floor(5 * parScaling)) + "px ") + Math.floor(0 * parScaling)) + "px ") + Math.floor(0 * parScaling)) + "px";
			var vmMnn = document.getElementById("howtoplayText").style;
			vmMnn.fontSize = Math.floor(11 * parScaling) + "px";
			vmMnn.wWwMv = Math.floor(6 * parScaling) + "px";
			vmMnn.height = Math.floor(52 * parScaling) + "px";
			var VWMnW = document.getElementById("howtoplayCommands").style;
			vM = Math.floor(197 * parScaling) + "px";
			wW = Math.floor(23 * parScaling) + "px";
			VWMnW.width = vM;
			VWMnW.height = wW;
			VWMnW.fontSize = Math.floor(16 * parScaling) + "px";
			VWMnW["paddingTop"] = Math.floor(13 * parScaling) + "px";
			VWMnW["paddingBottom"] = Math.floor(13 * parScaling) + "px";
			VWMnW["marginBottom"] = Math.floor(6 * parScaling) + "px";
			VWMnW["marginTop"] = Math.floor(11 * parScaling) + "px";
		};

		function nv() {
			if (NMMNV() === 0) return;
			context.clearRect(0, 0, var1, var2);
			nM.nVmmN();
			if (vnN > 0) {
				wwN = Wmn(1 - (vnN / WWW));
				if (MwW === 1) wwN = 1 - Math.abs(wwN);
				wwN = 1 - wwN;
			}
			context.globalAlpha = 0.3 * wwN;
			context.fillStyle = "#000000";
			context.fillRect(0, 0, var1, var2);
			context.globalAlpha = 1;
			if (WMW.wNN === wm.MvN) Nvw.MVv(mn.mNN);
			else if (WMW.wNN === wm.MNMwn) MnwnN.MVv(mn.mNN);
			else if (WMW.wNN === wm.mWwvm) NwvNV.MVv(mn.mNN);
			if (WMW.vwwNM === 0) vnM.MVv(mn.mNN);
			else if (WMW.vwwNM === 1) wvw.MVv(mn.mNN);
			nnN.nv();
			VNMVm.nv();
			NNw.nv();
			vvwvM.nv();
			vNVmw.nv();
			VMvwM.nv();
			wMN.nv();
			mWMNN.nv();
			WVvnv.nv();
			nWMmw.nv();
			VnwNv.nv();
			Nvw.nv();
			NwvNV.nv();
			vnM.nv();
			wvw.nv();
			wvnVM.nv();
			mNmww.nv();
			mmmwN.nv();
			MvvmN.nv();
			WnWWN.nv();
			NNm.nv();
			WVnnm.nv();
			if (nWMwm.image === null) {
				nWMwm.image = mn.vmv((('0.' + vnnWV[0]) + '.') + vnnWV[1], "'Comic Han Sans MS', sans-serif", "#d6ddde", 24, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#2b3c3e", 8);
				nWMwm.image.v = 1;
			}
			graphicOptions.drawMapStructures(nWMwm, (nnN.Wv.x / parScaling) + 484.5, (nnN.Wv.y / parScaling) + 124, 0, 0, 0, 1);
			vWMVM.Wv.x = wvnVM.Wv.x + (27 * parScaling);
			vWMVM.Wv.y = wvnVM.Wv.y + (329 * parScaling);
			vWMVM.nv();
			MvvNw.Wv.x = wvnVM.Wv.x + (34 * parScaling);
			MvvNw.Wv.y = wvnVM.Wv.y + (399 * parScaling);
			MvvNw.nv();
			nM.mmnWM();
			vNm.wvWwn();
		};

		function NMMNV() {
			if (NMw === 1) {
				WvV();
				if (vnN < 0) {
					NMw = 0;
					VNMVm.MVv(mn.Vmw);
					mNMmW.display = "none";
					NNw.MVv(mn.Vmw);
					wVMVM.display = "none";
					WMmvv.display = "none";
					nNwnn.display = "none";
					WMVMM.display = "none";
					wMN.MVv(mn.Vmw);
					mWMNN.MVv(mn.Vmw);
					WVvnv.MVv(mn.Vmw);
					nWMmw.MVv(mn.Vmw);
					VnwNv.MVv(mn.Vmw);
					Nvw.MVv(mn.Vmw);
					MnwnN.MVv(mn.Vmw);
					NwvNV.MVv(mn.Vmw);
					vnM.MVv(mn.Vmw);
					wvw.MVv(mn.Vmw);
					mNmww.MVv(mn.Vmw);
					mmmwN.MVv(mn.Vmw);
					MvvmN.MVv(mn.Vmw);
					WnWWN.MVv(mn.Vmw);
					MMNwm.display = "none";
					NNm.MVv(mn.Vmw);
					WVnnm.MVv(mn.Vmw);
					MVWVm.display = "none";
					vVWvW.display = "none";
					vwm.wnm();
					return 0;
				}
				vnN -= var13;
			} else if (MwW === 1) {
				WvV();
				if (vnN < 0) {
					MwW = 0;
					if (wm.wM.vnWMW !== 1) MVWVm.display = "inline-block";
					document.getElementById("bod").style.backgroundColor = "#46664d";
					mnmVM();
				}
				vnN -= var13;
			}
			return 1;
		};

		function nnV(vN) {
			nmn.WWn(vN, nmn.MvwwV);
			var Nmm = 0;
			if (VNMVm.MW() === 1) {
				Nmm = 1;
			}
			if (NNw.MW() === 1) {
				Nmm = 1;
			}
			if (wMN.MW() === 1) {
				Nmm = 1;
			}
			if (mWMNN.MW() === 1) {
				Nmm = 1;
			}
			if (WVvnv.MW() === 1) {
				Nmm = 1;
			}
			if (nWMmw.MW() === 1) {
				Nmm = 1;
			}
			if (VnwNv.MW() === 1) {
				Nmm = 1;
			}
			if (Nvw.MW() === 1) {
				Nmm = 1;
			}
			if (MnwnN.MW() === 1) {
				Nmm = 1;
			}
			if (NwvNV.MW() === 1) {
				Nmm = 1;
			}
			if (vnM.MW() === 1) {
				Nmm = 1;
			}
			if (wvw.MW() === 1) {
				Nmm = 1;
			}
			if (mNmww.MW() === 1) {
				Nmm = 1;
			}
			if (mmmwN.MW() === 1) {
				Nmm = 1;
			}
			if (MvvmN.MW() === 1) {
				Nmm = 1;
			}
			if (WnWWN.MW() === 1) {
				Nmm = 1;
			}
			if (NNm.MW() === 1) {
				Nmm = 1;
			}
			if (WVnnm.MW() === 1) {
				Nmm = 1;
			}
			vWMVM.MW();
			MvvNw.MW();
		};

		function mWv(vN) {
			nmn.WWn(vN, nmn.vvVwN);
			var Nmm = 0;
			if (VNMVm.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("https://iogames.space", "_blank");
			}
			if (NNw.MW() === 1) {
				Nmm = 1;
				nNvVV();
				audioHandler.wmN(audioHandler.vm.play, 1, 0);
			}
			if (wMN.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("https://twitter.com/lapamauve", "_blank");
			}
			if (mWMNN.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open(" https://www.facebook.com/limaxio-571818073000979", "_blank");
			}
			if (WVvnv.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("https://youtube.com/c/LapaMauve", "_blank");
			}
			if (nWMmw.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("https://www.reddit.com/r/devastio/", "_blank");
			}
			if (VnwNv.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("https://discord.gg/V4KXEwr", "_blank");
			}
			if (Nvw.MW() === 1) {
				Nmm = 1;
				if (WMW.wNN !== 0) {
					if (((nV.state & mMM.Mwmww) === 0) && ((nV.state & mMM.drawPlayerStates) === 0)) {
						WMW.wNN = 0;
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						wvw.show();
						vnM.show();
						document.getElementById("serverList").innerHTML = WMW.VvmMw;
						document.getElementById("servers").selectedIndex = WMW.vVNNw;
						WvV();
					}
				}
			}
			if (MnwnN.MW() === 1) {
				Nmm = 1;
				if ((0 && (WMW.wNN !== 1)) && (WMW.vwwNM === 1)) {
					if (((nV.state & mMM.Mwmww) === 0) && ((nV.state & mMM.drawPlayerStates) === 0)) {
						WMW.WNVnv = 0;
						WMW.wNN = wm.MNMwn;
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						wvw.nwN();
						vnM.nwN();
						WMW.VvmMw = document.getElementById("serverList").innerHTML;
						WMW.vVNNw = document.getElementById("servers").selectedIndex;
						document.getElementById("serverList").innerHTML = WMW.wNMnn;
						var NM = 0;
						var VNWVm = 0;
						for (var mN in WMW.mVw) {
							if (mN === nV.wvm[WMW.vVNNw][4]) {
								WMW.WNVnv = Math.floor(Math.random() * WMW.mVw[mN].length);
								VNWVm = NM;
								break;
							}
							NM++;
						};
						document.getElementById("servers").selectedIndex = VNWVm;
						WvV();
					}
				}
			}
			if (NwvNV.MW() === 1) {
				Nmm = 1;
				if ((WMW.wNN !== 1) && (WMW.vwwNM === 1)) {
					if (((nV.state & mMM.Mwmww) === 0) && ((nV.state & mMM.drawPlayerStates) === 0)) {
						WMW.WNVnv = 0;
						WMW.wNN = wm.mWwvm;
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						wvw.nwN();
						vnM.nwN();
						WMW.VvmMw = document.getElementById("serverList").innerHTML;
						WMW.vVNNw = document.getElementById("servers").selectedIndex;
						document.getElementById("serverList").innerHTML = WMW.wNVNw;
						var VNWVm = Math.floor(Math.random() * 1);
						document.getElementById("servers").selectedIndex = VNWVm;
						WvV();
					}
				}
			}
			if (vnM.MW() === 1) {
				Nmm = 1;
				if ((WMW.vwwNM !== 0) && (WMW.wNN === 0)) {
					if (((nV.state & mMM.Mwmww) === 0) && ((nV.state & mMM.drawPlayerStates) === 0)) {
						WMW.WNVnv = 0;
						WMW.vwwNM = 0;
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						Nvw.nwN();
						MnwnN.nwN();
						NwvNV.nwN();
						WMW.VvmMw = document.getElementById("serverList").innerHTML;
						WMW.vVNNw = document.getElementById("servers").selectedIndex;
						document.getElementById("serverList").innerHTML = WMW.Mnwnm;
						WMW.WNVnv = 0;
						document.getElementById("servers").selectedIndex = 0;
						WvV();
					}
				}
			}
			if (wvw.MW() === 1) {
				Nmm = 1;
				if ((WMW.vwwNM !== 1) && (WMW.wNN === 0)) {
					if (((nV.state & mMM.Mwmww) === 0) && ((nV.state & mMM.drawPlayerStates) === 0)) {
						WMW.vwwNM = 1;
						WMW.wNN = 0;
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						Nvw.show();
						NwvNV.show();
						document.getElementById("serverList").innerHTML = WMW.VvmMw;
						document.getElementById("servers").selectedIndex = WMW.vVNNw;
						WvV();
					}
				}
			}
			if (mNmww.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("http://limax.io", "_blank");
			}
			if (mmmwN.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("http://oib.io", "_blank");
			}
			if (MvvmN.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("http://starve.io", "_blank");
			}
			if (WnWWN.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("https://nend.io", "_blank");
			}
			if (NNm.MW() === 1) {
				Nmm = 1;
				var NWnVW = window.open("https://devast.io/private-server", "_blank");
			}
			if (WVnnm.MW() === 1) {
				Nmm = 1;
				WMW.WVw(MWwnm);
				audioHandler.wmN(audioHandler.vm.play, 1, 0);
			}
			if ((vWMVM.MW() === 1) || (MvvNw.MW() === 1)) {
				var NWnVW = window.open(WWnMN.mVMnV, "_blank");
			};
		};

		function vVn(vN) {
			nmn.WWn(vN, nmn.mnwNM);
			var Nmm = 0;
			if (VNMVm.MW() === 1) {
				Nmm = 1;
			}
			if (NNw.MW() === 1) {
				Nmm = 1;
			}
			if (wMN.MW() === 1) {
				Nmm = 1;
			}
			if (mWMNN.MW() === 1) {
				Nmm = 1;
			}
			if (WVvnv.MW() === 1) {
				Nmm = 1;
			}
			if (nWMmw.MW() === 1) {
				Nmm = 1;
			}
			if (VnwNv.MW() === 1) {
				Nmm = 1;
			}
			if (Nvw.MW() === 1) {
				Nmm = 1;
			}
			if (MnwnN.MW() === 1) {
				Nmm = 1;
			}
			if (NwvNV.MW() === 1) {
				Nmm = 1;
			}
			if (vnM.MW() === 1) {
				Nmm = 1;
			}
			if (wvw.MW() === 1) {
				Nmm = 1;
			}
			if (mNmww.MW() === 1) {
				Nmm = 1;
			}
			if (mmmwN.MW() === 1) {
				Nmm = 1;
			}
			if (MvvmN.MW() === 1) {
				Nmm = 1;
			}
			if (WnWWN.MW() === 1) {
				Nmm = 1;
			}
			if (NNm.MW() === 1) {
				Nmm = 1;
			}
			if (WVnnm.MW() === 1) {
				Nmm = 1;
			}
			vWMVM.MW();
			MvvNw.MW();
		};

		function Wvv(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				nnV(MnV);
			}
		};

		function MmV(vN) {
			mWv(MnV);
		};

		function wNv(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				mWv(MnV);
			}
		};

		function mvV(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				vVn(MnV);
			}
		};

		function mnmVM() {
			if (typeOfDevice === 0) window.addEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.addEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.addEventListener('mousemove', vVn, false);
			if (typeOfDevice === 1) window.addEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.addEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.addEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.addEventListener('touchmove', mvV, false);
		};

		function MWwMm() {
			if (typeOfDevice === 0) window.removeEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.removeEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.removeEventListener('mousemove', vVn, false);
			if (typeOfDevice === 1) window.removeEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.removeEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchmove', mvV, false);
		};
		return {
			WVw: WVw,
			wnW: wnW,
			wnm: wnm,
			update: WvV,
			nv: nv
		};
	})();
	var WWm = (function() {
		function VnW(NVM) {
			//window.console.log("onError", NVM);
			if (wm.wNN === 1) WVw(WMvvN);
			else WVw(wVVwv);
		};

		function wWm() {};

		function wwVMM() {
			return mvm;
		};

		function wWV() {
			return mvm & NwN;
		};
		var mVMWV = null;
		var VWmNm = 0;
		var mvm = 0;
		var MWN = 0;
		var vNM = 0;
		var NwN = 0;
		var NnNMM = 0;
		var mWMNw = 0;
		var vvmvM = 0;

		function VWwww(WNvVM) {
			NNN();
			mvm = 1;
			if (WNvVM === 1) NwN = 1;
			else if (WNvVM === 2) NnNMM = 1;
		};

		function NNN() {
			mvm = 0;
			mNV.MVv(mn.Vmw);
			MWN = 0;
			vNM = 0;
			NwN = 0;
			NnNMM = 0;
			mWMNw = 0;
			wm.NVvVm();
		};
		var mVwmW = mn.Nnv(63, 28, ["img/addteam-button-out.png", "img/addteam-button-in.png", "img/addteam-button-click.png"]);
		var mMvVm = mn.Nnv(44, 33, ["img/leave-button-out.png", "img/leave-button-in.png", "img/leave-button-click.png"]);
		var wNMWw = mn.Nnv(44, 33, ["img/lockteam-button-out.png", "img/lockteam-button-in.png", "img/lockteam-button-click.png"]);
		var WMVwv = mn.Nnv(44, 33, ["img/unlockteam-button-out.png", "img/unlockteam-button-in.png", "img/unlockteam-button-click.png"]);
		var MWvWN = mn.Nnv(44, 33, ["img/delete-button-out.png", "img/delete-button-in.png", "img/delete-button-click.png"]);
		var nMvvn = mn.Nnv(44, 33, ["img/delete-button-out.png", "img/delete-button-in.png", "img/delete-button-click.png"]);
		var Nnmvn = mn.Nnv(44, 33, ["img/join-button-out.png", "img/join-button-in.png", "img/join-button-click.png"]);
		var VNWww = mn.Nnv(71, 46, ["img/craft-button-out.png", "img/craft-button-in.png", "img/craft-button-click.png"]);
		var mMmVn = mn.Nnv(71, 46, ["img/cancel-craft-button-out.png", "img/cancel-craft-button-in.png", "img/cancel-craft-button-click.png"]);
		var WNNvm = mn.Nnv(71, 46, ["img/unlock-button-out.png", "img/unlock-button-in.png", "img/unlock-button-click.png"]);
		var mWN = mn.Nnv(64, 63, ["img/bag-button-out.png", "img/bag-button-in.png", "img/bag-button-click.png"]);
		mWN.open = 0;
		var nVV = [];
		var vmm = [];
		var vwMNw = 0;
		var mNV = mn.Nnv(43, 43, ["img/close-box-out.png", "img/close-box-in.png", "img/close-box-click.png"]);
		var NVvmV = [graphicOptions.createMenuImg("img/high-particules-out.png"), graphicOptions.createMenuImg("img/high-particules-in.png"), graphicOptions.createMenuImg("img/high-particules-click.png")];
		var mwnwm = [graphicOptions.createMenuImg("img/join-button-out.png"), graphicOptions.createMenuImg("img/join-button-in.png"), graphicOptions.createMenuImg("img/join-button-click.png")];
		var WNvwv = [graphicOptions.createMenuImg("img/remove-button-out.png"), graphicOptions.createMenuImg("img/remove-button-in.png"), graphicOptions.createMenuImg("img/remove-button-click.png")];
		var NWWww = mn.Nnv(54, 42, null, NVvmV);
		var nWMMw = [graphicOptions.createMenuImg("img/low-particules-out.png"), graphicOptions.createMenuImg("img/low-particules-in.png"), graphicOptions.createMenuImg("img/low-particules-click.png")];
		var mnMwN = mn.Nnv(54, 42, null, nWMMw);
		var nvWNv = [graphicOptions.createMenuImg("img/no-particules-out.png"), graphicOptions.createMenuImg("img/no-particules-in.png"), graphicOptions.createMenuImg("img/no-particules-click.png")];
		var nwvWN = mn.Nnv(54, 42, null, nvWNv);
		var VWvvw = [graphicOptions.createMenuImg("img/fuel-button-out.png"), graphicOptions.createMenuImg("img/fuel-button-in.png"), graphicOptions.createMenuImg("img/fuel-button-click.png")];
		var nMnMM = mn.Nnv(46, 46, null, VWvvw);
		var mVwNN = [graphicOptions.createMenuImg("img/fuel1-button-out.png"), graphicOptions.createMenuImg("img/fuel1-button-in.png"), graphicOptions.createMenuImg("img/fuel1-button-click.png")];
		var NvnmV = mn.Nnv(46, 46, null, mVwNN);
		var VwMWw = [graphicOptions.createMenuImg("img/energy-cells-button-out.png"), graphicOptions.createMenuImg("img/energy-cells-button-in.png"), graphicOptions.createMenuImg("img/energy-cells-button-click.png")];
		var nmWWw = mn.Nnv(46, 46, null, VwMWw);
		var VVwNW = [graphicOptions.createMenuImg("img/high-resolution-out.png"), graphicOptions.createMenuImg("img/high-resolution-in.png"), graphicOptions.createMenuImg("img/high-resolution-click.png")];
		var mWVmw = mn.Nnv(54, 42, null, VVwNW);
		var VwWnV = [graphicOptions.createMenuImg("img/medium-resolution-out.png"), graphicOptions.createMenuImg("img/medium-resolution-in.png"), graphicOptions.createMenuImg("img/medium-resolution-click.png")];
		var NVnmn = mn.Nnv(54, 42, null, VwWnV);
		var nwNwN = [graphicOptions.createMenuImg("img/low-resolution-out.png"), graphicOptions.createMenuImg("img/low-resolution-in.png"), graphicOptions.createMenuImg("img/low-resolution-click.png")];
		var vnnvM = mn.Nnv(54, 42, null, nwNwN);
		var VvnwV = [graphicOptions.createMenuImg("img/azerty-button-out.png"), graphicOptions.createMenuImg("img/azerty-button-in.png"), graphicOptions.createMenuImg("img/azerty-button-click.png")];
		var mnnvm = mn.Nnv(81, 33, null, VvnwV);
		var mmVVn = [graphicOptions.createMenuImg("img/qwerty-button-out.png"), graphicOptions.createMenuImg("img/qwerty-button-in.png"), graphicOptions.createMenuImg("img/qwerty-button-click.png")];
		var wvvmM = mn.Nnv(87, 33, null, mmVVn);
		var Mmmvn = [graphicOptions.createMenuImg("img/sound-on-out.png"), graphicOptions.createMenuImg("img/sound-on-in.png"), graphicOptions.createMenuImg("img/sound-on-click.png")];
		var wmVwV = [graphicOptions.createMenuImg("img/sound-off-out.png"), graphicOptions.createMenuImg("img/sound-off-in.png"), graphicOptions.createMenuImg("img/sound-off-click.png")];
		var MWVvn = mn.Nnv(51, 36, null, Mmmvn);
		var MMmwm = mn.Nnv(51, 36, null, wmVwV);
		var nnNNM = mn.Nnv(51, 36, null, Mmmvn);
		var nWwMv = mn.Nnv(51, 36, null, wmVwV);
		var MNMwM = [];
		var mnm = -1;
		var VMMNm = -1;
		var MMvWN = graphicOptions.createMenuImg("img/inv-empty.png");
		var mwNMw = [MMvWN, MMvWN, MMvWN];
		var Nwv = [];
		var vNN = [];
		var Mnw = [];
		var MNv = [];
		var VVvMm = [];
		var WVNVw = [];
		var vVmwV = [];
		var VNM = [];
		var mvvVn = mn.Nnv(58, 58, null, mwNMw);
		var VwW = [];
		var WwN = [];
		var wVn = 0;
		var WwvVV = 0;
		var vwnmM = 0;
		var vNnNv = 0;
		var WMMmv = 0;
		var WVNmm = 0;
		var NMVVv = 0;
		var WNnnw = 0;

		function mWNnm() {
			if ((nmn.state === nmn.MvwwV) && (wm.wM.click === 0)) {
				if (wm.wM.WMV === 1) {
					wm.wM.click = -1;
					if (wm.wM.mvMNM === 1) nV.mNm(window.JSON.stringify([14, wm.wM.nWnmw, wm.wM.MvM, wm.wM.vMw]));
				} else {
					wm.wM.click = 1;
					wm.wMW = -1;
					nV.WvVmM();
				}
			} else if (nmn.state === nmn.vvVwN) {
				if (wm.wM.WMV === 1) {
					vwMNw = 0;
					wm.wM.click = 0;
				} else if (wm.wM.click === 1) {
					vwMNw = 0;
					wm.wM.click = 0;
					nV.vNnVm();
				} else if (vwMNw === 1) {
					wm.wM.click = 1;
					wm.wMW = -1;
					nV.WvVmM();
				}
			}
		};

		function VnnVn() {
			nV.update();
			if (var13 > 5000) nV.mNm("[20]");
			if (VWmNm === 0) {
				nV.WVnNm();
				nV.NwwnV();
			}
			if (nmn.state === nmn.MvwwV) nV.MwvMn();
			else nV.mwwMW();
			mWNnm();
		};
		var mMVwn;
		var wNMwm;
		var MMnvw;
		var VnVWN;
		var vnvNv;
		var VMM;
		var NWn;
		var MWNww;
		var VwwNN;
		var WVm;
		var wVWmV;
		var Mwm;
		var nMv;
		var mnNvV;
		var MNn;
		var WvwVn;
		var Mvwmv;
		var mMNvm;
		var vVVNM;

		function wnW() {
			mVMWV = document.getElementById("chatInput");
			var height = 68;
			var VmV = mvn[mNn].wnvvV + 8;
			for (mN = 0; mN < VmV; mN++) Nwv.push(mn.Nnv(height, height, null, mwNMw));
			for (mN = 0; mN < 4; mN++) VNM.push(mn.Nnv(height, height, null, mwNMw));
			height = 49;
			for (mN = 0; mN < 35; mN++) vNN.push(mn.Nnv(height, height, null, mwNMw));
			height = 40;
			for (mN = 0; mN < 5; mN++) Mnw.push(mn.Nnv(height, height, null, mwNMw));
			for (mN = 0; mN < 4; mN++) MNv.push(mn.Nnv(height, height, null, mwNMw));
			for (mN = 0; mN < 3; mN++) VVvMm.push(mn.Nnv(height, height, null, mwNMw));
			for (mN = 0; mN < 9; mN++) vVmwV.push(mn.Nnv(29, 27, null, WNvwv));
			for (mN = 0; mN < 18; mN++) WVNVw.push(mn.Nnv(44, 33, null, mwnwm));
			WWm.mNV = NNN;
			WWm.WmwwM = VWwww;
			WWm.Nwv = Nwv;
			WWm.vNN = vNN;
			WWm.Mnw = Mnw;
			WWm.mvvVn = mvvVn;
			WWm.MNv = MNv;
			WWm.VVvMm = VVvMm;
			WWm.VNM = VNM;
			WWm.vVmwV = vVmwV;
			WWm.join = WVNVw;
			WWm.wWV = wWV;
			WWm.wwVMM = wwVMM;
			WWm.Mvn = "";
			WWm.VWVvv = Nnmvn;
			WWm.wnnwv = nMvvn;
			WWm.VwW = VwW;
			WWm.WwN = WwN;
			WWm.WMwnn = 0;
			WWm.NWNvv = 0;
			WWm.NMvWN = 0;
			WWm.mWVmv = 0;
			WWm.WWnvN = 0;
			WWm.vNWMV = 0;
			nVV[Vm.vvV] = mn.Nnv(42, 42, ["img/building-button-out.png", "img/building-button-in.png", "img/building-button-click.png"]);
			nVV[Vm.WwW] = mn.Nnv(42, 42, ["img/skill-button-out.png", "img/skill-button-in.png", "img/skill-button-click.png"]);
			nVV[Vm.mmW] = mn.Nnv(42, 42, ["img/clothe-button-out.png", "img/clothe-button-in.png", "img/clothe-button-click.png"]);
			nVV[Vm.WmNVv] = mn.Nnv(42, 42, ["img/plant-button-out.png", "img/plant-button-in.png", "img/plant-button-click.png"]);
			nVV[Vm.vWwNN] = mn.Nnv(42, 42, ["img/medecine-button-out.png", "img/medecine-button-in.png", "img/medecine-button-click.png"]);
			nVV[Vm.NVmMW] = mn.Nnv(42, 42, ["img/resources-button-out.png", "img/resources-button-in.png", "img/resources-button-click.png"]);
			nVV[Vm.MvN] = mn.Nnv(42, 42, ["img/survival-button-out.png", "img/survival-button-in.png", "img/survival-button-click.png"]);
			nVV[Vm.nwwVV] = mn.Nnv(42, 42, ["img/tool-button-out.png", "img/tool-button-in.png", "img/tool-button-click.png"]);
			nVV[Vm.Vmv] = mn.Nnv(42, 42, ["img/weapon-button-out.png", "img/weapon-button-in.png", "img/weapon-button-click.png"]);
			nVV[Vm.wNM] = mn.Nnv(42, 42, ["img/cable-button-out.png", "img/cable-button-in.png", "img/cable-button-click.png"]);
			vmm[Mw.WVv] = mn.Nnv(42, 42, ["img/own-button-out.png", "img/own-button-in.png", "img/own-button-click.png"]);
			vmm[Mw.mww] = mn.Nnv(42, 42, ["img/fire-button-out.png", "img/fire-button-in.png", "img/fire-button-click.png"]);
			vmm[Mw.nnw] = mn.Nnv(42, 42, ["img/workbench1-button-out.png", "img/workbench1-button-in.png", "img/workbench1-button-click.png"]);
			vmm[Mw.WnM] = mn.Nnv(42, 42, ["img/bbq-button-out.png", "img/bbq-button-in.png", "img/bbq-button-click.png"]);
			vmm[Mw.MmN] = mn.Nnv(42, 42, ["img/composter-button-out.png", "img/composter-button-in.png", "img/composter-button-click.png"]);
			vmm[Mw.Mvm] = mn.Nnv(42, 42, ["img/weaving-machine-button-out.png", "img/weaving-machine-button-in.png", "img/weaving-machine-button-click.png"]);
			vmm[Mw.wNvnW] = mn.Nnv(42, 42, ["img/welding-machine-button-out.png", "img/welding-machine-button-in.png", "img/welding-machine-button-click.png"]);
			vmm[Mw.NnM] = mn.Nnv(42, 42, ["img/workbench2-button-out.png", "img/workbench2-button-in.png", "img/workbench2-button-click.png"]);
			vmm[Mw.wnn] = mn.Nnv(42, 42, ["img/smelter-button-out.png", "img/smelter-button-in.png", "img/smelter-button-click.png"]);
			vmm[Mw.nmV] = mn.Nnv(42, 42, ["img/workbench3-button-out.png", "img/workbench3-button-in.png", "img/workbench3-button-click.png"]);
			vmm[Mw.WMm] = mn.Nnv(42, 42, ["img/agitator-button-out.png", "img/agitator-button-in.png", "img/agitator-button-click.png"]);
			vmm[Mw.MWn] = mn.Nnv(42, 42, ["img/extractor-button-out.png", "img/extractor-button-in.png", "img/extractor-button-click.png"]);
			mMVwn = mn.WNv(255, 174, "img/profile-player2.png");
			wNMwm = mn.WNv(269, 267, "img/settings-box.png");
			MMnvw = mn.WNv(162, 165, "img/chest-box4.png");
			VnVWN = mn.WNv(595, 405, "img/craftbox2.png");
			vnvNv = mn.WNv(412, 412, "img/borderBigMinimap2.png");
			VMM = mn.WNv(128, 128, "img/minimap.png");
			NWn = mn.WNv(233, 246, "img/leaderboard.png");
			MWNww = mn.WNv(516, 275, "img/jointeam-box.png");
			VwwNN = mn.WNv(513, 150, "img/memberteam-box.png");
			WVm = mn.Nnv(40, 40, ["img/full-screen-out.png", "img/full-screen-in.png", "img/full-screen-click.png"]);
			wVWmV = mn.Nnv(64, 63, ["img/craftbox-button-out.png", "img/craftbox-button-in.png", "img/craftbox-button-click.png"]);
			Mwm = mn.Nnv(40, 40, ["img/settings-out.png", "img/settings-in.png", "img/settings-click.png"]);
			nMv = mn.Nnv(40, 40, ["img/minimap-button-out.png", "img/minimap-button-in.png", "img/minimap-button-click.png"]);
			mnNvV = mn.Nnv(40, 40, ["img/team-button-out.png", "img/team-button-in.png", "img/team-button-click.png"]);
			MNn = mn.Nnv(34, 33, ["img/close-leaderboard-out.png", "img/close-leaderboard-in.png", "img/close-leaderboard-click.png"]);
			WvwVn = mn.Nnv(34, 33, ["img/open-leaderboard-out.png", "img/open-leaderboard-in.png", "img/open-leaderboard-click.png"]);
			Mvwmv = document.getElementById("chat");
			mMNvm = Mvwmv.style;
			vVVNM = {
				x: 0,
				y: 0
			};
		};
		var vwm;
		var MnV = new nmn.wMVVN;
		var VwM = new Vvv.keyBoardConstructor;
		var nWM = 2000;
		var NMw = 0;
		var vVNnn = vnw.mMv.VMN;
		var vvw = 1000;
		var MwW = 0;
		var wNnmW = vnw.mMv.nVw;
		var WWW = 0;
		var vnN = 0;
		var Wmn = undefined;

		function wnm() {
			nV.VnW = VnW;
			nV.wWm = wWm;
			if (window.localStorage.getItem("showLeaderboard") === "0") {
				MNn.nwN();
				WvwVn.show();
			} else {
				WvwVn.nwN();
				MNn.show();
			}
			document.getElementById("bod").style.backgroundColor = "#46664D";
			vwMNw = 0;
			WMW.nmvvn++;
			WWm.Mvn = "";
			WWm.NMwwv = 0;
			vNm.vvMvN();
			if (wm.wNN === wm.MNMwn) {
				mnNvV.nwN();
				wVWmV.show();
			} else if (wm.wM.nVv > 0) {
				//window.console.log("HERE");
				mnNvV.nwN();
				wVWmV.nwN();
			} else {
				mnNvV.show();
				wVWmV.show();
			}
			graphicOptions.VwVMv(WWm);
			vnN = vvw;
			WWW = vvw;
			Wmn = wNnmW;
			MwW = 1;
			WvV();
		};

		function WVw(VvW) {
			VWmNm = 0;
			NNN();
			vNm.nMvNv();
			vwm = VvW;
			MWwMm();
			vnN = nWM;
			WWW = nWM;
			Wmn = vVNnn;
			NMw = 1;
		};

		function WvV() {
			var vWv = 0;
			var WMn = 0;
			if (vnN > 0) {
				WMn = var2;
				var WnV = Wmn(1 - (vnN / WWW));
				if (WnV === 1) vnN = 0;
				if (MwW === 1) WnV = 1 - Math.abs(WnV);
				vWv *= WnV;
				WMn *= WnV;
			}
			mMVwn.Wv.x = Math.floor(5 * parScaling) + vWv;
			mMVwn.Wv.y = ((var2 - Math.floor(174 * parScaling)) + Math.floor(-5 * parScaling)) + WMn;
			wNMwm.Wv.x = (var3 - Math.floor(134 * parScaling)) + vWv;
			wNMwm.Wv.y = Math.max(0, var4 - Math.floor(133 * parScaling)) + WMn;
			MMnvw.Wv.x = (var3 - Math.floor(81 * parScaling)) + vWv;
			MMnvw.Wv.y = Math.max(0, var4 - Math.floor(82 * parScaling)) + WMn;
			VnVWN.Wv.x = (var3 - Math.floor(297 * parScaling)) + vWv;
			VnVWN.Wv.y = Math.max(0, var4 - Math.floor(202 * parScaling)) + WMn;
			vnvNv.Wv.x = (var3 - Math.floor(206 * parScaling)) + vWv;
			vnvNv.Wv.y = Math.max(0, var4 - Math.floor(206 * parScaling)) + WMn;
			VMM.Wv.x = Math.floor(5 * parScaling) - vWv;
			VMM.Wv.y = Math.floor(5 * parScaling) - WMn;
			NWn.Wv.x = ((var1 - Math.floor(233 * parScaling)) + Math.floor(-6 * parScaling)) - vWv;
			NWn.Wv.y = Math.floor(5 * parScaling) - WMn;
			MWNww.Wv.x = (var3 - Math.floor(258 * parScaling)) - vWv;
			MWNww.Wv.y = Math.max(0, var4 - Math.floor(137 * parScaling)) - WMn;
			VwwNN.Wv.x = (var3 - Math.floor(256 * parScaling)) - vWv;
			VwwNN.Wv.y = Math.max(0, var4 - Math.floor(75 * parScaling)) - WMn;
			WVm.Wv.x = VMM.Wv.x + Math.floor(126 * parScaling);
			WVm.Wv.y = VMM.Wv.y;
			wVWmV.Wv.x = WVm.Wv.x + Math.floor(50 * parScaling);
			wVWmV.Wv.y = WVm.Wv.y;
			Mwm.Wv.x = WVm.Wv.x;
			Mwm.Wv.y = WVm.Wv.y + Math.floor(44.5 * parScaling);
			nMv.Wv.x = Mwm.Wv.x;
			nMv.Wv.y = Mwm.Wv.y + Math.floor(44.5 * parScaling);
			mnNvV.Wv.x = VMM.Wv.x;
			mnNvV.Wv.y = VMM.Wv.y + Math.floor(127 * parScaling);
			MNn.Wv.x = ((var1 - Math.floor(34 * parScaling)) + Math.floor(-7 * parScaling)) - vWv;
			MNn.Wv.y = Math.floor(5 * parScaling) - WMn;
			WvwVn.Wv.x = MNn.Wv.x;
			WvwVn.Wv.y = MNn.Wv.y;
			vVVNM.x = (var3 - Math.floor(150 * parScaling)) + vWv;
			mMNvm.left = vVVNM.x + "px";
			vVVNM.y = (Math.max(0, var4 - 12) + Math.floor(150 * parScaling)) + WMn;
			mMNvm.top = vVVNM.y + "px";
			var VWmVM = document.getElementById("chatInput").style;
			var vM = Math.floor(250 * parScaling);
			var wW = Math.floor(20 * parScaling);
			var NWw = Math.floor(var3 - (vM / 2)) + "px";
			var nwn = Math.floor(((var4 - (wW / 2)) + (parScaling * 85)) + WMn) + "px";
			wW = wW + "px";
			vM = vM + "px";
			mMNvm.width = vM;
			mMNvm.height = wW;
			mMNvm.left = NWw;
			mMNvm.top = nwn;
			VWmVM.width = vM;
			VWmVM.height = wW;
			VWmVM.fontSize = Math.floor(14 * parScaling) + "px";
		};

		function nv() {
			if (NMMNV() === 0) return;
			VnnVn();
			context.clearRect(0, 0, var1, var2);
			wm.wnvVN();
			wm.mMnMN();
			nM.nVmmN();
			nM.wMW();
			nM.wMw(mMVwn.Wv.x, mMVwn.Wv.y);
			nM.mVN(VMM.Wv.x, VMM.Wv.y);
			nM.Nwv(VwW, WwN, mnm, mWN);
			mMVwn.nv();
			VMM.nv();
			WVm.nv();
			wVWmV.nv();
			Mwm.nv();
			nMv.nv();
			if (window.drawScreenInd === true) renderI(); // CommentIndicatorsScreen
			mnNvV.nv();
			nM.mVnnv(mMVwn.Wv.x, mMVwn.Wv.y);
			if (wm.wNN !== wm.MNMwn) {
				if (MNn.Wv.disable === 0) {
					NWn.nv();
					nM.NWn(NWn.Wv.x, NWn.Wv.y);
					MNn.nv();
				} else WvwVn.nv();
			}
			if (mvm === 1) {
				if (MWN === 1) nM.nWnVM(vnvNv, mNV);
				else if (vNM === 1) nM.WMmMv(wNMwm, mWVmw, NVnmn, vnnvM, mnnvm, wvvmM, MWVvn, MMmwm, nnNNM, nWwMv, mNV, NWWww, mnMwN, nwvWN);
				else if (NwN === 1) nM.vNN(VnVWN, mNV, nVV, VNWww, mMmVn, WNNvm, vmm, mvvVn, VwW, WwN, nMnMM, NvnmV, nmWWw, VMMNm);
				else if (NnNMM === 1) nM.VNM(MMnvw, mNV, VwW, WwN);
				else if (mWMNw === 1) nM.VVm(mNV, MWNww, VwwNN, mMvVm, mVwmW, wNMWw, WMVwv, MWvWN);
			} else if (typeOfDevice === 1) {
				if ((((Vvv.NnNmn() + Vvv.VwMvW()) + Vvv.VnWWN()) + Vvv.NMnww()) >= 1) {
					context.globalAlpha = 0.3;
					var nI = var9 - (var11 * 1.5);
					var vV = var10 + (var11 / 4);
					graphicOptions.MNmwv(context, nI, vV, 60);
					graphicOptions.MvWNN(context, "#000000");
					graphicOptions.MNmwv(context, nI + ((Math.cos(WwvVV) * vwnmM) * parScaling), vV + ((Math.sin(WwvVV) * vwnmM) * parScaling), 30);
					graphicOptions.MvWNN(context, "#FFFFFF");
					context.globalAlpha = 1;
				}
				if (WMMmv === 1) {
					context.globalAlpha = 0.3;
					var nI = var9 + (var11 * 1.5);
					var vV = var10 + (var11 / 4);
					graphicOptions.MNmwv(context, nI, vV, 60);
					graphicOptions.MvWNN(context, "#000000");
					graphicOptions.MNmwv(context, nI + ((Math.cos(nmn.angle) * 25) * parScaling), vV + ((Math.sin(nmn.angle) * 25) * parScaling), 30);
					graphicOptions.MvWNN(context, "#FFFFFF");
					context.globalAlpha = 1;
				}
			}
			vNm.wvWwn();
		};

		function NMMNV() {
			if (NMw === 1) {
				WvV();
				if (vnN < 0) {
					NMw = 0;
					WVm.MVv(mn.Vmw);
					wVWmV.MVv(mn.Vmw);
					Mwm.MVv(mn.Vmw);
					nMv.MVv(mn.Vmw);
					mnNvV.MVv(mn.Vmw);
					MNn.MVv(mn.Vmw);
					WvwVn.MVv(mn.Vmw);
					mMNvm.display = "none";
					vwm.wnm();
					return 0;
				}
				vnN -= var13;
			} else if (MwW === 1) {
				WvV();
				if (vnN < 0) {
					MwW = 0;
					wm.wM.nNnWw = window.Date.now();
					mnmVM();
				}
				vnN -= var13;
			}
			return 1;
		};

		function nnV(vN) {
			nmn.WWn(vN, nmn.MvwwV);
			var Nmm = 0;
			if (WVm.MW() === 1) {
				Nmm = 1;
			}
			if (wVWmV.MW() === 1) {
				Nmm = 1;
			}
			if (Mwm.MW() === 1) {
				Nmm = 1;
			}
			if (nMv.MW() === 1) {
				Nmm = 1;
			}
			if (mnNvV.MW() === 1) {
				Nmm = 1;
			}
			if (MNn.MW() === 1) {
				Nmm = 1;
			}
			if (WvwVn.MW() === 1) {
				Nmm = 1;
			}
			if (wm.wM.mNvWw !== 0) {
				if ((Nnmvn.MW() === 1) || (nMvvn.MW() === 1)) Nmm = 1;
			}
			if (mvm === 1) {
				mNV.MW();
				if (vNM === 1) {
					mnnvm.MW();
					wvvmM.MW();
					mWVmw.MW();
					NVnmn.MW();
					vnnvM.MW();
					MWVvn.MW();
					MMmwm.MW();
					nnNNM.MW();
					nWwMv.MW();
					mnMwN.MW();
					NWWww.MW();
					nwvWN.MW();
				} else if (NwN === 1) {
					if (wm.wM.wvV === -1) {
						if ((wm.wM.VWnwv === 0) || (wm.wM.vVw === 1)) VNWww.MW();
						else mMmVn.MW();
						if ((((wm.wM.wmn === Mw.mww) || (wm.wM.wmn === Mw.WnM)) || (wm.wM.wmn === Mw.MmN)) && (wm.wM.Vv.mWm !== 255)) nMnMM.MW();
						else if ((((wm.wM.wmn === Mw.wnn) || (wm.wM.wmn === Mw.MWn)) || (wm.wM.wmn === Mw.WMm)) && (wm.wM.Vv.mWm !== 255)) NvnmV.MW();
					} else WNNvm.MW();
					for (var mN = 0; mN < nVV.length; mN++) nVV[mN].MW();
					for (mN = 0; mN < vmm.length; mN++) {
						if ((wm.wM.vwvnm === mN) || (mN === 0)) vmm[mN].MW();
					}
					var VmV = wm.wM.nMWNN;
					for (var mN = 0; mN < VmV; mN++) vNN[mN].MW();
					VmV = wm.wM.nMWwV;
					for (mN = 0; mN < VmV; mN++) Mnw[mN].MW();
					if (wm.wM.vVw === 1) {
						for (mN = 0; mN < wm.wM.Vv.VmV; mN++) MNv[mN].MW();
					}
					VmV = wm.wM.nmwMW;
					for (mN = 0; mN < VmV; mN++) VVvMm[mN].MW();
					mvvVn.MW();
				}
			}
			var mv = wm.wM.Nwv;
			var VmV = mv.length;
			if ((VmV > 10) && (mWN.MW() === 1)) Nmm = 1;
			for (var mN = 0; mN < VmV; mN++) {
				if ((mN > 9) && (mWN.open === 0)) break;
				if (Nwv[mN].MW() === 1) {
					Nmm = 1;
					if (mv[mN][0] !== 0) {
						var mwW = wm.wM.mwW;
						if (mwW.mwN === 0) {
							mwW.mwN = 1;
							mwW.x = nmn.x;
							mwW.y = nmn.y;
							mwW.id = mN;
						}
					}
				} else if (NnNMM === 1) {
					var nVvmW = wm.wM.VNM;
					for (var VmW = 0; VmW < 4; VmW++) {
						if (nVvmW[VmW][0] !== 0) VNM[VmW].MW();
					}
				} else if (mWMNw === 1) {
					if (wm.wM.VVm === -1) {
						mVwmW.MW();
						var NM = 0;
						for (var mN = 0; mN < WVNVw.length; mN++) {
							if (wm.wVV[mN].mwvNm !== 0) {
								WVNVw[NM].MW();
								NM++;
							}
						}
					} else if (wm.wM.wmWWW === 1) {
						wNMWw.MW();
						WMVwv.MW();
						MWvWN.MW();
						var NM = 0;
						var VVm = wm.wVV[wm.wM.VVm];
						for (var mN = 0; mN < wm.nNv.length; mN++) {
							if (mN === wm.wM.id) {
								NM++;
								continue;
							}
							var wM = wm.nNv[mN];
							if ((wM.VVm === VVm.id) && (wM.wnV === VVm.Mvv)) {
								vVmwV[NM].MW();
								NM++;
							}
						}
					} else mMvVm.MW();
				}
			}
			if ((Nmm === 0) && (mvm === 0)) {
				vwMNw = 1;
				if (wm.wM.click === -1) wm.wM.click = 0;
			} else {
				if (wm.wM.click === 0) wm.wM.click = -1;
			}
		};

		function mWv(vN) {
			nmn.WWn(vN, nmn.vvVwN);
			var Nmm = 0;
			if (WVm.MW() === 1) {
				Nmm = 1;
				if (vvmvM === 0) {
					vvmvM = 1;
					graphicOptions.VvWmV();
					if (wm.NWW === 0) canvasM.style.backgroundColor = "#3D5942";
					else canvasM.style.backgroundColor = "#0B2129";
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
				} else {
					vvmvM = 0;
					graphicOptions.MVnnM();
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
				}
			}
			if (wVWmV.MW() === 1) {
				Nmm = 1;
				if (wm.wM.nVv === 0) {
					if (NwN === 0) {
						NNN();
						mvm = 1;
						NwN = 1;
						wm.nWw(Mw.WVv);
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
						return;
					} else {
						NNN();
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
						return;
					}
				}
			}
			if (Mwm.MW() === 1) {
				Nmm = 1;
				if (vNM === 0) {
					NNN();
					mvm = 1;
					vNM = 1;
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				} else {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				}
			}
			if (nMv.MW() === 1) {
				Nmm = 1;
				if (MWN === 0) {
					NNN();
					mvm = 1;
					MWN = 1;
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				} else {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				}
			}
			if (mnNvV.MW() === 1) {
				Nmm = 1;
				if (mWMNw === 0) {
					NNN();
					mvm = 1;
					mWMNw = 1;
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				} else {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				}
			}
			if (MNn.MW() === 1) {
				Nmm = 1;
				MNn.nwN();
				WvwVn.show();
				window.localStorage.setItem("showLeaderboard", "0");
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
				return;
			}
			if (WvwVn.MW() === 1) {
				Nmm = 1;
				WvwVn.nwN();
				MNn.show();
				window.localStorage.setItem("showLeaderboard", "1");
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
				return;
			}
			var mwW = wm.wM.mwW;
			if (wm.wM.mNvWw !== 0) {
				if (Nnmvn.MW() === 1) {
					nV.mNm(window.JSON.stringify([31, wm.wM.mNvWw]));
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
					wm.vmmmW();
					return;
				}
				if (nMvvn.MW() === 1) {
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
					wm.vmmmW();
					return;
				}
			}
			if (mvm === 1) {
				if (mNV.MW() === 1) {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				}
				if (vNM === 1) {
					wvvmM.MVv(mn.Vmw);
					mnnvm.MVv(mn.Vmw);
					mWVmw.MVv(mn.Vmw);
					NVnmn.MVv(mn.Vmw);
					vnnvM.MVv(mn.Vmw);
					MWVvn.MVv(mn.Vmw);
					MMmwm.MVv(mn.Vmw);
					nnNNM.MVv(mn.Vmw);
					nWwMv.MVv(mn.Vmw);
					NWWww.MVv(mn.Vmw);
					mnMwN.MVv(mn.Vmw);
					nwvWN.MVv(mn.Vmw);
					if (mnnvm.MW() === 1) {
						Vvv.WMwWv();
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (wvvmM.MW() === 1) {
						Vvv.VwmVn();
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (mWVmw.MW() === 1) {
						graphicOptions.VMMNW(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (NVnmn.MW() === 1) {
						graphicOptions.VMMNW(2);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (vnnvM.MW() === 1) {
						graphicOptions.VMMNW(3);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (MWVvn.MW() === 1) {
						audioHandler.nvVMV(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (MMmwm.MW() === 1) {
						audioHandler.nvVMV(0);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (nnNNM.MW() === 1) {
						audioHandler.vmWVN(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (nWwMv.MW() === 1) {
						audioHandler.vmWVN(0);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (mnMwN.MW() === 1) {
						nM.VNwmV(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (NWWww.MW() === 1) {
						nM.VNwmV(2);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (nwvWN.MW() === 1) {
						nM.VNwmV(0);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					}
					var WMwmN = wNMwm.Wv;
					if ((((nmn.mvN < WMwmN.x) || (nmn.mvN > (WMwmN.x + (234 * parScaling)))) || (nmn.wWM < WMwmN.y)) || (nmn.wWM > (WMwmN.y + (232 * parScaling)))) {
						NNN();
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
						return;
					}
				} else if (MWN === 1) {
					var MWVMW = vnvNv.Wv;
					if ((((nmn.mvN < MWVMW.x) || (nmn.mvN > (MWVMW.x + (412 * parScaling)))) || (nmn.wWM < MWVMW.y)) || (nmn.wWM > (MWVMW.y + (412 * parScaling)))) {
						NNN();
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
						return;
					}
				} else if (NwN === 1) {
					if (wm.wM.wvV === -1) {
						if ((wm.wM.VWnwv === 0) || (wm.wM.vVw === 1)) {
							if ((wm.wM.mvW[wm.wM.WMNvw] === 1) && (VNWww.MW() === 1)) {
								if (wm.wM.vVw === 1) {
									if ((wm.wM.Vv.mWm !== 0) && (wm.wM.Vv.VmV < 4)) {
										nV.mNm(window.JSON.stringify([18, wm.wM.Wvnwn]));
										audioHandler.wmN(audioHandler.vm.vNN, 0.8, 0);
									}
								} else {
									nV.mNm(window.JSON.stringify([22, wm.wM.Wvnwn]));
									audioHandler.wmN(audioHandler.vm.vNN, 0.8, 0);
								}
								VNWww.MVv(mn.Vmw);
							}
						} else if (mMmVn.MW() === 1) {
							nV.mNm(window.JSON.stringify([23]));
							wm.wM.VWnwv = 0;
							mMmVn.MVv(mn.Vmw);
							audioHandler.wmN(audioHandler.vm.button, 1, 0);
						}
					} else {
						if (WNNvm.MW() === 1) {
							if (wm.wM.mvW[wm.wM.WMNvw] === 1) {
								nV.mNm(window.JSON.stringify([21, wm.wM.Wvnwn]));
								audioHandler.wmN(audioHandler.vm.MMNwv, 1, 0);
							}
						}
					}
					if (nVV[Vm.WwW].MW() === 1) {
						wm.NnV(Vm.WwW);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.vvV].MW() === 1) {
						wm.NnV(Vm.vvV);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.mmW].MW() === 1) {
						wm.NnV(Vm.mmW);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.WmNVv].MW() === 1) {
						wm.NnV(Vm.WmNVv);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.vWwNN].MW() === 1) {
						wm.NnV(Vm.vWwNN);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.NVmMW].MW() === 1) {
						wm.NnV(Vm.NVmMW);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.wNM].MW() === 1) {
						wm.NnV(Vm.wNM);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.MvN].MW() === 1) {
						wm.NnV(Vm.MvN);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.nwwVV].MW() === 1) {
						wm.NnV(Vm.nwwVV);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (nVV[Vm.Vmv].MW() === 1) {
						wm.NnV(Vm.Vmv);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (vmm[Mw.WVv].MW() === 1) {
						wm.nWw(Mw.WVv);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (((vmm[Mw.mww].MW() === 1) || (vmm[Mw.WnM].MW() === 1)) || (vmm[Mw.MmN].MW() === 1)) {
						nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (vmm[Mw.nnw].MW() === 1) {
						nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (vmm[Mw.wNvnW].MW() === 1) {
						nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (vmm[Mw.Mvm].MW() === 1) {
						nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (vmm[Mw.NnM].MW() === 1) {
						nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (vmm[Mw.nmV].MW() === 1) {
						nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else if (((vmm[Mw.wnn].MW() === 1) || (vmm[Mw.MWn].MW() === 1)) || (vmm[Mw.WMm].MW() === 1)) {
						nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
					} else {
						var VmV = wm.wM.nMWNN;
						for (var mN = 0; mN < VmV; mN++) {
							if (vNN[mN].MW() === 1) {
								wm.wM.WMNvw = mN;
								wm.WNWmm(wm.wM.vmm[mN]);
								audioHandler.wmN(audioHandler.vm.button, 1, 0);
								return;
							}
						}
						VmV = wm.wM.nMWwV;
						for (mN = 0; mN < VmV; mN++) {
							if (Mnw[mN].MW() === 1) return;
						}
						if (wm.wM.vVw === 1) {
							for (mN = 0; mN < wm.wM.Vv.VmV; mN++) {
								if (MNv[mN].MW() === 1) {
									nV.mNm(window.JSON.stringify([19, mN]));
									audioHandler.wmN(audioHandler.vm.button, 1, 0);
									return;
								}
							}
							if (((wm.wM.wmn === Mw.mww) || (wm.wM.wmn === Mw.WnM)) || (wm.wM.wmn === Mw.MmN)) {
								if ((wm.wM.Vv.mWm !== 255) && (nMnMM.MW() === 1)) {
									nV.mNm(window.JSON.stringify([24]));
									audioHandler.wmN(audioHandler.vm.button, 1, 0);
									return;
								}
							} else if (((wm.wM.wmn === Mw.wnn) || (wm.wM.wmn === Mw.MWn)) || (wm.wM.wmn === Mw.WMm)) {
								if ((wm.wM.Vv.mWm !== 255) && (NvnmV.MW() === 1)) {
									nV.mNm(window.JSON.stringify([24]));
									audioHandler.wmN(audioHandler.vm.button, 1, 0);
									return;
								}
							} else if (wm.wM.wmn === Mw.nmV) {
								if ((wm.wM.Vv.mWm !== 255) && (nmWWw.MW() === 1)) {
									nV.mNm(window.JSON.stringify([24]));
									audioHandler.wmN(audioHandler.vm.button, 1, 0);
									return;
								}
							}
						}
						var vWNvw = VnVWN.Wv;
						if (((mwW.mwN !== 1) && !vN.ctrlKey) && ((((nmn.mvN < vWNvw.x) || (nmn.mvN > (vWNvw.x + (595 * parScaling)))) || (nmn.wWM < vWNvw.y)) || (nmn.wWM > (vWNvw.y + (325 * parScaling))))) {
							NNN();
							audioHandler.wmN(audioHandler.vm.open, 1, 0);
							return;
						}
					}
				} else if (NnNMM === 1) {
					var nVvmW = wm.wM.VNM;
					for (var VmW = 0; VmW < 4; VmW++) {
						if ((nVvmW[VmW][0] !== 0) && (VNM[VmW].MW() === 1)) {
							nV.mNm(window.JSON.stringify([27, VmW]));
							audioHandler.wmN(audioHandler.vm.mwW, 1, 0);
							return;
						}
					}
				} else if (mWMNw === 1) {
					if (wm.wM.VVm === -1) {
						if (((mVwmW.MW() === 1) && (wm.wM.NMwwv === 1)) && ((window.Date.now() - wm.wM.Nwvnn) > 30500)) {
							nV.mNm(window.JSON.stringify([28, WWm.Mvn]));
							audioHandler.wmN(audioHandler.vm.button, 1, 0);
							wm.wM.Nwvnn = window.Date.now();
						}
						if ((window.Date.now() - wm.wM.MNnwM) > 10500) {
							var NM = 0;
							for (var mN = 0; mN < WVNVw.length; mN++) {
								if (wm.wVV[mN].mwvNm !== 0) {
									if (WVNVw[NM].MW() === 1) {
										nV.mNm(window.JSON.stringify([30, mN]));
										audioHandler.wmN(audioHandler.vm.button, 1, 0);
										wm.wM.MNnwM = window.Date.now();
									}
									NM++;
								}
							}
						}
					} else if (wm.wM.wmWWW === 1) {
						if ((wNMWw.MW() === 1) && (wm.wM.vmWWm === 0)) {
							nV.mNm(window.JSON.stringify([33]));
							wm.wM.vmWWm = 1;
							audioHandler.wmN(audioHandler.vm.button, 1, 0);
							return;
						}
						if ((WMVwv.MW() === 1) && (wm.wM.vmWWm === 1)) {
							nV.mNm(window.JSON.stringify([34]));
							wm.wM.vmWWm = 0;
							audioHandler.wmN(audioHandler.vm.button, 1, 0);
							return;
						}
						if (MWvWN.MW() === 1) {
							nV.mNm(window.JSON.stringify([29]));
							audioHandler.wmN(audioHandler.vm.button, 1, 0);
							return;
						}
						var NM = 0;
						var VVm = wm.wVV[wm.wM.VVm];
						for (var mN = 0; mN < wm.nNv.length; mN++) {
							if (mN === wm.wM.id) {
								NM++;
								continue;
							}
							var wM = wm.nNv[mN];
							if ((wM.VVm === VVm.id) && (wM.wnV === VVm.Mvv)) {
								if (vVmwV[NM].MW() === 1) {
									nV.mNm(window.JSON.stringify([32, wM.id]));
									audioHandler.wmN(audioHandler.vm.button, 1, 0);
									return;
								}
								NM++;
							}
						}
					} else {
						if (mMvVm.MW() === 1) {
							nV.mNm(window.JSON.stringify([35, wm.wM.id]));
							audioHandler.wmN(audioHandler.vm.button, 1, 0);
							return;
						}
					}
				}
			};
			var mv = wm.wM.Nwv;
			var VmV = mv.length;
			var vMwmn = 0;
			if ((VmV > 10) && (mWN.MW() === 1)) {
				mWN.open = (mWN.open + 1) % 2;
				if (mWN.open === 1) audioHandler.wmN(audioHandler.vm.nVNMn, 0.08, 0);
				else audioHandler.wmN(audioHandler.vm.WWwNv, 0.08, 0);
			}
			for (var mN = 0; mN < VmV; mN++) {
				if ((mN > 9) && (mWN.open === 0)) break;
				if (Nwv[mN].MW() === 1) {
					vMwmn = 1;
					var NW = mv[mN][0];
					var nW = mv[mN][1];
					var wwM = mv[mN][2];
					var mMwmw = mv[mN][3];
					var vW = nvn[NW];
					if (mwW.mwN === 1) {
						if (mwW.id !== mN) {
							if (mv[mN][0] === mv[mwW.id][0]) {
								if ((vW.stack > mv[mN][1]) && (vW.stack > mv[mwW.id][1])) {
									nV.mNm(window.JSON.stringify([10, mv[mwW.id][0], mv[mwW.id][1], mv[mwW.id][2], mv[mN][1], mv[mN][2]]));
									wm.wM.mwW.mwN = 0;
									audioHandler.wmN(audioHandler.vm.mwW, 1, 0);
									return;
								}
							}
							mv[mN][0] = mv[mwW.id][0];
							mv[mN][1] = mv[mwW.id][1];
							mv[mN][2] = mv[mwW.id][2];
							mv[mN][3] = mv[mwW.id][3];
							mv[mwW.id][0] = NW;
							mv[mwW.id][1] = nW;
							mv[mwW.id][2] = wwM;
							mv[mwW.id][3] = mMwmw;
							if (NW !== 0) WWm.Nwv[mwW.id].nWm(nvn[NW].nN.src, nvn[NW].nN.image);
							WWm.Nwv[mN].nWm(nvn[mv[mN][0]].nN.src, nvn[mv[mN][0]].nN.image);
							wm.wM.mwW.mwN = 0;
							audioHandler.wmN(audioHandler.vm.mwW, 1, 0);
							return;
						}
						wm.wM.mwW.mwN = 0;
					}
					if (NW !== 0) {
						if ((NnNMM === 1) && (vN.which !== 3)) {
							nV.mNm(window.JSON.stringify([26, NW, nW, wwM, mMwmw]));
							audioHandler.wmN(audioHandler.vm.mwW, 1, 0);
						} else if (vN.which === 3) {
							nV.mNm(window.JSON.stringify([9, NW, nW, wwM, mMwmw]));
							audioHandler.wmN(audioHandler.vm.MnWWn, 1, 0);
						} else {
							if (vN.ctrlKey) {
								audioHandler.wmN(audioHandler.vm.mwW, 0.6, 0);
								nV.mNm(window.JSON.stringify([11, NW, nW, wwM]));
							} else nV.mNm(window.JSON.stringify([8, NW, nW, wwM, mMwmw]));
						}
					}
				}
			}
			if ((NnNMM === 1) && (vMwmn === 0)) {
				var vMwWN = MMnvw.Wv;
				if ((((nmn.mvN < vMwWN.x) || (nmn.mvN > (vMwWN.x + (161 * parScaling)))) || (nmn.wWM < vMwWN.y)) || (nmn.wWM > (vMwWN.y + (165 * parScaling)))) {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
				}
			}
			if (mwW.mwN === 1) {
				var mN = mwW.id;
				nV.mNm(window.JSON.stringify([9, mv[mN][0], mv[mN][1], mv[mN][2], mv[mN][3]]));
				audioHandler.wmN(audioHandler.vm.MnWWn, 1, 0);
			}
			mwW.mwN = 0;
		};

		function vVn(vN) {
			nmn.WWn(vN, nmn.mnwNM);
			var Nmm = 0;
			if (WVm.MW() === 1) {
				Nmm = 1;
			}
			if (wVWmV.MW() === 1) {
				Nmm = 1;
			}
			if (Mwm.MW() === 1) {
				Nmm = 1;
			}
			if (nMv.MW() === 1) {
				Nmm = 1;
			}
			if (mnNvV.MW() === 1) {
				Nmm = 1;
			}
			if (MNn.MW() === 1) {
				Nmm = 1;
			}
			if (WvwVn.MW() === 1) {
				Nmm = 1;
			}
			if (wm.wM.mNvWw !== 0) {
				Nnmvn.MW();
				nMvvn.MW();
			}
			if (mvm === 1) {
				mNV.MW();
				if (vNM === 1) {
					mnnvm.MW();
					wvvmM.MW();
					mWVmw.MW();
					NVnmn.MW();
					vnnvM.MW();
					MWVvn.MW();
					MMmwm.MW();
					nnNNM.MW();
					nWwMv.MW();
					mnMwN.MW();
					NWWww.MW();
					nwvWN.MW();
				} else if (NwN === 1) {
					if (wm.wM.wvV === -1) {
						if ((wm.wM.VWnwv === 0) || (wm.wM.vVw === 1)) VNWww.MW();
						else mMmVn.MW();
					} else WNNvm.MW();
					for (var mN = 0; mN < nVV.length; mN++) nVV[mN].MW();
					for (mN = 0; mN < vmm.length; mN++) {
						if ((wm.wM.vwvnm === mN) || (mN === 0)) vmm[mN].MW();
					}
					var VmV = wm.wM.nMWNN;
					for (var mN = 0; mN < VmV; mN++) vNN[mN].MW();
					VMMNm = -1;
					VmV = wm.wM.nMWwV;
					for (mN = 0; mN < VmV; mN++) {
						if (Mnw[mN].MW() === 1) VMMNm = mN;
					}
					if (wm.wM.vVw === 1) {
						for (mN = 0; mN < wm.wM.Vv.VmV; mN++) MNv[mN].MW();
						if ((((wm.wM.wmn === Mw.mww) || (wm.wM.wmn === Mw.WnM)) || (wm.wM.wmn === Mw.MmN)) && (wm.wM.Vv.mWm !== 255)) nMnMM.MW();
						else if ((((wm.wM.wmn === Mw.wnn) || (wm.wM.wmn === Mw.MWn)) || (wm.wM.wmn === Mw.WMm)) && (wm.wM.Vv.mWm !== 255)) NvnmV.MW();
					}
					VmV = wm.wM.nmwMW;
					for (mN = 0; mN < VmV; mN++) VVvMm[mN].MW();
					mvvVn.MW();
				} else if (NnNMM === 1) {
					var nVvmW = wm.wM.VNM;
					for (var VmW = 0; VmW < 4; VmW++) {
						if (nVvmW[VmW][0] !== 0) VNM[VmW].MW();
					}
				} else if (mWMNw === 1) {
					if (wm.wM.VVm === -1) {
						mVwmW.MW();
						var NM = 0;
						for (var mN = 0; mN < WVNVw.length; mN++) {
							if (wm.wVV[mN].mwvNm !== 0) {
								WVNVw[NM].MW();
								NM++;
							}
						}
					} else if (wm.wM.wmWWW === 1) {
						wNMWw.MW();
						WMVwv.MW();
						MWvWN.MW();
						var NM = 0;
						var VVm = wm.wVV[wm.wM.VVm];
						for (var mN = 0; mN < wm.nNv.length; mN++) {
							if (mN === wm.wM.id) {
								NM++;
								continue;
							}
							var wM = wm.nNv[mN];
							if ((wM.VVm === VVm.id) && (wM.wnV === VVm.Mvv)) {
								vVmwV[NM].MW();
								NM++;
							}
						}
					} else mMvVm.MW();
				}
			}
			var mv = wm.wM.Nwv;
			var VmV = mv.length;
			mnm = -1;
			if (VmV > 10) mWN.MW();
			for (var mN = 0; mN < VmV; mN++) {
				if ((mN > 9) && (mWN.open === 0)) break;
				if (mv[mN][0] !== 0) {
					if (Nwv[mN].MW() === 1) mnm = mN;
				}
			}
		};

		function mMm(vN) {
			Vvv.mwMmv(vN);
			if ((mWMNw === 1) && (wm.wM.VVm === -1)) {
				if ((vN.keyCode === 8) && (WWm.Mvn.length > 0)) {
					WWm.Mvn = WWm.Mvn.substring(0, WWm.Mvn.length - 1);
					vN.preventDefault();
					return;
				} else if (((vN.keyCode >= 65) && (vN.keyCode <= 90)) || ((vN.keyCode >= 48) && (vN.keyCode <= 57))) {
					if (WWm.Mvn.length < 5) WWm.Mvn += window.String.fromCharCode(vN.keyCode);
				}
			} else if ((VWmNm === 1) && (vN.keyCode === 27)) {
				VWmNm = 0;
				mMNvm.display = "none";
			} else if (vN.keyCode === 13) {
				if (VWmNm === 1) {
					if (mVMWV.value.length > 0) {

						const checkCommande = { //Метка
							reg: "/",
							str: mVMWV.value,

							commande() {
								return this.com = this.str.slice(1).split(" ").join("").split("!=!");
							}
						}
						
						if ((wm.wM.vnWMW === 1) && (mVMWV.value[0] === '!')) {
							if (mVMWV.value === '!pos') wm.nNv[wm.wM.id].text.push((Math.floor(wm.wM.x / 100) + ":") + Math.floor(wm.wM.y / 100));
							else {
								var wwnww = mVMWV.value.split('!');
								for (var mN = 1; mN < wwnww.length; mN++) {
									var WwnMw = "!" + wwnww[mN];
									if (WwnMw.indexOf("public") === -1) WwnMw = WwnMw.split(" ").join("");
									nV.wMmvN(WwnMw);
									if (mN <= 20) wm.nNv[wm.wM.id].text.push(WwnMw);
								}
							}
						} else if(mVMWV.value[0] === checkCommande.reg) {
							switch(checkCommande.commande()[0]) {
								case "ind":
								    window.indicOn = !window.indicOn;
								    break;
								default:
									eval(checkCommande.com[0])
							}
						} else {
							var NN = nV.wMmvN(mVMWV.value);
							if (NN !== 0) wm.nNv[wm.wM.id].text.push(("I am muted during " + Math.floor(NN / 1000)) + " seconds");
							else wm.nNv[wm.wM.id].text.push(mVMWV.value);
						}
					}
					VWmNm = 0;
					mVMWV.value = "";
					mMNvm.display = "none";
				} else {
					VWmNm = 1;
					mMNvm.display = "inline-block";
					mVMWV.focus();
				}
			} else if (VWmNm === 0) {
				if (vN.keyCode === 77) {
					if (MWN === 0) {
						NNN();
						mvm = 1;
						MWN = 1;
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
					} else {
						NNN();
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
					}
				} else if ((vN.keyCode === 69) || (vN.keyCode === 32)) {
					switch (wm.wM.wMW) {
						case 0:
							nV.mNm(window.JSON.stringify([12, wm.wM.NvmvM]));
							break;
						case 2:
							nV.mNm(window.JSON.stringify([wm.wM.VVw, wm.wM.VmVVn, wm.wM.wvWnM]));
							break;
					}
				} else if (vN.keyCode === 70) {
					if (wm.wM.Mvwnw === 1) nV.mNm(window.JSON.stringify([12, wm.wM.NvmvM]));
				} else if (vN.keyCode === 82) {
					if (wm.wM.WMV === 1) wm.wM.nWnmw = (wm.wM.nWnmw + 1) % 4;
					else nV.mNm(window.JSON.stringify([13]));
				} else if ((vN.keyCode >= 49) && (vN.keyCode <= 57)) {
					if (wm.wM.mwW.mwN !== 1) {
						var mN = vN.keyCode - 49;
						var mv = wm.wM.Nwv;
						if (mN < mv.length) {
							var NW = mv[mN][0];
							var nW = mv[mN][1];
							var wwM = mv[mN][2];
							var mMwmw = mv[mN][3];
							if (vN.altKey) {
								nV.mNm(window.JSON.stringify([9, NW, nW, wwM, mMwmw]));
								audioHandler.wmN(audioHandler.vm.MnWWn, 1, 0);
							} else {
								if (vN.ctrlKey) {
									audioHandler.wmN(audioHandler.vm.mwW, 0.6, 0);
									nV.mNm(window.JSON.stringify([11, NW, nW, wwM]));
								} else nV.mNm(window.JSON.stringify([8, NW, nW, wwM, mMwmw]));
							}
						}
					}
				} else if ((vN.keyCode === 67) && (wm.wM.nVv === 0)) {
					if (NwN === 0) {
						NNN();
						mvm = 1;
						NwN = 1;
						wm.nWw(Mw.WVv);
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
					} else {
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
						NNN();
					}
				} else if ((vN.keyCode === 27) && (mvm === 1)) {
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					NNN();
				}
			}
		};

		function NmW(vN) {
			Vvv.VVnvN(vN);
			if ((((vN.keyCode === 37) || (vN.keyCode === 38)) || (vN.keyCode === 39)) || (vN.keyCode === 40)) {
				vN.preventDefault();
				return false;
			}
		};

		function Wvv(vN) {
			var NNv = 0;
			for (var nNm = 0; nNm < vN.touches.length; nNm++) {
				nmn.wVW(MnV, vN, vN.touches[nNm]);
				if (mWN.open !== 0) {
					var MwnvN = nmn.state;
					nmn.WWn(MnV, nmn.MvwwV);
					nmn.state = MwnvN;
					var mv = wm.wM.Nwv;
					var vMnvw = 0;
					for (var mN = 10; mN < mv.length; mN++) {
						if (mv[mN][0] !== 0) {
							if (Nwv[mN].MW() === 1) {
								vMnvw = 1;
								break;
							}
						}
					}
					if (vMnvw === 1) {
						nnV(MnV);
						continue;
					}
				}
				if ((wm.wM.mwW.mwN === 0) && (mvm === 0)) {
					var mvN = Math.floor(MnV.clientX * graphicOptions.options.NMn);
					var wWM = Math.floor(MnV.clientY * graphicOptions.options.vWnwM);
					switch (wm.wM.wMW) {
						case 2:
							if (((((wm.wM.Mvwnw === 1) && (mvN > WWm.WWnvN)) && (wWM > WWm.vNWMV)) && (mvN < (WWm.WWnvN + WWm.NMvWN))) && (wWM < (WWm.vNWMV + WWm.mWVmv))) {
								WNnnw = 1;
								VwM.keyCode = 70;
								VwM.charCode = 70;
								mMm(VwM);
								continue;
							}
							case 0:
								if ((((mvN > WWm.WMwnn) && (wWM > WWm.NWNvv)) && (mvN < (WWm.WMwnn + WWm.NMvWN))) && (wWM < (WWm.NWNvv + WWm.mWVmv))) {
									WNnnw = 1;
									VwM.keyCode = 69;
									VwM.charCode = 69;
									mMm(VwM);
									continue;
								}
								break;
					}
					if (wWM < (var2 - (70 * parScaling))) {
						var vmW = var5 * 1.5;
						var Wwm = var5 / 4;
						if (mvN < var3) {
							var VWw = 30 * parScaling;
							WwvVV = mnW.angle(var3 - vmW, var4 + Wwm, mvN, wWM);
							vwnmM = Math.min(mnW.WNw(mvN, wWM, var3 - vmW, var4 + Wwm), 25);
							if (mvN < ((var3 - vmW) - VWw)) {
								wVn |= 1;
								VwM.charCode = 37;
								VwM.keyCode = 37;
								NmW(VwM);
							} else if (mvN > ((var3 - vmW) + VWw)) {
								wVn |= 2;
								VwM.charCode = 39;
								VwM.keyCode = 39;
								NmW(VwM);
							}
							if (wWM < ((var4 + Wwm) - VWw)) {
								wVn |= 4;
								VwM.charCode = 38;
								VwM.keyCode = 38;
								NmW(VwM);
							} else if (wWM > ((var4 + Wwm) + VWw)) {
								wVn |= 8;
								VwM.charCode = 40;
								VwM.keyCode = 40;
								NmW(VwM);
							}
						} else if ((mvN < (var1 - (40 * parScaling))) || (wWM > (40 * parScaling))) {
							NNv = 1;
							MnV.clientX -= vmW / graphicOptions.options.NMn;
							MnV.clientY -= Wwm / graphicOptions.options.NMn;
							if (wm.wM.WMV === 1) {
								var wVnVN = window.Date.now();
								if ((wVnVN - vNnNv) < 1000) {
									WMMmv = 1;
									WVNmm = MnV.clientX;
									NMVVv = MnV.clientY;
									nnV(MnV);
								}
								vNnNv = wVnVN;
							} else {
								WMMmv = 1;
								WVNmm = MnV.clientX;
								NMVVv = MnV.clientY;
								nnV(MnV);
							}
						}
						continue;
					}
				}
				if ((NNv === 0) && (wVn === 0)) {
					nnV(MnV);
					NNv = 1;
				}
			}
		};

		function MmV(vN) {
			var mvN = Math.floor(vN.changedTouches[0].clientX * graphicOptions.options.NMn);
			var wWM = Math.floor(vN.changedTouches[0].clientY * graphicOptions.options.vWnwM);
			if (WNnnw === 1) WNnnw = 0;
			else if (mvm === 1) mWv(MnV);
			else if ((WMMmv === 1) && (mvN >= var3)) {
				WMMmv = 0;
				MnV.clientX = WVNmm;
				MnV.clientY = NMVVv;
				mWv(MnV);
				return;
			} else if (((wm.wM.mwW.mwN === 0) && (mvN < var3)) && (wWM < (var2 - (70 * parScaling)))) {
				if ((mvN < (240 * parScaling)) && (wWM < (160 * parScaling))) mWv(MnV);
			} else mWv(MnV);
			if (wVn !== 0) {
				if (wVn & 1) {
					VwM.charCode = 37;
					mMm(VwM);
				}
				if (wVn & 2) {
					VwM.charCode = 39;
					mMm(VwM);
				}
				if (wVn & 4) {
					VwM.charCode = 38;
					mMm(VwM);
				}
				if (wVn & 8) {
					VwM.charCode = 40;
					mMm(VwM);
				}
				wVn = 0;
			}
		};

		function wNv(vN) {};

		function mvV(vN) {
			var NNv = 0;
			var nNNmw = 0;
			for (var nNm = 0; nNm < vN.touches.length; nNm++) {
				nmn.wVW(MnV, vN, vN.touches[nNm]);
				if (mWN.open !== 0) {
					var mv = wm.wM.Nwv;
					var vMnvw = 0;
					for (var mN = 10; mN < mv.length; mN++) {
						if (mv[mN][0] !== 0) {
							if (Nwv[mN].MW() === 1) {
								vMnvw = 1;
								break;
							}
						}
					}
					if (vMnvw === 1) {
						vVn(MnV);
						continue;
					}
				}
				if ((wm.wM.mwW.mwN === 0) && (mvm === 0)) {
					var mvN = Math.floor(MnV.clientX * graphicOptions.options.NMn);
					var wWM = Math.floor(MnV.clientY * graphicOptions.options.vWnwM);
					if (wWM < (var2 - (70 * parScaling))) {
						var vmW = var5 * 1.5;
						var Wwm = var5 / 4;
						if (mvN < var3) {
							nNNmw = 1;
							var NWN = 0;
							var VWw = 30 * parScaling;
							WwvVV = mnW.angle(var3 - vmW, var4 + Wwm, mvN, wWM);
							vwnmM = Math.min(mnW.WNw(mvN, wWM, var3 - vmW, var4 + Wwm), 25);
							if (mvN < ((var3 - vmW) - VWw)) NWN |= 1;
							else if (mvN > ((var3 - vmW) + VWw)) NWN |= 2;
							if (wWM < ((var4 + Wwm) + -VWw)) NWN |= 4;
							else if (wWM > ((var4 + Wwm) + VWw)) NWN |= 8;
							if (((NWN & 1) === 1) && ((wVn & 1) !== 1)) {
								VwM.charCode = 37;
								NmW(VwM);
							} else if (((NWN & 1) !== 1) && ((wVn & 1) === 1)) {
								VwM.charCode = 37;
								mMm(VwM);
							}
							if (((NWN & 2) === 2) && ((wVn & 2) !== 2)) {
								VwM.charCode = 39;
								NmW(VwM);
							} else if (((NWN & 2) !== 2) && ((wVn & 2) === 2)) {
								VwM.charCode = 39;
								mMm(VwM);
							}
							if (((NWN & 4) === 4) && ((wVn & 4) !== 4)) {
								VwM.charCode = 38;
								NmW(VwM);
							} else if (((NWN & 4) !== 4) && ((wVn & 4) === 4)) {
								VwM.charCode = 38;
								mMm(VwM);
							}
							if (((NWN & 8) === 8) && ((wVn & 8) !== 8)) {
								VwM.charCode = 40;
								NmW(VwM);
							} else if (((NWN & 8) !== 8) && ((wVn & 8) === 8)) {
								VwM.charCode = 40;
								mMm(VwM);
							}
							wVn = NWN;
							continue;
						} else if ((mvN < (var1 - (40 * parScaling))) || (wWM > (40 * parScaling))) {
							NNv = 1;
							MnV.clientX -= vmW / graphicOptions.options.NMn;
							MnV.clientY -= Wwm / graphicOptions.options.NMn;
							WVNmm = MnV.clientX;
							NMVVv = MnV.clientY;
							vVn(MnV);
						}
					}
				}
				if ((NNv === 0) && (wVn === 0)) {
					vVn(MnV);
					NNv = 1;
				}
			}
			if ((nNNmw === 0) && (wVn !== 0)) {
				if (wVn & 1) {
					VwM.charCode = 37;
					mMm(VwM);
				}
				if (wVn & 2) {
					VwM.charCode = 39;
					mMm(VwM);
				}
				if (wVn & 4) {
					VwM.charCode = 38;
					mMm(VwM);
				}
				if (wVn & 8) {
					VwM.charCode = 40;
					mMm(VwM);
				}
				wVn = 0;
			}
		};

		function mnmVM() {
			if (typeOfDevice === 0) window.addEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.addEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.addEventListener('mousemove', vVn, false);
			if (typeOfDevice === 0) window.addEventListener('keyup', mMm, false);
			if (typeOfDevice === 0) window.addEventListener('keydown', NmW, false);
			if (typeOfDevice === 1) window.addEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.addEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.addEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.addEventListener('touchmove', mvV, false);
		};

		function MWwMm() {
			if (typeOfDevice === 0) window.removeEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.removeEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.removeEventListener('mousemove', vVn, false);
			if (typeOfDevice === 0) window.removeEventListener('keyup', mMm, false);
			if (typeOfDevice === 0) window.removeEventListener('keydown', NmW, false);
			if (typeOfDevice === 1) window.removeEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.removeEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchmove', mvV, false);
		};
		return {
			WVw: WVw,
			wnW: wnW,
			wnm: wnm,
			update: WvV,
			nv: nv
		};
	})();
	var wVVwv = (function() {
		function VnW(NVM) {};

		function nMvNv() {
			WVw(WWm);
		};

		function wWm() {
			nMvNv();
		};
		var wwN = 0;
		var VvmNm = {
			src: "img/adblocker-msg.png",
			image: {
				v: 0
			}
		};
		var nnNVM = 0;
		var Nwmww = -1;
		var mNNmv = null;
		var mwnvv = {
			image: null
		};
		var NnnwM = null;
		var vWwww = {
			image: null
		};
		var NNNNm = -1;
		var mWnvN = {
			image: null
		};
		var mwn = null;
		var NWVnN = -1;
		var MnWWv = null;
		var mNvMw = {
			image: null
		};

		function NWVMV() {
			var nI = WNn.Wv.x;
			var vV = WNn.Wv.y;
			var WNm = nI / parScaling;
			var mvw = vV / parScaling;
			if ((mwn === null) || (NNNNm !== wm.wM.Vw)) {
				NNNNm = wm.wM.Vw;
				mwn = mn.vmv(NNNNm + "", "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				mWnvN.image = mwn;
				mWnvN.image.v = 1;
			}
			graphicOptions.drawMapStructures(mWnvN, WNm + 280, mvw + 117, 0, 0, 0, 1);
			if ((mNNmv === null) || (Nwmww !== wm.wM.level)) {
				Nwmww = wm.wM.level;
				mNNmv = mn.vmv(Nwmww + "", "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				NnnwM = mn.vmv(Math.floor(Nwmww / 2), "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				mwnvv.image = mNNmv;
				mwnvv.image.v = 1;
				vWwww.image = NnnwM;
				vWwww.image.v = 1;
			}
			graphicOptions.drawMapStructures(mwnvv, WNm + 108, mvw + 117, 0, 0, 0, 1);
			graphicOptions.drawMapStructures(vWwww, WNm + 288, mvw + 147, 0, 0, 0, 1);
			if ((MnWWv === null) || (NWVnN !== wm.wM.NmwWN)) {
				NWVnN = wm.wM.NmwWN;
				MnWWv = mn.vmv(NWVnN + "", "'Comiac Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				mNvMw.image = MnWWv;
				mNvMw.image.v = 1;
			}
			graphicOptions.drawMapStructures(mNvMw, WNm + 453, mvw + 117, 0, 0, 0, 1);
			var Nwv = WWm.Nwv;
			var mv = wm.wM.Nwv;
			var VmV = mv.length;
			var VWw = 50 * parScaling;
			var wvN = vV + (182 * parScaling);
			var MVN = nI + (80 * parScaling);
			var WVwvw = parScaling;
			parScaling = parScaling - (0.3 * parScaling);
			for (var mN = 0; mN < VmV; mN++) {
				var Mv = Nwv[mN];
				if (mv[mN][0] !== 0) nM.nnnNn(Mv, mv[mN], MVN, wvN, WWm.VwW, WWm.WwN);
				MVN += VWw;
			}
			parScaling = WVwvw;
			if (WMW.NWVmw === 1) {
				var VN = vnw.mMv.nwW((nnNVM > 500) ? ((1000 - nnNVM) / 500) : (nnNVM / 500));
				context.globalAlpha = 0.7;
				graphicOptions.drawMapStructures(VvmNm, WNm + 288, mvw + 193, 0, 0, 0, 1 + (0.04 * VN));
				context.globalAlpha = 1;
				nnNVM = (nnNVM + var13) % 1000;
			}
		};
		var nMW = 0;
		var WNn;
		var vWm;
		var vMM;

		function wnW() {
			WNn = mn.WNv(541, 324, "img/scoreboardnew.png");
			vWm = mn.Nnv(123, 35, ["img/play-again-button-out.png", "img/play-again-button-in.png", "img/play-again-button-click.png"]);
			vMM = mn.Nnv(198, 35, ["img/back-main-page-button-out.png", "img/back-main-page-button-in.png", "img/back-main-page-button-click.png"]);
		};
		var vwm;
		var MnV = new nmn.wMVVN;
		var VwM = new Vvv.keyBoardConstructor;
		var nWM = 500;
		var NMw = 0;
		var vVNnn = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.VMN, 0.05);
		};
		var vvw = 500;
		var MwW = 0;
		var wNnmW = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.nVw, 0.05);
		};
		var WWW = 0;
		var vnN = 0;
		var Wmn = undefined;

		function wnm() {
			nV.VnW = VnW;
			nV.wWm = wWm;
			wm.wM.WMV = 0;
			wm.wM.id = 0;
			nM.MwmMN(0);
			nM.mMNMw();
			for (var mN = 0; mN < wm.wM.Nwv.length; mN++) {
				for (var NM = 0; NM < 4; NM++) wm.wM.Nwv[mN][NM] = 0;
			}
			var NWWNN = wvW[Math.min(wvW.length - 1, wm.wM.level)];
			for (var mN = 0; mN < NWWNN.length; mN++) {
				var NW = NWWNN[mN];
				if (NW.id !== 0) WWm.Nwv[mN].nWm(nvn[NW.id].nN.src, nvn[NW.id].nN.image);
				var mv = wm.wM.Nwv[mN];
				mv[1] = NW.nW;
				mv[2] = 0;
				mv[3] = NW.Nv;
				mv[0] = NW.id;
			}
			nMW = 5000;
			if (Mwv.VnN("admin") === null) {
				window["YMPB"]["refresh"]();
			}
			graphicOptions.VwVMv(wVVwv);
			vnN = vvw;
			WWW = vvw;
			Wmn = wNnmW;
			MwW = 1;
			WvV();
		};

		function WVw(VvW) {
			WMW.MVWVm.display = "none";
			vwm = VvW;
			MWwMm();
			vnN = nWM;
			WWW = nWM;
			Wmn = vVNnn;
			NMw = 1;
		};

		function WvV() {
			var vWv = 0;
			var WMn = 0;
			if (vnN > 0) {
				WMn = var2;
				var WnV = Wmn(1 - (vnN / WWW));
				if (WnV === 1) vnN = 0;
				if (MwW === 1) WnV = 1 - Math.abs(WnV);
				vWv *= WnV;
				WMn *= WnV;
			}
			WNn.Wv.x = (var3 - Math.floor(270 * parScaling)) - vWv;
			WNn.Wv.y = Math.max(0, (var4 - Math.floor(162 * parScaling)) + Math.floor(-135 * parScaling)) - WMn;
			vWm.Wv.x = ((var3 - Math.floor(61 * parScaling)) + Math.floor(-100 * parScaling)) - vWv;
			vWm.Wv.y = Math.max(0, (var4 - Math.floor(17 * parScaling)) + Math.floor(-35 * parScaling)) - WMn;
			vMM.Wv.x = ((var3 - Math.floor(99 * parScaling)) + Math.floor(100 * parScaling)) - vWv;
			vMM.Wv.y = vWm.Wv.y;
			var nVnvv = Math.min(parScaling, 1);
			document.getElementById("trevda").style.top = Math.floor((var4 - 125) + (140 * nVnvv)) + "px";
			document.getElementById("trevda").style.transform = ("scale(" + nVnvv) + ")";
			document.getElementById("trevda").style.left = Math.floor(var3 - (325 * nVnvv)) + "px";
		};

		function nv() {
			if (NMMNV() === 0) return;
			context.clearRect(0, 0, var1, var2);
			nM.nVmmN();
			if (vnN > 0) {
				wwN = Wmn(1 - (vnN / WWW));
				if (MwW === 1) wwN = 1 - Math.abs(wwN);
				wwN = 1 - wwN;
			}
			context.globalAlpha = 0.3 * wwN;
			context.fillStyle = "#000000";
			context.fillRect(0, 0, var1, var2);
			context.globalAlpha = 1;
			WNn.nv();
			vMM.nv();
			NWVMV();
			nM.mmnWM();
			vNm.wvWwn();
			if (nMW > 0) {
				nMW = Math.max(0, nMW - var13);
				graphicOptions.drawMapStructures(WmMNm[Math.floor(nMW / 1000)], (vWm.Wv.x / parScaling) + 61.5, (vWm.Wv.y / parScaling) + 17.75, 0, 0, 0, 1);
			} else vWm.nv();
		};

		function NMMNV() {
			if (NMw === 1) {
				WvV();
				if (vnN < 0) {
					NMw = 0;
					vWm.MVv(mn.Vmw);
					vMM.MVv(mn.Vmw);
					vwm.wnm();
					return 0;
				}
				vnN -= var13;
			} else if (MwW === 1) {
				WvV();
				if (vnN < 0) {
					MwW = 0;
					if (wm.wM.vnWMW !== 1) WMW.MVWVm.display = "inline-block";
					document.getElementById("bod").style.backgroundColor = "#46664d";
					mnmVM();
				}
				vnN -= var13;
			}
			return 1;
		};

		function nnV(vN) {
			nmn.WWn(vN, nmn.MvwwV);
			var Nmm = 0;
			if (vWm.MW() === 1) {
				Nmm = 1;
			}
			if (vMM.MW() === 1) {
				Nmm = 1;
			}
		};

		function mWv(vN) {
			nmn.WWn(vN, nmn.vvVwN);
			var Nmm = 0;
			if (vWm.MW() === 1) {
				Nmm = 1;
				if (nMW <= 0) {
					WMW.nNvVV();
					audioHandler.wmN(audioHandler.vm.play, 1, 0);
				}
				return;
			}
			if (vMM.MW() === 1) {
				Nmm = 1;
				if (((nV.state & nV.mMM.Mwmww) === 0) && ((nV.state & nV.mMM.drawPlayerStates) === 0)) {
					WVw(WMW);
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
					return;
				}
			}
		};

		function vVn(vN) {
			nmn.WWn(vN, nmn.mnwNM);
			var Nmm = 0;
			if (vWm.MW() === 1) {
				Nmm = 1;
			}
			if (vMM.MW() === 1) {
				Nmm = 1;
			}
		};

		function Wvv(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				nnV(MnV);
			}
		};

		function MmV(vN) {
			mWv(MnV);
		};

		function wNv(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				mWv(MnV);
			}
		};

		function mvV(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				vVn(MnV);
			}
		};

		function mnmVM() {
			if (typeOfDevice === 0) window.addEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.addEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.addEventListener('mousemove', vVn, false);
			if (typeOfDevice === 1) window.addEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.addEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.addEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.addEventListener('touchmove', mvV, false);
		};

		function MWwMm() {
			if (typeOfDevice === 0) window.removeEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.removeEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.removeEventListener('mousemove', vVn, false);
			if (typeOfDevice === 1) window.removeEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.removeEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchmove', mvV, false);
		};
		return {
			WVw: WVw,
			wnW: wnW,
			wnm: wnm,
			update: WvV,
			nv: nv
		};
	})();
	var WMvvN = (function() {
		function VnW(NVM) {};

		function nMvNv() {
			WVw(WWm);
		};

		function wWm() {
			nMvNv();
		};
		var wwN = 0;
		var nNWMm = -1;
		var MVmNv = null;
		var vMNwn = {
			image: null
		};
		var Vmmnm = -1;
		var wMmMw = {
			image: null
		};
		var mWNwM = null;
		var NWVnN = -1;
		var MnWWv = null;
		var mNvMw = {
			image: null
		};

		function NWVMV() {
			var nI = WNn.Wv.x;
			var vV = WNn.Wv.y;
			var WNm = nI / parScaling;
			var mvw = vV / parScaling;
			if ((mWNwM === null) || (Vmmnm !== wm.MNW)) {
				Vmmnm = wm.MNW;
				mWNwM = mn.vmv("#" + Math.max(Vmmnm, 1), "'Comic Han Sans MS', sans-serif", "#FFFFFF", 60, 140, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				wMmMw.image = mWNwM;
				wMmMw.image.v = 1;
			}
			graphicOptions.drawMapStructures(wMmMw, WNm + 207, mvw + 93, 0, 0, 0, 1);
			if ((MVmNv === null) || (nNWMm !== wm.wM.nNnWw)) {
				nNWMm = wm.wM.nNnWw;
				var mMVNV = Math.floor((window.Date.now() - wm.wM.nNnWw) / 1000);
				var mnvWv = Math.floor(mMVNV / 60);
				var vVNvm = mMVNV % 60;
				MVmNv = mn.vmv((((((mnvWv < 10) ? "0" : "") + mnvWv) + ":") + ((vVNvm < 10) ? "0" : "")) + vVNvm, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				vMNwn.image = MVmNv;
				vMNwn.image.v = 1;
			}
			graphicOptions.drawMapStructures(vMNwn, WNm + 110, mvw + 100, 0, 0, 0, 1);
			if ((MnWWv === null) || (NWVnN !== wm.wM.NmwWN)) {
				NWVnN = wm.wM.NmwWN;
				MnWWv = mn.vmv(NWVnN + "", "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				mNvMw.image = MnWWv;
				mNvMw.image.v = 1;
			}
			graphicOptions.drawMapStructures(mNvMw, WNm + 309, mvw + 100, 0, 0, 0, 1);
		};
		var nMW = 0;
		var WNn;
		var vWm;
		var vMM;

		function wnW() {
			WNn = mn.WNv(414, 207, "img/scoreboard-br.png");
			vWm = mn.Nnv(123, 35, ["img/play-again-button-out.png", "img/play-again-button-in.png", "img/play-again-button-click.png"]);
			vMM = mn.Nnv(198, 35, ["img/back-main-page-button-out.png", "img/back-main-page-button-in.png", "img/back-main-page-button-click.png"]);
		};
		var vwm;
		var MnV = new nmn.wMVVN;
		var VwM = new Vvv.keyBoardConstructor;
		var nWM = 500;
		var NMw = 0;
		var vVNnn = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.VMN, 0.05);
		};
		var vvw = 500;
		var MwW = 0;
		var wNnmW = function(Vnw) {
			return vnw.mMv.vwMMw(Vnw, vnw.mMv.nVw, 0.05);
		};
		var WWW = 0;
		var vnN = 0;
		var Wmn = undefined;

		function wnm() {
			nV.VnW = VnW;
			nV.wWm = wWm;
			wm.wM.WMV = 0;
			wm.wM.id = 0;
			nM.MwmMN(0);
			nM.mMNMw();
			nMW = 5000;
			window["YMPB"]["refresh"]();
			graphicOptions.VwVMv(WMvvN);
			vnN = vvw;
			WWW = vvw;
			Wmn = wNnmW;
			MwW = 1;
			WvV();
		};

		function WVw(VvW) {
			WMW.MVWVm.display = "none";
			vwm = VvW;
			MWwMm();
			vnN = nWM;
			WWW = nWM;
			Wmn = vVNnn;
			NMw = 1;
		};

		function WvV() {
			var vWv = 0;
			var WMn = 0;
			if (vnN > 0) {
				WMn = var2;
				var WnV = Wmn(1 - (vnN / WWW));
				if (WnV === 1) vnN = 0;
				if (MwW === 1) WnV = 1 - Math.abs(WnV);
				vWv *= WnV;
				WMn *= WnV;
			}
			WNn.Wv.x = (var3 - Math.floor(207 * parScaling)) - vWv;
			WNn.Wv.y = Math.max(0, (var4 - Math.floor(103 * parScaling)) + Math.floor(-135 * parScaling)) - WMn;
			vWm.Wv.x = ((var3 - Math.floor(61 * parScaling)) + Math.floor(-100 * parScaling)) - vWv;
			vWm.Wv.y = Math.max(0, (var4 - Math.floor(17 * parScaling)) + Math.floor(-70 * parScaling)) - WMn;
			vMM.Wv.x = ((var3 - Math.floor(99 * parScaling)) + Math.floor(70 * parScaling)) - vWv;
			vMM.Wv.y = vWm.Wv.y;
			var nVnvv = parScaling;
			document.getElementById("trevda").style.top = Math.floor((var4 - 125) + (130 * nVnvv)) + "px";
			document.getElementById("trevda").style.transform = ("scale(" + nVnvv) + ")";
		};

		function nv() {
			if (NMMNV() === 0) return;
			context.clearRect(0, 0, var1, var2);
			nM.nVmmN();
			if (vnN > 0) {
				wwN = Wmn(1 - (vnN / WWW));
				if (MwW === 1) wwN = 1 - Math.abs(wwN);
				wwN = 1 - wwN;
			}
			context.globalAlpha = 0.3 * wwN;
			context.fillStyle = "#000000";
			context.fillRect(0, 0, var1, var2);
			context.globalAlpha = 1;
			WNn.nv();
			vMM.nv();
			NWVMV();
			nM.mmnWM();
			vNm.wvWwn();
			if (nMW > 0) {
				nMW = Math.max(0, nMW - var13);
				graphicOptions.drawMapStructures(WmMNm[Math.floor(nMW / 1000)], (vWm.Wv.x / parScaling) + 61.5, (vWm.Wv.y / parScaling) + 17.75, 0, 0, 0, 1);
			} else vWm.nv();
		};

		function NMMNV() {
			if (NMw === 1) {
				WvV();
				if (vnN < 0) {
					NMw = 0;
					vWm.MVv(mn.Vmw);
					vMM.MVv(mn.Vmw);
					vwm.wnm();
					return 0;
				}
				vnN -= var13;
			} else if (MwW === 1) {
				WvV();
				if (vnN < 0) {
					MwW = 0;
					WMW.MVWVm.display = "inline-block";
					document.getElementById("bod").style.backgroundColor = "#46664d";
					mnmVM();
				}
				vnN -= var13;
			}
			return 1;
		};

		function nnV(vN) {
			nmn.WWn(vN, nmn.MvwwV);
			var Nmm = 0;
			if (vWm.MW() === 1) {
				Nmm = 1;
			}
			if (vMM.MW() === 1) {
				Nmm = 1;
			}
		};

		function mWv(vN) {
			nmn.WWn(vN, nmn.vvVwN);
			var Nmm = 0;
			if (vWm.MW() === 1) {
				Nmm = 1;
				if (nMW <= 0) {
					WMW.nNvVV();
					audioHandler.wmN(audioHandler.vm.play, 1, 0);
				}
				return;
			}
			if (vMM.MW() === 1) {
				Nmm = 1;
				if (((nV.state & nV.mMM.Mwmww) === 0) && ((nV.state & nV.mMM.drawPlayerStates) === 0)) {
					WVw(WMW);
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
					return;
				}
			}
		};

		function vVn(vN) {
			nmn.WWn(vN, nmn.mnwNM);
			var Nmm = 0;
			if (vWm.MW() === 1) {
				Nmm = 1;
			}
			if (vMM.MW() === 1) {
				Nmm = 1;
			}
		};

		function Wvv(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				nnV(MnV);
			}
		};

		function MmV(vN) {
			mWv(MnV);
		};

		function wNv(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				mWv(MnV);
			}
		};

		function mvV(vN) {
			if (vN.touches.length > 0) {
				nmn.wVW(MnV, vN, vN.touches[0]);
				vVn(MnV);
			}
		};

		function mnmVM() {
			if (typeOfDevice === 0) window.addEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.addEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.addEventListener('mousemove', vVn, false);
			if (typeOfDevice === 1) window.addEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.addEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.addEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.addEventListener('touchmove', mvV, false);
		};

		function MWwMm() {
			if (typeOfDevice === 0) window.removeEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.removeEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.removeEventListener('mousemove', vVn, false);
			if (typeOfDevice === 1) window.removeEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.removeEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchmove', mvV, false);
		};
		return {
			WVw: WVw,
			wnW: wnW,
			wnm: wnm,
			update: WvV,
			nv: nv
		};
	})();
	var MWwnm = (function() {
		var mvm = 0;
		var MWN = 0;
		var vNM = 0;
		var vvmvM = 0;
		var MMvWN = graphicOptions.createMenuImg("img/inv-empty.png");
		var mwNMw = [MMvWN, MMvWN, MMvWN];
		var mNM = [];
		var mwv = 0;

		function WWMvV() {
			NWM.show();
			nwmNM.show();
			wm.wM.id = 1;
			wm.WnmVM = 2;
			wm.wNN = 0;
			wm.wM.nMV = 0;
			wm.wM.WvN[mN] = 0;
			wm.wM.WMV = 1;
			wm.wM.mNvWw = 0;
			wm.wM.mmwVv = [
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1],
				[-1, -1]
			];
			wm.wMw.WVn.value = wm.wMw.WVn.maxValueOfParam;
			wm.wMw.WVn.wmw = -1;
			wm.WMNNN([0, document.getElementById("nicknameInput").value]);
			wm.WvvVv(0, 0);
			nM.reset(undefined, 0, 0.07);
			nM.scale = 0;
			nmm.vnNMN();
			wm.wM.nWnmw = 0;
			wm.wM.wmm = 0;
			WWM = 0;
			NNmwM(1, mNn, 550, 550, 21 << 8, 0);
		};

		function VWwww(WNvVM) {
			NNN();
			mvm = 1;
			if (WNvVM === 1) NwN = 1;
			else if (WNvVM === 2) NnNMM = 1;
		};

		function NNN() {
			mvm = 0;
			mNV.MVv(mn.Vmw);
			MWN = 0;
			vNM = 0;
			NwN = 0;
			NnNMM = 0;
			mWMNw = 0;
			wm.NVvVm();
		};
		var vwMNw = 0;
		var mNV = mn.Nnv(43, 43, ["img/close-box-out.png", "img/close-box-in.png", "img/close-box-click.png"]);
		var NVvmV = [graphicOptions.createMenuImg("img/high-particules-out.png"), graphicOptions.createMenuImg("img/high-particules-in.png"), graphicOptions.createMenuImg("img/high-particules-click.png")];
		var NWWww = mn.Nnv(54, 42, null, NVvmV);
		var nWMMw = [graphicOptions.createMenuImg("img/low-particules-out.png"), graphicOptions.createMenuImg("img/low-particules-in.png"), graphicOptions.createMenuImg("img/low-particules-click.png")];
		var mnMwN = mn.Nnv(54, 42, null, nWMMw);
		var nvWNv = [graphicOptions.createMenuImg("img/no-particules-out.png"), graphicOptions.createMenuImg("img/no-particules-in.png"), graphicOptions.createMenuImg("img/no-particules-click.png")];
		var nwvWN = mn.Nnv(54, 42, null, nvWNv);
		var VVwNW = [graphicOptions.createMenuImg("img/high-resolution-out.png"), graphicOptions.createMenuImg("img/high-resolution-in.png"), graphicOptions.createMenuImg("img/high-resolution-click.png")];
		var mWVmw = mn.Nnv(54, 42, null, VVwNW);
		var VwWnV = [graphicOptions.createMenuImg("img/medium-resolution-out.png"), graphicOptions.createMenuImg("img/medium-resolution-in.png"), graphicOptions.createMenuImg("img/medium-resolution-click.png")];
		var NVnmn = mn.Nnv(54, 42, null, VwWnV);
		var nwNwN = [graphicOptions.createMenuImg("img/low-resolution-out.png"), graphicOptions.createMenuImg("img/low-resolution-in.png"), graphicOptions.createMenuImg("img/low-resolution-click.png")];
		var vnnvM = mn.Nnv(54, 42, null, nwNwN);
		var VvnwV = [graphicOptions.createMenuImg("img/azerty-button-out.png"), graphicOptions.createMenuImg("img/azerty-button-in.png"), graphicOptions.createMenuImg("img/azerty-button-click.png")];
		var mnnvm = mn.Nnv(81, 33, null, VvnwV);
		var mmVVn = [graphicOptions.createMenuImg("img/qwerty-button-out.png"), graphicOptions.createMenuImg("img/qwerty-button-in.png"), graphicOptions.createMenuImg("img/qwerty-button-click.png")];
		var wvvmM = mn.Nnv(87, 33, null, mmVVn);
		var Mmmvn = [graphicOptions.createMenuImg("img/sound-on-out.png"), graphicOptions.createMenuImg("img/sound-on-in.png"), graphicOptions.createMenuImg("img/sound-on-click.png")];
		var wmVwV = [graphicOptions.createMenuImg("img/sound-off-out.png"), graphicOptions.createMenuImg("img/sound-off-in.png"), graphicOptions.createMenuImg("img/sound-off-click.png")];
		var MWVvn = mn.Nnv(51, 36, null, Mmmvn);
		var MMmwm = mn.Nnv(51, 36, null, wmVwV);
		var nnNNM = mn.Nnv(51, 36, null, Mmmvn);
		var nWwMv = mn.Nnv(51, 36, null, wmVwV);
		var wVn = 0;
		var WwvVV = 0;
		var vwnmM = 0;
		var vNnNv = 0;
		var WMMmv = 0;
		var WVNmm = 0;
		var NMVVv = 0;
		var WNnnw = 0;
		var WWM = 0;

		function NNmwM(Nvn, vW, nI, vV, Wvn, NVM) {
			var WmObject = nmm.get(Nvn, WWM, WWM, vW);
			VMwvV(WmObject, Nvn, WWM, WWM, vW, nI, vV, nI, vV, Wvn, 0, NVM);
			WWM++;
		};

		function NVmMm(MvNnW) {
			WWMvV();
			MvNnW = MvNnW.split("!b=");
			MvNnW.shift();
			for (var mN = 0; mN < MvNnW.length; mN++) {
				var Vv = MvNnW[mN].split(":");
				if (Vv.length > 4) NmMnw(Vv[0], Vv[1], Vv[3], Vv[2], Vv[4]);
				else NmMnw(Vv[0], 0, Vv[2], Vv[1], Vv[3]);
			}
		};

		function NmMnw(mVMvN, wVm, mN, NM, mm) {
			mVMvN = window.Number(mVMvN) >>> 0;
			wVm = window.Number(wVm) >>> 0;
			mN = window.Number(mN) >>> 0;
			NM = window.Number(NM) >>> 0;
			mm = window.Number(mm) >>> 0;
			if (((mm > 3) || (mN >= mMN.height)) || (NM >= mMN.height)) return;
			var Vv = nvn[mVMvN];
			if (((Vv === undefined) || (Vv.wVm === undefined)) || ((Vv.wVm > 0) && (Vv.Vv.length <= wVm))) return;
			var mm = (Vv.VWm === 1) ? 0 : mm;
			var nI = (Vv.vNv[mm] + 50) + (100 * NM);
			var vV = (Vv.vmn[mm] + 50) + (100 * mN);
			var vW = 0;
			switch ((Vv.wVm === 0) ? Vv.VMw : Vv.wVm[wVm].VMw) {
				case 0:
					vW = nVVMM;
					break;
				case 1:
					vW = wMwnN;
					break;
				case 2:
					vW = WvmMM;
					break;
				default:
					vW = mmMWn;
					break;
			}
			vnWmM(1, vW, nI, vV, mm, 1 + ((Vv.wVm === 0) ? 0 : (wVm << 5)), Vv.id);
		};

		function vnWmM(Nvn, vW, nI, vV, mm, NVM, wVm) {
			var WmObject = nmm.get(Nvn, WWM, WWM, vW);
			VMwvV(WmObject, Nvn, WWM, WWM, vW, nI, vV, nI, vV, (wVm << 7) + (mm << 5), 0, NVM);
			var WvV = mvn[vW].update;
			if (WvV !== undefined) WvV(WmObject, nI, vV);
			WWM++;
		};

		function WnNmm(vW) {
			var Wmw = "";
			var WWw = nmm.wNn[vW];
			var wmM = nmm.border[vW];
			var Mwn = wmM.border;
			for (mN = 0; mN < Mwn; mN++) {
				var VV = WWw[wmM.nNW[mN]];
				var NW = nvn[VV.Wvn >> 7];
				Wmw += ("!b=" + NW.id) + ":";
				if (NW.wVm !== 0) Wmw += VV.wVm + ":";
				Wmw += (((VV.NM + ":") + VV.mN) + ":") + ((VV.Wvn >> 5) & 3);
			}
			return Wmw;
		};

		function mmWvw(vW, nI, vV) {
			var WWw = nmm.wNn[vW];
			var wmM = nmm.border[vW];
			var Mwn = wmM.border;
			for (mN = 0; mN < Mwn; mN++) {
				var Vv = WWw[wmM.nNW[mN]];
				if ((((Vv.x >= nI) && (Vv.x <= (nI + 100))) && (Vv.y >= vV)) && (Vv.y <= (vV + 100))) {
					nmm.remove(Vv.Nvn, Vv.id, Vv.Mvv, vW, Vv.Wvn);
					return;
				}
			}
		};

		function NnWMn() {
			if ((nmn.state === nmn.MvwwV) && (wm.wM.click === 0)) {
				if (wm.wM.WMV === 1) {
					wm.wM.click = -1;
					if (wm.wM.mvMNM === 1) {
						if ((((wm.wM.vMw !== -1) && (wm.wM.MvM !== -1)) && (wm.wM.vMw !== mMN.width)) && (wm.wM.MvM !== mMN.height)) NmMnw(wm.wM.wmm, wm.wM.wMWVm, wm.wM.MvM, wm.wM.vMw, wm.wM.nWnmw);
					} else {
						var nI = 100 * wm.wM.vMw;
						var vV = 100 * wm.wM.MvM;
						mmWvw(nVVMM, nI, vV);
						mmWvw(wMwnN, nI, vV);
						mmWvw(WvmMM, nI, vV);
						mmWvw(mmMWn, nI, vV);
					}
				}
			} else if (nmn.state === nmn.vvVwN) {
				if (wm.wM.WMV === 1) {
					vwMNw = 0;
					wm.wM.click = 0;
				}
			}
		};
		var MnNMW = Math.sqrt(2) / 2;

		function WNNWm() {
			var Mm = 0;
			if (Vvv.NnNmn() === 1) Mm |= 1;
			if (Vvv.VwMvW() === 1) Mm |= 2;
			if (Vvv.NMnww() === 1) Mm |= 4;
			if (Vvv.VnWWN() === 1) Mm |= 8;
			if (Mm > 0) {
				var Nvn = wm.nNv[1].nnnNM;
				if (Nvn === -1) return;
				var wM = nmm.wNn[mNn][Nvn];
				WMvVw = (((Mm & 3) && (Mm & 12)) ? MnNMW : 1) * ((Vvv.NWNVn() === 0) ? (var13 * 1.5) : (var13 * 11));
				if (Mm & 1) wM.rx = wM.x - WMvVw;
				else if (Mm & 2) wM.rx = wM.x + WMvVw;
				if (Mm & 8) wM.ry = wM.y - WMvVw;
				else if (Mm & 4) wM.ry = wM.y + WMvVw;
				wM.rx = Math.max(0, Math.min(wM.rx, mMN.width * 100));
				wM.ry = Math.max(0, Math.min(wM.ry, mMN.height * 100));
				wM.Vnn = wM.rx;
				wM.nvM = wM.ry;
			}
		};

		function VnvMv() {
			var nI = MvwWW.Wv.x - (5 * parScaling);
			var vV = MvwWW.Wv.y + (74 * parScaling);
			var VWw = 45 * parScaling;
			for (var mN = 0; mN < mwv; mN++) {
				var Mv = mNM[mN];
				Mv.Wv.x = nI + ((mN % 8) * VWw);
				Mv.Wv.y = vV + (Math.floor(mN / 8) * VWw);
				Mv.nv();
			}
		};

		function NWWnw() {
			if (Wvm <= 0) Wvm = 3000;
			else if (Wvm <= 500) Wvm = 3000 - Wvm;
			else if (Wvm <= 2500) Wvm = 2500;
			var Wmw = "";
			Wmw += WnNmm(nVVMM);
			Wmw += WnNmm(wMwnN);
			Wmw += WnNmm(WvmMM);
			Wmw += WnNmm(mmMWn);
			var Vnm = document.createElement('textarea');
			Vnm["value"] = Wmw;
			document["body"]["appendChild"](Vnm);
			Vnm["select"]();
			document["execCommand"]('copy');
			document["body"]["removeChild"](Vnm);
		};

		function mvWmv() {
			if (Wvm > 0) {
				Wvm -= var13;
				if (Wvm > 2500) context.globalAlpha = vnw.mMv.nwW((3000 - Wvm) / 500);
				else if (Wvm < 500) context.globalAlpha = vnw.mMv.nwW(Wvm / 500);
				context.drawImage(nvwMw, wMnmw.Wv.x - (85 * parScaling), wMnmw.Wv.y - (40 * parScaling), nvwMw.wMv * parScaling, nvwMw.nNn * parScaling);
				context.globalAlpha = 1;
			}
			if (wmNMN[wm.wM.nwm] === undefined) wmNMN[wm.wM.nwm] = [];
			//В ифе логика координат в MAP EDITOR Изначально: Скобки круглые, шрифт Viga
			if (wmNMN[wm.wM.nwm][wm.wM.vNW] === undefined) {
				wmNMN[wm.wM.nwm][wm.wM.vNW] = mn.vmv(((("[" + wm.wM.nwm) + ",") + wm.wM.vNW) + "]", "'Comic Han Sans MS', sans-serif", "#FFFFFF", 52, 455, "#000000", 22, 22, undefined, undefined, 0.4, undefined, "#000000", 15.6);
			}
			var image = wmNMN[wm.wM.nwm][wm.wM.vNW];
			context.drawImage(image, 5 * parScaling, NWM.Wv.y - (42 * parScaling), image.wMv * parScaling, image.nNn * parScaling);
		};
		var nvwMw = null;
		var Wvm = 0;
		var wmNMN = [];
		var WvNnN = 0;
		var wNMwm;
		var vnvNv;
		var VMM;
		var WVm;
		var Mwm;
		var nMv;
		var nVmMw;
		var serverList;
		var WNmWN;
		var VvMNW;
		var MvwWW;
		var NWM;
		var nwmNM;
		var MWmmN;
		var vNvMV;
		var wMnmw;
		var MnNmw;

		function wnW() {
			nvwMw = mn.vmv("Copied to clipboard", "'Comic Han Sans MS', sans-serif", "#FFFFFF", 40, 350, "#000000", 18, 18, undefined, undefined, 0.6);
			for (mN = 0; mN < 64; mN++) mNM.push(mn.Nnv(40, 40, null, mwNMw));
			wNMwm = mn.WNv(269, 267, "img/settings-box.png");
			vnvNv = mn.WNv(412, 412, "img/borderBigMinimap2.png");
			VMM = mn.WNv(128, 128, "img/minimap.png");
			WVm = mn.Nnv(40, 40, ["img/full-screen-out.png", "img/full-screen-in.png", "img/full-screen-click.png"]);
			Mwm = mn.Nnv(40, 40, ["img/settings-out.png", "img/settings-in.png", "img/settings-click.png"]);
			nMv = mn.Nnv(40, 40, ["img/minimap-button-out.png", "img/minimap-button-in.png", "img/minimap-button-click.png"]);
			nVmMw = mn.Nnv(67, 67, ["img/logic-button-out.png", "img/logic-button-in.png", "img/logic-button-click.png"]);
			serverList = mn.Nnv(67, 67, ["img/map-explosive-button-out.png", "img/map-explosive-button-in.png", "img/map-explosive-button-click.png"]);
			WNmWN = mn.Nnv(67, 67, ["img/map-road-button-out.png", "img/map-road-button-in.png", "img/map-road-button-click.png"]);
			VvMNW = mn.Nnv(67, 67, ["img/map-furniture-button-out.png", "img/map-furniture-button-in.png", "img/map-furniture-button-click.png"]);
			MvwWW = mn.Nnv(67, 67, ["img/map-building-button-out.png", "img/map-building-button-in.png", "img/map-building-button-click.png"]);
			NWM = mn.Nnv(46.5, 46.5, ["img/zoom-button-out.png", "img/zoom-button-in.png", "img/zoom-button-click.png"]);
			nwmNM = mn.Nnv(46.5, 46.5, ["img/unzoom-button-out.png", "img/unzoom-button-in.png", "img/unzoom-button-click.png"]);
			MWmmN = mn.Nnv(40, 40, ["img/map-delete-button-out.png", "img/map-delete-button-in.png", "img/map-delete-button-click.png"]);
			vNvMV = mn.Nnv(46.5, 46.5, ["img/import-button-out.png", "img/import-button-in.png", "img/import-button-click.png"]);
			wMnmw = mn.Nnv(46.5, 46.5, ["img/copy-paste-button-out.png", "img/copy-paste-button-in.png", "img/copy-paste-button-click.png"]);
			MnNmw = mn.Nnv(60, 60, ["img/home-button-out.png", "img/home-button-in.png", "img/home-button-click.png"]);
		};
		var vwm;
		var MnV = new nmn.wMVVN;
		var VwM = new Vvv.keyBoardConstructor;
		var nWM = 1000;
		var NMw = 0;
		var vVNnn = vnw.mMv.VMN;
		var vvw = 1000;
		var MwW = 0;
		var wNnmW = vnw.mMv.nVw;
		var WWW = 0;
		var vnN = 0;
		var Wmn = undefined;

		function wnm() {
			document.getElementById("bod").style.backgroundColor = "#46664D";
			vwMNw = 0;
			vNm.vvMvN();
			if (WvNnN === 0) {
				WvNnN = 1;
				var vMMVW = nvn[MM.wmvWW].wVm;
				for (var mN = 0; mN < vMMVW.length; mN++) {
					var NW = vMMVW[mN];
					NW.nN = {
						src: [NW.Vv.src, "img/useless.png", "img/useless.png"],
						image: [{
							v: 0
						}, {
							v: 0
						}, {
							v: 0
						}]
					};
				}
				var vMMVW = nvn[MM.wVNmN].wVm;
				for (var mN = 0; mN < vMMVW.length; mN++) {
					var NW = vMMVW[mN];
					NW.nN = {
						src: [NW.Vv.src, "img/useless.png", "img/useless.png"],
						image: [{
							v: 0
						}, {
							v: 0
						}, {
							v: 0
						}]
					};
				}
			}
			WWMvV();
			graphicOptions.VwVMv(MWwnm);
			vnN = vvw;
			WWW = vvw;
			Wmn = wNnmW;
			MwW = 1;
			WvV();
		};

		function WVw(VvW) {
			NNN();
			vNm.nMvNv();
			vwm = VvW;
			MWwMm();
			vnN = nWM;
			WWW = nWM;
			Wmn = vVNnn;
			NMw = 1;
		};

		function WvV() {
			var vWv = 0;
			var WMn = 0;
			if (vnN > 0) {
				WMn = var2;
				var WnV = Wmn(1 - (vnN / WWW));
				if (WnV === 1) vnN = 0;
				if (MwW === 1) WnV = 1 - Math.abs(WnV);
				vWv *= WnV;
				WMn *= WnV;
			}
			wNMwm.Wv.x = (var3 - Math.floor(134 * parScaling)) + vWv;
			wNMwm.Wv.y = Math.max(0, var4 - Math.floor(133 * parScaling)) + WMn;
			vnvNv.Wv.x = (var3 - Math.floor(206 * parScaling)) + vWv;
			vnvNv.Wv.y = Math.max(0, var4 - Math.floor(206 * parScaling)) + WMn;
			VMM.Wv.x = Math.floor(5 * parScaling) - vWv;
			VMM.Wv.y = Math.floor(5 * parScaling) - WMn;
			WVm.Wv.x = VMM.Wv.x + Math.floor(126 * parScaling);
			WVm.Wv.y = VMM.Wv.y;
			Mwm.Wv.x = WVm.Wv.x;
			Mwm.Wv.y = WVm.Wv.y + Math.floor(44.5 * parScaling);
			nMv.Wv.x = Mwm.Wv.x;
			nMv.Wv.y = Mwm.Wv.y + Math.floor(44.5 * parScaling);
			nVmMw.Wv.x = ((var1 - Math.floor(67 * parScaling)) + Math.floor(-5 * parScaling)) - vWv;
			nVmMw.Wv.y = Math.floor(5 * parScaling) - WMn;
			serverList.Wv.x = nVmMw.Wv.x + Math.floor(-70 * parScaling);
			serverList.Wv.y = Math.floor(5 * parScaling) - WMn;
			WNmWN.Wv.x = serverList.Wv.x + Math.floor(-70 * parScaling);
			WNmWN.Wv.y = Math.floor(5 * parScaling) - WMn;
			VvMNW.Wv.x = WNmWN.Wv.x + Math.floor(-70 * parScaling);
			VvMNW.Wv.y = Math.floor(5 * parScaling) - WMn;
			MvwWW.Wv.x = VvMNW.Wv.x + Math.floor(-70 * parScaling);
			MvwWW.Wv.y = Math.floor(5 * parScaling) - WMn;
			NWM.Wv.x = Math.floor(5 * parScaling);
			NWM.Wv.y = (var2 - Math.floor(46.5 * parScaling)) + Math.floor(-5 * parScaling);
			nwmNM.Wv.x = NWM.Wv.x + Math.floor(50 * parScaling);
			nwmNM.Wv.y = (var2 - Math.floor(46.5 * parScaling)) + Math.floor(-5 * parScaling);
			MWmmN.Wv.x = VMM.Wv.x + Math.floor(89 * parScaling);
			MWmmN.Wv.y = VMM.Wv.y + Math.floor(126 * parScaling);
			vNvMV.Wv.x = (var1 - Math.floor(46.5 * parScaling)) + Math.floor(-5 * parScaling);
			vNvMV.Wv.y = (var2 - Math.floor(46.5 * parScaling)) + Math.floor(-5 * parScaling);
			wMnmw.Wv.x = vNvMV.Wv.x + Math.floor(-50 * parScaling);
			wMnmw.Wv.y = (var2 - Math.floor(46.5 * parScaling)) + Math.floor(-5 * parScaling);
			MnNmw.Wv.x = VMM.Wv.x;
			MnNmw.Wv.y = VMM.Wv.y + Math.floor(126 * parScaling);
		};

		function nv() {
			if (NMMNV() === 0) return;
			NnWMn();
			WNNWm();
			context.clearRect(0, 0, var1, var2);
			wm.wnvVN();
			nM.nVmmN();
			nM.mVN(VMM.Wv.x, VMM.Wv.y);
			VMM.nv();
			WVm.nv();
			Mwm.nv();
			nMv.nv();
			nVmMw.nv();
			serverList.nv();
			WNmWN.nv();
			VvMNW.nv();
			MvwWW.nv();
			NWM.nv();
			nwmNM.nv();
			MWmmN.nv();
			vNvMV.nv();
			wMnmw.nv();
			MnNmw.nv();
			mvWmv();
			VnvMv();
			if (mvm === 1) {
				if (MWN === 1) nM.nWnVM(vnvNv, mNV);
				else if (vNM === 1) nM.WMmMv(wNMwm, mWVmw, NVnmn, vnnvM, mnnvm, wvvmM, MWVvn, MMmwm, nnNNM, nWwMv, mNV, NWWww, mnMwN, nwvWN);
			} else if (typeOfDevice === 1) {
				if ((((Vvv.NnNmn() + Vvv.VwMvW()) + Vvv.VnWWN()) + Vvv.NMnww()) >= 1) {
					context.globalAlpha = 0.3;
					var nI = var9 - (var11 * 1.5);
					var vV = var10 + (var11 / 4);
					graphicOptions.MNmwv(context, nI, vV, 60);
					graphicOptions.MvWNN(context, "#000000");
					graphicOptions.MNmwv(context, nI + ((Math.cos(WwvVV) * vwnmM) * parScaling), vV + ((Math.sin(WwvVV) * vwnmM) * parScaling), 30);
					graphicOptions.MvWNN(context, "#FFFFFF");
					context.globalAlpha = 1;
				}
				if (WMMmv === 1) {
					context.globalAlpha = 0.3;
					var nI = var9 + (var11 * 1.5);
					var vV = var10 + (var11 / 4);
					graphicOptions.MNmwv(context, nI, vV, 60);
					graphicOptions.MvWNN(context, "#000000");
					graphicOptions.MNmwv(context, nI + ((Math.cos(nmn.angle) * 25) * parScaling), vV + ((Math.sin(nmn.angle) * 25) * parScaling), 30);
					graphicOptions.MvWNN(context, "#FFFFFF");
					context.globalAlpha = 1;
				}
			}
			vNm.wvWwn();
		};

		function NMMNV() {
			if (NMw === 1) {
				WvV();
				if (vnN < 0) {
					NMw = 0;
					WVm.MVv(mn.Vmw);
					Mwm.MVv(mn.Vmw);
					nMv.MVv(mn.Vmw);
					nVmMw.MVv(mn.Vmw);
					serverList.MVv(mn.Vmw);
					WNmWN.MVv(mn.Vmw);
					VvMNW.MVv(mn.Vmw);
					MvwWW.MVv(mn.Vmw);
					NWM.MVv(mn.Vmw);
					nwmNM.MVv(mn.Vmw);
					MWmmN.MVv(mn.Vmw);
					vNvMV.MVv(mn.Vmw);
					wMnmw.MVv(mn.Vmw);
					MnNmw.MVv(mn.Vmw);
					vwm.wnm();
					return 0;
				}
				vnN -= var13;
			} else if (MwW === 1) {
				WvV();
				if (vnN < 0) {
					MwW = 0;
					mnmVM();
				}
				vnN -= var13;
			}
			return 1;
		};

		function nnV(vN) {
			nmn.WWn(vN, nmn.MvwwV);
			var Nmm = 0;
			if (WVm.MW() === 1) {
				Nmm = 1;
			}
			if (Mwm.MW() === 1) {
				Nmm = 1;
			}
			if (nMv.MW() === 1) {
				Nmm = 1;
			}
			if (nVmMw.MW() === 1) {
				Nmm = 1;
			}
			if (serverList.MW() === 1) {
				Nmm = 1;
			}
			if (WNmWN.MW() === 1) {
				Nmm = 1;
			}
			if (VvMNW.MW() === 1) {
				Nmm = 1;
			}
			if (MvwWW.MW() === 1) {
				Nmm = 1;
			}
			if (NWM.MW() === 1) {
				Nmm = 1;
			}
			if (nwmNM.MW() === 1) {
				Nmm = 1;
			}
			if (MWmmN.MW() === 1) {
				Nmm = 1;
			}
			if (vNvMV.MW() === 1) {
				Nmm = 1;
			}
			if (wMnmw.MW() === 1) {
				Nmm = 1;
			}
			if (MnNmw.MW() === 1) {
				Nmm = 1;
			}
			if (mvm === 1) {
				mNV.MW();
				if (vNM === 1) {
					mnnvm.MW();
					wvvmM.MW();
					mWVmw.MW();
					NVnmn.MW();
					vnnvM.MW();
					MWVvn.MW();
					MMmwm.MW();
					nnNNM.MW();
					nWwMv.MW();
					mnMwN.MW();
					NWWww.MW();
					nwvWN.MW();
				}
			} else {
				for (var mN = 0; mN < mwv; mN++) {
					if (mNM[mN].MW() === 1) Nmm = 1;
				}
			}
			if ((Nmm === 0) && (mvm === 0)) {
				vwMNw = 1;
				if (wm.wM.click === -1) wm.wM.click = 0;
			} else {
				if (wm.wM.click === 0) wm.wM.click = -1;
			}
		};

		function mWv(vN) {
			nmn.WWn(vN, nmn.vvVwN);
			var Nmm = 0;
			if (WVm.MW() === 1) {
				Nmm = 1;
				if (vvmvM === 0) {
					vvmvM = 1;
					graphicOptions.VvWmV();
					if (wm.NWW === 0) canvasM.style.backgroundColor = "#3D5942";
					else canvasM.style.backgroundColor = "#0B2129";
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
				} else {
					vvmvM = 0;
					graphicOptions.MVnnM();
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
				}
			}
			if (Mwm.MW() === 1) {
				Nmm = 1;
				if (vNM === 0) {
					NNN();
					mvm = 1;
					vNM = 1;
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				} else {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				}
			}
			if (nMv.MW() === 1) {
				Nmm = 1;
				if (MWN === 0) {
					NNN();
					mvm = 1;
					MWN = 1;
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				} else {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				}
			}
			if (nVmMw.MW() === 1) {
				Nmm = 1;
				mwv = 0;
				for (var mN = 1; mN < nvn.length; mN++) {
					var NW = nvn[mN];
					if (NW.behavior === wvM.wNM) {
						mNM[mwv].nWm(NW.nN.src, NW.nN.image);
						mNM[mwv].wwM = NW.id;
						mwv++;
					}
				}
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
			}
			if (serverList.MW() === 1) {
				Nmm = 1;
				mwv = 0;
				for (var mN = 1; mN < nvn.length; mN++) {
					var NW = nvn[mN];
					if ((((NW.id === MM.nVwWW) || (NW.id === MM.NwvMV)) || (NW.id === MM.vMnNN)) || (NW.id === MM.VnmMw)) {
						mNM[mwv].nWm(NW.nN.src, NW.nN.image);
						mNM[mwv].wwM = NW.id;
						mwv++;
					}
				}
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
			}
			if (WNmWN.MW() === 1) {
				Nmm = 1;
				mwv = 0;
				var vMMVW = nvn[MM.wmvWW].wVm;
				for (var mN = 0; mN < vMMVW.length; mN++) {
					var NW = vMMVW[mN];
					mNM[mwv].nWm(NW.nN.src, NW.nN.image);
					mNM[mwv].wwM = MM.wmvWW;
					mNM[mwv].vMMVn = mN;
					mwv++;
				}
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
			}
			if (VvMNW.MW() === 1) {
				Nmm = 1;
				mwv = 0;
				var vMMVW = nvn[MM.wVNmN].wVm;
				for (var mN = 0; mN < vMMVW.length; mN++) {
					var NW = vMMVW[mN];
					mNM[mwv].nWm(NW.nN.src, NW.nN.image);
					mNM[mwv].wwM = MM.wVNmN;
					mNM[mwv].vMMVn = mN;
					mwv++;
				}
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
			}
			if (MvwWW.MW() === 1) {
				Nmm = 1;
				mwv = 0;
				for (var mN = 1; mN < nvn.length; mN++) {
					var NW = nvn[mN];
					if (((((NW.VWm === 1) || (NW.nNw === 1)) || (NW.nNM === 1)) || (NW.VNM === 1)) || (NW.mNvnV === 1)) {
						mNM[mwv].nWm(NW.nN.src, NW.nN.image);
						mNM[mwv].wwM = NW.id;
						mwv++;
					}
				}
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
			}
			if (NWM.MW() === 1) {
				Nmm = 1;
				if (nM.scale < 1.5) {
					nM.scale += 0.1;
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
					nwmNM.show();
					if (nM.scale >= 1.5) NWM.nwN();
				}
			}
			if (nwmNM.MW() === 1) {
				Nmm = 1;
				if (nM.scale > -0.95) {
					if (nM.scale < 0) nM.scale -= 0.05;
					else nM.scale -= 0.1;
					audioHandler.wmN(audioHandler.vm.button, 1, 0);
					NWM.show();
					if (nM.scale <= -0.95) nwmNM.nwN();
				}
			}
			if (MWmmN.MW() === 1) {
				Nmm = 1;
				WWMvV();
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
			}
			if (vNvMV.MW() === 1) {
				Nmm = 1;
				audioHandler.wmN(audioHandler.vm.open, 1, 0);
				var MvNnW = window["prompt"]("Please enter your code here", "");
				audioHandler.wmN(audioHandler.vm.open, 1, 0);
				if ((MvNnW != null) && (MvNnW != "")) NVmMm(MvNnW);
			}
			if (wMnmw.MW() === 1) {
				Nmm = 1;
				audioHandler.wmN(audioHandler.vm.button, 1, 0);
				NWWnw();
			}
			if (MnNmw.MW() === 1) {
				Nmm = 1;
				MWwnm.WVw(WMW);
				audioHandler.wmN(audioHandler.vm.play, 1, 0);
			}
			if (mvm === 1) {
				if (mNV.MW() === 1) {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
					return;
				}
				if (vNM === 1) {
					wvvmM.MVv(mn.Vmw);
					mnnvm.MVv(mn.Vmw);
					mWVmw.MVv(mn.Vmw);
					NVnmn.MVv(mn.Vmw);
					vnnvM.MVv(mn.Vmw);
					MWVvn.MVv(mn.Vmw);
					MMmwm.MVv(mn.Vmw);
					nnNNM.MVv(mn.Vmw);
					nWwMv.MVv(mn.Vmw);
					NWWww.MVv(mn.Vmw);
					mnMwN.MVv(mn.Vmw);
					nwvWN.MVv(mn.Vmw);
					if (mnnvm.MW() === 1) {
						Vvv.WMwWv();
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (wvvmM.MW() === 1) {
						Vvv.VwmVn();
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (mWVmw.MW() === 1) {
						graphicOptions.VMMNW(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (NVnmn.MW() === 1) {
						graphicOptions.VMMNW(2);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (vnnvM.MW() === 1) {
						graphicOptions.VMMNW(3);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (MWVvn.MW() === 1) {
						audioHandler.nvVMV(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (MMmwm.MW() === 1) {
						audioHandler.nvVMV(0);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (nnNNM.MW() === 1) {
						audioHandler.vmWVN(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (nWwMv.MW() === 1) {
						audioHandler.vmWVN(0);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (mnMwN.MW() === 1) {
						nM.VNwmV(1);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (NWWww.MW() === 1) {
						nM.VNwmV(2);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					} else if (nwvWN.MW() === 1) {
						nM.VNwmV(0);
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						return;
					}
					var WMwmN = wNMwm.Wv;
					if ((((nmn.mvN < WMwmN.x) || (nmn.mvN > (WMwmN.x + (234 * parScaling)))) || (nmn.wWM < WMwmN.y)) || (nmn.wWM > (WMwmN.y + (232 * parScaling)))) {
						NNN();
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
						return;
					}
				} else if (MWN === 1) {
					var MWVMW = vnvNv.Wv;
					if ((((nmn.mvN < MWVMW.x) || (nmn.mvN > (MWVMW.x + (412 * parScaling)))) || (nmn.wWM < MWVMW.y)) || (nmn.wWM > (MWVMW.y + (412 * parScaling)))) {
						NNN();
						audioHandler.wmN(audioHandler.vm.open, 1, 0);
						return;
					}
				}
			} else {
				for (var mN = 0; mN < mwv; mN++) {
					if (mNM[mN].MW() === 1) {
						audioHandler.wmN(audioHandler.vm.button, 1, 0);
						wm.wM.wmm = mNM[mN].wwM;
						wm.wM.wMWVm = mNM[mN].vMMVn;
						if (wm.wM.wmm === MM.wmvWW) wm.wM.nWnmw = 0;
					}
				}
			}
		};

		function vVn(vN) {
			nmn.WWn(vN, nmn.mnwNM);
			var Nmm = 0;
			if (WVm.MW() === 1) {
				Nmm = 1;
			}
			if (Mwm.MW() === 1) {
				Nmm = 1;
			}
			if (nMv.MW() === 1) {
				Nmm = 1;
			}
			if (nVmMw.MW() === 1) {
				Nmm = 1;
			}
			if (serverList.MW() === 1) {
				Nmm = 1;
			}
			if (WNmWN.MW() === 1) {
				Nmm = 1;
			}
			if (VvMNW.MW() === 1) {
				Nmm = 1;
			}
			if (MvwWW.MW() === 1) {
				Nmm = 1;
			}
			if (NWM.MW() === 1) {
				Nmm = 1;
			}
			if (nwmNM.MW() === 1) {
				Nmm = 1;
			}
			if (MWmmN.MW() === 1) {
				Nmm = 1;
			}
			if (vNvMV.MW() === 1) {
				Nmm = 1;
			}
			if (wMnmw.MW() === 1) {
				Nmm = 1;
			}
			if (MnNmw.MW() === 1) {
				Nmm = 1;
			}
			if (mvm === 1) {
				mNV.MW();
				if (vNM === 1) {
					mnnvm.MW();
					wvvmM.MW();
					mWVmw.MW();
					NVnmn.MW();
					vnnvM.MW();
					MWVvn.MW();
					MMmwm.MW();
					nnNNM.MW();
					nWwMv.MW();
					mnMwN.MW();
					NWWww.MW();
					nwvWN.MW();
				}
			} else {
				for (var mN = 0; mN < mwv; mN++) mNM[mN].MW();
			}
		};

		function mMm(vN) {
			Vvv.mwMmv(vN);
			if (vN.keyCode === 77) {
				if (MWN === 0) {
					NNN();
					mvm = 1;
					MWN = 1;
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
				} else {
					NNN();
					audioHandler.wmN(audioHandler.vm.open, 1, 0);
				}
			} else if ((vN.keyCode === 27) && (mvm === 1)) {
				audioHandler.wmN(audioHandler.vm.open, 1, 0);
				NNN();
			} else if (vN.keyCode === 82) {
				if ((wm.wM.WMV === 1) && (wm.wM.wmm !== MM.wmvWW)) wm.wM.nWnmw = (wm.wM.nWnmw + 1) % 4;
			}
		};

		function NmW(vN) {
			Vvv.VVnvN(vN);
			if ((((vN.keyCode === 37) || (vN.keyCode === 38)) || (vN.keyCode === 39)) || (vN.keyCode === 40)) {
				vN.preventDefault();
				return false;
			}
		};

		function Wvv(vN) {
			var NNv = 0;
			for (var nNm = 0; nNm < vN.touches.length; nNm++) {
				nmn.wVW(MnV, vN, vN.touches[nNm]);
				if (mvm === 0) {
					var mvN = Math.floor(MnV.clientX * graphicOptions.options.NMn);
					var wWM = Math.floor(MnV.clientY * graphicOptions.options.vWnwM);
					if (wWM < (var2 - (70 * parScaling))) {
						var vmW = var5 * 1.5;
						var Wwm = var5 / 4;
						if (mvN < var3) {
							var VWw = 30 * parScaling;
							WwvVV = mnW.angle(var3 - vmW, var4 + Wwm, mvN, wWM);
							vwnmM = Math.min(mnW.WNw(mvN, wWM, var3 - vmW, var4 + Wwm), 25);
							if (mvN < ((var3 - vmW) - VWw)) {
								wVn |= 1;
								VwM.charCode = 37;
								VwM.keyCode = 37;
								NmW(VwM);
							} else if (mvN > ((var3 - vmW) + VWw)) {
								wVn |= 2;
								VwM.charCode = 39;
								VwM.keyCode = 39;
								NmW(VwM);
							}
							if (wWM < ((var4 + Wwm) - VWw)) {
								wVn |= 4;
								VwM.charCode = 38;
								VwM.keyCode = 38;
								NmW(VwM);
							} else if (wWM > ((var4 + Wwm) + VWw)) {
								wVn |= 8;
								VwM.charCode = 40;
								VwM.keyCode = 40;
								NmW(VwM);
							}
						} else if ((mvN < (var1 - (40 * parScaling))) || (wWM > (40 * parScaling))) {
							NNv = 1;
							MnV.clientX -= vmW / graphicOptions.options.NMn;
							MnV.clientY -= Wwm / graphicOptions.options.NMn;
							if (wm.wM.WMV === 1) {
								var wVnVN = window.Date.now();
								if ((wVnVN - vNnNv) < 1000) {
									WMMmv = 1;
									WVNmm = MnV.clientX;
									NMVVv = MnV.clientY;
									nnV(MnV);
								}
								vNnNv = wVnVN;
							} else {
								WMMmv = 1;
								WVNmm = MnV.clientX;
								NMVVv = MnV.clientY;
								nnV(MnV);
							}
						}
						continue;
					}
				}
				if ((NNv === 0) && (wVn === 0)) {
					nnV(MnV);
					NNv = 1;
				}
			}
		};

		function MmV(vN) {};

		function wNv(vN) {
			var mvN = Math.floor(vN.changedTouches[0].clientX * graphicOptions.options.NMn);
			var wWM = Math.floor(vN.changedTouches[0].clientY * graphicOptions.options.vWnwM);
			if (WNnnw === 1) WNnnw = 0;
			else if (mvm === 1) mWv(MnV);
			else if ((WMMmv === 1) && (mvN >= var3)) {
				WMMmv = 0;
				MnV.clientX = WVNmm;
				MnV.clientY = NMVVv;
				mWv(MnV);
				return;
			} else if (((wm.wM.mwW.mwN === 0) && (mvN < var3)) && (wWM < (var2 - (70 * parScaling)))) {
				if ((mvN < (240 * parScaling)) && (wWM < (160 * parScaling))) mWv(MnV);
			} else mWv(MnV);
			if (wVn !== 0) {
				if (wVn & 1) {
					VwM.charCode = 37;
					mMm(VwM);
				}
				if (wVn & 2) {
					VwM.charCode = 39;
					mMm(VwM);
				}
				if (wVn & 4) {
					VwM.charCode = 38;
					mMm(VwM);
				}
				if (wVn & 8) {
					VwM.charCode = 40;
					mMm(VwM);
				}
				wVn = 0;
			}
		};

		function mvV(vN) {
			var NNv = 0;
			var nNNmw = 0;
			for (var nNm = 0; nNm < vN.touches.length; nNm++) {
				nmn.wVW(MnV, vN, vN.touches[nNm]);
				if ((wm.wM.mwW.mwN === 0) && (mvm === 0)) {
					var mvN = Math.floor(MnV.clientX * graphicOptions.options.NMn);
					var wWM = Math.floor(MnV.clientY * graphicOptions.options.vWnwM);
					if (wWM < (var2 - (70 * parScaling))) {
						var vmW = var5 * 1.5;
						var Wwm = var5 / 4;
						if (mvN < var3) {
							nNNmw = 1;
							var NWN = 0;
							var VWw = 30 * parScaling;
							WwvVV = mnW.angle(var3 - vmW, var4 + Wwm, mvN, wWM);
							vwnmM = Math.min(mnW.WNw(mvN, wWM, var3 - vmW, var4 + Wwm), 25);
							if (mvN < ((var3 - vmW) - VWw)) NWN |= 1;
							else if (mvN > ((var3 - vmW) + VWw)) NWN |= 2;
							if (wWM < ((var4 + Wwm) + -VWw)) NWN |= 4;
							else if (wWM > ((var4 + Wwm) + VWw)) NWN |= 8;
							if (((NWN & 1) === 1) && ((wVn & 1) !== 1)) {
								VwM.charCode = 37;
								NmW(VwM);
							} else if (((NWN & 1) !== 1) && ((wVn & 1) === 1)) {
								VwM.charCode = 37;
								mMm(VwM);
							}
							if (((NWN & 2) === 2) && ((wVn & 2) !== 2)) {
								VwM.charCode = 39;
								NmW(VwM);
							} else if (((NWN & 2) !== 2) && ((wVn & 2) === 2)) {
								VwM.charCode = 39;
								mMm(VwM);
							}
							if (((NWN & 4) === 4) && ((wVn & 4) !== 4)) {
								VwM.charCode = 38;
								NmW(VwM);
							} else if (((NWN & 4) !== 4) && ((wVn & 4) === 4)) {
								VwM.charCode = 38;
								mMm(VwM);
							}
							if (((NWN & 8) === 8) && ((wVn & 8) !== 8)) {
								VwM.charCode = 40;
								NmW(VwM);
							} else if (((NWN & 8) !== 8) && ((wVn & 8) === 8)) {
								VwM.charCode = 40;
								mMm(VwM);
							}
							wVn = NWN;
							continue;
						} else if ((mvN < (var1 - (40 * parScaling))) || (wWM > (40 * parScaling))) {
							NNv = 1;
							MnV.clientX -= vmW / graphicOptions.options.NMn;
							MnV.clientY -= Wwm / graphicOptions.options.NMn;
							WVNmm = MnV.clientX;
							NMVVv = MnV.clientY;
							vVn(MnV);
						}
					}
				}
				if ((NNv === 0) && (wVn === 0)) {
					vVn(MnV);
					NNv = 1;
				}
			}
			if ((nNNmw === 0) && (wVn !== 0)) {
				if (wVn & 1) {
					VwM.charCode = 37;
					mMm(VwM);
				}
				if (wVn & 2) {
					VwM.charCode = 39;
					mMm(VwM);
				}
				if (wVn & 4) {
					VwM.charCode = 38;
					mMm(VwM);
				}
				if (wVn & 8) {
					VwM.charCode = 40;
					mMm(VwM);
				}
				wVn = 0;
			}
		};

		function mnmVM() {
			if (typeOfDevice === 0) window.addEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.addEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.addEventListener('mousemove', vVn, false);
			if (typeOfDevice === 0) window.addEventListener('keyup', mMm, false);
			if (typeOfDevice === 0) window.addEventListener('keydown', NmW, false);
			if (typeOfDevice === 1) window.addEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.addEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.addEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.addEventListener('touchmove', mvV, false);
		};

		function MWwMm() {
			if (typeOfDevice === 0) window.removeEventListener('mousedown', nnV, false);
			if (typeOfDevice === 0) window.removeEventListener('mouseup', mWv, false);
			if (typeOfDevice === 0) window.removeEventListener('mousemove', vVn, false);
			if (typeOfDevice === 0) window.removeEventListener('keyup', mMm, false);
			if (typeOfDevice === 0) window.removeEventListener('keydown', NmW, false);
			if (typeOfDevice === 1) window.removeEventListener('touchstart', Wvv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchend', MmV, false);
			if (typeOfDevice === 1) window.removeEventListener('touchcancel', wNv, false);
			if (typeOfDevice === 1) window.removeEventListener('touchmove', mvV, false);
		};
		return {
			WVw: WVw,
			wnW: wnW,
			wnm: wnm,
			update: WvV,
			nv: nv
		};
	})();
	var MVm = 1;
	var nMw = {};
	nMw.vnWwm = MVm++;
	nMw.wNNNW = MVm++;
	nMw.mNWMV = MVm++;
	nMw.vvNnn = MVm++;
	nMw.VNVvM = MVm++;
	nMw.vNwnN = MVm++;
	nMw.MNmmv = MVm++;
	nMw.nWWNw = MVm++;
	nMw.vNnWw = MVm++;
	nMw.MwVNn = MVm++;
	nMw.vvwnw = MVm++;
	nMw.wWwMN = MVm++;
	nMw.MNwWw = MVm++;
	nMw.NNNMw = MVm++;
	nMw.VNNvN = MVm++;
	var mnvwv = [{}, {
		id: nMw.vnWwm,
		src: "img/road-T0B0L0R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 0,
			y: 0,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		alt: [nMw.vnWwm]
	}, {
		id: nMw.wNNNW,
		src: "img/road-T0B0L1R0.png",
		image: {
			v: 0
		},
		mVN: {
			x: 28,
			y: 0,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		alt: [nMw.NWWmM, nMw.mwNMm]
	}, {
		id: nMw.mNWMV,
		src: "img/road-T0B0L1R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 56,
			y: 0,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		alt: [nMw.WnVwwvw, nMw.MWWmvnN, nMw.nWnmmvw, nMw.VVMnmMw, nMw.MmwMnNn, nMw.nwMvmnn, nMw.WNnmnmw, nMw.vMmwmnV]
	}, {
		id: nMw.vvNnn,
		src: "img/road-T0B1L0R0.png",
		image: {
			v: 0
		},
		mVN: {
			x: 84,
			y: 0,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		alt: [nMw.WvmNMmv, nMw.MnMvmwW]
	}, {
		id: nMw.VNVvM,
		src: "img/road-T0B1L0R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 56,
			y: 28,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.vNwnN,
		src: "img/road-T0B1L1R0.png",
		image: {
			v: 0
		},
		mVN: {
			x: 0,
			y: 56,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.MNmmv,
		src: "img/road-T0B1L1R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 112,
			y: 0,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.nWWNw,
		src: "img/road-T1B0L0R0.png",
		image: {
			v: 0
		},
		mVN: {
			x: 28,
			y: 28,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.vNnWw,
		src: "img/road-T1B0L0R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 56,
			y: 56,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.MwVNn,
		src: "img/road-T1B0L1R0.png",
		image: {
			v: 0
		},
		mVN: {
			x: 84,
			y: 56,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.vvwnw,
		src: "img/road-T1B0L1R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 84,
			y: 28,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.wWwMN,
		src: "img/road-T1B1L0R0.png",
		image: {
			v: 0
		},
		mVN: {
			x: 112,
			y: 56,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.MNwWw,
		src: "img/road-T1B1L0R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 112,
			y: 28,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.NNNMw,
		src: "img/road-T1B1L1R0.png",
		image: {
			v: 0
		},
		mVN: {
			x: 0,
			y: 28,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		]
	}, {
		id: nMw.VNNvN,
		src: "img/road-T1B1L1R1.png",
		image: {
			v: 0
		},
		mVN: {
			x: 28,
			y: 56,
			vwW: 28,
			w: 28
		},
		vMv: [
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0],
			[0, 0, 0, 0]
		],
		alt: [nMw.nmmwMNv, nMw.MWmWnMV]
	}];
	try {
		if (nVN !== undefined) {
			nVN.nMw = nMw;
			nVN.mnvwv = mnvwv;
		}
	} catch (error) {}
	var nM = (function() {
		var vVm = 100;
		var MMn = vVm / 2;
		var VwMwV = 1;
		var nMNNn = 13;
		var mvmwv = 9;
		var mVVmm = 100;
		var nVWVv = 0.025;
		var wnWmn = 0.12;
		var nVwMW = 0.01;
		var VwMvWwv = 0.008;
		var wwv = 0;
		var MwwVw = 0;
		var wwNmn = 0;
		var mvv = 0;
		var wwWvvMv = 3;
		var MNMmV = 0;
		var nwNnWvW = 0;
		var VVWnm = 0;
		var WMnNV = 0;
		var MVWnwWM = 450;
		var MVmVm = 410;
		var mmMNw = MVmVm;
		var vvVmw = 412 / 8;
		var wvvvM = 0;
		var MmwnV = "img/borderBigMinimap2.png";
		var wmNWM = "img/arrow-minimap.png";
		var nVMnN = "img/arrow-minimap2.png";
		var MMvwv = "img/house-icon.png";
		var VWwVM = "img/city-icon.png";
		var wwmMN = "img/inv-empty.png";
		var NWwMm = "img/loot.png";
		var NWNVN = "img/loot-mobile.png";
		var NWNnW = "img/loot2.png";
		var mWMNM = "img/timer.png";
		var wnvmM = "img/craft-grid.png";
		var VmnVM = "img/timer-arrow.png";
		var wNWVW = "img/timer-lights.png";
		var WNnvv = "img/hint-rotate.png";
		var MnVnm = "img/day-unusable.png";
		var NMnNVwv = "img/day-unusable.png";
		var mwwvw = "img/day-clock.png";
		var WWwWV = "img/night-clock.png";
		var MvmWN = "img/clock-hand.png";
		var mwNwm = "img/clock-hand-radiation.png";
		var MmWmw = "img/day-clock-hand.png";
		var NMVnW = "img/craft-gauge.png";
		var WvWVN = "img/stroke-bonus.png";
		var vMnnv = "img/wrong-tool.png";
		var nwWmW = "img/hand-tool.png";
		var mnVvN = "img/arrow-craft.png";
		var mMwnm = "img/unlock-skills.png";
		var wNnWM = "img/server-full.png";
		var VvnMW = "img/server-old.png";
		var nnNWN = "img/client-old.png";
		var wwwvv = "img/server-wrong.png";
		var Wmvmn = "img/invitation-box.png";
		var vVvwm = "img/time-box.png";
		var nnwMM = "img/rank-box.png";
		var MVNWn = "img/toxic-alert.png";
		var mWnnM = "img/radiation-alert.png";
		var wvNwW = 500;
		var vnvmw = 256;
		var wMWNwnw = vnvmw * 2;
		var wwvMN = 500;
		var vmM = Math.floor(vnvmw / 2);
		var mVvNM = Math.floor(vmM / 2);
		var wMMwv = "img/alert";
		var mWMVn = 699;
		var VMVNn = 738;
		var nMnVn = "#70BD56";
		var wnVmv = "#e58833";
		var VNnVW = "#55B7BC";
		var vwmVm = "#d7c83a";
		var vwwnM = "#FFFFFF";
		var Wwnvm = 3000;
		var MvwMn = 500;
		var wMVvw = 2500;
		var NnwMW = Math.PIO;
		var vwwWvWn = 165 * (Math.PI / 180);
		var mWw = Math.PIT;
		var WNMMV = Math.PI / wm.Vvnvm;
		var nnW = 1;
		var NvM = 2;
		var Wnv = 4;
		var vvv = 8;
		var NvN = 16;
		var nvW = 32;
		var nmv = 64;
		var mmv = 128;
		var MvWMM = 0;
		var mMw = 1;
		var vwv = 2;
		var wnw = 4;
		var mVm = 8;
		var wvnWM = 0;
		var NMwVV = 1;
		var NmwNm = 2;
		var WwmNV = 3;
		var VNN = [
			[],
			[],
			[],
			[]
		];
		VNN[wvnWM][MvWMM] = 0;
		VNN[wvnWM][mMw] = 3;
		VNN[wvnWM][vwv] = 6;
		VNN[wvnWM][wnw | mVm] = 9;
		VNN[wvnWM][wnw] = 4;
		VNN[wvnWM][mVm] = 5;
		VNN[wvnWM][mMw | wnw] = 27;
		VNN[wvnWM][mMw | mVm] = 20;
		VNN[wvnWM][vwv | wnw] = 7;
		VNN[wvnWM][vwv | mVm] = 28;
		VNN[wvnWM][(mMw | wnw) | mVm] = 24;
		VNN[wvnWM][(vwv | wnw) | mVm] = 29;
		VNN[NmwNm][MvWMM] = 0;
		VNN[NmwNm][mMw] = 3;
		VNN[NmwNm][vwv] = 6;
		VNN[NmwNm][wnw | mVm] = 9;
		VNN[NmwNm][wnw] = 4;
		VNN[NmwNm][mVm] = 5;
		VNN[NmwNm][mMw | wnw] = 27;
		VNN[NmwNm][mMw | mVm] = 20;
		VNN[NmwNm][vwv | wnw] = 7;
		VNN[NmwNm][vwv | mVm] = 28;
		VNN[NmwNm][(mMw | wnw) | mVm] = 24;
		VNN[NmwNm][(vwv | wnw) | mVm] = 29;
		VNN[NMwVV][MvWMM] = 11;
		VNN[NMwVV][mMw] = 12;
		VNN[NMwVV][vwv] = 17;
		VNN[NMwVV][wnw | mVm] = 10;
		VNN[NMwVV][wnw] = 19;
		VNN[NMwVV][mVm] = 18;
		VNN[NMwVV][mMw | wnw] = 34;
		VNN[NMwVV][mMw | mVm] = 22;
		VNN[NMwVV][vwv | wnw] = 23;
		VNN[NMwVV][vwv | mVm] = 33;
		VNN[NMwVV][(mMw | wnw) | mVm] = 35;
		VNN[NMwVV][(vwv | wnw) | mVm] = 32;
		VNN[WwmNV][MvWMM] = 11;
		VNN[WwmNV][mMw] = 15;
		VNN[WwmNV][vwv] = 14;
		VNN[WwmNV][wnw | mVm] = 10;
		VNN[WwmNV][wnw] = 19;
		VNN[WwmNV][mVm] = 18;
		VNN[WwmNV][mMw | wnw] = 37;
		VNN[WwmNV][mMw | mVm] = 16;
		VNN[WwmNV][vwv | wnw] = 23;
		VNN[WwmNV][vwv | mVm] = 38;
		VNN[WwmNV][(mMw | wnw) | mVm] = 36;
		VNN[WwmNV][(vwv | wnw) | mVm] = 39;
		var nWn = [];
		nWn[0] = 0;
		nWn[nnW] = 3;
		nWn[NvM] = 4;
		nWn[Wnv] = 2;
		nWn[vvv] = 1;
		nWn[nnW | Wnv] = 17;
		nWn[nnW | NvM] = 5;
		nWn[nnW | vvv] = 18;
		nWn[NvM | Wnv] = 16;
		nWn[NvM | vvv] = 19;
		nWn[Wnv | vvv] = 6;
		nWn[(nnW | Wnv) | vvv] = 10;
		nWn[(nnW | Wnv) | NvM] = 9;
		nWn[(vvv | Wnv) | NvM] = 11;
		nWn[(nnW | vvv) | NvM] = 8;
		nWn[((nnW | Wnv) | NvM) | vvv] = 7;
		nWn[(vvv | NvM) | NvN] = 12;
		nWn[(vvv | nnW) | nvW] = 13;
		nWn[(Wnv | nnW) | mmv] = 14;
		nWn[(Wnv | NvM) | nmv] = 15;
		nWn[((Wnv | vvv) | NvM) | NvN] = 20;
		nWn[(((Wnv | vvv) | NvM) | nnW) | NvN] = 21;
		nWn[((nnW | vvv) | NvM) | NvN] = 22;
		nWn[(((Wnv | vvv) | NvM) | nnW) | nmv] = 23;
		nWn[((nnW | Wnv) | NvM) | nmv] = 24;
		nWn[((Wnv | vvv) | NvM) | nmv] = 25;
		nWn[((Wnv | vvv) | nnW) | mmv] = 26;
		nWn[(((Wnv | vvv) | NvM) | nnW) | mmv] = 27;
		nWn[((Wnv | NvM) | nnW) | mmv] = 28;
		nWn[((vvv | NvM) | nnW) | nvW] = 29;
		nWn[(((Wnv | vvv) | NvM) | nnW) | nvW] = 30;
		nWn[((Wnv | vvv) | nnW) | nvW] = 31;
		nWn[((((((Wnv | vvv) | NvM) | nnW) | nvW) | NvN) | mmv) | nmv] = 32;
		nWn[((((Wnv | vvv) | NvM) | nnW) | nvW) | mmv] = 33;
		nWn[((((Wnv | vvv) | NvM) | nnW) | nvW) | NvN] = 34;
		nWn[((((Wnv | vvv) | NvM) | nnW) | nvW) | nmv] = 35;
		nWn[((((Wnv | vvv) | NvM) | nnW) | NvN) | mmv] = 36;
		nWn[((((Wnv | vvv) | NvM) | nnW) | nmv) | NvN] = 37;
		nWn[((((Wnv | vvv) | NvM) | nnW) | nmv) | mmv] = 38;
		nWn[(((Wnv | vvv) | NvM) | nmv) | NvN] = 39;
		nWn[(((Wnv | vvv) | nnW) | mmv) | nvW] = 40;
		nWn[(((NvM | vvv) | nnW) | NvN) | nvW] = 41;
		nWn[(((NvM | Wnv) | nnW) | nmv) | mmv] = 42;
		nWn[(((((Wnv | vvv) | NvM) | nnW) | nvW) | mmv) | nmv] = 43;
		nWn[(((((Wnv | vvv) | NvM) | nnW) | NvN) | mmv) | nmv] = 44;
		nWn[(((((Wnv | vvv) | NvM) | nnW) | nvW) | NvN) | nmv] = 45;
		nWn[(((((Wnv | vvv) | NvM) | nnW) | nvW) | NvN) | mmv] = 46;
		var VnVvv = 0;
		var vMVMvNN = 1;
		var VwVvn = 2;
		var NvVVV = 600;
		var mN, NM;
		var vnv = 0;
		var WNN = 0;
		var nvv = 0;
		var NNW = 0;
		var mnWVV = 0;
		var WWNnN = 0;
		var mVVwV = 0;
		var VWnwN = 0;
		var mvnwV = nVwMW;
		var VVmWV = 0;
		var wWwvm = 0;
		var WVWnv = [];
		for (mN = 0; mN < 20; mN++) WVWnv[mN] = {
			v: 0
		};
		var vMwVv = VwVvn;
		var WVvVN = [];
		var vnm = [];
		var VVNmW = nMNNn;
		var mvnwv = mvmwv;
		var nmWVvmW = nMNNn * vVm;
		var wVwVNNW = mvmwv * vVm;
		var vvnww = [];
		var wwvww = {
			v: 0
		};
		var nNVmV = {
			v: 0
		};
		var MVw = {
			Mm: 0,
			Wnn: 0,
			src: mnVvN,
			image: {
				v: 0
			}
		};
		var MWV = {
			Mm: 0,
			Wnn: 0,
			src: mMwnm,
			image: {
				v: 0
			}
		};
		var wNvnV = {
			src: vVvwm,
			image: {
				v: 0
			}
		};
		var WMvVm = {
			src: nnwMM,
			image: {
				v: 0
			}
		};
		var wVmVM = {
			src: MVNWn,
			image: {
				v: 0
			}
		};
		var WvMVW = 0;
		var nMvnv = {
			src: mWnnM,
			image: {
				v: 0
			}
		};
		var wvNww = 0;
		var NWWvN = {
			src: "img/e-furniture.png",
			image: {
				v: 0
			}
		};
		var VWmWM = graphicOptions.createMenuImg("img/toxic-area2.png");
		var mmWmn = graphicOptions.createMenuImg("img/toxic-area3.png");
		var wNNWn = [];
		var MNW = [];
		var wNNnnwW = {
			v: 0
		};
		var VNwNV = {
			v: 0
		};
		var VNwvN = {
			v: 0
		};
		var VwNnv = {
			v: 0
		};
		var vmNVw = [0, 0, 0, 0];
		var VnvmW = wnWmn;
		var mVwVM = [];
		var NNmWw = 0;
		var WWwNw = {
			v: 0
		};
		var nvmvv = {
			v: 0
		};
		var NWWWV = {
			v: 0
		};
		var WVVwM = wwvMN;
		var mmmVm = {
			v: 0
		};
		var NwwmW = {
			v: 0
		};
		var mMwmM = {
			src: WvWVN,
			image: {
				v: 0
			}
		};
		var nwMVW = 0;
		var mMMwN = {
			src: vMnnv,
			image: {
				v: 0
			}
		};
		var wwwVn = {
			src: nwWmW,
			image: {
				v: 0
			}
		};
		var NvnnN = 12000;
		var nvNmv = 12000;
		var vnmmw = [];
		for (mN = 0; mN < 10; mN++) {
			vnmmw[mN] = [];
			for (NM = 0; NM < 3; NM++) vnmmw[mN][NM] = {
				v: 0
			};
		};
		var Wnn = [];
		for (mN = 0; mN < 8; mN++) {
			Wnn[mN] = [];
			for (NM = 0; NM < 2; NM++) Wnn[mN][NM] = {
				v: 0
			};
		}
		var mVnwv = {
			src: wmNWM,
			image: {
				v: 0
			}
		};
		var NwMMM = {
			src: nVMnN,
			image: {
				v: 0
			}
		};
		var mVN = {
			v: 0
		};
		var WWNWV = {
			src: MMvwv,
			image: {
				v: 0
			}
		};
		var mMmVv = {
			src: VWwVM,
			image: {
				v: 0
			}
		};
		var WMVvw = {
			src: WWwWV,
			image: {
				v: 0
			}
		};
		var mNWwv = {
			src: mwwvw,
			image: {
				v: 0
			}
		};
		var MwNVW = {
			src: MvmWN,
			image: {
				v: 0
			}
		};
		var VnVmW = {
			src: MmWmw,
			image: {
				v: 0
			}
		};
		var wVvnn = {
			src: mwNwm,
			image: {
				v: 0
			}
		};
		var WNnnM = {
			src: wNnWM,
			image: {
				v: 0
			}
		};
		var NVmnv = {
			src: VvnMW,
			image: {
				v: 0
			}
		};
		var vnVMW = {
			src: nnNWN,
			image: {
				v: 0
			}
		};
		var WVNMw = {
			src: wwwvv,
			image: {
				v: 0
			}
		};
		var MWNww = {
			v: 0
		};
		var WVVMV = [];
		for (mN = 0; mN < 20; mN++) WVVMV.push({
			v: 0
		});
		var mNv = document.createElement('canvas');
		var contex1 = mNv.getContext('2d');
		mNv.width = MVmVm;
		mNv.height = mmMNw;
		mNv.v = 1;
		mNv.wMv = mNv.width / 2;
		mNv.nNn = mNv.height / 2;
		var NnVvm = {
			image: mNv
		};
		var mWnnn = document.createElement('canvas');
		var contex2 = mWnnn.getContext('2d');
		mWnnn.width = MVmVm;
		mWnnn.height = mmMNw;
		mWnnn.v = 1;
		mWnnn.wMv = mNv.width / 2;
		mWnnn.nNn = mNv.height / 2;
		var WwwNM = {
			image: mWnnn
		};
		var NvNnW = 0;

		function WvNnm() {
			if (wm.wM.WNWVM === 8) {
				contex1.clearRect(0, 0, MVmVm, mmMNw);
				contex2.clearRect(0, 0, MVmVm, mmMNw);
				for (var mN = 0; mN < 8; mN++) {
					for (var NM = 0; NM < 8; NM++) {
						var mwmVw = wm.wM.MwNmV[mN][NM];
						if (mwmVw === 7) contex1.drawImage(VWmWM, 2 + (NM * vvVmw), (mN * vvVmw) + 1, VWmWM.wMv, VWmWM.nNn);
						else contex1.drawImage(mmWmn, 2 + (NM * vvVmw), (mN * vvVmw) + 1, VWmWM.wMv, VWmWM.nNn);
					}
				}
			} else {
				contex1.drawImage(mWnnn, 0, 0);
				contex2.clearRect(0, 0, MVmVm, mmMNw);
				for (var VmW = 0; VmW < 12; VmW++) {
					var VMV = wm.wM.mmwVv[VmW];
					var mN = VMV[0];
					var NM = VMV[1];
					if (mN === -1) continue;
					contex2.drawImage(VWmWM, 2 + (NM * vvVmw), (mN * vvVmw) + 1, VWmWM.wMv, VWmWM.nNn);
				}
			};
		};
		var VNVvv = document.createElement('canvas');
		var MmWVW = VNVvv.getContext('2d');
		VNVvv.width = mWMVn;
		VNVvv.height = VMVNn;
		NwvVm = [];
		for (var mN = 0; mN < 9; mN++) NwvVm[mN] = 0;
		var VVn = 0;
		for (mN = 0; mN < mvmwv; mN++) {
			WVvVN[mN] = [];
			for (var NM = 0; NM < nMNNn; NM++) WVvVN[mN][NM] = 0;
		}
		var mvVnm = document.createElement("canvas");
		var NWMMN = mvVnm.getContext("2d");
		mvVnm.width = 280;
		mvVnm.height = 148;
		var mvnWW = -1;
		var mmmMV = [];
		var WNnMm = [];
		var nMV = document.createElement("canvas");
		var WWNmm = nMV.getContext("2d");
		nMV.width = 280;
		nMV.height = 50;
		var vwNwM = -1;
		var MMnNM = document.createElement("canvas");
		var nmmwM = MMnNM.getContext("2d");
		MMnNM.width = 420;
		MMnNM.height = 148;
		var nvVmV = -1;

		function WvVWv() {
			this.mVv = 0;
			this.wwwVw = 0;
			this.wnMVm = 0;
			this.Wwv = 0;
			this.VWm = 0;
			this.VVn = 0;
			this.mVMnv = 0;
			this.Nvn = 0;
			this.nmwMM = 0;
			this.vnW = 0;
			this.mN = 0;
			this.b = [];
			this.rotate = 0;
			for (var mN = 0; mN < 3; mN++) this.b.push({
				type: 0,
				nNW: 0
			});
		};

		function wNvvm(VV, mm) {
			if ((VV.mWM > 0) || (VV.wWn !== 0)) return 0;
			var mN = VV.mN;
			var NM = VV.NM;
			var vW = VV.Wvn >> 7;
			var WW = 0;
			switch (mm) {
				case 0:
					if ((mN + 1) < mvv) {
						var wNW = vnm[mN + 1][NM];
						if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
							if (wNW.rotate === 1) WW += mMw;
							else if (wNW.rotate === 3) WW += vwv;
						}
					}
					if ((NM - 1) >= 0) {
						var wNW = vnm[mN][NM - 1];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 3) || (wNW.rotate === 0))) WW += wnw;
					}
					if ((NM + 1) < wwv) {
						var wNW = vnm[mN][NM + 1];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 1) || (wNW.rotate === 0))) WW += mVm;
					}
					break;
				case 1:
					if ((NM - 1) >= 0) {
						var wNW = vnm[mN][NM - 1];
						if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
							if (wNW.rotate === 0) WW += vwv;
							else if (wNW.rotate === 2) WW += mMw;
						}
					}
					if ((mN - 1) >= 0) {
						var wNW = vnm[mN - 1][NM];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 0) || (wNW.rotate === 1))) WW += wnw;
					}
					if ((mN + 1) < mvv) {
						var wNW = vnm[mN + 1][NM];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 2) || (wNW.rotate === 1))) WW += mVm;
					}
					break;
				case 2:
					if ((mN - 1) >= 0) {
						var wNW = vnm[mN - 1][NM];
						if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
							if (wNW.rotate === 1) WW += vwv;
							else if (wNW.rotate === 3) WW += mMw;
						}
					}
					if ((NM - 1) >= 0) {
						var wNW = vnm[mN][NM - 1];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 3) || (wNW.rotate === 2))) WW += mVm;
					}
					if ((NM + 1) < wwv) {
						var wNW = vnm[mN][NM + 1];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 1) || (wNW.rotate === 2))) WW += wnw;
					}
					break;
				case 3:
					if ((NM + 1) < wwv) {
						var wNW = vnm[mN][NM + 1];
						if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
							if (wNW.rotate === 0) WW += mMw;
							else if (wNW.rotate === 2) WW += vwv;
						}
					}
					if ((mN - 1) >= 0) {
						var wNW = vnm[mN - 1][NM];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 0) || (wNW.rotate === 3))) WW += mVm;
					}
					if ((mN + 1) < mvv) {
						var wNW = vnm[mN + 1][NM];
						if (((wNW.mVv === VVn) && (wNW.VWm === vW)) && ((wNW.rotate === 2) || (wNW.rotate === 3))) WW += wnw;
					}
					break;
			}
			return VNN[mm][WW];
		};

		function MmmwM(VV) {
			if ((VV.mWM > 0) || (VV.wWn !== 0)) return 0;
			var mN = VV.mN;
			var NM = VV.NM;
			var vW = VV.Wvn >> 7;
			var WW = 0;
			var V = 0,
				Vnw = 0,
				m = 0,
				NnWnV = 0;
			if ((mN - 1) >= 0) {
				var wNW = vnm[mN - 1][NM];
				if (wNW.wwwVw === VVn) {
					Vnw = 1;
					WW += Wnv;
				}
			}
			if ((mN + 1) < mvv) {
				var wNW = vnm[mN + 1][NM];
				if (wNW.wwwVw === VVn) {
					WW += vvv;
					m = 1;
				}
			}
			if ((NM - 1) >= 0) {
				var wNW = vnm[mN][NM - 1];
				if (wNW.wwwVw === VVn) {
					WW += nnW;
					NnWnV = 1;
				}
			}
			if ((NM + 1) < wwv) {
				var wNW = vnm[mN][NM + 1];
				if (wNW.wwwVw === VVn) {
					WW += NvM;
					V = 1;
				}
			}
			if ((V + Vnw) === 2) {
				var wNW = vnm[mN - 1][NM + 1];
				if (wNW.wwwVw === VVn) WW += nmv;
			}
			if ((NnWnV + Vnw) === 2) {
				var wNW = vnm[mN - 1][NM - 1];
				if (wNW.wwwVw === VVn) WW += mmv;
			}
			if ((m + V) === 2) {
				var wNW = vnm[mN + 1][NM + 1];
				if (wNW.wwwVw === VVn) WW += NvN;
			}
			if ((m + NnWnV) === 2) {
				var wNW = vnm[mN + 1][NM - 1];
				if (wNW.wwwVw === VVn) WW += nvW;
			}
			return nWn[WW];
		};

		function vmVMm(VV) {
			if ((VV.mWM > 0) || (VV.wWn !== 0)) return 0;
			var mN = VV.mN;
			var NM = VV.NM;
			var VWm = nvn[VV.Wvn >> 7];
			var vW = VWm.nmnvN;
			var WW = 0;
			var V = 0,
				Vnw = 0,
				m = 0,
				NnWnV = 0;
			if ((mN - 1) >= 0) {
				var wNW = vnm[mN - 1][NM];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
					Vnw = 1;
					WW += Wnv;
				}
			}
			if ((mN + 1) < mvv) {
				var wNW = vnm[mN + 1][NM];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
					WW += vvv;
					m = 1;
				}
			}
			if ((NM - 1) >= 0) {
				var wNW = vnm[mN][NM - 1];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
					WW += nnW;
					NnWnV = 1;
				}
			}
			if ((NM + 1) < wwv) {
				var wNW = vnm[mN][NM + 1];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) {
					WW += NvM;
					V = 1;
				}
			}
			if ((V + Vnw) === 2) {
				var wNW = vnm[mN - 1][NM + 1];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) WW += nmv;
			}
			if ((NnWnV + Vnw) === 2) {
				var wNW = vnm[mN - 1][NM - 1];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) WW += mmv;
			}
			if ((m + V) === 2) {
				var wNW = vnm[mN + 1][NM + 1];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) WW += NvN;
			}
			if ((m + NnWnV) === 2) {
				var wNW = vnm[mN + 1][NM - 1];
				if ((wNW.mVv === VVn) && (wNW.VWm === vW)) WW += nvW;
			}
			var WW = nWn[WW];
			vnm[mN][NM].wnMVm = VWm.wnMVm[WW];
			return WW;
		};

		function wWMNN(VV) {
			var vW = VV.Wvn >> 7;
			if (((nvn[vW].nNw !== 1) || (VV.mWM > 0)) || (VV.vmN > 0)) return;
			var wNW = vnm[VV.mN][VV.NM];
			wNW.mVv = VVn;
			wNW.VWm = vW;
			wNW.rotate = (VV.Wvn >> 5) & 3;
		};

		function NMmWm(VV) {
			var vW = VV.Wvn >> 7;
			if (((nvn[vW].VWm !== 1) || (VV.mWM > 0)) || (VV.vmN > 0)) return;
			var wNW = vnm[VV.mN][VV.NM];
			wNW.mVv = VVn;
			wNW.VWm = nvn[vW].nmnvN;
			if (wm.wM.nwm === VV.NM) {
				var WNw = Math.max(1, Math.abs(wm.wM.vNW - VV.mN));
				if (wm.wM.vNW < VV.mN) vmNVw[0] = VnvmW / WNw;
				else vmNVw[1] = VnvmW / WNw;
			} else if (wm.wM.vNW === VV.mN) {
				var WNw = Math.max(1, Math.abs(wm.wM.nwm - VV.NM));
				if (wm.wM.nwm < VV.NM) vmNVw[2] = VnvmW / WNw;
				else vmNVw[3] = VnvmW / WNw;
			}
		};

		function vnvWn(VV) {
			var vW = VV.Wvn >> 7;
			if (((nvn[vW].VWm !== 1) || (VV.mWM > 0)) || (VV.vmN > 0)) return;
			var wNW = vnm[VV.mN][VV.NM];
			wNW.wwwVw = VVn;
		};

		function wMVwW(VV, nNW) {
			var mN = VV.mN;
			var NM = VV.NM;
			var wNW = vnm[mN][NM];
			if (wNW.VVn === VVn) {
				if (wNW.mN < 3) {
					var m = wNW.b[wNW.mN];
					wNW.mN += 1;
					m.type = VV.type;
					m.nNW = nNW;
				}
			} else {
				wNW.VVn = VVn;
				var m = wNW.b[0];
				wNW.mN = 1;
				m.type = VV.type;
				m.nNW = nNW;
			}
		};

		function MWMVm(vwvVV, nnMVw, MMMWN) {
			mNwnw = document.getElementById("bod").onresize;
			if (wm.wNN === wm.MNMwn) {
				contex1.clearRect(0, 0, MVmVm, MVmVm);
				contex2.clearRect(0, 0, MVmVm, MVmVm);
				WvMVW = 0;
			}
			wvNww = 0;
			nM.MWmmv = 0;
			nM.vvwMv = 0;
			if (vwvVV !== undefined) WVVwM = 0;
			else WVVwM = wwvMN;
			if (MMMWN !== undefined) mvnwV = MMMWN;
			else mvnwV = nVwMW;
			if (nnMVw !== undefined) VnvmW = nnMVw;
			else VnvmW = wnWmn;
			nvv = 0;
			NNW = 0;
			wm.wM.x = 0;
			wm.wM.y = 0;
			wm.wM.vNW = 0;
			wm.wM.nwm = 0;
			MVw.Wnn = 0;
			MVw.Mm = 0;
			MWV.Wnn = 0;
			MWV.Mm = 0;
			mMWnm.id = -1;
			mMWnm.Mvv = -1;
			var lParTrue = window.localStorage.getItem("particles");
			if (lParTrue !== null) vMwVv = window.Number(lParTrue);
			Mvn = "";
			wNwVm = null;
			mMN.width = 150;
			mMN.height = 150;
			nM.MWNVV = (mMN.width * 100) / 255;
			wwv = mMN.width;
			mvv = mMN.height;
			MwwVw = vVm * wwv;
			wwNmn = vVm * mvv;
			MNMmV = 824 / MwwVw;
			VVWnm = 824 - vnvmw;
			WMnNV = VVWnm + vmM;
			wvvvM = MwwVw / 8;
			wm.NNMWm(wwv, mvv);
			for (var mN = 0; mN < mvv; mN++) {
				vnm[mN] = [];
				for (var NM = 0; NM < wwv; NM++) vnm[mN][NM] = new WvVWv;
			}
			var VmV = nmm.wNn[0].length;
			for (mN = 0; mN < VmV; mN++) mVwVM[mN] = null;
		};

		function MvvvW(Mv, mv, nI, vV, VwW, WwN) {
			Mv.Wv.x = nI;
			Mv.Wv.y = vV;
			Mv.nv();
			var NW = nvn[mv[0]];
			var nW = mv[1];
			if (nW > 1) {
				if (VwW[nW] === undefined) {
					VwW[nW] = {
						image: mn.vmv("x" + nW, "'Comic Han Sans MS', sans-serif", "#ffffff", 30, 250, undefined, 15, 12, undefined, undefined, undefined, undefined, "#000000", 12)
					};
					VwW[nW].image.v = 1;
				}
				graphicOptions.drawMapStructures(VwW[nW], (nI / parScaling) + 53, (vV / parScaling) + 55, -0.5, 0, 0, 1);
			}
			if ((NW.vmV !== undefined) && (NW.nvwnn === undefined)) {
				var nW = mv[3];
				if (WwN[nW] === undefined) {
					WwN[nW] = {
						image: mn.vmv("x" + nW, "'Comic Han Sans MS', sans-serif", "#FFFF00", 30, 250, undefined, 15, 12, undefined, undefined, undefined, undefined, "#000000", 12)
					};
					WwN[nW].image.v = 1;
				}
				graphicOptions.drawMapStructures(WwN[nW], (nI / parScaling) + 53, (vV / parScaling) + 55, -0.5, 0, 0, 1);
			}
			if (NW.nNNnm !== undefined) {
				var NmNmw = Math.floor(mv[3] / 12.8);
				var image = WVVMV[NmNmw];
				if (image.v !== 1) {
					WVVMV[NmNmw] = graphicOptions.createMenuImg(("img/rotten" + NmNmw) + ".png", image);
				} else context.drawImage(image, nI + (0.5 * parScaling), vV, (parScaling * image.width) / 2, (parScaling * image.height) / 2);
			}
		};

		function vmVvn(WW, nI, vV) {
			if (mmmMV[WW] === undefined) {
				mmmMV[WW] = document.createElement("canvas");
				WNnMm[WW] = mmmMV[WW].getContext("2d");
				var mwwWn = mmmMV[WW];
				var MWvmn = WNnMm[WW];
				mwwWn.width = 400;
				mwwWn.height = 148;
				MWvmn.clearRect(0, 0, 400, 148);
				graphicOptions.WVNmv(MWvmn, 0, 0, 400, 148, 10);
				MWvmn.fillStyle = "#000000";
				MWvmn.globalAlpha = 0.5;
				MWvmn.fill();
				MWvmn.globalAlpha = 1;
				Mwmvn(WNnMm[WW], WW);
			}
			var wW = parScaling * 74;
			context.drawImage(mmmMV[WW], nI, vV, parScaling * 190, wW);
		};

		function WvVVM(VwW, WwN, mnm, mWN) {
			if (wm.wM.nVv !== 0) return;
			var Nwv = WWm.Nwv;
			if (wwvww.v !== 1) {
				wwvww = graphicOptions.createMenuImg(wwmMN, wwvww);
				return;
			}
			var mv = wm.wM.Nwv;
			var VmV = mv.length;
			var vM = (wwvww.width * parScaling) / 2;
			var wW = (wwvww.height * parScaling) / 2;
			var MVN = Math.max(300 * parScaling, (var1 - (vM * VmV)) / 2);
			var wvN = (var2 - wW) - (5 * parScaling);
			var nI = MVN;
			var vV = wvN;
			var VWw = (5 * parScaling) + vM;
			if (VmV > 10) {
				mWN.Wv.x = var1 - (69 * parScaling);
				mWN.Wv.y = var2 - (68 * parScaling);
				mWN.nv();
				if (mWN.open === 0) VmV = 10;
			}
			for (var mN = 0; mN < VmV; mN++) {
				var Mv = Nwv[mN];
				if (mv[mN][0] === 0) {
					Mv.Wv.x = nI;
					Mv.Wv.y = vV;
					context.drawImage(wwvww, nI, vV, vM, wW);
				} else MvvvW(Mv, mv[mN], nI, vV, VwW, WwN);
				if (mN === 9) {
					nI = mWN.Wv.x - (5 * parScaling);
					vV = mWN.Wv.y - VWw;
				} else if (mN === 12) {
					nI -= VWw;
					vV = mWN.Wv.y - VWw;
				} else if (mN > 9) vV -= VWw;
				else nI += VWw;
			}
			var mwW = wm.wM.mwW;
			if (((mwW.mwN === 1) && (nmn.state === nmn.MvwwV)) && (mnW.WNw(mwW.x, mwW.y, nmn.x, nmn.y) > (4 * parScaling))) {
				var NW = mv[mwW.id][0];
				if (NW > 0) {
					var image = nvn[NW].nN.image[0];
					if (image.v === 0) image = NVwNv[NW].nN.image[0];
					context.globalAlpha = 0.7;
					var vM = 68 * parScaling;
					context.drawImage(image, (nmn.x * parScaling) - (vM / 2), (nmn.y * parScaling) - (vM / 2), vM, vM);
					context.globalAlpha = 1;
				}
			} else if ((mnm !== -1) && (mv[mnm][0] !== 0)) {
				if (mnm < 10) vmVvn(mv[mnm][0], MVN + (VWw * mnm), wvN - (79 * parScaling));
				else if (mnm < 13) vmVvn(mv[mnm][0], mWN.Wv.x - (200 * parScaling), mWN.Wv.y + (VWw * (-1 + ((10 - mnm) % 3))));
				else vmVvn(mv[mnm][0], (mWN.Wv.x - (200 * parScaling)) - VWw, mWN.Wv.y + (VWw * (-1 + ((10 - mnm) % 3))));
			}
		};

		function NwNwM(nI, vV) {
			var wVM = wm.wM.level;
			if (vvnww[wVM] === undefined) {
				vvnww[wVM] = {
					image: mn.vmv("" + wVM, "'Comic Han Sans MS', sans-serif", "#ffffff", 44, 250, undefined, 18, 15, undefined, undefined, undefined, undefined, "#000000", 15)
				};
				vvnww[wVM].image.v = 1;
			}
			graphicOptions.drawMapStructures(vvnww[wVM], (nI / parScaling) + 234, (vV / parScaling) + 79, 0, 0, 0, 1);
			var WVn = wm.wMw.WVn;
			var lParTrue = 1 - (WVn.MmW / WVn.maxValueOfParam);
			graphicOptions.drawMapStructures(wVvnn, 38 + (nI / parScaling), 37 + (vV / parScaling), Math.PI * lParTrue, 0, 0, 1);
		};
		function drawPlayerStates(nI, vV) {
		  window.XX = nI;
			window.YY = vV;

			var Nv = wm.wMw.Nv;
			var lParTrue = Nv.MmW / Nv.maxValueOfParam;

			let hpEvent = Nv.MmW;
			const HpInd = f => 100 * f / 255;

			window.itog = HpInd(hpEvent).toFixed(1)+"%";

      graphicOptions.fillRect(context, (nI / parScaling) + 14, (vV / parScaling) + 71, lParTrue * 189, 16, nMnVn);
			graphicOptions.fillRect(context, (nI / parScaling) + 14, (vV / parScaling) + 71, lParTrue * 189, 16, nMnVn);
			var nnm = wm.wMw.nnm;
			var lParTrue = nnm.MmW / nnm.maxValueOfParam;
			graphicOptions.fillRect(context, (nI / parScaling) + 13, (vV / parScaling) + 162, 54, -lParTrue * 63, wnVmv);
			var VMW = wm.wMw.VMW;
			var lParTrue = VMW.MmW / VMW.maxValueOfParam;
			graphicOptions.fillRect(context, (nI / parScaling) + 81, (vV / parScaling) + 162, 54, -lParTrue * 63, VNnVW);
			var vVM = wm.wMw.vVM;
			var lParTrue = vVM.MmW / vVM.maxValueOfParam;
			graphicOptions.fillRect(context, (nI / parScaling) + 150, (vV / parScaling) + 162, 54, -lParTrue * 63, vwmVm);
			var vNn = wm.wMw.vNn;
			var lParTrue = vNn.MmW / vNn.maxValueOfParam;
			graphicOptions.fillRect(context, (nI / parScaling) + 226, (vV / parScaling) + 172, 16, -lParTrue * 77, vwwnM);
			var NMvwn = wm.mMWWm();
			var image;
			var wmMnW;
			if (NMvwn >= 10000000) {
				if (WMVvw.v !== 1) {
					WMVvw = graphicOptions.createMenuImg(WWwWV, WMVvw);
					return;
				}
				NMvwn -= 10000000;
				image = WMVvw;
				wmMnW = MwNVW;
			} else {
				if (mNWwv.v !== 1) {
					mNWwv = graphicOptions.createMenuImg(mwwvw, mNWwv);
					return;
				}
				image = mNWwv;
				wmMnW = VnVmW;
			}
			var vM = (parScaling * image.width) / 2;
			var wW = (parScaling * image.height) / 2;
			context.drawImage(image, nI + (100 * parScaling), vV + (14 * parScaling), vM, wW);
			graphicOptions.drawMapStructures(wmMnW, 144.5 + (nI / parScaling), (vV / parScaling) + 56, NMvwn * WNMMV, 0, 0, 1);
		};

		function VwNmv(nI, vV) {
			var NWn = wm.NWn;
			var nNv = wm.nNv;
			var WvMvw = -1;
			if (wm.mWVwN === 1) {
				WvMvw = 1;
				wm.mWVwN = 0;
				MmWVW.clearRect(0, 0, mWMVn, VMVNn);
				for (var mN = 0;
					(mN < NWn.length) && (NWn[mN] !== 0); mN++) {
					var wM = nNv[NWn[mN]];
					if (wm.wM.id === NWn[mN]) WvMvw = 0;
					if (wM.mmn === 0) break;
					if (wM.NVmwV === null) {
						if (wM.id === wm.wM.id) wM.NVmwV = mn.vmv(wM.mmn, "'Comic Han Sans MS', sans-serif", "#D6C823", 40, 350, undefined, 0, 12);
						else wM.NVmwV = mn.vmv(wM.mmn, "'Comic Han Sans MS', sans-serif", "#ffffff", 40, 350, undefined, 0, 12);
					}
					if (wM.mwn === null) {
						if (wM.id === wm.wM.id) wM.mwn = mn.vmv(wM.NVvnW, "'Comic Han Sans MS', sans-serif", "#D6C823", 40, 150, undefined, 5, 12);
						else wM.mwn = mn.vmv(wM.NVvnW, "'Comic Han Sans MS', sans-serif", "#ffffff", 40, 150, undefined, 5, 12);
					}
					if ((wM.NVmwV.width !== 0) && (wM.NVmwV.height !== 0)) MmWVW.drawImage(wM.NVmwV, 90, 114 + (mN * 50), wM.NVmwV.width, wM.NVmwV.height);
					MmWVW.drawImage(wM.mwn, 484, 114 + (mN * 50), wM.mwn.width, wM.mwn.height);
					var image = wwnnm[wM.nnVMN].image;
					if (image.v === 1) MmWVW.drawImage(image, 612, 114 + (mN * 50), image.width, image.height);
				}
				wm.wM.nWWMn = WvMvw;
				if (WvMvw === 1) {
					var image = wwnnm[wm.wM.nnVMN].image;
					if (image.v === 1) MmWVW.drawImage(image, 375, 645, image.width * 1.5, image.height * 1.5);
				}
			}
			var Vw = wm.wM.Vw;
			if ((WvMvw === 1) || ((wm.wM.nWWMn === 1) && (Vw !== wm.wM.NNNNm))) {
				var wM = nNv[wm.wM.id];
				MmWVW.clearRect(480, 657, 112, 60);
				if (Vw !== wm.wM.NNNNm) {
					wm.wM.NNNNm = Vw;
					wM.mwn = mn.vmv(vnw.WWwMn(Vw), "'Comic Han Sans MS', sans-serif", "#ffffff", 40, 150, undefined, 5, 12);
				}
				MmWVW.drawImage(wM.mwn, 484, 662, wM.mwn.width, wM.mwn.height);
			}
			context.drawImage(VNVvv, nI, vV, (mWMVn / 3) * parScaling, (VMVNn / 3) * parScaling);
		};

		function vwnVW(NWMvV, mNV) {
			var vM = MVmVm * parScaling;
			var wW = mmMNw * parScaling;
			var nI = var3 - (vM / 2);
			var vV = Math.max(var4 - (wW / 2), 0);
			var WNm = nI / parScaling;
			var mvw = vV / parScaling;
			var MwvNw = MVmVm / MwwVw;
			var NMMwn = mmMNw / wwNmn;
			mNV.Wv.x = Math.floor((nI + vM) + (0 * parScaling));
			mNV.Wv.y = Math.floor(vV + (0 * parScaling));
			NWMvV.nv();
			var wMvwm = wm.wM.wMvwm;
			var VmV = wMvwm.length / 2;
			if (VmV > 0) {
				wvN = Math.floor((vV / parScaling) + Math.min(Math.max(10, wMvwm[0] * NMMwn), 400));
				MVN = Math.floor((nI / parScaling) + Math.min(Math.max(10, wMvwm[1] * MwvNw), 400));
				graphicOptions.drawMapStructures(mMmVv, MVN, wvN, 0, 0, 0, 1);
				for (var mN = 1; mN < VmV; mN++) {
					wvN = Math.floor((vV / parScaling) + Math.min(Math.max(10, wMvwm[mN * 2] * NMMwn), 400));
					MVN = Math.floor((nI / parScaling) + Math.min(Math.max(10, wMvwm[1 + (mN * 2)] * MwvNw), 400));
					graphicOptions.drawMapStructures(WWNWV, MVN, wvN, 0, 0, 0, 1);
				}
			}
			if (wm.wNN === wm.MNMwn) {
				var vmWvv = WNm + (MVmVm / 2);
				var MNMNm = mvw + (mmMNw / 2);
				graphicOptions.drawMapStructures(NnVvm, vmWvv, MNMNm, 0, 0, 0, 2);
				context.globalAlpha = (NvNnW > 600) ? vnw.mMv.nwW((1200 - NvNnW) / 600) : vnw.mMv.nwW(NvNnW / 600);
				graphicOptions.drawMapStructures(WwwNM, vmWvv, MNMNm, 0, 0, 0, 2);
				context.globalAlpha = 1;
			}
			mNV.nv();
			if ((wm.wM.VVm !== -1) || ((wm.wM.nVv !== 0) && (wm.MNW < 6))) {
				var nNv = nmm.wNn[mNn];
				for (var mN = 0; mN < wm.wM.WwnnN; mN++) {
					var MwVvn = wm.wM.VMWvW[mN];
					if (MwVvn.WmWmM < 0) continue;
					var wM = wm.nNv[MwVvn.id];
					var MVN = Math.floor(WNm + Math.min(Math.max(10, wM.rx * MwvNw), 400));
					var wvN = Math.floor(mvw + Math.min(Math.max(10, wM.ry * MwvNw), 400));
					var angle;
					if (VVn === (wM.VVn + 1)) angle = nNv[wM.nnnNM].angle;
					else angle = wM.x % NnwMW;
					graphicOptions.drawMapStructures(NwMMM, MVN, wvN, angle, 0, 0, 1);
				}
			}
			var MVN = Math.floor((nI / parScaling) + Math.min(Math.max(10, nvv * MwvNw), 400));
			var wvN = Math.floor((vV / parScaling) + Math.min(Math.max(10, NNW * NMMwn), 400));
			graphicOptions.drawMapStructures(mVnwv, MVN, wvN, nmn.angle, 0, 0, 1);
			if (wm.wM.NWMNW > 0) {
				var wM = wm.nNv[wm.wM.MMnnM];
				graphicOptions.drawMapStructures(wwnnm[wM.nnVMN], Math.floor(WNm + Math.min(Math.max(10, wM.rx * MwvNw), 400)), Math.floor(mvw + Math.min(Math.max(10, wM.ry * MwvNw), 400)), 0, 0, 0, 1.25);
			}
		};

		function mnwmN() {
			if (WMW.mVNVN > 0) {
				if (WMW.mVNVN > 2500) context.globalAlpha = vnw.mMv.nwW((3000 - WMW.mVNVN) / 500);
				else if (WMW.mVNVN > 500) context.globalAlpha = 1;
				else context.globalAlpha = vnw.mMv.nwW(WMW.mVNVN / 500);
				if (WMW.vvmnV === 0) graphicOptions.drawMapStructures(vnVMW, var9, vnVMW.image.nNn / 2, 0, 0, 0, 1);
				else if (WMW.vvmnV === 1) graphicOptions.drawMapStructures(NVmnv, var9, NVmnv.image.nNn / 2, 0, 0, 0, 1);
				else if (WMW.vvmnV === 2) graphicOptions.drawMapStructures(WNnnM, var9, WNnnM.image.nNn / 2, 0, 0, 0, 1);
				else if (WMW.vvmnV === 3) graphicOptions.drawMapStructures(WVNMw, var9, WVNMw.image.nNn / 2, 0, 0, 0, 1);
				context.globalAlpha = 1;
				WMW.mVNVN -= var13;
			}
		};

		function VvMwv(nI, vV) {
			if (MWNww.v !== 1) {
				MWNww = graphicOptions.createMenuImg(Wmvmn, MWNww);
				return;
			}
			WWm.VWVvv.Wv.x = nI + (241 * parScaling);
			WWm.VWVvv.Wv.y = vV + (6 * parScaling);
			WWm.wnnwv.Wv.x = nI + (290 * parScaling);
			WWm.wnnwv.Wv.y = vV + (6 * parScaling);
			if ((wm.wM.mNvWw !== 0) || (wm.wM.nvmWV > 0)) {
				if (wm.wM.mNvWw !== 0) {
					if (wm.wM.nvmWV < 333) {
						context.globalAlpha = wm.wM.nvmWV / 333;
						wm.wM.nvmWV += var13;
					}
				} else {
					context.globalAlpha = wm.wM.nvmWV / 333;
					wm.wM.nvmWV = Math.max(0, wm.wM.nvmWV - var13);
				}
				var wM = wm.nNv[wm.wM.mNvWw];
				if (wM.NWm === null) wM.NWm = mn.vmv(wM.mmn, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
				context.drawImage(MWNww, nI, vV, parScaling * MWNww.wMv, parScaling * MWNww.nNn);
				if ((wM.NWm.width !== 0) && (wM.NWm.height !== 0)) context.drawImage(wM.NWm, nI + (20 * parScaling), vV + (6 * parScaling), wM.NWm.wMv * parScaling, wM.NWm.nNn * parScaling);
				WWm.VWVvv.nv();
				WWm.wnnwv.nv();
				if (wm.wM.nvmWV < 333) context.globalAlpha = 1;
			}
		};

		function WmNmw(nI, vV, nVNWn) {
			wm.wM.wMvmN -= var13;
			var MwN = Math.max(0, Math.floor(wm.wM.wMvmN / 1000));
			if (MwN < 3000) {
				graphicOptions.drawMapStructures(wNvnV, (nI / parScaling) + 51, (vV / parScaling) + 145, 0, 0, 0, 1);
				if (wNNWn[MwN] === undefined) {
					if ((nVNWn === 1) && (wNNWn[MwN + 1] !== undefined)) wNNWn[MwN + 1] = undefined;
					var mnvWv = Math.floor(MwN / 60);
					var vVNvm = MwN % 60;
					wNNWn[MwN] = {
						image: mn.vmv((((((mnvWv < 10) ? "0" : "") + mnvWv) + ":") + ((vVNvm < 10) ? "0" : "")) + vVNvm, "'Comic Han Sans MS', sans-serif", "#FF0000", 38, 100, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12)
					};
					wNNWn[MwN].image.v = 1;
				}
				graphicOptions.drawMapStructures(wNNWn[MwN], (nI / parScaling) + 60, (vV / parScaling) + 145, 0, 0, 0, 1);
			}
		};

		function Wwmvm(nI, vV) {
			graphicOptions.drawMapStructures(WMvVm, ((nI / parScaling) + var7) - 63, 25 + (vV / parScaling), 0, 0, 0, 1);
			if (MNW[wm.MNW] === undefined) {
				MNW[wm.MNW] = {
					image: mn.vmv("#" + wm.MNW, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 60, 140)
				};
				MNW[wm.MNW].image.v = 1;
			}
			graphicOptions.drawMapStructures(MNW[wm.MNW], ((nI / parScaling) + var7) - 50, 25 + (vV / parScaling), 0, 0, 0, 1);
		};

		function vNvvm(nI, vV) {
			VvMwv(nI + (250 * parScaling), vV);
			if (mVN.v !== 1) {
				mVN = graphicOptions.createMenuImg(MmwnV, mVN);
				return;
			}
			var mWWnw = MNMmV * nvv;
			var wVmmn = MNMmV * NNW;
			var mvN = Math.min(Math.max(0, mWWnw - vmM), VVWnm);
			var wWM = Math.min(Math.max(0, wVmmn - vmM), VVWnm);
			var vM = vmM * parScaling;
			context.drawImage(mVN, mvN, wWM, vnvmw, vnvmw, nI, vV, vM, vM);
			if (wm.wNN === wm.mWwvm) {
				if (wm.wM.nVv !== 0) Wwmvm(-255, vV);
				else WmNmw(nI + 50, vV, 1);
			}
			if (wm.wNN === wm.MNMwn) {
				var mwmVw = wm.wM.MwNmV[Math.floor(NNW / wvvvM)][Math.floor(nvv / wvvvM)];
				if (((mwmVw !== 0) && (mwmVw < wm.wM.WNWVM)) && (wm.wM.WNWVM !== 8)) {
					WvMVW = Math.min(1000, WvMVW + var13);
					context.globalAlpha = vnw.mMv.VMN(WvMVW / 500);
					graphicOptions.drawMapStructures(wVmVM, var9, 58, 0, 0, 0, 1);
					context.globalAlpha = 1;
				} else if (WvMVW > 0) {
					WvMVW = Math.max(0, WvMVW - var13);
					context.globalAlpha = vnw.mMv.VMN(WvMVW / 500);
					graphicOptions.drawMapStructures(wVmVM, var9, 58, 0, 0, 0, 1);
					context.globalAlpha = 1;
				}
				context.drawImage(NnVvm.image, mvN / 2, wWM / 2, vmM, vmM, nI, vV, vM, vM);
				context.globalAlpha = (NvNnW > 600) ? vnw.mMv.nwW((1200 - NvNnW) / 600) : vnw.mMv.nwW(NvNnW / 600);
				NvNnW = (NvNnW + var13) % 1200;
				context.drawImage(WwwNM.image, mvN / 2, wWM / 2, vmM, vmM, nI, vV, vM, vM);
				context.globalAlpha = 1;
				Wwmvm(0, vV);
				WmNmw(nI, vV, 0);
			} else if (wm.wM.nVv === 0) {
				if (wm.wMw.WVn.wmw === 1) {
					wvNww = Math.min(1000, wvNww + var13);
					context.globalAlpha = vnw.mMv.VMN(wvNww / 500);
					graphicOptions.drawMapStructures(nMvnv, var9, 58, 0, 0, 0, 1);
					context.globalAlpha = 1;
				} else if (wvNww > 0) {
					wvNww = Math.max(0, wvNww - var13);
					context.globalAlpha = vnw.mMv.VMN(wvNww / 500);
					graphicOptions.drawMapStructures(nMvnv, var9, 58, 0, 0, 0, 1);
					context.globalAlpha = 1;
				}
			}
			if (mvN >= VVWnm) mWWnw = Math.min(((mWWnw - WMnNV) / 2) + mVvNM, vmM - 8);
			else if (mWWnw < vmM) mWWnw = Math.max(15, mWWnw / 2);
			else mWWnw = mVvNM;
			if (wWM >= VVWnm) wVmmn = Math.min(((wVmmn - WMnNV) / 2) + mVvNM, vmM - 8);
			else if (wVmmn < vmM) wVmmn = Math.max(15, wVmmn / 2);
			else wVmmn = mVvNM;
			var WNm = nI / parScaling;
			var mvw = vV / parScaling;
			if ((wm.wM.VVm !== -1) || ((wm.wM.nVv !== 0) && (wm.MNW < 6))) {
				var nNv = nmm.wNn[mNn];
				for (var mN = 0; mN < wm.wM.WwnnN; mN++) {
					var MwVvn = wm.wM.VMWvW[mN];
					if (MwVvn.WmWmM < 0) continue;
					var wM = wm.nNv[MwVvn.id];
					var angle;
					if (VVn === (wM.VVn + 1)) {
						var WMv = nNv[wM.nnnNM];
						if (mnW.nmw(wM.rx, wM.ry, WMv.x, WMv.y) < 1000) {
							wM.rx = WMv.x;
							wM.ry = WMv.y;
						}
						wM.x = WMv.x;
						wM.y = WMv.y;
						angle = WMv.angle;
					} else var angle = wM.x % NnwMW;
					var MVN = WNm + Math.max(15, Math.min(vmM - 15, (mWWnw - 3) + ((wM.rx - nvv) * MNMmV)));
					var wvN = mvw + Math.max(15, Math.min(vmM - 15, (wVmmn - 3) + ((wM.ry - NNW) * MNMmV)));
					graphicOptions.drawMapStructures(NwMMM, MVN, wvN, angle, 0, 0, 1);
				}
			}
			if (wm.wM.NWMNW > 0) {
				var wM = wm.nNv[wm.wM.MMnnM];
				if (VVn === (wM.VVn + 1)) {
					var nNv = nmm.wNn[mNn];
					var WMv = nNv[wM.nnnNM];
					if (mnW.nmw(wM.rx, wM.ry, WMv.x, WMv.y) < 1000) {
						wM.rx = WMv.x;
						wM.ry = WMv.y;
					}
					wM.x = WMv.x;
					wM.y = WMv.y;
				}
				graphicOptions.drawMapStructures(wwnnm[wM.nnVMN], WNm + Math.max(15, Math.min(vmM - 15, (mWWnw - 3) + ((wM.rx - nvv) * MNMmV))), mvw + Math.max(15, Math.min(vmM - 15, (wVmmn - 3) + ((wM.ry - NNW) * MNMmV))), 0, 0, 0, 1.25);
			}
			var MVN = WNm + (mWWnw - 3);
			var wvN = mvw + (wVmmn - 3);
			graphicOptions.drawMapStructures(mVnwv, MVN, wvN, nmn.angle, 0, 0, 1);
			if ((wm.wM.nVv === 0) && ((wm.wM.nMV > 0) || (MVw.Wnn > 0))) {
				var Mm = (MVw.Mm + var13) % 1000;
				MVw.Mm = Mm;
				if (MVw.Mm < 500) nI += 260 + (15 * vnw.mMv.nwW(Mm / 500));
				else nI += 260 + (15 * vnw.mMv.nwW((1000 - Mm) / 500));
				context.globalAlpha = vnw.mMv.VMN(MVw.Wnn);
				graphicOptions.drawMapStructures(MVw, nI, vV + 31, 0, 0, 0, 1);
				context.globalAlpha = 1;
				if ((wm.wM.nMV <= 0) || (WWm.wWV() === 1)) MVw.Wnn = Math.max(0, MVw.Wnn - (var13 / 500));
				else if (MVw.Wnn < 1) MVw.Wnn = Math.min(1, MVw.Wnn + (var13 / 500));
			}
		};
		var Mvn = "";
		var wNwVm = null;

		function wVNnm(mNV, wVmwM, NvVnV, VNWWW, VMNmn, wMMnn, VnvNN, VmMvw) {
			var nI = 0;
			var vV = 0;
			if (wm.wM.VVm === -1) {
				var NMwwv = 1;
				if (WWm.Mvn.length === 0) NMwwv = 0;
				else {
					for (var mN = 0; mN < wm.wVV.length; mN++) {
						if (wm.wVV[mN].name === WWm.Mvn) {
							NMwwv = 0;
							break;
						}
					}
				}
				wm.wM.NMwwv = NMwwv;
				nI = wVmwM.Wv.x;
				vV = wVmwM.Wv.y;
				wVmwM.nv();
				mNV.Wv.x = nI + (513 * parScaling);
				mNV.Wv.y = vV + (2 * parScaling);
				if (Mvn !== WWm.Mvn) {
					Mvn = WWm.Mvn;
					wNwVm = mn.vmv(Mvn, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 30, 400);
				}
				if ((wNwVm !== null) && (Mvn.length !== 0)) {
					graphicOptions.fillRect(context, (nI / parScaling) + 39, (vV / parScaling) + 14, 122, 16.5, "#000000");
					context.drawImage(wNwVm, nI + (35 * parScaling), vV + (14.5 * parScaling), wNwVm.wMv * parScaling, wNwVm.nNn * parScaling);
				}
				VMNmn.Wv.x = nI + (172 * parScaling);
				VMNmn.Wv.y = vV + (6 * parScaling);
				if ((NMwwv === 0) || ((window.Date.now() - wm.wM.Nwvnn) < 30500)) {
					VMNmn.MVv(mn.Vmw);
					context.globalAlpha = 0.5;
					VMNmn.nv();
					context.globalAlpha = 1;
				} else VMNmn.nv();
				var NM = 0;
				for (var mN = 0; mN < 18; mN++) {
					var VVm = wm.wVV[mN];
					if (VVm.mwvNm === 0) continue;
					if (VVm.label === null) VVm.label = mn.vmv(VVm.name, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 30, 400);
					context.drawImage(VVm.label, nI + ((20 + ((NM % 3) * 163)) * parScaling), vV + ((58.5 + (Math.floor(NM / 3) * 36)) * parScaling), VVm.label.wMv * parScaling, VVm.label.nNn * parScaling);
					var Mv = WWm.join[NM];
					Mv.Wv.x = nI + ((84 + ((NM % 3) * 163)) * parScaling);
					Mv.Wv.y = vV + ((48 + (Math.floor(NM / 3) * 36)) * parScaling);
					if ((window.Date.now() - wm.wM.MNnwM) < 10500) {
						Mv.MVv(mn.Vmw);
						context.globalAlpha = 0.5;
						Mv.nv();
						context.globalAlpha = 1;
					} else Mv.nv();
					NM++;
				}
			} else {
				nI = NvVnV.Wv.x;
				vV = NvVnV.Wv.y;
				var VVm = wm.wVV[wm.wM.VVm];
				if (VVm.label === null) VVm.label = mn.vmv(VVm.name, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 30, 400);
				context.drawImage(VVm.label, nI + (144 * parScaling), vV + (13 * parScaling), VVm.label.wMv * parScaling, VVm.label.nNn * parScaling);
				NvVnV.nv();
				mNV.Wv.x = nI + (512 * parScaling);
				mNV.Wv.y = vV + (34.5 * parScaling);
				if (wm.wM.wmWWW === 1) {
					if (wm.wM.vmWWm === 0) {
						wMMnn.Wv.x = nI + (259 * parScaling);
						wMMnn.Wv.y = vV + (5 * parScaling);
						wMMnn.nv();
					} else {
						VnvNN.Wv.x = nI + (259 * parScaling);
						VnvNN.Wv.y = vV + (5 * parScaling);
						VnvNN.nv();
					}
					VmMvw.Wv.x = nI + (311.5 * parScaling);
					VmMvw.Wv.y = vV + (5 * parScaling);
					VmMvw.nv();
					var NM = 0;
					for (var mN = 0; mN < wm.nNv.length; mN++) {
						var wM = wm.nNv[mN];
						if ((VVm.Mvv !== wM.wnV) || (wM.VVm !== VVm.id)) continue;
						if (wM.NWm === null) wM.NWm = mn.vmv(wM.mmn, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
						if ((wM.NWm.width !== 0) && (wM.NWm.height !== 0)) context.drawImage(wM.NWm, nI + ((26 + ((NM % 3) * 166.5)) * parScaling), vV + ((53 + (Math.floor(NM / 3) * 29.5)) * parScaling), (wM.NWm.wMv * parScaling) / 2.2, (wM.NWm.nNn * parScaling) / 2.2);
						var Mv = WWm.vVmwV[NM];
						Mv.Wv.x = nI + ((132 + ((NM % 3) * 166.5)) * parScaling);
						Mv.Wv.y = vV + ((48.5 + (Math.floor(NM / 3) * 29.5)) * parScaling);
						if (((window.Date.now() - wm.wM.MNnwM) < 10500) || (wM.id === wm.wM.id)) {
							Mv.MVv(mn.Vmw);
							context.globalAlpha = 0.5;
							Mv.nv();
							context.globalAlpha = 1;
						} else Mv.nv();
						NM++;
					}
				} else {
					VNWWW.Wv.x = nI + (311.5 * parScaling);
					VNWWW.Wv.y = vV + (5 * parScaling);
					VNWWW.nv();
					var NM = 0;
					for (var mN = 0; mN < wm.nNv.length; mN++) {
						var wM = wm.nNv[mN];
						if ((VVm.Mvv !== wM.wnV) || (wM.VVm !== VVm.id)) continue;
						if (wM.NWm === null) wM.NWm = mn.vmv(wM.mmn, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
						if ((wM.NWm.width !== 0) && (wM.NWm.height !== 0)) context.drawImage(wM.NWm, nI + ((26 + ((NM % 3) * 166.5)) * parScaling), vV + ((53 + (Math.floor(NM / 3) * 29.5)) * parScaling), (wM.NWm.wMv * parScaling) / 2.2, (wM.NWm.nNn * parScaling) / 2.2);
						NM++;
					}
				}
			}
			mNV.nv();
		};

		function NnNMv(MMnvw, mNV, VwW, WwN) {
			MMnvw.nv();
			var nI = MMnvw.Wv.x;
			var vV = MMnvw.Wv.y;
			mNV.Wv.x = nI + (161 * parScaling);
			mNV.Wv.y = vV + (0 * parScaling);
			mNV.nv();
			var VNM = wm.wM.VNM;
			var MVN;
			var wvN = vV + (14 * parScaling);
			var Mv = WWm.VNM;
			for (var mN = 0; mN < 4; mN++) {
				if ((mN % 2) === 0) {
					MVN = nI + (12.5 * parScaling);
					if (mN === 2) wvN += 71 * parScaling;
				} else MVN += 72 * parScaling;
				if (VNM[mN][0] === 0) continue;
				MvvvW(Mv[mN], VNM[mN], MVN, wvN, VwW, WwN);
			}
		};

		function NVmwm() {
			var nwnnm = vnv;
			if (nwnnm > 0) graphicOptions.fillRect(context, 0, 0, nwnnm, var8, NVnNV);
			else nwnnm = 0;
			var NWnMn = WNN;
			if (NWnMn > 0) graphicOptions.fillRect(context, nwnnm, 0, var7 - nwnnm, NWnMn, NVnNV);
			else NWnMn = 0;
			var mwvwm = (-vnv + var7) - MwwVw;
			if (mwvwm > 0) graphicOptions.fillRect(context, var7 - mwvwm, NWnMn, mwvwm, var8 - NWnMn, NVnNV);
			else mwvwm = 0;
			var nmvNn = (-WNN + var8) - wwNmn;
			if (nmvNn > 0) graphicOptions.fillRect(context, nwnnm, var8 - nmvNn, (var7 - nwnnm) - mwvwm, nmvNn, NVnNV);
		};

		function Mwmvn(mmmMV, WW) {
			var Mmw = nvn[WW];
			var wn = Mmw.detail;
			var vWn = mn.vmv(wn.name, "'Comic Han Sans MS', sans-serif", "#D3BB43", 30, 400);
			mmmMV.drawImage(vWn, 20, 20);
			vWn = mn.vmv(wn.description, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 16, 400);
			mmmMV.drawImage(vWn, 20, 68);
			if (Mmw.wVN === 21) {
				if (Mmw.VMn > 0) {
					vWn = mn.vmv((("Damage: " + Mmw.NwW) + "/") + Mmw.VMn, "'Comic Han Sans MS', sans-serif", "#D3BB43", 24, 400);
					mmmMV.drawImage(vWn, 20, 101);
				} else {
					vWn = mn.vmv("Life: " + Mmw.Nv, "'Comic Han Sans MS', sans-serif", "#D3BB43", 24, 400);
					mmmMV.drawImage(vWn, 20, 101);
				}
			} else if ((Mmw.wVN !== undefined) && (Mmw.wVN !== 0)) {
				var Wmw = "";
				var Vn = mvn[mNn].mMvVV[Mmw.wVN];
				if (Vn.NwW !== undefined) {
					Wmw = "Damage: " + ((Vn.NnMwM === undefined) ? Vn.NwW : Vn.NnMwM);
				} else {
					if (Vn.nnm !== 0) Wmw += ("Food: " + Vn.nnm) + " ";
					if (Vn.nWV < 0) Wmw += ("Damage: " + Vn.nWV) + " ";
					else if (Vn.nWV > 0) Wmw += ("Heal: " + Vn.nWV) + " ";
					if (Vn.mWV !== 0) Wmw += "Energy: " + Vn.mWV;
				}
				vWn = mn.vmv(Wmw, "'Comic Han Sans MS', sans-serif", "#D3BB43", 24, 400);
				mmmMV.drawImage(vWn, 20, 101);
			} else if (Mmw.MNw !== undefined) {} else {
				vWn = mn.vmv("Cannot be equipped", "'Comic Han Sans MS', sans-serif", "#FFFFFF", 17, 400);
				mmmMV.drawImage(vWn, 20, 108);
			}
		};

		function nvmVN(VnVWN, mNV, nVV, mvvNW, MNVWm, WNNvN, vmm, mvvVn, VwW, WwN, nMnMM, NvnmV, nmWWw, VMMNm) {
			VnVWN.nv();
			var nI = VnVWN.Wv.x;
			var vV = VnVWN.Wv.y;
			var WNm = nI / parScaling;
			var mvw = vV / parScaling;
			mNV.Wv.x = nI + (594 * parScaling);
			mNV.Wv.y = vV + (0 * parScaling);
			mNV.nv();
			var mvW = wm.wM.mvW;
			var NvmWW = wm.wM.NvmWW;
			var vnW = wm.wM.wvV;
			var VMV = wm.wM.wmn;
			for (var mN = 0; mN < nVV.length; mN++) {
				var Mv = nVV[mN];
				if (mN === vnW) Mv.MVv(mn.mNN);
				Mv.Wv.x = ((10 * parScaling) + nI) + ((mN * 47) * parScaling);
				Mv.Wv.y = vV - (40 * parScaling);
				Mv.nv();
			}
			var NM = 0;
			for (mN = 0; mN < vmm.length; mN++) {
				if ((mN === VMV) && (wm.wM.vVw === 1)) {} else if ((mN !== wm.wM.vwvnm) && (mN !== 0)) continue;
				var Mv = vmm[mN];
				if (mN === VMV) Mv.MVv(mn.mNN);
				Mv.Wv.x = nI - (40 * parScaling);
				Mv.Wv.y = ((10 * parScaling) + vV) + ((NM * 43) * parScaling);
				Mv.nv();
				NM++;
			}
			mvvVn.Wv.x = nI + (364 * parScaling);
			mvvVn.Wv.y = vV + (27 * parScaling);
			mvvVn.nv();
			var vNN = WWm.vNN;
			var VmV = wm.wM.nMWNN;
			var vM = 49 * parScaling;
			var wW = 49 * parScaling;
			var VWw = 58 * parScaling;
			var nmWvm = 30 * parScaling;
			var vmMMm = 34 * parScaling;
			var VN = 1;
			if (nwMVW < 500) {
				VN += 0.08 * vnw.mMv.VMN(nwMVW / 500);
				nwMVW += var13;
			} else {
				VN += 0.08 * vnw.mMv.nVw(1 - ((nwMVW - 500) / 500));
				nwMVW += var13;
				if (nwMVW > 1000) nwMVW = 0;
			}
			VN = Math.max(1, Math.min(1.08, VN));
			for (mN = 0; mN < VmV; mN++) {
				var Mv = vNN[mN];
				Mv.Wv.x = (nmWvm + nI) + ((mN % 5) * VWw);
				Mv.Wv.y = (vmMMm + vV) + (Math.floor(mN / 5) * VWw);
				var WvmMw = mvW[mN];
				if (WvmMw === 0) {
					context.globalAlpha = 0.45;
					Mv.nv();
					context.globalAlpha = 1;
				} else if (WvmMw === 2) {
					Mv.MVv(mn.WmMVm);
					Mv.nv();
				} else {
					context.globalAlpha = 0.6;
					graphicOptions.drawMapStructures(mMwmM, (Mv.Wv.x / parScaling) + 24.5, (Mv.Wv.y / parScaling) + 24.5, 0, 0, 0, VN);
					context.globalAlpha = 1;
					Mv.nv();
				}
			}
			var wmW = 0;
			if (wm.wM.wvV === -1) {
				if (wm.wM.vVw === 1) {
					mvvNW.Wv.x = nI + (454 * parScaling);
					mvvNW.Wv.y = vV + (153 * parScaling);
					if (((wm.wM.mvW[wm.wM.WMNvw] === 1) && (wm.wM.Vv.VmV < 4)) && (wm.wM.Vv.mWm !== 0)) mvvNW.nv();
					else {
						context.globalAlpha = 0.5;
						mvvNW.MVv(mn.Vmw);
						mvvNW.nv();
						context.globalAlpha = 1;
					}
				} else if (wm.wM.VWnwv === 0) {
					mvvNW.Wv.x = nI + (454 * parScaling);
					mvvNW.Wv.y = vV + (153 * parScaling);
					if (wm.wM.mvW[wm.wM.WMNvw] === 1) mvvNW.nv();
					else {
						context.globalAlpha = 0.5;
						mvvNW.MVv(mn.Vmw);
						mvvNW.nv();
						context.globalAlpha = 1;
					}
				} else {
					MNVWm.Wv.x = nI + (454 * parScaling);
					MNVWm.Wv.y = vV + (153 * parScaling);
					MNVWm.nv();
				}
				if (NwwmW.v !== 1) {
					NwwmW = graphicOptions.createMenuImg(NMVnW, NwwmW);
					return;
				}
				if (wm.wM.vVw === 1) {
					if ((wm.wM.Vv.time !== 0) && (wm.wM.Vv.mWm !== 0)) {
						wmW = wm.wM.Vv.time - window.Date.now();
						if (wmW < 0) wm.wM.Vv.time = 0;
						wmW = vnw.mMv.nwW(1 - (wmW / wm.wM.Vv.wmvVV));
					}
				} else if (wm.wM.VWnwv !== 0) {
					wmW = wm.wM.VWnwv - window.Date.now();
					if (wmW < 0) wm.wM.VWnwv = 0;
					wmW = vnw.mMv.nwW(1 - (wmW / wm.wM.mMVvM));
				}
				wmW = Math.min(1, Math.max(0, wmW));
				vM = (parScaling * NwwmW.width) / 2;
				wW = (parScaling * NwwmW.height) / 2;
				var vmwWw = nI + (356 * parScaling);
				var nVnmw = vV + (206 * parScaling);
				context.fillStyle = "#A29742";
				VWw = 3 * parScaling;
				nmWvm = 2 * VWw;
				context.fillRect(Math.floor(vmwWw + VWw), Math.floor(nVnmw + VWw), Math.floor((vM - nmWvm) * wmW), Math.floor(wW - nmWvm));
				context.drawImage(NwwmW, vmwWw, nVnmw, vM, wW);
			} else {
				var MMNwv = wm.wM.mvW[wm.wM.WMNvw];
				WNNvN.Wv.x = nI + (454 * parScaling);
				WNNvN.Wv.y = vV + (153 * parScaling);
				if (MMNwv === 1) WNNvN.nv();
				else if (MMNwv === 0) {
					context.globalAlpha = 0.5;
					WNNvN.MVv(mn.Vmw);
					WNNvN.nv();
					context.globalAlpha = 1;
					if (wm.wM.Wvnwn !== nvVmV) {
						nmmwM.clearRect(0, 0, 420, 148);
						nvVmV = wm.wM.Wvnwn;
						var wn = nvn[nvVmV].detail;
						var nMnvv = 20;
						if (wn.level > wm.wM.level) {
							var wwn = mn.vmv(("Require level " + wn.level) + " or higher", "'Comic Han Sans MS', sans-serif", "#D8BA3D", 30, 600);
							nmmwM.drawImage(wwn, 20, nMnvv);
							nMnvv += 50;
						}
						if ((wn.WvWvV !== -1) && (wm.wM.mWwnw[wn.WvWvV] === undefined)) {
							var wwn = mn.vmv(("Unlock " + nvn[wn.WvWvV].detail.name) + " before", "'Comic Han Sans MS', sans-serif", "#D8BA3D", 30, 600);
							nmmwM.drawImage(wwn, 20, nMnvv);
							nMnvv += 50;
						}
						if (wm.wM.nMV < wn.nMnmm) {
							var wwn = mn.vmv((("Cost " + wn.nMnmm) + " skill point") + ((wn.nMnmm !== 1) ? "s" : ""), "'Comic Han Sans MS', sans-serif", "#D8BA3D", 30, 600);
							nmmwM.drawImage(wwn, 20, nMnvv);
						}
					}
					context.drawImage(MMnNM, nI + (356 * parScaling), vV + (211 * parScaling), (parScaling * MMnNM.width) / 2, (parScaling * MMnNM.height) / 2);
				} else {
					WNNvN.MVv(mn.mNN);
					WNNvN.nv();
				}
			}
			if (wm.wM.vVw === 1) {
				var nW = wm.wM.Vv.mWm;
				if (nW >= 0) {
					var Mv;
					if (((VMV === Mw.wnn) || (VMV === Mw.MWn)) || (VMV === Mw.WMm)) Mv = NvnmV;
					else if (VMV === Mw.nmV) Mv = nmWWw;
					else Mv = nMnMM;
					Mv.Wv.x = nI + (532 * parScaling);
					Mv.Wv.y = vV + (153 * parScaling);
					if (wm.wM.Vv.mWm !== 255) Mv.nv();
					else {
						context.globalAlpha = 0.5;
						Mv.MVv(mn.Vmw);
						Mv.nv();
						context.globalAlpha = 1;
					}
					if (WwN[nW] === undefined) {
						WwN[nW] = {
							image: mn.vmv("x" + nW, "'Comic Han Sans MS', sans-serif", "#FFFF00", 30, 250, undefined, 15, 12, undefined, undefined, undefined, undefined, "#000000", 12)
						};
						WwN[nW].image.v = 1;
					}
					graphicOptions.drawMapStructures(WwN[nW], (Mv.Wv.x / parScaling) + 42, (Mv.Wv.y / parScaling) + 42, -0.5, 0, 0, 0.9);
				}
				var MNv = WWm.MNv;
				var Wnwmn = wm.wM.Vv.Wv;
				VmV = wm.wM.Vv.VmV;
				vM = 40 * parScaling;
				wW = 40 * parScaling;
				VWw = 62 * parScaling;
				nmWvm = 356 * parScaling;
				vmMMm = 237 * parScaling;
				for (var mN = 0; mN < VmV; mN++) {
					var Mv = MNv[mN];
					if (mN === Wnwmn) {
						if (wmW !== 0) {
							context.globalAlpha = 0.6;
							graphicOptions.drawMapStructures(mMwmM, (Mv.Wv.x / parScaling) + 20, (Mv.Wv.y / parScaling) + 20, 0, 0, 0, 0.85 * Math.max(0.01, Math.min(1, wmW)));
							context.globalAlpha = 1;
						}
					} else if (mN < Wnwmn) {
						context.globalAlpha = 0.6;
						graphicOptions.drawMapStructures(mMwmM, (Mv.Wv.x / parScaling) + 20, (Mv.Wv.y / parScaling) + 20, 0, 0, 0, VN * 0.85);
						context.globalAlpha = 1;
					}
					Mv.Wv.x = (nmWvm + nI) + (mN * VWw);
					Mv.Wv.y = vmMMm + vV;
					Mv.nv();
				}
			}
			var VVvMm = WWm.VVvMm;
			VmV = wm.wM.nmwMW;
			VWw = 45 * parScaling;
			nmWvm = 356 * parScaling;
			vmMMm = 151 * parScaling;
			for (var mN = 0; mN < VmV; mN++) {
				var Mv = VVvMm[mN];
				Mv.Wv.x = (nmWvm + nI) + (mN * VWw);
				Mv.Wv.y = vmMMm + vV;
				Mv.nv();
			}
			if (wm.wM.nMV !== vwNwM) {
				WWNmm.clearRect(0, 0, 280, 50);
				vwNwM = wm.wM.nMV;
				var wwn = mn.vmv("SKILL POINT: " + vwNwM, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 32, 400);
				WWNmm.drawImage(wwn, 24, 12);
			}
			context.drawImage(nMV, nI + (455 * parScaling), vV + (378 * parScaling), (parScaling * nMV.width) / 2, (parScaling * nMV.height) / 2);
			if (wm.wM.Wvnwn !== mvnWW) {
				NWMMN.clearRect(0, 0, 280, 148);
				mvnWW = wm.wM.Wvnwn;
				Mwmvn(NWMMN, mvnWW);
			}
			context.drawImage(mvVnm, nI + (439 * parScaling), vV + (24 * parScaling), (parScaling * mvVnm.width) / 2, (parScaling * mvVnm.height) / 2);
			if ((wm.wM.nMV > 0) || (MWV.Wnn > 0)) {
				var Mm = (MWV.Mm + var13) % 1000;
				MWV.Mm = Mm;
				var wvN = vV / parScaling;
				if (MWV.Mm < 500) wvN += -62 - (15 * vnw.mMv.nwW(Mm / 500));
				else wvN += -62 - (15 * vnw.mMv.nwW((1000 - Mm) / 500));
				context.globalAlpha = vnw.mMv.VMN(MWV.Wnn);
				graphicOptions.drawMapStructures(MWV, 266 + (VnVWN.Wv.x / parScaling), wvN, 0, 0, 0, 1);
				context.globalAlpha = 1;
				if (wm.wM.nMV <= 0) MWV.Wnn = Math.max(0, MWV.Wnn - (var13 / 500));
				else if (MWV.Wnn < 1) MWV.Wnn = Math.min(1, MWV.Wnn + (var13 / 500));
			}
			var Mnw = WWm.Mnw;
			VmV = wm.wM.nMWwV;
			vM = 40 * parScaling;
			wW = 40 * parScaling;
			VWw = 45 * parScaling;
			nmWvm = 356 * parScaling;
			vmMMm = 107 * parScaling;
			for (var mN = 0; mN < VmV; mN++) {
				var Mv = Mnw[mN];
				Mv.Wv.x = (nmWvm + nI) + (mN * VWw);
				Mv.Wv.y = vmMMm + vV;
				var nW = Math.abs(NvmWW[mN]);
				if (VwW[nW] === undefined) {
					VwW[nW] = {
						image: mn.vmv("x" + nW, "'Comic Han Sans MS', sans-serif", "#ffffff", 30, 250, undefined, 15, 12, undefined, undefined, undefined, undefined, "#000000", 12)
					};
					VwW[nW].image.v = 1;
				}
				if (NvmWW[mN] < 0) {
					context.globalAlpha = 0.45;
					Mv.nv();
					graphicOptions.drawMapStructures(VwW[nW], (Mv.Wv.x / parScaling) + 30, (Mv.Wv.y / parScaling) + 32, -0.5, 0, 0, 0.9);
					context.globalAlpha = 1;
				} else {
					Mv.nv();
					graphicOptions.drawMapStructures(VwW[nW], (Mv.Wv.x / parScaling) + 30, (Mv.Wv.y / parScaling) + 32, -0.5, 0, 0, 0.9);
				}
				if ((VMMNm === mN) && (wm.wM.mwMNW[mN] > 0)) vmVvn(wm.wM.mwMNW[mN], Mv.Wv.x, Mv.Wv.y + (45 * parScaling));
			}
		};

		function MNnNm(wNMnN, vmNMn, nMNWw, nVvmn, VwMmW, MmvVv, NWwNn, NvwMM, MNMVm, vMVwN, mNV, MVmWv, WmnnW, vvvMw) {
			wNMnN.nv();
			var nI = wNMnN.Wv.x;
			var vV = wNMnN.Wv.y;
			mNV.Wv.x = nI + (265 * parScaling);
			mNV.Wv.y = vV + (0 * parScaling);
			mNV.nv();
			VwMmW.Wv.x = nI + (87 * parScaling);
			VwMmW.Wv.y = vV + (15 * parScaling);
			if (Vvv.VNNvV() === 1) VwMmW.MVv(mn.mNN);
			VwMmW.nv();
			MmvVv.Wv.x = nI + (173 * parScaling);
			MmvVv.Wv.y = vV + (15 * parScaling);
			if (Vvv.VNwwV() === 1) MmvVv.MVv(mn.mNN);
			MmvVv.nv();
			nVvmn.Wv.x = nI + (87 * parScaling);
			nVvmn.Wv.y = vV + (62 * parScaling);
			if (graphicOptions.options.MNmVM === 3) nVvmn.MVv(mn.mNN);
			nVvmn.nv();
			nMNWw.Wv.x = nI + (147 * parScaling);
			nMNWw.Wv.y = vV + (62 * parScaling);
			if (graphicOptions.options.MNmVM === 2) nMNWw.MVv(mn.mNN);
			nMNWw.nv();
			vmNMn.Wv.x = nI + (207 * parScaling);
			vmNMn.Wv.y = vV + (62 * parScaling);
			if (graphicOptions.options.MNmVM === 1) vmNMn.MVv(mn.mNN);
			vmNMn.nv();
			NWwNn.Wv.x = nI + (87 * parScaling);
			NWwNn.Wv.y = vV + (117 * parScaling);
			if (audioHandler.options.NNMNW === 1) NWwNn.MVv(mn.mNN);
			NWwNn.nv();
			NvwMM.Wv.x = nI + (147 * parScaling);
			NvwMM.Wv.y = vV + (117 * parScaling);
			if (audioHandler.options.NNMNW === 0) NvwMM.MVv(mn.mNN);
			NvwMM.nv();
			MNMVm.Wv.x = nI + (87 * parScaling);
			MNMVm.Wv.y = vV + (167 * parScaling);
			if (audioHandler.options.NmNnW === 1) MNMVm.MVv(mn.mNN);
			MNMVm.nv();
			vMVwN.Wv.x = nI + (147 * parScaling);
			vMVwN.Wv.y = vV + (167 * parScaling);
			if (audioHandler.options.NmNnW === 0) vMVwN.MVv(mn.mNN);
			vMVwN.nv();
			vvvMw.Wv.x = nI + (87 * parScaling);
			vvvMw.Wv.y = vV + (217 * parScaling);
			if (vMwVv === 0) vvvMw.MVv(mn.mNN);
			vvvMw.nv();
			WmnnW.Wv.x = nI + (147 * parScaling);
			WmnnW.Wv.y = vV + (217 * parScaling);
			if (vMwVv === 1) WmnnW.MVv(mn.mNN);
			WmnnW.nv();
			MVmWv.Wv.x = nI + (207 * parScaling);
			MVmWv.Wv.y = vV + (217 * parScaling);
			if (vMwVv === 2) MVmWv.MVv(mn.mNN);
			MVmWv.nv();
		};

		function mmmnM(VV) {
			var wM = wm.nNv[VV.Nvn];
			if (wM.text.length > 0) {
				for (var mN = 0;
					(mN < wM.text.length) && (mN < 2); mN++) {
					if (!wM.label[mN]) {
						wM.label[mN] = mn.vmv(wM.text[mN], "'Comic Han Sans MS', sans-serif", "#ffffff", 32, 1000, "#000000", 33, 19, undefined, undefined, 0.55, 5);
						wM.nVmNw[mN] = 0;
						wM.wNvnv[mN] = 0;
					}
					if (mN === 1) wM.wNvnv[0] = vnw.mMv.nwW(wM.MVVMN) * 28;
				}
				mVNwm = var13 / 1000;
				wM.nVmNw[0] += mVNwm;
				if (wM.text.length > 1) {
					wM.MVVMN = Math.min(wM.MVVMN + mVNwm, 1);
					if ((wM.nVmNw[0] > 1) && (wM.MVVMN > 0.5)) wM.nVmNw[1] += mVNwm;
				}
				for (var mN = 0;
					(mN < wM.text.length) && (mN < 2); mN++) {
					var Wnn = wM.nVmNw[mN];
					if (Wnn > 0) {
						if (Wnn < 0.25) context.globalAlpha = Wnn * 4;
						else if (Wnn > 4.75) context.globalAlpha = Math.max((5 - Wnn) * 5, 0);
						else context.globalAlpha = 1;
						var vV = 118;
						var image = wM.label[mN];
						context.drawImage(image, 0, 0, image.width, image.height, ((vnv + VV.x) - (image.width / 4)) * parScaling, (((WNN + VV.y) - vV) - wM.wNvnv[mN]) * parScaling, (image.width / 2) * parScaling, (image.height / 2) * parScaling);
						context.globalAlpha = 1;
					}
				}
				if (wM.nVmNw[0] > 5) {
					wM.nVmNw.shift();
					wM.text.shift();
					wM.wNvnv.shift();
					wM.label.shift();
					wM.MVVMN = 0;
				}
			}
		};

		function nvNNN(VV) {
			var wM = wm.nNv[VV.Nvn];
			if (((((VV.Wvn & 255) === 16) && (wm.wM.vnWMW !== 1)) && (VV.Nvn !== wm.wM.id)) && (((wM.VVm === -1) || (wm.wVV[wM.VVm].Mvv !== wM.wnV)) || (wm.wM.VVm !== wM.VVm))) return;
			if (wM.NWm === null) wM.NWm = mn.vmv(wM.mmn, "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
			var image = wM.NWm;
			var vV = 90;
			if (wM.VVm === -1) context.drawImage(image, ((vnv + VV.x) - (image.wMv / 2)) * parScaling, ((WNN + VV.y) - vV) * parScaling, image.wMv * parScaling, image.nNn * parScaling);
			else if (wM.VVm !== -1) {
				var VVm = wm.wVV[wM.VVm];
				if (VVm.Mvv === wM.wnV) {
					if (VVm.VVvvW === null) VVm.VVvvW = mn.vmv(("[" + VVm.name) + "]", "'Comic Han Sans MS', sans-serif", "#FFFFFF", 38, 400, undefined, 16, 25, undefined, undefined, undefined, undefined, "#000000", 12);
					var MVNNV = VVm.VVvvW;
					context.drawImage(MVNNV, ((((vnv + VV.x) - (image.wMv / 2)) - (MVNNV.wMv / 2)) - 0.5) * parScaling, ((WNN + VV.y) - vV) * parScaling, MVNNV.wMv * parScaling, MVNNV.nNn * parScaling);
					if ((image.width !== 0) && (image.height !== 0)) context.drawImage(image, (((vnv + VV.x) - (image.wMv / 2)) + (MVNNV.wMv / 2)) * parScaling, ((WNN + VV.y) - vV) * parScaling, image.wMv * parScaling, image.nNn * parScaling);
				} else wM.VVm = -1;
			}
		};


		function VmNmw() {
			VVmWV = graphicOptions.MmM(VVmWV, (((nM.scale + vmNVw[0]) + vmNVw[1]) + vmNVw[2]) + vmNVw[3], mvnwV);
			wWwvm = parScaling;
			parScaling += VVmWV * parScaling;
			var7 = var1 / parScaling;
			var8 = var2 / parScaling;
		};

		function wnWVV() {
			var nNv = nmm.wNn[mNn];
			var WWV = nmm.border[mNn];
			var VmV = WWV.border;
			for (var mN = 0; mN < VmV; mN++) {
				var wM = nNv[WWV.nNW[mN]];
				if (wM.Nvn === wm.wM.id) {
					if (mnW.nmw(wm.wM.x, wm.wM.y, wM.x, wM.y) < 1) WVVwM = Math.max(0, WVVwM - var13);
					else WVVwM = wwvMN;
					var VVW = mvn[mNn].wVWmw[wM.Wvn & 255];
					var wMw = wm.wMw;
					if (VVW.WVn !== undefined) {
						wMw.WVn.Mmwnv = VVW.WVn;
						wMw.VMW.Mmwnv = VVW.mnn;
					} else {
						wMw.WVn.Mmwnv = 0;
						wMw.VMW.Mmwnv = 0;
					}
					nvv = wM.x;
					NNW = wM.y;
					wm.wM.x = wM.x;
					wm.wM.y = wM.y;
					wm.wM.vNW = wM.mN;
					wm.wM.nwm = wM.NM;
					wm.wM.WMV = (mvn[mNn].mMvVV[(wM.Wvn >> 8) & 255].type === 6) ? 1 : 0;
					var wnmNN = Math.min(var12, var11);
					if (nmn.WNw > wnmNN) wnmNN = mVVmm * Math.min((nmn.WNw - wnmNN) / wnmNN, 1);
					else wnmNN = 0;
					var nI = wnmNN * Math.cos(nmn.angle);
					var vV = wnmNN * Math.sin(nmn.angle);
					mVVwV = graphicOptions.MmM(mVVwV, nI, nVWVv);
					VWnwN = graphicOptions.MmM(VWnwN, vV, nVWVv);
					var wMNWw = 0;
					var VwVMV = 0;
					if (nM.vvwMv > 0) {
						nM.vvwMv -= 1;
						wMNWw += (Math.random() * 6) - 3;
						VwVMV += (Math.random() * 6) - 3;
					}
					if (nM.MWmmv > 0) {
						nM.MWmmv -= 1;
						wMNWw += (Math.random() * 18) - 9;
						VwVMV += (Math.random() * 18) - 9;
					}
					vnv = (((var3 / parScaling) - wM.x) - mVVwV) + wMNWw;
					WNN = (((var4 / parScaling) - wM.y) - VWnwN) + VwVMV;
					mnWVV = wM.x + mVVwV;
					WWNnN = wM.y + VWnwN;
					return;
				}
			}
		};

		function MWvnM() {
			for (var mN = 0; mN < wm.wM.WvN.length; mN++) {
				if (wm.wM.WvN[mN] !== 0) return 0;
			}
			return 1;
		};

		function VmvMM() {
			if (wm.wM.WMV === 1) {
				if ((wm.wM.vMv > 0) && ((wm.wM.wVVVw !== wm.wM.vNW) || (wm.wM.MNNmv !== wm.wM.nwm))) {
					for (var mN = 0; mN < wm.wM.WvN.length; mN++) {
						if (wm.wM.WvN[mN] === 0) {
							wm.wM.WvN[mN] = wm.wM.vMv;
							wm.wM.vWNWM[mN] = wm.wM.wVVVw;
							wm.wM.wnvwv[mN] = wm.wM.MNNmv;
							break;
						}
					}
					wm.wM.vMv = 0;
					wm.wM.wVVVw = wm.wM.vNW;
					wm.wM.MNNmv = wm.wM.nwm;
				}
				wm.wM.vMv = Math.min(wvNwW, wm.wM.vMv + var13);
				for (var mN = 0; mN < wm.wM.WvN.length; mN++) wm.wM.WvN[mN] = Math.max(0, wm.wM.WvN[mN] - var13);
			} else if ((wm.wM.vMv === 0) && (MWvnM() === 1)) return;
			else {
				wm.wM.vMv = Math.max(0, wm.wM.vMv - var13);
				for (var mN = 0; mN < wm.wM.WvN.length; mN++) wm.wM.WvN[mN] = Math.max(0, wm.wM.WvN[mN] - var13);
			}
			if (mmmVm.v !== 1) {
				mmmVm = graphicOptions.createMenuImg(wnvmM, mmmVm);
				return;
			}
			context.globalAlpha = wm.wM.vMv / wvNwW;
			var vV = parScaling * (((wm.wM.wVVVw * vVm) + WNN) + MMn);
			var nI = parScaling * (((wm.wM.MNNmv * vVm) + vnv) + MMn);
			var vM = (parScaling * mmmVm.width) / 2;
			var wW = (parScaling * mmmVm.height) / 2;
			context.drawImage(mmmVm, nI - (vM / 2), vV - (wW / 2), vM, wW);
			context.globalAlpha = 1;
			for (var mN = 0; mN < wm.wM.WvN.length; mN++) {
				if (wm.wM.WvN[mN] > 0) {
					context.globalAlpha = wm.wM.WvN[mN] / wvNwW;
					var vV = parScaling * (((wm.wM.vWNWM[mN] * vVm) + WNN) + MMn);
					var nI = parScaling * (((wm.wM.wnvwv[mN] * vVm) + vnv) + MMn);
					var vM = (parScaling * mmmVm.width) / 2;
					var wW = (parScaling * mmmVm.height) / 2;
					context.drawImage(mmmVm, nI - (vM / 2), vV - (wW / 2), vM, wW);
					context.globalAlpha = 1;
				}
			}
		};

		function mmmMM() {
			var vvWnN = Math.min(mMN.height - mvnwv, Math.max(0, (((mvmwv - mvnwv) / 2) + Math.floor((WWNnN / vVm) - (mvnwv / 2))) + 1));
			var VNNvw = Math.min(mMN.width - VVNmW, Math.max(0, (((nMNNn - VVNmW) / 2) + Math.floor((mnWVV / vVm) - (VVNmW / 2))) + 1));
			var wW = vvWnN + mvnwv;
			var vM = VNNvw + VVNmW;
			for (var mN = vvWnN; mN < wW; mN++) {
				for (var NM = VNNvw; NM < vM; NM++) {
					var VV = mMN.wWnww[mN][NM];
				}
			}
		};

		function wMMwW(VV) {
			var wM = wm.nNv[VV.Nvn];
			if ((wM !== undefined) && (wM.mwnmn.length > 0)) {
				if (wM.WNnmW >= Wwnvm) wM.WNnmW = 0;
				var NN = wM.WNnmW;
				var wVM = wM.NwmwN[0];
				var vW = wM.mwnmn[0];
				if (NN === 0) {
					var WNw = mnW.WNw(VV.x, VV.y, nvv, NNW);
				}
				wM.WNnmW += var13;
				if (wM.WNnmW >= Wwnvm) {
					wM.WNnmW = 0;
					wM.NwmwN.shift();
					wM.mwnmn.shift();
				}
				var image = vnmmw[vW][wVM];
				if (image.v !== 1) {
					vnmmw[vW][wVM] = graphicOptions.createMenuImg((((wMMwv + vW) + "_") + wVM) + ".png", image);
					return;
				}
				var Mm = 0;
				if (NN < MvwMn) {
					var Wmmvw = NN / MvwMn;
					context.globalAlpha = Wmmvw;
					Mm = 15 * (1 - Wmmvw);
				} else if (NN > wMVvw) {
					var VwWMn = (Wwnvm - NN) / (Wwnvm - wMVvw);
					context.globalAlpha = VwWMn;
					Mm = 40 * (VwWMn - 1);
				}
				context.drawImage(image, ((vnv + VV.x) - 120) * parScaling, ((WNN + VV.y) + (Mm - 45)) * parScaling, (image.width * parScaling) / 2, (image.height * parScaling) / 2);
				context.globalAlpha = 1;
			}
		};

		function WmNVw(VV) {
			var wM = wm.nNv[VV.Nvn];
			for (var mN = 0; mN < wM.WwWvn.length; mN++) {
				var Wnn = wM.WwWvn[mN];
				if ((mN > 0) && (Wnn.NN <= 0)) {
					var wwVNM = wM.WwWvn[mN - 1];
					if ((wwVNM.NN > 500) || (wwVNM.NN <= 0)) continue;
				}
				if ((VV.NNV > mvn[mNn].NNV) || (Wnn.NN > 0)) {
					var vMW = mvn[mNn].WwWvn;
					var image = vMW.image;
					if (image.v !== 1) {
						vMW.image = graphicOptions.createMenuImg(vMW.src, vMW.image);
						return;
					}
					if (Wnn.NN <= 0) {
						Wnn.NN = 750;
						Wnn.angle = Math.random() * NnwMW;
						Wnn.x = VV.x;
						Wnn.y = VV.y;
						Wnn.size = 1 + (Math.random() * 0.8);
					} else Wnn.NN -= var13;
					var lParTrue = vnw.mMv.VmN(Math.max(0, Wnn.NN / 750));
					var Nmv = (((parScaling * (Wnn.size + 1)) * lParTrue) * image.width) / 7;
					var wMv = -Nmv / 2;
					context.save();
					context.translate((vnv + Wnn.x) * parScaling, (WNN + Wnn.y) * parScaling);
					context.rotate(Wnn.angle);
					context.globalAlpha = Math.max(0, lParTrue * lParTrue);
					context.drawImage(image, wMv, wMv, Nmv, Nmv);
					context.restore();
				}
			}
		};

		function vVMVm(vMW, Vn, VVW, VV, VM, nI, vV) {
			var wM = wm.nNv[VV.Nvn];
			var nVW = 0;
			var MWm = wM.MWm - nM.vnn;
			var Vvm = wM.Vvm - nM.vnn;
			if (MWm > 0) {
				if (Vvm > 0) nVW = 3;
				else if (wM.Vvm > 0) nVW = 5;
				else nVW = 1;
			} else if (Vvm > 0) nVW = 2;
			else if (wM.Vvm > 0) nVW = 4;
			var MMw = vMW.NWNWv[nVW];
			var NMW = 0;
			var WNvWv = VV.state & 254;
			var mVW = Vn.nvV;
			var wMV = Vn.VNW;
			if (WNvWv === 4) {
				if (wM.MMm === -1) {
					var vVWWm = (VV.Wvn >> 8) & 255;
					if ((audioHandler.vm.MNm[vVWWm] !== 0) && ((nM.vnn - wM.MMvwW) > 800)) {
						wM.MMvwW = nM.vnn;
						var nWmWW = Math.floor(Math.random() * Vn.vvN);
						audioHandler.wmN(audioHandler.vm.MNm[vVWWm][nWmWW], Vn.www, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 4, Vn.nmW);
					}
					wM.MMm = 0;
				}
				if (wM.mVmVN === 1) wM.MMm = Math.max(0, wM.MMm - var13);
				else wM.MMm = Math.min(Vn.mNW, wM.MMm + var13);
				var lParTrue = wM.MMm / Vn.mNW;
				NMW = lParTrue * Vn.NMW;
				if ((wM.MMm === 0) || (wM.MMm === Vn.mNW)) wM.mVmVN *= -1;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				wM.MMm = -1;
				wM.VN = (wM.VN + var13) % 1500;
				if (wM.Mm !== 0) {
					if (wM.Mm < 400) wM.Mm = 800 - wM.Mm;
					wM.Mm = wM.Mm + var13;
					if (wM.Mm > 800) wM.Mm = 0;
				}
			} else {
				wM.MMm = -1;
				if (VV.NNV > mvn[mNn].NNV) wM.Mm = wM.Mm + (var13 * 1.9);
				else wM.Mm = wM.Mm + var13;
				if (wM.Mm > 800) {
					wM.orientation *= -1;
					wM.Mm = wM.Mm % 800;
				}
				if (wM.VN !== 0) {
					if (wM.VN < 750) wM.VN = 1500 - wM.VN;
					wM.VN = wM.VN + var13;
					if (wM.VN > 1500) wM.VN = 0;
				}
			}
			var VN = Vn.VN * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var Mm = Vn.Mm * ((wM.Mm < 400) ? (wM.Mm / 400) : (1 - ((wM.Mm - 400) / 400)));
			var MMM = (VVW.nvV === undefined) ? MMw.nvV : VVW.nvV;
			graphicOptions.drawMapStructures(MMM, nI, vV, mVW.angle + VV.angle, ((mVW.x + (Mm * wM.orientation)) + NMW) + VN, mVW.y, VM);
			MMM = (VVW.VNW === undefined) ? MMw.VNW : VVW.VNW;
			graphicOptions.drawMapStructures(MMM, nI, vV, -wMV.angle + VV.angle, ((wMV.x + (Mm * wM.orientation)) + NMW) + VN, wMV.y, VM);
			var NW = Vn.Vn;
			graphicOptions.drawMapStructures(NW, nI, vV, VV.angle, ((NW.x + (Mm * wM.orientation)) + VN) + NMW, NW.y, VM);
			if (VV.mNw > 0) {
				var nww = 1;
				VV.mNw -= var13;
				var lParTrue = 0;
				if (VV.mNw > 150) lParTrue = vnw.mMv.VMN((300 - VV.mNw) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mNw / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.nnm, nI, vV, VV.angle, 0, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 3;
				vV += (Math.sin(VV.VMv) * lParTrue) * 3;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.mWM, nI, vV, VV.angle, 0, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.nWV > 0) {
				var nww = 1;
				VV.nWV -= var13;
				if (VV.nWV > 150) context.globalAlpha = Math.min(1, Math.max(0, vnw.mMv.VMN((300 - VV.nWV) / 300)));
				else {
					var lParTrue = vnw.mMv.nVw(VV.nWV / 150);
					nww += (1 - lParTrue) * 0.2;
					context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				}
				graphicOptions.drawMapStructures(vMW.nWV, nI, vV, VV.angle, 0, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(MMw.head, nI, vV, VV.angle, 0, 0, VM);
			if (VVW.head !== undefined) graphicOptions.drawMapStructures(VVW.head, nI, vV, VV.angle, 0, 0, VM);
		};

		function wwnvV(vMW, Vn, VVW, VV, VM, nI, vV) {
			var wM = wm.nNv[VV.Nvn];
			var nVW = 0;
			var MWm = wM.MWm - nM.vnn;
			var Vvm = wM.Vvm - nM.vnn;
			if (MWm > 0) {
				if (Vvm > 0) nVW = 3;
				else if (wM.Vvm > 0) nVW = 5;
				else nVW = 1;
			} else if (Vvm > 0) nVW = 2;
			else if (wM.Vvm > 0) nVW = 4;
			var MMw = vMW.NWNWv[nVW];
			var NMW = 0;
			var vNw = 0;
			var NNn = 0;
			var Wnn = -1;
			var mVW = Vn.nvV;
			var wMV = Vn.VNW;
			var WwVNw = wM.WwVNw;
			if (VV.mmw > 0) {
				if (VV.mmw === VV.vnV) {
					for (var mN = 0; mN < WwVNw.length; mN++) {
						var nWW = WwVNw[mN];
						if (nWW.NN <= 0) {
							nWW.type = Vn.nWW;
							nWW.NN = Vn.Vmnnw;
							nWW.x = nI + (Math.cos(VV.angle) * 44);
							nWW.y = vV + (Math.sin(VV.angle) * 44);
							var angle = ((-Math.PI / 2.5) + VV.angle) + ((Math.random() * -Math.PI) / 3.5);
							nWW.wVWvw = Math.cos(angle);
							nWW.mVWvW = Math.sin(angle);
							break;
						}
					}
				}
				VV.mmw = Math.max(0, VV.mmw - var13);
				var lParTrue = (VV.mmw > 80) ? (1 - ((VV.mmw - 80) / 100)) : (VV.mmw / 80);
				if (Vn.WWv === 0) {
					var mvwmw = vMW.nNN[Vn.nNN].length;
					for (var nNN = 0; nNN < mvwmw; nNN++) {
						if (VV.mmw > (Vn.NN - (30 * (nNN + 1)))) {
							Wnn = nNN;
							break;
						}
					}
				}
				NNn = lParTrue * Vn.NNn;
				vNw = lParTrue * Vn.vNw;
				NMW = lParTrue * Vn.NMW;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				wM.VN = (wM.VN + var13) % 1500;
				if (wM.Mm !== 0) {
					if (wM.Mm < 400) wM.Mm = 800 - wM.Mm;
					wM.Mm = wM.Mm + var13;
					if (wM.Mm > 800) wM.Mm = 0;
				}
			} else {
				if (VV.NNV > mvn[mNn].NNV) wM.Mm = wM.Mm + (var13 * 1.9);
				else wM.Mm = wM.Mm + var13;
				if (wM.Mm > 800) {
					wM.orientation *= -1;
					wM.Mm = wM.Mm % 800;
				}
				if (wM.VN !== 0) {
					if (wM.VN < 750) wM.VN = 1500 - wM.VN;
					wM.VN = wM.VN + var13;
					if (wM.VN > 1500) wM.VN = 0;
				}
			}
			var VN = Vn.VN * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var Mm = Vn.Mm * ((wM.Mm < 400) ? (wM.Mm / 400) : (1 - ((wM.Mm - 400) / 400)));
			var MMM = (VVW.nvV === undefined) ? MMw.nvV : VVW.nvV;
			graphicOptions.drawMapStructures(MMM, nI, vV, mVW.angle + VV.angle, ((mVW.x + (Mm * wM.orientation)) + NMW) + VN, mVW.y, VM);
			MMM = (VVW.VNW === undefined) ? MMw.VNW : VVW.VNW;
			graphicOptions.drawMapStructures(MMM, nI, vV, -wMV.angle + VV.angle, ((wMV.x + (Mm * wM.orientation)) + NMW) + VN, wMV.y, VM);
			var NW = Vn.Vn;
			if ((Wnn >= 0) && (Vn.WWv === 0)) {
				var nNN = vMW.nNN[Vn.nNN][Wnn];
				graphicOptions.drawMapStructures(nNN, nI, vV, VV.angle, (((NW.x + (Mm * wM.orientation)) + VN) + vNw) + Vn.Mmv, NW.y, VM);
			}
			graphicOptions.drawMapStructures(NW, nI, vV, VV.angle, ((NW.x + (Mm * wM.orientation)) + VN) + vNw, NW.y, VM);
			for (var mN = 0; mN < WwVNw.length; mN++) {
				var nWW = WwVNw[mN];
				if (nWW.NN > 0) {
					nWW.x += (var13 * nWW.wVWvw) * 0.18;
					nWW.y += (var13 * nWW.mVWvW) * 0.18;
					if ((nWW.NN < 200) && (context.globalAlpha === 1)) {
						context.globalAlpha = vnw.mMv.nVw(nWW.NN / 200);
						graphicOptions.drawMapStructures(vMW.WwVNw[nWW.type], nWW.x, nWW.y, nWW.NN * 0.007, 0, 0, VM);
						context.globalAlpha = 1;
					} else graphicOptions.drawMapStructures(vMW.WwVNw[nWW.type], nWW.x, nWW.y, nWW.NN * 0.007, 0, 0, VM);
					nWW.NN -= var13;
				}
			}
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 3;
				vV += (Math.sin(VV.VMv) * lParTrue) * 3;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.mWM, nI, vV, VV.angle, NNn, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.nWV > 0) {
				var nww = 1;
				VV.nWV -= var13;
				if (VV.nWV > 150) context.globalAlpha = Math.min(1, Math.max(0, vnw.mMv.VMN((300 - VV.nWV) / 300)));
				else {
					var lParTrue = vnw.mMv.nVw(VV.nWV / 150);
					nww += (1 - lParTrue) * 0.2;
					context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				}
				graphicOptions.drawMapStructures(vMW.nWV, nI, vV, VV.angle, NNn, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(MMw.head, nI, vV, VV.angle, NNn, 0, VM);
			if (VVW.head !== undefined) graphicOptions.drawMapStructures(VVW.head, nI, vV, VV.angle, NNn, 0, VM);
		};

		function nnMnn(vMW, Vn, VVW, VV, VM, nI, vV) {
			var wM = wm.nNv[VV.Nvn];
			var nVW = 0;
			var MWm = wM.MWm - nM.vnn;
			var Vvm = wM.Vvm - nM.vnn;
			if (MWm > 0) {
				if (Vvm > 0) nVW = 3;
				else if (wM.Vvm > 0) nVW = 5;
				else nVW = 1;
			} else if (Vvm > 0) nVW = 2;
			else if (wM.Vvm > 0) nVW = 4;
			var MMw = vMW.NWNWv[nVW];
			var nvm = 0;
			var VWN = 0;
			var NnN = 0;
			var MVW = 0;
			if (VV.mmw > 0) {
				VV.mmw = Math.max(0, VV.mmw - var13);
				lParTrue = (VV.mmw > Vn.mVV) ? (1 - ((VV.mmw - Vn.mVV) / (Vn.NN - Vn.mVV))) : (VV.mmw / Vn.mVV);
				nvm = -vnw.mMv.nwW(lParTrue) * 0.35;
				MVW = lParTrue * 3;
				NnN = -lParTrue * 20;
				VWN = lParTrue * 3;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				wM.VN = (wM.VN + var13) % 1500;
				if (wM.Mm !== 0) {
					if (wM.Mm < 400) wM.Mm = 800 - wM.Mm;
					wM.Mm = wM.Mm + var13;
					if (wM.Mm > 800) wM.Mm = 0;
				}
			} else {
				if (VV.NNV > mvn[mNn].NNV) wM.Mm = wM.Mm + (var13 * 1.9);
				else wM.Mm = wM.Mm + var13;
				if (wM.Mm > 800) {
					wM.orientation *= -1;
					wM.Mm = wM.Mm % 800;
				}
				if (wM.VN !== 0) {
					if (wM.VN < 750) wM.VN = 1500 - wM.VN;
					wM.VN = wM.VN + var13;
					if (wM.VN > 1500) wM.VN = 0;
				}
			}
			var VN = Vn.VN * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var Mm = Vn.Mm * ((wM.Mm < 400) ? (wM.Mm / 400) : (1 - ((wM.Mm - 400) / 400)));
			var nvwnw = Vn.nvwnw * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var NWV = Vn.nvV;
			var MMM = (VVW.nvV === undefined) ? MMw.nvV : VVW.nvV;
			graphicOptions.drawMapStructures(MMM, nI, vV, (NWV.angle + VV.angle) - nvm, ((NWV.x - (Mm * wM.orientation)) + NnN) + nvwnw, NWV.y, VM);
			if (VV.mmw > 0) {
				var Nmnvv = Vn.Nmnvv;
				graphicOptions.drawMapStructures(Nmnvv, nI, vV, VV.angle, ((Nmnvv.x - (Mm * wM.orientation)) + nvwnw) + NnN, Nmnvv.y, VM);
			}
			var NW = Vn.Vn;
			graphicOptions.drawMapStructures(NW, nI, vV, NW.angle + VV.angle, ((NW.x + (Mm * wM.orientation)) + VN) + VWN, NW.y, VM);
			NWV = Vn.VNW;
			MMM = (VVW.VNW === undefined) ? MMw.VNW : VVW.VNW;
			graphicOptions.drawMapStructures(MMM, nI, vV, -NWV.angle + VV.angle, ((NWV.x + (Mm * wM.orientation)) + VWN) + VN, NWV.y, VM);
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 3;
				vV += (Math.sin(VV.VMv) * lParTrue) * 3;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.mWM, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.nWV > 0) {
				var nww = 1;
				VV.nWV -= var13;
				if (VV.nWV > 150) context.globalAlpha = Math.min(1, Math.max(0, vnw.mMv.VMN((300 - VV.nWV) / 300)));
				else {
					var lParTrue = vnw.mMv.nVw(VV.nWV / 150);
					nww += (1 - lParTrue) * 0.2;
					context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				}
				graphicOptions.drawMapStructures(vMW.nWV, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(MMw.head, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, VM);
			if (VVW.head !== undefined) graphicOptions.drawMapStructures(VVW.head, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, VM);
		};

		function mwNnW(vMW, Vn, VVW, VV, VM, nI, vV) {
			var wM = wm.nNv[VV.Nvn];
			var nVW = 0;
			var MWm = wM.MWm - nM.vnn;
			var Vvm = wM.Vvm - nM.vnn;
			if (MWm > 0) {
				if (Vvm > 0) nVW = 3;
				else if (wM.Vvm > 0) nVW = 5;
				else nVW = 1;
			} else if (Vvm > 0) nVW = 2;
			else if (wM.Vvm > 0) nVW = 4;
			var MMw = vMW.NWNWv[nVW];
			var nvm = 0;
			var VWN = 0;
			var NnN = 0;
			var MVW = 0;
			if (VV.mmw > 0) {
				VV.mmw = Math.max(0, VV.mmw - var13);
				lParTrue = (VV.mmw > Vn.mVV) ? (1 - ((VV.mmw - Vn.mVV) / (Vn.NN - Vn.mVV))) : (VV.mmw / Vn.mVV);
				nvm = -vnw.mMv.nwW(lParTrue) * 0.55;
				MVW = lParTrue * 3;
				NnN = -lParTrue * 25;
				VWN = lParTrue * 10;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				wM.VN = (wM.VN + var13) % 1500;
				if (wM.Mm !== 0) {
					if (wM.Mm < 400) wM.Mm = 800 - wM.Mm;
					wM.Mm = wM.Mm + var13;
					if (wM.Mm > 800) wM.Mm = 0;
				}
			} else {
				if (VV.NNV > mvn[mNn].NNV) wM.Mm = wM.Mm + (var13 * 1.9);
				else wM.Mm = wM.Mm + var13;
				if (wM.Mm > 800) {
					wM.orientation *= -1;
					wM.Mm = wM.Mm % 800;
				}
				if (wM.VN !== 0) {
					if (wM.VN < 750) wM.VN = 1500 - wM.VN;
					wM.VN = wM.VN + var13;
					if (wM.VN > 1500) wM.VN = 0;
				}
			}
			var VN = Vn.VN * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var Mm = Vn.Mm * ((wM.Mm < 400) ? (wM.Mm / 400) : (1 - ((wM.Mm - 400) / 400)));
			var NWV = Vn.VNW;
			var MMM = (VVW.VNW === undefined) ? MMw.VNW : VVW.VNW;
			graphicOptions.drawMapStructures(MMM, nI, vV, ((-NWV.angle + VV.angle) - VN) - nvm, (NWV.x - (Mm * wM.orientation)) + VWN, NWV.y, VM);
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 3;
				vV += (Math.sin(VV.VMv) * lParTrue) * 3;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.mWM, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.nWV > 0) {
				var nww = 1;
				VV.nWV -= var13;
				if (VV.nWV > 150) context.globalAlpha = Math.min(1, Math.max(0, vnw.mMv.VMN((300 - VV.nWV) / 300)));
				else {
					var lParTrue = vnw.mMv.nVw(VV.nWV / 150);
					nww += (1 - lParTrue) * 0.2;
					context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				}
				graphicOptions.drawMapStructures(vMW.nWV, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(MMw.head, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, VM);
			if (VVW.head !== undefined) graphicOptions.drawMapStructures(VVW.head, nI, vV, VV.angle - (nvm / 1.5), MVW, 0, VM);
			var nvwnw = Vn.nvwnw * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			NWV = Vn.nvV;
			MMM = (VVW.nvV === undefined) ? MMw.nvV : VVW.nvV;
			graphicOptions.drawMapStructures(MMM, nI, vV, NWV.angle + VV.angle, ((NWV.x + (Mm * wM.orientation)) + NnN) + nvwnw, NWV.y, VM);
			var NW = Vn.Vn;
			graphicOptions.drawMapStructures(NW, nI, vV, NW.angle + VV.angle, ((NW.x + (Mm * wM.orientation)) + nvwnw) + NnN, NW.y, VM);
		};

		function wwmmw(vMW, Vn, VVW, VV, VM, nI, vV) {
			var wM = wm.nNv[VV.Nvn];
			var nVW = 0;
			var MWm = wM.MWm - nM.vnn;
			var Vvm = wM.Vvm - nM.vnn;
			if (MWm > 0) {
				if (Vvm > 0) nVW = 3;
				else if (wM.Vvm > 0) nVW = 5;
				else nVW = 1;
			} else if (Vvm > 0) nVW = 2;
			else if (wM.Vvm > 0) nVW = 4;
			var MMw = vMW.NWNWv[nVW];
			var nvm = 0;
			var VWN = 0;
			var NnN = 0;
			var MVW = 0;
			var mVW = Vn.nvV;
			var wMV = Vn.VNW;
			if (VV.mmw > 0) {
				VV.mmw = Math.max(0, VV.mmw - var13);
				lParTrue = (VV.mmw > Vn.mVV) ? (1 - ((VV.mmw - Vn.mVV) / (Vn.NN - Vn.mVV))) : (VV.mmw / Vn.mVV);
				nvm = -vnw.mMv.nwW(lParTrue) * 0.4;
				MVW = lParTrue * 3;
				VWN = lParTrue * wMV.WNw;
				NnN = lParTrue * mVW.WNw;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				wM.VN = (wM.VN + var13) % 1500;
				if (wM.Mm !== 0) {
					if (wM.Mm < 400) wM.Mm = 800 - wM.Mm;
					wM.Mm = wM.Mm + var13;
					if (wM.Mm > 800) wM.Mm = 0;
				}
			} else {
				if (VV.NNV > mvn[mNn].NNV) wM.Mm = wM.Mm + (var13 * 1.9);
				else wM.Mm = wM.Mm + var13;
				if (wM.Mm > 800) {
					wM.orientation *= -1;
					wM.Mm = wM.Mm % 800;
				}
				if (wM.VN !== 0) {
					if (wM.VN < 750) wM.VN = 1500 - wM.VN;
					wM.VN = wM.VN + var13;
					if (wM.VN > 1500) wM.VN = 0;
				}
			}
			var VN = Vn.VN * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var Mm = Vn.Mm * ((wM.Mm < 400) ? (wM.Mm / 400) : (1 - ((wM.Mm - 400) / 400)));
			var NW = Vn.Vn;
			graphicOptions.drawMeleeInstruments(NW, nI, vV, (NW.angle + VV.angle) + VN, NW.x + (Mm * wM.orientation), NW.y, VM, nvm * NW.VWv, NW.x2, NW.y2);
			var MMM = (VVW.nvV === undefined) ? MMw.nvV : VVW.nvV;
			graphicOptions.drawMapStructures(MMM, nI, vV, ((mVW.angle + VV.angle) + VN) + (nvm * mVW.VWv), (mVW.x + (Mm * wM.orientation)) + NnN, mVW.y, VM);
			MMM = (VVW.VNW === undefined) ? MMw.VNW : VVW.VNW;
			graphicOptions.drawMapStructures(MMM, nI, vV, ((-wMV.angle + VV.angle) + VN) + (nvm * wMV.VWv), (wMV.x + (Mm * wM.orientation)) + VWN, wMV.y, VM);
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 3;
				vV += (Math.sin(VV.VMv) * lParTrue) * 3;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.mWM, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.nWV > 0) {
				var nww = 1;
				VV.nWV -= var13;
				if (VV.nWV > 150) context.globalAlpha = Math.min(1, Math.max(0, vnw.mMv.VMN((300 - VV.nWV) / 300)));
				else {
					var lParTrue = vnw.mMv.nVw(VV.nWV / 150);
					nww += (1 - lParTrue) * 0.2;
					context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				}
				graphicOptions.drawMapStructures(vMW.nWV, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(MMw.head, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, VM);
			if (VVW.head !== undefined) graphicOptions.drawMapStructures(VVW.head, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, VM);
		};

		function MNMVN(vMW, Vn, VVW, VV, VM, nI, vV) {
			var wM = wm.nNv[VV.Nvn];
			var nVW = 0;
			var MWm = wM.MWm - nM.vnn;
			var Vvm = wM.Vvm - nM.vnn;
			if (MWm > 0) {
				if (Vvm > 0) nVW = 3;
				else if (wM.Vvm > 0) nVW = 5;
				else nVW = 1;
			} else if (Vvm > 0) nVW = 2;
			else if (wM.Vvm > 0) nVW = 4;
			var MMw = vMW.NWNWv[nVW];
			var VWN = 0;
			var NnN = 0;
			if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				wM.VN = (wM.VN + var13) % 1500;
				if (wM.Mm !== 0) {
					if (wM.Mm < 400) wM.Mm = 800 - wM.Mm;
					wM.Mm = wM.Mm + var13;
					if (wM.Mm > 800) wM.Mm = 0;
				}
			} else {
				if (VV.NNV > mvn[mNn].NNV) wM.Mm = wM.Mm + (var13 * 1.9);
				else wM.Mm = wM.Mm + var13;
				if (wM.Mm > 800) {
					wM.orientation *= -1;
					wM.Mm = wM.Mm % 800;
				}
				if (wM.VN !== 0) {
					if (wM.VN < 750) wM.VN = 1500 - wM.VN;
					wM.VN = wM.VN + var13;
					if (wM.VN > 1500) wM.VN = 0;
				}
			}
			var VN = Vn.VN * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var Mm = Vn.Mm * ((wM.Mm < 400) ? (wM.Mm / 400) : (1 - ((wM.Mm - 400) / 400)));
			var NWV = Vn.nvV;
			var MMM = (VVW.nvV === undefined) ? MMw.nvV : VVW.nvV;
			graphicOptions.drawMapStructures(MMM, nI, vV, (NWV.angle + VV.angle) + VN, (NWV.x + (Mm * wM.orientation)) + NnN, NWV.y, VM);
			NWV = Vn.VNW;
			MMM = (VVW.VNW === undefined) ? MMw.VNW : VVW.VNW;
			graphicOptions.drawMapStructures(MMM, nI, vV, (-NWV.angle + VV.angle) - VN, (NWV.x - (Mm * wM.orientation)) + VWN, NWV.y, VM);
			graphicOptions.drawMapStructures(Vn.wmm, nI, vV, ((-NWV.angle + VV.angle) - VN) + (Math.PI / 3), ((NWV.x - (Mm * wM.orientation)) + VWN) - 40, NWV.y - 15, VM);
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 3;
				vV += (Math.sin(VV.VMv) * lParTrue) * 3;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.mWM, nI, vV, VV.angle, 0, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.nWV > 0) {
				var nww = 1;
				VV.nWV -= var13;
				if (VV.nWV > 150) context.globalAlpha = Math.min(1, Math.max(0, vnw.mMv.VMN((300 - VV.nWV) / 300)));
				else {
					var lParTrue = vnw.mMv.nVw(VV.nWV / 150);
					nww += (1 - lParTrue) * 0.2;
					context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				}
				graphicOptions.drawMapStructures(vMW.nWV, nI, vV, VV.angle, 0, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(MMw.head, nI, vV, VV.angle, 0, 0, VM);
			if (VVW.head !== undefined) graphicOptions.drawMapStructures(VVW.head, nI, vV, VV.angle, 0, 0, VM);
			graphicOptions.drawMapStructures(Vn.wnvMm, nI, vV, VV.angle, 0, 0, VM);
		};
		var wMnVn = [0, 0, 0, 0];

		function mWNvm() {
			var nvmMM = 0;
			if ((wm.wM.WMV === 1) && (wm.wM.wmm !== 0)) {
				var NW = nvn[wm.wM.wmm];
				if (NW.wVm !== 0) {
					NW = NW.wVm[wm.wM.wMWVm];
					NW.wnN = NW.Vv;
					NW.wmm = NW.Vv;
					NW.vNv = wMnVn;
					NW.vmn = wMnVn;
				}
				var angle = nmn.angle;
				var mm = (NW.VWm === 1) ? 0 : wm.wM.nWnmw;
				wm.wM.vMw = wm.wM.nwm + Math.floor((MMn + (Math.cos(angle) * vVm)) / vVm);
				wm.wM.MvM = wm.wM.vNW + Math.floor((MMn + (Math.sin(angle) * vVm)) / vVm);
				var nI = ((NW.vNv[mm] + vnv) + MMn) + (vVm * wm.wM.vMw);
				var vV = ((NW.vmn[mm] + WNN) + MMn) + (vVm * wm.wM.MvM);
				if ((((wm.wM.vMw >= 0) && (wm.wM.MvM >= 0)) && (wm.wM.vMw < wwv)) && (wm.wM.MvM < mvv)) {
					var wNW = vnm[wm.wM.MvM][wm.wM.vMw];
					var VVm = (wm.wM.VVm === -1) ? -2 : wm.wM.VVm;
					if ((wNW.Wwv === VVn) && (((NW.VMw !== 2) || (wNW.nmwMM === 0)) || (wNW.vnW === Vm.WmNVv))) {
						wm.wM.mvMNM = 0;
						graphicOptions.drawMapStructures(NW.wnN, nI, vV, mm * mWw, 0, 0, 1);
					} else if ((((NW.detail.vnW === Vm.WmNVv) || (NW.VMw === 2)) || (((wNW.Nvn !== 0) && (wNW.Nvn !== wm.wM.id)) && (wm.nNv[wNW.Nvn].VVm !== VVm))) && (wNW.mVMnv === VVn)) {
						wm.wM.mvMNM = 0;
						graphicOptions.drawMapStructures(NW.wnN, nI, vV, mm * mWw, 0, 0, 1);
					} else if ((NW.nmNNN !== undefined) && ((((mm % 2) === 0) && ((((((wm.wM.MvM < 1) || (wm.wM.MvM >= (mvv - 1))) || (vnm[wm.wM.MvM + 1][wm.wM.vMw].Wwv === VVn)) || ((vnm[wm.wM.MvM + 1][wm.wM.vMw].mVMnv === VVn) && (((vnm[wm.wM.MvM + 1][wm.wM.vMw].Nvn !== wm.wM.id) && (vnm[wm.wM.MvM + 1][wm.wM.vMw].Nvn !== 0)) && (wm.nNv[vnm[wm.wM.MvM + 1][wm.wM.vMw].Nvn].VVm !== VVm)))) || (vnm[wm.wM.MvM - 1][wm.wM.vMw].Wwv === VVn)) || ((vnm[wm.wM.MvM - 1][wm.wM.vMw].mVMnv === VVn) && (((vnm[wm.wM.MvM - 1][wm.wM.vMw].Nvn !== wm.wM.id) && (vnm[wm.wM.MvM - 1][wm.wM.vMw].Nvn !== 0)) && (wm.nNv[vnm[wm.wM.MvM - 1][wm.wM.vMw].Nvn].VVm !== VVm))))) || (((mm % 2) === 1) && (((((((wm.wM.vMw < 1) || (wm.wM.vMw >= (wwv - 1))) || (vnm[wm.wM.MvM][wm.wM.vMw + 1].Wwv === VVn)) || ((vnm[wm.wM.MvM][wm.wM.vMw + 1].mVMnv === VVn) && (((vnm[wm.wM.MvM][wm.wM.vMw + 1].Nvn !== wm.wM.id) && (vnm[wm.wM.MvM][wm.wM.vMw + 1].Nvn !== 0)) && (wm.nNv[vnm[wm.wM.MvM][wm.wM.vMw + 1].Nvn].VVm !== VVm)))) || (vnm[wm.wM.MvM][wm.wM.vMw - 1].Wwv === VVn)) || ((vnm[wm.wM.MvM][wm.wM.vMw - 1].mVMnv === VVn) && (((vnm[wm.wM.MvM][wm.wM.vMw - 1].Nvn !== wm.wM.id) && (vnm[wm.wM.MvM][wm.wM.vMw - 1].Nvn !== 0)) && (wm.nNv[vnm[wm.wM.MvM][wm.wM.vMw - 1].Nvn].VVm !== VVm)))) || (wm.wM.vNW === wm.wM.MvM))))) {
						wm.wM.mvMNM = 0;
						graphicOptions.drawMapStructures(NW.wnN, nI, vV, mm * mWw, 0, 0, 1);
					} else {
						wm.wM.mvMNM = 1;
						graphicOptions.drawMapStructures(NW.wmm, nI, vV, mm * mWw, 0, 0, 1);
					}
				}
				if (nNVmV.v !== 1) {
					nNVmV = graphicOptions.createMenuImg(WNnvv, nNVmV);
					return;
				}
				if ((NW.VWm === 1) || (wm.wM.wMW >= 0)) nvmMM = Math.max(0, wm.wM.nNVmV - var13);
				else nvmMM = Math.min(900, wm.wM.nNVmV + var13);
			} else nvmMM = Math.max(0, wm.wM.nNVmV - var13);
			if (nvmMM > 0) {
				context.globalAlpha = vnw.mMv.nVw(Math.max(0, nvmMM - 600) / 300);
				var VM = parScaling + (VVmWV * parScaling);
				var VnnmM = VM / parScaling;
				var vM = (parScaling * nNVmV.width) / 2;
				var wW = (parScaling * nNVmV.height) / 2;
				context.drawImage(nNVmV, ((vnv + nvv) * parScaling) - (vM / 2), Math.max(10 * parScaling, ((((WNN + NNW) * parScaling) - (wW / 2)) - (65 * parScaling)) - (60 * parScaling)), vM, wW);
				context.globalAlpha = 1;
			}
			wm.wM.nNVmV = nvmMM;
		};

		function wmNNw(vMW, Vn, VVW, VV, VM, nI, vV) {
			var wM = wm.nNv[VV.Nvn];
			var nVW = 0;
			var MWm = wM.MWm - nM.vnn;
			var Vvm = wM.Vvm - nM.vnn;
			if (MWm > 0) {
				if (Vvm > 0) nVW = 3;
				else if (wM.Vvm > 0) nVW = 5;
				else nVW = 1;
			} else if (Vvm > 0) nVW = 2;
			else if (wM.Vvm > 0) nVW = 4;
			var MMw = vMW.NWNWv[nVW];
			var nvm = 0;
			var VWN = 0;
			var NnN = 0;
			var MVW = 0;
			if (VV.mmw > 0) {
				VV.mmw = Math.max(0, VV.mmw - var13);
				VV.mmw = Math.min(VV.mmw, Vn.NN);
				lParTrue = (VV.mmw > Vn.mVV) ? (1 - ((VV.mmw - Vn.mVV) / (Vn.NN - Vn.mVV))) : (VV.mmw / Vn.mVV);
				nvm = (wM.mVmVN * vnw.mMv.nwW(lParTrue)) * 0.55;
				MVW = lParTrue * 3;
				if (wM.mVmVN === 1) VWN = lParTrue * 25;
				else NnN = lParTrue * 25;
				if (VV.mmw === 0) wM.mVmVN *= -1;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				wM.VN = (wM.VN + var13) % 1500;
				if (wM.Mm !== 0) {
					if (wM.Mm < 400) wM.Mm = 800 - wM.Mm;
					wM.Mm = wM.Mm + var13;
					if (wM.Mm > 800) wM.Mm = 0;
				}
			} else {
				if (VV.NNV > mvn[mNn].NNV) wM.Mm = wM.Mm + (var13 * 1.9);
				else wM.Mm = wM.Mm + var13;
				if (wM.Mm > 800) {
					wM.orientation *= -1;
					wM.Mm = wM.Mm % 800;
				}
				if (wM.VN !== 0) {
					if (wM.VN < 750) wM.VN = 1500 - wM.VN;
					wM.VN = wM.VN + var13;
					if (wM.VN > 1500) wM.VN = 0;
				}
			}
			var VN = Vn.VN * ((wM.VN < 750) ? (wM.VN / 750) : (1 - ((wM.VN - 750) / 750)));
			var Mm = Vn.Mm * ((wM.Mm < 400) ? (wM.Mm / 400) : (1 - ((wM.Mm - 400) / 400)));
			var NWV = Vn.nvV;
			var MMM = (VVW.nvV === undefined) ? MMw.nvV : VVW.nvV;
			graphicOptions.drawMapStructures(MMM, nI, vV, ((NWV.angle + VV.angle) + VN) + nvm, (NWV.x + (Mm * wM.orientation)) + NnN, NWV.y, VM);
			NWV = Vn.VNW;
			MMM = (VVW.VNW === undefined) ? MMw.VNW : VVW.VNW;
			graphicOptions.drawMapStructures(MMM, nI, vV, ((-NWV.angle + VV.angle) - VN) + nvm, (NWV.x - (Mm * wM.orientation)) + VWN, NWV.y, VM);
			if (VV.mNw > 0) {
				var nww = 1;
				VV.mNw -= var13;
				var lParTrue = 0;
				if (VV.mNw > 150) lParTrue = vnw.mMv.VMN((300 - VV.mNw) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mNw / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.nnm, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 3;
				vV += (Math.sin(VV.VMv) * lParTrue) * 3;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(vMW.mWM, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			if (VV.nWV > 0) {
				var nww = 1;
				VV.nWV -= var13;
				if (VV.nWV > 150) context.globalAlpha = Math.min(1, Math.max(0, vnw.mMv.VMN((300 - VV.nWV) / 300)));
				else {
					var lParTrue = vnw.mMv.nVw(VV.nWV / 150);
					nww += (1 - lParTrue) * 0.2;
					context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				}
				graphicOptions.drawMapStructures(vMW.nWV, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(MMw.head, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, VM);
			if (VVW.head !== undefined) graphicOptions.drawMapStructures(VVW.head, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, VM);
		};

		function vnmMn(VV) {
			var wWW = vMV[VV.Wvn & 15];
			vnm[VV.mN][VV.NM].Wwv = VVn;
			vnm[VV.mN][VV.NM].nmwMM = VV.Nvn;
			vnm[VV.mN][VV.NM].vnW = undefined;
			var VM = 1;
			var nI = vnv + VV.x;
			var vV = WNN + VV.y;
			if (VV.wWn !== 0) {
				VV.VMm += var13;
				var lParTrue = vnw.mMv.VmN(1 - ((VV.VMm - 500) / 400));
				context.globalAlpha = Math.min(Math.max(0, lParTrue), 1);
				graphicOptions.drawMapStructures(wWW.VMm, nI, vV, VV.angle, 0, 0, 1);
				lParTrue = vnw.mMv.VmN(1 - (VV.VMm / 400));
				VM = Math.min(1 + (0.5 * (1 - lParTrue)), 1.5);
				context.globalAlpha = Math.max(0, lParTrue);
			}
			if ((VV.Wvn & 16) === 16) {
				VV.Wvn &= ~16;
				VV.mWM = 250;
				VV.VMv = (NnwMW * ((VV.Wvn >> 5) & 31)) / 31;
			}
			wWW.nv(wWW, VV, nI, vV, VM);
			if (VV.wWn !== 0) {
				if (VV.VMm > 900) VV.wWn = 2;
				context.globalAlpha = 1;
			}
		};

		function Nvvmn(VV) {
			vnm[VV.mN][VV.NM].Wwv = VVn;
			vnm[VV.mN][VV.NM].nmwMM = VV.Nvn;
			vnm[VV.mN][VV.NM].vnW = undefined;
			var vMW = mvn[mNn];
			var vVWWm = (VV.Wvn >> 8) & 255;
			var Vn = vMW.mMvVV[vVWWm];
			var VVW = vMW.wVWmw[VV.Wvn & 255];
			var VM = 1;
			var WNvWv = VV.state & 254;
			var nI = vnv + VV.x;
			var vV = WNN + VV.y;
			if (VV.wWn !== 0) {
				VV.VMm += var13;
				var lParTrue = vnw.mMv.VmN(1 - ((VV.VMm - 500) / 400));
				context.globalAlpha = Math.min(Math.max(0, lParTrue), 1);
				graphicOptions.drawMapStructures(vMW.VMm, nI, vV, VV.angle, 0, 0, 1);
				lParTrue = vnw.mMv.VmN(1 - (VV.VMm / 400));
				VM = Math.min(1 + (0.5 * (1 - lParTrue)), 1.5);
				context.globalAlpha = Math.max(0, lParTrue);
			}
			if (WNvWv === 2) {
				VV.state &= 65281;
				if (audioHandler.vm.MNm[vVWWm] !== 0) {
					var nWmWW = Math.floor(Math.random() * Vn.vvN);
					audioHandler.wmN(audioHandler.vm.MNm[vVWWm][nWmWW], Vn.www, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 4, Vn.nmW);
				}
				if (VV.mmw <= 0) {
					VV.mmw = Vn.NN;
					VV.vnV = Vn.NN;
				}
			} else if (WNvWv === 6) VV.state &= 65281;
			switch (Vn.type) {
				case 0:
					wmNNw(vMW, Vn, VVW, VV, VM, nI, vV);
					break;
				case 1:
					wwmmw(vMW, Vn, VVW, VV, VM, nI, vV);
					break;
				case 2:
					wwnvV(vMW, Vn, VVW, VV, VM, nI, vV);
					break;
				case 3:
					mwNnW(vMW, Vn, VVW, VV, VM, nI, vV);
					break;
				case 4:
					nnMnn(vMW, Vn, VVW, VV, VM, nI, vV);
					break;
				case 5:
					vVMVm(vMW, Vn, VVW, VV, VM, nI, vV);
					break;
				case 6:
					MNMVN(vMW, Vn, VVW, VV, VM, nI, vV);
					break;
			}
			if (VV.wWn !== 0) {
				if (VV.VMm > 900) VV.wWn = 2;
				context.globalAlpha = 1;
			}
		};

		function WmNWN() {
			if (wm.wM.nVv !== 0) return;
			var WmNvM = wm.wM.vVmMW;
			if (WmNvM > 0) {
				if (WmNvM < 500) context.globalAlpha = vnw.mMv.VMN(WmNvM / 500);
				else if (WmNvM > 1500) context.globalAlpha = vnw.mMv.VMN(1 - ((WmNvM - 1500) / 500));
				else context.globalAlpha = 1;
				var mwV = (wm.wM.mMMwN === 1) ? wwwVn : MWW[nvn[wm.wM.mMMwN].WV];
				graphicOptions.drawMapStructures(mMMwN, var9, 50, 0, 0, 0, 1);
				graphicOptions.drawMapStructures(mwV, var9, 50, 0, 0, 0, 1);
				context.globalAlpha = 1;
				wm.wM.vVmMW -= var13;
			}
			var wMW = wm.wM.wMW;
			switch (wMW) {
				case 0:
					if (VNwvN.v !== 1) {
						if (typeOfDevice === 0) VNwvN = graphicOptions.createMenuImg(NWwMm, VNwvN);
						else VNwvN = graphicOptions.createMenuImg(NWNVN, VNwvN);
						return;
					}
					var VM = parScaling + (VVmWV * parScaling);
					var VnnmM = VM / parScaling;
					var vM = (parScaling * VNwvN.width) / 2;
					var wW = (parScaling * VNwvN.height) / 2;
					var nI = ((vnv + nvv) * VM) - (vM / 2);
					var vV = Math.max(10 * parScaling, ((((WNN + NNW) * VM) - (wW / 2)) - (65 * VM)) - (60 * parScaling));
					if (typeOfDevice === 1) {
						WWm.WMwnn = nI;
						WWm.NWNvv = vV;
						WWm.NMvWN = vM;
						WWm.mWVmv = wW;
					}
					context.drawImage(VNwvN, nI, vV, vM, wW);
					var WV = MWW[wm.wM.WV];
					nI = ((vnv + nvv) * VnnmM) - (vM / (2 * parScaling));
					vV = Math.max(10, ((((WNN + NNW) * VnnmM) - (wW / (2 * parScaling))) - (65 * VnnmM)) - 60);
					graphicOptions.drawMapStructures(WV, nI + 77, vV + 33, WV.angle, 0, 0, WV.scale);
					break;
				case 1:
					var lParTrue = wm.wM.vMNww / wm.wM.mmNWn;
					var NN = wm.wM.mmNWn - wm.wM.vMNww;
					wm.wM.vMNww -= var13;
					if (wm.wM.vMNww < 0) {
						wm.wM.wMW = -1;
						return;
					}
					if (WWwNw.v !== 1) {
						WWwNw = graphicOptions.createMenuImg(mWMNM, WWwNw);
						return;
					}
					if (nvmvv.v !== 1) {
						nvmvv = graphicOptions.createMenuImg(VmnVM, nvmvv);
						return;
					}
					if (NWWWV.v !== 1) {
						NWWWV = graphicOptions.createMenuImg(wNWVW, NWWWV);
						return;
					}
					var VM = parScaling + (VVmWV * parScaling);
					var vM = (parScaling * WWwNw.width) / 2;
					var wW = (parScaling * WWwNw.height) / 2;
					var MVN = (vnv + nvv) * VM;
					var wvN = (WNN + NNW) * VM;
					var nI = MVN - (vM / 2);
					var vV = Math.max(10 * VM, ((wvN - (wW / 2)) - (65 * VM)) - (60 * parScaling));
					if (NN < 100) context.globalAlpha = NN / 100;
					else if (wm.wM.vMNww < 100) context.globalAlpha = wm.wM.vMNww / 100;
					context.drawImage(WWwNw, nI, vV, vM, wW);
					context.save();
					context.translate(MVN, Math.max((10 * VM) + (wW / 2), (wvN - (65 * VM)) - (60 * parScaling)));
					context.rotate(-NnwMW * lParTrue);
					context.drawImage(nvmvv, -vM / 2, -wW / 2, vM, wW);
					context.restore();
					context.drawImage(NWWWV, nI, vV, vM, wW);
					context.globalAlpha = 1;
					break;
				case 2:
					var image = wm.wM.VvnMw.image;
					if (image.v !== 1) {
						if (typeOfDevice === 0) wm.wM.VvnMw.image = graphicOptions.createMenuImg(wm.wM.VvnMw.src, image);
						else wm.wM.VvnMw.image = graphicOptions.createMenuImg(wm.wM.VvnMw.src.replace("e-", "e-mobile-"), image);
						return;
					}
					var VM = parScaling + (VVmWV * parScaling);
					var vM = (parScaling * image.width) / 2;
					var wW = (parScaling * image.height) / 2;
					var nI;
					if (wm.wM.Mvwnw === 1) nI = (((vnv + nvv) - 5) * VM) - vM;
					else nI = ((vnv + nvv) * VM) - (vM / 2);
					var vV = Math.max(10 * parScaling, ((((WNN + NNW) * VM) - (wW / 2)) - (65 * VM)) - (60 * parScaling));
					if (typeOfDevice === 1) {
						WWm.WMwnn = nI;
						WWm.NWNvv = vV;
						WWm.NMvWN = vM;
						WWm.mWVmv = wW;
					}
					context.drawImage(image, nI, vV, vM, wW);
					if (wm.wM.Mvwnw === 1) {
						if (VwNnv.v !== 1) {
							if (typeOfDevice === 0) VwNnv = graphicOptions.createMenuImg(NWNnW, VwNnv);
							else VwNnv = graphicOptions.createMenuImg(NWNVN, VNwvN);
							return;
						}
						var VnnmM = VM / parScaling;
						vM = (parScaling * VwNnv.width) / 2;
						wW = (parScaling * VwNnv.height) / 2;
						nI += vM + (10 * parScaling);
						vV = Math.max(10 * parScaling, ((((WNN + NNW) * VM) - (wW / 2)) - (65 * VM)) - (60 * parScaling));
						if (typeOfDevice === 1) {
							WWm.WWnvN = nI;
							WWm.vNWMV = vV;
						}
						context.drawImage(VwNnv, nI, vV, vM, wW);
						var WV = MWW[wm.wM.WV];
						nI = ((vnv + nvv) * VnnmM) + 5;
						vV = Math.max(10, ((((WNN + NNW) * VnnmM) - (wW / (2 * parScaling))) - (65 * VnnmM)) - 60);
						graphicOptions.drawMapStructures(WV, nI + 77, vV + 33, WV.angle, 0, 0, WV.scale);
					}
					break;
			}
		};
		var wMvVn = 0;
		var NnWVn = 0;
		var mMWnm = {
			id: -1,
			Mvv: -1
		};

		function wvmVW(VV, WW, WNw, nW) {
			if ((vMwVv === VnVvv) || (WW === Wn.mNvVM)) return;
			else if (vMwVv === VwVvn) nW *= 3;
			if ((nmm.border[MnvNn].border + nW) >= NvVVV) return;
			for (var mN = 0; mN < nW; mN++) {
				var V = Math.random();
				var angle = ((V * 10) % 1) * NnwMW;
				var nwWMV = WNw + (((V * 10000) % 1) * 25);
				WNw += 8;
				NnWVn = (NnWVn + 1) % NvVVV;
				var NVVnW = NnWVn + nmm.nwWmw;
				wMvVn += 1;
				var NVW = nmm.get(0, NVVnW, wMvVn, MnvNn);
				VMwvV(NVW, 0, wMvVn, NVVnW, MnvNn, VV.wVvmv, VV.WwnMn, VV.wVvmv + (Math.cos(angle) * nwWMV), VV.WwnMn + (Math.sin(angle) * nwWMV), Math.floor(V * wnM[WW].length), ((V * 100) % 1) * 255, WW);
			}
		};

		function MWmvW(VV) {
			var image = wnM[VV.state][VV.Wvn];
			if (VV.VMm > 0) {
				VV.VMm = Math.min(1, VV.VMm + (var13 / 500));
				context.globalAlpha = 1 - VV.VMm;
				graphicOptions.drawMapStructures(image, vnv + VV.x, WNN + VV.y, VV.angle, 0, 0, 1);
				context.globalAlpha = 1;
				if (VV.VMm === 1) {
					mMWnm.id = VV.id;
					mMWnm.Mvv = VV.Mvv;
				}
				return;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 0.01) VV.VMm = 0.001;
			graphicOptions.drawMapStructures(image, vnv + VV.x, WNN + VV.y, VV.angle, 0, 0, 1);
		};

		function vWMmm(NW, VV, nI, vV, mm, VM) {
			VV.VN = (VV.VN + var13) % 500;
			var lParTrue = VV.VN / 500;
			var nww = 0.95 + (0.3 * vnw.mMv.nwW(lParTrue));
			context.globalAlpha = 1 - lParTrue;
			graphicOptions.drawMapStructures(NW.Vv[1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, nww);
			context.globalAlpha = 1;
			graphicOptions.drawMapStructures(NW.Vv[0], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function nnWVv(NW, VV, nI, vV, mm, VM) {
			var nwNMM = 0;
			var NMNVW = 1;
			if ((VV.state & 16) === 16) NMNVW = 0;
			if (((VV.Nvn === wm.wM.id) || (((wm.wM.VVm !== -1) && (wm.wM.VVm === wm.nNv[VV.Nvn].VVm)) && (wm.nNv[VV.Nvn].wnV === wm.wVV[wm.wM.VVm].Mvv))) || (mnW.nmw(nvv, NNW, VV.x, VV.y) < 52000)) nwNMM = 1;
			if (NMNVW === 0) {
				if (VV.mNw === 0) wvmVW(VV, NW.NvW, NW.mVM, 5);
				if (VV.mNw < 300) {
					nI += (Math.random() * 6) - 4;
					vV += (Math.random() * 6) - 4;
					VV.mNw += var13;
				}
				if (VV.VN > 0) {
					VV.VN = Math.max(0, VV.VN - (var13 / 5));
					context.globalAlpha = vnw.mMv.nwW(VV.VN / 300);
					graphicOptions.drawMapStructures(NW.hidden[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
					context.globalAlpha = 1;
				}
				graphicOptions.drawMapStructures(NW.WnnVM[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			} else if (nwNMM === 1) {
				if (VV.VN === 300) graphicOptions.drawMapStructures(NW.hidden[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				else {
					VV.VN = Math.min(300, VV.VN + var13);
					context.globalAlpha = vnw.mMv.nwW(VV.VN / 300);
					graphicOptions.drawMapStructures(NW.hidden[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
					context.globalAlpha = 1;
				}
			} else if ((nwNMM === 0) && (VV.VN > 0)) {
				VV.VN = Math.max(0, VV.VN - (var13 / 5));
				context.globalAlpha = vnw.mMv.nwW(VV.VN / 300);
				graphicOptions.drawMapStructures(NW.hidden[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = 1;
			}
		};

		function mmnVM(NW, VV, nI, vV, mm, VM) {
			var nwNMM = 0;
			if (((VV.Nvn === wm.wM.id) || (((wm.wM.VVm !== -1) && (wm.wM.VVm === wm.nNv[VV.Nvn].VVm)) && (wm.nNv[VV.Nvn].wnV === wm.wVV[wm.wM.VVm].Mvv))) || (mnW.nmw(nvv, NNW, VV.x, VV.y) < 22500)) nwNMM = 1;
			if (nwNMM === 1) {
				if (VV.VN === 300) graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				else {
					VV.VN = Math.min(300, VV.VN + var13);
					context.globalAlpha = vnw.mMv.nwW(VV.VN / 300);
					graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
					context.globalAlpha = 1;
				}
			} else if ((nwNMM === 0) && (VV.VN > 0)) {
				VV.VN = Math.max(0, VV.VN - (var13 / 5));
				context.globalAlpha = vnw.mMv.nwW(VV.VN / 300);
				graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = 1;
			}
		};

		function MnmVv(NW, VV, nI, vV, mm, VM) {
			var nwNMM = 0;
			if (((VV.Nvn === wm.wM.id) || (((wm.wM.VVm !== -1) && (wm.wM.VVm === wm.nNv[VV.Nvn].VVm)) && (wm.nNv[VV.Nvn].wnV === wm.wVV[wm.wM.VVm].Mvv))) || (mnW.nmw(nvv, NNW, VV.x, VV.y) < 52000)) nwNMM = 1;
			if (nwNMM === 1) {
				if (VV.VN === 300) graphicOptions.drawMapStructures(NW.Vv[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				else {
					VV.VN = Math.min(300, VV.VN + var13);
					context.globalAlpha = vnw.mMv.nwW(VV.VN / 300);
					graphicOptions.drawMapStructures(NW.Vv[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
					context.globalAlpha = 1;
				}
			} else if ((nwNMM === 0) && (VV.VN > 0)) {
				VV.VN = Math.max(0, VV.VN - (var13 / 5));
				context.globalAlpha = vnw.mMv.nwW(VV.VN / 300);
				graphicOptions.drawMapStructures(NW.Vv[VV.id % 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = 1;
			}
		};

		function nnNwM(NW, VV, nI, vV, mm, VM) {
			graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function vWwvm(NW, VV, nI, vV, mm, VM) {
			graphicOptions.drawMapStructures(NW.Vv[VV.vmN], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function VWvMW(NW, VV, nI, vV, mm, VM) {
			if (VV.vmN > 0) graphicOptions.drawMapStructures(NW.MwM[VV.vmN - 1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, 0, 0, 0, VM);
			else graphicOptions.drawMapStructures(NW.Vv[vmVMm(VV)], (vnv + VV.x) + nI, (WNN + VV.y) + vV, 0, 0, 0, VM);
		};

		function Vnvmw(NW, VV, wmnWM) {
			if ((((VV.wWn === 0) && (wm.wM.wMW !== 1)) && (wm.wM.vVw !== 1)) && (((wmnWM === 0) || (VV.Nvn === wm.wM.id)) || (((wm.wM.VVm !== -1) && (wm.wM.VVm === wm.nNv[VV.Nvn].VVm)) && (wm.nNv[VV.Nvn].wnV === wm.wVV[wm.wM.VVm].Mvv)))) {
				var WNw = mnW.nmw(nvv, NNW, VV.x, VV.y);
				if (WNw < NvnnN) {
					wm.wM.VVw = NW.VVw;
					wm.wM.VmVVn = VV.id;
					wm.wM.wvWnM = VV.Nvn;
					wm.wM.vwvnm = NW.VMV;
					NvnnN = WNw;
					if (wm.wM.wMW === 0) wm.wM.Mvwnw = 1;
					wm.wM.wMW = 2;
					wm.wM.VvnMw = NW.wMn;
					return 1;
				}
			}
			return 0;
		};

		function wNwmW(NW, VV, nI, vV, mm, VM) {
			graphicOptions.drawMapStructures(NW.WwNnV, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, 1);
			var wVM = (VV.state >> 4) & 15;
			if (VV.Nww !== wVM) {
				VV.Nww = wVM;
				VV.VN = 0;
			}
			VV.VN = VV.VN + var13;
			VV.nWV = (VV.nWV + var13) % 1000;
			var VM = 1 + (0.03 * ((VV.nWV < 500) ? (VV.nWV / 500) : (1 - ((VV.nWV - 500) / 500))));
			if (wVM === 0) {
				context.globalAlpha = vnw.mMv.nwW(VV.VN / NW.VNvvM);
				graphicOptions.drawMapStructures(NW.Vv[0], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = 1;
			} else if (VV.VN < NW.VNvvM) {
				var wVNWM = vnw.mMv.nwW(VV.VN / NW.VNvvM);
				context.globalAlpha = 1 - wVNWM;
				graphicOptions.drawMapStructures(NW.Vv[wVM - 1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = wVNWM;
				graphicOptions.drawMapStructures(NW.Vv[wVM], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = 1;
			} else graphicOptions.drawMapStructures(NW.Vv[wVM], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function WMNnW(NW, VV, nI, vV, mm, VM) {
			var wVM = (VV.state >> 4) & 15;
			VV.VN = (VV.VN + var13) % 1000;
			var VM = 1 + (0.01 * ((VV.VN < 500) ? (VV.VN / 500) : (1 - ((VV.VN - 500) / 500))));
			graphicOptions.drawMapStructures(NW.Vv[wVM], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function nNnmN(NW, VV, nI, vV, mm, VM) {
			var wVM = (VV.state >> 4) & 15;
			VV.VN = (VV.VN + var13) % 1000;
			var VM = 1 + (0.03 * ((VV.VN < 500) ? (VV.VN / 500) : (1 - ((VV.VN - 500) / 500))));
			graphicOptions.drawMapStructures(NW.Vv[wVM], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function vnVnW(NW, VV, nI, vV, mm, VM) {
			var mwm = (VV.vmN > 0) ? NW.MwM[VV.vmN - 1] : NW.Vv[wNvvm(VV, mm)];
			var image = mwm.image;
			if (image.v !== 1) {
				mwm.image = graphicOptions.createMenuImg(mwm.src, mwm.image);
				return;
			}
			var Nmv = ((parScaling * image.width) / 2) * VM;
			var vwW = ((parScaling * image.height) / 2) * VM;
			context.save();
			context.translate(parScaling * ((vnv + VV.x) + nI), parScaling * ((WNN + VV.y) + vV));
			context.rotate(mm * mWw);
			context.translate((NW.nnVmV * parScaling) - (Nmv / 2), (NW.wMVwv * parScaling) - (vwW / 2));
			context.drawImage(image, -NW.nnVmV * parScaling, -NW.wMVwv * parScaling, Nmv, vwW);
			context.restore();
		};

		function VMWvV(NW, VV, nI, vV, mm, VM) {
			context.globalAlpha = 1;
			var Mvwwv = (VV.state >> 7) & 1;
			if (Mvwwv === 1) VV.vnV = Math.min(500, VV.vnV + var13);
			else if (VV.vnV > 0) VV.vnV = Math.max(0, VV.vnV - var13);
			if ((VV.vnV > 0) && (VV.vnV !== 500)) {
				context.globalAlpha = vnw.mMv.nVw(VV.vnV / 500);
				graphicOptions.drawMapStructures(NW.Vv[1][VV.vmN], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = vnw.mMv.nVw(1 - (VV.vnV / 500));
				graphicOptions.drawMapStructures(NW.Vv[0][VV.vmN], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				context.globalAlpha = 1;
			} else graphicOptions.drawMapStructures(NW.Vv[Mvwwv][VV.vmN], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function mWMMv(NW, VV, nI, vV, mm, VM) {
			Vnvmw(NW, VV, 0);
			graphicOptions.drawMapStructures(NW.Vv[(VV.state >> 4) & 1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function wmMnw(NW, VV, nI, vV, mm, VM) {
			Vnvmw(NW, VV, 0);
			graphicOptions.drawMapStructures(NW.Vv[(VV.state >> 4) & 3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function wMwMW(NW, VV, nI, vV, mm, VM) {
			Vnvmw(NW, VV, 0);
			var mmN = (VV.state >> 7) & 1;
			if (mmN === 1) VV.vnV = Math.min(500, VV.vnV + var13);
			else if (VV.vnV > 0) VV.vnV = Math.max(0, VV.vnV - var13);
			if (VV.vnV > 0) {
				mVwVM[NNmWw++] = VV;
				graphicOptions.drawMapStructures(NW.wMnVW[(VV.state >> 4) & 7], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			} else graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function VVWmm(VV) {
			var NW = nvn[VV.Wvn >> 7];
			context.globalAlpha = vnw.mMv.nVw(VV.vnV / 500);
			VV.Nww = (VV.Nww + var13) % 5000;
			var VN = VV.Nww;
			var VM = 1 + (0.09 * ((VN < 2500) ? (VN / 2500) : (1 - ((VN - 2500) / 2500))));
			graphicOptions.drawMapStructures(NW.WvmMW[(VV.state >> 4) & 7], vnv + VV.x, WNN + VV.y, 0, 0, 0, VM);
			context.globalAlpha = 1;
		};

		function VvMwM(NW, VV, nI, vV, mm, VM) {
			var NMNmm = (VV.state >> 4) & 1;
			var NNNnw = (VV.Nvn === 0) ? 0 : 1;
			if ((Vnvmw(NW, VV, NNNnw) === 1) && (NMNmm === 1)) wm.wM.VvnMw = NW.wVmvV;
			if (VV.mmw !== NMNmm) {
				VV.vnV = 500;
				VV.mmw = NMNmm;
			}
			if (VV.vnV > 0) VV.vnV = Math.max(0, VV.vnV - var13);
			var angle = NW.angle;
			if (NMNmm === 0) angle *= vnw.mMv.nwW(VV.vnV / 500);
			else angle *= vnw.mMv.nwW(1 - (VV.vnV / 500));
			var mwm = (VV.vmN > 0) ? NW.MwM[VV.vmN - 1] : NW.Vv;
			var image = mwm.image;
			if (image.v !== 1) {
				mwm.image = graphicOptions.createMenuImg(mwm.src, mwm.image);
				return;
			}
			var Nmv = ((parScaling * image.width) / 2) * VM;
			var vwW = ((parScaling * image.height) / 2) * VM;
			context.save();
			context.translate(parScaling * ((vnv + VV.x) + nI), parScaling * ((WNN + VV.y) + vV));
			context.rotate(mm * mWw);
			context.translate((NW.nnVmV * parScaling) - (Nmv / 2), (NW.wMVwv * parScaling) - (vwW / 2));
			context.rotate(angle);
			context.drawImage(image, -NW.nnVmV * parScaling, -NW.wMVwv * parScaling, Nmv, vwW);
			context.restore();
			if ((VV.state & 32) === 32) {
				VV.state -= 32;
				if (((VV.VN === 0) && (nI === 0)) && (vV === 0)) VV.VN = 600;
			}
			if (VV.VN > 0) {
				if (VNwNV.v !== 1) {
					VNwNV = graphicOptions.createMenuImg(MnVnm, VNwNV);
					return;
				}
				if (VV.VN > 400) context.globalAlpha = vnw.mMv.nVw(1 - ((VV.VN - 400) / 200));
				else if (VV.VN < 200) context.globalAlpha = vnw.mMv.nVw(VV.VN / 200);
				var vV = parScaling * (((VV.mN * vVm) + WNN) + MMn);
				var nI = parScaling * (((VV.NM * vVm) + vnv) + MMn);
				var vM = (parScaling * VNwNV.width) / 2;
				var wW = (parScaling * VNwNV.height) / 2;
				context.drawImage(VNwNV, nI - (vM / 2), vV - (wW / 2), vM, wW);
				context.globalAlpha = 1;
				VV.VN = Math.max(0, VV.VN - var13);
			}
		};

		function nvNvW(NW, VV, nI, vV, mm, VM) {
			var MnVWV = vnm[VV.mN][VV.NM];
			MnVWV.Wwv = 0;
			MnVWV.mVMnv = VVn;
			MnVWV.Nvn = VV.Nvn;
			if ((MnVWV.mVv !== VVn) || (MnVWV.wnMVm === 1)) {
				if (VV.vmN > 0) graphicOptions.drawMapStructures(NW.MwM[VV.vmN - 1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, 0, 0, 0, VM);
				else graphicOptions.drawMapStructures(NW.Vv[MmmwM(VV)], vnv + VV.x, WNN + VV.y, 0, 0, 0, VM);
			}
		};

		function VVnVM(NW, VV, nI, vV, mm, VM) {
			var nmM = (VV.state >> 4) & 1;
			var mVwvW = nvn[NW.id].wVm[VV.wVm];
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (((nmM === 0) && (mVwvW.NnnWw === 1)) && (Vnvmw(mVwvW, VV, 0) === 1)) wm.wM.VvnMw = NWWvN;
			graphicOptions.drawMapStructures(mVwvW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function mvNMN(NW, VV, nI, vV, mm, VM) {
			var mVwvW = nvn[NW.id].wVm[VV.wVm];
			graphicOptions.drawMapStructures(mVwvW.Vv, vnv + VV.x, WNN + VV.y, 0, 0, 0, VM);
		};

		function WVVvM(wWW, VV, nI, vV, VM) {
			var WNvWv = VV.state & 254;
			if (WNvWv === 2) {
				VV.state &= 65281;
				if (VV.mmw <= 0) {
					VV.mmw = wWW.mWMMM;
					VV.vnV = wWW.mWMMM;
					var nWmWW = Math.floor(Math.random() * 3);
					audioHandler.wmN(audioHandler.vm.MNm[0][nWmWW], 0.5, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 3.5, 0);
				}
			}
			var nvm = 0;
			var VWN = 0;
			var NnN = 0;
			var MVW = 0;
			if (VV.mmw > 0) {
				VV.mmw = Math.max(0, VV.mmw - var13);
				VV.mmw = Math.min(VV.mmw, wWW.mWMMM);
				lParTrue = (VV.mmw > wWW.WnmnV) ? (1 - ((VV.mmw - wWW.WnmnV) / (wWW.mWMMM - wWW.WnmnV))) : (VV.mmw / wWW.WnmnV);
				nvm = (VV.mNw * vnw.mMv.nwW(lParTrue)) * 0.55;
				MVW = lParTrue * 6;
				if (VV.mNw === 1) VWN = lParTrue * 25;
				else NnN = lParTrue * 25;
				if (VV.mmw === 0) VV.mNw *= -1;
			} else if (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1) {
				VV.VN = (VV.VN + var13) % 1500;
				if (VV.Nww !== 0) {
					if (VV.Nww < 750) VV.Nww = 1500 - VV.Nww;
					VV.Nww = VV.Nww + var13;
					if (VV.Nww > 1500) VV.Nww = 0;
				}
			} else {
				VV.Nww = (VV.Nww + var13) % 1500;
				if (VV.Nww > 1500) {
					VV.nWV *= -1;
					VV.Nww = VV.Nww % 1500;
				}
				if (VV.VN !== 0) {
					if (VV.VN < 750) VV.VN = 1500 - VV.VN;
					VV.VN = VV.VN + var13;
					if (VV.VN > 1500) VV.VN = 0;
				}
			}
			var VN = wWW.VN * ((VV.VN < 750) ? (VV.VN / 750) : (1 - ((VV.VN - 750) / 750)));
			var Mm = wWW.wnwnn * ((VV.Nww < 750) ? (VV.Nww / 750) : (1 - ((VV.Nww - 750) / 750)));
			graphicOptions.drawMapStructures(wWW.nvV, nI, vV, ((wWW.nvV.angle + VV.angle) + VN) + nvm, (wWW.nvV.x + (Mm * VV.nWV)) + NnN, wWW.nvV.y, VM);
			graphicOptions.drawMapStructures(wWW.VNW, nI, vV, ((-wWW.VNW.angle + VV.angle) - VN) + nvm, (wWW.VNW.x - (Mm * VV.nWV)) + VWN, wWW.VNW.y, VM);
			if (VV.mWM > 0) {
				var nww = 1;
				VV.mWM -= var13;
				var lParTrue = 0;
				if (VV.mWM > 150) lParTrue = vnw.mMv.VMN((300 - VV.mWM) / 300);
				else {
					lParTrue = vnw.mMv.nVw(VV.mWM / 150);
					nww += (1 - lParTrue) * 0.2;
				}
				nI += (Math.cos(VV.VMv) * lParTrue) * 10;
				vV += (Math.sin(VV.VMv) * lParTrue) * 10;
				context.globalAlpha = Math.min(1, Math.max(0, lParTrue));
				graphicOptions.drawMapStructures(wWW.mWM, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, nww);
				context.globalAlpha = 1;
			}
			graphicOptions.drawMapStructures(wWW.head, nI, vV, VV.angle + (nvm / 1.5), MVW, 0, VM);
		};

		function wWVVV(NW, VV, nI, vV, mm, VM) {
			var nmM = (VV.state >> 4) & 1;
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (nmM === 0) Vnvmw(NW, VV, 0);
			graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function wvVnM(NW, VV, nI, vV, mm, VM) {
			var mN = (mm + 1) % 2;
			var NM = mm % 2;
			vnm[VV.mN + mN][VV.NM + NM].Wwv = VVn;
			vnm[VV.mN - mN][VV.NM - NM].Wwv = VVn;
			vnm[VV.mN + mN][VV.NM + NM].nmwMM = VV.Nvn;
			vnm[VV.mN - mN][VV.NM - NM].nmwMM = VV.Nvn;
			vnm[VV.mN + mN][VV.NM + NM].vnW = undefined;
			vnm[VV.mN - mN][VV.NM - NM].vnW = undefined;
			Vnvmw(NW, VV, 0);
			graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
		};

		function nMnVv(NW, VV, nI, vV, mm, VM) {
			var nmM = (VV.state >> 4) & 1;
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (nmM === 0) Vnvmw(NW, VV, 0);
			var mmN = (VV.state >> 5) & 1;
			if (mmN === 1) VV.vnV = Math.min(10000, VV.vnV + var13);
			else if (VV.vnV > 0) VV.vnV = Math.max(0, VV.vnV - var13);
			var lParTrue = 0;
			if (VV.vnV > 0) {
				lParTrue = vnw.mMv.nVw(VV.vnV / 10000);
				VV.nWV += (lParTrue * var13) / 300;
				graphicOptions.drawMapStructures(NW.Vv[1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				graphicOptions.drawMapStructures(NW.Vv[2], ((vnv + VV.x) + nI) + NW.mnwVw[mm][0], ((WNN + VV.y) + vV) + NW.mnwVw[mm][1], (mm * mWw) + VV.nWV, 0, 0, VM);
				graphicOptions.drawMapStructures(NW.Vv[3], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			} else graphicOptions.drawMapStructures(NW.Vv[0], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function WNVnm(NW, VV, nI, vV, mm, VM) {
			var nmM = (VV.state >> 4) & 1;
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (nmM === 0) Vnvmw(NW, VV, 0);
			var mmN = (VV.state >> 5) & 1;
			if (mmN === 1) VV.vnV = Math.min(10000, VV.vnV + var13);
			else if (VV.vnV > 0) VV.vnV = Math.max(0, VV.vnV - var13);
			var lParTrue = 0;
			if (VV.vnV > 0) {
				lParTrue = vnw.mMv.nVw(VV.vnV / 10000);
				nI += ((Math.random() * 2) - 1) * lParTrue;
				vV += ((Math.random() * 2) - 1) * lParTrue;
				VV.nWV += (lParTrue * var13) / 300;
				graphicOptions.drawMapStructures(NW.Vv[1], ((vnv + VV.x) + nI) + NW.mnwVw[mm][0], ((WNN + VV.y) + vV) + NW.mnwVw[mm][1], (mm * mWw) + VV.nWV, 0, 0, VM);
				graphicOptions.drawMapStructures(NW.Vv[0], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			} else graphicOptions.drawMapStructures(NW.Vv[2], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function mMnwm(VV, nI, vV) {
			VV.VN = (VV.VN + var13) % 1000;
			var VM = 1 + (0.15 * ((VV.VN < 500) ? (VV.VN / 500) : (1 - ((VV.VN - 500) / 500))));
			VM *= parScaling;
			if (VNwNV.v !== 1) {
				VNwNV = graphicOptions.createMenuImg(MnVnm, VNwNV);
				return;
			}
			context.globalAlpha = vnw.mMv.nVw(VV.mmw / 500);
			var vV = parScaling * (((VV.mN * vVm) + WNN) + MMn);
			var nI = parScaling * (((VV.NM * vVm) + vnv) + MMn);
			var vM = (VM * VNwNV.width) / 2;
			var wW = (VM * VNwNV.height) / 2;
			context.drawImage(VNwNV, nI - (vM / 2), vV - (wW / 2), vM, wW);
			context.globalAlpha = 1;
		};

		function MvNwV(NW, VV, nI, vV, mm, VM) {
			var nmM = (VV.state >> 4) & 1;
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (nmM === 0) Vnvmw(NW, VV, 0);
			var mmN = (VV.state >> 5) & 1;
			if (mmN === 1) VV.vnV = Math.min(10000, VV.vnV + var13);
			else if (VV.vnV > 0) {
				VV.vnV = Math.max(0, VV.vnV - var13);
			}
			var lParTrue = 0;
			if (VV.vnV > 0) {
				lParTrue = vnw.mMv.nVw(VV.vnV / 10000);
				nI += ((Math.random() * 2) - 1) * lParTrue;
				vV += ((Math.random() * 2) - 1) * lParTrue;
				graphicOptions.drawMapStructures(NW.Vv[0], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			} else graphicOptions.drawMapStructures(NW.Vv[1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function mnwwv(NW, VV, nI, vV, mm, VM) {
			var mN = (mm + 1) % 2;
			var NM = mm % 2;
			vnm[VV.mN + mN][VV.NM + NM].Wwv = VVn;
			vnm[VV.mN - mN][VV.NM - NM].Wwv = VVn;
			vnm[VV.mN + mN][VV.NM + NM].nmwMM = VV.Nvn;
			vnm[VV.mN - mN][VV.NM - NM].nmwMM = VV.Nvn;
			vnm[VV.mN + mN][VV.NM + NM].vnW = undefined;
			vnm[VV.mN - mN][VV.NM - NM].vnW = undefined;
			var nmM = (VV.state >> 4) & 1;
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (nmM === 0) Vnvmw(NW, VV, 0);
			var mmN = (VV.state >> 5) & 1;
			if (mmN === 1) VV.vnV = Math.min(10000, VV.vnV + var13);
			else if (VV.vnV > 0) {
				VV.vnV = Math.max(0, VV.vnV - var13);
			}
			var lParTrue = 0;
			if (VV.vnV > 0) {
				lParTrue = vnw.mMv.nVw(VV.vnV / 10000);
				nI += ((Math.random() * 2) - 1) * lParTrue;
				vV += ((Math.random() * 2) - 1) * lParTrue;
				graphicOptions.drawMapStructures(NW.Vv[1], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			} else graphicOptions.drawMapStructures(NW.Vv[0], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function VVNww(NW, VV, nI, vV, mm, VM) {
			var mN = (mm + 1) % 2;
			var NM = mm % 2;
			vnm[VV.mN + mN][VV.NM + NM].Wwv = VVn;
			vnm[VV.mN - mN][VV.NM - NM].Wwv = VVn;
			vnm[VV.mN + mN][VV.NM + NM].nmwMM = VV.Nvn;
			vnm[VV.mN - mN][VV.NM - NM].nmwMM = VV.Nvn;
			vnm[VV.mN + mN][VV.NM + NM].vnW = undefined;
			vnm[VV.mN - mN][VV.NM - NM].vnW = undefined;
			var nmM = (VV.state >> 4) & 1;
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (nmM === 0) Vnvmw(NW, VV, 0);
			var mmN = (VV.state >> 5) & 1;
			if (mmN === 1) VV.vnV = 1 + (VV.vnV + (var13 % 300000));
			else VV.vnV = 0;
			var lParTrue = 0;
			if (VV.vnV > 0) {
				graphicOptions.drawMapStructures(NW.Vv[1 + (Math.floor(VV.vnV / 500) % 3)], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
				var mmN = NW.mmN[Math.floor(VV.vnV / 50) % NW.mmN.length];
				if (mmN !== 0) graphicOptions.drawMapStructures(mmN, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			} else graphicOptions.drawMapStructures(NW.Vv[0], (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function vVMWW(VV) {
			context.globalAlpha = vnw.mMv.nVw(VV.vnV / 500);
			VV.nWV = (VV.nWV + var13) % 1000;
			for (var mN = 0; mN < 3; mN++) {
				var VN = (VV.nWV + (mN * 333)) % 1000;
				var VM = 1 + (0.15 * ((VN < 500) ? (VN / 500) : (1 - ((VN - 500) / 500))));
				graphicOptions.drawMapStructures(nMVNV[mN], (vnv + VV.x) + vMmnW[mN], (WNN + VV.y) + WnMNn[mN], 0, 0, 0, VM);
			}
			VV.Nww = (VV.Nww + var13) % 5000;
			var VN = VV.Nww;
			var VM = 1 + (0.15 * ((VN < 2500) ? (VN / 2500) : (1 - ((VN - 2500) / 2500))));
			graphicOptions.drawMapStructures(nMVNV[3], (vnv + VV.x) + vMmnW[3], (WNN + VV.y) + WnMNn[3], 0, 0, 0, VM);
			context.globalAlpha = 1;
		};

		function nMNNV(NW, VV, nI, vV, mm, VM) {
			var nmM = (VV.state >> 4) & 1;
			if (nmM === 1) VV.mmw = Math.min(500, VV.mmw + var13);
			else if (VV.mmw > 0) VV.mmw = Math.max(0, VV.mmw - var13);
			if (nmM === 0) Vnvmw(NW, VV, 0);
			graphicOptions.drawMapStructures(NW.Vv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, mm * mWw, 0, 0, VM);
			var mmN = (VV.state >> 5) & 1;
			if (mmN === 1) VV.vnV = Math.min(500, VV.vnV + var13);
			else if (VV.vnV > 0) VV.vnV = Math.max(0, VV.vnV - var13);
			if (VV.vnV > 0) mVwVM[NNmWw++] = VV;
			if (VV.mmw > 0) mMnwm(VV, nI, vV);
		};

		function NMvNm(VV) {
			var image = mvn[wvmWN].MvNNV;
			var vMW = Math.floor(VV.mnM / 70);
			if (vMW < 10) {
				if (VV.mnM === 0) {
					if (nM.MWmmv !== -2) nM.MWmmv = 20;
					audioHandler.wmN(audioHandler.vm.mwM, 0.7, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 4);
				}
				graphicOptions.drawMapStructures(image[vMW], vnv + VV.x, WNN + VV.y, 0, 0, 0, 1);
			}
			VV.mnM += var13;
		};

		function wMwMM(VV) {
			vnm[VV.mN][VV.NM].Wwv = VVn;
			vnm[VV.mN][VV.NM].nmwMM = VV.Nvn;
			vnm[VV.mN][VV.NM].vnW = undefined;
			var mNNVw = nwV[(VV.Wvn >> 5) & 31];
			var vW = mNNVw.type[(VV.Wvn >> 10) & 7];
			var VM = 1;
			if (VV.wWn !== 0) {
				if (VV.VMm === 0) {
					if ((mNNVw.mmM !== 0) && (NwvVm[mNNVw.mmM] === 0)) {
						audioHandler.wmN(audioHandler.vm.NwW[mNNVw.mmM], 1, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 2.5);
						NwvVm[mNNVw.mmM] = 1;
					}
					wvmVW(VV, mNNVw.NvW, vW.mVM, vW.NVW);
				}
				VV.VMm += var13;
				var lParTrue = Math.max(0, vnw.mMv.VmN(1 - (VV.VMm / 300)));
				context.globalAlpha = lParTrue;
				VM = Math.min(1 + (0.35 * (1 - lParTrue)), 1.35);
			} else if (VV.mnM < 700) {
				if ((VV.mnM === 0) && (vW.NMm !== undefined)) {
					if (WVVwM === 0) VV.VN = Math.floor(Math.random() * 6000);
					else {
						VV.nWV = Math.floor(Math.random() * 6000);
						VV.VN = 3000;
					}
				}
				var lParTrue = Math.min(1, vnw.mMv.VmN(VV.mnM / 700));
				context.globalAlpha = lParTrue;
				VM = (0.5 * lParTrue) + 0.5;
			}
			if ((VV.state & 2) === 2) {
				if ((mNNVw.NWv !== 0) && (NwvVm[mNNVw.NWv] === 0)) {
					audioHandler.wmN(audioHandler.vm.NwW[mNNVw.NWv], 1, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 2.8);
					NwvVm[mNNVw.NWv] = 1;
				}
				VV.mWM = 250;
				if (VV.mNw <= 0) VV.mNw = 300;
				VV.VMv = (NnwMW * (VV.Wvn & 31)) / 31;
				VV.state &= ~2;
				wvmVW(VV, mNNVw.NvW, vW.mVM, 1);
			}
			var nI = 0;
			var vV = 0;
			if (VV.mWM > 0) {
				var mWM = (VV.mWM > 200) ? ((20 * (250 - VV.mWM)) / 50) : ((20 * VV.mWM) / 200);
				nI = Math.cos(VV.VMv) * mWM;
				vV = Math.sin(VV.VMv) * mWM;
				VV.mWM -= var13;
			}
			if (((VV.VN === 3000) && (WVVwM !== 0)) && (VV.mWM === 0)) {
				graphicOptions.drawMapStructures(vW.vwwvv, (vnv + VV.x) + nI, (WNN + VV.y) + vV, VV.angle, 0, 0, VM);
				if (VV.wWn !== 0) {
					if (VV.VMm > 300) VV.wWn = 2;
					context.globalAlpha = 1;
				} else if (VV.mnM < 700) {
					VV.mnM += var13;
					context.globalAlpha = 1;
				}
				return;
			}
			graphicOptions.drawMapStructures(vW.image, (vnv + VV.x) + nI, (WNN + VV.y) + vV, VV.angle, 0, 0, VM);
			if (vW.NMm !== undefined) {
				nI = 0;
				vV = 0;
				if (VV.mNw > 0) {
					var mWM = (VV.mNw > 250) ? (10 * vnw.mMv.VMN((300 - VV.mNw) / 250)) : (10 * vnw.mMv.nVw(VV.mNw / 250));
					nI = Math.cos(VV.VMv) * mWM;
					vV = Math.sin(VV.VMv) * mWM;
					VV.mNw -= var13;
				}
				if (WVVwM === 0) {
					if (VV.nWV > 0) VV.nWV = Math.max(0, VV.nWV - var13);
					else VV.VN += var13;
					if (VV.VN > 6000) VV.VN = 0;
					if (VV.VN > 3000) VM += (0.025 * (VV.VN - 3000)) / 3000;
					else VM += 0.025 - ((0.025 * VV.VN) / 3000);
				} else {
					if (VV.nWV === 0) VV.nWV = VV.VN;
					if (VV.VN > 6000) VV.VN = 0;
					if (VV.VN > 3000) {
						VV.VN = Math.max(3000, VV.VN - var13);
						VM += (0.025 * (VV.VN - 3000)) / 3000;
					} else if (VV.VN < 3000) {
						VV.VN = Math.min(3000, VV.VN + var13);
						VM += 0.025 - ((0.025 * VV.VN) / 3000);
					}
				}
				graphicOptions.drawMapStructures(vW.NMm, (vnv + VV.x) + nI, (WNN + VV.y) + vV, VV.angle, 0, 0, VM);
			}
			if (VV.wWn !== 0) {
				if (VV.VMm > 300) VV.wWn = 2;
				context.globalAlpha = 1;
			} else if (VV.mnM < 700) {
				VV.mnM += var13;
				context.globalAlpha = 1;
			}
		};

		function WVwww(VV) {
			vnm[VV.mN][VV.NM].Wwv = VVn;
			vnm[VV.mN][VV.NM].nmwMM = VV.Nvn;
			vnm[VV.mN][VV.NM].vnW = undefined;
			var mm = (VV.Wvn >> 5) & 3;
			var NW = nvn[VV.Wvn >> 7];
			var VM = 1;
			vnm[VV.mN][VV.NM].vnW = NW.detail.vnW;
			if (VV.wWn !== 0) {
				if (VV.VMm === 0) {
					var VNm = (NW.NvW === -1) ? nvn[NW.id].wVm[VV.wVm] : NW;
					wvmVW(VV, VNm.NvW, VNm.mVM, 5);
					if ((VNm.mmM !== 0) && (NwvVm[VNm.mmM] === 0)) {
						audioHandler.wmN(audioHandler.vm.NwW[VNm.mmM], 1, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 2.5);
						NwvVm[VNm.mmM] = 1;
					}
				}
				VV.VMm += var13;
				var lParTrue = Math.max(0, vnw.mMv.VmN(1 - (VV.VMm / 300)));
				context.globalAlpha = lParTrue;
				VM = Math.min(1 + (0.35 * (1 - lParTrue)), 1.35);
			}
			if ((VV.state & 2) === 2) {
				VV.mWM = 250;
				VV.VMv = (NnwMW * (VV.Wvn & 31)) / 31;
				VV.state &= ~2;
				var VNm = (NW.NvW === -1) ? nvn[NW.id].wVm[VV.wVm] : NW;
				wvmVW(VV, VNm.NvW, VNm.mVM, 1);
				if ((VNm.NWv !== 0) && (NwvVm[VNm.NWv] === 0)) {
					audioHandler.wmN(audioHandler.vm.NwW[VNm.NWv], 1, mnW.WNw(wm.wM.x, wm.wM.y, VV.x, VV.y) / 2.8);
					NwvVm[VNm.NWv] = 1;
				}
			}
			var nI = 0;
			var vV = 0;
			if (VV.mWM > 0) {
				if (VV.mWM > 200) {
					var mWM = (20 * (250 - VV.mWM)) / 100;
					nI = Math.cos(VV.VMv) * mWM;
					vV = Math.sin(VV.VMv) * mWM;
					VV.mWM -= var13;
				} else {
					var mWM = (20 * VV.mWM) / 200;
					nI = Math.cos(VV.VMv) * mWM;
					vV = Math.sin(VV.VMv) * mWM;
					VV.mWM -= var13;
				}
			}
			NW.nv(NW, VV, nI, vV, mm, VM);
			if (VV.wWn !== 0) {
				if (VV.VMm > 300) VV.wWn = 2;
				context.globalAlpha = 1;
			}
		};

		function nNvMN(VV) {
			vnm[VV.mN][VV.NM].Wwv = VVn;
			vnm[VV.mN][VV.NM].nmwMM = VV.Nvn;
			vnm[VV.mN][VV.NM].vnW = undefined;
			var wVNWM = 1;
			var mN = VV.mN;
			var NM = VV.NM;
			var vvVnw = (mN <= 1) ? 0 : (mN - 1);
			var mwMvM = (mN >= (wwv - 2)) ? (wwv - 1) : (mN + 1);
			var Mwwvn = (NM <= 1) ? 0 : (NM - 1);
			var wvmNm = (NM >= (mvv - 2)) ? (mvv - 1) : (NM + 1);
			for (mN = vvVnw; mN <= mwMvM; mN++) {
				for (NM = Mwwvn; NM <= wvmNm; NM++) {
					var wNW = vnm[mN][NM];
					if (wNW.VVn !== VVn) continue;
					var m = wNW.b;
					var VmV = wNW.mN;
					for (var VmW = 0; VmW < VmV; VmW++) {
						var Mmw = m[VmW];
						var vW = Mmw.type;
						var wMWnN = nmm.wNn[vW][Mmw.nNW];
						if (((wMWnN.Nvn !== wm.wM.id) || (wMWnN.id !== 0)) && (mnW.WNw(wMWnN.x, wMWnN.y, VV.x, VV.y) < (mvn[vW].nnv - 4))) {
							//window.console.log("DETECTED");
							VV.rx = VV.x;
							VV.ry = VV.y;
							VV.Vnn = VV.x;
							VV.nvM = VV.y;
						}
					}
				}
			}
			if (VV.wWn !== 0) {
				VV.VMm += var13;
				wVNWM = Math.max(0, vnw.mMv.VmN(1 - (VV.VMm / 200)));
				context.globalAlpha = wVNWM;
			}
			var WNw = mnW.nmw(VV.Vnn, VV.nvM, VV.x, VV.y);
			if ((WNw < 400) || (VV.wWn !== 0)) {
				context.globalAlpha = Math.min(WNw / 400, wVNWM);
				graphicOptions.drawMapStructures(mvn[mNn].vVMwn[VV.Wvn][2], vnv + VV.x, WNN + VV.y, VV.angle, 0, 0, 1);
				context.globalAlpha = wVNWM;
				graphicOptions.drawMapStructures(mvn[mNn].vVMwn[VV.Wvn][1], vnv + VV.x, WNN + VV.y, VV.angle, 0, 0, 1);
			} else graphicOptions.drawMapStructures(mvn[mNn].vVMwn[VV.Wvn][0], vnv + VV.x, WNN + VV.y, VV.angle, 0, 0, 1);
			if (VV.wWn !== 0) {
				if (VV.VMm > 200) VV.wWn = 2;
				context.globalAlpha = 1;
			}
		};

		function MNvNw(VV) {
			vnm[VV.mN][VV.NM].Wwv = VVn;
			vnm[VV.mN][VV.NM].nmwMM = VV.Nvn;
			vnm[VV.mN][VV.NM].vnW = undefined;
			if (VV.mmw !== 0) {
				var wM = wm.nNv[VV.mmw];
				if (VVn === wM.VVn) {
					var nNv = nmm.wNn[mNn];
					var WMv = nNv[wM.nnnNM];
					VV.Vnn = WMv.x;
					VV.nvM = WMv.y;
					VV.nMmvM = Math.cos(mnW.angle(VV.rx, VV.ry, VV.Vnn, VV.nvM));
					VV.WnMNm = Math.sin(mnW.angle(VV.rx, VV.ry, VV.Vnn, VV.nvM));
				}
			}
			if ((VV.wWn === 0) && (mnW.nmw(VV.x, VV.y, VV.Vnn, VV.nvM) < 1)) {
				var WNw = mnW.nmw(nvv, NNW, VV.x, VV.y);
				if (WNw < nvNmv) {
					nvNmv = WNw;
					wm.wM.WV = VV.Wvn;
					wm.wM.NvmvM = VV.id;
					if (wm.wM.wMW <= 0) wm.wM.wMW = 0;
					else wm.wM.Mvwnw = 1;
				}
			}
			var VN = 0;
			var NVWNn = 0;
			if (VV.wWn !== 0) {
				VV.VMm += var13;
				context.globalAlpha = Math.max(0, vnw.mMv.VmN(1 - (VV.VMm / 800)));
				NVWNn = VV.VMm / 2400;
			} else if (VV.mnM < 500) {
				var lParTrue = Math.min(1, vnw.mMv.VmN(VV.mnM / 500));
				context.globalAlpha = lParTrue;
			}
			VV.VN = (VV.VN + var13) % 1500;
			if (VV.VN < 750) VN = 0.95 + (vnw.mMv.nwW(VV.VN / 750) * 0.1);
			else VN = 0.95 + (vnw.mMv.nwW(1 - ((VV.VN - 750) / 750)) * 0.1);
			graphicOptions.drawMapStructures(MWW[VV.Wvn], vnv + VV.x, WNN + VV.y, VV.angle, 0, 0, VN - NVWNn);
			if (VV.wWn !== 0) {
				if (VV.VMm > 800) VV.wWn = 2;
				context.globalAlpha = 1;
			} else if (VV.mnM < 500) {
				VV.mnM += var13;
				context.globalAlpha = 1;
			}
		};

		function mMvnV() {
			var mN = 0;
			NNmWw = 0;
			vmNVw[0] = 0;
			vmNVw[1] = 0;
			vmNVw[2] = 0;
			vmNVw[3] = 0;
			NvnnN = 12000;
			nvNmv = 12000;
			wm.wM.Mvwnw = 0;
			wm.wM.VmVVn = -1;
			wm.wM.vwvnm = -1;
			if (wm.wM.wMW !== 1) wm.wM.wMW = -1;
			var Mww = nmm.wNn[mvn.length];
			var NMN = nmm.border[mvn.length];
			var VNv = NMN.border;
			var WWw = nmm.wNn[wMwnN];
			var wmM = nmm.border[wMwnN];
			var Mwn = wmM.border;
			for (mN = 0; mN < Mwn; mN++) NMmWm(WWw[wmM.nNW[mN]]);
			WWw = nmm.wNn[WvmMM];
			wmM = nmm.border[WvmMM];
			Mwn = wmM.border;
			for (mN = 0; mN < Mwn; mN++) vnvWn(WWw[wmM.nNW[mN]]);
			for (mN = 0; mN < Mwn; mN++) WVwww(WWw[wmM.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === WvmMM) WVwww(VV);
			}
			if (vMwVv !== VnVvv) {
				var NvW = nmm.wNn[MnvNn];
				var wmM = nmm.border[MnvNn];
				var Mwn = wmM.border;
				for (mN = 0; mN < Mwn; mN++) MWmvW(NvW[wmM.nNW[mN]]);
				if (mMWnm.id !== -1) {
					nmm.remove(0, mMWnm.id, mMWnm.Mvv, MnvNn);
					mMWnm.id = -1;
				}
			}
			var WWw = nmm.wNn[mmMWn];
			var wmM = nmm.border[mmMWn];
			var Mwn = wmM.border;
			for (mN = 0; mN < Mwn; mN++) WVwww(WWw[wmM.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === mmMWn) WVwww(VV);
			}
			vvvwv = nmm.wNn[nwwnV];
			vwNWm = nmm.border[nwwnV];
			WWwvV = vwNWm.border;
			for (mN = 0; mN < WWwvV; mN++) wMwMM(vvvwv[vwNWm.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === nwwnV) wMwMM(VV);
			}
			var WWw = nmm.wNn[nVVMM];
			var wmM = nmm.border[nVVMM];
			var Mwn = wmM.border;
			for (mN = 0; mN < Mwn; mN++) wWMNN(WWw[wmM.nNW[mN]]);
			for (mN = 0; mN < Mwn; mN++) WVwww(WWw[wmM.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === nVVMM) WVwww(VV);
			}
			var nNv = nmm.wNn[mNn];
			var WWV = nmm.border[mNn];
			var VmV = WWV.border;
			for (mN = 0; mN < VmV; mN++) {
				var Wv = WWV.nNW[mN];
				var VV = nNv[Wv];
				var wM = wm.nNv[VV.Nvn];
				WmNVw(VV);
				wM.nnnNM = Wv;
				wM.VVn = VVn;
				wMVwW(VV, Wv);
			}
			wm.wM.WV = -1;
			wm.wM.NvmvM = -1;
			var VMMVv = nmm.wNn[MWWWm];
			var wWwWV = nmm.border[MWWWm];
			var NwWWM = wWwWV.border;
			for (mN = 0; mN < NwWWM; mN++) MNvNw(VMMVv[wWwWV.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === MWWWm) MNvNw(VV);
			}
			var vVMwn = nmm.wNn[mNMvV];
			var VVVvW = nmm.border[mNMvV];
			var mvMvm = VVVvW.border;
			for (mN = 0; mN < mvMvm; mN++) nNvMN(vVMwn[VVVvW.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === mNMvV) nNvMN(VV);
			}
			vvvwv = nmm.wNn[MNNWW];
			vwNWm = nmm.border[MNNWW];
			WWwvV = vwNWm.border;
			for (mN = 0; mN < WWwvV; mN++) wMwMM(vvvwv[vwNWm.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === MNNWW) wMwMM(VV);
			}
			if (wm.wNN === wm.mWwvm) {
				for (mN = 0; mN < VmV; mN++) {
					var VV = nNv[WWV.nNW[mN]];
					var nVv = wm.nNv[VV.Nvn].nVv;
					if (nVv === 0) Nvvmn(VV);
					else {
						VV.Wvn = nVv - 1;
						vnmMn(VV);
					};
				}
				for (mN = 0; mN < VNv; mN++) {
					var VV = Mww[NMN.nNW[mN]];
					if (VV.type === mNn) {
						WmNVw(VV);
						var nVv = wm.nNv[VV.Nvn].nVv;
						if (nVv === 0) Nvvmn(VV);
						else {
							VV.Wvn = nVv - 1;
							vnmMn(VV);
						};
					}
				}
			} else {
				for (mN = 0; mN < VmV; mN++) Nvvmn(nNv[WWV.nNW[mN]]);
				for (mN = 0; mN < VNv; mN++) {
					var VV = Mww[NMN.nNW[mN]];
					if (VV.type === mNn) {
						WmNVw(VV);
						Nvvmn(VV);
					}
				}
			}
			var wWW = nmm.wNn[MNMnm];
			var MwvMV = nmm.border[MNMnm];
			var VWVmN = MwvMV.border;
			for (mN = 0; mN < VWVmN; mN++) vnmMn(wWW[MwvMV.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === MNMnm) vnmMn(VV);
			}
			WWw = nmm.wNn[wMwnN];
			wmM = nmm.border[wMwnN];
			Mwn = wmM.border;
			for (mN = 0; mN < Mwn; mN++) WVwww(WWw[wmM.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === wMwnN) WVwww(VV);
			}
			for (mN = 0; mN < NNmWw; mN++) {
				var NW = nvn[mVwVM[mN].Wvn >> 7];
				NW.WMnNn(mVwVM[mN]);
				mVwVM[mN] = null;
			}
			vvvwv = nmm.wNn[WWnVn];
			vwNWm = nmm.border[WWnVn];
			WWwvV = vwNWm.border;
			for (mN = 0; mN < WWwvV; mN++) wMwMM(vvvwv[vwNWm.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === WWnVn) wMwMM(VV);
			}
			vvvwv = nmm.wNn[Wnw];
			vwNWm = nmm.border[Wnw];
			WWwvV = vwNWm.border;
			for (mN = 0; mN < WWwvV; mN++) wMwMM(vvvwv[vwNWm.nNW[mN]]);
			for (mN = 0; mN < VNv; mN++) {
				var VV = Mww[NMN.nNW[mN]];
				if (VV.type === Wnw) wMwMM(VV);
			}
			MvNNV = nmm.wNn[wvmWN];
			nMWvn = nmm.border[wvmWN];
			vmwmv = nMWvn.border;
			for (mN = 0; mN < vmwmv; mN++) NMvNm(MvNNV[nMWvn.nNW[mN]]);
			for (mN = 0; mN < VmV; mN++) wMMwW(nNv[WWV.nNW[mN]]);
			if (wm.wNN !== wm.MNMwn) {
				for (mN = 0; mN < VmV; mN++) nvNNN(nNv[WWV.nNW[mN]]);
				for (mN = 0; mN < VmV; mN++) mmmnM(nNv[WWV.nNW[mN]]);
			}
		};

		function mMNMw() {
			VmVwM = 0;
		};
		var mNwnw;
		var nNVww = graphicOptions.options.MNmVM;
		var MVmnm = 0;
		var VmvNW = 0;
		var VmVwM = 0;
		var MVWWw = 0;
		var MNwmM = 0;

		function VvmnW(NN) {
			if (MNwmM === 0) {
				MVmnm = nM.scale;
				nM.scale = 0.8;
				VmvNW = 0;
				VmVwM = NN;
				MVWWw = 0;
				MNwmM = 1;
				nNVww = graphicOptions.options.devicePixelRatio1 / graphicOptions.options.devicePixelRatio2;
			}
		};

		function nwVmv() {
			if ((VmVwM <= 0) && ((VmvNW + var13) > 1500)) {
				MNwmM = 0;
				VmvNW = 1500;
			} else {
				VmVwM -= var13;
				MVWWw += var13;
				VmvNW = (VmvNW + var13) % 1500;
			}
			var lParTrue = vnw.mMv.nwW(((VmvNW > 750) ? (1500 - VmvNW) : VmvNW) / 750);
			if (((VmVwM < 750) && (VmvNW > 750)) && ((1500 - VmvNW) > VmVwM)) {
				var VWmnn = Math.max(0, (1500 - VmvNW) / 750);
				lParTrue = (0.5 * VWmnn) + (lParTrue * (1 - 0.5));
			} else if (MVWWw > 750) lParTrue = 0.5 + (lParTrue * (1 - 0.5));
			var WmWNW = lParTrue * 20;
			nM.scale = MVmnm + lParTrue;
			graphicOptions.options.devicePixelRatio2 = graphicOptions.options.devicePixelRatio1 / (nNVww + WmWNW);
			mNwnw();
		};
		var wmnww = document.createElement('canvas');
		var VWVmm = wmnww.getContext('2d');

		function NmnmW() {
			var mnv;
			var lParTrue;
			var NwnWN = context;
			lParTrue = 1 - vnw.mMv.VMN(wm.WnV / 1000);
			wmnww.width = canvasM.width;
			wmnww.height = canvasM.height;
			context = VWVmm;
			context.save();
			var parUndefined = graphicOptions.options.devicePixelRatio2 / graphicOptions.options.WnWVV;
			context.scale(parUndefined, parUndefined);
			mnv = NVwNv;
			NVwNv = nvn;
			nvn = mnv;
			mnv = wMvWv;
			wMvWv = wnM;
			wnM = mnv;
			mnv = mVMVW;
			mVMVW = MWW;
			MWW = mnv;
			mnv = vmwwm;
			vmwwm = nwV;
			nwV = mnv;
			mnv = NVvmm;
			NVvmm = mvn;
			mvn = mnv;
			mnv = MmNnW;
			MmNnW = nMVNV;
			nMVNV = mnv;
			mnv = vWnMV;
			vWnMV = NVnNV;
			NVnNV = mnv;
			mnv = vmMmN;
			vmMmN = vMV;
			vMV = mnv;
			context.fillStyle = (wm.NWW === 0) ? "#0B2129" : "#3D5942";
			context.fillRect(0, 0, var1, var2);
			NVmwm();
			mMvnV();
			mnv = NVwNv;
			NVwNv = nvn;
			nvn = mnv;
			mnv = wMvWv;
			wMvWv = wnM;
			wnM = mnv;
			mnv = mVMVW;
			mVMVW = MWW;
			MWW = mnv;
			mnv = vmwwm;
			vmwwm = nwV;
			nwV = mnv;
			mnv = NVvmm;
			NVvmm = mvn;
			mvn = mnv;
			mnv = MmNnW;
			MmNnW = nMVNV;
			nMVNV = mnv;
			mnv = vWnMV;
			vWnMV = NVnNV;
			NVnNV = mnv;
			mnv = vmMmN;
			vmMmN = vMV;
			vMV = mnv;
			context.restore();
			context = NwnWN;
			context.globalAlpha = lParTrue;
			context.drawImage(wmnww, 0, 0, var1, var2);
			context.globalAlpha = 1;
			wm.WnV = Math.max(0, wm.WnV - var13);
			if (wm.WnV === 0) wm.WmVNV();
		};

		function WVmVW() {
			nM.vnn += var13;
			if (MNwmM === 1) nwVmv();
			VmNmw();
			wnWVV();
			NVmwm();
			VmvMM();
			mMvnV();
			mWNvm();
			if (wm.WnV > 0) NmnmW();
			nmm.MwvNm();
			VVn++;
			for (var mN = 0; mN < WvvNN; mN++) NwvVm[mN] = 0;
			parScaling = wWwvm;
			var7 = var1 / parScaling;
			var8 = var2 / parScaling;
		};

		function MwmMN(lParTrue) {
			WVVwM = 0;
		};

		function VNwmV(lParTrue) {
			window.localStorage.setItem("particles", "" + lParTrue);
			vMwVv = lParTrue;
		};
		return {
			vnn: window.Date.now(),
			reset: MWMVm,
			nVmmN: WVmVW,
			mVN: vNvvm,
			nWnVM: vwnVW,
			wMw: drawPlayerStates,
			mVnnv: NwNwM,
			NWn: VwNmv,
			Nwv: WvVVM,
			nnnNn: MvvvW,
			WMmMv: MNnNm,
			vNN: nvmVN,
			VNM: NnNMv,
			VVm: wVNnm,
			wMW: WmNWN,
			mmnWM: mnwmN,
			vvwMv: 0,
			MWmmv: 0,
			scale: 0,
			VNwmV: VNwmV,
			MwmMN: MwmMN,
			VvmnW: VvmnW,
			mMNMw: mMNMw,
			VwMwV: VwMwV,
			vVm: vVm,
			MMn: MMn,
			MWNVV: 0,
			VWm: VWvMW,
			nNw: vnVnW,
			nNM: VvMwM,
			vwNNw: wWVVV,
			WmvnW: nMNNV,
			NVmWn: vVMWW,
			mvNnV: mnwwv,
			mNMNv: MvNwV,
			VVMwW: nMnVv,
			vWnvW: WNVnm,
			WWmnN: wvVnM,
			MVVvv: VVNww,
			MMnWv: nNnmN,
			WmmVn: WMNnW,
			VVMMv: nvNvW,
			wMnnM: nnNwM,
			VmVmv: mmnVM,
			nWWNM: vWwvm,
			wMWVm: VVnVM,
			Wmvvm: mvNMN,
			wMMMN: MnmVv,
			WVMWn: vWMmm,
			vmVNn: nnWVv,
			nVv: WVVvM,
			WwNmW: wNwmW,
			nNMWw: wMwMW,
			mVWwM: VVWmm,
			wNMMW: mWMMv,
			wWnnN: wmMnw,
			WmMvW: VMWvV,
			mvMWW: WvNnm
		};
	})();
	var mMN = (function() {
		var Wnv = 0;
		var vvv = 1;
		var nnW = 2;
		var NvM = 4;
		var mnMWv = 0;
		var mmmnw = 0;
		var VwvvN = 4;
		var vMm = null;
		var MwVWN = -1;
		var wnMWW = 0;
		var vMv = [];
		var VWmnV = [];
		var WMMvv = [];
		var wvvvm = {
			mN: 0,
			NM: 0
		};

		function Wnnnn() {
			for (var mN = 0; mN < mmmnw; mN++) {
				vMv[mN] = [];
				for (var NM = 0; NM < mnMWv; NM++) vMv[mN][NM] = 0;
			}
		};

		function WvmwV(MNNWN, vM, wW) {
			vMm = new nMWvv.NmVNM(MNNWN);
			mnMWv = vM;
			mmmnw = wW;
			mMN.width = vM;
			mMN.height = wW;
			vMv = [];
			mMN.vMv = vMv;
			VWmnV = [];
			WMMvv = [];
			mMN.WMMvv = WMMvv;
			MwVWN = -1;
			wvvvm.mN = 0;
			wvvvm.NM = 0;
			wnMWW = 0;
		};

		function wnW(MNNWN, vM, wW, vnmVM) {
			WvmwV(MNNWN, vM, wW);
			Wnnnn();
			if (vnmVM !== undefined) vnmVM();
		};
		return {
			seed: 0,
			wnW: wnW,
			vMv: vMv,
			WMMvv: null,
			width: 0,
			height: 0
		};
	})();
	vvM = 0;
	mNn = vvM++;
	MWWWm = vvM++;
	mNMvV = vvM++;
	wMwnN = vvM++;
	nVVMM = vvM++;
	mmMWn = vvM++;
	WvmMM = vvM++;
	MnvNn = vvM++;
	WWnVn = vvM++;
	nwwnV = vvM++;
	MNNWW = vvM++;
	Wnw = vvM++;
	wvmWN = vvM++;
	MNMnm = vvM++;
	mvn[mNn].update = function WmmwV(WmObject, nI, vV) {
		if (mnW.WNw(WmObject.x, WmObject.y, nI, vV) > 66) {
			WmObject.rx = nI;
			WmObject.ry = vV;
			var angle = mnW.angle(WmObject.rx, WmObject.ry, WmObject.Vnn, WmObject.nvM);
			WmObject.nMmvM = Math.cos(angle);
			WmObject.WnMNm = Math.sin(angle);
		}
		WmObject.NNV = (WmObject.state >> 8) / 100;
	};
	mvn[mNn].wnW = function wWWMn(WmObject) {
		var wM = wm.nNv[WmObject.Nvn];
		for (var mN = 0; mN < wM.WwWvn.length; mN++) wM.WwWvn[mN].NN = 0;
		for (var mN = 0; mN < wM.WwVNw.length; mN++) wM.WwVNw[mN].NN = 0;
		WmObject.angle = WmObject.WMnVN;
		if (wM.nVv > 0) {
			WmObject.nWV = 1;
			WmObject.mNw = 1;
		}
	};
	mvn[MNMnm].update = mvn[mNn].update;
	mvn[MNMnm].wnW = function vwVWN(WmObject) {
		WmObject.nWV = 1;
		WmObject.mNw = 1;
		WmObject.angle = WmObject.WMnVN;
		WmObject.NNV = (WmObject.state >> 8) / 100;
	};
	mvn[MWWWm].wnW = function WVWvw(WmObject) {
		if ((WmObject.x !== WmObject.rx) || (WmObject.y !== WmObject.ry)) {
			WmObject.angle = mnW.angle(WmObject.x, WmObject.y, WmObject.rx, WmObject.ry);
			WmObject.WMnVN = WmObject.angle;
		} else {
			WmObject.angle += Math.PIT;
			WmObject.WMnVN = WmObject.angle;
		}
	};
	mvn[MWWWm].update = function WWmMv(WmObject, nI, vV) {
		WmObject.mmw = WmObject.state >> 8;
	};
	mvn[mNMvV].wnW = function wnwnv(WmObject) {
		WmObject.VMv = mnW.angle(WmObject.rx, WmObject.ry, WmObject.Vnn, WmObject.nvM);
		var WW = WmObject.Wvn;
		WmObject.NNV = (WmObject.state >> 8) / 100;
		switch (WW) {
			case 4:
			case 8:
				var VV = nmm.wNVNv(mNn, WmObject.Nvn, 0);
				if (VV !== null) {
					VV.Wvn = VV.Wvn & 255;
					VV.mmw = 0;
				}
				break;
			case 3:
				var VV = nmm.wNVNv(mNn, WmObject.Nvn, 0);
				if (VV !== null) VV.mmw = 0;
				break;
		}
	};
	mvn[mNMvV].update = function NMMvn(WmObject, nI, vV) {
		var angle = mnW.angle(WmObject.x, WmObject.y, WmObject.Vnn, WmObject.nvM);
		var vWNmN = Math.PIO;
		var MWMVV = (((angle + vWNmN) % vWNmN) - ((WmObject.VMv + vWNmN) % vWNmN)) % vWNmN;
		if (Math.abs(MWMVV) > 0.1) {
			WmObject.rx = WmObject.x;
			WmObject.ry = WmObject.y;
			WmObject.Vnn = WmObject.x;
			WmObject.nvM = WmObject.y;
		}
	};
	mvn[WWnVn].update = function vNMWV(WmObject, nI, vV) {
		WmObject.wVvmv = WmObject.x;
		WmObject.WwnMn = WmObject.y;
	};
	mvn[nwwnV].update = mvn[WWnVn].update;
	mvn[MNNWW].update = mvn[WWnVn].update;
	mvn[Wnw].update = mvn[WWnVn].update;
	mvn[wMwnN].update = function vNMWV(WmObject, nI, vV) {
		var mm = (WmObject.Wvn >> 5) & 3;
		WmObject.wVm = (WmObject.state >> 5) & 63;
		WmObject.vmN = WmObject.state >> 14;
		WmObject.state = WmObject.state & 16383;
		var NW = nvn[WmObject.Wvn >> 7];
		WmObject.x = ((Math.floor(nI / nM.vVm) * nM.vVm) + nM.MMn) + NW.vNv[mm];
		WmObject.y = ((Math.floor(vV / nM.vVm) * nM.vVm) + nM.MMn) + NW.vmn[mm];
		WmObject.rx = WmObject.x;
		WmObject.ry = WmObject.y;
		WmObject.Vnn = WmObject.x;
		WmObject.nvM = WmObject.y;
		WmObject.wVvmv = WmObject.x;
		WmObject.WwnMn = WmObject.y;
		if ((NW.nNM === 1) && ((WmObject.state & 16) === 16)) {
			WmObject.wVvmv = ((Math.floor(WmObject.NM + NW.nmMwN[mm]) * nM.vVm) + nM.MMn) + NW.vNv[(mm + 1) % 4];
			WmObject.WwnMn = ((Math.floor(WmObject.mN + NW.VNWwW[mm]) * nM.vVm) + nM.MMn) + NW.vmn[(mm + 1) % 4];
		}
	};
	mvn[nVVMM].update = mvn[wMwnN].update;
	mvn[mmMWn].update = mvn[wMwnN].update;
	mvn[WvmMM].update = mvn[wMwnN].update;
	try {
		nM.vvwMv;
	} catch (error) {
		var nM = {};
	}
	var vmVMn = 1;
	var WvvwM = 2;
	var Mn = 0;
	var Mw = {
		WVv: Mn++,
		mww: Mn++,
		nnw: Mn++,
		WnM: Mn++,
		Mvm: Mn++,
		NnM: Mn++,
		wnn: Mn++,
		nmV: Mn++,
		MmN: Mn++,
		WMm: Mn++,
		MWn: Mn++,
		wnv: Mn++
	};
	Mn = 0;
	var WN = {
		NnW: Mn++,
		mmV: Mn++,
		Vvmww: Mn++,
		MnnWm: Mn++,
		NvV: Mn++,
		Vwv: Mn++,
		NNM: Mn++,
		VnM: Mn++,
		wNV: Mn++,
		MVV: Mn++
	};
	var MWMWV = [];
	MWMWV[WN.mmV] = "audio/wood-impact.mp3";
	MWMWV[WN.Vvmww] = "audio/stone-impact2.mp3";
	MWMWV[WN.MnnWm] = "audio/stone-impact.mp3";
	MWMWV[WN.NvV] = "audio/metal-impact2.mp3";
	MWMWV[WN.wNV] = "audio/pillow-impact.mp3";
	MWMWV[WN.Vwv] = "audio/wood-destroy3.mp3";
	MWMWV[WN.NNM] = "audio/stone-destroy.mp3";
	MWMWV[WN.VnM] = "audio/metal-destroy2.mp3";
	MWMWV[WN.MVV] = "audio/pillow-destroy.mp3";
	var WvvNN = MWMWV.length;
	Mn = 0;
	var wvM = {
		NmM: Mn++,
		nvWvN: Mn++,
		nMWWM: Mn++,
		wNM: Mn++,
		vnmvV: Mn++
	};
	Mn = 0;
	var Vww = {
		mVWnm: Mn++,
		MNWVN: Mn++,
		WvnMW: Mn++,
		VNmnV: Mn++,
		MwnMw: Mn++,
		NwNvw: Mn++,
		MWnmM: Mn++,
		mVVWn: Mn++,
		NMWvv: Mn++
	};
	Mn = 0;
	var Vm = {
		WwW: Mn++,
		MvN: Mn++,
		mmW: Mn++,
		vvV: Mn++,
		nwwVV: Mn++,
		Vmv: Mn++,
		WmNVv: Mn++,
		vWwNN: Mn++,
		NVmMW: Mn++,
		wNM: Mn++
	};
	Mn = 1;
	var MM = {
		vWM: Mn++,
		mvM: Mn++,
		WWN: Mn++,
		wMm: Mn++,
		WwMnn: Mn++,
		wNm: Mn++,
		mmm: Mn++,
		Nvm: Mn++,
		Vmm: Mn++,
		VNWvv: Mn++,
		WVnvv: Mn++,
		VNn: Mn++,
		VVvVm: Mn++,
		MvNwM: Mn++,
		VvM: Mn++,
		mnV: Mn++,
		mWW: Mn++,
		WvM: Mn++,
		nnw: Mn++,
		wnWVN: Mn++,
		wvmnM: Mn++,
		VvV: Mn++,
		vvWwv: Mn++,
		vwMWN: Mn++,
		vNwVv: Mn++,
		vNnNn: Mn++,
		nMN: Mn++,
		NVw: Mn++,
		wMM: Mn++,
		VwnVN: Mn++,
		nWN: Mn++,
		nMwnv: Mn++,
		NWnNn: Mn++,
		WMw: Mn++,
		WMNnw: Mn++,
		vWVVn: Mn++,
		vmnnm: Mn++,
		mWMMN: Mn++,
		VNmvV: Mn++,
		vvnvW: Mn++,
		WnW: Mn++,
		MVM: Mn++,
		nMwVV: Mn++,
		nNMmW: Mn++,
		nWwvv: Mn++,
		WWNmW: Mn++,
		VNnWV: Mn++,
		wvv: Mn++,
		wnn: Mn++,
		NMwwN: Mn++,
		nvmMw: Mn++,
		MVWMM: Mn++,
		nwM: Mn++,
		MNN: Mn++,
		NnM: Mn++,
		nwv: Mn++,
		Mvm: Mn++,
		MVwnm: Mn++,
		Nnn: Mn++,
		nVm: Mn++,
		nNWNV: Mn++,
		MvvWV: Mn++,
		vnWwn: Mn++,
		VNmwv: Mn++,
		vnmmN: Mn++,
		NnWwV: Mn++,
		VvmNN: Mn++,
		WNmVm: Mn++,
		MWwNV: Mn++,
		vWWvW: Mn++,
		wVNmN: Mn++,
		WwvnN: Mn++,
		mMV: Mn++,
		vVN: Mn++,
		WMNWN: Mn++,
		MVmNM: Mn++,
		NwV: Mn++,
		VmnwW: Mn++,
		mVMWM: Mn++,
		NVvnn: Mn++,
		mwvnv: Mn++,
		nwwWw: Mn++,
		NMnnV: Mn++,
		nNmVW: Mn++,
		NVvNv: Mn++,
		wmvWW: Mn++,
		MVnNM: Mn++,
		WWvvM: Mn++,
		mnN: Mn++,
		nMm: Mn++,
		wWw: Mn++,
		VwV: Mn++,
		wVNwW: Mn++,
		nmV: Mn++,
		wNw: Mn++,
		mMW: Mn++,
		nVwWW: Mn++,
		VnmMw: Mn++,
		NwvMV: Mn++,
		WwnNN: Mn++,
		MmN: Mn++,
		vvNww: Mn++,
		Mwwnm: Mn++,
		Wnwmw: Mn++,
		vWNMm: Mn++,
		vnvVM: Mn++,
		NNVnW: Mn++,
		WMVVV: Mn++,
		vmnWV: Mn++,
		wNNMN: Mn++,
		vMnNN: Mn++,
		nMMwV: Mn++,
		mwVWn: Mn++,
		nmVmn: Mn++,
		mWmvn: Mn++,
		nVWWn: Mn++,
		WMm: Mn++,
		VvWWN: Mn++,
		wnnwM: Mn++,
		VwWMV: Mn++,
		MmWmM: Mn++,
		WVMMv: Mn++,
		VMMvN: Mn++,
		mMnVN: Mn++,
		mnWnw: Mn++,
		MWnmM: Mn++,
		nWv: Mn++,
		mVwVm: Mn++,
		MwmnN: Mn++,
		WNnwn: Mn++,
		MWn: Mn++,
		WmwvW: Mn++,
		VVmMm: Mn++,
		MNWMm: Mn++,
		nvVVn: Mn++,
		VwMvm: Mn++,
		nMNWM: Mn++,
		mVVWn: Mn++,
		NMWvv: Mn++,
		NNNVv: Mn++,
		MvWmW: Mn++,
		WmwnM: Mn++,
		VVmNV: Mn++,
		NVNvv: Mn++,
		nnmVv: Mn++,
		vwnMm: Mn++,
		mVNvm: Mn++,
		NmWVn: Mn++,
		wWWNW: Mn++,
		nNmvw: Mn++,
		mMvnn: Mn++,
		wwNMn: Mn++,
		mMVmM: Mn++,
		wnwmw: Mn++,
		NVnwW: Mn++,
		wnv: Mn++,
		WMnnw: Mn++,
		NVVWn: Mn++,
		mNMWw: Mn++,
		VNNnn: Mn++,
		vwVMm: Mn++,
		WnVmw: Mn++,
		Vnvmn: Mn++,
		mWWwv: Mn++,
		mnNnn: Mn++,
		Nvmmm: Mn++,
		wVvvM: Mn++,
		VmNnN: Mn++,
		mVmNW: Mn++,
		VvwVW: Mn++
	};
	Mn = 0;
	var Ww = {
		vnNNN: Mn++,
		vMwnw: Mn++,
		WmnMM: Mn++,
		VmNvm: Mn++,
		NNnmN: Mn++,
		mNnMm: Mn++,
		WWN: Mn++,
		wMm: Mn++,
		WwMnn: Mn++,
		wNm: Mn++,
		mmm: Mn++,
		Nvm: Mn++,
		Vmm: Mn++,
		VNWvv: Mn++,
		WVnvv: Mn++,
		VNn: Mn++,
		VVvVm: Mn++,
		MvNwM: Mn++,
		VvM: Mn++,
		mnV: Mn++,
		mWW: Mn++,
		WvM: Mn++,
		nnw: Mn++,
		wnWVN: Mn++,
		wvmnM: Mn++,
		VvV: Mn++,
		vvWwv: Mn++,
		vwMWN: Mn++,
		vNwVv: Mn++,
		vNnNn: Mn++,
		nMN: Mn++,
		NVw: Mn++,
		wMM: Mn++,
		VwnVN: Mn++,
		nWN: Mn++,
		nMwnv: Mn++,
		NWnNn: Mn++,
		WMw: Mn++,
		WMNnw: Mn++,
		vWVVn: Mn++,
		vmnnm: Mn++,
		mWMMN: Mn++,
		VNmvV: Mn++,
		vvnvW: Mn++,
		WnW: Mn++,
		MVM: Mn++,
		nMwVV: Mn++,
		nNMmW: Mn++,
		nWwvv: Mn++,
		WWNmW: Mn++,
		VNnWV: Mn++,
		wvv: Mn++,
		wnn: Mn++,
		NMwwN: Mn++,
		nvmMw: Mn++,
		MVWMM: Mn++,
		nwM: Mn++,
		MNN: Mn++,
		NnM: Mn++,
		nwv: Mn++,
		Mvm: Mn++,
		MVwnm: Mn++,
		Nnn: Mn++,
		nVm: Mn++,
		nNWNV: Mn++,
		MvvWV: Mn++,
		vnWwn: Mn++,
		VNmwv: Mn++,
		vnmmN: Mn++,
		NnWwV: Mn++,
		VvmNN: Mn++,
		WNmVm: Mn++,
		MWwNV: Mn++,
		vWWvW: Mn++,
		WwvnN: Mn++,
		mMV: Mn++,
		vVN: Mn++,
		WMNWN: Mn++,
		MVmNM: Mn++,
		NwV: Mn++,
		VmnwW: Mn++,
		mVMWM: Mn++,
		NVvnn: Mn++,
		mwvnv: Mn++,
		nwwWw: Mn++,
		NMnnV: Mn++,
		nNmVW: Mn++,
		NVvNv: Mn++,
		MVnNM: Mn++,
		WWvvM: Mn++,
		mnN: Mn++,
		nMm: Mn++,
		wWw: Mn++,
		VwV: Mn++,
		wVNwW: Mn++,
		nmV: Mn++,
		wNw: Mn++,
		mMW: Mn++,
		nVwWW: Mn++,
		VnmMw: Mn++,
		NwvMV: Mn++,
		WwnNN: Mn++,
		MmN: Mn++,
		vvNww: Mn++,
		Mwwnm: Mn++,
		Wnwmw: Mn++,
		vWNMm: Mn++,
		vnvVM: Mn++,
		NNVnW: Mn++,
		WMVVV: Mn++,
		vmnWV: Mn++,
		wNNMN: Mn++,
		vMnNN: Mn++,
		nMMwV: Mn++,
		mwVWn: Mn++,
		nmVmn: Mn++,
		mWmvn: Mn++,
		nVWWn: Mn++,
		WMm: Mn++,
		VvWWN: Mn++,
		wnnwM: Mn++,
		VwWMV: Mn++,
		MmWmM: Mn++,
		WVMMv: Mn++,
		VMMvN: Mn++,
		mMnVN: Mn++,
		mnWnw: Mn++,
		MWnmM: Mn++,
		nWv: Mn++,
		mVwVm: Mn++,
		MwmnN: Mn++,
		WNnwn: Mn++,
		MWn: Mn++,
		WmwvW: Mn++,
		VVmMm: Mn++,
		MNWMm: Mn++,
		nvVVn: Mn++,
		VwMvm: Mn++,
		nMNWM: Mn++,
		mVVWn: Mn++,
		NMWvv: Mn++,
		NNNVv: Mn++,
		MvWmW: Mn++,
		WmwnM: Mn++,
		VVmNV: Mn++,
		NVNvv: Mn++,
		nnmVv: Mn++,
		vwnMm: Mn++,
		mVNvm: Mn++,
		NmWVn: Mn++,
		wWWNW: Mn++,
		nNmvw: Mn++,
		mMvnn: Mn++,
		wwNMn: Mn++,
		mMVmM: Mn++,
		wnwmw: Mn++,
		NVnwW: Mn++,
		wnv: Mn++,
		WMnnw: Mn++,
		NVVWn: Mn++,
		mNMWw: Mn++
	};
	Mn = 0;
	var Wn = {
		mNvVM: Mn++,
		vWM: Mn++,
		mvM: Mn++,
		WWN: Mn++,
		nwv: Mn++,
		nwM: Mn++,
		nWWww: Mn++,
		VnNWN: Mn++,
		VNn: Mn++,
		MnMNV: Mn++,
		mww: Mn++,
		Vnmwn: Mn++,
		vWmnN: Mn++,
		vVNmm: Mn++,
		Www: Mn++,
		WWVVn: Mn++,
		vWvNw: Mn++,
		vwVVv: Mn++,
		wnvvW: Mn++,
		nVmMN: Mn++,
		mMVmn: Mn++,
		nNWNV: Mn++,
		mvmVw: Mn++,
		vmWmW: Mn++,
		mMVwW: Mn++,
		WVM: Mn++,
		NwV: Mn++,
		wWMWW: Mn++,
		VnnvN: Mn++,
		nwWwW: Mn++,
		nnmWw: Mn++,
		wnnwM: Mn++,
		VwWMV: Mn++,
		MmWmM: Mn++,
		MWnwn: Mn++
	};
	var WmMNm = [{
		src: "img/wait-ads-1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/wait-ads-2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/wait-ads-3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/wait-ads-4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/wait-ads-5.png",
		image: {
			v: 0
		}
	}];
	var wnM = [];
	wnM[Wn.mNvVM] = [];
	wnM[Wn.vWM] = [{
		src: "img/day-particules-wood1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.mvM] = [{
		src: "img/day-particules-stone1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-stone2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-stone3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-stone4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-stone5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.WWN] = [{
		src: "img/day-particules-steel1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-steel2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-steel3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-steel4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-steel5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.nwv] = [{
		src: "img/day-particules-uranium1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium5.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium6.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium7.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium8.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-uranium9.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.nwM] = [{
		src: "img/day-particules-sulfur1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur5.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur6.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur7.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur8.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sulfur9.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.nWWww] = [{
		src: "img/day-particules-leaf1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.VnNWN] = [{
		src: "img/day-particules-wood1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaftree1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaftree2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaftree3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaftree4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaftree5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.WVMwW] = [{
		src: "img/day-particules-flower1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-flower2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-flower3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-flower4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-flower5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.VNn] = [{
		src: "img/day-particules-leaf1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf5.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf6.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf7.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf8.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-leaf9.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.MnMNV] = [{
		src: "img/day-particules-blood1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blood2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blood3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blood4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blood5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.mww] = [{
		src: "img/day-particules-fire1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fire2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fire3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fire4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fire5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.Vnmwn] = [{
		src: "img/day-particules-fur1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fur2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fur3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fur4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fur5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.vWmnN] = [{
		src: "img/day-particules-bed0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-bed1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-bed2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-bed6.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood3.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.vVNmm] = [{
		src: "img/day-particules-bed3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-bed4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-bed5.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-bed6.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood3.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.Www] = [{
		src: "img/day-particules-sofa0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.WWVVn] = [{
		src: "img/day-particules-sofa0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa5.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa6.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.vWvNw] = [{
		src: "img/day-particules-sofa0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa7.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-sofa8.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.vwVVv] = [{
		src: "img/day-particules-toilet0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-toilet1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-toilet2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-toilet3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-toilet4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.wnvvW] = [{
		src: "img/day-particules-woodlight0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-woodlight1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-woodlight2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-woodlight3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-woodlight4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.nVmMN] = [{
		src: "img/day-particules-safe0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-safe1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-safe2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-safe3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-safe4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.mMVmn] = [{
		src: "img/day-particules-garbage0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-garbage1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-garbage2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-garbage3.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.nNWNV] = [{
		src: "img/day-particules-fridge0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fridge1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fridge2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fridge3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-fridge4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.mvmVw] = [{
		src: "img/day-particules-plot0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-plot1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-plot2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-plot3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-wood3.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.vmWmW] = [{
		src: "img/day-particules-barel0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-barel1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-barel2.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.mMVwW] = [{
		src: "img/day-particules-barel3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-barel4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-barel5.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.WVM] = [{
		src: "img/day-particules-metal0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-metal1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-metal2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-metal3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-metal4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.NwV] = [{
		src: "img/day-particules-tomato0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-tomato1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-tomato2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-tomato3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-tomato4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.VnnvN] = [{
		src: "img/day-particules-blue-steel0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blue-steel1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blue-steel2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blue-steel3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-blue-steel4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.wWMWW] = [{
		src: "img/day-particules-grey-steel0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-grey-steel1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-grey-steel2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-grey-steel3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-grey-steel4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.nwWwW] = [{
		src: "img/day-particules-red-steel0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-red-steel1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-red-steel2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-red-steel3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-red-steel4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.nnmWw] = [{
		src: "img/day-particules-kaki0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-kaki1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-kaki2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-kaki3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-kaki4.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.wnnwM] = [{
		src: "img/day-particules-mushroom4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-mushroom5.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-mushroom6.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.VwWMV] = [{
		src: "img/day-particules-mushroom1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-mushroom2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-mushroom3.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.MmWmM] = [{
		src: "img/day-particules-mushroom7.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-mushroom8.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-mushroom9.png",
		image: {
			v: 0
		}
	}];
	wnM[Wn.MWnwn] = [{
		src: "img/day-particules-gold0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-gold1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-particules-gold2.png",
		image: {
			v: 0
		}
	}];

	function nw(vWn, mnNNN, vnW, Mnw, Nn, VMV, wVM, WvWvV, nMnmm) {
		this.name = vWn;
		this.description = mnNNN;
		if (Mnw !== undefined) this.Mnw = Mnw;
		if (Nn !== undefined) this.stack = Nn;
		if (VMV !== undefined) {
			this.VMV = [];
			this.WmNvM = [];
			for (var mN = 0; mN < VMV.length; mN++) {
				this.VMV[mN] = VMV[mN][0];
				this.WmNvM[mN] = VMV[mN][1];
			}
		}
		if (vnW !== undefined) this.vnW = vnW;
		else this.vnW = -1;
		if (wVM !== undefined) this.level = wVM;
		else this.level = -1;
		if (WvWvV !== undefined) this.WvWvV = WvWvV;
		else this.WvWvV = -1;
		if (nMnmm !== undefined) this.nMnmm = nMnmm;
		else this.nMnmm = 1;
	};
	var nvn = [{
		src: [],
		image: []
	}, {
		id: MM.vWM,
		nN: {
			src: ["img/inv-wood-out.png", "img/inv-wood-in.png", "img/inv-wood-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wood", "Found in trees, or on the ground."),
		stack: 255,
		WV: Ww.WmnMM,
		Vw: 10
	}, {
		id: MM.mvM,
		nN: {
			src: ["img/inv-stone-out.png", "img/inv-stone-in.png", "img/inv-stone-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone", "Find it on the ground or on the rock.", Vm.NVmMW, [], 0, [
			[Mw.MWn, 80000]
		]),
		Wmnnn: 50,
		mMvNn: 200,
		stack: 255,
		WV: Ww.mNnMm,
		Vw: 14
	}, {
		id: MM.WWN,
		nN: {
			src: ["img/inv-steel-out.png", "img/inv-steel-in.png", "img/inv-steel-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Iron", "Melt it on a Firepit or a Smelter", Vm.NVmMW, [], 0, [
			[Mw.MWn, 120000]
		]),
		Wmnnn: 4,
		mMvNn: 8,
		stack: 255,
		WV: Ww.WWN,
		Vw: 28
	}, {
		id: MM.wMm,
		nN: {
			src: ["img/inv-animal-fat-out.png", "img/inv-animal-fat-in.png", "img/inv-animal-fat-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Animal Fat", "Useful to craft bullet and clothes"),
		stack: 255,
		WV: Ww.wMm,
		Vw: 32
	}, {
		id: MM.WwMnn,
		nN: {
			src: ["img/inv-animal-tendon-out.png", "img/inv-animal-tendon-in.png", "img/inv-animal-tendon-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Animal Tendon", "Useful to make string"),
		stack: 255,
		WV: Ww.WwMnn,
		Vw: 100
	}, {
		id: MM.wNm,
		nN: {
			src: ["img/inv-string-out.png", "img/inv-string-in.png", "img/inv-string-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("String", "Useful to craft many items.", Vm.MvN, [
			[MM.WwMnn, 2]
		], 1, [
			[Mw.nnw, 20000]
		]),
		stack: 255,
		WV: Ww.wNm
	}, {
		id: MM.mmm,
		nN: {
			src: ["img/inv-leather-boar-out.png", "img/inv-leather-boar-in.png", "img/inv-leather-boar-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Leather", "Useful to make clothes"),
		stack: 255,
		WV: Ww.mmm,
		Vw: 32
	}, {
		id: MM.Nvm,
		nN: {
			src: ["img/inv-shaped-metal-out.png", "img/inv-shaped-metal-in.png", "img/inv-shaped-metal-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Shaped Metal", "To craft improved items.", Vm.NVmMW, [
			[MM.WWN, 2]
		], 1, [
			[Mw.wnn, 3000],
			[Mw.WnM, 30000]
		]),
		stack: 255,
		WV: Ww.Nvm
	}, {
		id: MM.Vmm,
		nN: {
			src: ["img/inv-raw-steak-out.png", "img/inv-raw-steak-in.png", "img/inv-raw-steak-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Raw Steak", "#Vegan"),
		stack: 10,
		WV: Ww.Vmm,
		nNNnm: 15,
		NVWmN: MM.WVnvv,
		wVN: 12,
		wait: 5,
		Vw: 28
	}, {
		id: MM.VNWvv,
		nN: {
			src: ["img/inv-cooked-steak-out.png", "img/inv-cooked-steak-in.png", "img/inv-cooked-steak-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cooked Steak", "Rare or medium?", Vm.MvN, [
			[MM.Vmm, 1]
		], 1, [
			[Mw.mww, 20000],
			[Mw.WnM, 10000]
		]),
		stack: 10,
		WV: Ww.VNWvv,
		wait: 5,
		nNNnm: 3,
		NVWmN: MM.WVnvv,
		wVN: 13
	}, {
		id: MM.WVnvv,
		nN: {
			src: ["img/inv-rotten-steak-out.png", "img/inv-rotten-steak-in.png", "img/inv-rotten-steak-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		stack: 10,
		WV: Ww.WVnvv,
		wait: 5,
		wVN: 14,
		detail: new nw("Rotten Steak", "Don't eat that."),
		Vw: 20
	}, {
		id: MM.VNn,
		nN: {
			src: ["img/inv-orange-out.png", "img/inv-orange-in.png", "img/inv-orange-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Orange", "A little hungry?"),
		stack: 20,
		WV: Ww.VNn,
		wait: 5,
		nNNnm: 10,
		NVWmN: MM.VVvVm,
		wVN: 15,
		Vw: 24
	}, {
		id: MM.VVvVm,
		nN: {
			src: ["img/inv-rotten-orange-out.png", "img/inv-rotten-orange-in.png", "img/inv-rotten-orange-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rotten Orange", "Go on, have a bite!", Vm.WmNVv, [
			[MM.VNn, 4]
		], 8, [
			[Mw.MmN, 40000]
		]),
		stack: 20,
		WV: Ww.VVvVm,
		wait: 5,
		wVN: 16,
		Vw: 20
	}, {
		id: MM.MvNwM,
		nN: {
			src: ["img/inv-orange-seed-out.png", "img/inv-orange-seed-in.png", "img/inv-orange-seed-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Orange Seed", "Fill up on Vitame C?", Vm.WmNVv, [
			[MM.VNn, 4]
		], 1, [
			[Mw.mww, 20000],
			[Mw.WnM, 15000]
		]),
		stack: 40,
		WV: Ww.MvNwM,
		vnNVV: Ww.VNn,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [30, 30, 30, 30],
		height: [30, 30, 30, 30],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [35, 35, 35, 35],
		wvN: [35, 35, 35, 35],
		wmm: {
			src: "img/day-clear-blue-plant2-orange.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-plant2-orange.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.nvWvN,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.MMnWv,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vv: [{
			src: "img/day-plant0-orange.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant1-orange.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant2-orange.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant3-orange.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant4-orange.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.VNn,
		mVM: 68,
		NVN: ((5 * 8) * 60) * 1000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.VvM,
		nN: {
			src: ["img/inv-hachet-out.png", "img/inv-hachet-in.png", "img/inv-hachet-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Hatchet", "Harvest Wood and Stone.", Vm.nwwVV, [
			[MM.vWM, 10],
			[MM.mvM, 2]
		], 1, [
			[Mw.WVv, 5000],
			[Mw.nnw, 10000]
		]),
		wVN: 3,
		stack: 1,
		WV: Ww.VvM,
		wait: 10
	}, {
		id: MM.mnV,
		nN: {
			src: ["img/inv-stone-pickaxe-out.png", "img/inv-stone-pickaxe-in.png", "img/inv-stone-pickaxe-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone Pickaxe", "Mine Stone and Iron.", Vm.nwwVV, [
			[MM.vWM, 100],
			[MM.mvM, 30]
		], 1, [
			[Mw.nnw, 30000]
		]),
		wVN: 1,
		stack: 1,
		WV: Ww.mnV,
		wait: 10
	}, {
		id: MM.mWW,
		nN: {
			src: ["img/inv-steel-pickaxe-out.png", "img/inv-steel-pickaxe-in.png", "img/inv-steel-pickaxe-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Metal Pickaxe", "Mine also Sulfur", Vm.nwwVV, [
			[MM.mvM, 150],
			[MM.Nvm, 6]
		], 1, [
			[Mw.NnM, 60000]
		], 6),
		wVN: 2,
		stack: 1,
		WV: Ww.mWW,
		wait: 10
	}, {
		id: MM.WvM,
		nN: {
			src: ["img/inv-stone-axe-out.png", "img/inv-stone-axe-in.png", "img/inv-stone-axe-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Metal Axe", "Harvest a lot of Wood", Vm.nwwVV, [
			[MM.vWM, 150],
			[MM.Nvm, 7]
		], 1, [
			[Mw.NnM, 80000]
		], 5),
		wVN: 4,
		stack: 1,
		WV: Ww.WvM,
		wait: 10
	}, {
		id: MM.nnw,
		nN: {
			src: ["img/inv-workbench-out.png", "img/inv-workbench-in.png", "img/inv-workbench-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Workbench", "Allow you to make new items.", Vm.MvN, [
			[MM.vWM, 40],
			[MM.mvM, 20]
		], 1, [
			[Mw.WVv, 15000],
			[Mw.nnw, 15000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 1,
		VMV: Mw.nnw,
		stack: 255,
		WV: Ww.nnw,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-workbench.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-workbench.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.vwNNw,
		VVw: 16,
		wMn: {
			src: "img/e-workbench.png",
			image: {
				v: 0
			}
		},
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: {
			src: "img/day-workbench.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.wnWVN,
		nN: {
			src: ["img/inv-wood-spear-out.png", "img/inv-wood-spear-in.png", "img/inv-wood-spear-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wood Spear", "Don't forget to pick it up.", Vm.Vmv, [
			[MM.vWM, 70]
		], 1, [
			[Mw.WVv, 15000],
			[Mw.nnw, 20000]
		]),
		wVN: 5,
		stack: 1,
		WV: Ww.wnWVN,
		wait: 10
	}, {
		id: MM.wvmnM,
		nN: {
			src: ["img/inv-wood-bow-out.png", "img/inv-wood-bow-in.png", "img/inv-wood-bow-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wood Bow", "Where are the cowboys?", Vm.Vmv, [
			[MM.vWM, 60],
			[MM.WwMnn, 2]
		], 1, [
			[Mw.WVv, 35000],
			[Mw.nnw, 50000]
		]),
		vmV: MM.VNnWV,
		nvwnn: 1,
		wVN: 6,
		stack: 1,
		WV: Ww.wvmnM,
		wait: 10
	}, {
		id: MM.VvV,
		nN: {
			src: ["img/inv-9mm-out.png", "img/inv-9mm-in.png", "img/inv-9mm-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("9MM", "I hope you know how to aim.", Vm.Vmv, [
			[MM.nMm, 6],
			[MM.Nvm, 9]
		], 1, [
			[Mw.NnM, 160000]
		], 7),
		wVN: 8,
		vmV: MM.WMw,
		stack: 1,
		WV: Ww.VvV,
		wait: 10
	}, {
		id: MM.vvWwv,
		nN: {
			src: ["img/inv-desert-eagle-out.png", "img/inv-desert-eagle-in.png", "img/inv-desert-eagle-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Desert Eagle", "Pretty useful for self-defense.", Vm.Vmv, [
			[MM.wNw, 4],
			[MM.Nvm, 2]
		], 1, [
			[Mw.NnM, 180000]
		], 9, MM.VvV),
		wVN: 9,
		vmV: MM.WMw,
		stack: 1,
		WV: Ww.vvWwv,
		wait: 10
	}, {
		id: MM.vwMWN,
		nN: {
			src: ["img/inv-shotgun-out.png", "img/inv-shotgun-in.png", "img/inv-shotgun-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Shotgun", "He's dead now, don't you think?", Vm.Vmv, [
			[MM.wNw, 6],
			[MM.Nvm, 6]
		], 1, [
			[Mw.NnM, 200000]
		], 11),
		wVN: 7,
		vmV: MM.WMNnw,
		stack: 1,
		WV: Ww.vwMWN,
		wait: 10
	}, {
		id: MM.vNwVv,
		nN: {
			src: ["img/inv-ak47-out.png", "img/inv-ak47-in.png", "img/inv-ak47-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("AK47", "Revolution time", Vm.Vmv, [
			[MM.wNw, 14],
			[MM.Nvm, 8]
		], 1, [
			[Mw.NnM, 180000]
		], 12, MM.vvnvW),
		wVN: 10,
		vmV: MM.vWVVn,
		stack: 1,
		WV: Ww.vNwVv,
		wait: 10
	}, {
		id: MM.vNnNn,
		nN: {
			src: ["img/inv-sniper-out.png", "img/inv-sniper-in.png", "img/inv-sniper-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Sniper", "For the very angry shy", Vm.Vmv, [
			[MM.wNw, 10],
			[MM.Nvm, 8]
		], 1, [
			[Mw.NnM, 180000]
		], 13),
		wVN: 11,
		vmV: MM.vWVVn,
		stack: 1,
		WV: Ww.vNnNn,
		wait: 10
	}, {
		id: MM.nMN,
		nN: {
			src: ["img/inv-wood-wall-out.png", "img/inv-wood-wall-in.png", "img/inv-wood-wall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wooden Wall", "Protected from the wind.", Vm.vvV, [
			[MM.vWM, 20]
		], 1, [
			[Mw.nnw, 10000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.nMN,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-wood-wall.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-wood-wall.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.nMN,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.VWm,
		wnMVm: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		MwM: [{
			src: "img/day-wood-wall-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: [{
			src: "img/day-wood-wall0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-wall46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 3000,
		Vw: 0
	}, {
		id: MM.NVw,
		nN: {
			src: ["img/inv-stone-wall-out.png", "img/inv-stone-wall-in.png", "img/inv-stone-wall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone Wall", "Saved the 3 little pigs.", Vm.vvV, [
			[MM.mvM, 20]
		], 1, [
			[Mw.nnw, 15000]
		], 3),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.NVw,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-wall.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-wall.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.NVw,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.VWm,
		wnMVm: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		MwM: [{
			src: "img/day-stone-wall-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.Vvmww,
		mmM: WN.NNM,
		Vv: [{
			src: "img/day-stone-wall0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-wall46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.mvM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 7000,
		Vw: 0
	}, {
		id: MM.wMM,
		nN: {
			src: ["img/inv-steel-wall-out.png", "img/inv-steel-wall-in.png", "img/inv-steel-wall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Metal Wall", "Afraid we'll find you?", Vm.vvV, [
			[MM.Nvm, 3]
		], 1, [
			[Mw.NnM, 20000]
		], 6, MM.NVw),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.wMM,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-wall.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-wall.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.wMM,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.VWm,
		wnMVm: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		MwM: [{
			src: "img/day-steel-wall-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-steel-wall0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-wall46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WWN,
		mVM: 80,
		NVN: 315360000000,
		Nv: 15000,
		Vw: 0
	}, {
		id: MM.VwnVN,
		nN: {
			src: ["img/inv-wood-door-out.png", "img/inv-wood-door-in.png", "img/inv-wood-door-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wooden Low Door", "You can shoot through it.", Vm.vvV, [
			[MM.vWM, 40]
		], 1, [
			[Mw.nnw, 15000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.VwnVN,
		wait: 10,
		NN: 600,
		width: [100, 35, 100, 35],
		height: [35, 100, 35, 100],
		vNv: [0, -30, 0, 30],
		vmn: [30, 0, -30, 0],
		MVN: [0, 0, 0, 65],
		wvN: [65, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-wood-door.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-wood-door.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 1,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		VNWwW: [1, 0, -1, 0],
		nmMwN: [0, -1, 0, 1],
		mWWvM: [0, 0, 65, 0],
		mMWmn: [0, 0, 0, 65],
		wMVVw: [35, 100, 35, 100],
		WMmMw: [100, 35, 100, 35],
		nnVmV: 6,
		wMVwv: 46,
		nv: nM.nNM,
		VVw: 15,
		wMn: {
			src: "img/e-opendoor.png",
			image: {
				v: 0
			}
		},
		wVmvV: {
			src: "img/e-closedoor.png",
			image: {
				v: 0
			}
		},
		MwM: [{
			src: "img/day-wood-door-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-door-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-door-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: {
			src: "img/day-wood-door.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vWM,
		mVM: 55,
		NVN: 315360000000,
		Nv: 2000,
		Vw: 0
	}, {
		id: MM.nWN,
		nN: {
			src: ["img/inv-stone-door-out.png", "img/inv-stone-door-in.png", "img/inv-stone-door-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone Low Door", "You can shoot through it.", Vm.vvV, [
			[MM.mvM, 40]
		], 1, [
			[Mw.nnw, 15000]
		], 3),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.nWN,
		wait: 10,
		NN: 600,
		width: [100, 35, 100, 35],
		height: [35, 100, 35, 100],
		vNv: [0, -30, 0, 30],
		vmn: [30, 0, -30, 0],
		MVN: [0, 0, 0, 65],
		wvN: [65, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-door.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-door.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 1,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		VNWwW: [1, 0, -1, 0],
		nmMwN: [0, -1, 0, 1],
		mWWvM: [0, 0, 65, 0],
		mMWmn: [0, 0, 0, 65],
		wMVVw: [35, 100, 35, 100],
		WMmMw: [100, 35, 100, 35],
		nnVmV: 6,
		wMVwv: 46,
		nv: nM.nNM,
		VVw: 15,
		wMn: {
			src: "img/e-opendoor.png",
			image: {
				v: 0
			}
		},
		wVmvV: {
			src: "img/e-closedoor.png",
			image: {
				v: 0
			}
		},
		MwM: [{
			src: "img/day-stone-door-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-door-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-door-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.Vvmww,
		mmM: WN.NNM,
		Vv: {
			src: "img/day-stone-door.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.mvM,
		mVM: 55,
		NVN: 315360000000,
		Nv: 5000,
		Vw: 0
	}, {
		id: MM.nMwnv,
		nN: {
			src: ["img/inv-steel-door-out.png", "img/inv-steel-door-in.png", "img/inv-steel-door-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Metal Low Door", "Killing at home, for more comfort.", Vm.vvV, [
			[MM.Nvm, 6]
		], 1, [
			[Mw.NnM, 30000]
		], 6, MM.nWN),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.nMwnv,
		wait: 10,
		NN: 600,
		width: [100, 35, 100, 35],
		height: [35, 100, 35, 100],
		vNv: [0, -30, 0, 30],
		vmn: [30, 0, -30, 0],
		MVN: [0, 0, 0, 65],
		wvN: [65, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-door.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-door.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 1,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		VNWwW: [1, 0, -1, 0],
		nmMwN: [0, -1, 0, 1],
		mWWvM: [0, 0, 65, 0],
		mMWmn: [0, 0, 0, 65],
		wMVVw: [35, 100, 35, 100],
		WMmMw: [100, 35, 100, 35],
		nnVmV: 6,
		wMVwv: 46,
		nv: nM.nNM,
		VVw: 15,
		wMn: {
			src: "img/e-opendoor.png",
			image: {
				v: 0
			}
		},
		wVmvV: {
			src: "img/e-closedoor.png",
			image: {
				v: 0
			}
		},
		MwM: [{
			src: "img/day-steel-door-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-door-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-door-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-steel-door.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WWN,
		mVM: 55,
		NVN: 315360000000,
		Nv: 10000,
		Vw: 0
	}, {
		id: MM.NWnNn,
		nN: {
			src: ["img/inv-campfire-out.png", "img/inv-campfire-in.png", "img/inv-campfire-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Campfire", "Warm you when you're cold.", Vm.MvN, [
			[MM.vWM, 30],
			[MM.mvM, 5]
		], 1, [
			[Mw.WVv, 8000],
			[Mw.nnw, 15000]
		]),
		wVN: 21,
		mWm: 15000,
		VMw: -1,
		z: 0,
		VMV: Mw.mww,
		stack: 255,
		WV: Ww.NWnNn,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-campfire.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-campfire.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: vmVMn,
		nv: nM.WmvnW,
		WMnNn: nM.NVmWn,
		VVw: 16,
		wMn: {
			src: "img/e-campfire.png",
			image: {
				v: 0
			}
		},
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: {
			src: "img/day-campfire.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vWM,
		mVM: 80,
		NVN: (1000 * 60) * 10,
		Nv: 150,
		Vw: 0
	}, {
		id: MM.WMw,
		nN: {
			src: ["img/inv-bullet-9mm-out.png", "img/inv-bullet-9mm-in.png", "img/inv-bullet-9mm-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Bullet", "For 9MM, Desert Eagle, and MP5 ", Vm.Vmv, [
			[MM.nwM, 3],
			[MM.Nvm, 3],
			[MM.wMm, 3]
		], 30, [
			[Mw.NnM, 10000]
		], 6),
		stack: 255,
		WV: Ww.WMw
	}, {
		id: MM.WMNnw,
		nN: {
			src: ["img/inv-bullet-shotgun-out.png", "img/inv-bullet-shotgun-in.png", "img/inv-bullet-shotgun-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cartridge", "For Shotgun", Vm.Vmv, [
			[MM.wNw, 1],
			[MM.Nvm, 4],
			[MM.wMm, 4]
		], 15, [
			[Mw.NnM, 10000]
		], 10),
		stack: 255,
		WV: Ww.WMNnw
	}, {
		id: MM.vWVVn,
		nN: {
			src: ["img/inv-bullet-sniper-out.png", "img/inv-bullet-sniper-in.png", "img/inv-bullet-sniper-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Heavy Bullet", "For Sniper, and AK47", Vm.Vmv, [
			[MM.wNw, 1],
			[MM.Nvm, 4],
			[MM.wMm, 4]
		], 30, [
			[Mw.NnM, 10000]
		], 11),
		stack: 255,
		WV: Ww.vWVVn
	}, {
		id: MM.vmnnm,
		nN: {
			src: ["img/inv-medikit-out.png", "img/inv-medikit-in.png", "img/inv-medikit-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Medkit", "Regenerate your life.", Vm.vWwNN, [
			[MM.wNm, 2],
			[MM.mWMMN, 1],
			[MM.mmm, 2],
			[MM.Nvm, 2]
		], 1, [
			[Mw.NnM, 80000]
		], 10),
		wVN: 17,
		stack: 2,
		WV: Ww.vmnnm,
		wait: 10
	}, {
		id: MM.mWMMN,
		nN: {
			src: ["img/inv-bandage-out.png", "img/inv-bandage-in.png", "img/inv-bandage-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Bandage", "To heal the boo-boos.", Vm.vWwNN, [
			[MM.wNm, 1],
			[MM.mmm, 2]
		], 1, [
			[Mw.Mvm, 20000]
		]),
		wVN: 18,
		stack: 5,
		WV: Ww.mWMMN,
		wait: 10
	}, {
		id: MM.VNmvV,
		nN: {
			src: ["img/inv-soda-out.png", "img/inv-soda-in.png", "img/inv-soda-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Soda", "Give energy.", Vm.MvN, [
			[MM.mWmvn, 1],
			[MM.vVN, 1],
			[MM.mVMWM, 1]
		], 1, [
			[Mw.mww, 40000],
			[Mw.WnM, 40000]
		], 5),
		wVN: 19,
		stack: 5,
		WV: Ww.VNmvV,
		nNNnm: 2,
		NVWmN: MM.mVMWM,
		wait: 10
	}, {
		id: MM.vvnvW,
		nN: {
			src: ["img/inv-MP5-out.png", "img/inv-MP5-in.png", "img/inv-MP5-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("MP5", "Not bad.", Vm.Vmv, [
			[MM.wNw, 6],
			[MM.Nvm, 6]
		], 1, [
			[Mw.NnM, 200000]
		], 10),
		wVN: 20,
		vmV: MM.WMw,
		stack: 1,
		WV: Ww.vvnvW,
		wait: 10
	}, {
		id: MM.WnW,
		nN: {
			src: ["img/inv-headscarf-out.png", "img/inv-headscarf-in.png", "img/inv-headscarf-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Headscarf", "Warm you up.", Vm.mmW, [
			[MM.wNm, 1],
			[MM.mmm, 1]
		], 1, [
			[Mw.Mvm, 60000]
		]),
		MNw: 1,
		stack: 1,
		WV: Ww.WnW,
		wait: 10,
		mnn: 0.00085,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0,
		NNV: 0
	}, {
		id: MM.MVM,
		nN: {
			src: ["img/inv-chapka-out.png", "img/inv-chapka-in.png", "img/inv-chapka-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Chapka", "You look like a real woodcutter.", Vm.mmW, [
			[MM.wNm, 6],
			[MM.mmm, 8],
			[MM.WnW, 1]
		], 1, [
			[Mw.Mvm, 120000]
		], 7),
		MNw: 2,
		stack: 1,
		WV: Ww.MVM,
		wait: 10,
		mnn: 0.0017,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0,
		NNV: 0
	}, {
		id: MM.nMwVV,
		nN: {
			src: ["img/inv-coat-out.png", "img/inv-coat-in.png", "img/inv-coat-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Winter Coat", "Is the weather really that cold?", Vm.mmW, [
			[MM.wNm, 15],
			[MM.mmm, 20],
			[MM.MVM, 1]
		], 1, [
			[Mw.Mvm, 180000]
		], 9, MM.MVM),
		MNw: 3,
		stack: 1,
		WV: Ww.nMwVV,
		wait: 10,
		mnn: 0.0026,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0,
		NNV: 0
	}, {
		id: MM.nNMmW,
		nN: {
			src: ["img/inv-gaz-mask-out.png", "img/inv-gaz-mask-in.png", "img/inv-gaz-mask-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Radiation Mask", "Protect you from Radioactivity.", Vm.mmW, [
			[MM.Nvm, 1],
			[MM.wNm, 1],
			[MM.mmm, 2]
		], 1, [
			[Mw.Mvm, 60000]
		]),
		MNw: 4,
		stack: 1,
		WV: Ww.nNMmW,
		wait: 10,
		mnn: 0,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0.009,
		NNV: 0
	}, {
		id: MM.nWwvv,
		nN: {
			src: ["img/inv-gaz-protection-out.png", "img/inv-gaz-protection-in.png", "img/inv-gaz-protection-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Min. Radiation Suit", "Previously, on Breaking Bad.", Vm.mmW, [
			[MM.wNw, 2],
			[MM.Nvm, 2],
			[MM.wNm, 4],
			[MM.mmm, 4],
			[MM.nNMmW, 1]
		], 1, [
			[Mw.Mvm, 90000]
		], 8),
		MNw: 5,
		stack: 1,
		WV: Ww.nWwvv,
		wait: 10,
		mnn: 0.0006,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0.016,
		NNV: 0
	}, {
		id: MM.WWNmW,
		nN: {
			src: ["img/inv-radiation-suit-out.png", "img/inv-radiation-suit-in.png", "img/inv-radiation-suit-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Radiation Suit", "Let's not grow a second head.", Vm.mmW, [
			[MM.wNw, 6],
			[MM.Nvm, 4],
			[MM.wNm, 8],
			[MM.mmm, 20],
			[MM.nWwvv, 1]
		], 1, [
			[Mw.Mvm, 180000]
		], 10, MM.nWwvv),
		MNw: 6,
		stack: 1,
		WV: Ww.WWNmW,
		wait: 10,
		mnn: 0,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0.022,
		NNV: -0.01
	}, {
		id: MM.VNnWV,
		nN: {
			src: ["img/inv-wood-arrow-out.png", "img/inv-wood-arrow-in.png", "img/inv-wood-arrow-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wood Arrow", "Needed to use bow.", Vm.Vmv, [
			[MM.vWM, 40]
		], 5, [
			[Mw.WVv, 15000],
			[Mw.nnw, 10000]
		]),
		stack: 255,
		WV: Ww.VNnWV
	}, {
		id: MM.wvv,
		nN: {
			src: ["img/inv-campfire-bbq-out.png", "img/inv-campfire-bbq-in.png", "img/inv-campfire-bbq-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Firepit", "Warm up and melt iron slowly.", Vm.MvN, [
			[MM.vWM, 120],
			[MM.mvM, 20],
			[MM.WWN, 4]
		], 1, [
			[Mw.nnw, 20000]
		], 3),
		wVN: 21,
		mWm: 20000,
		VMw: -1,
		z: 0,
		VMV: Mw.WnM,
		stack: 255,
		WV: Ww.wvv,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-campfire-bbq.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-campfire-bbq.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: vmVMn,
		nv: nM.WmvnW,
		WMnNn: nM.NVmWn,
		VVw: 16,
		wMn: {
			src: "img/e-campfire-bbq.png",
			image: {
				v: 0
			}
		},
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: {
			src: "img/day-campfire-bbq.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.wnn,
		nN: {
			src: ["img/inv-smelter-out.png", "img/inv-smelter-in.png", "img/inv-smelter-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Smelter", "Melt iron, uranium and alloys", Vm.MvN, [
			[MM.Nvm, 6],
			[MM.mnN, 1]
		], 1, [
			[Mw.NnM, 100000]
		], 10),
		wVN: 21,
		mWm: 42000,
		VMw: 1,
		z: 1,
		VMV: Mw.wnn,
		stack: 255,
		WV: Ww.wnn,
		wait: 10,
		NN: 1000,
		width: [100, 260, 100, 260],
		height: [260, 100, 260, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, -80, 0, -80],
		wvN: [-80, 0, -80, 0],
		nmNNN: [-1, 0, -1, 0],
		wvMVw: [0, -1, 0, -1],
		wmm: {
			src: "img/day-clear-blue-smelter.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-smelter.png",
			image: {
				v: 0
			}
		},
		vVvNm: [-20.5, -101.5, 20.5, 101.5],
		NMnNW: [101.5, -20.5, -101, 20.5],
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.mvNnV,
		VVw: 16,
		wMn: {
			src: "img/e-smelter.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-smelter-off.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-smelter-on.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-smelter-light-up.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-smelter-light-down.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 3000,
		Vw: 0
	}, {
		id: MM.NMwwN,
		nN: {
			src: ["img/inv-wood-door1-out.png", "img/inv-wood-door1-in.png", "img/inv-wood-door1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wooden Door", "Let's hope it holds.", Vm.vvV, [
			[MM.vWM, 60]
		], 1, [
			[Mw.nnw, 20000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.NMwwN,
		wait: 10,
		NN: 600,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-wood-door1.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-wood-door1.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 1,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PI,
		VNWwW: [1, -1, -1, 1],
		nmMwN: [-1, -1, 1, 1],
		mWWvM: [0, 0, 0, 0],
		mMWmn: [0, 0, 0, 0],
		wMVVw: [100, 100, 100, 100],
		WMmMw: [100, 100, 100, 100],
		nnVmV: 17,
		wMVwv: 113,
		nv: nM.nNM,
		VVw: 15,
		wMn: {
			src: "img/e-opendoor.png",
			image: {
				v: 0
			}
		},
		wVmvV: {
			src: "img/e-closedoor.png",
			image: {
				v: 0
			}
		},
		MwM: [{
			src: "img/day-wood-door1-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-door1-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-door1-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: {
			src: "img/day-wood-door1.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 2500,
		Vw: 0
	}, {
		id: MM.nvmMw,
		nN: {
			src: ["img/inv-stone-door1-out.png", "img/inv-stone-door1-in.png", "img/inv-stone-door1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone Door", "Not too heavy to open, I hope.", Vm.vvV, [
			[MM.mvM, 60]
		], 1, [
			[Mw.nnw, 20000]
		], 3),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.nvmMw,
		wait: 10,
		NN: 600,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-door1.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-door1.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 1,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PI,
		VNWwW: [1, -1, -1, 1],
		nmMwN: [-1, -1, 1, 1],
		mWWvM: [0, 0, 0, 0],
		mMWmn: [0, 0, 0, 0],
		wMVVw: [100, 100, 100, 100],
		WMmMw: [100, 100, 100, 100],
		nnVmV: 17,
		wMVwv: 113,
		nv: nM.nNM,
		VVw: 15,
		wMn: {
			src: "img/e-opendoor.png",
			image: {
				v: 0
			}
		},
		wVmvV: {
			src: "img/e-closedoor.png",
			image: {
				v: 0
			}
		},
		MwM: [{
			src: "img/day-stone-door1-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-door1-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-door1-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.Vvmww,
		mmM: WN.NNM,
		Vv: {
			src: "img/day-stone-door1.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.mvM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 6000,
		Vw: 0
	}, {
		id: MM.MVWMM,
		nN: {
			src: ["img/inv-steel-door1-out.png", "img/inv-steel-door1-in.png", "img/inv-steel-door1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Metal Door", "I guess you're safe.", Vm.vvV, [
			[MM.Nvm, 9]
		], 1, [
			[Mw.NnM, 40000]
		], 6, MM.nvmMw),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.MVWMM,
		wait: 10,
		NN: 600,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-door1.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-door1.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 1,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PI,
		VNWwW: [1, -1, -1, 1],
		nmMwN: [-1, -1, 1, 1],
		mWWvM: [0, 0, 0, 0],
		mMWmn: [0, 0, 0, 0],
		wMVVw: [100, 100, 100, 100],
		WMmMw: [100, 100, 100, 100],
		nnVmV: 17,
		wMVwv: 113,
		nv: nM.nNM,
		VVw: 15,
		wMn: {
			src: "img/e-opendoor.png",
			image: {
				v: 0
			}
		},
		wVmvV: {
			src: "img/e-closedoor.png",
			image: {
				v: 0
			}
		},
		MwM: [{
			src: "img/day-steel-door1-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-door1-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-door1-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-steel-door1.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WWN,
		mVM: 80,
		NVN: 315360000000,
		Nv: 12500,
		Vw: 0
	}, {
		id: MM.nwM,
		nN: {
			src: ["img/inv-sulfur-out.png", "img/inv-sulfur-in.png", "img/inv-sulfur-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Sulfur", "Sulfur in such a cold landscape?", Vm.NVmMW, [], 0, [
			[Mw.MWn, 240000]
		]),
		Wmnnn: 4,
		mMvNn: 8,
		stack: 255,
		WV: Ww.nwM,
		Vw: 32
	}, {
		id: MM.MNN,
		nN: {
			src: ["img/inv-shaped-uranium-out.png", "img/inv-shaped-uranium-in.png", "img/inv-shaped-uranium-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Shaped Uranium", "Are you out of your mind?", Vm.NVmMW, [
			[MM.nwv, 1]
		], 1, [
			[Mw.wnn, 20000]
		]),
		stack: 255,
		WV: Ww.MNN,
		Vw: 0
	}, {
		id: MM.NnM,
		nN: {
			src: ["img/inv-workbench2-out.png", "img/inv-workbench2-in.png", "img/inv-workbench2-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Research Bench", "Allow you to make new items", Vm.MvN, [
			[MM.Nvm, 6],
			[MM.mnN, 1]
		], 1, [
			[Mw.nnw, 50000]
		], 6),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 1,
		VMV: Mw.NnM,
		stack: 255,
		WV: Ww.NnM,
		wait: 10,
		NN: 1000,
		width: [100, 290, 100, 280],
		height: [280, 100, 280, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, -90, 0, -90],
		wvN: [-90, 0, -90, 0],
		nmNNN: [-1, 0, -1, 0],
		wvMVw: [0, -1, 0, -1],
		wmm: {
			src: "img/day-clear-blue-workbench2.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-workbench2.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.WWmnN,
		VVw: 16,
		wMn: {
			src: "img/e-workbench2.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-workbench2.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 400,
		Vw: 0
	}, {
		id: MM.nwv,
		nN: {
			src: ["img/inv-uranium-out.png", "img/inv-uranium-in.png", "img/inv-uranium-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Uranium", "Do you want to end up as Marie Curie?", Vm.NVmMW, [], 0, [
			[Mw.MWn, 240000]
		]),
		Wmnnn: 2,
		mMvNn: 4,
		stack: 255,
		WV: Ww.nwv,
		Vw: 45
	}, {
		id: MM.Mvm,
		nN: {
			src: ["img/inv-weaving-machine-out.png", "img/inv-weaving-machine-in.png", "img/inv-weaving-machine-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Weaving Machine", "Allow you to sew clothes", Vm.MvN, [
			[MM.vWM, 80],
			[MM.mvM, 20],
			[MM.wNm, 2]
		], 1, [
			[Mw.nnw, 60000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 1,
		VMV: Mw.Mvm,
		stack: 255,
		WV: Ww.Mvm,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-weaving-machine.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-weaving-machine.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.vwNNw,
		VVw: 16,
		wMn: {
			src: "img/e-weaving-machine.png",
			image: {
				v: 0
			}
		},
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: {
			src: "img/day-weaving-machine.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.MVwnm,
		nN: {
			src: ["img/inv-gasoline-out.png", "img/inv-gasoline-in.png", "img/inv-gasoline-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Gasoline", "Fuel for Smelter", Vm.MvN, [
			[MM.VVvVm, 4],
			[MM.nwM, 1]
		], 1, [
			[Mw.NnM, 20000]
		]),
		stack: 255,
		WV: Ww.MVwnm
	}, {
		id: MM.Nnn,
		nN: {
			src: ["img/inv-sulfur-pickaxe-out.png", "img/inv-sulfur-pickaxe-in.png", "img/inv-sulfur-pickaxe-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Sulfur Pickaxe", "Mine also Uranium", Vm.nwwVV, [
			[MM.wNw, 2],
			[MM.Nvm, 6],
			[MM.nwM, 6]
		], 1, [
			[Mw.NnM, 90000]
		], 9, MM.mWW),
		wVN: 22,
		stack: 1,
		WV: Ww.Nnn,
		wait: 10
	}, {
		id: MM.nVm,
		nN: {
			src: ["img/inv-chest-out.png", "img/inv-chest-in.png", "img/inv-chest-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wood chest", "You can't store food in.", Vm.vvV, [
			[MM.vWM, 50],
			[MM.mvM, 20]
		], 1, [
			[Mw.nnw, 30000]
		], 8),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.nVm,
		wait: 10,
		VNM: 1,
		NN: 600,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-chest.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-chest.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		nv: nM.vwNNw,
		VVw: 25,
		wMn: {
			src: "img/e-chest.png",
			image: {
				v: 0
			}
		},
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: {
			src: "img/day-chest.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vWM,
		mVM: 55,
		NVN: 315360000000,
		Nv: 300,
		Vw: 0
	}, {
		id: MM.nNWNV,
		nN: {
			src: ["img/inv-fridge-out.png", "img/inv-fridge-in.png", "img/inv-fridge-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Fridge", "Save your food.", Vm.vvV, [
			[MM.Nvm, 5],
			[MM.VwV, 4]
		], 1, [
			[Mw.NnM, 90000]
		], 9),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.nNWNV,
		wait: 10,
		VNM: 1,
		mNvnV: 1,
		NN: 600,
		width: [50, 100, 50, 100],
		height: [100, 50, 100, 50],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 50, 0],
		wvN: [0, 0, 0, 50],
		wmm: {
			src: "img/day-clear-blue-fridge.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-fridge.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		nv: nM.vwNNw,
		VVw: 25,
		wMn: {
			src: "img/e-fridge.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-fridge.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 55,
		NVN: 315360000000,
		Nv: 300,
		Vw: 0
	}, {
		id: MM.MvvWV,
		nN: {
			src: ["img/inv-wood-floor-out.png", "img/inv-wood-floor-in.png", "img/inv-wood-floor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wood floor", "Players can't spawn on it", Vm.vvV, [
			[MM.vWM, 15]
		], 2, [
			[Mw.nnw, 15000]
		]),
		stack: 255,
		WV: Ww.MvvWV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 2,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-wood-floor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-wood-floor.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.MvvWV,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VVMMv,
		MwM: [{
			src: "img/day-wood-floor-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NnW,
		mmM: WN.Vwv,
		Vv: [{
			src: "img/day-wood-floor-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 4000,
		Vw: 0
	}, {
		id: MM.vnWwn,
		nN: {
			src: ["img/inv-hammer-out.png", "img/inv-hammer-in.png", "img/inv-hammer-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Hammer", "Destroy walls quickly.", Vm.nwwVV, [
			[MM.vWM, 100],
			[MM.Nvm, 10]
		], 1, [
			[Mw.NnM, 30000]
		], 7),
		wVN: 23,
		stack: 1,
		WV: Ww.vnWwn,
		wait: 10
	}, {
		id: MM.VNmwv,
		nN: {
			src: ["img/inv-sleeping-bag-out.png", "img/inv-sleeping-bag-in.png", "img/inv-sleeping-bag-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Sleeping Bag", "Once dead, you keep your base", Vm.MvN, [
			[MM.mmm, 7],
			[MM.wMm, 7],
			[MM.wNm, 7]
		], 1, [
			[Mw.Mvm, 20000]
		], 9),
		stack: 255,
		WV: Ww.VNmwv,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-sleeping-bag.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-sleeping-bag.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.wMnnM,
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: {
			src: "img/day-sleeping-bag.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.Vnmwn,
		mVM: 80,
		NVN: 315360000000,
		Nv: 500,
		Vw: 0
	}, {
		id: MM.vnmmN,
		nN: {
			src: ["img/inv-repair-hammer-out.png", "img/inv-repair-hammer-in.png", "img/inv-repair-hammer-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Repair Hammer", "Repair walls but require nails.", Vm.nwwVV, [
			[MM.vWM, 120],
			[MM.Nvm, 2]
		], 1, [
			[Mw.nnw, 30000]
		], 5),
		wVN: 24,
		stack: 1,
		WV: Ww.vnmmN,
		wait: 10
	}, {
		id: MM.NnWwV,
		nN: {
			src: ["img/inv-nails-out.png", "img/inv-nails-in.png", "img/inv-nails-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Nails", "Needed to repair walls.", Vm.MvN, [
			[MM.Nvm, 2]
		], 85, [
			[Mw.nnw, 20000]
		]),
		stack: 255,
		WV: Ww.NnWwV
	}, {
		id: MM.VvmNN,
		nN: {
			src: ["img/inv-wood-floor-light-out.png", "img/inv-wood-floor-light-in.png", "img/inv-wood-floor-light-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Light Wood Floor", "Players can't spawn on it", Vm.vvV, [
			[MM.vWM, 15]
		], 2, [
			[Mw.nnw, 15000]
		]),
		stack: 255,
		WV: Ww.VvmNN,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 2,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-woodlight-floor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-woodlight-floor.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.VvmNN,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VVMMv,
		MwM: [{
			src: "img/day-wood-floor-light-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NnW,
		mmM: WN.Vwv,
		Vv: [{
			src: "img/day-wood-floor-light-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-floor-light-46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.wnvvW,
		mVM: 80,
		NVN: 315360000000,
		Nv: 4000,
		Vw: 0
	}, {
		id: MM.WNmVm,
		nN: {
			src: ["img/inv-wood-smallwall-out.png", "img/inv-wood-smallwall-in.png", "img/inv-wood-smallwall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wooden Low Wall", "You can shoot through it.", Vm.vvV, [
			[MM.vWM, 10]
		], 1, [
			[Mw.nnw, 10000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.WNmVm,
		wait: 10,
		NN: 1000,
		width: [100, 35, 100, 35],
		height: [35, 100, 35, 100],
		vNv: [0, -30, 0, 30],
		vmn: [30, 0, -30, 0],
		MVN: [0, 0, 0, 65],
		wvN: [65, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-wood-smallwall.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-wood-smallwall.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 1,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		VNWwW: [1, 0, -1, 0],
		nmMwN: [0, -1, 0, 1],
		mWWvM: [0, 0, 65, 0],
		mMWmn: [0, 0, 0, 65],
		wMVVw: [35, 100, 35, 100],
		WMmMw: [100, 35, 100, 35],
		nnVmV: 6,
		wMVwv: 46,
		VWV: 0,
		nv: nM.nNw,
		MwM: [{
			src: "img/day-wood-smallwalls-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: [{
			src: "img/day-wood-smallwalls-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-smallwalls-39.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 3000,
		Vw: 0
	}, {
		id: MM.MWwNV,
		nN: {
			src: ["img/inv-stone-smallwall-out.png", "img/inv-stone-smallwall-in.png", "img/inv-stone-smallwall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone Low Wall", "You can shoot through it.", Vm.vvV, [
			[MM.mvM, 10]
		], 1, [
			[Mw.nnw, 15000]
		], 3),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.MWwNV,
		wait: 10,
		NN: 1000,
		width: [100, 35, 100, 35],
		height: [35, 100, 35, 100],
		vNv: [0, -30, 0, 30],
		vmn: [30, 0, -30, 0],
		MVN: [0, 0, 0, 65],
		wvN: [65, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-smallwalls.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-smallwalls.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 1,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		VNWwW: [1, 0, -1, 0],
		nmMwN: [0, -1, 0, 1],
		mWWvM: [0, 0, 65, 0],
		mMWmn: [0, 0, 0, 65],
		wMVVw: [35, 100, 35, 100],
		WMmMw: [100, 35, 100, 35],
		nnVmV: 6,
		wMVwv: 46,
		VWV: 0,
		nv: nM.nNw,
		MwM: [{
			src: "img/day-stone-smallwalls-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.Vvmww,
		mmM: WN.NNM,
		Vv: [{
			src: "img/day-stone-smallwalls-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-smallwalls-39.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.mvM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 7000,
		Vw: 0
	}, {
		id: MM.vWWvW,
		nN: {
			src: ["img/inv-steel-smallwall-out.png", "img/inv-steel-smallwall-in.png", "img/inv-steel-smallwall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Metal Low Wall", "You can shoot through it.", Vm.vvV, [
			[MM.Nvm, 2]
		], 1, [
			[Mw.NnM, 20000]
		], 6, MM.MWwNV),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 0,
		stack: 255,
		WV: Ww.vWWvW,
		wait: 10,
		NN: 1000,
		width: [100, 35, 100, 35],
		height: [35, 100, 35, 100],
		vNv: [0, -30, 0, 30],
		vmn: [30, 0, -30, 0],
		MVN: [0, 0, 0, 65],
		wvN: [65, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-smallwalls.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-smallwalls.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 1,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		angle: Math.PIT,
		VNWwW: [1, 0, -1, 0],
		nmMwN: [0, -1, 0, 1],
		mWWvM: [0, 0, 65, 0],
		mMWmn: [0, 0, 0, 65],
		wMVVw: [35, 100, 35, 100],
		WMmMw: [100, 35, 100, 35],
		nnVmV: 6,
		wMVwv: 46,
		VWV: 0,
		nv: nM.nNw,
		MwM: [{
			src: "img/day-steel-smallwalls-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-steel-smallwalls-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-steel-smallwalls-39.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WWN,
		mVM: 55,
		NVN: 315360000000,
		Nv: 15000,
		Vw: 0
	}, {
		id: MM.wVNmN,
		VMw: 0,
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: [],
		detail: {
			vnW: undefined
		},
		NvW: -1,
		nv: nM.wMWVm
	}, {
		id: MM.WwvnN,
		nN: {
			src: ["img/inv-tomato-soup-out.png", "img/inv-tomato-soup-in.png", "img/inv-tomato-soup-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tomato Soup", "Has not yet been opened.", Vm.MvN, [
			[MM.mVMWM, 1],
			[MM.NwV, 2]
		], 1, [
			[Mw.mww, 15000],
			[Mw.WnM, 7000]
		]),
		wVN: 25,
		stack: 5,
		WV: Ww.WwvnN,
		nNNnm: 2,
		NVWmN: MM.mVMWM,
		wait: 10
	}, {
		id: MM.mMV,
		nN: {
			src: ["img/inv-syringe-out.png", "img/inv-syringe-in.png", "img/inv-syringe-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Syringe", "Useful to make drugs.", Vm.vWwNN, [
			[MM.nMm, 1]
		], 1, [
			[Mw.NnM, 30000]
		]),
		stack: 20,
		WV: Ww.mMV,
		Vw: 50
	}, {
		id: MM.vVN,
		nN: {
			src: ["img/inv-chemical-component-out.png", "img/inv-chemical-component-in.png", "img/inv-chemical-component-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Chemical Component", "Useful to make a drugs."),
		stack: 20,
		WV: Ww.vVN,
		Vw: 50
	}, {
		id: MM.WMNWN,
		nN: {
			src: ["img/inv-radaway-out.png", "img/inv-radaway-in.png", "img/inv-radaway-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("RadAway", "Reduce your radioactivity a lot.", Vm.vWwNN, [
			[MM.mMV, 1],
			[MM.vVN, 1],
			[MM.VwWMV, 1]
		], 1, [
			[Mw.WMm, 45000]
		]),
		wVN: 26,
		stack: 5,
		WV: Ww.WMNWN,
		wait: 10
	}, {
		id: MM.MVmNM,
		nN: {
			src: ["img/inv-tomato-seed-out.png", "img/inv-tomato-seed-in.png", "img/inv-tomato-seed-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tomato Seed", "A fruit or vegetable?", Vm.WmNVv, [
			[MM.NwV, 4]
		], 1, [
			[Mw.mww, 30000],
			[Mw.WnM, 20000]
		]),
		stack: 40,
		WV: Ww.MVmNM,
		vnNVV: Ww.NwV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [30, 30, 30, 30],
		height: [30, 30, 30, 30],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [35, 35, 35, 35],
		wvN: [35, 35, 35, 35],
		wmm: {
			src: "img/day-clear-blue-tomato.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-tomato.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.nvWvN,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.MMnWv,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vv: [{
			src: "img/day-plant0-tomato.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant1-tomato.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant2-tomato.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant3-tomato.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant4-tomato.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.NwV,
		mVM: 68,
		NVN: ((5 * 8) * 60) * 1000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.NwV,
		nN: {
			src: ["img/inv-tomato-out.png", "img/inv-tomato-in.png", "img/inv-tomato-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tomato", "Why did the tomato blush?"),
		stack: 20,
		WV: Ww.NwV,
		wait: 5,
		nNNnm: 10,
		NVWmN: MM.VmnwW,
		wVN: 27,
		Vw: 24
	}, {
		id: MM.VmnwW,
		nN: {
			src: ["img/inv-rotten-tomato-out.png", "img/inv-rotten-tomato-in.png", "img/inv-rotten-tomato-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rotten Tomato", "Go on, have a bite!"),
		stack: 20,
		WV: Ww.VmnwW,
		wait: 5,
		wVN: 28,
		Vw: 20
	}, {
		id: MM.mVMWM,
		nN: {
			src: ["img/inv-can-out.png", "img/inv-can-in.png", "img/inv-can-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Can", "Useful to craft food can.", Vm.MvN, [
			[MM.Nvm, 1]
		], 1, [
			[Mw.nnw, 20000]
		]),
		wVN: 0,
		stack: 255,
		WV: Ww.mVMWM
	}, {
		id: MM.NVvnn,
		nN: {
			src: ["img/inv-wood-crossbow-out.png", "img/inv-wood-crossbow-in.png", "img/inv-wood-crossbow-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wood Crossbow", "Shoot faster, reload slower", Vm.Vmv, [
			[MM.vWM, 200],
			[MM.wNm, 2],
			[MM.Nvm, 1]
		], 1, [
			[Mw.nnw, 50000]
		], 6),
		wVN: 29,
		vmV: MM.mwvnv,
		stack: 1,
		WV: Ww.NVvnn,
		wait: 10
	}, {
		id: MM.mwvnv,
		nN: {
			src: ["img/inv-wood-crossarrow-out.png", "img/inv-wood-crossarrow-in.png", "img/inv-wood-crossarrow-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Crossbow Arrows", "Needed to use crossbow.", Vm.Vmv, [
			[MM.vWM, 40],
			[MM.Nvm, 1]
		], 10, [
			[Mw.nnw, 30000]
		]),
		stack: 255,
		WV: Ww.mwvnv
	}, {
		id: MM.nwwWw,
		nN: {
			src: ["img/inv-nail-gun-out.png", "img/inv-nail-gun-in.png", "img/inv-nail-gun-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Nail Gun", "Repair walls from a distance", Vm.nwwVV, [
			[MM.Nvm, 3],
			[MM.nWv, 1],
			[MM.nMm, 1],
			[MM.VwV, 4]
		], 1, [
			[Mw.NnM, 30000]
		], 7),
		wVN: 30,
		vmV: MM.NnWwV,
		stack: 1,
		WV: Ww.nwwWw,
		wait: 10
	}, {
		id: MM.NMnnV,
		nN: {
			src: ["img/inv-sawed-off-shotgun-out.png", "img/inv-sawed-off-shotgun-in.png", "img/inv-sawed-off-shotgun-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Sawed Off", "Shoot less far, do more damages", Vm.Vmv, [
			[MM.vwMWN, 1],
			[MM.wNw, 6],
			[MM.Nvm, 6]
		], 1, [
			[Mw.NnM, 200000]
		], 13, MM.vwMWN),
		wVN: 31,
		vmV: MM.WMNnw,
		stack: 1,
		WV: Ww.NMnnV,
		wait: 10
	}, {
		id: MM.nNmVW,
		nN: {
			src: ["img/inv-stone-floor-out.png", "img/inv-stone-floor-in.png", "img/inv-stone-floor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone floor", "Players can't spawn on it", Vm.vvV, [
			[MM.mvM, 15]
		], 2, [
			[Mw.nnw, 15000]
		], 4),
		stack: 255,
		WV: Ww.nNmVW,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 2,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-floor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-floor.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.nNmVW,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VVMMv,
		MwM: [{
			src: "img/day-stone-floor-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NnW,
		mmM: WN.NNM,
		Vv: [{
			src: "img/day-stone-floor-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-floor-46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.mvM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 8000,
		Vw: 0
	}, {
		id: MM.NVvNv,
		nN: {
			src: ["img/inv-tiling-floor-out.png", "img/inv-tiling-floor-in.png", "img/inv-tiling-floor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tiling floor", "Players can't spawn on it", Vm.vvV, [
			[MM.mvM, 15]
		], 2, [
			[Mw.nnw, 15000]
		], 4),
		stack: 255,
		WV: Ww.NVvNv,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 2,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-tiling-floor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-tiling-floor.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.NVvNv,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VVMMv,
		MwM: [{
			src: "img/day-tiling-floor-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NnW,
		mmM: WN.NNM,
		Vv: [{
			src: "img/day-tiling-floor-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tiling-floor-46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.mvM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 8000,
		Vw: 0
	}, {
		id: MM.wmvWW,
		VMw: 0,
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: [],
		WWw: [],
		detail: {
			vnW: undefined
		},
		NvW: -1,
		nv: nM.Wmvvm
	}, {
		id: MM.MVnNM,
		nN: {
			src: ["img/inv-chips-out.png", "img/inv-chips-in.png", "img/inv-chips-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Crisps", "You salty?"),
		wVN: 32,
		stack: 5,
		WV: Ww.MVnNM,
		nNNnm: 2,
		NVWmN: MM.WWvvM,
		wait: 10
	}, {
		id: MM.WWvvM,
		nN: {
			src: ["img/inv-rotten-chips-out.png", "img/inv-rotten-chips-in.png", "img/inv-rotten-chips-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Expired Crisps", "Go on, have a bite!"),
		stack: 5,
		WV: Ww.WWvvM,
		wait: 5,
		wVN: 33,
		Vw: 20
	}, {
		id: MM.mnN,
		nN: {
			src: ["img/inv-electronic-part-out.png", "img/inv-electronic-part-in.png", "img/inv-electronic-part-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Electronic Parts", "Break TV's and Computers to find it"),
		stack: 255,
		WV: Ww.mnN,
		Vw: 100
	}, {
		id: MM.nMm,
		nN: {
			src: ["img/inv-junk-out.png", "img/inv-junk-in.png", "img/inv-junk-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Junk", "Find it in houses"),
		stack: 255,
		WV: Ww.nMm,
		Vw: 40
	}, {
		id: MM.wWw,
		nN: {
			src: ["img/inv-wires-out.png", "img/inv-wires-in.png", "img/inv-wires-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Big Wire", "Break big computers in power station (in the city)"),
		stack: 255,
		WV: Ww.wWw,
		Vw: 40
	}, {
		id: MM.VwV,
		nN: {
			src: ["img/inv-small-energy-cells-out.png", "img/inv-small-energy-cells-in.png", "img/inv-small-energy-cells-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Energy Cells", "Used for energy weapons/buildings", Vm.MvN, [
			[MM.wNw, 1],
			[MM.MNN, 1]
		], 30, [
			[Mw.nmV, 28000]
		], 6),
		stack: 255,
		WV: Ww.VwV
	}, {
		id: MM.wVNwW,
		nN: {
			src: ["img/inv-laser-pistol-out.png", "img/inv-laser-pistol-in.png", "img/inv-laser-pistol-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Laser Pistol", "Bullets are faster.", Vm.Vmv, [
			[MM.MNN, 2],
			[MM.wWw, 1],
			[MM.mnN, 2],
			[MM.wNw, 1],
			[MM.Nvm, 4]
		], 1, [
			[Mw.nmV, 180000]
		], 14),
		wVN: 34,
		vmV: MM.VwV,
		stack: 1,
		WV: Ww.wVNwW,
		wait: 10
	}, {
		id: MM.nmV,
		nN: {
			src: ["img/inv-workbench3-out.png", "img/inv-workbench3-in.png", "img/inv-workbench3-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tesla Bench", "Allow you to make powerful items", Vm.MvN, [
			[MM.wNw, 4],
			[MM.Nvm, 6],
			[MM.mnN, 3],
			[MM.wWw, 4],
			[MM.MNN, 2]
		], 1, [
			[Mw.NnM, 120000]
		], 10, MM.NnM),
		wVN: 21,
		mWm: 60000,
		VMw: 0,
		z: 1,
		VMV: Mw.nmV,
		stack: 255,
		WV: Ww.nmV,
		wait: 10,
		NN: 1000,
		width: [100, 260, 100, 260],
		height: [260, 100, 260, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, -80, 0, -80],
		wvN: [-80, 0, -80, 0],
		nmNNN: [-1, 0, -1, 0],
		wvMVw: [0, -1, 0, -1],
		wmm: {
			src: "img/day-clear-blue-workbench3.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-workbench3.png",
			image: {
				v: 0
			}
		},
		vVvNm: [-20.5, -101.5, 20.5, 101.5],
		NMnNW: [101.5, -20.5, -101, 20.5],
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.vnmvV,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.MVVvv,
		VVw: 16,
		wMn: {
			src: "img/e-workbench3.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-workbench3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-workbench3-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-workbench3-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-workbench3-3.png",
			image: {
				v: 0
			}
		}],
		mmN: [{
			src: "img/day-tesla-light0.png",
			image: {
				v: 0
			}
		}, 0, {
			src: "img/day-tesla-light1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tesla-light2.png",
			image: {
				v: 0
			}
		}, 0, {
			src: "img/day-tesla-light3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tesla-light4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-tesla-light5.png",
			image: {
				v: 0
			}
		}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 3000,
		Vw: 0
	}, {
		id: MM.wNw,
		nN: {
			src: ["img/inv-alloys-out.png", "img/inv-alloys-in.png", "img/inv-alloys-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Alloys", "To craft powerful items", Vm.NVmMW, [
			[MM.WWN, 1],
			[MM.nMm, 1],
			[MM.nwM, 1]
		], 1, [
			[Mw.wnn, 10000]
		]),
		stack: 255,
		WV: Ww.wNw
	}, {
		id: MM.mMW,
		nN: {
			src: ["img/inv-sulfur-axe-out.png", "img/inv-sulfur-axe-in.png", "img/inv-sulfur-axe-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Sulfur Axe", "You look cool with it.", Vm.nwwVV, [
			[MM.WvM, 1],
			[MM.wNw, 8],
			[MM.Nvm, 10],
			[MM.nwM, 20]
		], 1, [
			[Mw.NnM, 200000]
		], 10, MM.WvM),
		wVN: 35,
		stack: 1,
		WV: Ww.mMW,
		wait: 10
	}, {
		id: MM.nVwWW,
		nN: {
			src: ["img/inv-landmine-out.png", "img/inv-landmine-in.png", "img/inv-landmine-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Landmine", "When you feel it, it's too late", Vm.Vmv, [
			[MM.Nvm, 4],
			[MM.nMm, 1],
			[MM.nwM, 2],
			[MM.wMm, 2]
		], 1, [
			[Mw.NnM, 40000]
		], 9),
		stack: 20,
		WV: Ww.nVwWW,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [50, 50, 50, 50],
		height: [50, 50, 50, 50],
		MVN: [25, 25, 25, 25],
		wvN: [25, 25, 25, 25],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-landmine.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-landmine.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 1,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		NwW: 200,
		VMn: 400,
		VWV: 0,
		nv: nM.wMMMN,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-landmine-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-landmine-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-landmine-2.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.nnmWw,
		mVM: 80,
		NVN: 315360000000,
		Nv: 5,
		Vw: 0
	}, {
		id: MM.VnmMw,
		nN: {
			src: ["img/inv-dynamite-out.png", "img/inv-dynamite-in.png", "img/inv-dynamite-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Dynamite", "Get out of here, it gonna blow!", Vm.Vmv, [
			[MM.wNm, 1],
			[MM.wMm, 2],
			[MM.nwM, 2],
			[MM.nMm, 1]
		], 1, [
			[Mw.NnM, 40000]
		], 9),
		stack: 10,
		WV: Ww.VnmMw,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-dynamite.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-dynamite.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 1,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		NwW: 180,
		VMn: 1400,
		VWV: 0,
		nv: nM.WVMWn,
		NWv: WN.wNV,
		mmM: WN.NnW,
		Vv: [{
			src: "img/day-dynamite.png",
			image: {
				v: 0
			}
		}, {
			src: "img/dynamite-yellow.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.nwWwW,
		mVM: 80,
		NVN: 5000,
		Nv: 100,
		Vw: 0
	}, {
		id: MM.NwvMV,
		nN: {
			src: ["img/inv-C4-out.png", "img/inv-C4-in.png", "img/inv-C4-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("C4", "Explode when you hit the trigger!", Vm.Vmv, [
			[MM.VnmMw, 2],
			[MM.nWv, 1],
			[MM.wNw, 2],
			[MM.mnN, 1]
		], 1, [
			[Mw.NnM, 60000]
		], 16, MM.VnmMw),
		stack: 5,
		WV: Ww.NwvMV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-C4.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-C4.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 1,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		NwW: 255,
		VMn: 6000,
		nMM: 0,
		VWV: 0,
		nv: nM.WVMWn,
		NWv: WN.wNV,
		mmM: WN.NnW,
		Vv: [{
			src: "img/day-C4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/C4-red.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.nnmWw,
		mVM: 80,
		NVN: 315360000000,
		Nv: 100,
		Vw: 0
	}, {
		id: MM.WwnNN,
		nN: {
			src: ["img/inv-joystick-out.png", "img/inv-joystick-in.png", "img/inv-joystick-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("C4 Trigger", "Don't press the button or else...", Vm.Vmv, [
			[MM.Nvm, 5],
			[MM.mnN, 1],
			[MM.VwV, 8],
			[MM.nWv, 1]
		], 1, [
			[Mw.NnM, 100000]
		], 16, MM.NwvMV),
		stack: 1,
		WV: Ww.WwnNN,
		wait: 10,
		wVN: 36,
		Vw: 0
	}, {
		id: MM.MmN,
		nN: {
			src: ["img/inv-composter-out.png", "img/inv-composter-in.png", "img/inv-composter-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Compost", "Allows to accelerate rotting", Vm.MvN, [
			[MM.Nvm, 4],
			[MM.mnN, 1]
		], 1, [
			[Mw.NnM, 100000]
		], 8),
		wVN: 21,
		mWm: 10000,
		VMw: 0,
		z: 1,
		VMV: Mw.MmN,
		stack: 255,
		WV: Ww.MmN,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-composter.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-composter.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.mNMNv,
		VVw: 16,
		wMn: {
			src: "img/e-composter.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-composter-off.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-composter.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 500,
		Vw: 0
	}, {
		id: MM.vvNww,
		nN: {
			src: ["img/inv-metal-helmet-out.png", "img/inv-metal-helmet-in.png", "img/inv-metal-helmet-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Metal Helmet", "Protects you from melee weapons", Vm.mmW, [
			[MM.Nvm, 3],
			[MM.WwMnn, 3],
			[MM.mmm, 3],
			[MM.NnWwV, 80]
		], 1, [
			[Mw.nnw, 70000]
		]),
		MNw: 7,
		stack: 1,
		WV: Ww.vvNww,
		wait: 10,
		mnn: 0,
		WVN: 0.15,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0,
		NNV: -0.01
	}, {
		id: MM.Mwwnm,
		nN: {
			src: ["img/inv-welding-helmet-out.png", "img/inv-welding-helmet-in.png", "img/inv-welding-helmet-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Welding Helmet", "Protects you from melee weapons", Vm.mmW, [
			[MM.Nvm, 10],
			[MM.wNw, 2],
			[MM.mmm, 3],
			[MM.NnWwV, 160],
			[MM.vvNww, 1]
		], 1, [
			[Mw.NnM, 140000]
		], 7),
		MNw: 8,
		stack: 1,
		WV: Ww.Mwwnm,
		wait: 10,
		mnn: 0,
		WVN: 0.4,
		WmV: 0,
		vWW: 0,
		nmN: 0.05,
		WVn: 0,
		NNV: -0.02
	}, {
		id: MM.Wnwmw,
		nN: {
			src: ["img/inv-gladiator-helmet-out.png", "img/inv-gladiator-helmet-in.png", "img/inv-gladiator-helmet-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Gladiator Helmet", "Strength and honor.", Vm.mmW, [
			[MM.Nvm, 12],
			[MM.wNw, 6],
			[MM.mmm, 4],
			[MM.NnWwV, 255],
			[MM.Mwwnm, 1]
		], 1, [
			[Mw.NnM, 300000]
		], 17, MM.Mwwnm),
		MNw: 9,
		stack: 1,
		WV: Ww.Wnwmw,
		wait: 10,
		mnn: 0,
		WVN: 0.6,
		WmV: 0.1,
		vWW: 0,
		nmN: 0.2,
		WVn: 0,
		NNV: -0.03
	}, {
		id: MM.vWNMm,
		nN: {
			src: ["img/inv-leather-jacket-out.png", "img/inv-leather-jacket-in.png", "img/inv-leather-jacket-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Leather Jacket", "Protects you from guns", Vm.mmW, [
			[MM.wNm, 2],
			[MM.mmm, 4]
		], 1, [
			[Mw.Mvm, 70000]
		]),
		MNw: 10,
		stack: 1,
		WV: Ww.vWNMm,
		wait: 10,
		mnn: 0.0006,
		WVN: 0,
		WmV: 0.2,
		vWW: 0,
		nmN: 0,
		WVn: 0,
		NNV: 0
	}, {
		id: MM.vnvVM,
		nN: {
			src: ["img/inv-kevlar-suit-out.png", "img/inv-kevlar-suit-in.png", "img/inv-kevlar-suit-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Kevlar Suit", "Protects you from guns", Vm.mmW, [
			[MM.Nvm, 6],
			[MM.wNm, 4],
			[MM.mmm, 6],
			[MM.wNw, 2],
			[MM.vWNMm, 1]
		], 1, [
			[Mw.Mvm, 100000]
		], 12),
		MNw: 11,
		stack: 1,
		WV: Ww.vnvVM,
		wait: 10,
		mnn: 0,
		WVN: 0,
		WmV: 0.4,
		vWW: 0,
		nmN: 0,
		WVn: 0,
		NNV: 0
	}, {
		id: MM.NNVnW,
		nN: {
			src: ["img/inv-SWAT-suit-out.png", "img/inv-SWAT-suit-in.png", "img/inv-SWAT-suit-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("SWAT Suit", "Protects you from guns", Vm.mmW, [
			[MM.Nvm, 10],
			[MM.wNm, 10],
			[MM.mmm, 10],
			[MM.wNw, 4],
			[MM.vnvVM, 1]
		], 1, [
			[Mw.Mvm, 200000]
		], 18, MM.vnvVM),
		MNw: 12,
		stack: 1,
		WV: Ww.NNVnW,
		wait: 10,
		mnn: 0,
		WVN: 0.1,
		WmV: 0.7,
		vWW: 0,
		nmN: 0.1,
		WVn: 0,
		NNV: -0.01
	}, {
		id: MM.WMVVV,
		nN: {
			src: ["img/inv-protective-suit-out.png", "img/inv-protective-suit-in.png", "img/inv-protective-suit-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Protective Suit", "Protects you from explosives", Vm.mmW, [
			[MM.Nvm, 6],
			[MM.wNm, 6],
			[MM.mmm, 6],
			[MM.wNw, 2]
		], 1, [
			[Mw.Mvm, 200000]
		], 12, MM.VvwVW),
		MNw: 13,
		stack: 1,
		WV: Ww.WMVVV,
		wait: 10,
		mnn: 0.00085,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0.9,
		WVn: 0,
		NNV: -0.03
	}, {
		id: MM.vmnWV,
		nN: {
			src: ["img/inv-tesla-0-out.png", "img/inv-tesla-0-in.png", "img/inv-tesla-0-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Power Armor", "Protects you from energy weapons", Vm.mmW, [
			[MM.Nvm, 20],
			[MM.MNN, 2],
			[MM.mnN, 1],
			[MM.wWw, 2],
			[MM.wNw, 2]
		], 1, [
			[Mw.nmV, 150000]
		], 10),
		MNw: 14,
		stack: 1,
		WV: Ww.vmnWV,
		wait: 10,
		mnn: 0,
		WVN: 0,
		WmV: 0,
		vWW: 0.3,
		nmN: 0,
		WVn: 0,
		NNV: 0
	}, {
		id: MM.wNNMN,
		nN: {
			src: ["img/inv-tesla-armor-out.png", "img/inv-tesla-armor-in.png", "img/inv-tesla-armor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tesla Armor", "Protects you from energy weapons", Vm.mmW, [
			[MM.vmnWV, 1],
			[MM.MNN, 10],
			[MM.mnN, 5],
			[MM.wWw, 5],
			[MM.wNw, 10]
		], 1, [
			[Mw.nmV, 300000]
		], 18, MM.vmnWV, 3),
		MNw: 15,
		stack: 1,
		WV: Ww.wNNMN,
		wait: 10,
		mnn: 0.00085,
		WVN: 0.2,
		WmV: 0.2,
		vWW: 0.75,
		nmN: 0.2,
		WVn: 0.01,
		NNV: -0.02
	}, {
		id: MM.vMnNN,
		nN: {
			src: ["img/inv-wood-spike-out.png", "img/inv-wood-spike-in.png", "img/inv-wood-spike-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Wooden Spike", "Hurt and slow down", Vm.vvV, [
			[MM.vWM, 80]
		], 1, [
			[Mw.nnw, 25000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		stack: 40,
		WV: Ww.vMnNN,
		wait: 10,
		NN: 1000,
		width: [50, 50, 50, 50],
		height: [50, 50, 50, 50],
		MVN: [25, 25, 25, 25],
		wvN: [25, 25, 25, 25],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-wood-spike.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-wood-spike.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.vmVNn,
		hidden: [{
			src: "img/day-wood-spike-cover1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-spike-cover2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-spike-cover3.png",
			image: {
				v: 0
			}
		}],
		WnnVM: [{
			src: "img/day-wood-spike-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-spike-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-wood-spike-3.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.vWM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 200,
		Vw: 0
	}, {
		id: MM.nMMwV,
		nN: {
			src: ["img/inv-laser-submachine-out.png", "img/inv-laser-submachine-in.png", "img/inv-laser-submachine-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Laser Submachine", "It's the best weapon", Vm.Vmv, [
			[MM.wNw, 10],
			[MM.Nvm, 6],
			[MM.MNN, 6],
			[MM.wWw, 2],
			[MM.mnN, 3]
		], 1, [
			[Mw.nmV, 180000]
		], 14, MM.wVNwW, 2),
		wVN: 37,
		vmV: MM.VwV,
		stack: 1,
		WV: Ww.nMMwV,
		wait: 10
	}, {
		id: MM.mwVWn,
		nN: {
			src: ["img/inv-grenade-out.png", "img/inv-grenade-in.png", "img/inv-grenade-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Grenade", "Explodes when you throw it away.", Vm.Vmv, [
			[MM.Nvm, 2],
			[MM.nMm, 2],
			[MM.nwM, 2],
			[MM.wMm, 2]
		], 2, [
			[Mw.NnM, 30000]
		], 10),
		wVN: 38,
		NwW: 130,
		VMn: 400,
		stack: 10,
		WV: Ww.mwVWn,
		wait: 10
	}, {
		id: MM.nmVmn,
		nN: {
			src: ["img/inv-super-hammer-out.png", "img/inv-super-hammer-in.png", "img/inv-super-hammer-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Super Hammer", "Destroy indestructible walls."),
		wVN: 39,
		stack: 1,
		WV: Ww.nmVmn,
		wait: 10
	}, {
		id: MM.mWmvn,
		nN: {
			src: ["img/inv-ghoul-blood-out.png", "img/inv-ghoul-blood-in.png", "img/inv-ghoul-blood-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Ghoul Blood", "Find it on speedy ghouls"),
		stack: 255,
		WV: Ww.mWmvn,
		Vw: 100
	}, {
		id: MM.nVWWn,
		nN: {
			src: ["img/inv-camouflage-gear-out.png", "img/inv-camouflage-gear-in.png", "img/inv-camouflage-gear-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Camouflage Gear", "Hide you in the forest", Vm.mmW, [
			[MM.vWM, 90],
			[MM.wNm, 2],
			[MM.mmm, 2]
		], 1, [
			[Mw.Mvm, 40000]
		]),
		MNw: 16,
		stack: 1,
		WV: Ww.nVWWn,
		wait: 10,
		mnn: 0,
		WVN: 0,
		WmV: 0,
		vWW: 0,
		nmN: 0,
		WVn: 0,
		NNV: 0
	}, {
		id: MM.WMm,
		nN: {
			src: ["img/inv-agitator-out.png", "img/inv-agitator-in.png", "img/inv-agitator-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Agitator", "Allows to craft drugs", Vm.MvN, [
			[MM.Nvm, 6],
			[MM.mnN, 1]
		], 1, [
			[Mw.NnM, 100000]
		], 8),
		wVN: 21,
		mWm: 100000,
		VMw: 0,
		z: 1,
		VMV: Mw.WMm,
		stack: 255,
		WV: Ww.WMm,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-agitator.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-agitator.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.VVMwW,
		VVw: 16,
		wMn: {
			src: "img/e-agitator.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-agitator1-off.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-agitator1-on.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-agitator-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-agitator-2.png",
			image: {
				v: 0
			}
		}],
		mnwVw: [
			[-25.5, 21],
			[-21, -25.5],
			[25.5, -21],
			[21, 25.5]
		],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 500,
		Vw: 0
	}, {
		id: MM.VvWWN,
		nN: {
			src: ["img/inv-ghoul-drug-out.png", "img/inv-ghoul-drug-in.png", "img/inv-ghoul-drug-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Ghoul Drug", "Ghouls does not attack you.", Vm.vWwNN, [
			[MM.mMV, 1],
			[MM.vVN, 1],
			[MM.VwWMV, 1],
			[MM.MmWmM, 1],
			[MM.mWmvn, 1]
		], 1, [
			[Mw.WMm, 30000]
		], 10),
		wVN: 40,
		stack: 5,
		WV: Ww.VvWWN,
		wait: 10
	}, {
		id: MM.wnnwM,
		nN: {
			src: ["img/inv-mushroom1-out.png", "img/inv-mushroom1-in.png", "img/inv-mushroom1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Amanita", "Poisoned, really dangerous"),
		stack: 20,
		WV: Ww.wnnwM,
		wait: 5,
		nNNnm: 10,
		NVWmN: MM.WVMMv,
		wVN: 41,
		Vw: 24
	}, {
		id: MM.VwWMV,
		nN: {
			src: ["img/inv-mushroom2-out.png", "img/inv-mushroom2-in.png", "img/inv-mushroom2-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Boletus", "Can be eaten."),
		stack: 20,
		WV: Ww.VwWMV,
		wait: 5,
		nNNnm: 10,
		NVWmN: MM.VMMvN,
		wVN: 42,
		Vw: 24
	}, {
		id: MM.MmWmM,
		nN: {
			src: ["img/inv-mushroom3-out.png", "img/inv-mushroom3-in.png", "img/inv-mushroom3-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Russula", "Can be eaten."),
		stack: 20,
		WV: Ww.MmWmM,
		wait: 5,
		nNNnm: 10,
		NVWmN: MM.mMnVN,
		wVN: 43,
		Vw: 24
	}, {
		id: MM.WVMMv,
		nN: {
			src: ["img/inv-rotten-mushroom1-out.png", "img/inv-rotten-mushroom1-in.png", "img/inv-rotten-mushroom1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rotten Mushroom", "Go on, have a bite!"),
		stack: 20,
		WV: Ww.WVMMv,
		wait: 5,
		wVN: 44,
		Vw: 20
	}, {
		id: MM.VMMvN,
		nN: {
			src: ["img/inv-rotten-mushroom2-out.png", "img/inv-rotten-mushroom2-in.png", "img/inv-rotten-mushroom2-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rotten Mushroom", "Go on, have a bite!"),
		stack: 20,
		WV: Ww.VMMvN,
		wait: 5,
		wVN: 45,
		Vw: 20
	}, {
		id: MM.mMnVN,
		nN: {
			src: ["img/inv-rotten-mushroom3-out.png", "img/inv-rotten-mushroom3-in.png", "img/inv-rotten-mushroom3-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rotten Mushroom", "Go on, have a bite!"),
		stack: 20,
		WV: Ww.mMnVN,
		wait: 5,
		wVN: 46,
		Vw: 20
	}, {
		id: MM.mnWnw,
		nN: {
			src: ["img/inv-lapadoine-out.png", "img/inv-lapadoine-in.png", "img/inv-lapadoine-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Lapadone", "You are faster a certain time.", Vm.vWwNN, [
			[MM.mMV, 1],
			[MM.vVN, 1],
			[MM.wnnwM, 1],
			[MM.mWmvn, 1]
		], 1, [
			[Mw.WMm, 45000]
		], 14),
		wVN: 47,
		stack: 5,
		WV: Ww.mnWnw,
		wait: 10
	}, {
		id: MM.MWnmM,
		nN: {
			src: ["img/inv-lapabot-out.png", "img/inv-lapabot-in.png", "img/inv-lapabot-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("LapaBot", "Repair your base for you", Vm.MvN, [
			[MM.Nvm, 6],
			[MM.mnN, 1],
			[MM.nWv, 1],
			[MM.wNw, 1]
		], 1, [
			[Mw.NnM, 100000]
		], 8),
		stack: 5,
		WV: Ww.MWnmM,
		vnNVV: Ww.NwV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [30, 30, 30, 30],
		height: [30, 30, 30, 30],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [35, 35, 35, 35],
		wvN: [35, 35, 35, 35],
		wmm: {
			src: "img/clear-blue-lapabot.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-lapabot.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.vnmvV,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.WwNmW,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/lapabot0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/lapabot1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/lapabot2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/lapabot3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/lapabot4.png",
			image: {
				v: 0
			}
		}],
		WwNnV: {
			src: "img/day-lapabot-builder.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 68,
		NVN: ((5 * 8) * 60) * 1000,
		Nv: 250,
		Vw: 0,
		wVWwM: 315360000000,
		MvNmm: Vww.MWnmM,
		VNvvM: 20000,
		VNNwM: 4,
		mMvWW: 1
	}, {
		id: MM.nWv,
		nN: {
			src: ["img/inv-small-wire-out.png", "img/inv-small-wire-in.png", "img/inv-small-wire-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Small Wire", "Find it on TV's and computers in abandonned houses"),
		stack: 255,
		WV: Ww.nWv,
		Vw: 40
	}, {
		id: MM.mVwVm,
		nN: {
			src: ["img/inv-pumpkin-out.png", "img/inv-pumpkin-in.png", "img/inv-pumpkin-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Pumpkin", "Eat it or craft a pumpkin ghoul"),
		stack: 20,
		WV: Ww.mVwVm,
		wait: 5,
		nNNnm: 10,
		NVWmN: MM.MwmnN,
		wVN: 48,
		Vw: 24
	}, {
		id: MM.MwmnN,
		nN: {
			src: ["img/inv-rotten-pumpkin-out.png", "img/inv-rotten-pumpkin-in.png", "img/inv-rotten-pumpkin-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rotten Pumpkin", "You should not click"),
		stack: 20,
		WV: Ww.MwmnN,
		wait: 5,
		wVN: 49,
		Vw: 20
	}, {
		id: MM.WNnwn,
		nN: {
			src: ["img/inv-ghoul5-out.png", "img/inv-ghoul5-in.png", "img/inv-ghoul5-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Ghoul Seed", "Plant your pumpkin pet", -1, [
			[MM.mVwVm, 1],
			[MM.mWmvn, 1]
		], 1, [
			[Mw.mww, 30000],
			[Mw.WnM, 20000]
		], 99),
		stack: 40,
		WV: Ww.WNnwn,
		vnNVV: Ww.NwV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [30, 30, 30, 30],
		height: [30, 30, 30, 30],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [35, 35, 35, 35],
		wvN: [35, 35, 35, 35],
		wmm: {
			src: "img/clear-blue-root.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-root.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.vnmvV,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.MMnWv,
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: [{
			src: "img/day-root0-ghoul.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-root1-ghoul.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-root2-ghoul.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-root3-ghoul.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-root4-ghoul.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.VNn,
		mVM: 68,
		NVN: ((5 * 8) * 60) * 1000,
		Nv: 250,
		Vw: 0,
		wVWwM: 120000,
		MvNmm: Vww.NwNvw,
		VNvvM: 15000,
		VNNwM: 3,
		mMvWW: 0
	}, {
		id: MM.MWn,
		nN: {
			src: ["img/inv-extractor-out.png", "img/inv-extractor-in.png", "img/inv-extractor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Extractor", "Allows you to extract minerals from the ground", Vm.MvN, [
			[MM.wNw, 2],
			[MM.Nvm, 10],
			[MM.MNN, 2],
			[MM.nWv, 2],
			[MM.mnN, 1]
		], 1, [
			[Mw.NnM, 100000]
		], 12),
		wVN: 21,
		mWm: 740000,
		VMw: 0,
		z: 1,
		VMV: Mw.MWn,
		stack: 255,
		WV: Ww.MWn,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-extractor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-extractor.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.vWnvW,
		VVw: 16,
		wMn: {
			src: "img/e-extractor.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-extractor.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-extractor-rotate.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-extractor-off.png",
			image: {
				v: 0
			}
		}],
		mnwVw: [
			[0, 0],
			[0, 0],
			[0, 0],
			[0, 0]
		],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 500,
		Vw: 0
	}, {
		id: MM.WmwvW,
		nN: {
			src: ["img/inv-antidote-out.png", "img/inv-antidote-in.png", "img/inv-antidote-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Antidote", "Remove the withdrawal effects (pink skin)", Vm.vWwNN, [
			[MM.mMV, 1],
			[MM.vVN, 1],
			[MM.wnnwM, 1],
			[MM.VVmMm, 1]
		], 1, [
			[Mw.WMm, 45000]
		], 14),
		wVN: 50,
		stack: 5,
		WV: Ww.WmwvW,
		wait: 10
	}, {
		id: MM.VVmMm,
		nN: {
			src: ["img/inv-antidote-flower-out.png", "img/inv-antidote-flower-in.png", "img/inv-antidote-flower-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rare Flower", "Use it to make an antidote"),
		stack: 5,
		WV: Ww.VVmMm,
		Vw: 400
	}, {
		id: MM.MNWMm,
		nN: {
			src: ["img/inv-seed-tree-out.png", "img/inv-seed-tree-in.png", "img/inv-seed-tree-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tree Seed", "Plant your forest", Vm.WmNVv, [
			[MM.nvVVn, 1]
		], 5, [
			[Mw.mww, 60000],
			[Mw.WnM, 40000]
		]),
		stack: 100,
		WV: Ww.MNWMm,
		vnNVV: Ww.VNn,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [30, 30, 30, 30],
		height: [30, 30, 30, 30],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [35, 35, 35, 35],
		wvN: [35, 35, 35, 35],
		wmm: {
			src: "img/clear-blue-plant-tree.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-plant-tree.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.nMWWM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.WmmVn,
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vv: [{
			src: "img/day-plant-tree0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant-tree1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant-tree2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant-tree3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-plant4-orange.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.vWM,
		mVM: 68,
		NVN: ((5 * 8) * 60) * 1000,
		Nv: 150,
		Vw: 0
	}, {
		id: MM.nvVVn,
		nN: {
			src: ["img/inv-acorn-out.png", "img/inv-acorn-in.png", "img/inv-acorn-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Acorn", "Eat it or plant a tree"),
		stack: 20,
		WV: Ww.nvVVn,
		wait: 5,
		nNNnm: 3,
		NVWmN: MM.VwMvm,
		wVN: 51,
		Vw: 24
	}, {
		id: MM.VwMvm,
		nN: {
			src: ["img/inv-rotten-acorn-out.png", "img/inv-rotten-acorn-in.png", "img/inv-rotten-acorn-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Rotten Acorn", "Not really good"),
		stack: 20,
		WV: Ww.VwMvm,
		wait: 5,
		wVN: 52,
		Vw: 20
	}, {
		id: MM.nMNWM,
		nN: {
			src: ["img/inv-laser-sniper-out.png", "img/inv-laser-sniper-in.png", "img/inv-laser-sniper-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Laser Sniper", "Faster than a sniper", Vm.Vmv, [
			[MM.wNw, 8],
			[MM.Nvm, 6],
			[MM.MNN, 5],
			[MM.wWw, 3],
			[MM.mnN, 3]
		], 1, [
			[Mw.nmV, 180000]
		], 14, MM.wVNwW, 2),
		wVN: 53,
		vmV: MM.VwV,
		stack: 1,
		WV: Ww.nMNWM,
		wait: 10
	}, {
		id: MM.mVVWn,
		nN: {
			src: ["img/inv-hal-bot-out.png", "img/inv-hal-bot-in.png", "img/inv-hal-bot-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("HAL Bot", "Protect you", Vm.MvN, [
			[MM.Nvm, 6],
			[MM.mnN, 1],
			[MM.nWv, 1],
			[MM.wNw, 1]
		], 1, [
			[Mw.NnM, 100000]
		], 8),
		stack: 5,
		WV: Ww.mVVWn,
		vnNVV: Ww.NwV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [30, 30, 30, 30],
		height: [30, 30, 30, 30],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [35, 35, 35, 35],
		wvN: [35, 35, 35, 35],
		wmm: {
			src: "img/clear-blue-hal-bot.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-hal-bot.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.vnmvV,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.WwNmW,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/hal-bot0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/hal-bot1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/hal-bot2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/hal-bot3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/hal-bot4.png",
			image: {
				v: 0
			}
		}],
		WwNnV: {
			src: "img/day-hal-bot-builder.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 68,
		NVN: ((5 * 8) * 60) * 1000,
		Nv: 400,
		Vw: 0,
		wVWwM: 315360000000,
		MvNmm: Vww.mVVWn,
		VNvvM: 8000,
		VNNwM: 4,
		mMvWW: 1
	}, {
		id: MM.NMWvv,
		nN: {
			src: ["img/inv-tesla-bot-out.png", "img/inv-tesla-bot-in.png", "img/inv-tesla-bot-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Tesla Bot", "Protect you", Vm.MvN, [
			[MM.MNN, 3],
			[MM.mnN, 1],
			[MM.nWv, 3],
			[MM.wWw, 3],
			[MM.wNw, 3]
		], 1, [
			[Mw.nmV, 200000]
		], 16),
		stack: 5,
		WV: Ww.NMWvv,
		vnNVV: Ww.NwV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [30, 30, 30, 30],
		height: [30, 30, 30, 30],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [35, 35, 35, 35],
		wvN: [35, 35, 35, 35],
		wmm: {
			src: "img/clear-blue-tesla-bot.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-tesla-bot.png",
			image: {
				v: 0
			}
		},
		nNM: 0,
		mwM: 0,
		behavior: wvM.vnmvV,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.WwNmW,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/tesla-bot0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/tesla-bot1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/tesla-bot2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/tesla-bot3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/tesla-bot4.png",
			image: {
				v: 0
			}
		}],
		WwNnV: {
			src: "img/day-lapabot-builder.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 68,
		NVN: ((5 * 8) * 60) * 1000,
		Nv: 500,
		Vw: 0,
		wVWwM: 315360000000,
		MvNmm: Vww.NMWvv,
		VNvvM: 20000,
		VNNwM: 4,
		mMvWW: 1
	}, {
		id: MM.NNNVv,
		nN: {
			src: ["img/inv-wire0-out.png", "img/inv-wire0-in.png", "img/inv-wire0-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cable", "Create automatic mechanisms", Vm.wNM, [
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.NNNVv,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-wire0.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-wire0.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[1, 1, 0, 0],
			[0, 0, 1, 1],
			[1, 1, 0, 0],
			[0, 0, 1, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: {
			src: "img/day-wire0.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vmWmW,
		mVM: 40,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.MvWmW,
		nN: {
			src: ["img/inv-wire1-out.png", "img/inv-wire1-in.png", "img/inv-wire1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cable", "Create automatic mechanisms", Vm.wNM, [
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.MvWmW,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-wire1.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-wire1.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: {
			src: "img/day-wire1.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vmWmW,
		mVM: 40,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.WmwnM,
		nN: {
			src: ["img/inv-wire2-out.png", "img/inv-wire2-in.png", "img/inv-wire2-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cable", "Create automatic mechanisms", Vm.wNM, [
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.WmwnM,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-wire2.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-wire2.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[0, 1, 0, 1],
			[0, 1, 1, 0],
			[1, 0, 1, 0],
			[1, 0, 0, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: {
			src: "img/day-wire2.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vmWmW,
		mVM: 40,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.VVmNV,
		nN: {
			src: ["img/inv-wire3-out.png", "img/inv-wire3-in.png", "img/inv-wire3-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cable", "Create automatic mechanisms", Vm.wNM, [
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.VVmNV,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-wire3.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-wire3.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[0, 1, 1, 1],
			[1, 1, 1, 0],
			[1, 0, 1, 1],
			[1, 1, 0, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: {
			src: "img/day-wire3.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vmWmW,
		mVM: 40,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.NVNvv,
		nN: {
			src: ["img/inv-switch-out.png", "img/inv-switch-in.png", "img/inv-switch-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Switch", "Turn on/off mechanisms", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.NVNvv,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-switch.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-switch.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 1,
		VVV: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.wNMMW,
		VVw: 37,
		wMn: {
			src: "img/e-turnon.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-switch-off.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-switch-on.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.nnmVv,
		nN: {
			src: ["img/inv-switch-or-out.png", "img/inv-switch-or-in.png", "img/inv-switch-or-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Gate OR", "Activate only if an entry is on.", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.nnmVv,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-switch-or.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-switch-or.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 1,
		VVV: [
			[1, 0, 0, 0],
			[0, 0, 0, 1],
			[0, 1, 0, 0],
			[0, 0, 1, 0]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-switch-or.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.vwnMm,
		nN: {
			src: ["img/inv-switch-and-out.png", "img/inv-switch-and-in.png", "img/inv-switch-and-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Gate AND", "Activate only if all entries are on.", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.vwnMm,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-switch-and.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-switch-and.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 1,
		VVV: [
			[1, 0, 0, 0],
			[0, 0, 0, 1],
			[0, 1, 0, 0],
			[0, 0, 1, 0]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-switch-and.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.mVNvm,
		nN: {
			src: ["img/inv-switch-reverse-out.png", "img/inv-switch-reverse-in.png", "img/inv-switch-reverse-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Gate NOT", "Activate only if no entry is on.", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.mVNvm,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-switch-reverse.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-switch-reverse.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 1,
		VVV: [
			[1, 0, 1, 1],
			[1, 1, 0, 1],
			[0, 1, 1, 1],
			[1, 1, 1, 0]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-switch-reverse.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.NmWVn,
		nN: {
			src: ["img/inv-lamp-white-out.png", "img/inv-lamp-white-in.png", "img/inv-lamp-white-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Lamp", "Turn on when connected, damage ghoul", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.NmWVn,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-lamp.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-lamp.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1]
		],
		wVm: 0,
		nMM: 2,
		nnv: 22,
		VWV: 0,
		nv: nM.nNMWw,
		WMnNn: nM.mVWwM,
		VVw: 36,
		wMn: {
			src: "img/e-light.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-lamp-off.png",
			image: {
				v: 0
			}
		},
		wMnVW: [{
			src: "img/day-lamp-white.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-yellow.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-green.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-clear-blue.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-purple.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-pink.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-orange.png",
			image: {
				v: 0
			}
		}],
		WvmMW: [{
			src: "img/day-lamp-light-white.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-light-yellow.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-light-green.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-light-clear-blue.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-light-purple.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-light-pink.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-lamp-light-orange.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 600,
		Vw: 0
	}, {
		id: MM.wWWNW,
		nN: {
			src: ["img/inv-cable-wall-out.png", "img/inv-cable-wall-in.png", "img/inv-cable-wall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cable - Wall", "Wall that can be connected to a cable", Vm.wNM, [
			[MM.Nvm, 8],
			[MM.nWv, 1]
		], 1, [
			[Mw.wnv, 15000]
		], 7),
		stack: 255,
		WV: Ww.wWWNW,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 1,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-cable-wall.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-cable-wall.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[1, 1, 0, 0],
			[0, 0, 1, 1],
			[1, 1, 0, 0],
			[0, 0, 1, 1]
		],
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.nWWNM,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-cable-wall.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-cable-wall1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-cable-wall2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-cable-wall3.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WVM,
		mVM: 40,
		NVN: 315360000000,
		Nv: 15000,
		Vw: 0
	}, {
		id: MM.nNmvw,
		nN: {
			src: ["img/inv-automatic-door-out.png", "img/inv-automatic-door-in.png", "img/inv-automatic-door-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Automatic Door", "Connect it to a switch to open and close it.", Vm.wNM, [
			[MM.Nvm, 8],
			[MM.nWv, 2],
			[MM.mnN, 1]
		], 1, [
			[Mw.wnv, 15000]
		], 7),
		stack: 255,
		WV: Ww.nNmvw,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 1,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-automatic-door.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-automatic-door.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[0, 1, 1, 1],
			[1, 1, 1, 0],
			[1, 0, 1, 1],
			[1, 1, 0, 1]
		],
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.WmMvW,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [
			[{
				src: "img/day-automatic-door-off.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-automatic-door1-off.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-automatic-door2-off.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-automatic-door3-off.png",
				image: {
					v: 0
				}
			}],
			[{
				src: "img/day-automatic-door-on.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-automatic-door1-on.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-automatic-door2-on.png",
				image: {
					v: 0
				}
			}, {
				src: "img/day-automatic-door3-on.png",
				image: {
					v: 0
				}
			}]
		],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 15000,
		Vw: 0
	}, {
		id: MM.mMvnn,
		nN: {
			src: ["img/inv-platform-out.png", "img/inv-platform-in.png", "img/inv-platform-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Platform", "Weight detector", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.mMvnn,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-platform-off.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-platform-off.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 1,
		VVV: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.wMnnM,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-platform-off.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.nNWNV,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.wwNMn,
		nN: {
			src: ["img/inv-stone-cave-out.png", "img/inv-stone-cave-in.png", "img/inv-stone-cave-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Stone Cave", "Build mountains.", -1, [
			[MM.mvM, 140]
		], 1, [
			[Mw.nnw, 30000]
		], 99),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.wwNMn,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-stone-cave.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-stone-cave.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.wwNMn,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.VWm,
		wnMVm: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		MwM: [{
			src: "img/day-stone-cave-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.Vvmww,
		mmM: WN.NNM,
		Vv: [{
			src: "img/day-stone-cave0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-stone-cave46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.mvM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 300,
		Vw: 0
	}, {
		id: MM.mMVmM,
		nN: {
			src: ["img/inv-bunker-wall-out.png", "img/inv-bunker-wall-in.png", "img/inv-bunker-wall-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Bunker Wall", "Good old memory of the wasteland.", -1, [
			[MM.mvM, 150],
			[MM.Nvm, 12]
		], 1, [
			[Mw.nnw, 30000]
		], 99),
		wVN: 21,
		mWm: -1,
		VMw: 1,
		z: 1,
		stack: 255,
		WV: Ww.mMVmM,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-bunker-wall.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-bunker-wall.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.wwNMn,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.VWm,
		wnMVm: [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		MwM: [{
			src: "img/day-bunker-wall-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-bunker-wall0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-bunker-wall46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WWN,
		mVM: 80,
		NVN: 315360000000,
		Nv: 10000,
		Vw: 0
	}, {
		id: MM.wnwmw,
		nN: {
			src: ["img/inv-mustard-floor-out.png", "img/inv-mustard-floor-in.png", "img/inv-mustard-floor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Golden Floor", "Players can't spawn on it", Vm.vvV, [
			[MM.mmm, 2]
		], 2, [
			[Mw.nnw, 15000]
		]),
		stack: 255,
		WV: Ww.wnwmw,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 2,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-floor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-floor.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.wnwmw,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VVMMv,
		MwM: [{
			src: "img/day-mustard-floor-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NnW,
		mmM: WN.MVV,
		Vv: [{
			src: "img/day-mustard-floor-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-mustard-floor-46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.MWnwn,
		mVM: 80,
		NVN: 315360000000,
		Nv: 3000,
		Vw: 0
	}, {
		id: MM.NVnwW,
		nN: {
			src: ["img/inv-red-floor-out.png", "img/inv-red-floor-in.png", "img/inv-red-floor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Red floor", "Players can't spawn on it", Vm.vvV, [
			[MM.mmm, 2]
		], 2, [
			[Mw.nnw, 15000]
		]),
		stack: 255,
		WV: Ww.NVnwW,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: 2,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/day-clear-blue-stone-floor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/day-redprint-stone-floor.png",
			image: {
				v: 0
			}
		},
		VWm: 1,
		nmnvN: MM.NVnwW,
		nNw: 0,
		nNM: 0,
		vmN: 1,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VVMMv,
		MwM: [{
			src: "img/day-red-floor-broken0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-broken1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-broken2.png",
			image: {
				v: 0
			}
		}],
		NWv: WN.NnW,
		mmM: WN.MVV,
		Vv: [{
			src: "img/day-red-floor-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-3.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-4.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-5.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-6.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-7.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-8.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-9.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-10.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-11.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-12.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-13.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-14.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-15.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-16.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-17.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-18.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-19.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-20.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-21.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-22.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-23.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-24.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-25.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-26.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-27.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-28.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-29.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-30.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-31.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-32.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-33.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-34.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-35.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-36.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-37.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-38.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-39.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-40.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-41.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-42.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-43.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-44.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-45.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-red-floor-46.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.wnnwM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 3000,
		Vw: 0
	}, {
		id: MM.wnv,
		nN: {
			src: ["img/inv-welding-machine-out.png", "img/inv-welding-machine-in.png", "img/inv-welding-machine-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Welding Machine", "Allow you to make logic gates", Vm.MvN, [
			[MM.nMm, 2],
			[MM.Nvm, 4],
			[MM.mnN, 1]
		], 1, [
			[Mw.nnw, 50000]
		]),
		wVN: 21,
		mWm: -1,
		VMw: 0,
		z: 1,
		VMV: Mw.wnv,
		stack: 255,
		WV: Ww.wnv,
		wait: 10,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-welding-machine.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-welding-machine.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.NmM,
		VVV: 0,
		wVm: 0,
		nMM: 1,
		VWV: 0,
		nv: nM.vwNNw,
		VVw: 16,
		wMn: {
			src: "img/e-welding-machine.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-welding-machine.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 500,
		Vw: 0
	}, {
		id: MM.WMnnw,
		nN: {
			src: ["img/inv-wire4-out.png", "img/inv-wire4-in.png", "img/inv-wire4-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Cable - Bridge", "Create automatic mechanisms", Vm.wNM, [
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.WMnnw,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-wire4.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-wire4.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 0,
		VVV: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: {
			src: "img/day-wire4.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.vmWmW,
		mVM: 40,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.NVVWn,
		nN: {
			src: ["img/inv-timer-out.png", "img/inv-timer-in.png", "img/inv-timer-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Gate Timer", "Emit a signal regularly.", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.NVVWn,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-timer.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-timer.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 1,
		VVV: [
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.wWnnN,
		VVw: 38,
		wMn: {
			src: "img/e-light.png",
			image: {
				v: 0
			}
		},
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: [{
			src: "img/day-timer-0.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-timer-1.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-timer-2.png",
			image: {
				v: 0
			}
		}, {
			src: "img/day-timer-3.png",
			image: {
				v: 0
			}
		}],
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.mNMWw,
		nN: {
			src: ["img/inv-xor-out.png", "img/inv-xor-in.png", "img/inv-xor-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Gate Xor", "Activate only if only one entry is on.", Vm.wNM, [
			[MM.Nvm, 1],
			[MM.nWv, 1]
		], 3, [
			[Mw.wnv, 15000]
		]),
		stack: 255,
		WV: Ww.mNMWw,
		wait: 10,
		wVN: 21,
		mWm: -1,
		VMw: -1,
		z: 0,
		NN: 1000,
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		vNv: [0, 0, 0, 0],
		vmn: [0, 0, 0, 0],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		wmm: {
			src: "img/clear-blue-xor.png",
			image: {
				v: 0
			}
		},
		wnN: {
			src: "img/redprint-xor.png",
			image: {
				v: 0
			}
		},
		VWm: 0,
		nNw: 0,
		nNM: 0,
		vmN: 0,
		mwM: 0,
		behavior: wvM.wNM,
		MnW: 1,
		VVV: [
			[1, 0, 0, 0],
			[0, 0, 0, 1],
			[0, 1, 0, 0],
			[0, 0, 1, 0]
		],
		wVm: 0,
		nMM: 0,
		VWV: 0,
		nv: nM.VmVmv,
		NWv: WN.NvV,
		mmM: WN.VnM,
		Vv: {
			src: "img/day-xor.png",
			image: {
				v: 0
			}
		},
		NvW: Wn.WVM,
		mVM: 80,
		NVN: 315360000000,
		Nv: 250,
		Vw: 0
	}, {
		id: MM.VNNnn,
		nN: {
			src: ["img/skill-eye1-out.png", "img/skill-eye1-in.png", "img/skill-eye1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Vision 1", "Improve your vision", Vm.WwW, undefined, undefined, undefined, 0),
		scale: -0.07
	}, {
		id: MM.vwVMm,
		nN: {
			src: ["img/skill-eye2-out.png", "img/skill-eye2-in.png", "img/skill-eye2-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Vision 2", "Improve your vision", Vm.WwW, undefined, undefined, undefined, 5, MM.VNNnn),
		scale: -0.14
	}, {
		id: MM.WnVmw,
		nN: {
			src: ["img/skill-eye3-out.png", "img/skill-eye3-in.png", "img/skill-eye3-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Vision 3", "Improve your vision", Vm.WwW, undefined, undefined, undefined, 7, MM.vwVMm),
		scale: -0.2
	}, {
		id: MM.Vnvmn,
		nN: {
			src: ["img/skill-builder1-out.png", "img/skill-builder1-in.png", "img/skill-builder1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Builder 1", "Multiplies some craft by two", Vm.WwW, undefined, undefined, undefined, 6, undefined, 2)
	}, {
		id: MM.mWWwv,
		nN: {
			src: ["img/skill-builder2-out.png", "img/skill-builder2-in.png", "img/skill-builder2-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Builder 2", "Repair much faster", Vm.WwW, undefined, undefined, undefined, 18, MM.Vnvmn)
	}, {
		id: MM.mnNnn,
		nN: {
			src: ["img/skill-inv1-out.png", "img/skill-inv1-in.png", "img/skill-inv1-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Inventory 1", "Add a slot in your inventory", Vm.WwW, undefined, undefined, undefined, 0),
		wwwvn: 1
	}, {
		id: MM.Nvmmm,
		nN: {
			src: ["img/skill-inv2-out.png", "img/skill-inv2-in.png", "img/skill-inv2-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Inventory 2", "Add a slot in your inventory", Vm.WwW, undefined, undefined, undefined, 5, MM.mnNnn),
		wwwvn: 1
	}, {
		id: MM.wVvvM,
		nN: {
			src: ["img/skill-inv3-out.png", "img/skill-inv3-in.png", "img/skill-inv3-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Inventory 3", "Add a slot in your bag", Vm.WwW, undefined, undefined, undefined, 7, MM.Nvmmm),
		wwwvn: 1
	}, {
		id: MM.VmNnN,
		nN: {
			src: ["img/skill-inv4-out.png", "img/skill-inv4-in.png", "img/skill-inv4-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Inventory 4", "Add two slots in your bag", Vm.WwW, undefined, undefined, undefined, 10, MM.wVvvM, 2),
		wwwvn: 2
	}, {
		id: MM.mVmNW,
		nN: {
			src: ["img/skill-inv5-out.png", "img/skill-inv5-in.png", "img/skill-inv5-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Inventory 5", "Add three slots in your bag", Vm.WwW, undefined, undefined, undefined, 12, MM.VmNnN, 3),
		wwwvn: 3
	}, {
		id: MM.VvwVW,
		nN: {
			src: ["img/skill-lightweight-out.png", "img/skill-lightweight-in.png", "img/skill-lightweight-click.png"],
			image: [{
				v: 0
			}, {
				v: 0
			}, {
				v: 0
			}]
		},
		detail: new nw("Light Weight", "Less likely to trigger traps.", Vm.WwW, undefined, undefined, undefined, 8)
	}];
	Mn = 0;
	var mW = {
		Www: Mn++,
		WWVVn: Mn++,
		vWvNw: Mn++,
		wwnVW: Mn++,
		NmMMM: Mn++,
		vWmnN: Mn++,
		vVNmm: Mn++,
		nVWnv: Mn++,
		vMWWW: Mn++,
		NWMWw: Mn++,
		VvVNV: Mn++,
		wNmwv: Mn++,
		nnn: Mn++,
		nmwvv: Mn++,
		wWv: Mn++,
		nvWnV: Mn++,
		wVmNm: Mn++,
		NMMvw: Mn++,
		nVmMN: Mn++,
		mNwMN: Mn++,
		wMNwN: Mn++,
		Wnm: Mn++,
		nMNvw: Mn++,
		MwvWW: Mn++,
		WmN: Mn++,
		MvW: Mn++,
		mMVmn: Mn++,
		MWwwv: Mn++,
		nnvVw: Mn++,
		NvNwm: Mn++,
		nMVwN: Mn++,
		wVnNM: Mn++,
		mVmVV: Mn++,
		nwMMW: Mn++,
		vVvVM: Mn++,
		VVv: Mn++,
		Mwnvn: Mn++,
		wVNNV: Mn++,
		WMvMW: Mn++,
		MVVVn: Mn++,
		mMNVv: Mn++,
		wNmvv: Mn++,
		nvNNW: Mn++,
		NnMNn: Mn++,
		MVVmM: Mn++,
		VwVnN: Mn++,
		wmnmm: Mn++,
		VnWWw: Mn++,
		NWvnW: Mn++,
		nNvNW: Mn++,
		mWvNv: Mn++,
		MWwmN: Mn++,
		MnVMW: Mn++,
		NmWvv: Mn++,
		MVMMV: Mn++,
		VwNwn: Mn++,
		wmmNV: Mn++,
		nNmmM: Mn++,
		MVNWN: Mn++
	};
	Mn = 0;
	var mmnVm = nvn[MM.wmvWW].wVm;
	mmnVm[Mn] = {
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vv: {
			src: "img/day-road0.png",
			image: {
				v: 0
			}
		},
		detail: new nw("", "", -1, [
			[MM.mvM, 100]
		]),
		Nv: 100000000,
		Vw: 0,
		NvW: Wn.mNvVM,
		mVM: 70,
		angle: Math.PI,
		NnnWw: 0,
		mNvnV: 0,
		WV: null,
		nMM: 0,
		z: 0,
		VMw: 2,
		VWV: 0,
		NVN: 315360000000
	};
	for (var mN = 0; mN < 45; mN++) {
		Mn++;
		mmnVm[Mn] = window.JSON.parse(window.JSON.stringify(mmnVm[0]));
		mmnVm[Mn].Vv.src = ("img/day-road" + Mn) + ".png";
	}
	var mw = nvn[MM.wVNmN].wVm;
	mw[mW.Www] = {
		width: [100, 100, 100, 100],
		height: [100, 100, 100, 100],
		MVN: [0, 0, 0, 0],
		wvN: [0, 0, 0, 0],
		NWv: WN.wNV,
		mmM: WN.MVV,
		Vv: {
			src: "img/day-sofa0.png",
			image: {
				v: 0
			}
		},
		detail: new nw("", "", -1, [
			[MM.vWM, 99],
			[MM.mmm, 9],
			[MM.wNm, 6]
		]),
		Nv: 450,
		Vw: 0,
		NvW: Wn.Www,
		mVM: 70,
		angle: Math.PI,
		NnnWw: 0,
		mNvnV: 0,
		WV: null,
		nMM: 1,
		z: 1,
		VMw: 0,
		VWV: 0,
		VVw: 25,
		mwM: 0,
		NwW: 0,
		VMn: 0,
		NVN: 315360000000
	};
	mw[mW.WWVVn] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.WWVVn].Vv.src = "img/day-sofa1.png";
	mw[mW.WWVVn].NvW = Wn.WWVVn;
	mw[mW.vWvNw] = window.JSON.parse(window.JSON.stringify(mw[mW.WWVVn]));
	mw[mW.vWvNw].Vv.src = "img/day-sofa2.png";
	if (window.mwmVW) {
		var MMmNW = window['Math'].acos;
		window['Math'].acos = window['Math'].asin;
		window['Math'].asin = MMmNW;
	};
	mw[mW.wwnVW] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.wwnVW].Vv.src = "img/day-sofa3.png";
	mw[mW.wwnVW].NvW = Wn.vWvNw;
	mw[mW.NmMMM] = window.JSON.parse(window.JSON.stringify(mw[mW.wwnVW]));
	mw[mW.NmMMM].Vv.src = "img/day-sofa4.png";
	mw[mW.nvNNW] = window.JSON.parse(window.JSON.stringify(mw[mW.wwnVW]));
	mw[mW.nvNNW].Vv.src = "img/day-sofa6.png";
	mw[mW.wNmvv] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.wNmvv].Vv.src = "img/day-renforced-door.png";
	mw[mW.wNmvv].NvW = Wn.WWN;
	mw[mW.wNmvv].detail = new nw("", "", -1, [
		[MM.Nvm, 40]
	]);
	mw[mW.wNmvv].Nv = 7000;
	mw[mW.nwMMW] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.nwMMW].Vv.src = "img/day-electronic-box0.png";
	mw[mW.nwMMW].NWv = WN.NvV;
	mw[mW.nwMMW].mmM = WN.VnM;
	mw[mW.nwMMW].NvW = Wn.WWN;
	mw[mW.nwMMW].detail = new nw("", "", -1, [
		[MM.VwV, 8],
		[MM.mnN, 4],
		[MM.Nvm, 4],
		[MM.nMm, 12]
	]);
	mw[mW.nwMMW].width = [100, 100, 100, 100];
	mw[mW.nwMMW].height = [100, 100, 100, 100];
	mw[mW.nwMMW].MVN = [0, 0, 0, 0];
	mw[mW.nwMMW].wvN = [0, 0, 0, 0];
	mw[mW.nwMMW].Nv = 800;
	mw[mW.vVvVM] = window.JSON.parse(window.JSON.stringify(mw[mW.nwMMW]));
	mw[mW.vVvVM].Vv.src = "img/day-electronic-box1.png";
	mw[mW.vVvVM].width = [120, 120, 120, 120];
	mw[mW.vVvVM].height = [120, 120, 120, 120];
	mw[mW.vVvVM].MVN = [-10, -10, -10, -10];
	mw[mW.vVvVM].wvN = [-10, -10, -10, -10];
	mw[mW.vVvVM].detail = new nw("", "", -1, [
		[MM.VwV, 16],
		[MM.mnN, 16],
		[MM.wWw, 8],
		[MM.Nvm, 16]
	]);
	mw[mW.vVvVM].Nv = 1400;
	mw[mW.vWmnN] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.vWmnN].Vv.src = "img/day-bed0.png";
	mw[mW.vWmnN].NvW = Wn.vWmnN;
	mw[mW.vWmnN].detail = new nw("", "", -1, [
		[MM.vWM, 200],
		[MM.mmm, 20]
	]);
	mw[mW.vVNmm] = window.JSON.parse(window.JSON.stringify(mw[mW.vWmnN]));
	mw[mW.vVNmm].Vv.src = "img/day-bed1.png";
	mw[mW.vVNmm].NvW = Wn.vVNmm;
	mw[mW.NWvnW] = window.JSON.parse(window.JSON.stringify(mw[mW.vWmnN]));
	mw[mW.NWvnW].Vv.src = "img/day-bed2.png";
	mw[mW.NWvnW].NvW = Wn.wWMWW;
	mw[mW.NWvnW].detail = new nw("", "", -1, [
		[MM.Nvm, 12],
		[MM.mmm, 20],
		[MM.wMm, 12]
	]);
	mw[mW.nVWnv] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.nVWnv].Vv.src = "img/day-table0.png";
	mw[mW.nVWnv].NWv = WN.mmV;
	mw[mW.nVWnv].mmM = WN.Vwv;
	mw[mW.nVWnv].NvW = Wn.vWM;
	mw[mW.nVWnv].detail = new nw("", "", -1, [
		[MM.vWM, 200]
	]);
	mw[mW.wmnmm] = window.JSON.parse(window.JSON.stringify(mw[mW.nVWnv]));
	mw[mW.wmnmm].Vv.src = "img/day-table1.png";
	mw[mW.wmnmm].width = [100, 290, 100, 280];
	mw[mW.wmnmm].height = [280, 100, 280, 100];
	mw[mW.wmnmm].nmNNN = [-1, 0, -1, 0];
	mw[mW.wmnmm].wvMVw = [0, -1, 0, -1];
	mw[mW.wmnmm].MVN = [0, -90, 0, -90];
	mw[mW.wmnmm].wvN = [-90, 0, -90, 0];
	mw[mW.wmmNV] = window.JSON.parse(window.JSON.stringify(mw[mW.nVWnv]));
	mw[mW.wmmNV].Vv.src = "img/day-table2.png";
	mw[mW.wmmNV].NWv = WN.NvV;
	mw[mW.wmmNV].mmM = WN.VnM;
	mw[mW.wmmNV].NvW = Wn.WWN;
	mw[mW.wmmNV].detail = new nw("", "", -1, [
		[MM.Nvm, 8]
	]);
	mw[mW.vMWWW] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.vMWWW].Vv.src = "img/day-tv0.png";
	mw[mW.vMWWW].NWv = WN.NvV;
	mw[mW.vMWWW].mmM = WN.VnM;
	mw[mW.vMWWW].NvW = Wn.nVmMN;
	mw[mW.vMWWW].detail = new nw("", "", -1, [
		[MM.mnN, 4],
		[MM.Nvm, 16],
		[MM.nWv, 4],
		[MM.nMm, 12]
	]);
	mw[mW.NWMWw] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.NWMWw].Vv.src = "img/day-computer0.png";
	mw[mW.NWMWw].NWv = WN.NvV;
	mw[mW.NWMWw].mmM = WN.VnM;
	mw[mW.NWMWw].NvW = Wn.WVM;
	mw[mW.NWMWw].detail = new nw("", "", -1, [
		[MM.nWv, 4],
		[MM.Nvm, 16],
		[MM.nMm, 12],
		[MM.mnN, 4]
	]);
	mw[mW.VvVNV] = window.JSON.parse(window.JSON.stringify(mw[mW.NWMWw]));
	mw[mW.VvVNV].Vv.src = "img/day-chair0.png";
	mw[mW.VvVNV].detail = new nw("", "", -1, [
		[MM.mmm, 8],
		[MM.Nvm, 8]
	]);
	mw[mW.MnVMW] = window.JSON.parse(window.JSON.stringify(mw[mW.NWMWw]));
	mw[mW.MnVMW].Vv.src = "img/day-chair1.png";
	mw[mW.MnVMW].detail = new nw("", "", -1, [
		[MM.mmm, 8],
		[MM.Nvm, 8]
	]);
	mw[mW.NmWvv] = window.JSON.parse(window.JSON.stringify(mw[mW.NWMWw]));
	mw[mW.NmWvv].Vv.src = "img/day-chair2.png";
	mw[mW.NmWvv].detail = new nw("", "", -1, [
		[MM.mmm, 8],
		[MM.Nvm, 8]
	]);
	mw[mW.wNmwv] = window.JSON.parse(window.JSON.stringify(mw[mW.Www]));
	mw[mW.wNmwv].Vv.src = "img/day-washbasin0.png";
	mw[mW.wNmwv].NWv = WN.mmV;
	mw[mW.wNmwv].mmM = WN.Vwv;
	mw[mW.wNmwv].NvW = Wn.wnvvW;
	mw[mW.wNmwv].detail = new nw("", "", -1, [
		[MM.vWM, 150],
		[MM.Nvm, 8]
	]);
	mw[mW.nnvVw] = window.JSON.parse(window.JSON.stringify(mw[mW.wNmwv]));
	mw[mW.nnvVw].Vv.src = "img/day-pharma0.png";
	mw[mW.nnvVw].detail = new nw("", "", -1, [
		[MM.Nvm, 8],
		[MM.mvM, 60]
	]);
	mw[mW.nnvVw].NWv = WN.Vvmww;
	mw[mW.nnvVw].mmM = WN.NNM;
	mw[mW.nnvVw].NvW = Wn.vwVVv;
	mw[mW.nnvVw].NnnWw = 1;
	mw[mW.nnvVw].WV = [
		[MM.mWMMN, 1, 0.1],
		[MM.vmnnm, 1, 0.03],
		[MM.WMNWN, 1, 0.05],
		[MM.vVN, 2, 0.2],
		[MM.mMV, 1, 0.1]
	];
	mw[mW.VwNwn] = window.JSON.parse(window.JSON.stringify(mw[mW.wNmwv]));
	mw[mW.VwNwn].Vv.src = "img/day-shower0.png";
	mw[mW.VwNwn].detail = new nw("", "", -1, [
		[MM.Nvm, 8],
		[MM.mvM, 60]
	]);
	mw[mW.VwNwn].NWv = WN.Vvmww;
	mw[mW.VwNwn].mmM = WN.NNM;
	mw[mW.VwNwn].NvW = Wn.vwVVv;
	mw[mW.VwNwn].width = [70, 100, 70, 100];
	mw[mW.VwNwn].height = [100, 70, 100, 70];
	mw[mW.VwNwn].MVN = [0, 0, 30, 0];
	mw[mW.VwNwn].wvN = [0, 0, 0, 30];
	mw[mW.nnn] = window.JSON.parse(window.JSON.stringify(mw[mW.wNmwv]));
	mw[mW.nnn].Vv.src = "img/day-furniture0.png";
	mw[mW.nnn].width = [50, 100, 50, 100];
	mw[mW.nnn].height = [100, 50, 100, 50];
	mw[mW.nnn].MVN = [0, 0, 50, 0];
	mw[mW.nnn].wvN = [0, 0, 0, 50];
	mw[mW.nnn].detail = new nw("", "", -1, [
		[MM.vWM, 200]
	]);
	mw[mW.nnn].NnnWw = 1;
	mw[mW.nnn].WV = [
		[MM.WnW, 1, 0.004],
		[MM.nNMmW, 1, 0.004],
		[MM.VvV, 1, 0.005],
		[MM.WMw, 30, 0.02],
		[MM.mWMMN, 1, 0.05],
		[MM.MVmNM, 1, 0.08],
		[MM.NnWwV, 40, 0.1],
		[MM.MvNwM, 2, 0.1],
		[MM.VNmwv, 1, 0.01],
		[MM.VwV, 4, 0.05],
		[MM.nMm, 1, 0.2],
		[MM.wNm, 2, 0.1]
	];
	mw[mW.nmwvv] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.nmwvv].Vv.src = "img/day-furniture1.png";
	mw[mW.nmwvv].width = [70, 100, 70, 100];
	mw[mW.nmwvv].height = [100, 70, 100, 70];
	mw[mW.nmwvv].MVN = [0, 0, 30, 0];
	mw[mW.nmwvv].wvN = [0, 0, 0, 30];
	mw[mW.wWv] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.wWv].Vv.src = "img/day-furniture2.png";
	mw[mW.wWv].width = [70, 70, 70, 70];
	mw[mW.wWv].height = [70, 70, 70, 70];
	mw[mW.wWv].MVN = [15, 15, 15, 15];
	mw[mW.wWv].wvN = [15, 15, 15, 15];
	mw[mW.wWv].detail = new nw("", "", -1, [
		[MM.vWM, 100]
	]);
	mw[mW.nvWnV] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.nvWnV].Vv.src = "img/day-furniture3.png";
	mw[mW.nNvNW] = window.JSON.parse(window.JSON.stringify(mw[mW.nmwvv]));
	mw[mW.nNvNW].Vv.src = "img/day-furniture4.png";
	mw[mW.nNvNW].NWv = WN.NvV;
	mw[mW.nNvNW].mmM = WN.VnM;
	mw[mW.nNvNW].NvW = Wn.wWMWW;
	mw[mW.nNvNW].WV = [
		[MM.WnW, 1, 0.004],
		[MM.nNMmW, 1, 0.004],
		[MM.VvV, 1, 0.005],
		[MM.WMw, 30, 0.02],
		[MM.mWMMN, 1, 0.05],
		[MM.nWv, 4, 0.1],
		[MM.NmWVn, 1, 0.08],
		[MM.mMvnn, 1, 0.08],
		[MM.VNmwv, 1, 0.01],
		[MM.VwV, 8, 0.05],
		[MM.nMm, 2, 0.2],
		[MM.wNm, 2, 0.1]
	];
	mw[mW.mWvNv] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.mWvNv].Vv.src = "img/day-furniture5.png";
	mw[mW.mWvNv].NWv = WN.NvV;
	mw[mW.mWvNv].mmM = WN.VnM;
	mw[mW.mWvNv].NvW = Wn.wWMWW;
	mw[mW.mWvNv].WV = window.JSON.parse(window.JSON.stringify(mw[mW.nNvNW].WV));
	mw[mW.MWwmN] = window.JSON.parse(window.JSON.stringify(mw[mW.mWvNv]));
	mw[mW.MWwmN].Vv.src = "img/day-furniture6.png";
	mw[mW.wVmNm] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.wVmNm].NWv = WN.wNV;
	mw[mW.wVmNm].mmM = WN.MVV;
	mw[mW.wVmNm].Vv.src = "img/day-carton-box0.png";
	mw[mW.wVmNm].detail = new nw("", "", -1, []);
	mw[mW.wVmNm].NnnWw = 1;
	mw[mW.wVmNm].WV = [
		[MM.mVMWM, 1, 0.1],
		[MM.nMm, 2, 0.2],
		[MM.WnW, 1, 0.003],
		[MM.nNMmW, 1, 0.003],
		[MM.nwwWw, 1, 0.01],
		[MM.VvV, 1, 0.005],
		[MM.WMw, 30, 0.02],
		[MM.mWMMN, 1, 0.08],
		[MM.MVmNM, 1, 0.1],
		[MM.NnWwV, 40, 0.02],
		[MM.MvNwM, 2, 0.1],
		[MM.VwV, 4, 0.08],
		[MM.mnN, 1, 0.1]
	];
	mw[mW.NMMvw] = window.JSON.parse(window.JSON.stringify(mw[mW.wVmNm]));
	mw[mW.NMMvw].Vv.src = "img/day-carton-box1.png";
	mw[mW.NnMNn] = window.JSON.parse(window.JSON.stringify(mw[mW.wVmNm]));
	mw[mW.NnMNn].Vv.src = "img/day-gold-chair0.png";
	mw[mW.NnMNn].detail = new nw("", "", -1, [
		[MM.vWM, 40]
	]);
	mw[mW.NnMNn].NnnWw = 0;
	mw[mW.NnMNn].NvW = Wn.MWnwn;
	mw[mW.MVVmM] = window.JSON.parse(window.JSON.stringify(mw[mW.NnMNn]));
	mw[mW.MVVmM].Vv.src = "img/day-green-chair0.png";
	mw[mW.MVVmM].NvW = Wn.nnmWw;
	mw[mW.VwVnN] = window.JSON.parse(window.JSON.stringify(mw[mW.NnMNn]));
	mw[mW.VwVnN].Vv.src = "img/day-wood-chair0.png";
	mw[mW.VwVnN].NWv = WN.mmV;
	mw[mW.VwVnN].mmM = WN.Vwv;
	mw[mW.VwVnN].NvW = Wn.wnvvW;
	mw[mW.MwvWW] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.MwvWW].Vv.src = "img/day-plot0.png";
	mw[mW.MwvWW].NvW = Wn.mvmVw;
	mw[mW.MwvWW].nMM = 2;
	mw[mW.MwvWW].nnv = 30;
	mw[mW.MwvWW].detail = new nw("", "", -1, [
		[MM.mvM, 40],
		[MM.vWM, 40]
	]);
	mw[mW.MwvWW].NnnWw = 0;
	mw[mW.nNmmM] = window.JSON.parse(window.JSON.stringify(mw[mW.MwvWW]));
	mw[mW.nNmmM].NWv = WN.NvV;
	mw[mW.nNmmM].mmM = WN.VnM;
	mw[mW.nNmmM].Vv.src = "img/day-blood-transfusion.png";
	mw[mW.nNmmM].NvW = Wn.wWMWW;
	mw[mW.nNmmM].detail = new nw("", "", -1, [
		[MM.nMm, 2],
		[MM.Nvm, 1],
		[MM.mMV, 1]
	]);
	mw[mW.WmN] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.WmN].Vv.src = "img/day-barel0.png";
	mw[mW.WmN].NWv = WN.NvV;
	mw[mW.WmN].mmM = WN.NnW;
	mw[mW.WmN].NvW = Wn.vmWmW;
	mw[mW.WmN].mwM = 1;
	mw[mW.WmN].NwW = 250;
	mw[mW.WmN].VMn = 5000;
	mw[mW.WmN].nMM = 2;
	mw[mW.WmN].nnv = 30;
	mw[mW.WmN].detail = new nw("", "", -1, [
		[MM.Nvm, 8]
	]);
	mw[mW.WmN].NnnWw = 1;
	mw[mW.WmN].Nv = 100;
	mw[mW.WmN].WV = [
		[MM.MVwnm, 1, 0.2]
	];
	mw[mW.MvW] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.MvW].Vv.src = "img/day-barel1.png";
	mw[mW.MvW].NWv = WN.NvV;
	mw[mW.MvW].mmM = WN.NnW;
	mw[mW.MvW].NvW = Wn.mMVwW;
	mw[mW.MvW].mwM = 1;
	mw[mW.MvW].NwW = 300;
	mw[mW.MvW].VMn = 10000;
	mw[mW.MvW].nMM = 2;
	mw[mW.MvW].nnv = 30;
	mw[mW.MvW].Nv = 300;
	mw[mW.MvW].detail = new nw("", "", -1, [
		[MM.nwv, 8],
		[MM.Nvm, 8]
	]);
	mw[mW.MvW].NnnWw = 0;
	mw[mW.MvW].VWV = WvvwM;
	mw[mW.mMVmn] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.mMVmn].Vv.src = "img/day-garbage-bag0.png";
	mw[mW.mMVmn].NWv = WN.wNV;
	mw[mW.mMVmn].mmM = WN.MVV;
	mw[mW.mMVmn].NvW = Wn.mMVmn;
	mw[mW.mMVmn].nMM = 2;
	mw[mW.mMVmn].nnv = 30;
	mw[mW.mMVmn].detail = new nw("", "", -1, []);
	mw[mW.mMVmn].WV = [
		[MM.mVMWM, 1, 0.08],
		[MM.mMV, 1, 0.05],
		[MM.nNMmW, 1, 0.02],
		[MM.VvV, 1, 0.01],
		[MM.WMw, 30, 0.02],
		[MM.NnWwV, 40, 0.1],
		[MM.MvNwM, 2, 0.1],
		[MM.MVmNM, 1, 0.1],
		[MM.VmnwW, 1, 0.15],
		[MM.VVvVm, 1, 0.15],
		[MM.WVnvv, 1, 0.15],
		[MM.nMm, 3, 0.4]
	];
	mw[mW.mNwMN] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.mNwMN].Vv.src = "img/day-fridge0.png";
	mw[mW.mNwMN].NWv = WN.NvV;
	mw[mW.mNwMN].mmM = WN.VnM;
	mw[mW.mNwMN].NvW = Wn.WVM;
	mw[mW.mNwMN].detail = new nw("", "", -1, [
		[MM.Nvm, 16],
		[MM.nwM, 16]
	]);
	mw[mW.mNwMN].mNvnV = 1;
	mw[mW.mNwMN].WV = [
		[MM.VNmvV, 1, 0.1],
		[MM.WwvnN, 1, 0.1],
		[MM.MVnNM, 1, 0.01],
		[MM.VmnwW, 1, 0.15],
		[MM.VVvVm, 1, 0.15],
		[MM.WVnvv, 1, 0.15],
		[MM.WWvvM, 1, 0.01]
	];
	mw[mW.wMNwN] = window.JSON.parse(window.JSON.stringify(mw[mW.mNwMN]));
	mw[mW.wMNwN].Vv.src = "img/day-fridge1.png";
	mw[mW.wMNwN].NvW = Wn.nNWNV;
	mw[mW.MVVVn] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.MVVVn].Vv.src = "img/day-vending-machine0.png";
	mw[mW.MVVVn].NWv = WN.NvV;
	mw[mW.MVVVn].mmM = WN.VnM;
	mw[mW.MVVVn].NvW = Wn.nwWwW;
	mw[mW.MVVVn].detail = new nw("", "", -1, [
		[MM.Nvm, 16],
		[MM.nwM, 16]
	]);
	mw[mW.MVVVn].mNvnV = 1;
	mw[mW.MVVVn].WV = [
		[MM.VNmvV, 1, 0.04],
		[MM.MVnNM, 1, 0.04]
	];
	mw[mW.MVMMV] = window.JSON.parse(window.JSON.stringify(mw[mW.MVVVn]));
	mw[mW.MVMMV].Vv.src = "img/day-distributor0.png";
	mw[mW.MVMMV].NvW = Wn.wWMWW;
	mw[mW.MVMMV].detail = new nw("", "", -1, [
		[MM.Nvm, 16],
		[MM.nwM, 16]
	]);
	mw[mW.MVMMV].mNvnV = 1;
	mw[mW.MVMMV].WV = [
		[MM.VNmvV, 1, 0.04],
		[MM.MVnNM, 1, 0.04],
		[MM.WwvnN, 1, 0.04]
	];
	mw[mW.mMNVv] = window.JSON.parse(window.JSON.stringify(mw[mW.nmwvv]));
	mw[mW.mMNVv].Vv.src = "img/day-cash-machine0.png";
	mw[mW.mMNVv].NWv = WN.NvV;
	mw[mW.mMNVv].mmM = WN.VnM;
	mw[mW.mMNVv].NvW = Wn.wWMWW;
	mw[mW.mMNVv].detail = new nw("", "", -1, [
		[MM.Nvm, 16],
		[MM.mnN, 4]
	]);
	mw[mW.mMNVv].WV = [
		[MM.nMm, 1, 0.05]
	];
	mw[mW.MWwwv] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.MWwwv].Vv.src = "img/day-cupboard0.png";
	mw[mW.MWwwv].NvW = Wn.vWM;
	mw[mW.VVv] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.VVv].NWv = WN.NvV;
	mw[mW.VVv].mmM = WN.VnM;
	mw[mW.VVv].Vv.src = "img/day-electronic-box2.png";
	mw[mW.VVv].NvW = Wn.WWN;
	mw[mW.VVv].detail = new nw("", "", -1, [
		[MM.Nvm, 16]
	]);
	mw[mW.VVv].width = [70, 70, 70, 70];
	mw[mW.VVv].height = [70, 70, 70, 70];
	mw[mW.VVv].MVN = [15, 15, 15, 15];
	mw[mW.VVv].wvN = [15, 15, 15, 15];
	mw[mW.VVv].WV = [
		[MM.mnN, 2, 0.1],
		[MM.nMm, 2, 0.1],
		[MM.VwV, 20, 0.05],
		[MM.mMV, 2, 0.1],
		[MM.vVN, 4, 0.1],
		[MM.WMNWN, 1, 0.03],
		[MM.wNw, 1, 0.01]
	];
	mw[mW.Mwnvn] = window.JSON.parse(window.JSON.stringify(mw[mW.VVv]));
	mw[mW.Mwnvn].Vv.src = "img/day-electronic-box3.png";
	mw[mW.Mwnvn].detail = new nw("", "", -1, [
		[MM.Nvm, 16],
		[MM.mnN, 4]
	]);
	mw[mW.Mwnvn].WV = [
		[MM.mnN, 2, 0.1],
		[MM.nMm, 4, 0.1],
		[MM.VwV, 20, 0.05],
		[MM.wWw, 1, 0.03],
		[MM.MNN, 5, 0.01],
		[MM.WMNWN, 2, 0.1],
		[MM.mMV, 3, 0.1],
		[MM.vVN, 5, 0.1],
		[MM.wVNwW, 1, 0.005],
		[MM.wNw, 2, 0.05]
	];
	mw[mW.MVNWN] = window.JSON.parse(window.JSON.stringify(mw[mW.Mwnvn]));
	mw[mW.MVNWN].Vv.src = "img/day-energy-box0.png";
	mw[mW.MVNWN].NvW = Wn.nnmWw;
	mw[mW.MVNWN].detail = new nw("", "", -1, [
		[MM.Nvm, 16],
		[MM.mnN, 4]
	]);
	mw[mW.MVNWN].WV = [
		[MM.mnN, 2, 0.1],
		[MM.nMm, 4, 0.1],
		[MM.VwV, 20, 0.05],
		[MM.nWv, 8, 0.03],
		[MM.MNN, 5, 0.01],
		[MM.WMNWN, 2, 0.1],
		[MM.mMV, 3, 0.1],
		[MM.vVN, 5, 0.1],
		[MM.wVNwW, 1, 0.005],
		[MM.wNw, 2, 0.05]
	];
	mw[mW.wVNNV] = window.JSON.parse(window.JSON.stringify(mw[mW.VVv]));
	mw[mW.wVNNV].Vv.src = "img/day-electronic-box4.png";
	mw[mW.wVNNV].WV = [
		[MM.mnN, 2, 0.1],
		[MM.nMm, 4, 0.1],
		[MM.VwV, 20, 0.05],
		[MM.wWw, 1, 0.03],
		[MM.MNN, 2, 0.01],
		[MM.WMNWN, 1, 0.1],
		[MM.mMV, 3, 0.1],
		[MM.vVN, 5, 0.1],
		[MM.wNw, 1, 0.01],
		[MM.VnmMw, 1, 0.008]
	];
	mw[mW.WMvMW] = window.JSON.parse(window.JSON.stringify(mw[mW.VVv]));
	mw[mW.WMvMW].Vv.src = "img/day-electronic-box5.png";
	mw[mW.NvNwm] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.NvNwm].Vv.src = "img/day-ammo-box.png";
	mw[mW.NvNwm].NvW = Wn.wnvvW;
	mw[mW.NvNwm].WV = [
		[MM.vvnvW, 1, 0.001],
		[MM.vNwVv, 1, 0.001],
		[MM.vwMWN, 1, 0.001],
		[MM.NMnnV, 1, 0.001],
		[MM.vvWwv, 1, 0.001],
		[MM.vNnNn, 1, 0.001],
		[MM.vWVVn, 50, 0.01],
		[MM.VwV, 20, 0.01],
		[MM.wVNwW, 1, 0.0008],
		[MM.VnmMw, 2, 0.005],
		[MM.NwvMV, 1, 0.001],
		[MM.WwnNN, 1, 0.001],
		[MM.nVwWW, 3, 0.005],
		[MM.WMNnw, 30, 0.01],
		[MM.VvV, 1, 0.003],
		[MM.WMw, 50, 0.01],
		[MM.NVvnn, 1, 0.003],
		[MM.mwvnv, 50, 0.01],
		[MM.WvM, 1, 0.005],
		[MM.vvNww, 1, 0.005],
		[MM.Mwwnm, 1, 0.002],
		[MM.Wnwmw, 1, 0.001],
		[MM.vWNMm, 1, 0.005],
		[MM.vnvVM, 1, 0.002],
		[MM.NNVnW, 1, 0.001],
		[MM.vmnWV, 1, 0.002],
		[MM.wNNMN, 1, 0.001],
		[MM.mnWnw, 1, 0.0005],
		[MM.nMMwV, 1, 0.0005]
	];
	mw[mW.wVnNM] = window.JSON.parse(window.JSON.stringify(mw[mW.NvNwm]));
	mw[mW.wVnNM].NWv = WN.NvV;
	mw[mW.wVnNM].mmM = WN.VnM;
	mw[mW.wVnNM].Vv.src = "img/day-ammo-locker1.png";
	mw[mW.wVnNM].NvW = Wn.wWMWW;
	mw[mW.wVnNM].detail = new nw("", "", -1, [
		[MM.Nvm, 32],
		[MM.nwM, 12]
	]);
	mw[mW.mVmVV] = window.JSON.parse(window.JSON.stringify(mw[mW.NvNwm]));
	mw[mW.mVmVV].NWv = WN.NvV;
	mw[mW.mVmVV].mmM = WN.VnM;
	mw[mW.mVmVV].Vv.src = "img/day-ammo-locker2.png";
	mw[mW.mVmVV].NvW = Wn.wWMWW;
	mw[mW.mVmVV].detail = new nw("", "", -1, [
		[MM.Nvm, 32],
		[MM.nwM, 12]
	]);
	mw[mW.nMVwN] = window.JSON.parse(window.JSON.stringify(mw[mW.NvNwm]));
	mw[mW.nMVwN].NWv = WN.NvV;
	mw[mW.nMVwN].mmM = WN.VnM;
	mw[mW.nMVwN].Vv.src = "img/day-ammo-locker0.png";
	mw[mW.nMVwN].NvW = Wn.VnnvN;
	mw[mW.nMVwN].width = [70, 50, 70, 50];
	mw[mW.nMVwN].height = [50, 70, 50, 70];
	mw[mW.nMVwN].MVN = [0, 25, 30, 25];
	mw[mW.nMVwN].wvN = [25, 0, 25, 30];
	mw[mW.nMVwN].detail = new nw("", "", -1, [
		[MM.Nvm, 32],
		[MM.nwM, 12]
	]);
	mw[mW.nVmMN] = window.JSON.parse(window.JSON.stringify(mw[mW.nnn]));
	mw[mW.nVmMN].NWv = WN.NvV;
	mw[mW.nVmMN].mmM = WN.VnM;
	mw[mW.nVmMN].Vv.src = "img/day-safe0.png";
	mw[mW.nVmMN].NvW = Wn.nVmMN;
	mw[mW.nVmMN].detail = new nw("", "", -1, [
		[MM.Nvm, 32],
		[MM.nwM, 32]
	]);
	mw[mW.nVmMN].WV = [
		[MM.MVM, 1, 0.008],
		[MM.nMwVV, 1, 0.002],
		[MM.WWNmW, 1, 0.002],
		[MM.nWwvv, 1, 0.02],
		[MM.NMnnV, 1, 0.002],
		[MM.vvnvW, 1, 0.002],
		[MM.vNwVv, 1, 0.002],
		[MM.vwMWN, 1, 0.002],
		[MM.vvWwv, 1, 0.002],
		[MM.vNnNn, 1, 0.002],
		[MM.vWVVn, 50, 0.02],
		[MM.WMNnw, 30, 0.02],
		[MM.VnmMw, 1, 0.01],
		[MM.nVwWW, 1, 0.01],
		[MM.VvV, 1, 0.04],
		[MM.WMw, 40, 0.06],
		[MM.NVvnn, 1, 0.05],
		[MM.mwvnv, 50, 0.05]
	];
	mw[mW.nMNvw] = window.JSON.parse(window.JSON.stringify(mw[mW.mNwMN]));
	mw[mW.nMNvw].Vv.src = "img/day-little-table0.png";
	mw[mW.nMNvw].width = [50, 50, 50, 50];
	mw[mW.nMNvw].height = [50, 50, 50, 50];
	mw[mW.nMNvw].MVN = [25, 25, 25, 25];
	mw[mW.nMNvw].wvN = [25, 25, 25, 25];
	mw[mW.nMNvw].detail = new nw("", "", -1, [
		[MM.Nvm, 8]
	]);
	mw[mW.nMNvw].NnnWw = 0;
	mw[mW.VnWWw] = window.JSON.parse(window.JSON.stringify(mw[mW.wWv]));
	mw[mW.VnWWw].Vv.src = "img/day-small-light-off.png";
	mw[mW.VnWWw].NvW = Wn.wWMWW;
	mw[mW.Wnm] = window.JSON.parse(window.JSON.stringify(mw[mW.mNwMN]));
	mw[mW.Wnm].NWv = WN.Vvmww;
	mw[mW.Wnm].mmM = WN.NNM;
	mw[mW.Wnm].NvW = Wn.vwVVv;
	mw[mW.Wnm].Vv.src = "img/day-toilet0.png";
	mw[mW.Wnm].width = [50, 70, 50, 70];
	mw[mW.Wnm].height = [70, 50, 70, 50];
	mw[mW.Wnm].MVN = [25, 30, 25, 0];
	mw[mW.Wnm].wvN = [0, 25, 30, 25];
	mw[mW.Wnm].NvW = Wn.vwVVv;
	mw[mW.Wnm].detail = new nw("", "", -1, [
		[MM.Nvm, 4],
		[MM.mvM, 100]
	]);
	mw[mW.Wnm].NnnWw = 1;
	mw[mW.Wnm].WV = [
		[MM.mMV, 1, 0.2],
		[MM.vVN, 1, 0.02],
		[MM.mWmvn, 1, 0.005],
		[MM.mnWnw, 1, 0.002]
	];
	var MWW = [{
		id: Ww.vnNNN,
		image: {
			v: 0
		},
		src: "img/day-ground-wood0.png",
		WM: MM.vWM,
		nW: 1,
		scale: 0.85,
		angle: 0
	}, {
		id: Ww.vMwnw,
		image: {
			v: 0
		},
		src: "img/day-ground-wood1.png",
		WM: MM.vWM,
		nW: 2,
		scale: 0.85,
		angle: 0
	}, {
		id: Ww.WmnMM,
		image: {
			v: 0
		},
		src: "img/day-ground-wood2.png",
		WM: MM.vWM,
		nW: 3,
		scale: 0.85,
		angle: 0
	}, {
		id: Ww.VmNvm,
		image: {
			v: 0
		},
		src: "img/day-ground-stone0.png",
		WM: MM.mvM,
		nW: 1,
		scale: 1.2,
		angle: 0
	}, {
		id: Ww.NNnmN,
		image: {
			v: 0
		},
		src: "img/day-ground-stone1.png",
		WM: MM.mvM,
		nW: 2,
		scale: 1.2,
		angle: 0
	}, {
		id: Ww.mNnMm,
		image: {
			v: 0
		},
		src: "img/day-ground-stone2.png",
		WM: MM.mvM,
		nW: 3,
		scale: 1.2,
		angle: 0
	}, {
		id: Ww.WWN,
		image: {
			v: 0
		},
		src: "img/day-ground-steel.png",
		WM: MM.WWN,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wMm,
		image: {
			v: 0
		},
		src: "img/day-ground-animal-fat.png",
		WM: MM.wMm,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.WwMnn,
		image: {
			v: 0
		},
		src: "img/day-ground-animal-tendon.png",
		WM: MM.WwMnn,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.wNm,
		image: {
			v: 0
		},
		src: "img/day-ground-string.png",
		WM: MM.wNm,
		nW: 1,
		scale: 0.7,
		angle: 0
	}, {
		id: Ww.mmm,
		image: {
			v: 0
		},
		src: "img/day-ground-leather-boar.png",
		WM: MM.mmm,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.Nvm,
		image: {
			v: 0
		},
		src: "img/day-ground-shaped-metal.png",
		WM: MM.Nvm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.Vmm,
		image: {
			v: 0
		},
		src: "img/day-ground-raw-steak.png",
		WM: MM.Vmm,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.VNWvv,
		image: {
			v: 0
		},
		src: "img/day-ground-cooked-steak.png",
		WM: MM.VNWvv,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.WVnvv,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-steak.png",
		WM: MM.WVnvv,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.VNn,
		image: {
			v: 0
		},
		src: "img/day-ground-orange.png",
		WM: MM.VNn,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.VVvVm,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-orange.png",
		WM: MM.VVvVm,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.MvNwM,
		image: {
			v: 0
		},
		src: "img/day-ground-seed-orange.png",
		WM: MM.MvNwM,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.VvM,
		image: {
			v: 0
		},
		src: "img/day-ground-hachet.png",
		WM: MM.VvM,
		nW: 1,
		scale: 0.9,
		angle: 0.5
	}, {
		id: Ww.mnV,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-pickaxe.png",
		WM: MM.mnV,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.mWW,
		image: {
			v: 0
		},
		src: "img/day-ground-steel-pickaxe.png",
		WM: MM.mWW,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.WvM,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-axe.png",
		WM: MM.WvM,
		nW: 1,
		scale: 0.7,
		angle: 0.5
	}, {
		id: Ww.nnw,
		image: {
			v: 0
		},
		src: "img/day-ground-workbench.png",
		WM: MM.nnw,
		nW: 1,
		scale: 0.7,
		angle: 0
	}, {
		id: Ww.wnWVN,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-spear.png",
		WM: MM.wnWVN,
		nW: 1,
		scale: 0.6,
		angle: 0.6
	}, {
		id: Ww.wvmnM,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-bow.png",
		WM: MM.wvmnM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VvV,
		image: {
			v: 0
		},
		src: "img/day-ground-9mm.png",
		WM: MM.VvV,
		nW: 1,
		scale: 1,
		angle: -0.1
	}, {
		id: Ww.vvWwv,
		image: {
			v: 0
		},
		src: "img/day-ground-desert-eagle.png",
		WM: MM.vvWwv,
		nW: 1,
		scale: 1,
		angle: -0.1
	}, {
		id: Ww.vwMWN,
		image: {
			v: 0
		},
		src: "img/day-ground-shotgun.png",
		WM: MM.vwMWN,
		nW: 1,
		scale: 0.7,
		angle: -0.5
	}, {
		id: Ww.vNwVv,
		image: {
			v: 0
		},
		src: "img/day-ground-ak47.png",
		WM: MM.vNwVv,
		nW: 1,
		scale: 0.7,
		angle: -0.5
	}, {
		id: Ww.vNnNn,
		image: {
			v: 0
		},
		src: "img/day-ground-sniper.png",
		WM: MM.vNnNn,
		nW: 1,
		scale: 0.7,
		angle: -0.5
	}, {
		id: Ww.nMN,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-wall.png",
		WM: MM.nMN,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.NVw,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-wall.png",
		WM: MM.NVw,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.wMM,
		image: {
			v: 0
		},
		src: "img/day-ground-steel-wall.png",
		WM: MM.wMM,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.VwnVN,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-door.png",
		WM: MM.VwnVN,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.nWN,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-door.png",
		WM: MM.nWN,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.nMwnv,
		image: {
			v: 0
		},
		src: "img/day-ground-steel-door.png",
		WM: MM.nMwnv,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.NWnNn,
		image: {
			v: 0
		},
		src: "img/day-ground-campfire.png",
		WM: MM.NWnNn,
		nW: 1,
		scale: 0.7,
		angle: 0
	}, {
		id: Ww.WMw,
		image: {
			v: 0
		},
		src: "img/day-ground-bullet-9mm.png",
		WM: MM.WMw,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.WMNnw,
		image: {
			v: 0
		},
		src: "img/day-ground-bullet-shotgun.png",
		WM: MM.WMNnw,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.vWVVn,
		image: {
			v: 0
		},
		src: "img/day-ground-bullet-sniper.png",
		WM: MM.vWVVn,
		nW: 1,
		scale: 1.1,
		angle: 0
	}, {
		id: Ww.vmnnm,
		image: {
			v: 0
		},
		src: "img/day-ground-medikit.png",
		WM: MM.vmnnm,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.mWMMN,
		image: {
			v: 0
		},
		src: "img/day-ground-bandage.png",
		WM: MM.mWMMN,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.VNmvV,
		image: {
			v: 0
		},
		src: "img/day-ground-soda.png",
		WM: MM.VNmvV,
		nW: 1,
		scale: 1.2,
		angle: 0
	}, {
		id: Ww.vvnvW,
		image: {
			v: 0
		},
		src: "img/day-ground-MP5.png",
		WM: MM.vvnvW,
		nW: 1,
		scale: 0.8,
		angle: -0.5
	}, {
		id: Ww.WnW,
		image: {
			v: 0
		},
		src: "img/day-ground-headscarf.png",
		WM: MM.WnW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MVM,
		image: {
			v: 0
		},
		src: "img/day-ground-chapka.png",
		WM: MM.MVM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nMwVV,
		image: {
			v: 0
		},
		src: "img/day-ground-coat.png",
		WM: MM.nMwVV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nNMmW,
		image: {
			v: 0
		},
		src: "img/day-ground-gaz-mask.png",
		WM: MM.nNMmW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nWwvv,
		image: {
			v: 0
		},
		src: "img/day-ground-gaz-protection.png",
		WM: MM.nWwvv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WWNmW,
		image: {
			v: 0
		},
		src: "img/day-ground-radiation-suit.png",
		WM: MM.WWNmW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VNnWV,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-arrow.png",
		WM: MM.VNnWV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wvv,
		image: {
			v: 0
		},
		src: "img/day-ground-campfire-bbq.png",
		WM: MM.wvv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wnn,
		image: {
			v: 0
		},
		src: "img/day-ground-smelter.png",
		WM: MM.wnn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NMwwN,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-door1.png",
		WM: MM.NMwwN,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.nvmMw,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-door1.png",
		WM: MM.nvmMw,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.MVWMM,
		image: {
			v: 0
		},
		src: "img/day-ground-steel-door1.png",
		WM: MM.MVWMM,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.nwM,
		image: {
			v: 0
		},
		src: "img/day-ground-sulfur.png",
		WM: MM.nwM,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.MNN,
		image: {
			v: 0
		},
		src: "img/day-ground-shaped-uranium.png",
		WM: MM.MNN,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.NnM,
		image: {
			v: 0
		},
		src: "img/day-ground-workbench2.png",
		WM: MM.NnM,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.nwv,
		image: {
			v: 0
		},
		src: "img/day-ground-uranium.png",
		WM: MM.nwv,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.Mvm,
		image: {
			v: 0
		},
		src: "img/day-ground-weaving-machine.png",
		WM: MM.Mvm,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.MVwnm,
		image: {
			v: 0
		},
		src: "img/day-ground-gasoline.png",
		WM: MM.MVwnm,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.Nnn,
		image: {
			v: 0
		},
		src: "img/day-ground-sulfur-pickaxe.png",
		WM: MM.Nnn,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.nVm,
		image: {
			v: 0
		},
		src: "img/day-ground-chest.png",
		WM: MM.nVm,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.nNWNV,
		image: {
			v: 0
		},
		src: "img/day-ground-fridge.png",
		WM: MM.nNWNV,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.MvvWV,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-floor.png",
		WM: MM.MvvWV,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.vnWwn,
		image: {
			v: 0
		},
		src: "img/day-ground-hammer.png",
		WM: MM.vnWwn,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.VNmwv,
		image: {
			v: 0
		},
		src: "img/day-ground-sleeping-bag.png",
		WM: MM.VNmwv,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.vnmmN,
		image: {
			v: 0
		},
		src: "img/day-ground-repair-hammer.png",
		WM: MM.vnmmN,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.NnWwV,
		image: {
			v: 0
		},
		src: "img/day-ground-nails.png",
		WM: MM.NnWwV,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.VvmNN,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-floor-light.png",
		WM: MM.VvmNN,
		nW: 1,
		scale: 0.7,
		angle: 0.3
	}, {
		id: Ww.WNmVm,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-smallwall.png",
		WM: MM.WNmVm,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.MWwNV,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-smallwall.png",
		WM: MM.MWwNV,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.vWWvW,
		image: {
			v: 0
		},
		src: "img/day-ground-steel-smallwall.png",
		WM: MM.vWWvW,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.WwvnN,
		image: {
			v: 0
		},
		src: "img/day-ground-tomato-soup.png",
		WM: MM.WwvnN,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.mMV,
		image: {
			v: 0
		},
		src: "img/day-ground-syringe.png",
		WM: MM.mMV,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.vVN,
		image: {
			v: 0
		},
		src: "img/day-ground-chemical-component.png",
		WM: MM.vVN,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.WMNWN,
		image: {
			v: 0
		},
		src: "img/day-ground-radaway.png",
		WM: MM.WMNWN,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.MVmNM,
		image: {
			v: 0
		},
		src: "img/day-ground-seed-tomato.png",
		WM: MM.MVmNM,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.NwV,
		image: {
			v: 0
		},
		src: "img/day-ground-tomato.png",
		WM: MM.NwV,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.VmnwW,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-tomato.png",
		WM: MM.VmnwW,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.mVMWM,
		image: {
			v: 0
		},
		src: "img/day-ground-can.png",
		WM: MM.mVMWM,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.NVvnn,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-crossbow.png",
		WM: MM.NVvnn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mwvnv,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-crossarrow.png",
		WM: MM.mwvnv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nwwWw,
		image: {
			v: 0
		},
		src: "img/day-ground-nail-gun.png",
		WM: MM.nwwWw,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NMnnV,
		image: {
			v: 0
		},
		src: "img/day-ground-sawed-off-shotgun.png",
		WM: MM.NMnnV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nNmVW,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-floor.png",
		WM: MM.nNmVW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NVvNv,
		image: {
			v: 0
		},
		src: "img/day-ground-tiling-floor.png",
		WM: MM.NVvNv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MVnNM,
		image: {
			v: 0
		},
		src: "img/day-ground-chips.png",
		WM: MM.MVnNM,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.WWvvM,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-chips.png",
		WM: MM.WWvvM,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.mnN,
		image: {
			v: 0
		},
		src: "img/day-ground-electronic-part.png",
		WM: MM.mnN,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.nMm,
		image: {
			v: 0
		},
		src: "img/day-ground-junk.png",
		WM: MM.nMm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wWw,
		image: {
			v: 0
		},
		src: "img/day-ground-wires.png",
		WM: MM.wWw,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.VwV,
		image: {
			v: 0
		},
		src: "img/day-ground-small-energy-cells.png",
		WM: MM.VwV,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.wVNwW,
		image: {
			v: 0
		},
		src: "img/day-ground-laser-pistol.png",
		WM: MM.wVNwW,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.nmV,
		image: {
			v: 0
		},
		src: "img/day-ground-workbench3.png",
		WM: MM.nmV,
		nW: 1,
		scale: 0.9,
		angle: 0
	}, {
		id: Ww.wNw,
		image: {
			v: 0
		},
		src: "img/day-ground-alloys.png",
		WM: MM.wNw,
		nW: 1,
		scale: 1,
		angle: 0
	}, {
		id: Ww.mMW,
		image: {
			v: 0
		},
		src: "img/day-ground-sulfur-axe.png",
		WM: MM.mMW,
		nW: 1,
		scale: 0.7,
		angle: 0.5
	}, {
		id: Ww.nVwWW,
		image: {
			v: 0
		},
		src: "img/day-ground-landmine.png",
		WM: MM.nVwWW,
		nW: 1,
		scale: 0.7,
		angle: 0.5
	}, {
		id: Ww.VnmMw,
		image: {
			v: 0
		},
		src: "img/day-ground-dynamite.png",
		WM: MM.VnmMw,
		nW: 1,
		scale: 0.7,
		angle: 0.5
	}, {
		id: Ww.NwvMV,
		image: {
			v: 0
		},
		src: "img/day-ground-C4.png",
		WM: MM.NwvMV,
		nW: 1,
		scale: 0.7,
		angle: 0.5
	}, {
		id: Ww.WwnNN,
		image: {
			v: 0
		},
		src: "img/day-ground-joystick.png",
		WM: MM.WwnNN,
		nW: 1,
		scale: 0.7,
		angle: 0.5
	}, {
		id: Ww.MmN,
		image: {
			v: 0
		},
		src: "img/day-ground-composter.png",
		WM: MM.MmN,
		nW: 1,
		scale: 0.7,
		angle: 0.5
	}, {
		id: Ww.vvNww,
		image: {
			v: 0
		},
		src: "img/day-ground-metal-helmet.png",
		WM: MM.vvNww,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.Mwwnm,
		image: {
			v: 0
		},
		src: "img/day-ground-welding-helmet.png",
		WM: MM.Mwwnm,
		nW: 1,
		scale: 0.7,
		angle: 0
	}, {
		id: Ww.Wnwmw,
		image: {
			v: 0
		},
		src: "img/day-ground-gladiator-helmet.png",
		WM: MM.Wnwmw,
		nW: 1,
		scale: 0.7,
		angle: 0
	}, {
		id: Ww.vWNMm,
		image: {
			v: 0
		},
		src: "img/day-ground-leather-jacket.png",
		WM: MM.vWNMm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.vnvVM,
		image: {
			v: 0
		},
		src: "img/day-ground-kevlar-suit.png",
		WM: MM.vnvVM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NNVnW,
		image: {
			v: 0
		},
		src: "img/day-ground-SWAT-suit.png",
		WM: MM.NNVnW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WMVVV,
		image: {
			v: 0
		},
		src: "img/day-ground-protective-suit.png",
		WM: MM.WMVVV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.vmnWV,
		image: {
			v: 0
		},
		src: "img/day-ground-tesla-0.png",
		WM: MM.vmnWV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wNNMN,
		image: {
			v: 0
		},
		src: "img/day-ground-tesla-armor.png",
		WM: MM.wNNMN,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.vMnNN,
		image: {
			v: 0
		},
		src: "img/day-ground-wood-spike.png",
		WM: MM.vMnNN,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nMMwV,
		image: {
			v: 0
		},
		src: "img/day-ground-laser-submachine.png",
		WM: MM.nMMwV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mwVWn,
		image: {
			v: 0
		},
		src: "img/day-ground-grenade.png",
		WM: MM.mwVWn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nmVmn,
		image: {
			v: 0
		},
		src: "img/day-ground-super-hammer.png",
		WM: MM.nmVmn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mWmvn,
		image: {
			v: 0
		},
		src: "img/day-ground-ghoul-blood.png",
		WM: MM.mWmvn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nVWWn,
		image: {
			v: 0
		},
		src: "img/day-ground-camouflage-gear.png",
		WM: MM.nVWWn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WMm,
		image: {
			v: 0
		},
		src: "img/day-ground-agitator.png",
		WM: MM.WMm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VvWWN,
		image: {
			v: 0
		},
		src: "img/day-ground-ghoul-drug.png",
		WM: MM.VvWWN,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wnnwM,
		image: {
			v: 0
		},
		src: "img/day-ground-mushroom1.png",
		WM: MM.wnnwM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VwWMV,
		image: {
			v: 0
		},
		src: "img/day-ground-mushroom2.png",
		WM: MM.VwWMV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MmWmM,
		image: {
			v: 0
		},
		src: "img/day-ground-mushroom3.png",
		WM: MM.MmWmM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WVMMv,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-mushroom1.png",
		WM: MM.WVMMv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VMMvN,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-mushroom2.png",
		WM: MM.VMMvN,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mMnVN,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-mushroom3.png",
		WM: MM.mMnVN,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mnWnw,
		image: {
			v: 0
		},
		src: "img/day-ground-lapadoine.png",
		WM: MM.mnWnw,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MWnmM,
		image: {
			v: 0
		},
		src: "img/day-ground-lapabot.png",
		WM: MM.MWnmM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nWv,
		image: {
			v: 0
		},
		src: "img/day-ground-small-wire.png",
		WM: MM.nWv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mVwVm,
		image: {
			v: 0
		},
		src: "img/day-ground-pumpkin.png",
		WM: MM.mVwVm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MwmnN,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-pumpkin.png",
		WM: MM.MwmnN,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WNnwn,
		image: {
			v: 0
		},
		src: "img/day-ground-ghoul5.png",
		WM: MM.WNnwn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MWn,
		image: {
			v: 0
		},
		src: "img/day-ground-extractor.png",
		WM: MM.MWn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WmwvW,
		image: {
			v: 0
		},
		src: "img/day-ground-antidote.png",
		WM: MM.WmwvW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VVmMm,
		image: {
			v: 0
		},
		src: "img/day-ground-antidote-flower.png",
		WM: MM.VVmMm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MNWMm,
		image: {
			v: 0
		},
		src: "img/day-ground-seed-tree.png",
		WM: MM.MNWMm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nvVVn,
		image: {
			v: 0
		},
		src: "img/day-ground-acorn.png",
		WM: MM.nvVVn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VwMvm,
		image: {
			v: 0
		},
		src: "img/day-ground-rotten-acorn.png",
		WM: MM.VwMvm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nMNWM,
		image: {
			v: 0
		},
		src: "img/day-ground-laser-sniper.png",
		WM: MM.nMNWM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mVVWn,
		image: {
			v: 0
		},
		src: "img/day-ground-hal-bot.png",
		WM: MM.mVVWn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NMWvv,
		image: {
			v: 0
		},
		src: "img/day-ground-tesla-bot.png",
		WM: MM.NMWvv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NNNVv,
		image: {
			v: 0
		},
		src: "img/day-ground-wire0.png",
		WM: MM.NNNVv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.MvWmW,
		image: {
			v: 0
		},
		src: "img/day-ground-wire1.png",
		WM: MM.MvWmW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WmwnM,
		image: {
			v: 0
		},
		src: "img/day-ground-wire2.png",
		WM: MM.WmwnM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.VVmNV,
		image: {
			v: 0
		},
		src: "img/day-ground-wire3.png",
		WM: MM.VVmNV,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NVNvv,
		image: {
			v: 0
		},
		src: "img/day-ground-switch.png",
		WM: MM.NVNvv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nnmVv,
		image: {
			v: 0
		},
		src: "img/day-ground-switch-or.png",
		WM: MM.nnmVv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.vwnMm,
		image: {
			v: 0
		},
		src: "img/day-ground-switch-and.png",
		WM: MM.vwnMm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mVNvm,
		image: {
			v: 0
		},
		src: "img/day-ground-switch-reverse.png",
		WM: MM.mVNvm,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NmWVn,
		image: {
			v: 0
		},
		src: "img/day-ground-lamp-white.png",
		WM: MM.NmWVn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wWWNW,
		image: {
			v: 0
		},
		src: "img/day-ground-cable-wall.png",
		WM: MM.wWWNW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.nNmvw,
		image: {
			v: 0
		},
		src: "img/day-ground-automatic-door.png",
		WM: MM.nNmvw,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mMvnn,
		image: {
			v: 0
		},
		src: "img/day-ground-platform.png",
		WM: MM.mMvnn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wwNMn,
		image: {
			v: 0
		},
		src: "img/day-ground-stone-cave.png",
		WM: MM.wwNMn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mMVmM,
		image: {
			v: 0
		},
		src: "img/day-ground-bunker-wall.png",
		WM: MM.mMVmM,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wnwmw,
		image: {
			v: 0
		},
		src: "img/day-ground-mustard-floor.png",
		WM: MM.wnwmw,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NVnwW,
		image: {
			v: 0
		},
		src: "img/day-ground-red-floor.png",
		WM: MM.NVnwW,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.wnv,
		image: {
			v: 0
		},
		src: "img/day-ground-welding-machine.png",
		WM: MM.wnv,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.WMnnw,
		image: {
			v: 0
		},
		src: "img/day-ground-wire4.png",
		WM: MM.WMnnw,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.NVVWn,
		image: {
			v: 0
		},
		src: "img/day-ground-timer.png",
		WM: MM.NVVWn,
		nW: 1,
		scale: 0.8,
		angle: 0
	}, {
		id: Ww.mNMWw,
		image: {
			v: 0
		},
		src: "img/day-ground-xor.png",
		WM: MM.mNMWw,
		nW: 1,
		scale: 0.8,
		angle: 0
	}];
	var Mn = 0;
	var VVM = {
		VWvVN: Mn++,
		WnMvW: Mn++,
		MVNVV: Mn++,
		vMmWV: Mn++,
		MWMWv: Mn++,
		MMW: Mn++,
		wnMMv: Mn++,
		WvvNM: Mn++,
		wnVNw: Mn++,
		vMnvm: Mn++,
		MNWmV: Mn++,
		WmmmV: Mn++,
		Vvvnn: Mn++,
		VMVWN: Mn++
	};
	var nwV = [];
	var WMvmm = 8;
	var VvN = 9;
	var MnnvW = 10;
	var nvnvm = 11;
	nwV[VVM.VWvVN] = {
		WV: [Ww.WmnMM, Ww.vMwnw, Ww.vnNNN],
		WnN: [0.2, 0.4, 1],
		mwV: [-1, MM.VvM, MM.WvM, MM.mMW],
		Wnn: [1, 2, 4, 5],
		VWV: 0,
		type: [{
			Nv: 200,
			image: {
				image: {
					v: 0
				},
				src: "img/day-wood1.png"
			},
			mVM: 100,
			NVW: 5,
			wNn: 0,
			Mnn: 80,
			nMM: 1,
			z: WMvmm,
			nnv: 80
		}, {
			Nv: 150,
			image: {
				image: {
					v: 0
				},
				src: "img/day-wood0.png"
			},
			mVM: 75,
			NVW: 5,
			wNn: 0,
			Mnn: 80,
			nMM: 1,
			z: WMvmm,
			nnv: 55
		}, {
			Nv: 120,
			image: {
				image: {
					v: 0
				},
				src: "img/day-wood2.png"
			},
			mVM: 70,
			NVW: 5,
			wNn: 0,
			Mnn: 80,
			nMM: 1,
			z: WMvmm,
			nnv: 48
		}, {
			Nv: 100,
			image: {
				image: {
					v: 0
				},
				src: "img/day-wood3.png"
			},
			mVM: 60,
			NVW: 5,
			wNn: 0,
			Mnn: 80,
			nMM: 1,
			z: WMvmm,
			nnv: 37
		}, {
			Nv: 75,
			image: {
				image: {
					v: 0
				},
				src: "img/day-wood4.png"
			},
			mVM: 50,
			NVW: 5,
			wNn: 0,
			Mnn: 80,
			nMM: 1,
			z: WMvmm,
			nnv: 30
		}],
		NvW: Wn.vWM,
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vw: 5
	};
	nwV[VVM.MMW] = {
		WV: [Ww.nvVVn, Ww.WmnMM, Ww.vMwnw, Ww.vnNNN],
		WnN: [0.015, 0.2, 0.4, 1],
		mwV: [-1, MM.VvM, MM.WvM, MM.mMW],
		Wnn: [1, 2, 4, 5],
		VWV: 0,
		type: [{
			Nv: 250,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tree0.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-treeleaf0.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tree-and-leaf0.png"
			},
			mVM: 145,
			NVW: 5,
			wNn: 0,
			Mnn: 800,
			nMM: 1,
			z: nvnvm,
			nnv: 70
		}, {
			Nv: 250,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tree1.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-treeleaf1.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tree-and-leaf1.png"
			},
			mVM: 128,
			NVW: 5,
			wNn: 0,
			Mnn: 800,
			nMM: 1,
			z: nvnvm,
			nnv: 52
		}, {
			Nv: 150,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tree2.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-treeleaf2.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tree-and-leaf2.png"
			},
			mVM: 114,
			NVW: 5,
			wNn: 0,
			Mnn: 800,
			nMM: 1,
			z: nvnvm,
			nnv: 42
		}, {
			Nv: 75,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tree3.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-treeleaf3.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tree-and-leaf3.png"
			},
			mVM: 90,
			NVW: 5,
			wNn: 0,
			Mnn: 800,
			nMM: 1,
			z: nvnvm,
			nnv: 34
		}, {
			Nv: 250,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tree4.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-treeleaf4.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tree-and-leaf4.png"
			},
			mVM: 147,
			NVW: 5,
			wNn: 0,
			Mnn: 800,
			nMM: 1,
			z: nvnvm,
			nnv: 54
		}],
		NvW: Wn.VnNWN,
		NWv: WN.mmV,
		mmM: WN.Vwv,
		Vw: 5
	};
	nwV[VVM.WnMvW] = {
		WV: [Ww.mNnMm, Ww.NNnmN, Ww.VmNvm],
		WnN: [0.1, 0.3, 1],
		mwV: [MM.VvM, MM.mnV, MM.mWW, MM.Nnn],
		Wnn: [1, 3, 4, 5],
		VWV: 0,
		type: [{
			Nv: 1000,
			image: {
				image: {
					v: 0
				},
				src: "img/day-stone0.png"
			},
			mVM: 80,
			NVW: 5,
			wNn: 0,
			Mnn: 115,
			nMM: 1,
			z: MnnvW,
			nnv: 60
		}, {
			Nv: 800,
			image: {
				image: {
					v: 0
				},
				src: "img/day-stone2.png"
			},
			mVM: 80,
			NVW: 5,
			wNn: 0,
			Mnn: 115,
			nMM: 1,
			z: MnnvW,
			nnv: 58
		}, {
			Nv: 600,
			image: {
				image: {
					v: 0
				},
				src: "img/day-stone1.png"
			},
			mVM: 74,
			NVW: 5,
			wNn: 0,
			Mnn: 115,
			nMM: 1,
			z: MnnvW,
			nnv: 54
		}, {
			Nv: 400,
			image: {
				image: {
					v: 0
				},
				src: "img/day-stone3.png"
			},
			mVM: 65,
			NVW: 5,
			wNn: 0,
			Mnn: 115,
			nMM: 1,
			z: VvN,
			nnv: 45
		}, {
			Nv: 200,
			image: {
				image: {
					v: 0
				},
				src: "img/day-stone4.png"
			},
			mVM: 63,
			NVW: 5,
			wNn: 0,
			Mnn: 115,
			nMM: 1,
			z: VvN,
			nnv: 43
		}, {
			Nv: 150,
			image: {
				image: {
					v: 0
				},
				src: "img/day-stone5.png"
			},
			mVM: 61,
			NVW: 5,
			wNn: 0,
			Mnn: 115,
			nMM: 1,
			z: VvN,
			nnv: 41
		}],
		NvW: Wn.mvM,
		NWv: WN.MnnWm,
		mmM: WN.NNM,
		Vw: 15
	};
	nwV[VVM.MVNVV] = {
		WV: [Ww.WWN, Ww.mNnMm, Ww.NNnmN, Ww.VmNvm],
		WnN: [0.4, 0.45, 0.6, 1],
		mwV: [MM.mnV, MM.mWW, MM.Nnn],
		Wnn: [1, 2, 3],
		VWV: 0,
		type: [{
			Nv: 1200,
			image: {
				image: {
					v: 0
				},
				src: "img/day-steel0.png"
			},
			mVM: 81,
			NVW: 5,
			wNn: 0,
			Mnn: 22,
			nMM: 1,
			z: MnnvW,
			nnv: 61
		}, {
			Nv: 1000,
			image: {
				image: {
					v: 0
				},
				src: "img/day-steel1.png"
			},
			mVM: 81,
			NVW: 5,
			wNn: 0,
			Mnn: 22,
			nMM: 1,
			z: MnnvW,
			nnv: 61
		}, {
			Nv: 300,
			image: {
				image: {
					v: 0
				},
				src: "img/day-steel2.png"
			},
			mVM: 62,
			NVW: 5,
			wNn: 0,
			Mnn: 22,
			nMM: 1,
			z: VvN,
			nnv: 42
		}, {
			Nv: 500,
			image: {
				image: {
					v: 0
				},
				src: "img/day-steel3.png"
			},
			mVM: 70,
			NVW: 5,
			wNn: 0,
			Mnn: 22,
			nMM: 1,
			z: MnnvW,
			nnv: 50
		}],
		NvW: Wn.WWN,
		NWv: WN.MnnWm,
		mmM: WN.NNM,
		Vw: 40
	};
	nwV[VVM.MWMWv] = {
		WV: [Ww.nwM, Ww.mNnMm, Ww.NNnmN, Ww.VmNvm],
		WnN: [0.4, 0.45, 0.6, 1],
		mwV: [MM.mWW, MM.Nnn],
		Wnn: [1, 2],
		VWV: 0,
		type: [{
			Nv: 1000,
			image: {
				image: {
					v: 0
				},
				src: "img/day-sulfur0.png"
			},
			mVM: 62,
			NVW: 5,
			wNn: 0,
			Mnn: 22,
			nMM: 1,
			z: MnnvW,
			nnv: 42
		}, {
			Nv: 400,
			image: {
				image: {
					v: 0
				},
				src: "img/day-sulfur1.png"
			},
			mVM: 70,
			NVW: 5,
			wNn: 0,
			Mnn: 22,
			nMM: 1,
			z: VvN,
			nnv: 50
		}, {
			Nv: 400,
			image: {
				image: {
					v: 0
				},
				src: "img/day-sulfur2.png"
			},
			mVM: 58,
			NVW: 5,
			wNn: 0,
			Mnn: 22,
			nMM: 1,
			z: VvN,
			nnv: 38
		}],
		NvW: Wn.nwM,
		NWv: WN.MnnWm,
		mmM: WN.NNM,
		Vw: 70
	};
	nwV[VVM.vMmWV] = {
		WV: [Ww.nwv, Ww.mNnMm, Ww.NNnmN, Ww.VmNvm],
		WnN: [0.3, 0.45, 0.6, 1],
		mwV: [MM.Nnn],
		Wnn: [1],
		VWV: WvvwM,
		type: [{
			Nv: 6000,
			image: {
				image: {
					v: 0
				},
				src: "img/day-uranium0.png"
			},
			mVM: 104,
			NVW: 5,
			wNn: 0,
			Mnn: 5,
			nMM: 1,
			z: MnnvW,
			nnv: 75
		}, {
			Nv: 4000,
			image: {
				image: {
					v: 0
				},
				src: "img/day-uranium1.png"
			},
			mVM: 75,
			NVW: 5,
			wNn: 0,
			Mnn: 5,
			nMM: 1,
			z: MnnvW,
			nnv: 55
		}, {
			Nv: 2000,
			image: {
				image: {
					v: 0
				},
				src: "img/day-uranium2.png"
			},
			mVM: 62,
			NVW: 5,
			wNn: 0,
			Mnn: 5,
			nMM: 1,
			z: VvN,
			nnv: 42
		}],
		NvW: Wn.nwv,
		NWv: WN.MnnWm,
		mmM: WN.NNM,
		Vw: 140
	};
	nwV[VVM.wnMMv] = {
		WV: [Ww.MvNwM, Ww.VNn],
		WnN: [0.05, 1],
		mwV: [-1],
		Wnn: [1],
		VWV: 0,
		type: [{
			Nv: 80,
			image: {
				image: {
					v: 0
				},
				src: "img/day-orange-tree-leaf0.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-orange0.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-orange-tree0.png"
			},
			mVM: 68,
			NVW: 5,
			wNn: 0,
			Mnn: 20,
			nMM: 1,
			z: VvN,
			nnv: 38
		}, {
			Nv: 100,
			image: {
				image: {
					v: 0
				},
				src: "img/day-orange-tree-leaf1.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-orange1.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-orange-tree1.png"
			},
			mVM: 70,
			NVW: 5,
			wNn: 0,
			Mnn: 20,
			nMM: 1,
			z: VvN,
			nnv: 37
		}, {
			Nv: 120,
			image: {
				image: {
					v: 0
				},
				src: "img/day-orange-tree-leaf2.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-orange2.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-orange-tree2.png"
			},
			mVM: 78,
			NVW: 5,
			wNn: 0,
			Mnn: 20,
			nMM: 1,
			z: VvN,
			nnv: 45
		}],
		NvW: Wn.VNn,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 50
	};
	nwV[VVM.WvvNM] = {
		WV: [Ww.MVmNM, Ww.NwV],
		WnN: [0.05, 1],
		mwV: [-1],
		Wnn: [1],
		VWV: 0,
		type: [{
			Nv: 80,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tomato-tree-leaf0.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-tomato0.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tomato-tree0.png"
			},
			mVM: 68,
			NVW: 5,
			wNn: 0,
			Mnn: 16,
			nMM: 1,
			z: VvN,
			nnv: 38
		}, {
			Nv: 100,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tomato-tree-leaf1.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-tomato1.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tomato-tree1.png"
			},
			mVM: 70,
			NVW: 5,
			wNn: 0,
			Mnn: 16,
			nMM: 1,
			z: VvN,
			nnv: 37
		}, {
			Nv: 120,
			image: {
				image: {
					v: 0
				},
				src: "img/day-tomato-tree-leaf2.png"
			},
			NMm: {
				image: {
					v: 0
				},
				src: "img/day-tomato2.png"
			},
			vwwvv: {
				image: {
					v: 0
				},
				src: "img/day-tomato-tree2.png"
			},
			mVM: 78,
			NVW: 5,
			wNn: 0,
			Mnn: 16,
			nMM: 1,
			z: VvN,
			nnv: 45
		}],
		NvW: Wn.NwV,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 50
	};
	nwV[VVM.wnVNw] = {
		WV: [Ww.Vmm, Ww.wMm, Ww.mmm],
		WnN: [0.25, 0.85, 1],
		mwV: [MM.VvM, MM.WvM, MM.mMW],
		Wnn: [1, 3, 4],
		VWV: 0,
		type: [{
			Nv: 250,
			image: {
				image: {
					v: 0
				},
				src: "img/day-boar-dead.png"
			},
			mVM: 70,
			NVW: 5,
			wNn: 0,
			Mnn: 18,
			nMM: 1,
			z: VvN,
			nnv: 47
		}],
		NvW: Wn.MnMNV,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 40
	};
	nwV[VVM.vMnvm] = {
		WV: [Ww.Vmm, Ww.WwMnn, Ww.mmm, Ww.wMm],
		WnN: [0.28, 0.7, 0.85, 1],
		mwV: [MM.VvM, MM.WvM, MM.mMW],
		Wnn: [1, 3, 4],
		VWV: 0,
		type: [{
			Nv: 200,
			image: {
				image: {
					v: 0
				},
				src: "img/day-deer-dead.png"
			},
			mVM: 73,
			NVW: 5,
			wNn: 0,
			Mnn: 18,
			nMM: 1,
			z: VvN,
			nnv: 53
		}],
		NvW: Wn.MnMNV,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 40
	};
	nwV[VVM.MNWmV] = {
		WV: [Ww.wnnwM],
		WnN: [1],
		mwV: [-1],
		Wnn: [1],
		VWV: 0,
		type: [{
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom1.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 2,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom2.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 2,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom3.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 2,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom4.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 2,
			nMM: 0,
			z: VvN,
			nnv: 32
		}],
		NvW: Wn.wnnwM,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 40
	};
	nwV[VVM.VMVWN] = {
		WV: [Ww.VVmMm],
		WnN: [1],
		mwV: [-1],
		Wnn: [1],
		VWV: 0,
		type: [{
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-antidote-tree.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 1,
			nMM: 0,
			z: VvN,
			nnv: 32
		}],
		NvW: Wn.WVMwW,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 1000
	};
	nwV[VVM.WmmmV] = {
		WV: [Ww.VwWMV],
		WnN: [1],
		mwV: [-1],
		Wnn: [1],
		VWV: 0,
		type: [{
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom5.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom6.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom7.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom8.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}],
		NvW: Wn.VwWMV,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 40
	};
	nwV[VVM.Vvvnn] = {
		WV: [Ww.MmWmM],
		WnN: [1],
		mwV: [-1],
		Wnn: [1],
		VWV: 0,
		type: [{
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom9.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom10.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom11.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}, {
			Nv: 1,
			image: {
				image: {
					v: 0
				},
				src: "img/day-mushroom12.png"
			},
			mVM: 18,
			NVW: 2,
			wNn: 0,
			Mnn: 6,
			nMM: 0,
			z: VvN,
			nnv: 32
		}],
		NvW: Wn.MmWmM,
		NWv: WN.NnW,
		mmM: WN.NnW,
		Vw: 40
	};
	var vMmnW = [-26, 25, -7, 0];
	var WnMNn = [-28, -15, 25, 0];
	var nMVNV = [{
		src: "img/day-campfire-light-1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-campfire-light-2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-campfire-light-3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/day-campfire-light-down.png",
		image: {
			v: 0
		}
	}];
	var wwnnm = [{
		src: "img/karma4.png",
		image: {
			v: 0
		}
	}, {
		src: "img/karma3.png",
		image: {
			v: 0
		}
	}, {
		src: "img/karma2.png",
		image: {
			v: 0
		}
	}, {
		src: "img/karma1.png",
		image: {
			v: 0
		}
	}, {
		src: "img/karma0.png",
		image: {
			v: 0
		}
	}, {
		src: "img/karma5.png",
		image: {
			v: 0
		}
	}];
	var Mn = 0;
	var vVW = {
		vWMWM: Mn++,
		MWWwm: Mn++,
		Vmwvw: Mn++,
		MnvWN: Mn++,
		nnwnw: Mn++,
		VVnnw: Mn++,
		VMwnW: Mn++,
		MVwVW: Mn++,
		NmvNn: Mn++,
		vNNww: Mn++,
		VMvVw: Mn++,
		NvMnm: Mn++
	};
	var NVv = [];
	var NmNnm = {};
	try {
		if (nVN !== undefined) {
			MV = {
				N: 0,
				b: 0,
				W: -1,
				r: 0
			};
			wv = {
				N: MM.MvvWV,
				b: 0,
				W: -1,
				r: 0
			};
			MN = {
				N: MM.VvmNN,
				b: 0,
				W: -1,
				r: 0
			};
			Wvw = {
				N: MM.nNmVW,
				b: 0,
				W: -1,
				r: 0
			};
			vmw = {
				N: MM.NVvNv,
				b: 0,
				W: -1,
				r: 0
			};
			wmNwM = {
				N: MM.wnwmw,
				b: 0,
				W: -1,
				r: 0
			};
			mmVNN = {
				N: MM.NVnwW,
				b: 0,
				W: -1,
				r: 0
			};
			WWNNn = {
				N: 0,
				b: MM.nMN,
				W: -1,
				r: 0
			};
			vww = {
				N: MM.MvvWV,
				b: MM.nMN,
				W: -1,
				r: 0
			};
			VWW = {
				N: MM.VvmNN,
				b: MM.nMN,
				W: -1,
				r: 0
			};
			Nvvvn = {
				N: MM.nNmVW,
				b: MM.nMN,
				W: -1,
				r: 0
			};
			vMMnn = {
				N: MM.NVvNv,
				b: MM.nMN,
				W: -1,
				r: 0
			};
			NwMWN = {
				N: MM.wnwmw,
				b: MM.nMN,
				W: -1,
				r: 0
			};
			MwWNn = {
				N: MM.NVnwW,
				b: MM.nMN,
				W: -1,
				r: 0
			};
			MNV = {
				N: 0,
				b: MM.NVw,
				W: -1,
				r: 0
			};
			NV = {
				N: MM.MvvWV,
				b: MM.NVw,
				W: -1,
				r: 0
			};
			nnM = {
				N: MM.VvmNN,
				b: MM.NVw,
				W: -1,
				r: 0
			};
			MWVnW = {
				N: MM.nNmVW,
				b: MM.NVw,
				W: -1,
				r: 0
			};
			wMMMV = {
				N: MM.NVvNv,
				b: MM.NVw,
				W: -1,
				r: 0
			};
			VNNwm = {
				N: MM.wnwmw,
				b: MM.NVw,
				W: -1,
				r: 0
			};
			WMWNM = {
				N: MM.NVnwW,
				b: MM.NVw,
				W: -1,
				r: 0
			};
			vwM = {
				N: 0,
				b: MM.wMM,
				W: -1,
				r: 0
			};
			wwm = {
				N: MM.MvvWV,
				b: MM.wMM,
				W: -1,
				r: 0
			};
			WMN = {
				N: MM.VvmNN,
				b: MM.wMM,
				W: -1,
				r: 0
			};
			Vvw = {
				N: MM.nNmVW,
				b: MM.wMM,
				W: -1,
				r: 0
			};
			WNM = {
				N: MM.NVvNv,
				b: MM.wMM,
				W: -1,
				r: 0
			};
			WmNVn = {
				N: MM.wnwmw,
				b: MM.wMM,
				W: -1,
				r: 0
			};
			WwNWw = {
				N: MM.NVnwW,
				b: MM.wMM,
				W: -1,
				r: 0
			};
			vv = {
				N: 0,
				b: MM.wwNMn,
				W: -1,
				r: 0
			};
			VNnVn = {
				N: MM.nNmVW,
				b: MM.wwNMn,
				W: -1,
				r: 0
			};
			MVwwM = {
				N: MM.NVvNv,
				b: MM.wwNMn,
				W: -1,
				r: 0
			};
			MNWmn = {
				N: 0,
				b: MM.mMVmM,
				W: -1,
				r: 0
			};
			nvNVw = {
				N: MM.nNmVW,
				b: MM.mMVmM,
				W: -1,
				r: 0
			};
			WmW = {
				N: MM.NVvNv,
				b: MM.mMVmM,
				W: -1,
				r: 0
			};
			NVv[vVW.vWMWM] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, vww, vww, vww, {
						N: 62,
						b: 30,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 30,
						W: -1,
						r: 2
					}, vww, vww],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 0,
						r: 3
					}, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 13,
						r: 1
					}, vww],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 22,
						r: 3
					}, wv, wv, wv, wv, {
						N: 62,
						b: 30,
						W: -1,
						r: 3
					}],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 9,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 10,
						r: 1
					}, wv, wv, wv, {
						N: 62,
						b: 30,
						W: -1,
						r: 3
					}],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 17,
						r: 0
					}, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 19,
						r: 2
					}, vww],
					[MV, vww, vww, vww, vww, vww, vww, vww]
				]
			};
			NVv[vVW.MWWwm] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, nnM, nnM, {
						N: 67,
						b: 69,
						W: -1,
						r: 2
					}, nnM, nnM, nnM],
					[MV, {
						N: 62,
						b: 69,
						W: -1,
						r: 1
					}, wv, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, nnM, {
						N: 67,
						b: 71,
						W: 28,
						r: 3
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 21,
						r: 1
					}, nnM],
					[MV, {
						N: 62,
						b: 31,
						W: -1,
						r: 1
					}, wv, wv, nnM, {
						N: 67,
						b: 71,
						W: 12,
						r: 0
					}, MN, {
						N: 67,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, {
						N: 62,
						b: 69,
						W: -1,
						r: 1
					}, wv, wv, {
						N: 62,
						b: 69,
						W: -1,
						r: 3
					}, MN, MN, MN, {
						N: 67,
						b: 71,
						W: 15,
						r: 1
					}, nnM],
					[MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 0
					}, nnM, MN, {
						N: 67,
						b: 71,
						W: 23,
						r: 1
					}, MN, {
						N: 67,
						b: 71,
						W: 5,
						r: 1
					}, nnM],
					[MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, NV, wv, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, NV],
					[MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, NV, {
						N: 62,
						b: 71,
						W: 23,
						r: 2
					}, wv, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 14,
						r: 1
					}, NV],
					[MV, MV, NV, {
						N: 67,
						b: 71,
						W: 27,
						r: 0
					}, MN, MN, {
						N: 62,
						b: 71,
						W: 8,
						r: 3
					}, wv, {
						N: 62,
						b: 71,
						W: 1,
						r: 1
					}, NV],
					[MV, MV, NV, {
						N: 67,
						b: 71,
						W: 27,
						r: 0
					}, MN, {
						N: 67,
						b: 71,
						W: 7,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 2,
						r: 1
					}, NV],
					[MV, MV, NV, {
						N: 67,
						b: 71,
						W: 20,
						r: 0
					}, MN, MN, wv, wv, wv, {
						N: 0,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, {
						N: 0,
						b: 71,
						W: 16,
						r: 1
					}, NV, NV, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 0
					}, NV, NV],
					[MV, MV, MV, {
						N: 0,
						b: 71,
						W: 16,
						r: 2
					}, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 17,
						r: 0
					}]
				]
			};
			NVv[vVW.Vmwvw] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, MV, MV, NV, NV, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, NV, NV, nnM, nnM, nnM, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, MV, MV, NV, {
						N: 67,
						b: 71,
						W: 27,
						r: 0
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 23,
						r: 3
					}, NV, {
						N: 67,
						b: 71,
						W: 5,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 13,
						r: 1
					}, nnM, wv, wv, {
						N: 0,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, NV, {
						N: 67,
						b: 71,
						W: 20,
						r: 0
					}, MN, {
						N: 67,
						b: 71,
						W: 7,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 16,
						r: 2
					}, NV, MN, MN, {
						N: 67,
						b: 31,
						W: -1,
						r: 3
					}, wv, {
						N: 62,
						b: 71,
						W: 23,
						r: 1
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, wv, {
						N: 62,
						b: 71,
						W: 2,
						r: 1
					}, NV, {
						N: 67,
						b: 71,
						W: 11,
						r: 3
					}, MN, MN, MN, NV, MN, {
						N: 67,
						b: 71,
						W: 12,
						r: 2
					}, nnM, nnM, nnM, MNV],
					[MV, wv, wv, {
						N: 62,
						b: 31,
						W: -1,
						r: 1
					}, wv, wv, wv, wv, {
						N: 62,
						b: 31,
						W: -1,
						r: 3
					}, MN, MN, nnM, {
						N: 67,
						b: 71,
						W: 25,
						r: 2
					}, {
						N: 67,
						b: 71,
						W: 3,
						r: 1
					}, nnM],
					[MV, wv, wv, {
						N: 62,
						b: 31,
						W: -1,
						r: 1
					}, wv, wv, wv, wv, NV, MN, MN, {
						N: 67,
						b: 51,
						W: -1,
						r: 1
					}, MN, {
						N: 67,
						b: 71,
						W: 18,
						r: 2
					}, nnM],
					[MV, wv, wv, MNV, {
						N: 62,
						b: 71,
						W: 3,
						r: 3
					}, wv, wv, {
						N: 62,
						b: 71,
						W: 16,
						r: 2
					}, NV, nnM, nnM, nnM, nnM, nnM, nnM],
					[MV, wv, {
						N: 62,
						b: 71,
						W: 26,
						r: 0
					}, NV, {
						N: 0,
						b: 71,
						W: 4,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 22,
						r: 1
					}, wv, {
						N: 62,
						b: 71,
						W: 8,
						r: 1
					}, NV, {
						N: 0,
						b: 71,
						W: 24,
						r: 1
					}, MV, {
						N: 0,
						b: 71,
						W: 17,
						r: 0
					}],
					[MV, wv, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, NV, {
						N: 62,
						b: 71,
						W: 23,
						r: 1
					}, wv, wv, {
						N: 62,
						b: 71,
						W: 14,
						r: 1
					}, NV, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}],
					[MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, NV, NV, {
						N: 62,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 0
					}, NV, NV, {
						N: 0,
						b: 71,
						W: 24,
						r: 1
					}]
				]
			};
			NVv[vVW.MnvWN] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, nnM, nnM, nnM, nnM],
					[MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 23,
						r: 2
					}, MV, MV, MV, MV, MV, nnM, {
						N: 67,
						b: 71,
						W: 21,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 28,
						r: 0
					}, nnM],
					[MV, NV, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, NV, NV, MV, nnM, MN, MN, nnM],
					[MV, NV, {
						N: 62,
						b: 71,
						W: 12,
						r: 0
					}, wv, wv, wv, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, nnM, {
						N: 67,
						b: 31,
						W: -1,
						r: 0
					}, nnM, nnM],
					[MV, NV, wv, {
						N: 62,
						b: 71,
						W: 2,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 14,
						r: 1
					}, NV, wv, wv, wv, wv, NV],
					[MV, NV, {
						N: 62,
						b: 71,
						W: 0,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 7,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 8,
						r: 1
					}, NV, wv, {
						N: 62,
						b: 71,
						W: 14,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 5,
						r: 2
					}, wv, NV],
					[MV, NV, wv, {
						N: 62,
						b: 71,
						W: 1,
						r: 2
					}, wv, wv, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, NV, NV, NV, NV, nnM],
					[MV, {
						N: 62,
						b: 31,
						W: -1,
						r: 1
					}, wv, wv, wv, wv, wv, wv, wv, {
						N: 62,
						b: 31,
						W: -1,
						r: 3
					}, MN, MN, nnM],
					[MV, NV, wv, wv, wv, wv, wv, wv, wv, nnM, {
						N: 67,
						b: 71,
						W: 25,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 18,
						r: 3
					}, nnM],
					[MV, NV, NV, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, NV, NV, NV, {
						N: 67,
						b: 31,
						W: -1,
						r: 2
					}, nnM, nnM, nnM, nnM],
					[MV, NV, {
						N: 62,
						b: 71,
						W: 20,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 11,
						r: 0
					}, wv, wv, NV, {
						N: 67,
						b: 71,
						W: 24,
						r: 0
					}, MN, MN, MN, MN, {
						N: 67,
						b: 31,
						W: -1,
						r: 3
					}],
					[MV, {
						N: 62,
						b: 31,
						W: -1,
						r: 1
					}, wv, wv, wv, wv, NV, {
						N: 67,
						b: 71,
						W: 23,
						r: 0
					}, MN, MN, MN, MN, {
						N: 67,
						b: 31,
						W: -1,
						r: 3
					}],
					[MV, {
						N: 62,
						b: 31,
						W: -1,
						r: 1
					}, wv, wv, wv, wv, NV, NV, NV, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}],
					[MV, NV, {
						N: 62,
						b: 71,
						W: 14,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 13,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 12,
						r: 3
					}, wv, {
						N: 67,
						b: 31,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 71,
						W: 12,
						r: 2
					}, NV],
					[MV, NV, NV, NV, NV, NV, nnM, NV, NV]
				]
			};
			NVv[vVW.nnwnw] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, nnM, nnM, nnM, nnM, {
						N: 67,
						b: 31,
						W: -1,
						r: 2
					}, nnM, nnM, nnM, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, MNV],
					[MV, nnM, {
						N: 67,
						b: 71,
						W: 12,
						r: 0
					}, MN, {
						N: 67,
						b: 71,
						W: 5,
						r: 0
					}, MN, {
						N: 67,
						b: 71,
						W: 11,
						r: 1
					}, nnM, {
						N: 67,
						b: 71,
						W: 13,
						r: 0
					}, MN, MN, nnM],
					[MV, nnM, {
						N: 67,
						b: 71,
						W: 13,
						r: 0
					}, MN, MN, MN, {
						N: 67,
						b: 71,
						W: 19,
						r: 2
					}, nnM, MN, MN, {
						N: 67,
						b: 71,
						W: 21,
						r: 1
					}, nnM],
					[MV, nnM, {
						N: 67,
						b: 71,
						W: 9,
						r: 3
					}, MN, {
						N: 67,
						b: 71,
						W: 7,
						r: 1
					}, MN, {
						N: 67,
						b: 71,
						W: 26,
						r: 3
					}, nnM, MN, MN, {
						N: 67,
						b: 71,
						W: 28,
						r: 1
					}, nnM],
					[MV, nnM, {
						N: 67,
						b: 71,
						W: 13,
						r: 0
					}, MN, MN, MN, MN, nnM, MN, nnM, nnM, nnM],
					[MV, nnM, {
						N: 67,
						b: 71,
						W: 9,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 10,
						r: 1
					}, {
						N: 67,
						b: 71,
						W: 12,
						r: 3
					}, MN, MN, {
						N: 67,
						b: 31,
						W: -1,
						r: 1
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 27,
						r: 2
					}, nnM],
					[MV, nnM, nnM, nnM, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, nnM, nnM, {
						N: 67,
						b: 31,
						W: -1,
						r: 0
					}, nnM, nnM, nnM],
					[MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 17,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 26,
						r: 3
					}]
				]
			};
			NVv[vVW.VVnnw] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, NV, NV, NV, NV, NV, NV, NV, NV, NV, NV, NV, NV, NV, NV, NV, NV],
					[MV, NV, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 9,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 9,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 9,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 9,
						r: 0
					}, wv, NV, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 1,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 2,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 23,
						r: 1
					}, NV, {
						N: 0,
						b: 71,
						W: 17,
						r: 1
					}],
					[MV, NV, MN, MN, {
						N: 62,
						b: 71,
						W: 10,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 10,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 10,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 10,
						r: 2
					}, wv, NV, {
						N: 62,
						b: 71,
						W: 39,
						r: 0
					}, wv, wv, wv, wv, wv, NV],
					[MV, NV, {
						N: 67,
						b: 71,
						W: 39,
						r: 3
					}, MN, MN, MN, MN, MN, MN, {
						N: 62,
						b: 150,
						W: -1,
						r: 3
					}, MN, MN, MN, MN, MN, MN, {
						N: 67,
						b: 51,
						W: -1,
						r: 1
					}],
					[MV, NV, {
						N: 85,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 85,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, MN, MN, MN, MN, {
						N: 62,
						b: 150,
						W: -1,
						r: 3
					}, MN, MN, MN, MN, MN, MN, {
						N: 67,
						b: 51,
						W: -1,
						r: 3
					}],
					[MV, NV, {
						N: 85,
						b: 71,
						W: 28,
						r: 3
					}, vmw, {
						N: 62,
						b: 69,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 10,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 10,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 10,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 40,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 7,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 7,
						r: 1
					}, NV],
					[MV, NV, {
						N: 85,
						b: 71,
						W: 21,
						r: 3
					}, vmw, {
						N: 62,
						b: 69,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 9,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 9,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 9,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 8,
						r: 1
					}, NV],
					[MV, NV, NV, NV, NV, NV, NV, NV, NV, wMMMV, {
						N: 0,
						b: 71,
						W: 41,
						r: 2
					}, wMMMV, wMMMV, wMMMV, NV, NV, NV],
					[MV, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 16,
						r: 3
					}, MV, MV, MV, wMMMV, vmw, vmw, {
						N: 85,
						b: 71,
						W: 18,
						r: 2
					}, wMMMV, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, wMMMV, {
						N: 85,
						b: 71,
						W: 25,
						r: 1
					}, vmw, {
						N: 85,
						b: 71,
						W: 19,
						r: 2
					}, wMMMV],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, wMMMV, wMMMV, wMMMV, wMMMV, wMMMV]
				]
			};
			NVv[vVW.VMwnW] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, vww, vww, vww, {
						N: 67,
						b: 50,
						W: -1,
						r: 2
					}, vww, vww, vww],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 9,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 8,
						r: 0
					}, MN, {
						N: 62,
						b: 71,
						W: 13,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 6,
						r: 0
					}, vww],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 10,
						r: 2
					}, wv, MN, wv, wv, vww],
					[MV, {
						N: 67,
						b: 50,
						W: -1,
						r: 1
					}, MN, MN, {
						N: 67,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 144,
						W: -1,
						r: 0
					}, MN, {
						N: 67,
						b: 50,
						W: -1,
						r: 3
					}],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 28,
						r: 3
					}, wv, MN, wv, {
						N: 62,
						b: 71,
						W: 19,
						r: 2
					}, vww],
					[MV, vww, {
						N: 62,
						b: 71,
						W: 21,
						r: 3
					}, wv, MN, wv, {
						N: 62,
						b: 71,
						W: 26,
						r: 2
					}, vww],
					[MV, vww, vww, vww, {
						N: 67,
						b: 50,
						W: -1,
						r: 0
					}, vww, vww, vww]
				]
			};
			NVv[vVW.MVwVW] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, MNV, MNV, MNV, MNV, MNV, MNV, MNV, MNV],
					[MV, MNV, {
						N: 62,
						b: 148,
						W: -1,
						r: 1
					}, wv, {
						N: 62,
						b: 71,
						W: 16,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 39,
						r: 1
					}, wv, {
						N: 62,
						b: 148,
						W: -1,
						r: 1
					}, MNV],
					[MV, MNV, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 31,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, MNV],
					[MV, MNV, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 69,
						W: -1,
						r: 1
					}, Wvw, Wvw, {
						N: 84,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, MNV],
					[MV, MNV, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 69,
						W: -1,
						r: 1
					}, Wvw, Wvw, {
						N: 84,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, MNV],
					[MV, MNV, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 69,
						W: -1,
						r: 1
					}, Wvw, Wvw, {
						N: 84,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, MNV],
					[MV, MNV, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 0
					}, MNV],
					[MV, MNV, {
						N: 62,
						b: 148,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, wv, wv, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 148,
						W: -1,
						r: 1
					}, MNV],
					[MV, MNV, MNV, MNV, {
						N: 84,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 84,
						b: 31,
						W: -1,
						r: 2
					}, MNV, MNV, MNV, {
						N: 0,
						b: 71,
						W: 17,
						r: 1
					}],
					[MV, MNV, {
						N: 84,
						b: 71,
						W: 8,
						r: 0
					}, {
						N: 84,
						b: 71,
						W: 8,
						r: 0
					}, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 8,
						r: 0
					}, {
						N: 84,
						b: 71,
						W: 8,
						r: 0
					}, MNV, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}],
					[MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}]
				]
			};
			NVv[vVW.NmvNn] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, MN, {
						N: 67,
						b: 148,
						W: -1,
						r: 0
					}, MN, MN, MN, {
						N: 67,
						b: 151,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 148,
						W: -1,
						r: 3
					}, MV, MV, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 26,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 26,
						r: 3
					}],
					[MV, WMN, {
						N: 67,
						b: 149,
						W: -1,
						r: 0
					}, WMN, {
						N: 67,
						b: 150,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 150,
						W: -1,
						r: 0
					}, WMN, {
						N: 67,
						b: 149,
						W: -1,
						r: 0
					}, wwm, wwm, vwM, vwM, vwM, vwM],
					[MV, vwM, {
						N: 62,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 151,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 143,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 143,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, wwm, {
						N: 84,
						b: 71,
						W: 23,
						r: 0
					}, {
						N: 84,
						b: 71,
						W: 28,
						r: 0
					}, {
						N: 84,
						b: 71,
						W: 28,
						r: 0
					}, vwM, {
						N: 0,
						b: 71,
						W: 16,
						r: 3
					}],
					[MV, vwM, wv, MN, MN, MN, MN, {
						N: 62,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 146,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 32,
						W: -1,
						r: 3
					}, Wvw, Wvw, Wvw, vwM],
					[MV, vwM, {
						N: 62,
						b: 71,
						W: 4,
						r: 3
					}, MN, {
						N: 67,
						b: 71,
						W: 7,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 7,
						r: 3
					}, MN, {
						N: 62,
						b: 71,
						W: 3,
						r: 1
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, vwM, vwM, vmw, vmw, vwM],
					[MV, vwM, {
						N: 62,
						b: 71,
						W: 3,
						r: 3
					}, MN, {
						N: 67,
						b: 71,
						W: 7,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 7,
						r: 3
					}, MN, {
						N: 62,
						b: 71,
						W: 4,
						r: 1
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 71,
						W: 21,
						r: 3
					}, {
						N: 85,
						b: 32,
						W: -1,
						r: 3
					}, vmw, vmw, vwM],
					[MV, vwM, wv, MN, MN, MN, MN, wv, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, vwM, vwM, vwM, vwM, vwM],
					[MV, vwM, {
						N: 62,
						b: 71,
						W: 23,
						r: 3
					}, wv, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 23,
						r: 3
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, vwM],
					[MV, WMN, WMN, WMN, {
						N: 67,
						b: 52,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 52,
						W: -1,
						r: 2
					}, WMN, WMN, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, WMN],
					[MV, WMN, {
						N: 67,
						b: 71,
						W: 27,
						r: 1
					}, MN, MN, MN, MN, {
						N: 67,
						b: 71,
						W: 16,
						r: 1
					}, {
						N: 67,
						b: 144,
						W: -1,
						r: 3
					}, WMN],
					[MV, {
						N: 67,
						b: 70,
						W: -1,
						r: 1
					}, MN, wv, wv, wv, MN, {
						N: 67,
						b: 71,
						W: 13,
						r: 0
					}, MN, WMN],
					[MV, {
						N: 67,
						b: 70,
						W: -1,
						r: 1
					}, MN, {
						N: 62,
						b: 71,
						W: 4,
						r: 3
					}, wv, wv, MN, {
						N: 67,
						b: 71,
						W: 9,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 10,
						r: 1
					}, WMN, {
						N: 0,
						b: 71,
						W: 17,
						r: 3
					}],
					[MV, WMN, {
						N: 67,
						b: 71,
						W: 27,
						r: 0
					}, wv, wv, {
						N: 62,
						b: 71,
						W: 3,
						r: 2
					}, MN, MN, MN, WMN, {
						N: 0,
						b: 71,
						W: 24,
						r: 2
					}],
					[MV, WMN, {
						N: 67,
						b: 71,
						W: 18,
						r: 0
					}, MN, MN, MN, MN, {
						N: 67,
						b: 71,
						W: 23,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 12,
						r: 3
					}, WMN],
					[MV, WMN, WMN, WMN, {
						N: 67,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 70,
						W: -1,
						r: 0
					}, WMN, WMN, WMN, WMN]
				]
			};
			NVv[vVW.vNNww] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 151,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 148,
						W: -1,
						r: 0
					}, MV, {
						N: 0,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 151,
						W: -1,
						r: 0
					}],
					[MV, WWNNn, WWNNn, {
						N: 0,
						b: 30,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 30,
						W: -1,
						r: 2
					}, WNM, WNM, {
						N: 67,
						b: 149,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 150,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 149,
						W: -1,
						r: 0
					}, WNM],
					[MV, WWNNn, {
						N: 0,
						b: 71,
						W: 23,
						r: 3
					}, MV, MV, WNM, {
						N: 67,
						b: 71,
						W: 9,
						r: 0
					}, {
						N: 67,
						b: 143,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 146,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 143,
						W: -1,
						r: 1
					}, WNM, {
						N: 0,
						b: 71,
						W: 17,
						r: 2
					}],
					[MV, WWNNn, {
						N: 0,
						b: 71,
						W: 26,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 16,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 17,
						r: 3
					}, WNM, {
						N: 67,
						b: 71,
						W: 10,
						r: 2
					}, {
						N: 67,
						b: 151,
						W: -1,
						r: 1
					}, MN, {
						N: 67,
						b: 151,
						W: -1,
						r: 1
					}, WNM, WNM, WNM],
					[MV, WWNNn, {
						N: 0,
						b: 144,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 144,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 144,
						W: -1,
						r: 3
					}, WNM, MN, MN, MN, MN, {
						N: 62,
						b: 71,
						W: 20,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 11,
						r: 0
					}, {
						N: 62,
						b: 70,
						W: -1,
						r: 3
					}],
					[MV, WNM, {
						N: 85,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 149,
						W: -1,
						r: 0
					}, WNM, {
						N: 62,
						b: 32,
						W: -1,
						r: 2
					}, wwm, {
						N: 67,
						b: 71,
						W: 8,
						r: 0
					}, MN, wv, wv, {
						N: 62,
						b: 70,
						W: -1,
						r: 3
					}],
					[MV, {
						N: 85,
						b: 70,
						W: -1,
						r: 1
					}, {
						N: 85,
						b: 147,
						W: -1,
						r: 2
					}, {
						N: 85,
						b: 146,
						W: -1,
						r: 2
					}, {
						N: 85,
						b: 140,
						W: -1,
						r: 2
					}, WNM, wv, {
						N: 62,
						b: 70,
						W: -1,
						r: 3
					}, MN, MN, wv, wv, {
						N: 62,
						b: 70,
						W: -1,
						r: 3
					}],
					[MV, WNM, {
						N: 85,
						b: 71,
						W: 31,
						r: 0
					}, {
						N: 85,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 85,
						b: 146,
						W: -1,
						r: 1
					}, {
						N: 85,
						b: 150,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 5,
						r: 2
					}, {
						N: 62,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 0,
						r: 2
					}, MN, {
						N: 62,
						b: 71,
						W: 10,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 7,
						r: 0
					}, {
						N: 62,
						b: 70,
						W: -1,
						r: 3
					}],
					[MV, WNM, WNM, WNM, WNM, WNM, WNM, WNM, WNM, {
						N: 85,
						b: 32,
						W: -1,
						r: 2
					}, WNM, WNM, WNM],
					[MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 17,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, WNM, {
						N: 85,
						b: 71,
						W: 28,
						r: 3
					}, vmw, vmw, WNM, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}],
					[MV, MV, MV, MV, MV, MV, WNM, {
						N: 85,
						b: 71,
						W: 21,
						r: 3
					}, vmw, {
						N: 85,
						b: 71,
						W: 18,
						r: 3
					}, WNM],
					[MV, MV, MV, MV, MV, MV, WNM, WNM, WNM, WNM, WNM]
				]
			};
			NVv[vVW.VMvVw] = {
				width: 0,
				height: 0,
				nvN: WvvwM,
				Vv: [
					[MV],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 111,
						W: -1,
						r: 3
					}, MV, MV, {
						N: 0,
						b: 111,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 111,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 111,
						W: -1,
						r: 3
					}, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 24,
						r: 0
					}, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, WNM, WNM, WNM, WNM, WNM, WNM, WNM, WNM, WNM, WNM, WNM, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, WMN, WMN, WMN, WMN, WMN, WMN, WMN, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, WNM, {
						N: 85,
						b: 71,
						W: 37,
						r: 1
					}, {
						N: 85,
						b: 71,
						W: 28,
						r: 0
					}, vmw, {
						N: 85,
						b: 71,
						W: 31,
						r: 1
					}, {
						N: 85,
						b: 71,
						W: 32,
						r: 1
					}, WNM, {
						N: 85,
						b: 71,
						W: 37,
						r: 1
					}, vmw, vmw, WNM, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, WMN, wv, {
						N: 62,
						b: 70,
						W: -1,
						r: 3
					}, MN, MN, {
						N: 62,
						b: 71,
						W: 13,
						r: 2
					}, WMN, Vvw, Vvw, Vvw, Vvw],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, WNM, vmw, vmw, vmw, vmw, vmw, WNM, vmw, vmw, {
						N: 85,
						b: 71,
						W: 36,
						r: 1
					}, WNM, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 23,
						r: 0
					}, WMN, wv, {
						N: 62,
						b: 71,
						W: 40,
						r: 2
					}, MN, MN, {
						N: 62,
						b: 71,
						W: 12,
						r: 2
					}, WMN, {
						N: 84,
						b: 71,
						W: 26,
						r: 3
					}, {
						N: 84,
						b: 71,
						W: 17,
						r: 3
					}, Wvw, Vvw],
					[MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}, Vvw, Vvw, {
						N: 84,
						b: 52,
						W: -1,
						r: 0
					}, Vvw, Vvw, WNM, WNM, Vvw, {
						N: 85,
						b: 71,
						W: 41,
						r: 0
					}, Vvw, {
						N: 85,
						b: 71,
						W: 41,
						r: 0
					}, WNM, vwM, WNM, WNM, WNM, WNM, WNM, WNM, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 151,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 150,
						W: -1,
						r: 1
					}, MN, MN, MN, MN, wv, WMN, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 18,
						r: 2
					}, Vvw],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, Vvw, Wvw, Wvw, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 35,
						r: 2
					}, {
						N: 84,
						b: 71,
						W: 35,
						r: 2
					}, Wvw, Wvw, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 35,
						r: 2
					}, {
						N: 84,
						b: 71,
						W: 35,
						r: 2
					}, Wvw, Wvw, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 33,
						r: 2
					}, WNM, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 151,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 150,
						W: -1,
						r: 1
					}, MN, MN, MN, MN, wv, {
						N: 67,
						b: 71,
						W: 41,
						r: 1
					}, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 18,
						r: 2
					}, Vvw],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, Vvw, {
						N: 84,
						b: 71,
						W: 9,
						r: 0
					}, Wvw, Wvw, Wvw, Wvw, Wvw, {
						N: 84,
						b: 151,
						W: -1,
						r: 1
					}, Wvw, Wvw, {
						N: 84,
						b: 151,
						W: -1,
						r: 1
					}, Wvw, Wvw, Wvw, Wvw, Wvw, Wvw, {
						N: 85,
						b: 71,
						W: 33,
						r: 2
					}, WNM, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 23,
						r: 0
					}, WMN, {
						N: 62,
						b: 71,
						W: 39,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 39,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 23,
						r: 3
					}, wv, {
						N: 62,
						b: 71,
						W: 23,
						r: 2
					}, WMN, {
						N: 84,
						b: 71,
						W: 26,
						r: 2
					}, Wvw, {
						N: 84,
						b: 71,
						W: 16,
						r: 2
					}, Vvw, {
						N: 0,
						b: 71,
						W: 16,
						r: 1
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, Vvw, {
						N: 84,
						b: 71,
						W: 10,
						r: 2
					}, Wvw, Wvw, Wvw, Vvw, Vvw, {
						N: 84,
						b: 149,
						W: -1,
						r: 2
					}, {
						N: 85,
						b: 150,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 150,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 149,
						W: -1,
						r: 2
					}, Vvw, Vvw, Wvw, Wvw, WNM, Vvw, WNM, WNM, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, WMN, WMN, WMN, WMN, {
						N: 0,
						b: 52,
						W: -1,
						r: 0
					}, WMN, WMN, Vvw, Vvw, Vvw, Vvw],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, Vvw, Vvw, Vvw, {
						N: 84,
						b: 71,
						W: 33,
						r: 0
					}, Wvw, Vvw, {
						N: 84,
						b: 71,
						W: 32,
						r: 0
					}, {
						N: 84,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 84,
						b: 140,
						W: -1,
						r: 1
					}, {
						N: 85,
						b: 146,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 142,
						W: -1,
						r: 2
					}, {
						N: 84,
						b: 151,
						W: -1,
						r: 2
					}, {
						N: 84,
						b: 150,
						W: -1,
						r: 1
					}, Wvw, {
						N: 84,
						b: 71,
						W: 33,
						r: 2
					}, WNM, {
						N: 0,
						b: 71,
						W: 37,
						r: 1
					}, {
						N: 0,
						b: 71,
						W: 38,
						r: 1
					}, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, Wvw, Wvw, {
						N: 0,
						b: 71,
						W: 17,
						r: 0
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, Vvw, {
						N: 84,
						b: 71,
						W: 22,
						r: 0
					}, Wvw, Vvw, Wvw, {
						N: 84,
						b: 71,
						W: 34,
						r: 3
					}, vmw, {
						N: 85,
						b: 140,
						W: -1,
						r: 2
					}, {
						N: 84,
						b: 71,
						W: 34,
						r: 3
					}, Wvw, Vvw, Wvw, {
						N: 84,
						b: 71,
						W: 38,
						r: 0
					}, WNM, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 32,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 24,
						r: 0
					}],
					[MV, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 17,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 86,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 24,
						r: 0
					}, MV, Vvw, vwM, {
						N: 84,
						b: 32,
						W: -1,
						r: 0
					}, Vvw, {
						N: 84,
						b: 142,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 146,
						W: -1,
						r: 1
					}, {
						N: 85,
						b: 146,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 142,
						W: -1,
						r: 1
					}, Vvw, {
						N: 84,
						b: 32,
						W: -1,
						r: 0
					}, vwM, WNM, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 35,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 31,
						r: 0
					}],
					[MV, MV, MV, WNM, WNM, WNM, WNM, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 0,
						b: 70,
						W: -1,
						r: 3
					}, vmw, vmw, Vvw, {
						N: 84,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 71,
						W: 34,
						r: 1
					}, {
						N: 85,
						b: 140,
						W: -1,
						r: 2
					}, vmw, {
						N: 84,
						b: 71,
						W: 34,
						r: 1
					}, {
						N: 84,
						b: 140,
						W: -1,
						r: 2
					}, Vvw, vmw, vmw, {
						N: 0,
						b: 70,
						W: -1,
						r: 1
					}, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 71,
						W: 23,
						r: 0
					}, MV, MV, MV, wv],
					[MV, MV, MV, WNM, {
						N: 85,
						b: 71,
						W: 33,
						r: 1
					}, {
						N: 85,
						b: 71,
						W: 33,
						r: 1
					}, WNM, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 85,
						b: 70,
						W: -1,
						r: 2
					}, Wvw, {
						N: 84,
						b: 144,
						W: -1,
						r: 1
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 1
					}, {
						N: 84,
						b: 145,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 142,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 146,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 147,
						W: -1,
						r: 3
					}, {
						N: 84,
						b: 142,
						W: -1,
						r: 1
					}, {
						N: 84,
						b: 146,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 3
					}, {
						N: 84,
						b: 144,
						W: -1,
						r: 1
					}, Wvw, {
						N: 85,
						b: 70,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 70,
						W: -1,
						r: 1
					}, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, VWW, VWW, {
						N: 67,
						b: 30,
						W: -1,
						r: 2
					}, VWW, VWW, wv, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}],
					[MV, MV, MV, Vvw, Wvw, Wvw, Vvw, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 32,
						W: -1,
						r: 3
					}, vmw, vmw, vmw, Vvw, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 85,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, Vvw, vmw, vmw, vmw, {
						N: 0,
						b: 32,
						W: -1,
						r: 1
					}, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}, VWW, MN, MN, {
						N: 67,
						b: 71,
						W: 6,
						r: 1
					}, VWW, wv, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, MN, MN, MV, MV, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}],
					[MV, MV, MV, {
						N: 84,
						b: 71,
						W: 41,
						r: 1
					}, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 41,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 85,
						b: 70,
						W: -1,
						r: 0
					}, Wvw, Wvw, Wvw, {
						N: 84,
						b: 144,
						W: -1,
						r: 1
					}, {
						N: 84,
						b: 144,
						W: -1,
						r: 1
					}, Wvw, Wvw, {
						N: 84,
						b: 144,
						W: -1,
						r: 1
					}, {
						N: 84,
						b: 144,
						W: -1,
						r: 1
					}, Wvw, Wvw, Wvw, {
						N: 85,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 70,
						W: -1,
						r: 1
					}, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 67,
						b: 30,
						W: -1,
						r: 1
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 19,
						r: 2
					}, vww, wv, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, MN, MN, MV, MV, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}],
					[MV, MV, MV, WNM, {
						N: 85,
						b: 71,
						W: 36,
						r: 2
					}, {
						N: 85,
						b: 71,
						W: 37,
						r: 3
					}, WNM, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 0,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 85,
						b: 71,
						W: 39,
						r: 0
					}, vmw, vmw, vmw, vmw, vmw, vmw, vmw, vmw, vmw, vmw, {
						N: 85,
						b: 71,
						W: 35,
						r: 1
					}, {
						N: 0,
						b: 70,
						W: -1,
						r: 1
					}, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, VWW, {
						N: 67,
						b: 71,
						W: 8,
						r: 3
					}, MN, {
						N: 67,
						b: 71,
						W: 0,
						r: 1
					}, VWW, wv, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 71,
						W: 23,
						r: 1
					}, {
						N: 67,
						b: 71,
						W: 23,
						r: 1
					}, MV, MV, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}],
					[MV, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}, WNM, WNM, WNM, WNM, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 0,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 32,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 32,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 70,
						W: -1,
						r: 1
					}, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 23,
						r: 0
					}, VWW, VWW, VWW, VWW, VWW, wv, nnM, nnM, nnM, nnM, MV, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, wv, wv, wv, wv, wv, wv, wv, nnM, wv, {
						N: 62,
						b: 71,
						W: 21,
						r: 1
					}, NV, MN, MN, MN, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}],
					[{
						N: 0,
						b: 86,
						W: 26,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 33,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 32,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 33,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 32,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 24,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 2
					}, nnM, nnM, nnM, {
						N: 62,
						b: 31,
						W: -1,
						r: 0
					}, NV, NV, {
						N: 67,
						b: 51,
						W: -1,
						r: 2
					}, nnM, nnM, nnM, nnM],
					[{
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 28,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, nnM, {
						N: 67,
						b: 71,
						W: 13,
						r: 1
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 27,
						r: 1
					}, MN, MN, nnM, {
						N: 67,
						b: 71,
						W: 23,
						r: 3
					}, MN, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}],
					[{
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 27,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, wv, {
						N: 67,
						b: 31,
						W: -1,
						r: 1
					}, MN, MN, MN, MN, MN, MN, nnM, MN, MN, {
						N: 67,
						b: 31,
						W: -1,
						r: 3
					}],
					[{
						N: 0,
						b: 86,
						W: 30,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 42,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 43,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 34,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 62,
						b: 71,
						W: 23,
						r: 0
					}, nnM, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, MN, MN, nnM, {
						N: 67,
						b: 31,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, nnM, {
						N: 0,
						b: 71,
						W: 16,
						r: 1
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 7,
						r: 0
					}, MV, MV, MV, MV, MV, MV, {
						N: 84,
						b: 71,
						W: 23,
						r: 0
					}, {
						N: 84,
						b: 151,
						W: -1,
						r: 0
					}, {
						N: 84,
						b: 71,
						W: 23,
						r: 0
					}, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 0
					}, nnM, {
						N: 67,
						b: 71,
						W: 15,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 4,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 3,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 14,
						r: 0
					}, MN, MN, MN, MN, MN, nnM, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}],
					[MV, MV, vww, {
						N: 62,
						b: 71,
						W: 26,
						r: 1
					}, wv, wv, vww, {
						N: 62,
						b: 71,
						W: 16,
						r: 2
					}, wv, wv, vww, {
						N: 0,
						b: 31,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 31,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, MV, {
						N: 0,
						b: 86,
						W: 15,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, MV, MV, MV, wwm, wwm, wwm, {
						N: 62,
						b: 150,
						W: -1,
						r: 3
					}, wwm, wwm, wwm, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 71,
						W: 23,
						r: 0
					}, nnM, {
						N: 67,
						b: 71,
						W: 4,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 7,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 7,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 3,
						r: 1
					}, MN, wv, wv, wv, MN, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}],
					[MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, vww, {
						N: 62,
						b: 71,
						W: 17,
						r: 1
					}, wv, {
						N: 62,
						b: 71,
						W: 22,
						r: 1
					}, vww, {
						N: 62,
						b: 71,
						W: 17,
						r: 2
					}, wv, {
						N: 62,
						b: 71,
						W: 15,
						r: 1
					}, vww, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, wwm, {
						N: 62,
						b: 71,
						W: 16,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 39,
						r: 1
					}, wv, wv, wv, wwm, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 148,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, MN, MN, MN, MN, MN, wv, wv, wv, MN, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}],
					[MV, MV, vww, {
						N: 62,
						b: 71,
						W: 10,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 0,
						r: 1
					}, vww, {
						N: 62,
						b: 71,
						W: 1,
						r: 3
					}, wv, {
						N: 62,
						b: 71,
						W: 8,
						r: 1
					}, vww, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, vwM, Vvw, Vvw, wwm, wv, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 27,
						r: 2
					}, wwm, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 23,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 27,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 8,
						r: 2
					}, {
						N: 67,
						b: 71,
						W: 27,
						r: 3
					}, MN, MN, MN, MN, {
						N: 67,
						b: 71,
						W: 12,
						r: 2
					}, nnM],
					[MV, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}, vww, {
						N: 62,
						b: 71,
						W: 9,
						r: 2
					}, wv, wv, vww, wv, wv, {
						N: 62,
						b: 71,
						W: 12,
						r: 2
					}, WWNNn, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 16,
						r: 2
					}, Vvw, {
						N: 84,
						b: 71,
						W: 16,
						r: 1
					}, {
						N: 84,
						b: 71,
						W: 19,
						r: 1
					}, Vvw, {
						N: 62,
						b: 32,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 70,
						W: -1,
						r: 0
					}, wv, wv, {
						N: 62,
						b: 71,
						W: 39,
						r: 2
					}, wwm, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 148,
						W: -1,
						r: 0
					}, nnM, nnM, nnM, nnM, nnM, {
						N: 67,
						b: 31,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 31,
						W: -1,
						r: 0
					}, nnM, nnM, nnM, nnM, {
						N: 0,
						b: 71,
						W: 24,
						r: 1
					}],
					[MV, {
						N: 0,
						b: 71,
						W: 17,
						r: 0
					}, WWNNn, vww, vww, vww, vww, vww, vww, WWNNn, WWNNn, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 0,
						b: 71,
						W: 17,
						r: 0
					}, Vvw, Wvw, Wvw, Vvw, MN, {
						N: 67,
						b: 70,
						W: -1,
						r: 3
					}, wv, wv, wv, wwm, {
						N: 84,
						b: 71,
						W: 23,
						r: 0
					}, Wvw, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 140,
						W: -1,
						r: 0
					}, nnM, {
						N: 62,
						b: 71,
						W: 20,
						r: 1
					}, wv, {
						N: 62,
						b: 71,
						W: 28,
						r: 0
					}, NV, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 20,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 13,
						r: 1
					}, NV],
					[MV, MV, MV, NV, NV, NV, NV, NV, NV, wv, wv, wv, wv, {
						N: 62,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, Vvw, Wvw, Wvw, WMN, MN, {
						N: 67,
						b: 70,
						W: -1,
						r: 3
					}, wv, wv, wv, {
						N: 62,
						b: 150,
						W: -1,
						r: 3
					}, {
						N: 84,
						b: 151,
						W: -1,
						r: 0
					}, Wvw, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 69,
						W: -1,
						r: 1
					}, wv, wv, wv, {
						N: 62,
						b: 31,
						W: -1,
						r: 3
					}, wv, wv, wv, wv, wv, {
						N: 0,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, NV, {
						N: 62,
						b: 71,
						W: 6,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 14,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 15,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 5,
						r: 0
					}, NV, {
						N: 62,
						b: 71,
						W: 23,
						r: 2
					}, wv, wv, wv, {
						N: 62,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 16,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, Vvw, {
						N: 84,
						b: 71,
						W: 18,
						r: 3
					}, Wvw, {
						N: 67,
						b: 150,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 71,
						W: 40,
						r: 2
					}, wv, wv, wv, {
						N: 62,
						b: 150,
						W: -1,
						r: 3
					}, {
						N: 84,
						b: 151,
						W: -1,
						r: 3
					}, Wvw, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 143,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 144,
						W: -1,
						r: 3
					}, wv, wv, {
						N: 62,
						b: 31,
						W: -1,
						r: 3
					}, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 12,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 12,
						r: 3
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, MV, MV, NV, wv, wv, wv, wv, NV, nnM, {
						N: 67,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 31,
						W: -1,
						r: 2
					}, nnM, nnM, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 13,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, Vvw, Vvw, Vvw, WMN, {
						N: 67,
						b: 144,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 70,
						W: -1,
						r: 3
					}, wv, wv, {
						N: 62,
						b: 71,
						W: 39,
						r: 2
					}, wwm, {
						N: 84,
						b: 71,
						W: 23,
						r: 0
					}, Wvw, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 140,
						W: -1,
						r: 0
					}, NV, NV, NV, NV, NV, {
						N: 67,
						b: 31,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 31,
						W: -1,
						r: 2
					}, nnM, nnM, nnM, nnM, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}],
					[MV, MV, MV, NV, {
						N: 62,
						b: 71,
						W: 0,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 2,
						r: 0
					}, wv, wv, {
						N: 67,
						b: 31,
						W: -1,
						r: 1
					}, MN, MN, MN, {
						N: 67,
						b: 71,
						W: 23,
						r: 0
					}, nnM, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, WMN, {
						N: 67,
						b: 148,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 151,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 151,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 27,
						r: 2
					}, wwm, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 140,
						W: -1,
						r: 1
					}, {
						N: 0,
						b: 148,
						W: -1,
						r: 0
					}, nnM, {
						N: 67,
						b: 71,
						W: 16,
						r: 1
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 26,
						r: 1
					}, {
						N: 67,
						b: 71,
						W: 23,
						r: 2
					}, {
						N: 67,
						b: 71,
						W: 17,
						r: 1
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}],
					[MV, MV, MV, NV, wv, wv, wv, wv, NV, {
						N: 67,
						b: 71,
						W: 12,
						r: 0
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 12,
						r: 2
					}, nnM, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, MV, MV, MV, WMN, WMN, WMN, {
						N: 62,
						b: 150,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 150,
						W: -1,
						r: 3
					}, wwm, wwm, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, MV, MV, wv, wv, {
						N: 67,
						b: 31,
						W: -1,
						r: 1
					}, MN, MN, MN, MN, MN, MN, {
						N: 67,
						b: 31,
						W: -1,
						r: 3
					}],
					[MV, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, NV, {
						N: 62,
						b: 71,
						W: 1,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 8,
						r: 2
					}, wv, {
						N: 62,
						b: 71,
						W: 23,
						r: 2
					}, NV, {
						N: 67,
						b: 71,
						W: 23,
						r: 2
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 20,
						r: 2
					}, nnM, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, MV, MV, MV, MV, MV, {
						N: 84,
						b: 71,
						W: 23,
						r: 0
					}, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 23,
						r: 0
					}, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, MV, MV, wv, wv, {
						N: 67,
						b: 31,
						W: -1,
						r: 1
					}, MN, MN, MN, MN, MN, MN, {
						N: 67,
						b: 31,
						W: -1,
						r: 3
					}],
					[MV, MV, MV, NV, NV, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 0
					}, NV, NV, nnM, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 0
					}, nnM, nnM, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, MV, MV, MV, MV, MV, Wvw, Wvw, Wvw, Wvw, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 21,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 20,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 15,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 36,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 4,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 45,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 32,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 25,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 24,
						r: 0
					}],
					[{
						N: 0,
						b: 86,
						W: 17,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 4,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 5,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 3,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 37,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 35,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 29,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 31,
						r: 0
					}],
					[{
						N: 0,
						b: 86,
						W: 16,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 11,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 10,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 9,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 38,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 1,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 34,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MN, MN, MN, {
						N: 67,
						b: 151,
						W: -1,
						r: 1
					}, MN, MN, MN],
					[{
						N: 0,
						b: 86,
						W: 40,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 0,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 39,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, MV, MV, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, NV, NV, MNV, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, NV, NV, NV, {
						N: 0,
						b: 71,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, MN, MN, MN, NV, {
						N: 62,
						b: 71,
						W: 27,
						r: 1
					}, {
						N: 62,
						b: 71,
						W: 27,
						r: 1
					}, wv, wv, wv, {
						N: 62,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 111,
						W: -1,
						r: 1
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 111,
						W: -1,
						r: 1
					}, MV, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, WMN, WMN, WMN, WMN, WMN, WMN, WMN, WMN, wwm, wwm, wwm, wwm, wwm, wwm, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, MN, MN, MN, {
						N: 62,
						b: 31,
						W: -1,
						r: 1
					}, wv, wv, wv, wv, wv, {
						N: 62,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 67,
						b: 151,
						W: -1,
						r: 1
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 148,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 151,
						W: -1,
						r: 1
					}],
					[MV, WMN, {
						N: 67,
						b: 71,
						W: 35,
						r: 2
					}, MN, {
						N: 67,
						b: 142,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 146,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 146,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 140,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 140,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 150,
						W: -1,
						r: 1
					}, wv, wv, {
						N: 62,
						b: 71,
						W: 17,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 16,
						r: 1
					}, wwm, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 3,
						r: 1
					}, NV, {
						N: 62,
						b: 71,
						W: 22,
						r: 2
					}, {
						N: 62,
						b: 71,
						W: 20,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 11,
						r: 2
					}, wv, NV, NV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 111,
						W: -1,
						r: 1
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 111,
						W: -1,
						r: 1
					}, MV, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}],
					[MV, WMN, MN, {
						N: 67,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 149,
						W: -1,
						r: 2
					}, vwM, vwM, wwm, wv, wv, wv, wv, wwm, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}, {
						N: 67,
						b: 71,
						W: 23,
						r: 3
					}, nnM, nnM, NV, NV, NV, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 2
					}, NV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, {
						N: 67,
						b: 69,
						W: -1,
						r: 3
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 140,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 69,
						W: -1,
						r: 1
					}],
					[{
						N: 0,
						b: 71,
						W: 24,
						r: 1
					}, WMN, MN, {
						N: 67,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 151,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 151,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 151,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 146,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 150,
						W: -1,
						r: 1
					}, wv, {
						N: 62,
						b: 71,
						W: 10,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 7,
						r: 3
					}, wv, {
						N: 62,
						b: 32,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, {
						N: 0,
						b: 69,
						W: -1,
						r: 2
					}, MNV, {
						N: 62,
						b: 71,
						W: 14,
						r: 0
					}, {
						N: 62,
						b: 71,
						W: 5,
						r: 0
					}, wv, wv, wv, wv, NV, {
						N: 0,
						b: 71,
						W: 16,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}, MV, MN, {
						N: 67,
						b: 71,
						W: 45,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 45,
						r: 0
					}, {
						N: 67,
						b: 151,
						W: -1,
						r: 1
					}, MN, MN, {
						N: 67,
						b: 71,
						W: 24,
						r: 1
					}],
					[MV, WMN, MN, {
						N: 67,
						b: 70,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 70,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 140,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 149,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, wv, {
						N: 62,
						b: 71,
						W: 7,
						r: 3
					}, wv, {
						N: 62,
						b: 32,
						W: -1,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, {
						N: 0,
						b: 71,
						W: 16,
						r: 0
					}, NV, wv, wv, wv, wv, wv, {
						N: 62,
						b: 71,
						W: 13,
						r: 2
					}, NV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}],
					[{
						N: 0,
						b: 71,
						W: 17,
						r: 1
					}, WMN, MN, MN, {
						N: 67,
						b: 71,
						W: 3,
						r: 0
					}, {
						N: 67,
						b: 148,
						W: -1,
						r: 3
					}, WMN, {
						N: 67,
						b: 146,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 147,
						W: -1,
						r: 3
					}, {
						N: 62,
						b: 149,
						W: -1,
						r: 1
					}, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, wv, wv, wv, wwm, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, {
						N: 0,
						b: 71,
						W: 26,
						r: 0
					}, NV, {
						N: 62,
						b: 71,
						W: 12,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 23,
						r: 3
					}, wv, wv, {
						N: 62,
						b: 71,
						W: 10,
						r: 3
					}, {
						N: 62,
						b: 71,
						W: 9,
						r: 1
					}, NV, {
						N: 0,
						b: 71,
						W: 17,
						r: 3
					}, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}],
					[{
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}, WMN, MN, wv, wv, {
						N: 67,
						b: 146,
						W: -1,
						r: 0
					}, WMN, {
						N: 67,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 1
					}, vwM, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, wv, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 144,
						W: -1,
						r: 0
					}, wwm, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, MV, NV, NV, NV, {
						N: 62,
						b: 31,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 31,
						W: -1,
						r: 0
					}, NV, NV, NV, MV, MV, {
						N: 0,
						b: 86,
						W: 23,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 22,
						r: 0
					}],
					[MV, WMN, MN, wv, wv, {
						N: 67,
						b: 71,
						W: 10,
						r: 0
					}, WMN, {
						N: 67,
						b: 71,
						W: 14,
						r: 3
					}, {
						N: 67,
						b: 140,
						W: -1,
						r: 0
					}, wwm, {
						N: 62,
						b: 149,
						W: -1,
						r: 0
					}, wwm, {
						N: 62,
						b: 149,
						W: -1,
						r: 0
					}, {
						N: 62,
						b: 149,
						W: -1,
						r: 0
					}, wwm, {
						N: 0,
						b: 71,
						W: 16,
						r: 1
					}, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}, MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 71,
						W: 24,
						r: 1
					}, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 30,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 31,
						r: 0
					}],
					[MV, WMN, {
						N: 67,
						b: 71,
						W: 36,
						r: 2
					}, {
						N: 67,
						b: 151,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 71,
						W: 12,
						r: 3
					}, {
						N: 67,
						b: 71,
						W: 9,
						r: 2
					}, WMN, {
						N: 67,
						b: 71,
						W: 16,
						r: 2
					}, {
						N: 67,
						b: 140,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 71,
						W: 17,
						r: 3
					}, {
						N: 67,
						b: 147,
						W: -1,
						r: 2
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 0
					}, {
						N: 67,
						b: 146,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 2
					}, vwM, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}],
					[MV, WMN, WMN, {
						N: 67,
						b: 150,
						W: -1,
						r: 2
					}, WMN, WMN, WMN, {
						N: 67,
						b: 71,
						W: 23,
						r: 2
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 140,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 146,
						W: -1,
						r: 3
					}, {
						N: 67,
						b: 142,
						W: -1,
						r: 2
					}, MN, {
						N: 67,
						b: 71,
						W: 23,
						r: 2
					}, vwM, {
						N: 0,
						b: 71,
						W: 24,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}],
					[MV, MV, {
						N: 0,
						b: 71,
						W: 16,
						r: 2
					}, {
						N: 0,
						b: 71,
						W: 16,
						r: 1
					}, {
						N: 0,
						b: 71,
						W: 17,
						r: 1
					}, {
						N: 0,
						b: 71,
						W: 26,
						r: 1
					}, vwM, vwM, vwM, vwM, vwM, vwM, vwM, vwM, vwM, MV, {
						N: 0,
						b: 86,
						W: 14,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 12,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 6,
						r: 0
					}],
					[MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, MV, {
						N: 0,
						b: 86,
						W: 40,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 1,
						r: 0
					}, {
						N: 0,
						b: 86,
						W: 41,
						r: 0
					}]
				]
			};
			NVv[vVW.NvMnm] = {
				width: 0,
				height: 0,
				nvN: 0,
				Vv: [
					[MV],
					[MV, MV, MV, MV, MV, MV, vv, vv, vv, MV, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, vv, vv, MV, MV, MV, MV, MV, MV, MV, MV, MV, vv, vv, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, MV, MV, MV, MV, vv, WmW, WmW, {
						N: 85,
						b: 52,
						W: -1,
						r: 2
					}, WmW, WmW, MV, MV, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, MV, MV, vv, vv, vv, vv, WmW, vmw, vmw, vmw, WmW, vv, MV, MV, vv, vv, vv, vv, vv, vv],
					[MV, MV, vv, vv, vv, vv, WmW, WmW, WmW, WmW, vmw, vmw, vmw, WmW, vv, vv, MV, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, vv, WmW, {
						N: 85,
						b: 71,
						W: 9,
						r: 0
					}, {
						N: 85,
						b: 71,
						W: 58,
						r: 0
					}, WmW, {
						N: 85,
						b: 71,
						W: 33,
						r: 3
					}, vmw, {
						N: 85,
						b: 71,
						W: 33,
						r: 3
					}, WmW, vv, vv, MV, vv, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, vv, WmW, {
						N: 85,
						b: 71,
						W: 10,
						r: 2
					}, vmw, WmW, WmW, Wvw, nvNVw, nvNVw, MNWmn, vv, MV, MV, vv, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, vv, WmW, vmw, vmw, Wvw, Wvw, Wvw, Wvw, {
						N: 84,
						b: 71,
						W: 51,
						r: 1
					}, nvNVw, vv, vv, MV, MV, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, WmW, WmW, WmW, WmW, WmW, Wvw, Wvw, Wvw, Wvw, nvNVw, MNWmn, vv, vv, MV, vv, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, WmW, Wvw, Wvw, Wvw, WmW, WmW, Wvw, Wvw, Wvw, nvNVw, WmW, WmW, vv, MV, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, WmW, Wvw, WmW, Wvw, Wvw, Wvw, Wvw, WmW, vmw, vmw, {
						N: 85,
						b: 71,
						W: 55,
						r: 2
					}, WmW, vv, MV, vv, vv, vv, vv],
					[MV, vv, vv, vv, vv, WmW, Wvw, WmW, WmW, WmW, WmW, Wvw, WmW, {
						N: 85,
						b: 71,
						W: 28,
						r: 3
					}, vmw, {
						N: 85,
						b: 71,
						W: 21,
						r: 1
					}, WmW, vv, MV, MV, vv, vv],
					[MV, vv, vv, vv, vv, WmW, vmw, {
						N: 85,
						b: 71,
						W: 23,
						r: 1
					}, {
						N: 85,
						b: 71,
						W: 53,
						r: 3
					}, {
						N: 85,
						b: 71,
						W: 56,
						r: 2
					}, WmW, Wvw, WmW, WmW, WmW, WmW, WmW, vv, MV, MV, vv, vv, vv],
					[MV, MV, MV, vv, vv, WmW, vmw, vmw, vmw, {
						N: 85,
						b: 71,
						W: 53,
						r: 2
					}, WmW, Wvw, Wvw, vmw, {
						N: 85,
						b: 71,
						W: 51,
						r: 0
					}, {
						N: 85,
						b: 71,
						W: 48,
						r: 0
					}, WmW, vv, vv],
					[MV, vv, vv, vv, vv, WmW, vmw, vmw, vmw, vmw, WmW, WmW, WmW, vmw, vmw, vmw, WmW, vv, vv, vv],
					[MV, vv, vv, vv, vv, WmW, {
						N: 85,
						b: 71,
						W: 20,
						r: 3
					}, {
						N: 85,
						b: 71,
						W: 11,
						r: 2
					}, {
						N: 85,
						b: 71,
						W: 49,
						r: 3
					}, vmw, {
						N: 85,
						b: 71,
						W: 54,
						r: 2
					}, WmW, WmW, {
						N: 85,
						b: 71,
						W: 48,
						r: 2
					}, {
						N: 85,
						b: 71,
						W: 50,
						r: 2
					}, {
						N: 85,
						b: 71,
						W: 49,
						r: 3
					}, WmW, vv, vv, vv, vv, vv, vv],
					[MV, MV, vv, vv, vv, WmW, WmW, WmW, WmW, WmW, WmW, WmW, WmW, WmW, WmW, WmW, WmW, vv, vv, vv, vv, vv, vv],
					[MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv, vv],
					[MV, MV, MV, MV, vv, vv, vv, MV, MV, MV, MV, vv, vv, vv, vv, vv]
				]
			};
		}
	} catch (error) {};
	for (var mN = 0; mN < NVv.length; mN++) {
		var vWMNm = NVv[mN];
		var vMmNw = NVv[mN].Vv;
		vWMNm.height = vMmNw.length;
		for (var NM = 0; NM < vMmNw.length; NM++) vWMNm.width = Math.max(vMmNw[NM].length, vWMNm.width);
	}
	var Mvmvn = [];
	Mvmvn[Mw.mww] = MM.NWnNn;
	Mvmvn[Mw.WnM] = MM.wvv;
	Mvmvn[Mw.nnw] = MM.nnw;
	Mvmvn[Mw.NnM] = MM.NnM;
	Mvmvn[Mw.nmV] = MM.nmV;
	Mvmvn[Mw.wnn] = MM.wnn;
	Mvmvn[Mw.Mvm] = MM.Mvm;
	Mvmvn[Mw.MmN] = MM.MmN;
	Mvmvn[Mw.WMm] = MM.WMm;
	Mvmvn[Mw.MWn] = MM.MWn;
	var NVwNv = null;
	var NVvmm = null;
	var wMvWv = null;
	var mVMVW = null;
	var vmwwm = null;
	var MmNnW = null;
	var vmMmN = null;
	var NVnNV = "#38513D";
	var vWnMV = "#0B1D23";
	var mMWnW = [{
		id: MM.mvM,
		nW: 50,
		Nv: 255
	}, {
		id: MM.vWM,
		nW: 100,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}];
	var wvW = [];
	Mn = 0;
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mvM,
		nW: 20,
		Nv: 255
	}, {
		id: MM.vWM,
		nW: 40,
		Nv: 255
	}, {
		id: MM.VNn,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mvM,
		nW: 20,
		Nv: 255
	}, {
		id: MM.vWM,
		nW: 40,
		Nv: 255
	}, {
		id: MM.VNn,
		nW: 3,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mvM,
		nW: 30,
		Nv: 255
	}, {
		id: MM.vWM,
		nW: 50,
		Nv: 255
	}, {
		id: MM.NWnNn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.VNn,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mvM,
		nW: 30,
		Nv: 255
	}, {
		id: MM.vWM,
		nW: 60,
		Nv: 255
	}, {
		id: MM.NWnNn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.VNn,
		nW: 5,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mvM,
		nW: 40,
		Nv: 255
	}, {
		id: MM.vWM,
		nW: 90,
		Nv: 255
	}, {
		id: MM.NWnNn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mvM,
		nW: 40,
		Nv: 255
	}, {
		id: MM.vWM,
		nW: 150,
		Nv: 255
	}, {
		id: MM.NWnNn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NWnNn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 2,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NWnNn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WWN,
		nW: 6,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 2,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wnWVN,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 3,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvmnM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.VNnWV,
		nW: 20,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nMN,
		nW: 10,
		Nv: 255
	}, {
		id: MM.VwnVN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nMN,
		nW: 16,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 2,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 14,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 2,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nVwWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 14,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 2,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.vvNww,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 14,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 2,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mnV,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 16,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 2,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 16,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nnw,
		nW: 2,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.VvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 16,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.WvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 16,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 2,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.WvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 2,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 20,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 4,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 2,
		Nv: 255
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.Vmm,
		nW: 4,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.WvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wvv,
		nW: 2,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 26,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 6,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.MvNwM,
		nW: 8,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.WvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WnW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 26,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 6,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.MvNwM,
		nW: 8,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.WvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mWW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WnW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 26,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 6,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.VvV,
		nW: 1,
		Nv: 20
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WnW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 26,
		Nv: 255
	}, {
		id: MM.nWN,
		nW: 6,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.VvV,
		nW: 1,
		Nv: 20
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WvM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WnW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 26,
		Nv: 255
	}, {
		id: MM.wnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.VvV,
		nW: 1,
		Nv: 20
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mMW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.WnW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 26,
		Nv: 255
	}, {
		id: MM.wnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.VvV,
		nW: 1,
		Nv: 20
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mMW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.MVM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.NVw,
		nW: 26,
		Nv: 255
	}, {
		id: MM.wnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.VvV,
		nW: 1,
		Nv: 20
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mMW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.MVM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wMM,
		nW: 14,
		Nv: 255
	}, {
		id: MM.wnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.VvV,
		nW: 1,
		Nv: 20
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mMW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.MVM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wMM,
		nW: 14,
		Nv: 255
	}, {
		id: MM.wnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nVm,
		nW: 3,
		Nv: 255
	}, {
		id: MM.vvWwv,
		nW: 1,
		Nv: 7
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mMW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.MVM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wMM,
		nW: 14,
		Nv: 255
	}, {
		id: MM.wnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.VnmMw,
		nW: 6,
		Nv: 255
	}, {
		id: MM.vvWwv,
		nW: 1,
		Nv: 7
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	wvW[Mn++] = [{
		id: MM.Nnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.mMW,
		nW: 1,
		Nv: 255
	}, {
		id: MM.MVM,
		nW: 1,
		Nv: 255
	}, {
		id: MM.wMM,
		nW: 20,
		Nv: 255
	}, {
		id: MM.wnn,
		nW: 1,
		Nv: 255
	}, {
		id: MM.nVwWW,
		nW: 6,
		Nv: 255
	}, {
		id: MM.vvWwv,
		nW: 1,
		Nv: 7
	}, {
		id: MM.NnM,
		nW: 1,
		Nv: 255
	}];
	Mn = 0;
	var nMmVm = {
		WVMWM: Mn++,
		mvMmV: Mn++
	};
	var vMV = [];
	vMV[Vww.mVWnm] = {
		mWMMM: 700,
		WnmnV: 550,
		nNnWv: 0.5,
		NMVNw: 1,
		mode: nMmVm.WVMWM,
		NMwvw: ((2 * 8) * 60) * 1000,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 28,
			y: -50,
			src: "img/day-ghoul-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 28,
			y: 50,
			src: "img/day-ghoul-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-ghoul.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/ghoul-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-ghoul-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 30,
		VWV: 0,
		nnv: 38,
		Nv: 160,
		NNV: [0.12, 0.22],
		NMnvW: [0.14, 0.25],
		WV: [
			[MM.wMm, 4, Ww.wMm]
		],
		mmN: 1,
		VWV: 0,
		mwM: 0,
		nwmnW: 0,
		VMn: 0,
		nWnMv: 40,
		mMVww: 50,
		NwW: [8, 20],
		wmv: 20,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 1200
	};
	vMV[Vww.MNWVN] = {
		mWMMM: 300,
		WnmnV: 150,
		nNnWv: 0.5,
		NMVNw: 2,
		mode: nMmVm.WVMWM,
		NMwvw: (((2 * 2) * 8) * 60) * 1000,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 28,
			y: -40,
			src: "img/day-ghoul3-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 28,
			y: 40,
			src: "img/day-ghoul3-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-ghoul3.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/ghoul3-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-ghoul3-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 18,
		VWV: 0,
		nnv: 38,
		Nv: 100,
		NNV: [0.18, 0.28],
		NMnvW: [0.22, 0.38],
		WV: [
			[MM.mWmvn, 4, Ww.mWmvn]
		],
		mmN: 1,
		VWV: 0,
		mwM: 0,
		nwmnW: 0,
		VMn: 0,
		nWnMv: 40,
		mMVww: 50,
		NwW: [7, 14],
		wmv: 20,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 1000
	};
	vMV[Vww.WvnMW] = {
		mWMMM: 500,
		WnmnV: 350,
		nNnWv: 0.5,
		NMVNw: 4,
		mode: nMmVm.WVMWM,
		NMwvw: (((3 * 2) * 8) * 60) * 1000,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 28,
			y: -48,
			src: "img/day-ghoul4-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 28,
			y: 48,
			src: "img/day-ghoul4-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-ghoul4.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/ghoul4-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-ghoul4-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 14,
		VWV: 0,
		nnv: 38,
		Nv: 100,
		NNV: [0.12, 0.23],
		NMnvW: [0.14, 0.26],
		WV: [
			[MM.nwM, 4, Ww.nwM],
			[MM.wMm, 4, Ww.wMm],
			[MM.nMm, 4, Ww.nMm]
		],
		mmN: 1,
		VWV: 0,
		mwM: 1,
		nwmnW: 120,
		VMn: 500,
		nWnMv: 40,
		mMVww: 50,
		NwW: [6, 20],
		wmv: 20,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 500
	};
	vMV[Vww.VNmnV] = {
		mWMMM: 500,
		WnmnV: 350,
		nNnWv: 0.5,
		NMVNw: 8,
		mode: nMmVm.WVMWM,
		NMwvw: (((4 * 2) * 8) * 60) * 1000,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 28,
			y: -40,
			src: "img/day-ghoul2-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 28,
			y: 40,
			src: "img/day-ghoul2-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-ghoul2.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/ghoul2-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-ghoul2-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 10,
		VWV: 0,
		nnv: 38,
		Nv: 160,
		NNV: [0.12, 0.23],
		NMnvW: [0.14, 0.26],
		WV: [
			[MM.nwv, 4, Ww.nwv]
		],
		mmN: 1,
		VWV: WvvwM,
		mwM: 0,
		nwmnW: 0,
		VMn: 0,
		nWnMv: 40,
		mMVww: 50,
		NwW: [5, 15],
		wmv: 20,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 1500
	};
	vMV[Vww.MwnMw] = {
		mWMMM: 700,
		WnmnV: 550,
		nNnWv: 0.5,
		NMVNw: 16,
		mode: nMmVm.WVMWM,
		NMwvw: (((5 * 2) * 8) * 60) * 1000,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 28,
			y: -50,
			src: "img/day-ghoul1-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 28,
			y: 50,
			src: "img/day-ghoul1-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-ghoul1.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/ghoul1-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-ghoul1-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 14,
		VWV: 0,
		nnv: 38,
		Nv: 800,
		NNV: [0.11, 0.21],
		NMnvW: [0.14, 0.24],
		WV: [
			[MM.wNw, 4, Ww.wNw],
			[MM.Nvm, 12, Ww.Nvm]
		],
		mmN: 1,
		VWV: 0,
		mwM: 0,
		nwmnW: 0,
		VMn: 0,
		nWnMv: 40,
		mMVww: 50,
		NwW: [20, 50],
		wmv: 20,
		NVN: ((4 * 8) * 60) * 1000,
		Vw: 5000
	};
	vMV[Vww.NwNvw] = {
		mWMMM: 700,
		WnmnV: 550,
		nNnWv: 0.5,
		NMVNw: 32,
		mode: nMmVm.WVMWM,
		NMwvw: ((2 * 8) * 60) * 1000,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 28,
			y: -50,
			src: "img/day-ghoul5-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 28,
			y: 50,
			src: "img/day-ghoul5-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-ghoul5.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/ghoul5-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-ghoul5-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 0,
		VWV: 0,
		nnv: 38,
		Nv: 160,
		NNV: [0.04, 0.04],
		WV: [
			[MM.mVwVm, 4, Ww.mVwVm]
		],
		mmN: 0,
		VWV: 0,
		mwM: 0,
		nwmnW: 0,
		VMn: 0,
		nWnMv: 40,
		mMVww: 50,
		NwW: [20, 30],
		wmv: 20,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 100
	};
	vMV[Vww.MWnmM] = {
		mWMMM: 700,
		WnmnV: 550,
		nNnWv: 0.5,
		NMVNw: 0,
		mode: nMmVm.mvMmV,
		NMwvw: 0,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 28,
			y: -50,
			src: "img/day-lapabot-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 28,
			y: 50,
			src: "img/day-lapabot-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-lapabot.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/lapabot-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-lapabot-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 0,
		VWV: 0,
		nnv: 38,
		Nv: 600,
		NNV: [0.08, 0.08],
		WV: [
			[MM.Nvm, 4, Ww.Nvm]
		],
		mmN: 0,
		VWV: 0,
		mwM: 0,
		nwmnW: 0,
		VMn: 0,
		nWnMv: 40,
		mMVww: 50,
		NwW: [30, 30],
		wmv: 20,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 100
	};
	vMV[Vww.mVVWn] = {
		mWMMM: 550,
		WnmnV: 400,
		nNnWv: 0.5,
		NMVNw: 0,
		mode: nMmVm.WVMWM,
		NMwvw: 0,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 8,
			y: -45,
			src: "img/day-hal-bot-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 8,
			y: 45,
			src: "img/day-hal-bot-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-hal-bot.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/hal-bot-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-hal-bot-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 0,
		VWV: 0,
		nnv: 38,
		Nv: 800,
		NNV: [0.12, 0.12],
		WV: [
			[MM.Nvm, 4, Ww.Nvm]
		],
		mmN: 0,
		VWV: 0,
		mwM: 0,
		nwmnW: 0,
		VMn: 0,
		nWnMv: 40,
		mMVww: 50,
		NwW: [30, 30],
		wmv: 20,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 500
	};
	vMV[Vww.NMWvv] = {
		mWMMM: 700,
		WnmnV: 550,
		nNnWv: 0.5,
		NMVNw: 0,
		mode: nMmVm.WVMWM,
		NMwvw: 0,
		nv: nM.nVv,
		VN: 0.05,
		wnwnn: 6,
		VNW: {
			angle: 0,
			x: 18,
			y: -60,
			src: "img/day-tesla-bot-left-arm.png",
			image: {
				v: 0
			}
		},
		nvV: {
			angle: 0,
			x: 18,
			y: 60,
			src: "img/day-tesla-bot-right-arm.png",
			image: {
				v: 0
			}
		},
		head: {
			src: "img/day-tesla-bot.png",
			image: {
				v: 0
			}
		},
		mWM: {
			src: "img/tesla-bot-hurt.png",
			image: {
				v: 0
			}
		},
		VMm: {
			src: "img/day-tesla-bot-death.png",
			image: {
				v: 0
			}
		},
		wNn: 0,
		Mnn: 0,
		VWV: 0,
		nnv: 38,
		Nv: 3000,
		NNV: [0.1, 0.1],
		WV: [
			[MM.MNN, 4, Ww.MNN],
			[MM.wNw, 4, Ww.wNw]
		],
		mmN: 0,
		VWV: 0,
		mwM: 1,
		nwmnW: 100,
		VMn: 100,
		nWnMv: 40,
		mMVww: 50,
		NwW: [80, 80],
		wmv: 40,
		NVN: ((2 * 8) * 60) * 1000,
		Vw: 3000
	};
	try {
		if (nVN !== undefined) {
			nVN.MM = MM;
			nVN.mW = mW;
			nVN.NVv = NVv;
			nVN.vVW = vVW;
			nVN.nvn = nvn;
			nVN.MWW = MWW;
			nVN.Ww = Ww;
			nVN.VVM = VVM;
			nVN.nwV = nwV;
			nVN.Mw = Mw;
			nVN.Vm = Vm;
			nVN.wvW = wvW;
			nVN.mMWnW = mMWnW;
			nVN.vMV = vMV;
			nVN.Vww = Vww;
			nVN.wvM = wvM;
			for (var VmW = 0; VmW < 3; VmW++) {
				for (var mN = 1; mN < nvn.length; mN++) {
					var NW = nvn[mN];
					var Mnw = NW.detail.Mnw;
					if (Mnw === undefined) continue;
					for (var NM = 0; NM < Mnw.length; NM++) {
						var VNm = nvn[Mnw[NM][0]];
						if (NM === 0) NW.Vw = 0;
						NW.Vw += VNm.Vw * Mnw[NM][1];
						Mnw[NM][2] = VNm.WV;
					}
					NW.Vw = Math.floor(NW.Vw / 4);
				}
			}
			for (var mN = 0; mN < mw.length; mN++) {
				var NW = mw[mN];
				var Mnw = NW.detail.Mnw;
				if (Mnw === undefined) continue;
				for (var NM = 0; NM < Mnw.length; NM++) {
					var VNm = nvn[Mnw[NM][0]];
					if (NM === 0) NW.Vw = 0;
					NW.Vw += VNm.Vw * Mnw[NM][1];
					Mnw[NM][2] = VNm.WV;
				}
				NW.Vw = Math.floor(NW.Vw / 4);
			}
		}
	} catch (error) {
		for (var mN = 0; mN < wwnnm.length; mN++) wwnnm[mN].image = graphicOptions.createMenuImg(wwnnm[mN].src, wwnnm[mN].image);
		NVwNv = window.JSON.parse(window.JSON.stringify(nvn));
		wMvWv = window.JSON.parse(window.JSON.stringify(wnM));
		mVMVW = window.JSON.parse(window.JSON.stringify(MWW));
		NVvmm = window.JSON.parse(window.JSON.stringify(mvn));
		vmwwm = window.JSON.parse(window.JSON.stringify(nwV));
		MmNnW = window.JSON.parse(window.JSON.stringify(nMVNV));
		vmMmN = window.JSON.parse(window.JSON.stringify(vMV));

		function WvNmW(VWMvm, WnWVw, Wmw, wNWWV) {
			for (var VMMNn in WnWVw) {
				var MWNNV = WnWVw[VMMNn];
				var NwM = VWMvm[VMMNn];
				if (NwM === undefined) {
					VWMvm[VMMNn] = MWNNV;
					continue;
				}
				if (typeof NwM === "object") WvNmW(NwM, MWNNV, Wmw, wNWWV);
				else if (typeof NwM === "string") VWMvm[VMMNn] = NwM.replace(Wmw, wNWWV);
			}
		};
		WvNmW(vmwwm, nwV, "day", "night");
		WvNmW(NVwNv, nvn, "day", "night");
		WvNmW(wMvWv, wnM, "day", "night");
		WvNmW(mVMVW, MWW, "day", "night");
		WvNmW(NVvmm, mvn, "day", "night");
		WvNmW(MmNnW, nMVNV, "day", "night");
		WvNmW(vmMmN, vMV, "day", "night");

		function WnmWM(VWMvm) {
			for (var VMMNn in VWMvm) {
				var NwM = VWMvm[VMMNn];
				if ((typeof NwM === "object") && (NwM !== null)) {
					if (NwM.WVn !== undefined) {
						var VVW = mvn[mNn].wVWmw[NwM.MNw];
						VVW.WVn = NwM.WVn;
						VVW.mnn = NwM.mnn;
						VVW.WVN = NwM.WVN;
						VVW = NVvmm[mNn].wVWmw[NwM.MNw];
						VVW.WVn = NwM.WVn;
						VVW.mnn = NwM.mnn;
						VVW.WVN = NwM.WVN;
					} else WnmWM(NwM);
				}
			}
		};
		WnmWM(nvn);
	}
	var vNm = (function() {
		var MNvWW = [237225, 303931, 166687, 229213, 217292, 205860, 182041, 273065];
		var NVm = [];
		var vvwvw = Math.floor(Math.random() * MNvWW.length);
		var VVVMw = 0;
		var wVVWw = 0;
		var MWvwv = 0;
		var WwWWw = 0.45;
		var NvWnM = 0;
		var nwnmm = 0;
		audioHandler.wWN.end = new audioHandler.WvW("audio/end.mp3", 0, true);
		audioHandler.wWN.title = new audioHandler.WvW("audio/title.mp3", 0, true);
		audioHandler.wWN.MwmmV = new audioHandler.WvW("audio/geiger.mp3", 0, true);
		audioHandler.wWN.WwwWn = new audioHandler.WvW("audio/ambient1.mp3", 0, true);
		audioHandler.wWN.vmMVM = new audioHandler.WvW("audio/ambient2.mp3", 0, true);
		audioHandler.wWN.NnVWn = new audioHandler.WvW("audio/ambient3.mp3", 0, true);
		audioHandler.wWN.MMNwN = new audioHandler.WvW("audio/ambient4.mp3", 0, true);
		audioHandler.wWN.VnwMv = new audioHandler.WvW("audio/ambient5.mp3", 0, true);
		audioHandler.wWN.vnnwN = new audioHandler.WvW("audio/ambient6.mp3", 0, true);
		audioHandler.wWN.NnMWN = new audioHandler.WvW("audio/ambient7.mp3", 0, true);
		audioHandler.wWN.NwWWm = new audioHandler.WvW("audio/ambient8.mp3", 0, true);
		NVm.push(audioHandler.wWN.WwwWn);
		NVm.push(audioHandler.wWN.vmMVM);
		NVm.push(audioHandler.wWN.NnVWn);
		NVm.push(audioHandler.wWN.MMNwN);
		NVm.push(audioHandler.wWN.VnwMv);
		NVm.push(audioHandler.wWN.vnnwN);
		NVm.push(audioHandler.wWN.NnMWN);
		NVm.push(audioHandler.wWN.NwWWm);
		audioHandler.vm.open = new audioHandler.WvW("audio/open.mp3", 1, false, 1);
		audioHandler.vm.mwW = new audioHandler.WvW("audio/drag.mp3", 1, false, 1);
		audioHandler.vm.play = new audioHandler.WvW("audio/play.mp3", 1, false, 1);
		audioHandler.vm.MMNwv = new audioHandler.WvW("audio/skill.mp3", 1, false, 1);
		audioHandler.vm.vNN = new audioHandler.WvW("audio/craft.mp3", 1, false, 1);
		audioHandler.vm.button = new audioHandler.WvW("audio/button.mp3", 1, false, 1);
		audioHandler.vm.MnWWn = new audioHandler.WvW("audio/throwLoot.mp3", 1, false, 1);
		audioHandler.vm.NNWmw = new audioHandler.WvW("audio/levelup.mp3", 1, false, 1);
		audioHandler.vm.mwM = new audioHandler.WvW("audio/explosion.mp3", 1, false, 1);
		audioHandler.vm.nVNMn = new audioHandler.WvW("audio/zipper-on.mp3", 0.7, false, 1);
		audioHandler.vm.WWwNv = new audioHandler.WvW("audio/zipper-off.mp3", 0.7, false, 1);
		audioHandler.vm.MVMvn = [new audioHandler.WvW("audio/eat-1s-0.mp3", 1, false, 1), new audioHandler.WvW("audio/eat-1s-1.mp3", 1, false, 1), new audioHandler.WvW("audio/eat-1s-2.mp3", 1, false, 1)];
		audioHandler.vm.NwW = [];
		for (var mN = 1; mN < MWMWV.length; mN++) audioHandler.vm.NwW[mN] = new audioHandler.WvW(MWMWV[mN], 1, false, 1);
		audioHandler.vm.MNm = [];
		var mMvVV = mvn[mNn].mMvVV;
		for (var mN = 0; mN < mMvVV.length; mN++) {
			var Vn = mMvVV[mN];
			if (Vn.VNV === undefined) audioHandler.vm.MNm[mN] = 0;
			else if (typeof Vn.VNV === "number") audioHandler.vm.MNm[mN] = Vn.VNV;
			else {
				audioHandler.vm.MNm[mN] = [];
				for (var NM = 0; NM < Vn.VNV.length; NM++) audioHandler.vm.MNm[mN][NM] = new audioHandler.WvW(Vn.VNV[NM], 1, false, 1);
			}
		}
		if (audioHandler.options.NNMNW === 1) {
			audioHandler.vNV(NVm[vvwvw]);
			audioHandler.vNV(audioHandler.wWN.title);
		}
		for (var mN = 0; mN < audioHandler.vm.MNm.length; mN++) {
			var VNV = audioHandler.vm.MNm[mN];
			if (VNV === 1) audioHandler.vm.MNm[mN] = audioHandler.vm.MVMvn;
		}
		if (audioHandler.options.NmNnW === 1) {
			audioHandler.vNV(audioHandler.vm.open);
			audioHandler.vNV(audioHandler.vm.play);
			audioHandler.vNV(audioHandler.vm.mwW);
			audioHandler.vNV(audioHandler.vm.MMNwv);
			audioHandler.vNV(audioHandler.vm.vNN);
			audioHandler.vNV(audioHandler.vm.button);
			audioHandler.vNV(audioHandler.vm.NNWmw);
			audioHandler.vNV(audioHandler.vm.mwM);
			for (var mN = 0; mN < audioHandler.vm.MVMvn.length; mN++) audioHandler.vNV(audioHandler.vm.MVMvn[mN]);
			for (var mN = 1; mN < audioHandler.vm.NwW.length; mN++) audioHandler.vNV(audioHandler.vm.NwW[mN]);
			for (var mN = 0; mN < audioHandler.vm.MNm.length; mN++) {
				var VNV = audioHandler.vm.MNm[mN];
				if (VNV !== 0) {
					for (var NM = 0; NM < VNV.length; NM++) audioHandler.vNV(VNV[NM]);
				}
			}
		}

		function wvWwn() {
			audioHandler.VvmmV(audioHandler.wWN.title);
			audioHandler.VvmmV(audioHandler.wWN.end);
			for (var mN = 0; mN < NVm.length; mN++) audioHandler.VvmmV(NVm[mN]);
			if (audioHandler.options.NmNnW === 1) {
				var MnnwW = audioHandler.options.NNMNW;
				audioHandler.options.NNMNW = 1;
				audioHandler.VvmmV(audioHandler.wWN.MwmmV);
				audioHandler.options.NNMNW = MnnwW;
			}
			if ((nwnmm !== vNm.MwmmV) && (wVVWw === 1)) {
				if (NvWnM === 0) {
					NvWnM = 1000;
					var WNw = vNm.MwmmV - nwnmm;
					audioHandler.nNvmn(audioHandler.wWN.MwmmV, 250, WNw);
					nwnmm = vNm.MwmmV;
				}
				NvWnM = Math.max(0, NvWnM - var13);
			}
			if ((VVVMw === 0) && (wVVWw === 1)) {
				audioHandler.nNvmn(NVm[vvwvw], 5000, -WwWWw);
				vvwvw = (vvwvw + 1) % NVm.length;
				VVVMw = MNvWW[vvwvw] - 5000;
				audioHandler.nNvmn(NVm[vvwvw], 5000, WwWWw);
			}
			VVVMw = Math.max(0, VVVMw - var13);
		};

		function nMvNv() {
			wVVWw = 0;
			MWvwv = 1;
			audioHandler.nNvmn(audioHandler.wWN.MwmmV, 250, -nwnmm);
			nwnmm = 0;
			vNm.MwmmV = 0;
			audioHandler.nNvmn(NVm[vvwvw], 500, -WwWWw);
			audioHandler.nNvmn(audioHandler.wWN.end, 1000, vNm.WwWWw);
		};

		function mmwMw() {
			if (MWvwv === 0) audioHandler.nNvmn(audioHandler.wWN.title, 500, -WwWWw);
			else audioHandler.nNvmn(audioHandler.wWN.end, 500, -WwWWw);
		};

		function vvMvN() {
			wVVWw = 1;
			mmwMw();
			if (VVVMw === 0) vvwvw = (vvwvw + 1) % NVm.length;
			VVVMw = MNvWW[vvwvw] - 5000;
			audioHandler.nNvmn(NVm[vvwvw], 5000, WwWWw);
		};
		return {
			vvMvN: vvMvN,
			nMvNv: nMvNv,
			wvWwn: wvWwn,
			mmwMw: mmwMw,
			WwWWw: WwWWw,
			MwmmV: 0
		};
	})();
	try {
		VnmWn;
	} catch (error) {
		VnmWn = undefined;
	}
	if (VnmWn === undefined) {
		window.aiptag = window.aiptag || ({});
		window.aiptag["consented"] = true;
		window.aiptag["cmd"] = window.aiptag["cmd"] || ([]);
		window.aiptag["cmd"]["display"] = window.aiptag["cmd"]["display"] || ([]);
		window.aiptag["cmd"]["player"] = window.aiptag["cmd"]["player"] || ([]);
		var vnmVM = function() {
			adplayer = new aipPlayer({
				AD_WIDTH: 960,
				AD_HEIGHT: 540,
				AD_FULLSCREEN: true,
				AD_CENTERPLAYER: true,
				LOADING_TEXT: 'loading advertisement',
				PREROLL_ELEM: function() {
					return document.getElementById('preroll');
				},
				AIP_COMPLETE: function(nWwmWVv) {
					WMW.nMW = 0;
					WMW.nmvvn = -1;
					WMW.nNvVV();
				},
				AIP_REMOVE: function() {}
			});
		};
		window.aiptag["cmd"]["player"].push(vnmVM);
	}

	function nMnnw() {
		try {
			if (window.self !== window.top) {
				VVmnV = window.localStorage.getItem("inIframe");
				if (VVmnV === "1") window.localStorage.setItem("inIframe", "0");
				else {
					window.localStorage.setItem("inIframe", "1");
					window.location.href = window.location.href + "";
				}
			}
		} catch (error) {}
	};
	nMnnw();
	var vnnWV = [30, 1761];
	try {
		VnmWn;
	} catch (error) {
		VnmWn = undefined;
	}
	nmm.wnW(600, 30000, 5000);
	nV.wnW("json/servers.json", 30, 15000, 2000, 3, 60000, 10000, VnmMV, mNWNN, wNwmm);

	function NMWNw() {
		WmVww = ((((((((true && (document.getElementById("nickname") !== null)) && (document.getElementById("terms") !== null)) && (document.getElementById("serverList") !== null)) && (document.getElementById("changelog") !== null)) && (document.getElementById("howtoplay") !== null)) && (document.getElementById("featuredVideo") !== null)) && (document.getElementById("trevda") !== null)) && (document.getElementById("preroll") !== null)) && (document.getElementById("chat") !== null);
		if (WmVww === true) {
			Mwv.wnW();
			WMW.wnW();
			WWm.wnW();
			wVVwv.wnW();
			WMvvN.wnW();
			MWwnm.wnW();
			graphicOptions.vMnWv(Mwv, one1, "can", "bod", 1280, undefined, true);
			Mwv.wnm();
		} else window.setTimeout(NMWNw, 100);
	};
	window.onbeforeunload = function() {
		if (nV.state & nV.mMM.drawPlayerStates) return "Are you sure you want quit?";
	};
	NMWNw();
})();
