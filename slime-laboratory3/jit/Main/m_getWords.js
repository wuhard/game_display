(function anonymous(context
) {
/*
	Index: 2432
	Path:  Main::m_getWords
	Type:  Private
	Kind:  Method
	Super: flash/display/MovieClip
	Return: 7 0::String
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getWords(local1 /* String */, local2 /* int */) {
        // Possible use a real "this"
        /* Force String coerce */
        local1 = (local1==null?null:''+ local1);
        /* Force int coerce */
        local2 = (local2|0);
        // local3 is assigned before read, skip init
        let local3 = undefined
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
//        stack1 = " ";// JIT: redundant assigment, value unused
        if (!(_a = typeof local1, ((_a !== 'object' && _a !== 'function' ) || local1 == null || local1[AX_CLASS_SYMBOL]))) {
           stack0 = local1.split(" ");
        } else {
            // 7 0:http://adobe.com/AS3/2006/builtin::split
            {
                let t = local1;
                const m = t.$Bgsplit || (t = sec.box(local1), t.$Bgsplit);
                if( typeof m === "function" ) { 
                    stack0 = t.$Bgsplit (" ");
                } else { 
                    stack0 = local1.axCallProperty($names[0], [" "], false);
                }
            }
        }
        if ((stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            var _e = scope0.getScopeProperty($names[1], true, false);
            _e || console.warn('[m_getWords] Coerce Type not found:', "Array")
            stack0 = _e ? _e.axCoerce(stack0) : stack0;
        }
        local3 = stack0;
        stack0 = local3;
        // JIT: potential type:7 0::int
        stack1 = local2;
        // 27 {3, 0, 0:flash.display, 0:http://adobe.com/AS3/2006/builtin, 0:flash.events, 3, 2, 0:flash.utils, 1:Main, 5:Main, 5:flash.display:MovieClip, 5:flash.display:Sprite, 5:flash.display:DisplayObjectContainer, 5:flash.display:InteractiveObject, 5:flash.display:DisplayObject, 5:flash.events:EventDispatcher}::*
        {
            let simple = local2;
            const b_obj = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);

            if (typeof simple === "number") {
                stack0 = b_obj.axGetNumericProperty(simple);
            } else {
                stack0 = b_obj['$Bg' + simple];
                if (stack0 === undefined || typeof stack0 === 'function') {
                    const rm = context.runtimename($names[2], local2);
                    stack0 = b_obj.axGetProperty(rm);
                }
            }
        }
        return (stack0==null?null:''+ stack0);
    }
//# sourceURL=http://jit/Main/m_getWords.js
})