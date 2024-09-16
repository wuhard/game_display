(function anonymous(context
) {
/*
	Index: 622
	Path:  levels/collisions/CollisionsManager::m_fetchAndMeltSnow
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_fetchAndMeltSnow(local1 /* b2Body */) {
        // Possible use a real "this"
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
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
                        stack0 = this;
                        scope0 = context.savedScope.extend(this);
//                        stack0 = null;// JIT: redundant assigment, value unused
                        //JIT: SKIP_NULL_COERCE
                        local2 = null;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local3 = 0;
                        { p = 72; continue; };
                    case 14:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:undefined
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local3;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        stack1 = null;
                        if (null == stack0) { p = 70; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local3;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        // 7 0:levels.collisions::SnowTileCollision
                        temp = scope0.findScopeProperty($names[1], true, false);
                        stack1 = temp.$BgSnowTileCollision;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[1]);
                        }
                        stack0 = stack1.axIsType(stack0);
                        if (!stack0) { p = 70; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::levelCollisions
                        //Possible type:7 0::Array
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Array  */ 
                        stack0 = this.$BglevelCollisions;
                        stack1 = local3;
                        // 27 {3, 0, 0:levels.collisions, 1:levels.collisions:CollisionsManager, 3, 2:levels.collisions, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 0:flash.geom, 0:entities, 0:levels, 5:levels.collisions:CollisionsManager}::*
                        {
                            let simple = local3;
                            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

                            if (typeof simple === "number") {
                                stack0 = b_obj.axGetNumericProperty(simple);
                            } else {
                                stack0 = b_obj['$Bg' + simple];
                                if (stack0 === undefined || typeof stack0 === 'function') {
                                    const rm = context.runtimename($names[0], local3);
                                    stack0 = b_obj.axGetProperty(rm);
                                }
                            }
                        }
                        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            var _e = scope0.getScopeProperty($names[1], true, false);
                            _e || console.warn('[m_fetchAndMeltSnow] Coerce Type not found:', "SnowTileCollision")
                            stack0 = _e ? _e.axCoerce(stack0) : stack0;
                        }
                        local2 = stack0;
//                        stack0 = local2;// JIT: redundant assigment, value unused
                        // 7 0::body
                        //Possible type:7 0::Array
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])) {
                            stack0 = local2['body'];
                        } else {
                            temp = local2[AX_CLASS_SYMBOL] ? local2 : sec.box(local2);
                            stack0 = temp.$Bgbody;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // JIT: potential type:7 0:Box2D.Dynamics::b2Body
                        stack1 = local1;
                        if (local1 != stack0) { p = 70; continue; };
//                        stack0 = local2;// JIT: redundant assigment, value unused
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::COLLISION_FLAG
                        if (!(local2 != undefined && local2[AX_CLASS_SYMBOL])){
                            local2.COLLISION_FLAG = true;
                        } else {
                            context.setproperty($names[3], true, local2);
                        }
                    case 70:
                        local3 = (local3 | 0) + 1;
                    case 72:
                        stack0 = local3;
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
                                stack1 = temp.axGetProperty($names[4]);
                            }
                        }
                        if (stack1 > local3) { p = 14; continue; };
                        return;
                    }
                }
            }
//# sourceURL=http://jit/levels/collisions/CollisionsManager/m_fetchAndMeltSnow.js
})