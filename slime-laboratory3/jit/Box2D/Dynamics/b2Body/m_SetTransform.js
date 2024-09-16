(function anonymous(context
) {
/*
	Index: 320
	Path:  Box2D/Dynamics/b2Body::m_SetTransform
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_SetTransform(local1 /* b2Transform */) {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        //IR: PUSHSCOPE removed, reason: unused
        // unreachable
//        stack0 = this;// JIT: redundant assigment, value unused
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack1 = local1;
        // 7 0::position
        if (!(local1 != undefined && local1[AX_CLASS_SYMBOL])) {
            stack1 = local1['position'];
        } else {
            temp = local1[AX_CLASS_SYMBOL] ? local1 : sec.box(local1);
            stack1 = temp.$Bgposition;
            if (stack1 === undefined || typeof stack1 === 'function') {
                stack1 = temp.axGetProperty($names[0]);
            }
        }
//        // JIT: potential type:7 0:Box2D.Common.Math::b2Transform// JIT: redundant assigment, value unused
        stack2 = local1;
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
           stack2 = local1.GetAngle();
        } else {
            // 7 0::GetAngle
            {
                let t = local1;
                const m = t.$BgGetAngle || (t = sec.box(local1), t.$BgGetAngle);
                if( typeof m === "function" ) { 
                    stack2 = t.$BgGetAngle ();
                } else { 
                    stack2 = local1.axCallProperty($names[1], [], false);
                }
            }
        }
        /* We sure that this safe call, represented in TRAIT as Method  */ 
        this.$BgSetPositionAndAngle(stack1, stack2);
        return;
    }
//# sourceURL=http://jit/Box2D/Dynamics/b2Body/m_SetTransform.js
})