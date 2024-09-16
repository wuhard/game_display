(function anonymous(context
) {
/*
	Index: 33
	Path:  Utils.EvaluateGfxScale
	Type:  StaticProtected
	Kind:  Method
	Super: -
	Return: 7 0::Number
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_EvaluateGfxScale() {
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
        let stack0 = undefined;
        let stack1 = undefined;
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
                        stack0 = 320;
                        stack0 = +320;
                        local1 = stack0;
                        stack0 = 200;
                        stack0 = +200;
                        local2 = stack0;
                        stack0 = 10;
                        stack0 = +10;
                        local3 = stack0;
//                        stack0 = 0;// JIT: redundant assigment, value unused
                        local4 = 0;
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local5 = false;
                        { p = 74; continue; };
                    case 27:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::__width
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['__width'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bg__width;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        stack0 /= local3;
                        stack0 |= 0;
                        local4 = stack0;
                        stack0 = local1;
                        stack1 = local4;
                        if (!(local4 < local1)) { p = 71; continue; };
                        stack0 = local3;
                        stack1 = 2;
                        if (!(2 < local3)) { p = 61; continue; };
                        stack0 = local3;
                        stack0--;
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local3 = stack0;
                        { p = 67; continue; };
                    case 61:
                        stack0 = local3;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 -= 0.5;
                        stack0 = +stack0;
                        local3 = stack0;
                    case 67:
                        { p = 74; continue; };
                    case 71:
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local5 = true;
                    case 74:
                        stack0 = local5;
                        stack1 = false;
                        if (false == local5) { p = 27; continue; };
//                        stack0 = false;// JIT: redundant assigment, value unused
                        local5 = false;
                        { p = 135; continue; };
                    case 88:
                        // 7 0::Utils
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgUtils;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::__height
                        //Possible type:7 0::Utils
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['__height'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bg__height;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
//                        stack1 = local3;// JIT: redundant assigment, value unused
                        stack0 /= local3;
                        stack0 |= 0;
                        local4 = stack0;
                        stack0 = local2;
                        stack1 = local4;
                        if (!(local4 < local2)) { p = 132; continue; };
                        stack0 = local3;
                        stack1 = 2;
                        if (!(2 < local3)) { p = 122; continue; };
                        stack0 = local3;
                        stack0--;
                        //IR: CONVERT_D removed, reason: arguments strictly number
                        local3 = stack0;
                        { p = 128; continue; };
                    case 122:
                        stack0 = local3;
//                        stack1 = 0.5;// JIT: redundant assigment, value unused
                        stack0 -= 0.5;
                        stack0 = +stack0;
                        local3 = stack0;
                    case 128:
                        { p = 135; continue; };
                    case 132:
//                        stack0 = true;// JIT: redundant assigment, value unused
                        local5 = true;
                    case 135:
                        stack0 = local5;
                        stack1 = false;
                        if (false == local5) { p = 88; continue; };
                        stack0 = local3;
                        return (+local3);
                    }
                }
            }
//# sourceURL=http://jit/Utils/EvaluateGfxScale.js
})