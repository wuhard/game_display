(function anonymous(context
) {
/*
	Index: 675
	Path:  entities/particles/ParticlesManager::m_createSnowParticle
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(2)['$BgMath']; // :Math

    return function compiled_m_createSnowParticle(local1 /* Number */, local2 /* Number */, local3 /* int */ = -1) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);
        /* Force Number coerce */
        local2 = (+local2);
        /* Force int coerce */
        local3 = (local3|0);
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
        let stack8 = undefined;
        let stack9 = undefined;
        let stack10 = undefined;
        let stack11 = undefined;
        let stack12 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local6 = NaN;
                        // 7 0::SnowParticleSprite
                        stack0 = scope0.findScopeProperty($names[0], true, false);
                        stack0 = context.constructprop($names[0], stack0, []);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_createSnowParticle] Coerce Type not found:', "MovieClip")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        stack1 = stack0;
                        local5 = stack1;
                        stack1 = 0.5;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack2 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack2 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack2 = t.$Bgrandom ();
                                } else { 
                                    stack2 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack3 = 0.5;// JIT: redundant assigment, value unused
                        stack2 *= 0.5;
                        stack1 += stack2;
                        // 7 0::scaleX
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.scaleX = stack1;
                        } else {
                            context.setproperty($names[4], stack1, stack0);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        //Possible type:undefined
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['scaleX'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$BgscaleX;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::scaleY
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.scaleY = stack1;
                        } else {
                            context.setproperty($names[5], stack1, local5);
                        }
//                        stack0 = local5;// JIT: redundant assigment, value unused
//                        stack1 = local5;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack1 = local5['scaleX'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack1 = temp.$BgscaleX;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        // 7 0::alpha
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])){
                            local5.alpha = stack1;
                        } else {
                            context.setproperty($names[6], stack1, local5);
                        }
                        // JIT: potential type:7 0::int
                        stack0 = local3;
                        stack1 = 0;
                        if (!(0 > local3)) { p = 81; continue; };
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgrandom ();
                                } else { 
                                    stack0 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack1 = 30;// JIT: redundant assigment, value unused
                        stack0 *= 30;
                        stack0 = +stack0;
                        local6 = stack0;
                        { p = 85; continue; };
                    case 81:
                        // JIT: potential type:7 0::int
                        stack0 = local3;
                        stack0 = +local3;
                        local6 = stack0;
                    case 85:
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local7 = false;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        { p = 173; continue; };
                    case 96:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::levelCollisions
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelCollisions'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelCollisions;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = local4;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 171; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::levelCollisions
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelCollisions'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelCollisions;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = local4;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:levels.collisions::FanCollision
                        temp = scope0.findScopeProperty($names[10], true, false);
                        stack1 = temp.$BgFanCollision;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[10]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 171; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['collisionsManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgcollisionsManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::levelCollisions
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['levelCollisions'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BglevelCollisions;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[8]);
                            }
                        }
                        stack1 = local4;
                        // 27 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[9], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::aabb
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['aabb'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgaabb;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[11]);
                            }
                        }
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack1 = local1;
//                        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
                        stack2 = local2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.contains(local1, local2);
                        } else {
                            // 9 {3, 0, 0:entities.particles, 0:http://adobe.com/AS3/2006/builtin, 0:levels, 3, 2:entities.particles, 0:flash.display, 0:flash.geom, 0:fl.motion, 0:entities, 0:entities.enemies, 1:entities.particles:ParticlesManager, 5:entities.particles:ParticlesManager}::contains
                            {
                                let t = stack0;
                                const m = t.$Bgcontains || (t = sec.box(stack0), t.$Bgcontains);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgcontains (local1, local2);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[12], [local1, local2], false);
                                }
                            }
                        }
                        if (!stack0) { p = 171; continue; };
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local7 = true;
                    case 171:
                        local4 = (local4 | 0) + 1;
                    case 173:
                        stack0 = local4;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:7 0:levels.collisions::FanCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        // 7 0::collisionsManager
                        //Possible type:7 0:levels::Level
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['collisionsManager'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgcollisionsManager;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        // 7 0::levelCollisions
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['levelCollisions'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BglevelCollisions;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[8]);
                            }
                        }
                        // 7 0::length
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[13]);
                            }
                        }
                        if (stack1 > local4) { p = 96; continue; };
                        stack0 = local7;
                        if (!local7) { p = 294; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 = local5;
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
                        // JIT: potential type:7 0::Number
                        stack3 = local2;
                        stack4 = 0;
//                        stack5 = local5;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack5 = local5['scaleX'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack5 = temp.$BgscaleX;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack5 = -stack5;
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 *= 2;
                        stack6 = 1;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack7 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack7 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack7 = t.$Bgrandom ();
                                } else { 
                                    stack7 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack8 = 100;// JIT: redundant assigment, value unused
                        stack7 *= 100;
                        stack8 = 50;
                        if (!(50 < stack7)) { p = 243; continue; };
                        stack7 = true;
                        { p = 244; continue; };
                    case 243:
                        stack7 = false;
                    case 244:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack8 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack8 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack8 = t.$Bgrandom ();
                                } else { 
                                    stack8 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack9 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack9 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack9 = temp.$BgPI;
                            if (stack9 === undefined || typeof stack9 === 'function') {
                                stack9 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack10 = 2;// JIT: redundant assigment, value unused
                        stack9 *= 2;
                        stack8 *= stack9;
                        stack9 = 0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack10 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack10 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack10 = t.$Bgrandom ();
                                } else { 
                                    stack10 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack11 = 8;// JIT: redundant assigment, value unused
                        stack10 *= 8;
                        stack9 += stack10;
//                        stack10 = local6;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack11 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack11 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack11 = t.$Bgrandom ();
                                } else { 
                                    stack11 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack12 = 100;// JIT: redundant assigment, value unused
                        stack11 *= 100;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9, local6, stack11);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9, local6, stack11);
                                } else { 
                                   stack0.axCallProperty($names[16], [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9, local6, stack11], false);
                                }
                            }
                        }
                        //JIT: Emit inline return
                        return;
                    case 294:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack0 = this.$Bglevel;
                        // 7 0::particlesManager
                        //Possible type:7 0:levels::Level
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['particlesManager'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgparticlesManager;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[14]);
                            }
                        }
                        stack1 = local5;
                        // JIT: potential type:7 0::Number
                        stack2 = local1;
                        // JIT: potential type:7 0::Number
                        stack3 = local2;
                        stack4 = 0;
//                        stack5 = local5;// JIT: redundant assigment, value unused
                        // 7 0::scaleX
                        if (!(local5 != undefined && local5[AX_CLASS_SYMBOL])) {
                            stack5 = local5['scaleX'];
                        } else {
                            temp = local5[AX_CLASS_SYMBOL] ? local5 : sec.box(local5);
                            stack5 = temp.$BgscaleX;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[4]);
                            }
                        }
//                        stack6 = 2;// JIT: redundant assigment, value unused
                        stack5 *= 2;
                        stack6 = 1;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack7 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack7 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack7 = t.$Bgrandom ();
                                } else { 
                                    stack7 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack8 = 100;// JIT: redundant assigment, value unused
                        stack7 *= 100;
                        stack8 = 50;
                        if (!(50 < stack7)) { p = 338; continue; };
                        stack7 = true;
                        { p = 339; continue; };
                    case 338:
                        stack7 = false;
                    case 339:
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack8 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack8 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack8 = t.$Bgrandom ();
                                } else { 
                                    stack8 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack9 = __Math;// JIT: redundant assigment, value unused
                        // 7 0::PI
                        //Possible type:7 0::Math
                        if (!(__Math != undefined && __Math[AX_CLASS_SYMBOL])) {
                            stack9 = __Math['PI'];
                        } else {
                            temp = __Math[AX_CLASS_SYMBOL] ? __Math : sec.box(__Math);
                            stack9 = temp.$BgPI;
                            if (stack9 === undefined || typeof stack9 === 'function') {
                                stack9 = temp.axGetProperty($names[15]);
                            }
                        }
//                        stack10 = 2;// JIT: redundant assigment, value unused
                        stack9 *= 2;
                        stack8 *= stack9;
                        stack9 = 0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack10 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack10 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack10 = t.$Bgrandom ();
                                } else { 
                                    stack10 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack11 = 8;// JIT: redundant assigment, value unused
                        stack10 *= 8;
                        stack9 += stack10;
//                        stack10 = local6;// JIT: redundant assigment, value unused
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack11 = __Math;// JIT: redundant assigment, value unused
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack11 = __Math.random();
                        } else {
                            // 7 0::random
                            {
                                let t = __Math;
                                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                                if( typeof m === "function" ) { 
                                    stack11 = t.$Bgrandom ();
                                } else { 
                                    stack11 = __Math.axCallProperty($names[3], [], false);
                                }
                            }
                        }
//                        stack12 = 100;// JIT: redundant assigment, value unused
                        stack11 *= 100;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.pushParticle(stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9, local6, stack11);
                        } else {
                            // 7 0::pushParticle
                            {
                                let t = stack0;
                                const m = t.$BgpushParticle || (t = sec.box(stack0), t.$BgpushParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9, local6, stack11);
                                } else { 
                                   stack0.axCallProperty($names[16], [stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9, local6, stack11], false);
                                }
                            }
                        }
                    case 385:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/entities/particles/ParticlesManager/m_createSnowParticle.js
})