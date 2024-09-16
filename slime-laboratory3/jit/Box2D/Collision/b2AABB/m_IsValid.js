(function anonymous(context
) {
/*
	Index: 503
	Path:  Box2D/Collision/b2AABB::m_IsValid
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_IsValid() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
                        //IR: PUSHSCOPE removed, reason: unused
                        // unreachable
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgupperBound;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['x'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgx;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[0]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BglowerBound;
                        // 7 0::x
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['x'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgx;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[0]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local1 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgupperBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['y'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgy;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack1 = this.$BglowerBound;
                        // 7 0::y
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['y'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$Bgy;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[1]);
                            }
                        }
                        stack0 -= stack1;
                        stack0 = +stack0;
                        local2 = stack0;
                        stack0 = local1;
                        stack1 = 0;
                        stack0 = local1 >= 0;
                        stack1 = stack0;
                        if (!stack1) { p = 50; continue; };
                        stack0 = local2;
                        stack1 = 0;
                        stack0 = local2 >= 0;
                    case 50:
                        //IR: CONVERT_B removed, reason: arguments strictly boolean
                        local3 = stack0;
                        stack0 = local3;
                        stack0 = !!local3;
                        stack1 = stack0;
                        if (!stack1) { p = 69; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::lowerBound
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BglowerBound;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsValid();
                        } else {
                            // 7 0::IsValid
                            {
                                let t = stack0;
                                const m = t.$BgIsValid || (t = sec.box(stack0), t.$BgIsValid);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsValid ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                    case 69:
                        stack1 = stack0;
                        if (!stack1) { p = 84; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::upperBound
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$BgupperBound;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsValid();
                        } else {
                            // 7 0::IsValid
                            {
                                let t = stack0;
                                const m = t.$BgIsValid || (t = sec.box(stack0), t.$BgIsValid);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsValid ();
                                } else { 
                                    stack0 = stack0.axCallProperty($names[2], [], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                    case 84:
                        stack0 = !!stack0;
                        local3 = stack0;
                        stack0 = local3;
                        return (!!local3);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Collision/b2AABB/m_IsValid.js
})