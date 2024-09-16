(function anonymous(context
) {
/*
	Index: 642
	Path:  levels/ScriptManager::m_getFirstParamValue
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::int
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getFirstParamValue(local1 /* String */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        // local2 is assigned before read, skip init
        let local2 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
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
            _e || console.warn('[m_getFirstParamValue] Coerce Type not found:', "Array")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local2 = stack0;
        stack0 = local2;
        stack1 = 1;
        // 27 {3, 0:levels, 0, 0:http://adobe.com/AS3/2006/builtin, 0:flash.display, 3, 2:levels, 0:flash.events, 0:flash.geom, 0:entities, 0:entities.enemies, 0:levels.collisions, 1:levels:ScriptManager, 5:levels:ScriptManager}::*
        {
            let simple = 1;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[2], 1);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        return (stack0|0);
    }
//# sourceURL=http://jit/levels/ScriptManager/m_getFirstParamValue.js
})