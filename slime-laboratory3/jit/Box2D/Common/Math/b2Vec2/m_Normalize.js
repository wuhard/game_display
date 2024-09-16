(function anonymous(context
) {
/*
	Index: 256
	Path:  Box2D/Common/Math/b2Vec2::m_Normalize
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

             /* e */
             const __Math = context.getTopLevel(0)['$BgMath']; // :Math

    return function compiled_m_Normalize() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
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
                        // 7 0::Math
                        /* GenerateLexImports GETLEX */
//                        stack0 = __Math;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::x
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgx;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::x
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgx;
                        stack1 *= stack2;
//                        stack2 = this;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack2 = this.$Bgy;
//                        stack3 = this;// JIT: redundant assigment, value unused
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
                        stack0 = +stack0;
                        local1 = stack0;
                        stack0 = local1;
                        // 7 0::Number
                        temp = scope0.findScopeProperty($names[2], true, false);
                        stack1 = temp.$BgNumber;
                        if (stack1 === undefined || typeof stack1 === 'function') {
                            stack1 = temp.axGetProperty($names[2]);
                        }
                        // 7 0::MIN_VALUE
                        //Possible type:7 0::Number
                        if (!(stack1 != undefined && stack1[AX_CLASS_SYMBOL])) {
                            stack1 = stack1['MIN_VALUE'];
                        } else {
                            temp = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);
                            stack1 = temp.$BgMIN_VALUE;
                            if (stack1 === undefined || typeof stack1 === 'function') {
                                stack1 = temp.axGetProperty($names[3]);
                            }
                        }
                        if (!(stack1 > local1)) { p = 43; continue; };
                        stack0 = 0;
                        return 0;
                    case 43:
                        stack0 = 1;
//                        stack1 = local1;// JIT: redundant assigment, value unused
                        stack0 /= local1;
                        stack0 = +stack0;
                        local2 = stack0;
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::x
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgx;
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        stack1 *= local2;
                        // 7 0::x
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgx = (+stack1);
//                        stack0 = this;// JIT: redundant assigment, value unused
//                        stack1 = this;// JIT: redundant assigment, value unused
                        // 7 0::y
                        //Possible type:7 0::Number
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::Number  */ 
                        stack1 = this.$Bgy;
//                        stack2 = local2;// JIT: redundant assigment, value unused
                        stack1 *= local2;
                        // 7 0::y
                        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Number  */ 
                        this.$Bgy = (+stack1);
                        stack0 = local1;
                        return (+local1);
                    }
                }
            }
//# sourceURL=http://jit/Box2D/Common/Math/b2Vec2/m_Normalize.js
})