(function anonymous(context
) {
/*
	Index: 626
	Path:  levels/collisions/CollisionsManager::m_updateScreenPositions
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateScreenPositions(local1 /* Rectangle */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        let p = 0;
        while (true) {
            switch (p) {
                    case 0:
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local2 = 0;
                        { p = 41; continue; };
                    case 12:
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
                        if (null == stack0) { p = 39; continue; };
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
//                        // JIT: potential type:7 0:flash.geom::Rectangle// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.updateScreenPosition(local1);
                        } else {
                            // 9 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::updateScreenPosition
                            {
                                let t = stack0;
                                const m = t.$BgupdateScreenPosition || (t = sec.box(stack0), t.$BgupdateScreenPosition);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1);
                                } else { 
                                   stack0.axCallProperty($names[1], [local1], false);
                                }
                            }
                        }
                    case 39:
                        local2 = (local2 | 0) + 1;
                    case 41:
                        stack0 = local2;
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:undefined
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
                                stack1 = temp.axGetProperty($names[2]);
                            }
                        }
                        if (stack1 > local2) { p = 12; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/m_updateScreenPositions.js
})