(function anonymous(context
) {
/*
	Index: 552
	Path:  Box2D/Common/Math/b2Math.IsValid
	Type:  Public
	Kind:  Method
	Super: -
	Return: 7 0::Boolean
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_IsValid(local1 /* Number */) {
        // Possible use a real "this"
        /* Force Number coerce */
        local1 = (+local1);

        let stack0 = undefined;
        let stack1 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::isFinite
        stack0 = scope0.findScopeProperty($names[0], true, false);
//        // JIT: potential type:7 0::Number// JIT: redundant assigment, value unused
        stack1 = local1;
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.isFinite(local1);
        } else {
            // 7 0::isFinite
            {
                let t = stack0;
                const m = t.$BgisFinite || (t = sec.box(stack0), t.$BgisFinite);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgisFinite (local1);
                } else { 
                    stack0 = stack0.axCallProperty($names[0], [local1], false);
                }
            }
        }
        return (!!stack0);
    }
//# sourceURL=http://jit/Box2D/Common/Math/b2Math/IsValid.js
})