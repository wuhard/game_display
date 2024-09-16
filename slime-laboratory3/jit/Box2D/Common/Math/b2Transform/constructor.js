(function anonymous(context
) {
/*
	Index: 280
	Path:  Box2D/Common/Math/b2Transform::constructor
	Type:  Public
	Kind:  null
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_constructor(local1 /* b2Vec2 */ = null, local2 /* b2Mat22 */ = null) {
        // Possible use a real "this"

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
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Vec2
                        stack1 = scope0.findScopeProperty($names[0], true, false);
                        //JIT: Support fast construct:b2Vec2/Object
                        stack1 = context.constructFast(stack1, [], $names[0]);
                        // 7 0::position
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        this.$Bgposition = stack1;
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0:Box2D.Common.Math::b2Mat22
                        stack1 = scope0.findScopeProperty($names[1], true, false);
                        //JIT: Support fast construct:b2Mat22/Object
                        stack1 = context.constructFast(stack1, [], $names[1]);
                        // 7 0::R
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0:Box2D.Common.Math::b2Mat22  */ 
                        this.$BgR = stack1;
                        stack0 = this;
                        context.savedScope.superConstructor.call(this, );
                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2
                        stack0 = local1;
                        //JIT: Emit inline return
                        if (!local1) { return; }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::position
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Vec2  */ 
                        stack0 = this.$Bgposition;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Vec2// JIT: redundant assigment, value unused
                        stack1 = local1;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetV(local1);
                        } else {
                            // 7 0::SetV
                            {
                                let t = stack0;
                                const m = t.$BgSetV || (t = sec.box(stack0), t.$BgSetV);
                                if( typeof m === "function" ) { 
                                    m.call(t, local1);
                                } else { 
                                   stack0.axCallProperty($names[2], [local1], false);
                                }
                            }
                        }
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::R
                        //Possible type:7 0:Box2D.Common.Math::b2Vec2
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0:Box2D.Common.Math::b2Mat22  */ 
                        stack0 = this.$BgR;
//                        // JIT: potential type:7 0:Box2D.Common.Math::b2Mat22// JIT: redundant assigment, value unused
                        stack1 = local2;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                            stack0.SetM(local2);
                        } else {
                            // 7 0::SetM
                            {
                                let t = stack0;
                                const m = t.$BgSetM || (t = sec.box(stack0), t.$BgSetM);
                                if( typeof m === "function" ) { 
                                    m.call(t, local2);
                                } else { 
                                   stack0.axCallProperty($names[3], [local2], false);
                                }
                            }
                        }
                    case 46:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Transform/constructor.js
})