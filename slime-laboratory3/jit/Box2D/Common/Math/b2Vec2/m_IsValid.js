(function anonymous(context
) {
/*
	Index: 257
	Path:  Box2D/Common/Math/b2Vec2::m_IsValid
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_IsValid() {
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
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::x
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgx;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsValid(stack1);
                        } else {
                            // 7 0::IsValid
                            {
                                let t = stack0;
                                const m = t.$BgIsValid || (t = sec.box(stack0), t.$BgIsValid);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsValid (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                        stack1 = stack0;
                        if (!stack1) { p = 32; continue; };
                        // 7 0:Box2D.Common.Math::b2Math
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$Bgb2Math;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgy;
                        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
                           stack0 = stack0.IsValid(stack1);
                        } else {
                            // 7 0::IsValid
                            {
                                let t = stack0;
                                const m = t.$BgIsValid || (t = sec.box(stack0), t.$BgIsValid);
                                if( typeof m === "function" ) { 
                                    stack0 = t.$BgIsValid (stack1);
                                } else { 
                                    stack0 = stack0.axCallProperty($names[1], [stack1], false);
                                }
                            }
                        }
                        stack0 = !!stack0;
                    case 32:
                        return (!!stack0);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_IsValid.js
})