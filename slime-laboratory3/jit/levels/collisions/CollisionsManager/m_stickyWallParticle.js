(function anonymous(context
) {
/*
	Index: 613
	Path:  levels/collisions/CollisionsManager::m_stickyWallParticle
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(8)['$BgMath']; // :Math

    return function compiled_m_stickyWallParticle() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
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
                        local1 = 0;
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local2 = undefined;
//                        stack0 = undefined;// JIT: redundant assigment, value unused
                        
                        local3 = undefined;
//                        stack0 = NaN;// JIT: redundant assigment, value unused
                        local4 = NaN;
//                        stack0 = 100000;// JIT: redundant assigment, value unused
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local5 = 100000;
//                        stack0 = -1;// JIT: redundant assigment, value unused
                        local6 = -1;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 151; continue; };
                    case 30:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local1;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 149; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local1;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:levels.collisions::StickyAreaCollision
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgStickyAreaCollision;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 149; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local1;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::xPos
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['xPos'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgxPos;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:7 0:levels.collisions::StickyAreaCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['hero'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bghero;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack1;
                                const m = t.$BggetMidPosition || (t = sec.box(stack1), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetMidPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        // 7 0::x
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        stack0 -= stack1;
                        
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local1;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::yPos
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['yPos'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgyPos;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
                        // 7 0::hero
                        //Possible type:7 0:levels::Level
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['hero'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bghero;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(_a = typeof stack1, ((_a !== 'object' && _a !== 'function' ) || stack1 == null || stack1[AX_CLASS_SYMBOL]))) {
                           stack1 = stack1.getMidPosition();
                        } else {
                            // 7 0::getMidPosition
                            {
                                let t = stack1;
                                const m = t.$BggetMidPosition || (t = sec.box(stack1), t.$BggetMidPosition);
                                if( typeof m === "function" ) { 
                                    stack1 = t.$BggetMidPosition ();
                                } else { 
                                    stack1 = stack1.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                        // 7 0::y
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[7]);
                            }
                        }
                        stack0 -= stack1;
                        
                        local3 = stack0;
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
                        stack1 = local2;
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        stack1 *= local2;
                        stack2 = local3;
//                        stack3 = local3;// JIT: redundant assigment, value unused
                        stack2 *= local3;
                        stack1 += stack2;
                        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
                           stack0 = __Math.sqrt(stack1);
                        } else {
                            // 7 0::sqrt
                            {
                                let t = __Math;
                                const m = t.$Bgsqrt || (t = sec.box(__Math), t.$Bgsqrt);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$Bgsqrt (stack1);
                                } else { 
                                    stack0 = __Math.axCallProperty($names[9], [stack1], false);
                                }
                            }
                        }
                        stack0 = +stack0;
                        stack1 = stack0;
                        local4 = stack1;
                        stack1 = local5;
                        if (!(local5 > stack0)) { p = 149; continue; };
                        stack0 = local4;
                        stack0 = +local4;
                        local5 = stack0;
                        stack0 = local1;
                        stack0 |= 0;
                        local6 = stack0;
                    case 149:
                        local1 = (local1 | 0) + 1;
                    case 151:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BglevelCollisions;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[10]);
                            }
                        }
                        if (stack1 > local1) { p = 30; continue; };
                        stack0 = local6;
                        stack1 = 0;
                        if (!(0 > local6)) { p = 172; continue; };
                        return;
                    case 172:
                        // 7 0:levels.collisions::StickyAreaCollision
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgStickyAreaCollision;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        stack1 = context.savedScope.global.object;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BglevelCollisions;
                        stack3 = local6;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local6;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[0], local6);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.slimeParticle();
                        } else {
                            // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::slimeParticle
                            {
                                let t = stack0;
                                const m = t.$BgslimeParticle || (t = sec.box(stack0), t.$BgslimeParticle);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[11], [], false);
                                }
                            }
                        }
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/m_stickyWallParticle.js
})