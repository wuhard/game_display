(function anonymous(context
) {
/*
	Index: 612
	Path:  levels/collisions/CollisionsManager::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: *
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* Array */, local2 /* Level */) {
        // Possible use a real "this"
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
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
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local3 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0:levels::Level// JIT: redundant assigment, value unused
                        stack1 = local2;
                        // 7 1:levels.collisions:CollisionsManager::level
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:levels::Level  */ 
                        this.$Bglevel = local2;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        // JIT: potential type:7 0::Array// JIT: redundant assigment, value unused
                        stack1 = local1;
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BgcollisionsScript = local1;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::IS_TICK
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_TICK = true;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::Array
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:Array/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::levelCollisions
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Array  */ 
                        this.$BglevelCollisions = stack1;
                        // 7 0:levels.collisions::LaserCollision
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgLaserCollision;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
//                        stack1 = null;// JIT: redundant assigment, value unused
                        // 7 0::laserSpriteContainer
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.laserSpriteContainer = null;
                        } else {
                            context.setproperty($names[2], null, stack0);
                        }
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
                        { p = 4205; continue; };
                    case 53:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 0;
                        if (0 != stack0) { p = 160; continue; };
                        // 7 0:levels.collisions::SolidAreaCollision
                        stack0 = scope0.findScopeProperty($names[5], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:SolidAreaCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[5]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SolidAreaCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 160:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 100;
                        if (100 != stack0) { p = 266; continue; };
                        // 7 0:levels.collisions::IceSolidAreaCollision
                        stack0 = scope0.findScopeProperty($names[13], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:IceSolidAreaCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[13]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::IceSolidAreaCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 266:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 35;
                        if (35 != stack0) { p = 372; continue; };
                        // 7 0:levels.collisions::StickyAreaCollision
                        stack0 = scope0.findScopeProperty($names[14], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:StickyAreaCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[14]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::StickyAreaCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 372:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 101;
                        if (101 != stack0) { p = 454; continue; };
                        // 7 0:levels.collisions::IcycleCollision
                        stack0 = scope0.findScopeProperty($names[15], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:IcycleCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4], $names[15]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::IcycleCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 454:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 102;
                        if (102 != stack0) { p = 536; continue; };
                        // 7 0:levels.collisions::SnowTileCollision
                        stack0 = scope0.findScopeProperty($names[16], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:SnowTileCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4], $names[16]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SnowTileCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 536:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 103;
                        if (103 != stack0) { p = 618; continue; };
                        // 7 0:levels.collisions::FrostMachineCollision
                        stack0 = scope0.findScopeProperty($names[17], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:FrostMachineCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4], $names[17]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::FrostMachineCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 618:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 104;
                        if (104 != stack0) { p = 700; continue; };
                        // 7 0:levels.collisions::CurvedBoxCollision
                        stack0 = scope0.findScopeProperty($names[18], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:CurvedBoxCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4], $names[18]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::CurvedBoxCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 700:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 105;
                        if (105 != stack0) { p = 806; continue; };
                        // 7 0:levels.collisions::PipeStartCollision
                        stack0 = scope0.findScopeProperty($names[19], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:PipeStartCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[19]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::PipeStartCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 806:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 106;
                        if (106 != stack0) { p = 900; continue; };
                        // 7 0:levels.collisions::SnowParticlesCollision
                        stack0 = scope0.findScopeProperty($names[20], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
                        //JIT: Support fast construct:SnowParticlesCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5], $names[20]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SnowParticlesCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 900:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 107;
                        if (107 != stack0) { p = 992; continue; };
                        // 7 0:levels.collisions::AvalancheCollision
                        stack0 = scope0.findScopeProperty($names[21], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
                        //JIT: Support fast construct:AvalancheCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5], $names[21]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::AvalancheCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 992:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 1;
                        if (1 != stack0) { p = 1098; continue; };
                        // 7 0:levels.collisions::BoxCollision
                        stack0 = scope0.findScopeProperty($names[22], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:BoxCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[22]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::BoxCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1098:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 2;
                        if (2 != stack0) { p = 1202; continue; };
                        // 7 0:levels.collisions::SlimeContainer
                        stack0 = scope0.findScopeProperty($names[23], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:SlimeContainer/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[23]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SlimeContainer
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1202:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 3;
                        if (3 != stack0) { p = 1309; continue; };
                        // 7 0:levels.collisions::CheckpointCollision
                        stack0 = scope0.findScopeProperty($names[24], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack7 = true;// JIT: redundant assigment, value unused
//                        stack8 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:CheckpointCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6, true, 0], $names[24]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::CheckpointCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1309:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 4;
                        if (4 != stack0) { p = 1426; continue; };
                        // 7 0:levels.collisions::CheckpointCollision
                        stack0 = scope0.findScopeProperty($names[24], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack7 = false;// JIT: redundant assigment, value unused
//                        stack8 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack8 = this.$BgcollisionsScript;
                        stack9 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack8[AX_CLASS_SYMBOL] ? stack8 : sec.box(stack8);

                            if (typeof simple === "number") {
                                stack8 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack8 = b_obj['$Bg' + simple];
                                if (stack8 === undefined || typeof stack8 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack8 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::value_1
                        //Possible type:7 0::Array
                        if (!(stack8 != undefined && stack8[AX_CLASS_SYMBOL])) {
                            stack8 = stack8['value_1'];
                        } else {
                            temp = stack8[AX_CLASS_SYMBOL] ? stack8 : sec.box(stack8);
                            stack8 = temp.$Bgvalue_1;
                            if (stack8 === undefined || typeof stack8 === 'function') {
                                stack8 = temp.axGetProperty($names[25]);
                            }
                        }
                        //JIT: Support fast construct:CheckpointCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6, false, stack8], $names[24]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::CheckpointCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1426:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 5;
                        if (5 != stack0) { p = 1532; continue; };
                        // 7 0:levels.collisions::LevelCompleteCollision
                        stack0 = scope0.findScopeProperty($names[26], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:LevelCompleteCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[26]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::LevelCompleteCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1532:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 6;
                        if (6 != stack0) { p = 1638; continue; };
                        // 7 0:levels.collisions::TutorialCollision
                        stack0 = scope0.findScopeProperty($names[27], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:TutorialCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[27]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::TutorialCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1638:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 7;
                        if (7 != stack0) { p = 1744; continue; };
                        // 7 0:levels.collisions::SpinningSquareCollision
                        stack0 = scope0.findScopeProperty($names[28], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:SpinningSquareCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[28]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SpinningSquareCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1744:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 8;
                        if (8 != stack0) { p = 1851; continue; };
                        // 7 0:levels.collisions::SpinningSquareCollision
                        stack0 = scope0.findScopeProperty($names[28], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack7 = true;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:SpinningSquareCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6, true], $names[28]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SpinningSquareCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1851:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 9;
                        if (9 != stack0) { p = 1947; continue; };
                        // 7 0:levels.collisions::LightningGroupCollision
                        stack0 = scope0.findScopeProperty($names[29], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = 0;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:LightningGroupCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, 0], $names[29]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::LightningGroupCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 1947:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 10;
                        if (10 != stack0) { p = 2053; continue; };
                        // 7 0:levels.collisions::WallTileCollision
                        stack0 = scope0.findScopeProperty($names[30], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:WallTileCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[30]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::WallTileCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2053:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 11;
                        if (11 != stack0) { p = 2159; continue; };
                        // 7 0:levels.collisions::WallAreaCollision
                        stack0 = scope0.findScopeProperty($names[31], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:WallAreaCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[31]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::WallAreaCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2159:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 12;
                        if (12 != stack0) { p = 2265; continue; };
                        // 7 0:levels.collisions::LaserCollision
                        stack0 = scope0.findScopeProperty($names[1], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:LaserCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[1]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::LaserCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2265:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 13;
                        if (13 != stack0) { p = 2369; continue; };
                        // 7 0:levels.collisions::AcidCollision
                        stack0 = scope0.findScopeProperty($names[32], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:AcidCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[32]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::AcidCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2369:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 14;
                        if (14 != stack0) { p = 2475; continue; };
                        // 7 0:levels.collisions::PitCollision
                        stack0 = scope0.findScopeProperty($names[33], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:PitCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[33]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::PitCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2475:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 15;
                        if (15 != stack0) { p = 2581; continue; };
                        // 7 0:levels.collisions::VerticalLaserCollision
                        stack0 = scope0.findScopeProperty($names[34], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:VerticalLaserCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[34]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::VerticalLaserCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2581:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 16;
                        if (16 != stack0) { p = 2687; continue; };
                        // 7 0:levels.collisions::FanCollision
                        stack0 = scope0.findScopeProperty($names[35], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:FanCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[35]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::FanCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2687:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 17;
                        if (17 != stack0) { p = 2793; continue; };
                        // 7 0:levels.collisions::SpinningCircleCollision
                        stack0 = scope0.findScopeProperty($names[36], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:SpinningCircleCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[36]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SpinningCircleCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2793:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 18;
                        if (18 != stack0) { p = 2899; continue; };
                        // 7 0:levels.collisions::HorizontalLaserCollision
                        stack0 = scope0.findScopeProperty($names[37], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:HorizontalLaserCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[37]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::HorizontalLaserCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 2899:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 190;
                        if (190 != stack0) { p = 3006; continue; };
                        // 7 0:levels.collisions::UpsideDownGravityChangerCollision
                        stack0 = scope0.findScopeProperty($names[38], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:UpsideDownGravityChangerCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[38]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::UpsideDownGravityChangerCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3006:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 33;
                        if (33 != stack0) { p = 3112; continue; };
                        // 7 0:levels.collisions::PlatformCollision
                        stack0 = scope0.findScopeProperty($names[39], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:PlatformCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[39]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::PlatformCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3112:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 19;
                        if (19 != stack0) { p = 3230; continue; };
                        // 7 0:levels.collisions::DownGravityChangerCollision
                        stack0 = scope0.findScopeProperty($names[40], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack7 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack7 = this.$BgcollisionsScript;
                        stack8 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack7[AX_CLASS_SYMBOL] ? stack7 : sec.box(stack7);

                            if (typeof simple === "number") {
                                stack7 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack7 = b_obj['$Bg' + simple];
                                if (stack7 === undefined || typeof stack7 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack7 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::data_1
                        //Possible type:7 0::Array
                        if (!(stack7 != undefined && stack7[AX_CLASS_SYMBOL])) {
                            stack7 = stack7['data_1'];
                        } else {
                            temp = stack7[AX_CLASS_SYMBOL] ? stack7 : sec.box(stack7);
                            stack7 = temp.$Bgdata_1;
                            if (stack7 === undefined || typeof stack7 === 'function') {
                                stack7 = temp.axGetProperty($names[41]);
                            }
                        }
                        //JIT: Support fast construct:DownGravityChangerCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6, stack7], $names[40]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::DownGravityChangerCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3230:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 20;
                        if (20 != stack0) { p = 3336; continue; };
                        // 7 0:levels.collisions::DoubleSpikeCollision
                        stack0 = scope0.findScopeProperty($names[42], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:DoubleSpikeCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[42]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::DoubleSpikeCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3336:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 21;
                        if (21 != stack0) { p = 3442; continue; };
                        // 7 0:levels.collisions::TunnelCircleCollision
                        stack0 = scope0.findScopeProperty($names[43], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:TunnelCircleCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[43]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::TunnelCircleCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3442:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 22;
                        if (22 != stack0) { p = 3548; continue; };
                        // 7 0:levels.collisions::HangingCircleCollision
                        stack0 = scope0.findScopeProperty($names[44], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:HangingCircleCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[44]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::HangingCircleCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3548:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 23;
                        if (23 != stack0) { p = 3654; continue; };
                        // 7 0:levels.collisions::SlimeSplitterIn
                        stack0 = scope0.findScopeProperty($names[45], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:SlimeSplitterIn/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[45]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SlimeSplitterIn
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3654:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 24;
                        if (24 != stack0) { p = 3760; continue; };
                        // 7 0:levels.collisions::SlimeSplitterOut
                        stack0 = scope0.findScopeProperty($names[46], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:SlimeSplitterOut/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[46]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SlimeSplitterOut
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3760:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 25;
                        if (25 != stack0) { p = 3830; continue; };
                        // 7 0:levels.collisions::FanAirCollision
                        stack0 = scope0.findScopeProperty($names[47], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
                        //JIT: Support fast construct:FanAirCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3], $names[47]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::FanAirCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3830:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 26;
                        if (26 != stack0) { p = 3937; continue; };
                        // 7 0:levels.collisions::HorizontalLaserCollision
                        stack0 = scope0.findScopeProperty($names[37], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
//                        stack7 = true;// JIT: redundant assigment, value unused
                        //JIT: Support fast construct:HorizontalLaserCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6, true], $names[37]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::HorizontalLaserCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 3937:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 27;
                        if (27 != stack0) { p = 4019; continue; };
                        // 7 0:levels.collisions::TickTockCollision
                        stack0 = scope0.findScopeProperty($names[48], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:TickTockCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4], $names[48]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::TickTockCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 4019:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 28;
                        if (28 != stack0) { p = 4101; continue; };
                        // 7 0:levels.collisions::SolidCircleCollision
                        stack0 = scope0.findScopeProperty($names[49], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
                        //JIT: Support fast construct:SolidCircleCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4], $names[49]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SolidCircleCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                        { p = 4203; continue; };
                    case 4101:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BgcollisionsScript;
                        stack1 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::type
                        //Possible type:7 0::Array
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['type'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgtype;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[4]);
                            }
                        }
                        stack1 = 29;
                        if (29 != stack0) { p = 4203; continue; };
                        // 7 0:levels.collisions::CrateCollision
                        stack0 = scope0.findScopeProperty($names[50], true, false);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::level
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:levels::Level  */ 
                        stack1 = this.$Bglevel;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BgcollisionsScript;
                        stack3 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::x
                        //Possible type:7 0::Array
                        if (!(stack2 != undefined && stack2[AX_CLASS_SYMBOL])) {
                            stack2 = stack2['x'];
                        } else {
                            temp = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);
                            stack2 = temp.$Bgx;
                            if (stack2 === undefined || typeof stack2 === 'function') {
                                stack2 = temp.axGetProperty($names[6]);
                            }
                        }
//                        stack3 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack3 = this.$BgcollisionsScript;
                        stack4 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);

                            if (typeof simple === "number") {
                                stack3 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack3 = b_obj['$Bg' + simple];
                                if (stack3 === undefined || typeof stack3 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack3 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::y
                        //Possible type:7 0::Array
                        if (!(stack3 != undefined && stack3[AX_CLASS_SYMBOL])) {
                            stack3 = stack3['y'];
                        } else {
                            temp = stack3[AX_CLASS_SYMBOL] ? stack3 : sec.box(stack3);
                            stack3 = temp.$Bgy;
                            if (stack3 === undefined || typeof stack3 === 'function') {
                                stack3 = temp.axGetProperty($names[7]);
                            }
                        }
//                        stack4 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack4 = this.$BgcollisionsScript;
                        stack5 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);

                            if (typeof simple === "number") {
                                stack4 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack4 = b_obj['$Bg' + simple];
                                if (stack4 === undefined || typeof stack4 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack4 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::width
                        //Possible type:7 0::Array
                        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
                            stack4 = stack4['width'];
                        } else {
                            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
                            stack4 = temp.$Bgwidth;
                            if (stack4 === undefined || typeof stack4 === 'function') {
                                stack4 = temp.axGetProperty($names[8]);
                            }
                        }
//                        stack5 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack5 = this.$BgcollisionsScript;
                        stack6 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);

                            if (typeof simple === "number") {
                                stack5 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack5 = b_obj['$Bg' + simple];
                                if (stack5 === undefined || typeof stack5 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack5 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::height
                        //Possible type:7 0::Array
                        if (!(stack5 != undefined && stack5[AX_CLASS_SYMBOL])) {
                            stack5 = stack5['height'];
                        } else {
                            temp = stack5[AX_CLASS_SYMBOL] ? stack5 : sec.box(stack5);
                            stack5 = temp.$Bgheight;
                            if (stack5 === undefined || typeof stack5 === 'function') {
                                stack5 = temp.axGetProperty($names[9]);
                            }
                        }
//                        stack6 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack6 = this.$BgcollisionsScript;
                        stack7 = local4;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local4;
                            const b_obj = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);

                            if (typeof simple === "number") {
                                stack6 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack6 = b_obj['$Bg' + simple];
                                if (stack6 === undefined || typeof stack6 === 'function') {
                                    const rm = context.runtimename($names[3], local4);
                                    stack6 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::rotation
                        //Possible type:7 0::Array
                        if (!(stack6 != undefined && stack6[AX_CLASS_SYMBOL])) {
                            stack6 = stack6['rotation'];
                        } else {
                            temp = stack6[AX_CLASS_SYMBOL] ? stack6 : sec.box(stack6);
                            stack6 = temp.$Bgrotation;
                            if (stack6 === undefined || typeof stack6 === 'function') {
                                stack6 = temp.axGetProperty($names[10]);
                            }
                        }
                        //JIT: Support fast construct:CrateCollision/LevelCollision/Object
                        stack0 = context.constructFast(stack0, [stack1, stack2, stack3, stack4, stack5, stack6], $names[50]);
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[11], true, false);
                            _e || console.warn('[constructor] Coerce Type not found:', "LevelCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local3 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::CrateCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.push(local3);
                        } else {
                            // 7 0:http://adobe.com/AS3/2006/builtin::push
                            {
                                let t = stack0;
                                const m = t.$Bgpush || (t = sec.box(stack0), t.$Bgpush);
                                if( typeof m === "function" ) { 
                                    m.call(t, local3);
                                } else { 
                                   stack0.axCallProperty($names[12], [local3], false);
                                }
                            }
                        }
                    case 4203:
                        local4 = (local4 | 0) + 1;
                    case 4205:
                        stack0 = local4;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::collisionsScript
                        //Possible type:7 0:levels::Level
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack1 = this.$BgcollisionsScript;
                        // 7 0::length
                        //Possible type:7 0::Array
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['length'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bglength;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[51]);
                            }
                        }
                        if (stack1 > local4) { p = 53; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/constructor.js
})