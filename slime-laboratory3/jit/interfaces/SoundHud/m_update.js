(function anonymous(context
) {
/*
	Index: 522
	Path:  interfaces/SoundHud::m_update
	Type:  Public
	Kind:  Method
	Super: Object
	Return: 7 0::void
*/

const AX_CLASS_SYMBOL = context.AX_CLASS_SYMBOL;
    return function compiled_m_update() {
        // Possible use a real "this"

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
                        // 7 0:game_utils::SaveManager
                        temp = scope0.findScopeProperty($names[0], true, false);
                        stack0 = temp.$BgSaveManager;
                        if (stack0 === undefined || typeof stack0 === 'function') {
                            stack0 = temp.axGetProperty($names[0]);
                        }
                        // 7 0::LocalData
                        //Possible type:7 0:game_utils::SaveManager
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['LocalData'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$BgLocalData;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[1]);
                            }
                        }
                        // 7 0::data
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['data'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgdata;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[2]);
                            }
                        }
                        // 9 {3, 1:interfaces:SoundHud, 0, 0:flash.display, 0:flash.events, 3, 0:interfaces, 2:interfaces, 0:http://adobe.com/AS3/2006/builtin, 5:interfaces:SoundHud}::skins
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])) {
                            stack0 = stack0['skins'];
                        } else {
                            temp = stack0[AX_CLASS_SYMBOL] ? stack0 : sec.box(stack0);
                            stack0 = temp.$Bgskins;
                            if (stack0 === undefined || typeof stack0 === 'function') {
                                stack0 = temp.axGetProperty($names[3]);
                            }
                        }
                        stack1 = 1;
                        if (!(1 < stack0)) { p = 32; continue; };
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesButton
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::GlassesButton  */ 
                        stack0 = this.$BgglassesButton;
//                        stack1 = true;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = true;
                        } else {
                            context.setproperty($names[4], true, stack0);
                        }
                        //JIT: Emit inline return
                        return;
                    case 32:
//                        stack0 = this;// JIT: redundant assigment, value unused
                        // 7 0::glassesButton
                        //Possible type:7 0::GlassesButton
                        /* We sure that this safe get, represented in TRAIT as Slot, type: 7 0::GlassesButton  */ 
                        stack0 = this.$BgglassesButton;
//                        stack1 = false;// JIT: redundant assigment, value unused
                        // 7 0::visible
                        if (!(stack0 != undefined && stack0[AX_CLASS_SYMBOL])){
                            stack0.visible = false;
                        } else {
                            context.setproperty($names[4], false, stack0);
                        }
                    case 40:
                        return;
                    }
                }
            }
//# sourceURL=http://jit/interfaces/SoundHud/m_update.js
})