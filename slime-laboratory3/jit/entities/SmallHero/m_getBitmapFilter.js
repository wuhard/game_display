(function anonymous(context
) {
/*
	Index: 1105
	Path:  entities/SmallHero::m_getBitmapFilter
	Type:  Private
	Kind:  Method
	Super: entities/Entity
	Return: 7 0:flash.filters::BitmapFilter
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_getBitmapFilter() {
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
        // local9 is assigned before read, skip init
        let local9 = undefined
        // local10 is assigned before read, skip init
        let local10 = undefined
        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let stack6 = undefined;
        let stack7 = undefined;
        let stack8 = undefined;
        let stack9 = undefined;
        let stack10 = undefined;
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
           stack0 = stack0.GetSlimeShadowColor();
        } else {
            // 7 0::GetSlimeShadowColor
            {
                let t = stack0;
                const m = t.$BgGetSlimeShadowColor || (t = sec.box(stack0), t.$BgGetSlimeShadowColor);
                if( typeof m === "function" ) { 
                    stack0 = t.$BgGetSlimeShadowColor ();
                } else { 
                    stack0 = stack0.axCallProperty($names[1], [], false);
                }
            }
        }
        stack0 = +stack0;
        local1 = stack0;
        stack0 = 225;
        stack0 = +225;
        local2 = stack0;
        stack0 = 1;
        stack0 = +1;
        local3 = stack0;
        stack0 = 5;
        stack0 = +5;
        local4 = stack0;
        stack0 = 5;
        stack0 = +5;
        local5 = stack0;
        stack0 = 2;
        stack0 = +2;
        local6 = stack0;
        stack0 = 10;
        stack0 = +10;
        local7 = stack0;
//        stack0 = true;// JIT: redundant assigment, value unused
        local8 = true;
//        stack0 = false;// JIT: redundant assigment, value unused
        local9 = false;
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
        local10 = stack0;
        // 7 0:flash.filters::DropShadowFilter
        stack0 = scope0.findScopeProperty($names[4], true, false);
//        stack1 = local6;// JIT: redundant assigment, value unused
//        stack2 = local2;// JIT: redundant assigment, value unused
//        stack3 = local1;// JIT: redundant assigment, value unused
//        stack4 = local3;// JIT: redundant assigment, value unused
//        stack5 = local4;// JIT: redundant assigment, value unused
//        stack6 = local5;// JIT: redundant assigment, value unused
//        stack7 = local7;// JIT: redundant assigment, value unused
//        stack8 = local10;// JIT: redundant assigment, value unused
//        stack9 = local8;// JIT: redundant assigment, value unused
//        stack10 = local9;// JIT: redundant assigment, value unused
        stack0 = context.constructprop($names[4], stack0, [local6, local2, local1, local3, local4, local5, local7, local10, local8, local9]);
        return stack0;
    }
//# sourceURL=http://jit/entities/SmallHero/m_getBitmapFilter.js
})