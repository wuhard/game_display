(function anonymous(context
) {
/*
	Index: 628
	Path:  levels/collisions/CollisionsManager::m_createSlime
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_createSlime() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local1 = 0;
                        { p = 83; continue; };
                    case 12:
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
                        if (null == stack0) { p = 81; continue; };
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
                        // 7 0:levels.collisions::SlimeContainer
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgSlimeContainer;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 81; continue; };
                        // 7 0:levels.collisions::SlimeContainer
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgSlimeContainer;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        stack1 = context.savedScope.global.object;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BglevelCollisions;
                        stack3 = local1;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::slimeCollision
                        //Possible type:7 0:levels.collisions::SlimeContainer
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['slimeCollision'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgslimeCollision;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::destroy
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['destroy'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdestroy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!stack0) { p = 81; continue; };
                        // 7 0:levels.collisions::SlimeContainer
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack0 = temp.$BgSlimeContainer;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[1]);
                        }
                        stack1 = context.savedScope.global.object;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack2 = this.$BglevelCollisions;
                        stack3 = local1;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local1;
                            const b_obj = stack2[AX_CLASS_SYMBOL] ? stack2 : sec.box(stack2);

                            if (typeof simple === "number") {
                                stack2 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack2 = b_obj['$Bg' + simple];
                                if (stack2 === undefined || typeof stack2 === 'function') {
                                    const rm = context.runtimename($names[0], local1);
                                    stack2 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack0 = context.call(stack0, stack1, [stack2], scope0);
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.dropRequest();
                        } else {
                            // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::dropRequest
                            {
                                let t = stack0;
                                const m = t.$BgdropRequest || (t = sec.box(stack0), t.$BgdropRequest);
                                if( typeof m === "function" ) { 
                                    m.call(t);
                                } else { 
                                   stack0.axCallProperty($names[4], [], false);
                                }
                            }
                        }
                    case 81:
                        local1 = (local1 | 0) + 1;
                    case 83:
                        stack0 = local1;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0:levels.collisions::SlimeContainer
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
                                stack1 = temp.axGetProperty($names[5]);
                            }
                        }
                        if (stack1 > local1) { p = 12; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/m_createSlime.js
})