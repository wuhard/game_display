(function anonymous(context
) {
/*
	Index: 976
	Path:  states/LevelState::m_updateGlassesSelector
	Type:  Protected
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_updateGlassesSelector() {
        // Possible use a real "this"

        let stack0 = undefined;
        let stack1 = undefined;
        let stack2 = undefined;
        let stack3 = undefined;
        let stack4 = undefined;
        let stack5 = undefined;
        let scope0 = undefined;
        let temp = undefined;
        let sec = context.sec;
        let $names = context.names;

        
        stack0 = this;
        scope0 = context.savedScope.extend(this);
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::glassesPanel
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
        stack0 = this.$BgglassesPanel;
        // 7 0::selector
        //Possible type:7 0::ShadesPanel
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['selector'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgselector;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        stack1 = 22;
        // 7 0::int
        temp = scope0.findScopeProperty($names[1], true, false);
        stack2 = temp.$Bgint;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[1]);
        }
        stack3 = context.savedScope.global.object;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack4 = temp.$BgUtils;
        if (stack4 === undefined || typeof stack4 === 'function') {
            stack4 = temp.axGetProperty($names[2]);
        }
        // 7 0::SKIN_1
        //Possible type:7 0::Utils
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['SKIN_1'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$BgSKIN_1;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[3]);
            }
        }
//        stack5 = 6;// JIT: redundant assigment, value unused
        stack4 %= 6;
        stack2 = context.call(stack2, stack3, [stack4], scope0);
//        stack3 = 48;// JIT: redundant assigment, value unused
        stack2 *= 48;
        stack1 += stack2;
        // 7 0::x
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.x = stack1;
        } else {
            context.setproperty($names[4], stack1, stack0);
        }
//        stack0 = this;// JIT: redundant assigment, value unused
        // 7 0::glassesPanel
        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::ShadesPanel  */ 
        stack0 = this.$BgglassesPanel;
        // 7 0::selector
        //Possible type:7 0::ShadesPanel
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
            stack0 = stack0['selector'];
        } else {
            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
            stack0 = temp.$Bgselector;
            if (stack0 === undefined || typeof stack0 === 'function') {
                stack0 = temp.axGetProperty($names[0]);
            }
        }
        stack1 = 32;
        // 7 0::int
        temp = scope0.findScopeProperty($names[1], true, false);
        stack2 = temp.$Bgint;
        if (stack2 === undefined || typeof stack2 === 'function') {
            stack2 = temp.axGetProperty($names[1]);
        }
        stack3 = context.savedScope.global.object;
        // 7 0::Utils
        temp = scope0.findScopeProperty($names[2], true, false);
        stack4 = temp.$BgUtils;
        if (stack4 === undefined || typeof stack4 === 'function') {
            stack4 = temp.axGetProperty($names[2]);
        }
        // 7 0::SKIN_1
        //Possible type:7 0::Utils
        if (!(stack4 != undefined && stack4[AX_CLASS_SYMBOL])) {
            stack4 = stack4['SKIN_1'];
        } else {
            temp = stack4[AX_CLASS_SYMBOL] ? stack4 : sec.box(stack4);
            stack4 = temp.$BgSKIN_1;
            if (stack4 === undefined || typeof stack4 === 'function') {
                stack4 = temp.axGetProperty($names[3]);
            }
        }
//        stack5 = 6;// JIT: redundant assigment, value unused
        stack4 /= 6;
        stack2 = context.call(stack2, stack3, [stack4], scope0);
//        stack3 = 36;// JIT: redundant assigment, value unused
        stack2 *= 36;
        stack1 += stack2;
        // 7 0::y
        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
            stack0.y = stack1;
        } else {
            context.setproperty($names[5], stack1, stack0);
        }
        return;
    }
//# sourceURL=http://jit/states/LevelState/m_updateGlassesSelector.js
})