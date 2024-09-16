(function anonymous(context
) {
/*
	Index: 1661
	Path:  levels/collisions/SlimeContainer::m_dropRequest
	Type:  Public
	Kind:  Method
	Super: levels/collisions/LevelCollision
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;

     /* e */
     const __Math = context.getTopLevel(1)['$BgMath']; // :Math

    return function compiled_m_dropRequest() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
//        stack1 = true;// JIT: redundant assigment, value unused
        // 7 0::slimeDropRequest
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::Boolean  */ 
        this.$BgslimeDropRequest = true;
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::int
        temp = scope0.findScopeProperty($names[0], true, false);
        stack1 = temp.$Bgint;
        if (stack1 === undefined || typeof stack1 === 'function') {
            stack1 = temp.axGetProperty($names[0]);
        }
        stack2 = context.savedScope.global.object;
        // 7 0::Math
        /* GenerateLexImports GETLEX */
//        stack3 = __Math;// JIT: redundant assigment, value unused
        if (!(_a = typeof __Math, ((_a !== 'object' && _a !== 'function' ) || __Math == null || __Math[AX_CLASS_SYMBOL]))) {
           stack3 = __Math.random();
        } else {
            // 7 0::random
            {
                let t = __Math;
                const m = t.$Bgrandom || (t = sec.box(__Math), t.$Bgrandom);
                if( typeof m === "function" ) { 
                    stack3 = t.$Bgrandom ();
                } else { 
                    stack3 = __Math.axCallProperty($names[2], [], false);
                }
            }
        }
//        stack4 = 30;// JIT: redundant assigment, value unused
        stack3 *= 30;
        stack1 = context.call(stack1, stack2, [stack3], scope0);
        // 7 0::dropDelay
        /* We sure that this safe set, represented in TRAIT as Slot, with type: 7 0::int  */ 
        this.$BgdropDelay = (stack1|0);
        return;
    }
//# sourceURL=http://jit/levels/collisions/SlimeContainer/m_dropRequest.js
})