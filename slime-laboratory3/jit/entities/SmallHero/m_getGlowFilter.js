(function anonymous(context
) {
/*
	Index: 1104
	Path:  entities/SmallHero::m_getGlowFilter
	Type:  Private
	Kind:  Method
	Super: entities/Entity
	Return: 7 0:flash.filters::BitmapFilter
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getGlowFilter() {
        // Possible use a real "this"
        // local1 is assigned before read, skip init
        let local1 = undefined
        // local2 is assigned before read, skip init
        let local2 = undefined
        // local3 is assigned before read, skip init
        let local3 = undefined
        // local4 is assigned before read, skip init
        let local4 = undefined
        // local5 is assigned before read, skip init
        let local5 = undefined
        // local6 is assigned before read, skip init
        let local6 = undefined
        // local7 is assigned before read, skip init
        let local7 = undefined
        // local8 is assigned before read, skip init
        let local8 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
        let stack8 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[0], true, false);
        stack0 = temp.$BgUtils;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[0]);
        }
        if (!(_a = typeof stack0, ((_a !== 'object' && _a !== 'function' ) || stack0 == null || stack0[AX_CLASS_SYMBOL]))) {
           stack0 = stack0.GetSlimeOutlineColor();
        } else {
            // 7 0::GetSlimeOutlineColor
            {
                let t = stack0;
                const m = t.$BgGetSlimeOutlineColor || (t = sec.box(stack0), t.$BgGetSlimeOutlineColor);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgGetSlimeOutlineColor ();
                } else { 
                    stack0 = stack0.axCallProperty($names[1], [], false);
                }
            }
        }
        stack0 = +stack0;
        local1 = stack0;
//        stack0 = 0.8;// JIT: redundant assigment, value unused
        //IR: CONVERT_D removed, reason: arguments strictly number
        local2 = 0.8;
        stack0 = 1;
        stack0 = +1;
        local3 = stack0;
        stack0 = 1;
        stack0 = +1;
        local4 = stack0;
        stack0 = 10;
        stack0 = +10;
        local5 = stack0;
//        stack0 = false;// JIT: redundant assigment, value unused
        local6 = false;
//        stack0 = false;// JIT: redundant assigment, value unused
        local7 = false;
        // 7 0:flash.filters::BitmapFilterQuality
        temp = scope0.findScopeProperty($names[2], true, false);
        stack0 = temp.$BgBitmapFilterQuality;
        if (stack0 === undefined || typeof stack0 === 'function') {
            stack0 = temp.axGetProperty($names[2]);
        }
        // 7 0::LOW
        //Possible type:7 0:flash.filters::BitmapFilterQuality
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['LOW'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$BgLOW;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[3]);
            }
        }
        stack0 = +stack0;
        local8 = stack0;
        // 7 0:flash.filters::GlowFilter
        stack0 = scope0.findScopeProperty($names[4], true, false);
//        stack1 = local1;// JIT: redundant assigment, value unused
//        stack2 = local2;// JIT: redundant assigment, value unused
//        stack3 = local3;// JIT: redundant assigment, value unused
//        stack4 = local4;// JIT: redundant assigment, value unused
//        stack5 = local5;// JIT: redundant assigment, value unused
//        stack6 = local8;// JIT: redundant assigment, value unused
//        stack7 = local6;// JIT: redundant assigment, value unused
//        stack8 = local7;// JIT: redundant assigment, value unused
        //JIT: Support fast construct:GlowFilter/BitmapFilter
        stack0 = context.constructFast(stack0, [local1, local2, local3, local4, local5, local8, local6, local7], $names[4]);
        return stack0;
    }
//# sourceURL=http://jit/entities/SmallHero/m_getGlowFilter.js
})