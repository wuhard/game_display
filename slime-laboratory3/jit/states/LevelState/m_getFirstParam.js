(function anonymous(context
) {
/*
	Index: 970
	Path:  states/LevelState::m_getFirstParam
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::int
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getFirstParam(local1 /* String */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        // JIT: potential type:7 0::String// JIT: redundant assigment, value unused
        stack0 = local1;
//        stack1 = "_";// JIT: redundant assigment, value unused
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
           stack0 = local1.split("_");
        } else {
            // 7 0:http://adobe.com/AS3/2006/builtin::split
            {
                let t = local1;
                const m = t.$Bgsplit || (t = sec.box(local1), t.$Bgsplit);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgsplit ("_");
                } else { 
                    stack0 = local1.axCallProperty($names[0], ["_"], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[1], true, false);
            _e || console.warn('[m_getFirstParam] Coerce Type not found:', "Array")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local2 = stack0;
        // 7 0::Number
        stack0 = scope0.findScopeProperty($names[2], true, false);
        stack1 = local2;
        stack2 = 1;
        // 27 {3, 0, 1:states:LevelState, 0:levels, 0:flash.display, 0:flash.events, 3, 0:states, 2:states, 0:http://adobe.com/AS3/2006/builtin, 0:flash.net, 0:flash.ui, 5:states:LevelState}::*
        {
            let simple = 1;
            const b_obj = stack1[AX_CLASS_SYMBOL] ? stack1 : sec.box(stack1);

            if (typeof simple === "number") {
                stack1 = b_obj.axGetNumericProperty(simple);
            } else {
                stack1 = b_obj['$Bg' + simple];
                if (stack1 === undefined || typeof stack1 === 'function') {
                    const rm = context.runtimename($names[3], 1);
                    stack1 = b_obj.axGetProperty(rm);
                }
            }
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.Number(stack1);
        } else {
            // 7 0::Number
            {
                let t = stack0;
                const m = t.$BgNumber || (t = sec.box(stack0), t.$BgNumber);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgNumber (stack1);
                } else { 
                    stack0 = stack0.axCallProperty($names[2], [stack1], false);
                }
            }
        }
        return (stack0|0);
    }
//# sourceURL=http://jit/states/LevelState/m_getFirstParam.js
})