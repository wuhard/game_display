(function anonymous(context
) {
/*
	Index: 254
	Path:  Box2D/Common/Math/b2Vec2::m_Length
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_Length() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack0 = __Math;// JIT: redundant assigment, value unused
//        stack1 = this;// JIT: redundant assigment, value unused
        // 7 0::x
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack1 = this.$Bgx;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::x
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgx;
        stack1 *= stack2;
//        stack2 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        //Possible type:7 0::Number
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack2 = this.$Bgy;
//        stack3 = this;// JIT: redundant assigment, value unused
        // 7 0::y
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
        stack3 = this.$Bgy;
        stack2 *= stack3;
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
                    stack0 = __Math.axCallProperty($names[1], [stack1], false);
                }
            }
        }
        return (+stack0);
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_Length.js
})