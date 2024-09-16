(function anonymous(context
) {
/*
	Index: 618
	Path:  levels/collisions/CollisionsManager::m_switchTickTock
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_switchTickTock(local1 /* Boolean */ = false) {
        // Possible use a real "this"
        /* Force Boolean coerce */
        local1 = (!!local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
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
                        local2 = 0;
                        // JIT: potential type:7 0::Boolean
                        stack0 = local1;
                        stack0 = !!local1;
                        stack1 = stack0;
                        if (!stack1) { p = 20; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::last_switch
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::int  */ 
                        stack0 = this.$Bglast_switch;
                        stack1 = 10;
                        stack0 = stack0 < 10;
                    case 20:
                        if (!stack0) { p = 25; continue; };
                        return;
                    case 25:
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = 0;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::last_switch
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
                        this.$Bglast_switch = 0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::IS_TICK
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack1 = this.$BgIS_TICK;
                        stack1 = !stack1;
                        // 7 1:levels.collisions:CollisionsManager::IS_TICK
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
                        this.$BgIS_TICK = (!!stack1);
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        { p = 101; continue; };
                    case 47:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local2;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local2);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 99; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local2;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local2;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local2);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:levels.collisions::TickTockCollision
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgTickTockCollision;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 99; continue; };
                        // 7 0:levels.collisions::TickTockCollision
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgTickTockCollision;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        stack1 = context.savedScope.global.object;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BglevelCollisions;
                        stack3 = local2;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local2;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[0], local2);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 1:levels.collisions:CollisionsManager::IS_TICK
                        //Possible type:7 0:levels.collisions::TickTockCollision
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Boolean  */ 
                        stack1 = this.$BgIS_TICK;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.switchTickTock(stack1);
                        } else {
                            // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::switchTickTock
                            {
                                let t = stack0;
                                const m = t.$BgswitchTickTock || (t = sec.box(stack0), t.$BgswitchTickTock);
                                if( typeof m === "function" ) { 
                                    m.call(t, stack1);
                                } else { 
                                   stack0.axCallProperty($names[2], [stack1], false);
                                }
                            }
                        }
                    case 99:
                        local2 = (local2 | 0) + 1;
                    case 101:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0::Boolean
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
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (stack1 > local2) { p = 47; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/m_switchTickTock.js
})